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

Tests performed at 2022-10-10T22:03:35.317Z

#### Pattern '0 0 0 L 2 *'
```
Tests

croner          - Success - 2023-02-28 00:00:00
node-cron       - Failure - Error: L is a invalid expression for day of month
node-schedule   - Success - 2023-02-28 00:00:00
cronosjs        - Success - 2023-02-28 00:00:00
cron            - Failure - Error: Unknown alias: l

Benchmark

croner x 116,870 ops/sec ±1.02% (91 runs sampled)
node-schedule x 403 ops/sec ±0.84% (89 runs sampled)
cronosjs x 66,637 ops/sec ±4.58% (86 runs sampled)

Fastest is croner
```

#### Pattern '1 2 3 4 5 6'
```
Tests

croner          - Success - 2023-05-04 03:02:01
node-cron       - Success - 1970-01-01 01:00:00
node-schedule   - Success - 2023-05-04 03:02:01
cronosjs        - Success - 2023-05-04 03:02:01
cron            - Success - 2023-06-03 03:02:01

Benchmark

croner x 108,152 ops/sec ±0.61% (94 runs sampled)
node-cron x 21,838 ops/sec ±4.73% (83 runs sampled)
node-schedule x 2,589 ops/sec ±3.74% (86 runs sampled)
cronosjs x 56,642 ops/sec ±0.84% (93 runs sampled)
cron x 71,149 ops/sec ±0.48% (94 runs sampled)

Fastest is croner
```

#### Pattern '*/3 */3 */3 * * *'
```
Tests

croner          - Success - 2022-10-11 00:06:00
node-cron       - Success - 1970-01-01 01:00:00
node-schedule   - Success - 2022-10-11 00:06:00
cronosjs        - Success - 2022-10-11 00:06:00
cron            - Success - 2022-10-11 00:06:00

Benchmark

croner x 95,032 ops/sec ±0.48% (90 runs sampled)
node-cron x 6,902 ops/sec ±0.81% (89 runs sampled)
node-schedule x 16,349 ops/sec ±2.10% (92 runs sampled)
cronosjs x 38,733 ops/sec ±0.45% (92 runs sampled)
cron x 43,981 ops/sec ±2.35% (90 runs sampled)

Fastest is croner
```

#### Pattern '0 0 0 29 2 1'
```
Tests

croner          - Success - 2023-02-06 00:00:00
node-cron       - Success - 1970-01-01 01:00:00
node-schedule   - Success - 2023-02-06 00:00:00
cronosjs        - Success - 2023-02-06 00:00:00
cron            - Success - 2023-03-06 00:00:00

Benchmark

croner x 99,672 ops/sec ±8.12% (83 runs sampled)
node-cron x 22,966 ops/sec ±4.11% (86 runs sampled)
node-schedule x 3,423 ops/sec ±0.99% (92 runs sampled)
cronosjs x 56,689 ops/sec ±0.60% (92 runs sampled)
cron x 69,469 ops/sec ±0.72% (95 runs sampled)

Fastest is croner
```

#### Pattern '0 0 0 29 2 *'
```
Tests

croner          - Success - 2024-02-29 00:00:00
node-cron       - Success - 1970-01-01 01:00:00
node-schedule   - Success - 2024-02-29 00:00:00
cronosjs        - Success - 2024-02-29 00:00:00
cron            - Success - 2023-03-29 00:00:00

Benchmark

croner x 117,183 ops/sec ±1.33% (92 runs sampled)
node-cron x 20,366 ops/sec ±7.15% (84 runs sampled)
node-schedule x 210 ops/sec ±0.86% (87 runs sampled)
cronosjs x 57,252 ops/sec ±1.19% (94 runs sampled)
cron x 69,327 ops/sec ±0.41% (94 runs sampled)

Fastest is croner
```

