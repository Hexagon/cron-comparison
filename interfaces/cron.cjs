const cron = require("cron");

function CronInterface(pattern, options, fn) {
    let job;
    return {
        id: "cron",
        init: () => job = new cron.CronJob(pattern, fn ?? (() => { })),
        next: () => job.nextDates(),
        enumerate: (n) => job.nextDates(n),
        stop: () => {}
    };
}

module.exports = CronInterface;