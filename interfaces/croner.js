import { Cron } from "croner";

function CronInterface(pattern, options, fn) {
    let job;
    return {
        init: () => job = new Cron(pattern, options),
        next: () => job.nextRun(),
        enumerate: (n) => job.nextRuns(n),
        stop: () => {}
    };
}

export default {
    id: "croner",
    url: "https://github.com/hexagon/croner",
    interface: CronInterface
}