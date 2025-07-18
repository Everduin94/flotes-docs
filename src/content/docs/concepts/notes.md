---
title: Notes
description: Flotes Documentation - Notes
---

Notes in Flotes are written in plain Markdown. Some redundant syntax is repurposed to enable features such as [fill-in-the-blanks](concepts/notes/#fill-in-the-blanks) and [concealed sections](concepts/notes/#concealed-sections) when studying. This approach maintains compatibility with other Markdown-based tools and formats. Allowing notes to be freely imported, exported, or used outside of Flotes. It avoids vendor lock-in and ensures long-term portability.


#### Fill-in-the-Blanks

Markdown supports two ways to bold text: `__double underscores__` and `**double asterisks**`. - Flotes repurposes the double underscore (`__`) to mark words or phrases as _fill-in-the-blanks_ in the [study view](/concepts/views/#study-view).

- Markdown written or imported into Flotes using (`__`) will display as fill-in-the-blank.
- When exported, these same sections will render as standard bold text for compatibility.

#### Concealed Sections

Markdown supports three ways to create horizontal rules: `___`, `***`, and `---`. 

Flotes uses triple underscores (`___`) to define _concealed sections_ — blocks of content hidden during [study](/concepts/views/#study-view). The other syntaxes (`***`, `---`) remain unchanged and can still be used to create visual dividers if needed.

<div style="border: 1px solid rgba(108, 112, 134, .5); border-radius: 8px; box-shadow: rgba(0, 0, 0, .35) 0 5px 15px;">
  <img style="border-radius: 12px; object-fit: cover; object-position: top; max-height: 20rem; width: 100%" src="https://ik.imagekit.io/flotes/flotes/flotes-edit-no-side.png?updatedAt=1747234641933"  />
</div>

<!-- 
### Example


```
The mitochondria is known as the __powerhouse__ of the cell.

___

It generates most of the cell's supply of ATP, used as a source of chemical energy.

___
```

In the [study view](concepts/views/#study-view)
  - `__powerhouse__` will appear as a fill-in-the-blank
  - content between `___` lines will be _concealed_ until revealed.

If exported from Flotes
  - `__powerhouse__` text will be rendered as **bold**
  - concealed blocks will become horizontal lines.


-->
