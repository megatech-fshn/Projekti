# Durrës Map Center Fix

Updated the city map configuration so pressing the **Durrës** city button opens the map centered on Durrës city center instead of searching broadly for ONE Albania stores.

Changes made in `js/script.js`:
- Changed `Durres.cityMapQuery` to `Durrës city center, Albania`.
- Added `Durres.mapCenter` with center coordinates for Durrës.
- Added `Durres.mapZoom = 15` for a closer city-center view.

The existing `showCityOnMap("Durres")` flow now uses the centered embed URL automatically through `buildCityEmbedUrl()`.
