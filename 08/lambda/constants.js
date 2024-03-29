module.exports = {
    // these are the permissions needed to get the first name
    GIVEN_NAME_PERMISSION: ['alexa::profile:given_name:read'],
    // these are the permissions needed to send reminders
    REMINDERS_PERMISSION: ['alexa::alerts:reminders:skill:readwrite'],
    // max number of entries to fetch from the external API
    MAX_BIRTHDAYS: 5,
    // APL documents
    APL: {
        launchDoc: require('./documents/launchScreen.json')
    }
}