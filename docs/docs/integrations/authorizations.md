# API Anbindung für Drittanbieter

Sie können den [OAuth Autorisierungscode-Flow](https://auth0.com/docs/get-started/authentication-and-authorization-flow/authorization-code-flow/call-your-api-using-the-authorization-code-flow) über unseren Authentifizierungsanbieter Auth0 verwenden, um Zugriff auf unsere API zu erhalten. Die ist für Drittanbieter welche Ihren Kunden Zugriff auf unsere Gerätedaten ermöglichen wollen. 

### Voraussetzungen

1. Ihre Weiterleitungs-URL ist bei uns registriert (wenden Sie sich an [support@zaehlerfreunde.com](mailto:support@zaehlerfreunde.com))
2. Wir haben Ihnen eine Client-ID zur Verfügung gestellt

### Schritt 1: Benutzer zur Autorisierungs-URL weiterleiten

Ersetzen Sie die Parameter `client_id` und `redirect_uri` und leiten Sie den Benutzer zur Autorisierungs-URL weiter, damit er Zugriff auf sein Konto gewähren kann.

```jsx
https://auth.prod.zaehlerfreunde.com/authorize?response_type=code&client_id={client_id}&redirect_uri={your_redirect_url}&scope=openid profile email offline_access&audience=https://api.prod.zaehlerfreunde.com
```

Bei erfolgreicher Authentifizierung wird der Benutzer zu der von Ihnen angegebenen URL mit einem `code`-Abfrageparameter weitergeleitet, den Sie verwenden können, um ein Zugriffstoken zu erhalten.

### Schritt 2: Zugriffstoken erhalten

Senden Sie eine Anfrage an die Token-URL mit dem Code, den Sie erhalten haben, um ein Zugriffs- und ein Aktualisierungstoken zu erhalten.

```bash
curl --location 'https://zaehlerfreunde-prod.eu.auth0.com/oauth/token' \
--header 'Content-Type: application/json' \
--data '{
    "grant_type": "authorization_code",
    "client_id": "{client_id}",
    "code": "{code}",
    "redirect_uri": "{your_redirect_url}"
}'
```

Die Antwort sollte ein Zugriffstoken enthalten, mit dem Sie unsere [API-Endpunkte](https://external.prod.zaehlerfreunde.com/partner/swagger/index.html) aufrufen können. Das Aktualisierungstoken kann verwendet werden, um ein neues Zugriffstoken zu erhalten, nachdem es abgelaufen ist.

### Schritt 3: Token aktualisieren

Um ein Aktualisierungstoken zu erhalten, senden Sie eine Anfrage mit dem Grant-Typ `refresh_token` an den Token-Endpunkt.

```bash
curl --location 'https://zaehlerfreunde-prod.eu.auth0.com/oauth/token' \
--header 'Content-Type: application/json' \
--data '{
    "grant_type": "refresh_token",
    "client_id": "{client_id}",
    "refresh_token": "{refresh_token}"
}'
```