# Part 2 - Skill Internationalization (i18n) and Interceptors

In this module we explain how to use i18next to do the internationalization of your skill. We got rid of the sprintf module and now we're using plain i18next for string replacement if necessary.
We also introduce interceptors and attributtes.

## Milestones

1. **Developer Console**: adding an extra locale (es-ES, translated from en-US)
2. **Code Tab**: i18next dependency, sprintf, languageStrings (embedded for now)
3. **Code Tab**: Request and Response Interceptors (loggers), Localisation Interceptor (simplest, no arrays)
4. **Code Tab**: Attributes Manager, Request Attributes, requestAttributes.t and requestAttributes.t with parameters (string replacement)

## Concepts

1. Multiple models per local
2. Key/value string resources
3. Enriching request attributes with t function
4. Attribute manager as key/value store
5. High level attribute type (request(short term), session(med term), persistent(long term))

## Diff

1. *lambda/custom/package.json*: add i18next dependencie, update all existing dependencies to latest versions
2. *lambda/custom/index.js*: add i18next requires, add languageStrings, get request attributes in all handlers and fetch localisation strings via function t, add 3 interceptors (log request, log response and localization interceptor), add them to the exports via Alexa skill builder (bottom of file)
3. *models/es-ES.json*: add this file copied from en-US.json and translate