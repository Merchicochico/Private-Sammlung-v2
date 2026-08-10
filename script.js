const grid = document.getElementById("collectionGrid");
const search = document.getElementById("search");
const filters = document.getElementById("filters");
const empty = document.getElementById("empty");

const categories = ["Alle", ...new Set(COLLECTION.map(x => x.category))];
let active = "Alle";

function safe(s){ return String(s ?? ""); }

function renderFilters(){
  filters.innerHTML = categories.map(c =>
    `<button class="filter ${c===active?"active":""}" data-category="${c}">${c}</button>`
  ).join("");
  filters.querySelectorAll("button").forEach(btn => {
    btn.onclick = () => {
      active = btn.dataset.category;
      renderFilters();
      render();
    };
  });
}

function card(o, i){
  return `
  <article class="card">
    <a class="card-hit" href="object.html?id=${encodeURIComponent(o.id)}" aria-label="${safe(o.name)} öffnen"></a>
    <div class="card-image">
      <img src="${o.images?.[0] || ""}" alt="${safe(o.name)}"
           onerror="this.style.display='none';this.nextElementSibling.style.display='grid'">
      <div class="image-fallback">FOTO IN /IMAGES EINFÜGEN</div>
      <span class="number">${String(i+1).padStart(2,"0")}</span>
    </div>
    <div class="card-copy">
      <small>${safe(o.category)}</small>
      <h3>${safe(o.name)}</h3>
      <p>${safe(o.shortDescription)}</p>
      <div class="open">Objekt ansehen <b>↗</b></div>
    </div>
  </article>`;
}

function render(){
  const q = search.value.trim().toLowerCase();
  const items = COLLECTION.filter(o => {
    const hay = JSON.stringify(o).toLowerCase();
    return (active==="Alle" || o.category===active) && (!q || hay.includes(q));
  });
  grid.innerHTML = items.map(card).join("");
  empty.hidden = items.length !== 0;
}

search.addEventListener("input", render);
renderFilters();
render();
