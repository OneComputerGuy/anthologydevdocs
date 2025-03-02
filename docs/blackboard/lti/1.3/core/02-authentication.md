---
title: Authenticating using OIDC
id: oidc-auth
sidebar_position: 2
published: "2024-09-04"
edited: "2024-09-04"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

To complete the LTI message flow, we need to perform an OIDC authentication. We will talk about the steps outlined here taken from the original flow image

![image of the OIDC authentication part within the LTI workflow](/assets/img/lti_message_flow_auth.png)

## The flow

When a user clicks on an LTI link within Learn, the Learn server receives a GET request from the browser with information about that LTI item. Once it loads the tool configuration associated with that link, the first step is to initiate the OIDC Login request with a browser redirect to the registered OIDC Login URI provided by you when you registered your tool on the Developer Portal. The initial login request also passes some information along as query parameters, which, for some of them, must be kept unaltered.

The data sent by Learn to the OIDC login endpoint of your tool as query parameters is the following:

- issuer
- login_hint - an opaque value for the tool that must be returned **unaltered** on the following redirect
- target_link_uri - the URI configured by the tool for this LTI link
- lti_message_hint - an opaque value for the tool that must be returned **unaltered** on the following redirect
- lti_deployment_id - this is optional, but Learn always sends it
- client_id - this is optional, but Learn always sends it
- lti_storage_target - for use if cookies aren't possible

Once the request is received by your system, you must then redirect to the registered OIDC Authentication Request URI provided by the Developer Portal (shown when the registration process was completed as "OIDC auth request endpoint"), including a Redirect URI (which must be pre-registered) and a state value, along with the other values passed in by the platform. The Redirect URI declares where the tool wants the subsequent LTI launch to go, and the state is what protects against CSRF. The state should be saved in a cookie, so the tool can verify that the initiator of the request is the same browser that sends the LTI message launch. If a cookie cannot work because of browser restrictions preventing the setting of cookies by third parties in iframes, then another option must be pursued, such as lti_storage_target.

The structure of the redirect URI is the following:

```js
<OIDC-URL>?response_type=id_token&scope=openid&login_hint=<login_hint>&lti_message_hint=<lti_message_hint>&state=<your-state>redirect_uri=<your-redirect-uri>&clientid=<clientid>&nonce=<your-nonce>
```

Breaking down the query parameters your tool must send on the redirect to the Developer Portal, we have:

- **response_type=id_token** - This is a fixed value
- **scope=open_id** - This is a fixed value
- **login_hint** - received as a parameter on the login request from Learn
- **lti_message_hint** - received as a parameter on the login request from Learn
- **state** - a random value generated by your tool to prevent CRSF attacks
- **nonce** - a random value generated by your tool to prevent duplicate requests
- **redirect_uri** - a pre-registered URL of your tool where the LTI POST with the data will be sent **(MUST BE ENCODED)**
- **client_id** - The Client ID (or Application ID) of your tool

:::caution Redirect URI
Make sure that the Redirect URI is encoded using URLEncode before redirecting to the OIDC endpoint of the Developer Portal. Failure to encode that value could result in broken workflows
:::

:::danger login_hint and lti_message_hint values
The values for the `login_hint` and `lti_message_hint` must be sent to the Developer Portal on the redirect **unaltered**, since those contain information critical for the workflow and are verified in subsequent calls
:::

## Next step

Once the redirect is completed, the Developer Portal will authenticate the request and redirect again to Learn, requesting the system to create the JWT token and send it to the redirect URI you specified. The process you need to follow will be outlined in the next section

## Sample code

Below, you can find sample code that outlines how the OIDC redirect can be performed

<Tabs>
<TabItem value="node" label="NodeJS/ExpressJS">

```javascript title="login.js"
exports.oidcLogin = function(req, res) {
  const state = uuid.v4(); // save this locally, such as in a cookie; optional in the OIDC spec
  const nonce = uuid.v4(); // Used to prevent playback
  const client = // You'll need to determine the client ID for this request from parameters on the request
  const redirectUri = // Get the Redirect URI for this client
  const oidcAuthUrl = // The URL you were given for this client when you registered your application

  let url =
    oidcAuthUrl +
    "?response_type=id_token" +
    "&scope=openid" +
    "&login_hint=" +
    req.query.login_hint +
    "&lti_message_hint=" +
    req.query.lti_message_hint +
    "&state=" +
    state +
    "&redirect_uri=" +
    encodeURIComponent(redirectUri) +
    "&client_id=" +
    clientId +
    "&nonce=" +
    nonce;

  res.redirect(url);
};
```

</TabItem>
</Tabs>