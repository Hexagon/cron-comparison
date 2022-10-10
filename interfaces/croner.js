import { Cron } from "croner";

function CronInterface(pattern, options, fn) {
    let job;
    return {
        id: "croner",
        init: () => job = Cron(pattern, options, fn),
        next: () => job.next(),
        enumerate: () => job.enumerate(),
        stop: () => job.stop()
    };
}

export default CronInterface;