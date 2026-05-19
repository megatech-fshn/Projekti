# Theme Switcher Scroll Fix

Fixed the round System / White / Dark theme switcher so it stays attached to the viewport while scrolling.

## Cause

`css/visual-upgrade.css` had a broad rule for direct children of `body`:

```css
body > *:not(.tc-visual-orbs):not(.tc-page-transition):not(.tc-visual-loader)
```

Because that stylesheet loads after `css/style.css`, it overrode `.theme-switcher { position: fixed; }` with `position: relative;`, so the switcher behaved like it was placed at the bottom of the page instead of staying on screen.

## Fix

- Excluded `.theme-switcher` from the broad body-child rule.
- Added a late safeguard rule with `position: fixed !important`.
- Added a small JavaScript safeguard that reapplies fixed viewport positioning on resize/orientation changes.
- Kept the switcher on the left side, about 2cm above the bottom of the screen.
