# cron-comparison

Test/benchmark of all javascript cron implementations

## Running

Run tets and show output in console

`npm run test`

Run tests and update readme with results

`npm run update-readme`

## Latest results

> cron-comparison@1.0.0 test
> node index.js

Tests performed at 2022-10-10T21:44:27.963Z

### Testing next invocation of pattern '0 0 0 L 2 *'
croner          - Success - 2023-02-28 00:00:00
node-cron       - Failure - Error: L is a invalid expression for day of month
node-schedule   - Success - 2023-02-28 00:00:00
cronosjs        - Success - 2023-02-28 00:00:00
cron            - Failure - Error: Unknown alias: l

#### Benchmark using pattern '0 0 0 L 2 *'
croner          x 25,523 ops/sec ±6.76% (75 runs sampled)
node-schedule   x 394 ops/sec ±1.11% (89 runs sampled)
cronosjs        x 28,150 ops/sec ±5.88% (85 runs sampled)

Fastest is **cronosjs       ,croner         **

### Testing next invocation of pattern '1 2 3 4 5 6'
croner          - Success - 2023-05-04 03:02:01
node-cron       - Success - 1970-01-01 01:00:00
node-schedule   - Success - 2023-05-04 03:02:01
cronosjs        - Success - 2023-05-04 03:02:01
cron            - Success - 2023-06-03 03:02:01

#### Benchmark using pattern '1 2 3 4 5 6'
croner          x 28,547 ops/sec ±3.24% (88 runs sampled)
node-cron       x 20,027 ops/sec ±2.08% (85 runs sampled)
node-schedule   x 2,453 ops/sec ±3.73% (89 runs sampled)
cronosjs        x 25,046 ops/sec ±3.82% (93 runs sampled)
cron            x 6,328 ops/sec ±0.71% (91 runs sampled)

Fastest is **croner         **

### Testing next invocation of pattern '*/3 */3 */3 * * *'
croner          - Success - 2022-10-11 00:00:00
node-cron       - Success - 1970-01-01 01:00:00
node-schedule   - Success - 2022-10-11 00:00:00
cronosjs        - Success - 2022-10-11 00:00:00
cron            - Success - 2022-10-11 00:00:00

#### Benchmark using pattern '*/3 */3 */3 * * *'
croner          x 48,463 ops/sec ±0.58% (93 runs sampled)
node-cron       x 5,968 ops/sec ±7.77% (80 runs sampled)
node-schedule   x 11,670 ops/sec ±9.66% (72 runs sampled)
cronosjs        x 13,601 ops/sec ±14.22% (82 runs sampled)
cron            x 19,891 ops/sec ±5.06% (82 runs sampled)

Fastest is **croner         **

### Testing next invocation of pattern '0 0 0 29 2 1'
croner          - Success - 2023-02-06 00:00:00
node-cron       - Success - 1970-01-01 01:00:00
node-schedule   - Success - 2023-02-06 00:00:00
cronosjs        - Success - 2023-02-06 00:00:00
cron            - Success - 2023-03-06 00:00:00

#### Benchmark using pattern '0 0 0 29 2 1'
croner          x 25,578 ops/sec ±5.98% (76 runs sampled)
node-cron       x 15,730 ops/sec ±9.29% (72 runs sampled)
node-schedule   x 3,734 ops/sec ±8.08% (81 runs sampled)
cronosjs        x 17,457 ops/sec ±12.72% (64 runs sampled)
cron            x 3,828 ops/sec ±22.43% (49 runs sampled)

Fastest is **croner         **

### Testing next invocation of pattern '0 0 0 29 2 *'
croner          - Success - 2024-02-29 00:00:00
node-cron       - Success - 1970-01-01 01:00:00
node-schedule   - Success - 2024-02-29 00:00:00
cronosjs        - Success - 2024-02-29 00:00:00
cron            - Success - 2023-03-29 00:00:00

#### Benchmark using pattern '0 0 0 29 2 *'
croner          x 31,857 ops/sec ±3.35% (83 runs sampled)
node-cron       x 13,009 ops/sec ±9.85% (65 runs sampled)
node-schedule   x 160 ops/sec ±9.29% (68 runs sampled)
cronosjs        x 19,121 ops/sec ±6.53% (76 runs sampled)
cron            x 1,653 ops/sec ±14.65% (60 runs sampled)

Fastest is **croner         **

