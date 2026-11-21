# Riverbend Yoga Studio

Completed HTML-only client website for Sophia Touchstone Task 2.

## Pages

- `site/index.html`: mission, beginner welcome, featured class, weekly schedule, studio image and responsive picture.
- `site/services.html`: gentle, vinyasa and restorative classes, private sessions, pricing overview and guided breathing audio.
- `site/about.html`: studio story, instructor profiles, accommodations and policies.
- `site/events.html`: monthly workshops, a captioned workshop figure and the complete interest form.

The website uses no CSS or JavaScript. Written schedules, prices and profiles are illustrative, as identified on each page. The sample form demonstrates native validation and returns to the Events page; it does not send a real booking.

## Preview in Codespaces

The devcontainer uses the pinned official Python 3.12 image and a pinned SSH feature for remote editing and verification. Run from the repository root:

```bash
python -m http.server 8000 --bind 0.0.0.0 --directory site
```

Open forwarded port 8000 with private visibility. No package installation, framework or public hosting is required. Stop the server with Ctrl+C when finished.

## Media

Assets come from the selected Yoga pack. Their original `_c.png`, MP3 and MP4 filenames are retained. The approved `yoga-breathing-44s.mp3` repeats the supplied breathing clip once and leaves the original unchanged. `ASSET_PROVENANCE.json` records the archive members, hashes, dimensions and audio derivation.

## Submission

The completed student DOCX contains the exact full HTML source for all four files as text, the required-elements checklist, and a five-sentence accessibility confirmation. Replace the blank student name and `LastName_FirstName` filename before uploading the single DOCX to the course.
