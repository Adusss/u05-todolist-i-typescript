# Projektsammanfattning

Projektet är en enkel men funktionell applikation som har skapats med TypeScript, HTML och CSS. Användaren kan lägga till nya uppgifter, markera dem som slutförda, redigera tidigare skapade uppgifter, söka efter uppgifter med hjälp av ett filterfält samt ta bort enskilda uppgifter eller rensa hela listan på en gång. Uppgifterna sparas i localStorage, vilket gör att de inte försvinner när sidan uppdateras.

Projektet är uppdelat i flera delar. Uppgiftsdatan definieras i ett separat Todo-gränssnitt. Funktionerna som ansvarar för att spara och läsa data från localStorage finns i en separat fil, todoStorage.ts. Huvudfilen hanterar DOM-manipulation, rendering av listan och användarinteraktioner.

En styrka med projektet är användningen av TypeScript, eftersom det minskar risken för fel och gör koden mer lättläst. Tack vare tydlig filstruktur och enkla variabelnamn är koden relativt lätt att förstå.

En svaghet är att all renderingslogik finns samlad i en enda fil, vilket kan göra koden svårare att underhålla i ett större projekt. Användargränssnittet är enkelt men skulle kunna förbättras ytterligare.

Trots detta uppfyller projektet sina mål och visar en god förståelse för grunderna i TypeScript och webbprogrammering.

# Teoretiska frågor

**Vad är TypeScript och varför använder man det istället för vanlig JavaScript?**

TypeScript är en utökning av JavaScript som lägger till statisk typning. Dess huvudsakliga syfte är att upptäcka fel redan när koden skrivs, istället för först när programmet körs.
TypeScript används ofta eftersom det gör koden mer strukturerad och lättare att läsa, särskilt i större projekt.

**Förklara skillnaden mellan `unknown`, `any` och en specifik typ som `string`. När bör man använda de olika typerna?**

Typen `any` innebär att en variabel kan innehålla vilket värde som helst. TypeScript utför då ingen typkontroll, vilket gör att risken för fel ökar. `any` kan vara användbart i vissa situationer, men bör generellt undvikas.
Typen `unknown` är ett säkrare alternativ till `any`. Den tillåter lagring av vilket värde som helst, men kräver att typen kontrolleras innan värdet används.
En specifik typ, till exempel `string`, innebär att en variabel endast kan innehålla data av den typen. Detta är den säkraste lösningen när datatypen är känd.

**Vad är syftet med att använda types/interfaces i TypeScript? Varför är de viktiga när man bygger större projekt?**

Typer och gränssnitt används för att definiera hur data ska se ut i applikationen. I detta projekt anger Todo-gränssnittet att varje uppgift måste innehålla id, text och completed, vilket säkerställer datakonsistens.

I större projekt är typer och gränssnitt viktiga eftersom de förbättrar kodens läsbarhet, minskar antalet fel och underlättar vidareutveckling och underhåll. De fungerar även som dokumentation och är viktiga vid samarbete i team.
