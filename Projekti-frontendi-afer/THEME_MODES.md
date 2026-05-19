# Theme Modes Update

Added a three-option theme selector:

- White Mode: forces the light/white interface.
- Dark Mode: forces the dark interface.
- System Mode: follows the device/browser setting using `prefers-color-scheme`.

The preference is saved in `localStorage` under the existing `telecomTheme` key.
System Mode updates automatically if the user changes their device theme while the page is open.
