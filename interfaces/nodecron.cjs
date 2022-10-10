const cron = require("node-cron");

function CronInterface(pattern, options, fn) {
    let job;
    return {
        id: "node-cron",
        init: () => {job = new cron.schedule(pattern, fn ?? (() => { }), { scheduled: true }); },
        next: () => { return null; },
        enumerate: (n) => {},
        stop: () => { job?.stop && job.stop(); }
    };
}

module.exports = CronInterface;