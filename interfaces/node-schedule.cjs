const schedule = require("node-schedule");

function CronInterface(pattern, options, fn) {
    let job;
    return {
        id: "node-schedule",
        init: () => job = schedule.scheduleJob(pattern, fn ?? (() => { })),
        next: () => job.nextInvocation(),
        enumerate: () => { throw new Error("Not suppported") },
        stop: () => job.cancel()
    };
}

module.exports = CronInterface;