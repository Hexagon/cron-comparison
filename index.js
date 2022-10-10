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
//import CronerDev from "./interfaces/cronerdev.js";
import CronosJS from "./interfaces/cronosjs.js";

console.log("Tests performed at " + new Date().toISOString());

for (const pattern of ["0 0 0 L 2 *", "1 2 3 4 5 6", "*/3 */3 */3 * * *", "0 0 0 29 2 1", "0 0 0 29 2 *"]) {

    console.log("");
    console.log("### Testing next invocation of pattern '" + pattern + "'");
    
    let successful = [];

    for (const scheduler of [Croner, /*CronerDev,*/ NodeCron, NodeSchedule, CronosJS, Cron]) {
    //for (const scheduler of [Croner, CronerDev]) {
        let 
            job = scheduler(pattern),
            result;
        try {
            job.init();
            result = job.id.padEnd(15," ") + " - Success - " + new Date(job.next()).toLocaleString();
            successful.push(scheduler);
        } catch (e) {
            result = job.id.padEnd(15," ") + " - Failure - " + e.toString();
        }
        job.stop();
        console.log(result);

    }

    console.log("");
    console.log("#### Benchmark using pattern '" + pattern + "'");
    
    var bm = new Benchmark.Suite;

    for (const scheduler of successful) {
        let 
            job = scheduler(pattern),
            result;
        bm.add(job.id.padEnd(15, " "), function() {
            try {
                job.init();
                result = job.id.padEnd(15," ") + " - Success - " + new Date(job.next()).toLocaleString();
            } catch (e) {
                result = job.id.padEnd(15," ") + " - Failure - " + e.toString();
            }
            job.stop();        
        });
    }
    
    
    // run async
    // add listeners
    bm
      .on('cycle', function(event) {
        console.log(String(event.target));
      })
      .on('complete', function() {
        console.log("");
        console.log("Fastest is **" + this.filter('fastest').map('name') + "**");
      })  
      .run({ 'async' : false });
}

console.log("");