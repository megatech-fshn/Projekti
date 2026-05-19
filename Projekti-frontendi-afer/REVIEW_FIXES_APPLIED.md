# Review Fixes Applied

This pass reviewed the static Telecom Albania frontend and applied targeted stability/accessibility fixes without changing the project structure.

## Changes

- Added explicit `type="button"` to non-submit buttons on the homepage city selector and invoice print action.
- Updated payment-card brand detection to work from prefixes instead of only full card-number regex matches. This lets AmEx and other card-specific formatting/CVV expectations update while the user is typing.
- Hardened the free-plan confirmation modal so cancel/reopen cycles cannot stack duplicate event listeners and trigger repeated remove-plan actions.

## Checks run

- `node --check` on all JavaScript files.
- Static HTML check for duplicate/missing label targets and buttons without explicit type.
- Static check for missing local `src`/`href` references.
- CSS brace-balance check on all CSS files.
- Focused function test for card brand detection, Luhn validation, and AmEx formatting.

## Note

The project remains a static demo frontend using browser storage for demo users, auth, and data. Production use still requires a real backend with secure authentication, server-side authorization, and hashed passwords.
