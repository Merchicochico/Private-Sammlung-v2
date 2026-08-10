const params = new URLSearchParams(location.search);
const id = params.get("id");
const o = COLLECTION.find(x => x.id === id);
const page = document.getElementById("objectPage");

function esc(s){return String(s??"");}
function paragraphs(text){
  return esc(text).split(/\n\s*\n/).map(p=>`<p>${p.replace(/\n/g,"<br>")}</p>`).join("");
}

if(!o){
  page.innerHTML = `<section class="not-found"><p class="eyebrow">404</p><h1>Objekt nicht gefunden.</h1><a class="pill" href="index.html">Zur Sammlung</a></section>`;
}else{
  document.title = `${o.name} — NOCTURNE`;
  const facts = [
    ["Kultur / Typ",o.culture],
    ["Künstler / Hersteller",o.artist],
    ["Datierung",o.date],
    ["Herkunft",o.origin],
    ["Material",o.material],
    ["Provenienz",o.provenance]
  ];

  page.innerHTML = `
    <section class="object-hero">
      <div>
        <p class="eyebrow">${esc(o.category)}</p>
        <h1>${esc(o.name)}</h1>
        <p class="object-sub">${esc(o.subtitle)}</p>
      </div>
      <p class="object-lead">${esc(o.shortDescription)}</p>
    </section>

    <section class="gallery">
      ${(o.images||[]).map((src,i)=>`
        <button class="gallery-item" data-index="${i}">
          <img src="${src}" alt="${esc(o.name)} – Bild ${i+1}"
            onerror="this.style.display='none';this.nextElementSibling.style.display='grid'">
          <span class="image-fallback">BILD ${i+1}<br><small>${src}</small></span>
        </button>`).join("")}
    </section>

    <section class="facts">
      ${facts.map(f=>`<div><small>${f[0]}</small><strong>${esc(f[1])}</strong></div>`).join("")}
    </section>

    <section class="story">
      ${(o.sections||[]).map(s=>`
        <article>
          <h2>${esc(s.title)}</h2>
          <div>${paragraphs(s.text)}</div>
        </article>`).join("")}
    </section>

    ${(o.sources||[]).length ? `
    <section class="sources">
      <p class="eyebrow">QUELLEN & WEITERFÜHREND</p>
      ${(o.sources||[]).map(s=>`<a href="${s.url}" target="_blank" rel="noopener">${esc(s.label)} ↗</a>`).join("")}
    </section>` : ""}
  `;

  const lightbox=document.getElementById("lightbox");
  const lbImg=document.getElementById("lightboxImage");
  let current=0;
  function show(n){
    if(!o.images?.length) return;
    current=(n+o.images.length)%o.images.length;
    lbImg.src=o.images[current];
    lightbox.hidden=false;
    document.body.classList.add("locked");
  }
  document.querySelectorAll(".gallery-item").forEach(b=>b.onclick=()=>show(+b.dataset.index));
  document.getElementById("lightboxClose").onclick=()=>{lightbox.hidden=true;document.body.classList.remove("locked")};
  document.getElementById("prevImage").onclick=()=>show(current-1);
  document.getElementById("nextImage").onclick=()=>show(current+1);
  lightbox.onclick=e=>{if(e.target===lightbox){lightbox.hidden=true;document.body.classList.remove("locked")}};
}
