---
title: Writing Markdown
description: Flotes Documentation - Markdown - Basics
---




## Headings
---

Increasing the number of leading *hashtags* decreases the size of the heading.

```
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
```

## Bold | Italics | Fill in the Blanks
---

This is a __fill in the blank__ (in Flotes). This is **bold text**. This is *Italic text*. This is ***bold and italic text***

```
This is a __fill in the blank__ (in Flotes).
This is **bold text**.
This is *Italic text*.
This is ***bold and italic text***
```

## Lines | Conceal Sections

Markdown reserves three different syntax for creating **lines**. three underscores, three asterisks and three dashes.

```
___

This is a concealed section in Flotes.

But just two lines in traditional Markdown
___

This is always a line

***
```

## Block Quotes
---

> Block quotes indent text
>> You can nest block quotes
>
> Add blank indents to add paragraphs
 

```
> Block quotes indent text
>> You can nest block quotes
>
> Add blank lines to add paragraphs
```

## Lists

### Ordered

1. Write documentation
2. ???
3. Profit!!!

```
1. Write documentation
2. ???
3. Profit!!!
```

### Unordered

- This is a list
  - Tab to indent
- Back to the original depth

```
- This is a list
  - Tab to indent
- Back to the original depth
```

## Images | Videos | Links

To create a link wrap the label in brackets and the url in parenthesis

[Flotes App](https://flotes.app)

```
[Flotes App](https://flotes.app)
```

Video, image, and gif syntax is similar. The difference being an *exclamation point* at the beginning. 
- The description will be used in the case of a broken image/video.

<div style="border: 1px solid rgba(108, 112, 134, .5); border-radius: 8px; box-shadow: rgba(0, 0, 0, .35) 0 5px 15px;">
  <img style="border-radius: 12px" src="https://ik.imagekit.io/flotes/flotes/big-text-2.png?updatedAt=1748262778505" />
</div>


```
![Flotes Landing Page](https://ik.imagekit.io/flotes/flotes/big-text-2.png?updatedAt=1748262778505)
```

## Code Blocks
---

Code blocks can be syntax highlighted by adding the language to the first line

```javascript
const hello = "world"
```


> \`\`\`javascript
>
> const hello = "world"
>
> \`\`\`

### Flow Charts

Flotes enables a special type of syntax for creating Flowcharts with Markdown, called **Mermaid**. 


> \`\`\`mermaid
>
> graph TD;
>
> A[My Node]-->B[My 2nd Node]
> 
> \`\`\`

:::note[Flowchart Templates]{icon="seti:pipeline"}
To generate scaffolding for a flowchart
- In the Flotes editor, type `/` to toggle the template prompt
- Then type **flowchart** and press *enter*
:::


---

:::note[Keyboard Shortcuts]{icon="seti:markdown"}

You can apply Markdown formatting in the Flotes editor using keyboard shortcuts. These keymaps are fully configurable in Settings.

:::

