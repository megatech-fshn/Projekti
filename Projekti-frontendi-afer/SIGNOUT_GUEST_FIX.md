# Guest Customer Service Sign-Out Fix

## Issue
The Customer Service page is accessible before logging in, but the sidebar still showed a `Sign Out` button. That made the UI look like the visitor was already logged in.

## Fix
- Sidebar sign-out buttons are now hidden by default in HTML.
- JavaScript now shows `Sign Out` only when `isLoggedIn()` is true.
- Guest users now see Login and Register actions in the sidebar instead.
- Sidebar user info is hidden for guests and restored for logged-in users.
- The existing Customer Service page stays public, so guests can still use support without registering first.

## Checks
- `node --check` passed for all JavaScript files.
- Local HTML asset/link references passed.
- CSS brace-balance check passed.
- Sidebar sign-out visibility check passed.
