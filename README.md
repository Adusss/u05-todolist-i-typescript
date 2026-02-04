# Projektsammanfattning

Projektet är en enkel men funktionell applikation som har skapats med TypeScript, HTML och CSS. Användaren kan lägga till nya uppgifter, markera dem som slutförda, redigera tidigare skapade uppgifter, söka efter uppgifter med hjälp av ett filterfält samt ta bort enskilda uppgifter eller rensa hela listan på en gång. Uppgifterna sparas i localStorage, vilket gör att de inte försvinner när sidan uppdateras.

Projektet är uppdelat i flera delar. Uppgiftsdatan definieras i ett separat Todo-gränssnitt. Funktionerna som ansvarar för att spara och läsa data från localStorage finns i en separat fil, todoStorage.ts. Huvudfilen hanterar DOM-manipulation, rendering av listan och användarinteraktioner.

En styrka med projektet är användningen av TypeScript, eftersom det minskar risken för fel och gör koden mer lättläst. Tack vare tydlig filstruktur och enkla variabelnamn är koden relativt lätt att förstå.

En svaghet är att all renderingslogik finns samlad i en enda fil, vilket kan göra koden svårare att underhålla i ett större projekt. Användargränssnittet är enkelt men skulle kunna förbättras ytterligare.

Trots detta uppfyller projektet sina mål och visar en god förståelse för grunderna i TypeScript och webbprogrammering.


