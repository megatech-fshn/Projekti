# Unified Login/Register Update

## What changed
- Login and Register now live in the same auth card/page with tabs.
- The old separate homepage login popover behavior was disabled.
- Homepage Login and Register links now open the same page with the correct tab selected:
  - `login.html#login`
  - `login.html#register`
- `register.html` remains available for compatibility, but it uses the same unified auth UI.
- Forgot/reset password return links now point back to the login tab.

## Checks run
- JavaScript syntax check for all files in `js/`.
- Local HTML/CSS asset reference check.
- HTML label target check.
- CSS brace balance check.
