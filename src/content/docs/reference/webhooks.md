---
title: Webhooks (Integrations)
description: Flotes Documentation - Webhooks - Integrate with other applications
---

Webhooks are a way of sending data on an *event*. You can then use automation services like [**IFTTT**](https://ifttt.com) to perform an *action* when that data is received. - Webhooks allow users to integrate Flotes with just about any well-known application. With maximum flexibility and customization. 

Using the `on_study_complete` event as an example, you could schedule your next study session:
- As a Trello card
- As a Todoist todo
- As a database item in Notion
- As a note in Evernote
- As an event in Google Calendar

### Flotes Webhook Events

Flotes currently defines two explicit events to execute webhooks on.
- [When you complete a study session](reference/webhooks/#on-study-complete)
- [When you archive a notebook](reference/webhooks/#on-notebook-archived)


#### On Study Complete

**Payload**
```
title
description
next_study_date
notebook_id
```


#### On Notebook Archived

**Payload**
```
title
description
value  
notebook_id
```

:::note[Value]

`value` is all notes aggregated into one string, similar to what's shown on the summary screen.
:::


