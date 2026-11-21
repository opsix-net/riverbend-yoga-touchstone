# Riverbend Yoga Studio

Touchstone 3 applies a shared external stylesheet and responsive visual design to the four-page Riverbend website from Touchstone Task 2. The existing content, page routes, supplied media and accessible form structure are retained.

- [Live website](https://opsix-net.github.io/riverbend-yoga-touchstone/site/index.html)
- [Open the project in a browser IDE](https://github.dev/opsix-net/riverbend-yoga-touchstone)
- [Codespace used for implementation and testing](https://riverbend-html-build-vrr9xx7w6gcppjp.github.dev/)

## Website files

- `site/index.html`: mission, beginner welcome, featured class, schedule and responsive picture.
- `site/services.html`: class types, private sessions, illustrative pricing and breathing audio.
- `site/about.html`: story, instructor profiles, accommodations and studio policies.
- `site/events.html`: workshops and a complete interest form with native validation.
- `site/styles.css`: shared mobile-first CSS, Flexbox layouts and media queries.

## Design system

The four main colors are forest `#173F35`, sage `#DDE8DF`, ivory `#F7F6EF` and ink `#1D2F2A`. Georgia is used for primary headings and the wordmark; Arial is used for body copy, navigation and controls. No external font service, JavaScript or framework is required.

The base layout uses one column. At `48rem`, the welcome panel and class cards use Flexbox rows and page gutters grow from 1rem to 2rem. At `64rem`, workshops and the interest form sit side by side. Images and controls stay within their containers, navigation wraps, and the schedule has a labeled scroll region if needed. Keyboard focus, descriptive alt text, the skip link and audio fallback are preserved.

## Preview in Codespaces

From the repository root:

```bash
python -m http.server 8000 --bind 0.0.0.0 --directory site
```

Open forwarded port 8000. The pinned Python devcontainer includes the official SSH feature for remote editing and testing. The named Codespace belongs to the project owner and requires appropriate account access; the live website above is the public reviewer preview. The browser IDE opens the actual public source.

GitHub Pages publishes `main` at `/`. The root `index.html` redirects to the retained `site/` folder and includes an ordinary fallback link. The website can also be opened directly at the live link above.

## Coursework boundaries and media

Schedules, prices and instructor profiles are illustrative. The form checks sample entries and returns to the Events page; it does not send a booking or reserve a place. Use sample details.

Media is from the supplied Yoga pack. Original filenames and hashes are retained in `ASSET_PROVENANCE.json`. The approved approximately 44-second breathing clip repeats the supplied clip once, preserving the original. Public use here follows the assignment's repository-sharing requirement; no general asset redistribution license is asserted.

## Submission

The single Touchstone 3 DOCX contains the repository and preview links, five specific design explanations, completed checklists and one browser screenshot demonstrating the layout. Actual HTML, CSS and media are available in this public repository. The previous HTML-only implementation remains in Git history at commit `c2246859d18406ae9d7a103501ee00ca699ca1d5`.
