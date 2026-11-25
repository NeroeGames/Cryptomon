CRYPTOMON — CAPTURE SIMULATOR / FIELD TRIAL 01

INSTALL
1. Install the World Atlas and Feral Phenomenon updates first.
2. Copy capture.html and app.js into the website root (beside index.html). Replace app.js when prompted. The supplied app.js is based on the Feral Phenomenon version, preserving those chapters and the lore/index improvements. If you have edited app.js yourself, back it up before replacing it; alternatively copy only capture.html and link to it manually.
3. Open Capture Trial in the top bar, Field Index, Crypto-Camera chapter, or Jaks entry.

PLAY
Move the mouse to aim; click or press Space to expose. Arrow keys also move the viewfinder. On touchscreens, drag the viewfinder and tap SHUTTER. There are five exposures. 80% or higher secures the official Jaks cryptograph; five failed shots ends the encounter. The actual photo and scoring breakdown are shown after each exposure.

DESIGN
The prototype uses existing Jaks hero art and cryptograph embedded in capture.html, a procedurally drawn desert, and a randomized hide/peek/expose/hop behavior. Score = visible fraction inside frame × (0.12 + 0.88 × sharpness) × framing factor × 100, rounded. Sharpness depends on subject and camera motion. The best successful score is saved locally if browser storage is available. This does not lock existing compendium entries or sync to other devices.

No other website files or assets need replacement. No server, external libraries or internet connection are required for the simulator itself.
