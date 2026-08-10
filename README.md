# NOCTURNE v3

Diese Version enthält:
- Mobile-Fix gegen horizontales Scrollen
- eigenen Ordner `images/`
- zentrale Datei `collection.js`
- automatische Objektkarten
- eigene Detailseite pro Objekt
- mehrere Bilder pro Objekt
- Bildergalerie / Lightbox
- Suche und Kategorien
- QR-fähige URLs

## Bilder
Lege Bilder in `images/`.

Beispiel:
images/hunch-back-front.jpg

In `collection.js`:
images: [
  "images/hunch-back-front.jpg",
  "images/hunch-back-back.jpg"
]

## Neues Objekt
Nur in `collection.js` einen bestehenden Objektblock kopieren und anpassen.

## QR-Code
Jedes Objekt hat automatisch eine eigene URL:
object.html?id=hunch-back

Wenn deine GitHub-Pages-Adresse z.B.
https://DEINNAME.github.io/Private-Sammlung/
lautet, ist die Objekt-URL:
https://DEINNAME.github.io/Private-Sammlung/object.html?id=hunch-back
