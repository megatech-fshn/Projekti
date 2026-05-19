# Forgot Password Email Check Fix

Applied update:

- The forgot-password form now checks whether the entered email exists in the local users list.
- If the email does not exist, the customer sees a clear error notification: `Ky email nuk ekziston në sistem.`
- The reset session flags are cleared for nonexistent emails, so the customer cannot continue to reset-password accidentally.
- Existing emails still continue to `reset-password.html` as before.

Checked:

- JavaScript syntax check passed.
- Local HTML asset references passed.
- CSS brace-balance check passed.
- ZIP integrity check passed.
