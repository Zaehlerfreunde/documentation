# Stammdaten übertragen

Um Ihre Kunden Daten zu übertragen könnnen Sie die beiden Endpunkte `/customers` und `customers/:customerId/contracts`. Die Idee ist, dass Sie Kunden aus und Verträge aus Ihrem ERP System ein direktes Mapping mit unserem System haben. Wichtig sind hierbei die `external_id` Werte, welche mit IDs aus Ihrem System übereinstimmen sollten. Dies hat den Vorteil, dass Sie keinerlei IDs von unserem System speichern müssen.

## Kunde anlegen

Über den `POST /customers` Endpunkt kann ein neuer Kunde erstellt werden. Sie müssen hierbei die folgenden Werte mitgeben:
- `external_id`: Externe ID aus Ihrem System (z.B. Kundennummer oder Geschäftspartnernummer)
- `email`: E-Mail des Kunden. Eine Einladung wird automatisch an diese E-Mail versendet. Wert ist optional
- `name`: Name des Kunden (optional)

Falls ein Kunde mit der gegebenen `external_id` schon existiert passiert nichts. Man kann also einfach für jeden Kunden immer diesen Endpunkt aufrufen. Eine Beispielanfrage könnte so aussehen:

```jsx
curl -L 'https://external.prod.zaehlerfreunde.com/partner/customers' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer <token>' \
-d '{
  "external_id": "YOUR_CUSTOMER_ID",
  "email": "CUSTOMER_EMAIL",
  "name": "CUSTOMER_NAME"
}'
```

## Vertrag anlegen

Für jeden Kunden können beliebig viele Verträge angelegt werden über den `POST customers/:customerId/contracts` Endpunkt. Für die `customerId` kann die `external_id` verwendet werden die beim erstellen des Kunden mitegegeben wird.

Wenn ein Vertrag erstellt wird, legen wir in unserem System automatisch ein Objekt an und falls `melo` oder `malo` in den `custom_attributes` mitegegeben wird, erstellen wir gleich auch einen Zähler. Die `external_id` kann hierbei z.B. der Vertragsnummer entsprechen. Wie schon beim vorigen Endpunkt, wird kein neuer Vertrag erstellt, wenn die `external_id` schon bei uns im System existiert.

Falls `melo` oder `malo` mitegegeben wird, kann dieser Wert für die übertragung der Messwerte verwendet werden. Mehr dazu auf der nächsten Seite.


```jsx

curl -L '/partner/customers/:customerId/contracts' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer <token>' \
-d '{
  "external_id": "abcdefg1234",
  "address_line_one": "Teststraße 1",
  "city": "Musterstart",
  "postcode": "12345",
  "custom_attributes": {
    "malo": "12345678912"
  }
}'
```