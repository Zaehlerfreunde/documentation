# Zählerfreunde API-Integration

Die Zählerfreunde-API ermöglicht es Partnern, Benutzer-, Raum- und Geräteinformationen automatisch zu verwalten, um neue Benutzer aufzunehmen, bestehende zu verwalten und Zähler sowie andere Geräte hinzuzufügen oder zu entfernen.

Die offizielle Swagger-Dokumentation können Sie hier einsehen: [https://external.prod.zaehlerfreunde.com/partner/swagger/index.html](https://external.prod.zaehlerfreunde.com/partner/swagger/index.html)

Die folgende Anleitung gibt einen Überblick über den Standardprozess beim Onboarding neuer Benutzer. Die Schritte können jedoch leicht angepasst werden, um sie an Ihre bestehenden Prozesse/Tools anzupassen. Die Schritte zum Onboarding eines neuen Benutzers sind die folgenden.

### Authentifizierungstoken erwerben

Zur Authentifizierung von API-Anfragen verwenden wir den [OAuth Client Credentials Flow](https://auth0.com/docs/get-started/authentication-and-authorization-flow/client-credentials-flow). Als ersten Schritt müssen Sie sich mit Ihrem Administratorkonto auf unserer Plattform anmelden (kontaktieren Sie uns, falls Sie noch kein Administratorkonto haben). Sie können die Client-Anmeldeinformationen wie in der folgenden Abbildung gezeigt erstellen. Bitte stellen Sie sicher, dass Sie das Client-Geheimnis an einem sicheren Ort aufbewahren, da Sie es nicht wieder sehen können.

![Schritte zum Erstellen von Client-Anmeldeinformationen im Admin-Portal](/img/integrations/api-integrations/client_creds.png)

Schritte zum Erstellen von Client-Anmeldeinformationen im Admin-Portal

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

### Einen neuen Space erstellen

Spaces sind die zentrale Einheit, über die Benutzer auf ihre Zähler zugreifen. Sie entsprechen in der Regel einem Haus, einer Wohnung oder einer MeLo/MaLo. Ein Space kann mit der folgenden Anfrage erstellt werden. Sie gibt eine Space-ID zurück, die verwendet werden kann, um Geräte hinzuzufügen und Benutzer einzuladen.

```jsx
curl -X 'POST' \
  'https://external.prod.zaehlerfreunde.com/partner/spaces' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "addressLineOne": "string",
  "addressLineTwo": "string",
  "category": "HOTEL",
  "city": "string",
  "name": "string",
  "parentSpaceId": "string",
  "postcode": "string"
}'
```

### Einen neuen Zähler hinzufügen

Beim Hinzufügen eines Zählers gibt es mehrere Optionen, je nachdem, wie die Daten übertragen werden. Wir unterscheiden zwischen externen Geräten, bei denen Daten an unsere API gesendet werden, und anderen Geräten, bei denen wir die Daten kontinuierlich von einer anderen API abrufen. Für die letztere Option kann auch MSCONS zur Datenübertragung verwendet werden. Für diese Geräte müssen wir die erforderlichen Entwicklungsschritte besprechen, um Ihre API als Datenquelle zu unterstützen.

Wenn Sie die Zählerstände an unsere API senden möchten, können Sie die folgende Anfrage verwenden, um ein Gerät zu einem Space hinzuzufügen.

```jsx
curl -X 'POST' \
  'https://external.prod.zaehlerfreunde.com/partner/spaces/5c2f0976-7afc-4d14-a6d5-99d3ae838780/devices' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "deviceMedium": "ELECTRICITY",
  "deviceName": "Test Device",
  "deviceType": "SMART_METER",
  "isMainDevice": true, // Whether this is the main device for a space
  "externalDeviceId": "your internal device id (e.g. MeLo)",
}'
```

Um Daten zu senden, können Sie dann den folgenden Endpunkt aufrufen. Sie können entweder Ihre externe Geräte-ID oder die nach der Erstellung zurückgegebene Geräte-ID angeben.

```jsx
curl -X 'POST' \
  'https://external.prod.zaehlerfreunde.com/partner/devices/readings' \
  -H 'accept: */*' \
  -H 'Content-Type: application/json' \
  -d '[
  {
    "externalDeviceId": "123456789ABCD",
    "readings": [
      {
        "obisCode": "1.8.0",
        "timestamp": 1714635961,
        "value": 10.5
      }
    ]
  }
]'
```

### Einen Benutzer einladen

Um sicherzustellen, dass Benutzer Zugriff auf einen Space haben, können Sie eine Einladung dafür erstellen. Diese Einladung ermöglicht es einem Benutzer, auf einen bestimmten Space zuzugreifen. Beachten Sie, dass er sich separat anmelden muss, z.B. über SSO. Um eine Einladung zu erstellen, senden Sie die folgende Anfrage. Die Anfrage gibt den Einladungslink zurück. Entweder senden wir die E-Mail direkt an den Benutzer, wenn `sendInviteEmail` auf true gesetzt ist. Andernfalls können Sie den Link auch separat an den Benutzer senden.

```jsx
curl -X 'POST' \
  'https://external.prod.zaehlerfreunde.com/partner/spaces/5c2f0976-7afc-4d14-a6d5-99d3ae838780/invites' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer test' \
  -H 'Content-Type: application/json' \
  -d '{
  "sendInviteEmail": true,
  "userEmail": "string"
}'
```