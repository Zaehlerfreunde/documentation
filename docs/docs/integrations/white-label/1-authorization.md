# Authentifizierungstoken erwerben

Zur Authentifizierung von API-Anfragen verwenden wir den [OAuth Client Credentials Flow](https://auth0.com/docs/get-started/authentication-and-authorization-flow/client-credentials-flow). 

## Client ID & Secret erstellen

Als ersten Schritt müssen Sie sich mit Ihrem Administratorkonto auf unserer Plattform anmelden (kontaktieren Sie uns, falls Sie noch kein Administratorkonto haben). Sie können die Client-Anmeldeinformationen wie in der folgenden Abbildung gezeigt erstellen. Bitte stellen Sie sicher, dass Sie das Client-Geheimnis an einem sicheren Ort aufbewahren, da Sie es nicht wieder sehen können.

![Schritte zum Erstellen von Client-Anmeldeinformationen im Admin-Portal](/img/integrations/api-integrations/client_creds.png)

Schritte zum Erstellen von Client-Anmeldeinformationen im Admin-Portal

## Access token abfragen

Jetzt können wir ein Zugriffstoken mit dem Endpunkt `/auth/token` erstellen. Die Antwort enthält das Zugriffstoken. Verwenden Sie dieses Zugriffstoken im `Authorization`-Header, um die anderen Endpunkte der API aufzurufen. Beachten Sie, dass das Token einen Tag lang gültig ist. Wenn das Token abgelaufen ist, können Sie einfach ein neues mit demselben Endpunkt erstellen.

```jsx
curl -X 'POST' \
  'https://external.prod.zaehlerfreunde.com/partner/auth/token' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "clientId": "YOUR_CLIENT_ID",
  "clientSecret": "YOUR_CLIENT_SECRET"
}'
```