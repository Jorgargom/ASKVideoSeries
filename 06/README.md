# Part 6 - Reminders API

Here we show you how to use the Reminders API to have Alexa say a message on a specific point in time. The user has to grant permission for this so we also show how to send a card to the Alexa app to get this permission.
Additionally we show you how to use a slot of type AMAZON.SearchQuery to capture arbitrary sentences that the user might say (no predefined slot type).

## Milestones

1. **Build Tab**: enable Reminders in Permissions
2. **Build Tab**: add reminder birthday intent and collect reminder via SearchQuery
3. **Code Tab**: add Reminders permission constant
4. **Code Tab**: create Reminders structure (use SCHEDULE_ABSOLUTE)
5. **Code Tab**: add remind birthday intent handler with support for confirmation
6. **Code Tab**: add new handler to skill builder

## Concepts

1. Reminders API
2. AMAZON.SearchQuery

## Diff

1. *lambda/custom/logic.js*: create this file to encapsulate birthday calculation logic (and reminder structure creation). Move moment-timezone require to this file
2. *skill.json*: add permission to read/write reminders
3. *lambda/custom/localisation.js*: add all messages related to reminders. Improve help message
4. *models/es-ES.json*: add remind birthday intent, slot-less utterances and utterances to collect a message slot (SearchQuery). Use auto-delegate to collect the slot if not present. Add prompts. Add intent confirmation.
5. *lambda/custom/index.js*: replace moment library require with a require for logic.js. Add constant with reminders permission. Replace birthday logic in say birthday intent with calls to logic.js. Add remind birthday intent handler. Verify intent was confirmed. Create reminder using timezone info (put creation of reminder structure in logic.js). Add new handler to skill builder

Warning: the simulator might return inconsistent timezone results such your geographical timezone by API but a different time (not consistent with your timezone). It can also return no time zone at all. In order to see the reminders demo working properly please try it on a physical device