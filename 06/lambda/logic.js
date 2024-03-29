const moment = require('moment-timezone'); // will help us do all the birthday math

module.exports = {
    getBirthdayData(day, month, year, timezone) {
        const today = moment().tz(timezone).startOf('day');
        const wasBorn = moment(`${month}/${day}/${year}`, "MM/DD/YYYY").tz(timezone).startOf('day');
        const nextBirthday = moment(`${month}/${day}/${today.year()}`, "MM/DD/YYYY").tz(timezone).startOf('day');
        if(today.isAfter(nextBirthday))
            nextBirthday.add('years', 1);
        const age = today.diff(wasBorn, 'years');
        const daysAlive = today.diff(wasBorn, 'days');
        const daysUntilBirthday = nextBirthday.startOf('day').diff(today, 'days'); // same day returns 0

        return {
            daysAlive: daysAlive,
            daysUntilBirthday: daysUntilBirthday,
            age: age //in years
        }
    },
    createReminderData(daysUntilBirthday, timezone, locale, message) {
      moment.locale(locale);
      const now = moment().tz(timezone);
      let scheduled;
      if(daysUntilBirthday === 0) {
          scheduled = now.startOf('day').add(1, 'years'); // reminder created on day of birthday will trigger next year
      } else {
          scheduled = now.startOf('day').add(daysUntilBirthday, 'days');
      }
      console.log('Reminder schedule: ' + scheduled.format('YYYY-MM-DDTHH:mm:00.000'));

        return {
            requestTime: now.format('YYYY-MM-DDTHH:mm:00.000'),
            trigger: {
                type: 'SCHEDULED_ABSOLUTE',
                scheduledTime: scheduled.format('YYYY-MM-DDTHH:mm:00.000'),
                timeZoneId: timezone,
            },
            alertInfo: {
              spokenInfo: {
                content: [{
                  locale: locale,
                  text: message,
                }],
              },
            },
            pushNotification: {
              status: 'ENABLED',
            }
        }
    }
}