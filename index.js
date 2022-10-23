// Prepare require for modules who require it...
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);

// Prepare benchmark
var Benchmark = require('benchmark');

// Commonjs modules 
const NodeSchedule = require("./interfaces/node-schedule.cjs");
const Cron = require("./interfaces/cron.cjs");
const NodeCron = require("./interfaces/nodecron.cjs");

// ES modules
import Croner from "./interfaces/croner.js";
import CronosJS from "./interfaces/cronosjs.js";
import CronSchedule from "./interfaces/cronschedule.js";

console.log("Tests performed at " + new Date().toISOString());
const summary = {};

for (const pattern of ["0 0 0 L 2 *", "1 2 3 4 5 6", "*/3 */3 */3 * * *", "0 0 0 29 2 1", "0 0 0 29 2 *","15 15 */3 * * *","15 15 */3 */10 10 *","15 15 */3 * 10 SUN,MON,TUE"]) {

    console.log("");
    console.log("#### Pattern '" + pattern + "'");
    console.log("```");
    console.log("Tests");
    console.log("");

    let reports = [];

    for (const scheduler of [Croner, NodeCron, CronSchedule, NodeSchedule, CronosJS, Cron]) {
        let 
            job = new scheduler(pattern),
            result = { id: job.id, scheduler };
        try {
            job.init();
            result.result = new Date(job.next()).toLocaleString();
            job.stop();
        } catch (e) {
            result.result = undefined;
            result.message = e.toString();
        }
        reports.push(result);
    }

    // Guess correct answer from popular demand
    let correct = {},
        bestCount = 0,
        best;
    for(const report of reports) {
      if (report.result) {
        correct[report.result] = correct[report.result] ? correct[report.result]++ : 1;
        if (correct[report.result] > bestCount) {
          bestCount = correct[report.result];
          best = report.result;
        }
      }
    }

    // Print test results
    for(const report of reports) {
      report.correct = report?.result == best;
      console.log(report.id.padEnd(15, " ") + " - " + (report.correct ? "OK   " : "FAIL ") + " - " + (report.correct ? report.result : (report.result || report.message)));
      summary[report.id] = summary[report.id] || {};
      summary[report.id].ok = (summary[report.id].ok || 0) + (report.correct ?  1 : 0);
      summary[report.id].fail = (summary[report.id].fail || 0) + (!report.correct ? 1 : 0);
    }

    console.log("");
    console.log("Benchmark (only OK)");
    console.log("");

    var bm = new Benchmark.Suite;

    for (const report of reports) {
      if( report.correct ) {
        const job = new report.scheduler(pattern);
        bm.add(job.id.padEnd(15, " "), function() { job.init(pattern); job.next(); job.stop(); });
      } 
    }
    
    bm
      .on('cycle', function(event) {
        console.log(String(event.target));
      })
      .on('complete', function() {
        console.log("");
        console.log("Fastest is " + this.filter('fastest').map('name'));
      })  
      .run({ 'async' : false });

    console.log("```");
}

console.log("");
console.log("## Test summary");
console.log("");
console.log("| Library | OK | FAIL | % OK |");
console.log("| :---: | :--: | :---: | :-----: |");
for(const report in summary) {
  console.log("| " + report + " | " + summary[report].ok + " | " + summary[report].fail + " | " + (summary[report].ok / Math.round((summary[report].ok + summary[report].fail))*100) + "% |" );
}
console.log("");