# Riverbend Yoga Studio

Touchstone 4 adds meaningful JavaScript interactivity and client-side data to the same four-page website developed in Touchstone Task 2 and styled in Touchstone 3.

- [Live website](https://opsix-net.github.io/riverbend-yoga-touchstone/site/index.html)
- [Class preference feature](https://opsix-net.github.io/riverbend-yoga-touchstone/site/services.html#class-preference)
- [Workshop interest form](https://opsix-net.github.io/riverbend-yoga-touchstone/site/events.html#request-spot)
- [Browser IDE](https://github.dev/opsix-net/riverbend-yoga-touchstone)
- [Owner Codespace](https://riverbend-html-build-vrr9xx7w6gcppjp.github.dev/)

## Pages and code

The existing `site/index.html`, `site/services.html`, `site/about.html`, and `site/events.html` retain their original purpose, semantic structure, supplied media and relative navigation. All four pages load the shared `site/styles.css` and deferred `site/app.js`. No framework or external JavaScript service is required.

### Remember a class

On Classes, choose Gentle Foundations, Vinyasa Flow, Restorative Pause, or a private session. The details update immediately. Choose **Remember this class** to save that one choice on the current browser. Reloading restores it; the shared header shows it across pages, and the workshop form preselects it. **Forget my class** removes only this site's preference key.

An **Ask about** link also carries the currently displayed class to the form using an allowlisted class ID in the URL. A visitor can therefore ask about an unsaved choice, including when browser storage is unavailable. An explicit request-link choice takes precedence over the remembered default without overwriting it.

The `localStorage` key is `riverbend.classPreference.v1`; the value is one class ID. Names, email addresses, phone numbers and messages are not stored by the JavaScript. Unknown stored values are ignored. Read, write and removal failures are handled with truthful feedback while the selector and validation keep working. Browser settings or cleared site data can remove the saved preference.

### Validate the interest form

JavaScript prevents the demo form from navigating or transmitting a request and displays correction guidance beside each relevant control. It checks required choices, trimmed name/message lengths, email shape and maximum length, and phone format when supplied. Selecting Phone call requires a phone number; Email leaves it optional.

Validation starts after a submission attempt. Errors are linked through `aria-describedby`, invalid controls receive `aria-invalid`, the first invalid field receives focus, and a polite status region summarizes the result. Editing a field refreshes feedback without clearing other entries. A valid sample displays an explicit confirmation that no booking was sent or reserved.

Native HTML constraints remain as the fallback without JavaScript. Use sample details throughout this coursework prototype. The form has no booking backend; client-side validation is a usability aid, not server-side validation or a real reservation service.

### Code organization

- `CLASSES` is an array of objects containing the four class IDs, titles, durations and descriptions.
- `FIELD_RULES` is an array of validation objects, each associating a control, an error element and a validator function.
- Small functions read storage, resolve a class, render results, synchronize the saved notice, initialize controls, read form values, collect errors and display field feedback.
- Dynamic text uses `textContent`. Only known class IDs are accepted from storage or URL parameters.

## Visual design and responsive behavior

The four colors remain forest `#173F35`, sage `#DDE8DF`, ivory `#F7F6EF` and ink `#1D2F2A`. Georgia headings and Arial body/control text are retained. The mobile-first layout uses Flexbox and larger-screen breakpoints at `48rem` and `64rem`. New controls and feedback use the same palette, responsive widths and visible focus treatment.

## Run in Codespaces

From the repository root:

```bash
python -m http.server 8000 --bind 0.0.0.0 --directory site
```

Open forwarded port 8000. The pinned Python devcontainer includes the official SSH feature for remote editing and verification. The named Codespace requires the owner's access and can be stopped when testing is complete. The public GitHub Pages preview is independent of Codespaces and does not require a login.

## Media and submission

The selected Yoga pack and the previously approved approximately 44-second breathing audio are preserved. `ASSET_PROVENANCE.json` records their original hashes and derivation. Schedules, prices and instructor profiles remain clearly labeled coursework examples. No general media redistribution license is asserted.

The single implementation DOCX contains repository and preview links, the five required explanations, actual feature and validation screenshots, and a validation checklist. Actual HTML, CSS and JavaScript are in this repository. The HTML-only version remains in history at `c2246859d18406ae9d7a103501ee00ca699ca1d5`; the completed visual-design version remains at `c811154acbe54d8e70b14f267e389863aeaa9cef`.
