## **Intersection Observer API**

De Intersection Observer API is een krachtige JavaScript-API die is ontworpen om de zichtbaarheid van elementen in een HTML-document te bewaken terwijl de gebruiker naar beneden scrolt. Hier zijn enkele belangrijke aspecten en gebruiksscenario's van de Intersection Observer API:
<br>

1.  **_Detecteren van elementen in het zicht:_**

De belangrijkste taak van de Intersection Observer API is het detecteren wanneer een bepaald element in het zicht van de gebruiker komt (d.w.z. binnen het zichtbare deel van het scherm) of uit het zicht verdwijnt. Dit maakt het mogelijk om acties uit te voeren op basis van het scrollgedrag van de gebruiker.

![browser viewport voorbeeld](https://hackernoon.imgix.net/images/leEx3mHDrBYxZrl9s2kuP5yLRXj1-fy43348l.jpeg)

<br>
    
3.  ***Configuratie-opties:***

Bij het maken van een Intersection Observer-object kun je verschillende configuratie-opties opgeven, zoals `root`, `rootMargin`, en `threshold`:

- `root`: Het element dat als viewport wordt gebruikt voor het controleren van de zichtbaarheid. Als je `null` opgeeft, wordt het hele document gebruikt.
- `rootMargin`: Een marge rondom het `root`-element waarbinnen de intersecties worden gecontroleerd.
- `threshold`: Een drempelwaarde (0.0 - 1.0) die aangeeft hoeveel van het doelelement zichtbaar moet zijn voordat de intersectie wordt geregistreerd.

Stel je voor dat je een webpagina hebt met een lijst van afbeeldingen die je wilt laden wanneer ze in het zicht van de gebruiker komen (lazy loading van afbeeldingen). Je wilt echter dat een afbeelding als "zichtbaar" wordt beschouwd zodra minstens 50% van de afbeelding zichtbaar is in het viewport van de gebruiker.

Hier is hoe je de Intersection Observer zou configureren met behulp van de `root`, `rootMargin`, en `threshold` opties:

    const options = {
      root: null, // Gebruik het hele document als viewport (het standaardgedrag)
      rootMargin: '0px', // Geen extra marge rondom het viewport
      threshold: 0.5, // Meld een intersectie wanneer 50% van het doelelement zichtbaar is
    };

    // Callback-functie die wordt uitgevoerd wanneer een intersectie wordt gedetecteerd
    function handleIntersection(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Het doelelement is minstens 50% zichtbaar
          loadLazyImage(entry.target);
          observer.unobserve(entry.target); // Stop het observeren van dit element nadat het is geladen
        }
      });
    }

    // Maak een Intersection Observer met de bovenstaande configuratie
    const observer = new IntersectionObserver(handleIntersection, options);

    // Voeg de doelelementen toe die je wilt observeren
    const lazyImages = document.querySelectorAll('.lazy-image');
    lazyImages.forEach(image => {
      observer.observe(image); // Start het observeren van elk doelelement
    });

In dit voorbeeld:

- We hebben `root` ingesteld op `null`, wat betekent dat het hele document als viewport wordt gebruikt. Als je een specifiek element zou opgeven, zou dat element als viewport dienen voor de intersectiecontrole.
- `rootMargin` is ingesteld op '0px', wat betekent dat er geen extra marge rondom het viewport is. Je kunt dit aanpassen om de intersectiecontrole aan te passen aan je behoeften.
- `threshold` is ingesteld op 0.5, wat betekent dat een intersectie wordt gemeld wanneer minstens 50% van het doelelement zichtbaar is in het viewport van de gebruiker.
- De `handleIntersection` callback-functie wordt uitgevoerd wanneer een intersectie wordt gedetecteerd. In ons geval laadt deze functie de luie afbeelding en stopt het observeren van het element nadat het is geladen.
- We maken een Intersection Observer-object en voegen elk doelelement toe dat we willen observeren met behulp van `observer.observe(element)`.
  <br>

3.  **_Callback-functie:_**

Bij het maken van een Intersection Observer wordt een callback-functie opgegeven. Deze functie wordt uitgevoerd telkens wanneer een element de opgegeven drempelwaarde overschrijdt (of deze onderschrijdt) in termen van zichtbaarheid.

Voorbeeld:

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Element is in het zicht
          entry.target.classList.add('visible');
        } else {
          // Element is uit het zicht
          entry.target.classList.remove('visible');
        }
      });
    }, options);

<br>

4.  **_Toepassingen:_**

De Intersection Observer API wordt vaak gebruikt voor verschillende doeleinden, waaronder:

- Lazy loading van afbeeldingen: Laad afbeeldingen pas wanneer ze in het zicht van de gebruiker komen om de paginalaadtijd te verbeteren.
- Infinite scrolling: Laad dynamisch meer inhoud wanneer de gebruiker naar beneden scrolt.
- Tracking van advertentieweergaven: Meet hoe vaak advertenties in het zicht van gebruikers verschijnen.
- Animaties: Activeer animaties wanneer elementen zichtbaar worden.

<br>

## Codevoorbeeld

**HTML**:

    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="style.css" />
        <title>Reveal Content on scroll</title>
      </head>
      <body>
        <section class="section-1">
          <h2>Section 1</h2>
        </section>
        <section class="section-2">
          <img class="img" src="image.jpg" />
        </section>
        <section class="section-3">
          <h2>Section 3</h2>
        </section>

        <script src="script.js"></script>
      </body>
    </html>

<br>

**Javascript**:

    "use strict";

    const section = document.querySelector(".section-2");
    const imgContent = document.querySelector(".img");

    const objOptions = {
      root: null,
      threshold: 0.3,
      rootMargin: "-100px",
    };

    const sectionObserver = new IntersectionObserver(callBackFunction, objOptions);
    sectionObserver.observe(section);

    function callBackFunction(entries) {
      const [entry] = entries;
      console.log(entry);
      if (entry.isIntersecting) {
        imgContent.classList.remove("hidden");
      } else {
        imgContent.classList.add("hidden");
      }
    }

<br>

**Resultaat**:

➡ https://revealimageonscroll.netlify.app/?ref=hackernoon.com
<br>

## Andere voorbeelden

- https://codepen.io/ryanfinni/pen/VwZeGxN
- https://codepen.io/ryanfinni/pen/jONBEdX
- https://codepen.io/ryanfinni/pen/aboBvje

<br>

## Bronnen

> Uitleg:
> https://hackernoon.com/a-beginners-guide-to-javascripts-the-intersection-observer-api-j8s32rb<br>
> Code:
> https://github.com/DaveyHert/Intersection-Observer?ref=hackernoon.com<br>
> Video:
> https://revealimageonscroll.netlify.app/?ref=hackernoon.com<br>
> Extra voorbeelden:
> https://medium.com/@ryanfinni/the-intersection-observer-api-practical-examples-7844dfa429e9
