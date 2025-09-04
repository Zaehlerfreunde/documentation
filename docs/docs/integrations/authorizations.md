# Authorization Code Flow

You can use the [OAuth authorization code flow](https://auth0.com/docs/get-started/authentication-and-authorization-flow/authorization-code-flow/call-your-api-using-the-authorization-code-flow) through our authentication provider Auth0 to get access to our API.

### Prerequisites

1. Your redirect URL is registered with us (reach out to [support@zaehlerfreunde.com](mailto:support@zaehlerfreunde.com))
2. We have provided you with a client ID

### Step 1: Forward user to authorization URL

Replace the `client_id` and `redirect_uri` parameters and forward the user to the authorization URL for him to provide access to his account.

```jsx
https://auth.prod.zaehlerfreunde.com/authorize?response_type=code&client_id={client_id}&redirect_uri={your_redirect_url}&scope=openid profile email offline_access&audience=https://api.prod.zaehlerfreunde.com
```

On successful authentication the user will be redirected to the URL you provided with a `code` query parameter that you can use to obtain an access token.

### Step 2: Get access token

Send a request to the token URL with the code you’ve received in order to get an access and refresh token.

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

The response should contain an access token that you can use to call our [API endpoints](https://external.prod.zaehlerfreunde.com/partner/swagger/index.html). The refresh token can be used to obtain a new access token after it expired.

### Step 3: Refresh token

To get a refresh token send a request to the token endpoint with grant type refresh token

```bash
curl --location 'https://zaehlerfreunde-prod.eu.auth0.com/oauth/token' \
--header 'Content-Type: application/json' \
--data '{
    "grant_type": "refresh_token",
    "client_id": "{client_id}",
    "refresh_token": "{refresh_token}"
}'
```