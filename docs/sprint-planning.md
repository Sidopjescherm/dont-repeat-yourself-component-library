# Don't Repeat Yourself - Component Library

## Sprint Planning

Project en werkzaamheden plannen met je team.

### Aanpak

In [Sprint 14: Lose Your Head](https://github.com/fdnd-task/lose-your-head-the-client-case) ben je begonnen met het ontwerpen en maken van een opdracht voor een opdrachtgever met een framework en headless CMS. Daarbij stond het framework (Sveltekit) en het headless CMS (Directus) vast. In [Sprint 15: Choices, Choices](https://github.com/fdnd-task/choices-choices-the-tech-stack) heb je met je team verder gewerkt aan het project. Jullie site staat gepubliceerd op Netlify en is bereikbaar via een dev-link. Beoogde pagina’s zijn uitgewerkt en bereikbaar via de navigatie of interne links én jullie site is mobile-first, responsive en accessible. Ook is jullie website getest en zijn testresultaten navolgbaar verwerkt.

Deze sprint werken jullie verder aan de structuur van de site door ieder tenminste een component volgens de RAPPE principes in detail te ontwerpen en ontwikkelen. Je gebruikt daarbij container queries (the new responsive) om alle uitingen, dat wil zeggen verschillende manieren van verschijnen, van jouw component in CSS uit te werken.


retrospective insights > sprint-planning
afspraken mentoring dag

### Teamwerk

Het is de bedoeling dat je aan het einde van deze sprint met je team een nette component-library hebt ingericht waarmee veel van de nodige functionaliteit van je project is uitgewerkt. Hiervoor moet misschien je manier van denken een beetje veranderen: In plaats van denken in termen van pagina’s ga je denken in termen van herbruikbare stukken code. Het voordeel is dat je jezelf minder hoeft te herhalen.

Een goede vuistregel is: zodra je merkt dat je een stuk HTML/ CSS of JS herhaalt of zelfs copy-paste op verschillende plekken in je website, kan je in principe beter een component maken en dat herhaaldelijk aanroepen.

De kunst is om componenten zo breed mogelijk inzetbaar te maken. Door attributen te gebruiken kan je andere content meegeven waardoor een component op meerdere plaatsen ingezet kan worden. Als je bijvoorbeeld meerdere icoontjes gebruikt op je site zou je een component `Icon.svelte` kunnen maken waarin op basis van een `type` attribuut door middel van beslissingsstructuren de juiste afbeelding getoond wordt.

Door met elkaar, per user-story de componenten in een web-project te identificeren stem je af hoe de site wordt opgebouwd, dit zorgt voor een goede afstemming binnen het team. De namen voor componenten kan je als subtaak bij de user-story opnemen.

#### Sprintplanning

Lees de de instructies van de workshops van vandaag goed door en bekijk het programma van Sprint 16 - DRY! Verwerk de feedback van de Sprint Review van sprint 15, maak issues van de taken waar je mee aan de slag wil deze sprint. Teken een schema op het whiteboard voor de komende drie weken en neem belangrijke teamresultaten op. Bijvoorbeeld wanneer een user-story af moet zijn en wie dit gaat doen. Doe een [sprintplanning](https://github.com/fdnd-task/lose-your-head-the-client-case/blob/main/docs/projectinrichting.md#2-sprint-planning) op basis van de verzamelde informatie.

**N.B.:** aan het eind van de sprintplanning staan alle user-stories, componenten en andere taken die deze sprint opgepakt worden klaar in de ToDo kolom, en is er *commitment* op gegeven door het hele team.

### Individueel werk



### 💪 Extra uitdagingen

Als je je verveelt mag je natuurlijk meerdere componenten uitwerken. Zorg er in ieder geval voor dat al je werk voldoet aan de RAPPE principes!

### ✒️ Leervragen

Zet de antwoorden in je learning journal:
- Hoe kom je met elkaar tot een verdeling van componenten?
- Hoe heb je ervoor gezorgd dat je met je team weet welke stappen jullie de rest van de sprint nemen?
