/*
  HIER VERWALTEST DU DEINE SAMMLUNG.
  Für ein neues Objekt einfach einen bestehenden {...}-Block kopieren und anpassen.
  Das ERSTE Bild ist automatisch das Titelbild.
*/

const COLLECTION = [
  {
    id: "hunch-back",
    name: "Hunch Back",
    category: "Kultur & Ethnografie",
    subtitle: "Diné Sandbild · vermutlich Ganaskidi",
    culture: "Diné (Navajo)",
    artist: "(?)",
    date: "Unbekannt",
    origin: "Südwesten der USA",
    material: "Farbiger Sand auf Trägerplatte",
    provenance: "Noch zu dokumentieren",

    images: [
      "images/hunch-back-front.jpg",
      "images/hunch-back-back.jpg",
      "images/hunch-back-signature.jpg"
    ],

    shortDescription:
      "Dauerhaftes Diné-Sandbild mit einer vermutlich als Ganaskidi beziehungsweise Hunchback Yei identifizierten Figur.",

    sections: [
      {
        title: "Ein Holy Being der Diné",
        text: `Ganaskidi gehört in den religiösen und kosmologischen Zusammenhang der Diné, eines indigenen Volkes des nordamerikanischen Südwestens. Viele Angehörige verwenden für sich selbst die Bezeichnung Diné – „das Volk“ beziehungsweise „die Menschen“.

Ein wichtiger Begriff der traditionellen Diné-Weltsicht ist Hózhó. Er umfasst Vorstellungen von Harmonie, Schönheit, Gleichgewicht und einem guten Verhältnis zwischen Mensch, Natur und spiritueller Welt.`
      },
      {
        title: "Der „Hunchback Yei“",
        text: `Die Bezeichnung auf der Rückseite, „Hunch Back“, ist ein starker Hinweis auf eine Hunchback-Yei-Darstellung. Das dargestellte Holy Being lässt sich wahrscheinlich als Ganaskidi einordnen.

Ganaskidi wird in historischen Beschreibungen mit Ernte, Samen, Überfluss sowie Nebel und Feuchtigkeit verbunden. Die auffällige Last beziehungsweise der „Buckel“ sollte deshalb nicht einfach als körperliche Missbildung verstanden werden.`
      },
      {
        title: "Sandbild",
        text: `Traditionelle Diné-Sandbilder sind zeremonielle und vergängliche Werke. Dauerhafte Sandbilder wurden später als eigenständige Kunstform für Sammler und den Kunsthandel hergestellt. Dabei können traditionelle Motive verändert oder vereinfacht dargestellt sein.`
      },
      {
        title: "Anmerkung zur Zuschreibung",
        text: `Die Identifizierung als Ganaskidi und die Lesung des Künstlernamens „K. J. Tsosie“ sind derzeit nicht zu 100% gesichert. Weitere Provenienz oder Dokumentation kann diese Einordnung künftig präzisieren.`
      }
    ],

    sources: [
      { label: "Smithsonian / National Museum of the American Indian", url: "https://americanindian.si.edu/" },
      { label: "Library of Congress", url: "https://www.loc.gov/" }
    ]
  },

  {
    id: "Schlüssel Suzuki SV650",
    name: "Schlüssel Suzuki SV650",
    category: "Technik & Motorsport",
    subtitle: "Platzhalter für dein nächstes Objekt",
    culture: "—",
    artist: "—",
    date: "—",
    origin: "—",
    material: "—",
    provenance: "—",
    images: ["images/objekt-02.jpg"],
    shortDescription: "Diesen Eintrag kannst du in collection.js einfach durch dein nächstes echtes Sammlungsobjekt ersetzen.",
    sections: [
      { title: "Geschichte", text: "Hier kommt die Geschichte des Objekts hinein." }
    ],
    sources: []
  }
];
