import { parseCronExpression } from 'cron-schedule';

function CronInterface(pattern, options, fn) {
    let job;
    return {
        id: "cron-schedule",
        init: () => job = parseCronExpression(pattern),
        next: () => job.getNextDate(),
        enumerate: (n) => job.getNextDates(n),
        stop: () => {}
    };
}

export default CronInterface;