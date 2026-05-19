# Forgot Password Single Notice Fix

U rregullua forma `forgot-password.html` që kontrolli i email-it të shfaqë vetëm një njoftim të vetëm.

## Ndryshime
- U zëvendësuan dy alert-e të ndara me një element të vetëm `forgotFeedbackMessage`.
- U hoq njoftimi shtesë `toast` për email joekzistues.
- U hoq gabimi i dytë inline poshtë input-it për email joekzistues.
- Tani, kur email-i nuk ekziston, shfaqet vetëm një mesazh:
  `Ky email nuk ekziston në sistem. Kontrollo email-in ose krijo një llogari të re.`

## Sjellja
- Email joekzistues: shfaq vetëm një njoftim gabimi dhe nuk vazhdon te reset password.
- Email ekzistues: shfaq vetëm një njoftim suksesi dhe vazhdon te `reset-password.html`.
