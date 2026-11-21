# Riverbend Yoga Studio

Private workspace for Sophia Touchstone Task 2: Client Website Structure Build.

## Scope

Build four HTML-only pages for Riverbend Yoga Studio: `index.html`, `services.html`, `about.html`, and `events.html`. No CSS or JavaScript belongs in this stage. The final submission is the completed student DOCX with all four complete HTML sources as text, the required-elements checklist, and a 3-5 sentence accessibility confirmation.

This commit prepares the workspace and supplied client assets. The website pages and final student document have not yet been authored.

## Codespaces

Open this repository in GitHub Codespaces and use its checked-in devcontainer. The official Python 3.12 Bookworm image is pinned by digest. A small machine is sufficient for static HTML. The setup requests a 15-minute idle timeout through the Codespaces API; this is a runtime setting, not a billing-plan change.

When HTML files exist, preview them from the repository root with:

```bash
python -m http.server 8000 --bind 0.0.0.0 --directory site
```

Open the forwarded port 8000 and retain private visibility. Stop the server with Ctrl+C. No server is started automatically by this preparation commit.

## Planned content

| Page | Required client content and planned elements |
| --- | --- |
| `site/index.html` | Mission, reassurance for beginners, featured class and schedule overview; studio image and responsive `picture`. |
| `site/services.html` | Gentle, vinyasa and restorative classes, private sessions, pricing overview; provided guided-breathing audio with fallback text. |
| `site/about.html` | Instructor bios, accommodations and studio policies; instructor photograph. |
| `site/events.html` | Monthly workshops, workshop `figure`/`figcaption`, and request-a-spot interest form. |

All pages need `lang="en"`, complete document structure, one `h1`, semantic header/nav/main/footer, a consistent unordered-list navigation and relative links. The form collects name, email, class/event interest, experience level, preferred contact method and message, with labels, fieldset, legend and built-in validation.

The assignment allows client-specific placeholder written content. Identify any example pricing, schedules, bios and contact details honestly; the supplied brief does not establish real studio business facts.

## Provided assets

Only the selected Yoga client pack is included. Its actual image filenames use `_c.png`, even though the scenario lists `.jpg` names. See `ASSET_PROVENANCE.json` for the original ZIP members and content hashes. Original media is unchanged. `yoga-breathing-44s.mp3` is an explicitly authorized derived version that repeats the original 22-second breathing clip once, meeting the 30-60 second scenario target. Archive metadata and the preview-check file are excluded.

The development container and a Python preview command are tooling, not CSS or JavaScript in the website. Do not include credentials or the other clients' packs in this repository.
