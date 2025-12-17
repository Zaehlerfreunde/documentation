# Messdaten

Messdaten können über den `POST /devices/readings` Endpunkt übertragen werden. Als Id kann entweder unsere interne `deviceId` angegeben werden oder eine `externalDeviceId` aus Ihrem System. Dies kann z.B. der `melo`/`malo` Wert sein welcher beim erstellen des Vertrags benutzt wurde.

Eine Beispielanfrage könnte so aussehen.

```jsx
curl -L '/partner/devices/readings' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer <token>' \
-d '[
  {
    "deviceId": "string",
    "externalDeviceId": "string",
    "readings": [
      {
        "obisCode": "1.8.0",
        "timestamp": 1765966930000,
        "value": 12832
      }
    ]
  }
]'
```