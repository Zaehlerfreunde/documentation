# Zählerfreunde API Integration

The Zählerfreunde API enables partners to automatically manage user, space, and device infos in order to onboard new users, manage existing ones, and to add/remove meters and other devices.

You can view the official Swagger documentation here: [https://external.prod.zaehlerfreunde.com/partner/swagger/index.html](https://external.prod.zaehlerfreunde.com/partner/swagger/index.html)

The following guide gives an overview of the standard process when onboarding new users. The steps, can however, be easily modified in order to fit your existing processes/tools. The steps to onboard a new user are the following.

### Aquire authentication token

To authenticate API requests we use the [OAuth client credentials flow](https://auth0.com/docs/get-started/authentication-and-authorization-flow/client-credentials-flow). As a first step you need to login to our platform with your admin account (contact us, if you don’t have an admin account yet). You can create the client credentials as shown in the following figure. Please, make sure to store the client secret in a secure place, as you will not be able to see it again.

![Steps to create client credentials in the admin portal](/img/integrations/api-integrations/client_creds.png)

Steps to create client credentials in the admin portal

Now, we can create an access token using the `/auth/token` endpoint. The response includes the access token. Use this access token in the `Authorization` header to call the other endpoints of the API. Note that the token is valid for one day. If the token expired you can just create a new one using the same endpoint.

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

### Creating a new space

Spaces are the central entity through which users have access to their meter. They usually correspond to a house, flat, or MeLo/MaLo. A space can be created with the following request. It will return a space ID which can be used to add devices to it and to invite users.

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

### Adding a new meter

When adding a meter there are multiple options available based on how the data transferred. We differentiate between external devices were data is pushed to our API and other devices where we continuously fetch the data from another API. For the latter option MSCONS can also be used to transfer data. For those devices we will need to discuss the required development steps to support your API as a data source.

If you want to push the meter readings to our API you can use the following request to add a device to a space.

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

In order to send data you can then call the following endpoint. You can either provider your external device ID or the device ID returned after creation.

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

### Inviting a user

To make sure that users have access to a space you can create an invite for it. This invite will allow a user to access a specific space. Note that he still needs to sign up separately e.g. using SSO. To create an invite send the following request. The request will return the invite link. Either we send the email directly to the user if `sendInviteEmail` is true. Otherwise you can also send the link to the user separately.

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
