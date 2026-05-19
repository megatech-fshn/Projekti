# Theme Switcher Position Fix

Updated the round System/White/Dark theme switcher so it stays fixed on screen at the bottom-left side.

## Changes

- Moved the switcher from the right side to the left side of the viewport.
- Set the bottom offset to about `2cm`, keeping the control visibly above the bottom edge.
- Added safe-area support for phones with notches/home indicators.
- Kept fallback `left`/`bottom` values for older browsers.
- Re-aligned the theme options menu so it opens upward from the left side and stays on-screen.
