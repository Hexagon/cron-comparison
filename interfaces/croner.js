import { Cron } from "croner";

function CronInterface(pattern, options, fn) {
    let job;
    return {
        id: "croner",
        init: () => job = new Cron(pattern, options),
        next: () => job.next(),
        enumerate: () => job.enumerate(),
        stop: () => {}
    };
}

export default CronInterface;