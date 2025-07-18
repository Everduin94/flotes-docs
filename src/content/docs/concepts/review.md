---
title: Review
description: Flotes Documentation - Review - Spaced repetition to improve efficiency
---

<div style="border: 1px solid rgba(108, 112, 134, .5); border-radius: 8px; box-shadow: rgba(0, 0, 0, .35) 0 5px 15px; margin-bottom: 2rem;">
  <img style="border-radius: 12px" src="https://ik.imagekit.io/flotes/flotes/flotes-home-a11y.png?updatedAt=1747234641795" />
</div>


Spaced repetition is a learning technique that schedules review sessions at increasing intervals to maximize retention and minimize forgetting. Instead of studying everything all at once, you review notes just before you're likely to forget them — reinforcing memory more effectively over time.

In Flotes, spaced repetition is built into the notebook system. Each notebook progresses through different states based on how often it's studied and its specific configuration.

#### Spacing States

Notebooks have many potential states that affect their sidenav order, visibility, and when their webhooks fire (advanced). These states are [configurable](/concepts/notebooks/#options) per notebook.

- <span style="color: #7f849c">**Not Started**</span>: This notebook has not been studied
- **Waiting**: Scheduled — will become optimal on its ideal study date
- <span style="color: #a6e3a1">**Optimal**</span>: Ready to be studied now
- <span style="color: #f9e2af">**Sub-optimal**</span>: Slightly overdue for review
- <span style="color: #f38ba8">**Overdue**</span>: Significantly past its ideal review time
- <span style="color: #94e2d5">**Complete**</span>: Studied enough to be considered complete
- <span style="color: #89dceb">**Archived**</span>: Hidden from active notebooks; spacing is paused
- <span style="color: #89b4fa">**Resource**</span>: Not intended for study; spacing is disabled

---

:::note[Integrations]

Flotes can integration review notifications with virtually any application using webhooks.

:::
