# AI PM LAB — Professional Resource Landing Page

Static, bilingual landing page for **AI PM LAB by TrigoSat Consulting**. It presents AI PM Lab as an educational and consulting initiative focused on practical AI systems for projects, operations and business, with PropertyDEX shown separately as an applied case study.

The project uses only HTML5, CSS3 and vanilla JavaScript. There is no build step, package manager, framework, backend, login or analytics dependency.

## Project structure

```text
.
├── index.html                 Page content, metadata and semantic structure
├── styles.css                 Responsive design, layout and light motion
├── script.js                  Links, EN/IT translations and interactions
├── netlify.toml               Netlify publish settings, cache and security headers
├── .gitignore                 Common local files excluded from Git
├── README.md                  Setup and maintenance guide
└── assets/
    ├── logo-ai-pm-lab.png     Local official logo
    ├── favicon.png            Browser icon derived from the official logo
    └── og-image.png           Social sharing image derived from the brand identity
```

## Run locally

The simplest option is to open `index.html` directly in a browser. All content, links and the language switch work without a build process.

For a local HTTP preview, use any simple static server you already have. For example, if Python is installed:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`. A local server is recommended when checking behavior that may differ under the `file://` protocol.

## Update text and links

- Edit page structure and default English fallback text in `index.html`.
- Edit the `LINKS` object near the top of `script.js` to change the main destinations in one place.
- For no-JavaScript resilience, also update the matching `href` attributes in `index.html` when changing a URL.
- Do not correct `/resourse` in the Free Resources URL unless the live destination changes; that spelling is currently intentional.

Current destinations:

- Free Resources: `https://aipmlab.propertydex.xyz/resources`
- YouTube: `https://openinapp.link/aipmlab`
- Discovery Call: `https://calendly.com/trigosattokenization/30min`
- PropertyDEX Framework: `https://framework.propertydex.xyz/?open=signup`
- PropertyDEX: `https://propertydex.xyz`

## Update translations

English and Italian text is stored in the `TRANSLATIONS` object in `script.js`.

1. Find the relevant key in both `en` and `it`.
2. Keep the key names identical in both languages.
3. Elements in `index.html` use `data-i18n="keyName"` for visible text and `data-aria-i18n="keyName"` for accessible labels.
4. Test both EN and IT after every copy update.

The selected language is saved in browser local storage under `ai-pm-lab-language`. English remains the default on a first visit.

## Replace the logo, favicon or social image

Replace `assets/logo-ai-pm-lab.png` with a PNG using the same filename to update the logo without changing the markup. Keep a square source with adequate whitespace and test it at the small navigation size.

`assets/favicon.png` should be a square PNG, ideally 512 × 512 px. `assets/og-image.png` should be 1200 × 630 px. If filenames change, update all references in `index.html`.

The Open Graph and Twitter image URLs currently use the editable placeholder domain `https://your-domain.example`. Replace it, along with the canonical link, before publishing the final domain.

## Deploy on Netlify

1. Push this repository to GitHub.
2. In Netlify, select **Add new site → Import an existing project**.
3. Connect GitHub and choose `patpet21/aipmlab_link`.
4. Use branch `main`.
5. Leave the build command empty.
6. Set the publish directory to `.` (repository root). `netlify.toml` already defines this value.
7. Deploy the site.

No environment variables or plugins are required. Netlify reads the security and cache headers from `netlify.toml`.

## Add a custom domain

In the Netlify site dashboard, open **Domain management → Add a domain**, enter the domain and follow the DNS instructions. Netlify provisions HTTPS after DNS is configured.

After the domain is active, update these values in `index.html`:

- the canonical URL;
- `og:image`;
- `twitter:image`;
- optionally add the final site URL to the JSON-LD block.

## Pre-publish checklist

- Open the page at widths of 320, 375, 768, 1024 px and a wide desktop size.
- Test the mobile menu with touch, keyboard, Escape and visible focus.
- Switch EN/IT, refresh, and confirm that the language preference persists.
- Open every external link and confirm it uses the intended destination in a new tab.
- Confirm the `/resourse` URL has not been automatically changed.
- Check the final canonical and social image URLs.
- Confirm that `trigosatconsulting@gmail.com` is displayed and opens the visitor's email application.
- Check headings, alt text, contrast and reduced-motion behavior.
- Preview `og-image.png` with an Open Graph sharing debugger after deployment.
- Confirm that no analytics or cookies have been added unintentionally.

## Privacy and optional analytics

No tracking, cookies or analytics are installed. Therefore, the site does not show a cookie banner.

Future options:

- **Netlify Analytics:** enable it from the Netlify dashboard; it does not require adding a client-side script.
- **Plausible:** add the site in Plausible, then add its script and domain value to `index.html`. Update the Content Security Policy in `netlify.toml` to allow only the exact Plausible script and connection domains.
- **Google Analytics:** create a GA4 property, add the Google tag, and update the Content Security Policy. Review consent and privacy requirements for the countries being served before enabling it.

When analytics or marketing cookies are introduced, update the privacy notice and assess whether consent management is required.

## Add Telegram or another social channel later

Add the destination once to the `LINKS` object in `script.js`, then add a normal external anchor with a matching `data-link` value where needed. Include `target="_blank"`, `rel="noopener noreferrer"` and a clear accessible label. Add translated label text to both language dictionaries if the visible text changes by language.

This pattern lets new channels be added without restructuring the page.

## Known information still required

- Final public domain for canonical and social metadata. This can be updated after the Netlify domain is connected.
