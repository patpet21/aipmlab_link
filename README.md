# AI PM LAB — Projects & Products Hub

The public portfolio / links hub of **AI PM LAB by Trigosat Consulting**.

**Production URL:** https://aipmlinks.propertydex.xyz/

This lightweight, responsive, bilingual site uses plain HTML, CSS and vanilla JavaScript. No build step, tracking, external fonts, API keys or back-end are required.

## Main links

| Project / channel | URL |
| --- | --- |
| PrivacyGate website | https://privacygate.propertydex.xyz/ |
| PrivacyGate Windows app (Microsoft Store) | https://apps.microsoft.com/detail/9NMPZCVJLLZ3 |
| PrivacyGate Edge extension | https://microsoftedge.microsoft.com/addons/detail/privacygate-browser-prote/lbdkbiflhmlalbcblmglmccmmajnhfbd |
| PrivacyGate Gmail add-on listing | https://workspace.google.com/marketplace/app/privacygate/817932149819?flow_type=2 |
| AI PM LAB | https://aipmlab.propertydex.xyz/ |
| AI PM LAB resources | https://aipmlab.propertydex.xyz/resources |
| PropertyDEX Framework | https://framework.propertydex.xyz/ |
| PropertyDEX | https://propertydex.xyz/ |
| YouTube / AI PM LAB | https://openinapp.link/aipmlab |
| Discovery call | https://calendly.com/trigosatconsulting/30min |
| Email | mailto:trigosatconsulting@gmail.com |

**Note:** A previously supplied Edge URL accidentally concatenated the Microsoft Store URL to the end; the listing above uses the separate Edge URL. Availability of third-party listings can vary and should be checked on each destination platform. The provided domain URLs are owner-supplied; automatic HTTP validation was unavailable during this update.

## Files

- index.html: semantic landing page, metadata and EN/IT copy.
- styles.css: responsive design, dark palette, cards, accessible navigation.
- script.js: language toggle (stored locally), current year, mobile menu.
- assets/: pre-existing AI PM LAB branding assets.
- netlify.toml: static publication and security headers.

## Editing

Edit project cards in index.html. Each translated text fragment has data-en and data-it attributes; keep both translations up to date. The default visible text is English so the website remains useful if JavaScript is blocked. All external destinations are normal absolute URLs and work without JavaScript.

## Deploy

Publish root folder on Netlify, branch main, with no build command. The intended custom domain is aipmlinks.propertydex.xyz. The actual Netlify–GitHub linkage must be verified in the Netlify UI if a push does not update the public site.

## Quality checklist

- Verify all outgoing destinations in both languages.
- Verify Netlify domain mapping and deployment of latest main commit.
- Test 320px, 375px, 768px and desktop widths.
- Confirm focus-visible keyboard access, mobile menu and reduced-motion behavior.
- Check Google Workspace listing status separately; this site only links to the supplied listing and does not promise approval or installation availability.
