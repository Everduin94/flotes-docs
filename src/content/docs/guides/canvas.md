---
title: Canvas
description: A guide to the Flotes Canvas
---

#### <div class="primary-badge">Learn</div>

## Controls

- **Click** to select
- **Backspace** to delete
- **Double Click** to edit (Note & Embed Nodes)
- **Shift Click Drag** to group select
- **Mouse Wheel Down** to pan without accidentally selecting

## Tips
- **Lock Button**: Using the lock button when navigating your canvas may significantly improve your experience
  - Pan over embeds / iframes and note nodes
  - Pan without accidentally moving a node
- **Note Nodes**
  - Automatically resize to fit their content and cannot be resized
- **Embed nodes** 
  - Embed nodes show their edit mode until the URL is populated.
  - Can be resized. They have a transparent border indicated by their handles.
  - To edit an embed note, double click within it's transparent border, but not directly on the embed. 
    - Moving an embed works the same way, except click & hold, then drag.
    - Embeds being interactive makes them tricky to handle click events
- **Group nodes**
  - Can be resized. 
  - A group node is always on bottom (unless selected). If you add a group node and can't see it, it may be behind another node.
- **Connections**
  - To add labels to a connection (edge). Click the connection, revealing a label input in the middle.
- **Work in progress**: Canvas is a feature I'm looking to invest heavily in and make many improvements. If you have any feedback for how we can make it better let us know on the [discord](https://discord.com/invite/qKaKeGT8sZ)!

## Embeds

Embed notes are way to integrate other applications into your canvas. A few notes:
- Not all embeds work the same. Some are interactive, some are static.
- Sometimes you can directly link a url to webpage. Sometimes you need a specific link.
- Flotes only requires the `src` url of the embed. If a website provides an entire iframe html tag, you only need the url.

### Examples

#### YouTube
Right click any video, click "Copy embed code". This will copy an entire iframe into your clipboard. You only need the url:
- `https://www.youtube.com/embed/5yx6BWlEVcY`

#### Spotify
Right click a playlist, click share, click embed playlist, click the "show code" checkbox. Copy the url:
- `https://open.spotify.com/embed/playlist/4PD5kOItNHxlcyigP3N58O?utm_source=generator`

#### Trello
This one is tricky
- Only works for public boards
- Copy the url of the board, and add `.html` to the end
- `https://trello.com/b/kAvaHS4Q.html`

#### Todoist
Straight-foward and interactive. Copy the URL to any page you like within todoist.
- `https://app.todoist.com/app/inbox`

#### Google Calendar
Click the gear icon, click settings, click a calendar under "Settings for my calendars", scroll down to (or click) "Integrate calendar", copy the "Public URL to this calendar"
- `https://calendar.google.com/calendar/embed?src=YOUR_CALENDAR_ID&ctz=America%2FChicago`

**Two way Integration**
- Now you can see your google calendar in your canvas.
- You can setup webhooks to automatically update the calendar after you study!
  - [Checkout our guide on setting this up](https://docs.flotes.app/guides/webhooks#google-calendar-integration-example)


:::caution[Under Construction]

Flotes documentation is a work in progress. 
[Join the Discord](https://discord.com/invite/qKaKeGT8sZ) to get updates!

:::
