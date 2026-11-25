CRYPTOMON COMPENDIUM — WORLD ATLAS UPDATE

INSTALL
1. Back up your current site ZIP or website folder.
2. Open this small update ZIP and copy its five website files into the root of your existing website (the same folder as index.html and catalog.js). If editing an archive, copy them into that same directory inside the archive; do not nest the update in another folder.
3. Replace app.js when prompted. It includes the previous Lore & Field Index update, so the enhanced descriptions and collapsible sections remain intact.
4. Open index.html and select World Atlas in the top bar, or use Chapter IV in the Field Index. If the site is hosted, upload the five files to the same directory and hard-refresh (Ctrl+F5).

FILES
app.js           Shared navigation + previous lore/index update
atlas.html       World Atlas page, including offline world map geometry
atlas.css        Atlas-specific styling
atlas-data.js    Editable folklore associations, origin notes and habitats
atlas.js         Region/hotspot selection, filters and catalog integration

FEATURES
142 forms across 60 Fabled families; 29 mapped hotspots in 5 populated geographic regions, plus worldwide/unplaced traditions and an empty Oceania region for future additions. Click a regional marker or tab, then a numbered hotspot or its corresponding button. Filter by stage, affinity or search term. Open any creature's existing field record from its card. Mythic and Feral forms share their Fabled family's geographic association. The atlas reads catalog.js directly, so new catalog entries appear automatically; add a family mapping in atlas-data.js to assign a new geographic origin.

The map is an editorial guide to folklore inspiration, not a record of verified cryptid sightings. Broad associations use approximate representative locations, and legends without a clear regional association are kept under Worldwide / unplaced. The base map uses public-domain Natural Earth 1:110m geography. No map service, API key, or new artwork is required. Existing site fonts may still use the original external font stylesheet.

COMPATIBILITY & CHECKS
Built against the last complete 142-entry website archive and the previous Lore & Field Index update. No catalog.js, style.css, individual entry pages or artwork are replaced. The five files were checked in a Chromium DOM for map selection, stage/affinity/search filters, all 142 records, mobile layout, Field Index and link targets. Direct browser navigation was blocked by the testing environment, so live page-to-page navigation and deployment were not tested. If you have made manual edits to app.js since the last update, back up that file before replacing it.
