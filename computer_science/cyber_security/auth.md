# Auth

## OAuth2

- [RFC 9126 - OAuth 2.0 Pushed Authorization Requests](https://datatracker.ietf.org/doc/html/rfc9126)
- [RFC 9449 - OAuth 2.0 Demonstrating Proof of Possession (DPoP)](https://datatracker.ietf.org/doc/html/rfc9449)
- [RFC 7591 - OAuth 2.0 Dynamic Client Registration Protocol](https://www.rfc-editor.org/rfc/rfc7591.html)
- [RFC 8417 - Security Event Token (SET)](https://datatracker.ietf.org/doc/html/rfc8417)

## Resources

- [Basic HTTP Auth via Cloudflare Workers](https://github.com/dommmel/cloudflare-workers-basic-auth) - Can be used to protect static HTML pages.
- [Single Sign-On Solutions (2021)](https://www.reddit.com/r/selfhosted/comments/mu9gsm/single_signon_solutions/)
- [AuthCompanion](https://github.com/pmprosociety/authcompanion) - Effortless, open source, token-based user management server - well suited for microservices and static website projects.
- [Behind GitHub’s new authentication token formats](https://github.blog/2021-04-05-behind-githubs-new-authentication-token-formats/)
  - contrary to currently popular JWT they use custom tokens
  - tokens are prefixed to make them easily distinguishable
  - added checksum to the tokens to make them easily recognizable
- [Firebase Auth](https://firebase.google.com/docs/auth)
- [Ask HN: How do you currently solve authentication? (2020)](https://news.ycombinator.com/item?id=22157166)
- [JWT is Awesome: Here's Why (2020)](https://thehftguy.com/2020/02/18/jwt-is-awesome-heres-why/) ([HN](https://news.ycombinator.com/item?id=22354534))
- [Learn Authentication The Hard Way (2020)](https://www.andrew-best.com/posts/learn-auth-the-hard-way-part-one/)
- [Ask HN: What are problems with implementing authentication and authorization? (2020)](https://news.ycombinator.com/item?id=22512786)
- [OAuth2 Proxy](https://github.com/oauth2-proxy/oauth2-proxy) - Reverse proxy that provides authentication with Google, Github or other providers.
- [Verifiable Credentials Data Model](https://w3c.github.io/vc-data-model/) - Expressing verifiable information on the Web. ([Code](https://github.com/w3c/vc-data-model))
- [Authelia](https://github.com/authelia/authelia) - Single Sign-On Multi-Factor portal for web apps.
- [DID](https://did.app/) - Identity Provider, that authenticates users by verifying access to either an email address or securely stored private key.
- [WebAuthn Awesome](https://github.com/herrjemand/awesome-webauthn) - Curated list of awesome WebAuthn/FIDO2 resources.
- [OAuth2 for Go](https://github.com/golang/oauth2)
- [OAuth 2.0 Security Best Current Practice (2020)](https://tools.ietf.org/html/draft-ietf-oauth-security-topics-15) ([HN](https://news.ycombinator.com/item?id=23080240))
- [Just-for-me Authentication (2020)](https://brianlovin.com/overthought/just-for-me-authentication)
- [Feather](https://feather.id/docs) - Lightweight identity platform for adding flexible user authentication and authorization flows to your apps.
- [Password authentication for web and mobile apps](https://dchest.com/authbook/)
- [Authentication on the Client Side the Right Way: Cookies vs. Local Storage (2019)](https://www.taniarascia.com/full-stack-cookies-localstorage-react-express/) ([Reddit](https://www.reddit.com/r/javascript/comments/gm2taz/authentication_on_the_client_side_the_right_way/))
- [JSON Web Token (JWT) RFC](https://tools.ietf.org/html/rfc7519) ([Lobsters](https://lobste.rs/s/a106ku/json_web_token_jwt_rfc))
- [OAuth 2 Simplified](https://aaronparecki.com/oauth-2-simplified/)
- [Zero-knowledge Auth](https://gist.github.com/ai/5e0a1975e2a0971c66232d33fd526dbf)
- [AppAuth](https://github.com/openid/AppAuth-iOS) - iOS and macOS SDK for communicating with OAuth 2.0 and OpenID Connect providers.
- [Simple Auth Setup for Your React App (2020)](https://arunoda.me/blog/simple-auth-setup-for-your-react-app)
- [Magic Link](https://magic.link/) - Drop passwords. Use magic links.
- [User authentication with passwords, What’s SRP? (2020)](https://www.cryptologie.net/article/503/user-authentication-with-passwords-whats-srp/)
- [JustAuthenticateMe](https://www.justauthenticate.me/) - Passwordless email-based authentication for your web app.
- [loginsrv](https://github.com/tarent/loginsrv) - Standalone minimalistic login server providing a JWT login for multiple login backends.
- [Designing an Authentication System: a Dialogue in Four Scenes (1988)](https://web.mit.edu/kerberos/dialogue.html) ([HN](https://news.ycombinator.com/item?id=23352856))
- [Okta Identity Cloud](https://www.okta.com/) - Gives you one trusted platform to secure every identity in your organization, including your workforce and customers. ([Okta Developer Platform](https://developer.okta.com/))
- [Building a Secure Signed JWT (2020)](https://fusionauth.io/learn/expert-advice/tokens/building-a-secure-jwt)
- [Keycloak](https://www.keycloak.org/) - Open Source Identity and Access Management. ([Go package](https://github.com/Nerzal/gocloak))
- [TokenCLI](https://github.com/imduffy15/token-cli) - Command line utility for interacting with OAuth2 infrastructure to generate tokens.
- [Decentralized Identifiers (DIDs)](https://www.w3.org/TR/did-core/) - New type of identifier that enables verifiable, decentralized digital identity.
- [jwt](https://github.com/ucarion/jwt) - Golang implementation of JSON Web Tokens (JWT) that helps you avoid common security mistakes.
- [HN: Pioneers of web cryptography on the future of authentication (2020)](https://news.ycombinator.com/item?id=23454954)
- [openidconnect-rs](https://github.com/ramosbugs/openidconnect-rs) - OpenID Connect Library for Rust.
- [OAuth2 Rust](https://github.com/ramosbugs/oauth2-rs) - Extensible, strongly-typed Rust OAuth2 client library.
- [JavaScript Authentication & Authorization Book/Course](https://gist.github.com/taniarascia/a2d35af43ce133de20ac0a8c72558fea)
- [ASGI middleware that authenticates users against GitHub](https://github.com/simonw/asgi-auth-github)
- [JSON Web Token Docs Introduction](https://jwt.io/introduction/)
- [Auth Boss](https://github.com/teesloane/Auth-Boss) - Learn about different authentication methodologies on the web.
- [JWT auth visualized](https://twitter.com/kamranahmedse/status/1273375903511465990)
- [Simple Auth with Magic.link and Next.js (2020)](https://vercel.com/blog/simple-auth-with-magic-link-and-nextjs)
- [jwt.ms](https://jwt.ms/) - Decode auth tokens.
- [Platform authenticators for Web Authentication in Safari 14 (2020)](https://dchest.com/2020/06/27/platform-authenticators-for-web-authentication-in-safari-14/)
- [OAuth in one picture](https://twitter.com/kamranahmedse/status/1276994010423361540)
- [Why we won’t be supporting Sign in with Apple (2020)](https://blog.anylist.com/2020/06/sign-in-with-apple/) ([HN](https://news.ycombinator.com/item?id=23681982))
- [yup-oauth2](https://github.com/dermesser/yup-oauth2) - Utility library which implements several OAuth 2.0 flows. It's mainly used by google-apis-rs, to authenticate against Google services.
- [AuthGuardian by OneGraph](https://www.onegraph.com/auth-guardian/) - Secure your GraphQL API.
- [Pass](https://getpass.app/) - Identity app for fintech applications.
- [Note on Auth](https://github.com/yoshuawuyts/notes/blob/master/computers/architecture/auth.md)
- [How does Single Sign-On work?](https://twitter.com/kamranahmedse/status/1280266408434302979)
- [The Future of Online Identity is Decentralized (2020)](https://yarmo.eu/post/future-online-identity-decentralized) ([Lobsters](https://lobste.rs/s/ckalve/future_online_identity_is_decentralized)) ([HN](https://news.ycombinator.com/item?id=23811568))
- [Everything You Need to Know About OAuth (2.0) (2020)](https://gravitational.com/blog/everything-you-need-to-know-about-oauth/) ([HN](https://news.ycombinator.com/item?id=23851870))
- [OAuth 2.0 and OpenID Connect (in plain English) (2018)](https://www.youtube.com/watch?v=996OiexHze0)
- [Best practices for password hashing and storage](https://tools.ietf.org/html/draft-ietf-kitten-password-storage-00)
- [Xkit](https://xkit.co/) - Build OAuth integrations in minutes. ([HN](https://news.ycombinator.com/item?id=24121290))
- [Galileo's Proposed Authentication Algorithm (2020)](https://berthub.eu/articles/posts/galileos-authentication-algorithm-part-1/)
- [Let's build the GitHub authorization model (2020)](https://www.osohq.com/post/building-the-github-authorization-model-using-oso)
- [oso](https://www.osohq.com/) - Open source policy engine for authorization that’s embedded in your application. ([Code](https://github.com/osohq/oso)) ([GitHub](https://github.com/osohq))
- [I Actively Discourage Online Tooling Like Jwt.io and Online JSON Validators (2020)](https://www.jvt.me/posts/2020/09/01/against-online-tooling/) ([Lobsters](https://lobste.rs/s/jxlr73/why_i_actively_discourage_online_tooling)) ([HN](https://news.ycombinator.com/item?id=24352360))
- [ORY Hydra](https://github.com/ory/hydra) - Hardened, OpenID Certified OAuth 2.0 Server and OpenID Connect Provider optimized for low-latency, high throughput, and low resource consumption.
- [The different kinds of authentication protocols](https://www.devever.net/~hl/auth)
- [gologin](https://github.com/dghubble/gologin) - Go login handlers for authentication providers (OAuth1, OAuth2).
- [What's in a JWT (Json Web Token)? (2020)](https://loige.co/whats-in-a-jwt/)
- [Gazepass](https://gazepass.com/) - Passwordless Authentication API.
- [dex](https://github.com/dexidp/dex) - Federated OpenID Connect provider.
- [Aperture](https://github.com/lightninglabs/aperture) - HTTP 402 Lightning Service Authentication Token Reverse Proxy.
- [Kerbrute](https://github.com/ropnop/kerbrute) - Quickly bruteforce and enumerate valid Active Directory accounts through Kerberos Pre-Authentication.
- [OAuth 2.0 Simplified](https://oauth2simplified.com/) - Guide to building OAuth 2.0 servers.
- [Authenticator](https://github.com/Authenticator-Extension/Authenticator) - Generates 2-Step Verification codes in your browser.
- [WebAuthn.io](https://webauthn.io/) - Demo of the WebAuthn specification. ([Code](https://github.com/duo-labs/webauthn.io))
- [Face ID and Touch ID for the Web (2020)]https://webkit.org/blog/11312/meet-face-id-and-touch-id-for-the-web/() ([HN](https://news.ycombinator.com/item?id=24829565))
- [OAuth 3](https://oauth.net/3/) - In-progress effort to redesign OAuth from the ground up. ([HN](https://news.ycombinator.com/item?id=24855750))
- [Portier](https://portier.github.io/) - Email-based, passwordless authentication service. ([Code](https://github.com/portier/portier.github.io))
- [useAuth](https://github.com/Swizec/useAuth) - Simplest way to add authentication to your React app.
- [Consent Management: What You Need to Understand (2020)](https://auth0.com/blog/what-you-need-to-understand-about-consent-management/)
- [OAuth2: A Theatrical Introduction (2020)](https://tech.lightspeedhq.com/oauth2-a-theatrical-introduction/)
- [JWT authorization in a microservices gateway (2020)](https://fusionauth.io/blog/2020/11/12/jwt-authorization-microservices-gateway/)
- [ORY Kratos](https://github.com/ory/kratos) - Cloud native Identity and User Management System. No longer necessary to implement a User Login process.
- [SSSD](https://github.com/SSSD/sssd) - Daemon to manage identity, authentication and authorization for centrally-managed systems. ([Docs](https://sssd.io/))
- [OAuth is Not User Authorization (2020)](https://www.scottbrady91.com/OAuth/OAuth-is-Not-User-Authorization)
- [otplib](https://github.com/yeojz/otplib) - Time-based (TOTP) and HMAC-based (HOTP) One-Time Password library. ([Web](https://otplib.yeojz.dev/))
- [SuperTokens](https://github.com/supertokens/supertokens-core) - Open core alternative to proprietary login providers like Auth0 or AWS Cognito. ([Web](https://supertokens.io/))
- [FastAuth](https://github.com/flatfeestack/fastauth) - Simple authentication server that can also be used for local development with reasonable defaults to kickstart the local development.
- [Web Authentication Methods Compared](https://testdriven.io/blog/web-authentication-methods/)
- [About authentication methods (2020)](https://marlam.de/msmtp/news/about-authentication/) ([HN](https://news.ycombinator.com/item?id=25594693))
- [Steam's login method is kinda interesting (2021)](https://owlspace.xyz/cybersec/steam-login/) ([Lobsters](https://lobste.rs/s/rfpblh/steam_s_login_method_is_kinda_interesting)) ([HN](https://news.ycombinator.com/item?id=25730145))
- [passport-magic-login](https://github.com/mxstbr/passport-magic-login) - Passwordless authentication with magic links for Passport.js.
- [node-oauth2-server](https://github.com/oauthjs/node-oauth2-server) - Complete, compliant and well tested module for implementing an OAuth2 server in Node.js.
- [Learn JWT by reverse engineering](https://github.com/gitcommitshow/auth-jwt)
- [SAML vs. OAuth (2021)](https://ossoapp.com/blog/saml-vs-oauth/) - Engineer’s Guide to Enterprise-grade Single Sign-on.
- [Userbase](https://userbase.com/) - Auth and E2E encrypted storage in a few lines of code. ([HN](https://news.ycombinator.com/item?id=22145168)) ([HN 2](https://news.ycombinator.com/item?id=25869472)) ([Code](https://github.com/encrypted-dev/userbase))
- [Authentication and Authorisation 101 (2021)](https://dev.to/charlottebrf_99/authentication-and-authorisation-101-143e)
- [oidc-provider](https://github.com/panva/node-oidc-provider) - OpenID Certified OAuth 2.0 Authorization Server implementation for Node.
- [A Primer on JSON Web Tokens (2021)](https://pspdfkit.com/blog/2021/a-primer-on-json-web-tokens/)
- [github/webauthn-json](https://github.com/github/webauthn-json) - Small WebAuthn API wrapper that translates to/from pure JSON using base64url.
- [Clerk](https://clerk.dev/) - All of user management as-a-service, not just authentication. ([HN](https://news.ycombinator.com/item?id=26069621)) ([Tweet](https://twitter.com/tweetsbycolin/status/1358873005447909378))
- [Persona](https://withpersona.com/) - Identity infrastructure for any business.
- [JWT in Go](https://github.com/kataras/jwt)
- [Twingate – Building the foundation for identity-first network security (2021)](https://www.twingate.com/blog/introducing-identity-first-networking/) ([HN](https://news.ycombinator.com/item?id=26253196))
- [GoTrue](https://github.com/netlify/gotrue) - Small open-source API written in Go, that can act as a self-standing API service for handling user registration and authentication for JAM projects.
- [FusionAuth](https://fusionauth.io/) - Authentication and Authorization built for devs.
- [Hidden OAuth attack vectors (2021)](https://portswigger.net/research/hidden-oauth-attack-vectors)
- [Vercel Basic Auth](https://github.com/flawyte/vercel-basic-auth) - How to add Basic Authentication to a Vercel deployment using various languages / frameworks.
- [Do You Know Your OAuth Flows? (2021)](https://medium.com/cloud-security/do-you-know-your-oauth-flows-137fb01b45f8)
- [OAuth 2.0 Authentication Vulnerabilities](https://portswigger.net/web-security/oauth) ([HN](https://news.ycombinator.com/item?id=26603259))
- [The Modern Guide to OAuth (2021)](https://fusionauth.io/learn/expert-advice/oauth/modern-guide-to-oauth/)
- [Authorization Academy](https://www.osohq.com/developers/authorization-academy)
- [Awesome IAM](https://github.com/kdeldycke/awesome-iam)
- [Are Magic Resources Outdated?](https://news.ycombinator.com/item?id=32080540)
- [The many problems with implementing Single Sign-On](https://stackoverflow.blog/2022/09/12/the-many-problems-with-implementing-single-sign-on/)
- [Enhance SMS-delivered code security with domain-bound codes](https://developer.apple.com/news/?id=z0i801mg)
- [Web Authentication: An API for accessing Public Key Credentials](https://www.w3.org/TR/webauthn-2/)
- [How Passwordless Works](https://goteleport.com/blog/how-passwordless-works/)
- [The Developer’s Guide to SSO](https://workos.com/blog/the-developers-guide-to-sso) - on SSO, SAML, and more
- [Catch twenty two-factor](https://oversharing.substack.com/p/catch-twenty-two-factor) - some tips on managing MFA
- [Passwords are dead, long live PassKeys? How to log in, in 2023 ](https://www.ory.sh/overview-login-password-passkey-webauthn-totp-sso-faceid/)
- [Identity-Native Infrastructure Access Management](https://goteleport.com/static/resources/books/identity-native-infrastructure-access-management-oreilly.pdf)
  - How to authorize users using certificates.

## IAM

### Resources

- [Why Google Zanzibar Shines at Building Authorization](https://blog.warrant.dev/why-zanzibar-shines-at-building-authorization/)
- [Ory Keto](https://github.com/ory/keto) - Open source implementation of "Zanzibar: Google's Consistent, Global Authorization System".
- [Zanzibar: Google’s Consistent, Global Authorization System (2019)](https://www.youtube.com/watch?v=mstZT431AeQ) ([Web](https://research.google/pubs/pub48190/))
- [Google Zanzibar for the rest of us](https://www.osohq.com/post/google-zanzibar-for-the-rest-of-us)

### Implementations

- [Warrant](https://github.com/warrant-dev/warrant) - support of roles & permissions out of the box (they provide leaner API on top of the underlying ReBAC system), fairly new
- [OpenFGA](https://openfga.dev/) - backed by Auth0, custom DSL
- [Ory Keto](https://github.com/ory/keto) - exists for the longest, offered as enterprise product by Ory, typescript based configuration language that is easy to read/write/reason about
- [Permify](https://permify.co/)
- [Aserto](https://www.aserto.com/)

## Products and solutions

- [AuthKit](https://www.authkit.com/) - login solution in a box
