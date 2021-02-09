const moment = require('moment-timezone');

module.exports = {
    timeUnix: (timezone = "Asia/Bangkok") => {
        return moment().tz(timezone).unix();
    },

    isTimout: (createAt, setTimeout = 5, timezone = "Asia/Bangkok") => {
        const today = moment().tz(timezone).unix();
        const minute = (today - createAt) / 60;

        return minute > setTimeout
    },

    isToday: (createAt) => {
        const some = new Date(createAt * 1000)
        const start = new Date(new Date().setHours(0,0,0,0)).getTime()
        const end = new Date(new Date().setHours(24,0,0,0)).getTime()
        return some >= start && some <= end
    },

    isWeek: (createAt) => {
        const some = new Date(createAt * 1000)
        const start = new Date(new Date().setHours(0,0,0,0))
        start.setDate(-7)
        const end = new Date(new Date().setHours(24,0,0,0))
        start.setDate(7)
        return some >= start.getTime() && some <= end.getTime()
    },

    isMouth: (createAt) => {
        const some = new Date(createAt * 1000)
        const start = new Date(new Date().setHours(0,0,0,0))
        start.setDate(-30)
        const end = new Date(new Date().setHours(24,0,0,0))
        start.setDate(30)
        return some >= start.getTime() && some <= end.getTime()
    },

    timeDifference: (date1, date2) => {
        const newDate1 = new Date(date1 * 1000)
        const newDate2 = new Date(date2 * 1000)

        let difference = newDate2.getTime() - newDate1.getTime();

        let daysDifference = Math.floor(difference / 1000 / 60 / 60 / 24);
        difference -= daysDifference * 1000 * 60 * 60 * 24

        let hoursDifference = Math.floor(difference / 1000 / 60 / 60);
        difference -= hoursDifference * 1000 * 60 * 60

        let minutesDifference = Math.floor(difference / 1000 / 60);
        difference -= minutesDifference * 1000 * 60

        let secondsDifference = Math.floor(difference / 1000);

        return {
            daysDifference,
            hoursDifference,
            minutesDifference,
            secondsDifference
        }
    },
}