# cron-comparison

Test and benchmark of all javascript cron implementations

## Running

Run tests and show output in console

`npm run test`

Run tests and update readme with results

`npm run update-readme`

## Latest results

> cron-comparison@1.0.0 test
> node index.js

Tests performed at 2022-10-11T19:25:51.162Z

#### Pattern '0 0 0 L 2 *'
```
Tests

croner          - OK    - 2023-02-28 00:00:00
node-cron       - FAIL  - Error: L is a invalid expression for day of month
node-schedule   - OK    - 2023-02-28 00:00:00
cronosjs        - OK    - 2023-02-28 00:00:00
cron            - FAIL  - Error: Unknown alias: l

Benchmark (only OK)

croner          x 116,096 ops/sec ±1.42% (88 runs sampled)
node-schedule   x 298 ops/sec ±15.53% (67 runs sampled)
cronosjs        x 67,355 ops/sec ±1.46% (93 runs sampled)

Fastest is croner         
```

#### Pattern '1 2 3 4 5 6'
```
Tests

croner          - OK    - 2023-05-04 03:02:01
node-cron       - FAIL  - 1970-01-01 01:00:00
node-schedule   - OK    - 2023-05-04 03:02:01
cronosjs        - OK    - 2023-05-04 03:02:01
cron            - FAIL  - 2023-06-03 03:02:01

Benchmark (only OK)

croner          x 99,952 ops/sec ±7.55% (85 runs sampled)
node-schedule   x 2,299 ops/sec ±7.99% (79 runs sampled)
cronosjs        x 49,308 ops/sec ±6.42% (80 runs sampled)

Fastest is croner         
```

#### Pattern '*/3 */3 */3 * * *'
```
Tests

croner          - OK    - 2022-10-11 21:27:00
node-cron       - FAIL  - 1970-01-01 01:00:00
node-schedule   - OK    - 2022-10-11 21:27:00
cronosjs        - OK    - 2022-10-11 21:27:00
cron            - OK    - 2022-10-11 21:27:00

Benchmark (only OK)

croner          x 88,314 ops/sec ±3.80% (86 runs sampled)
node-schedule   x 19,681 ops/sec ±2.65% (92 runs sampled)
cronosjs        x 37,753 ops/sec ±2.47% (91 runs sampled)
cron            x 38,523 ops/sec ±9.93% (78 runs sampled)

Fastest is croner         
```

#### Pattern '0 0 0 29 2 1'
```
Tests

croner          - OK    - 2023-02-06 00:00:00
node-cron       - FAIL  - 1970-01-01 01:00:00
node-schedule   - OK    - 2023-02-06 00:00:00
cronosjs        - OK    - 2023-02-06 00:00:00
cron            - FAIL  - 2023-03-06 00:00:00

Benchmark (only OK)

croner          x 65,392 ops/sec ±1.73% (75 runs sampled)
node-schedule   x 1,450 ops/sec ±6.96% (55 runs sampled)
cronosjs        x 17,138 ops/sec ±28.04% (42 runs sampled)

Fastest is croner         
```

#### Pattern '0 0 0 29 2 *'
```
Tests

croner          - OK    - 2024-02-29 00:00:00
node-cron       - FAIL  - 1970-01-01 01:00:00
node-schedule   - OK    - 2024-02-29 00:00:00
cronosjs        - OK    - 2024-02-29 00:00:00
cron            - FAIL  - 2023-03-29 00:00:00

Benchmark (only OK)

croner          x 65,055 ops/sec ±8.51% (77 runs sampled)
node-schedule   x 144 ops/sec ±16.17% (64 runs sampled)
cronosjs        x 46,485 ops/sec ±5.93% (80 runs sampled)

Fastest is croner         
```

#### Pattern '15 15 */3 * * *'
```
Tests

croner          - OK    - 2022-10-12 00:15:15
node-cron       - FAIL  - 1970-01-01 01:00:00
node-schedule   - OK    - 2022-10-12 00:15:15
cronosjs        - OK    - 2022-10-12 00:15:15
cron            - OK    - 2022-10-12 00:15:15

Benchmark (only OK)

croner          x 98,238 ops/sec ±5.66% (79 runs sampled)
node-schedule   x 1,314 ops/sec ±1.56% (91 runs sampled)
cronosjs        x 42,967 ops/sec ±1.31% (89 runs sampled)
cron            x 41,395 ops/sec ±13.84% (80 runs sampled)

Fastest is croner         
```

#### Pattern '15 15 */3 */10 10 *'
```
Tests

croner          - OK    - 2022-10-21 00:15:15
node-cron       - FAIL  - 1970-01-01 01:00:00
node-schedule   - OK    - 2022-10-21 00:15:15
cronosjs        - OK    - 2022-10-21 00:15:15
cron            - FAIL  - 2022-11-01 00:15:15

Benchmark (only OK)

croner          x 99,943 ops/sec ±1.61% (93 runs sampled)
node-schedule   x 1,229 ops/sec ±1.03% (92 runs sampled)
cronosjs        x 55,345 ops/sec ±0.54% (93 runs sampled)

Fastest is croner         
```

#### Pattern '15 15 */3 * 10 SUN,MON,TUE'
```
Tests

croner          - OK    - 2022-10-16 00:15:15
node-cron       - FAIL  - 1970-01-01 01:00:00
node-schedule   - OK    - 2022-10-16 00:15:15
cronosjs        - OK    - 2022-10-16 00:15:15
cron            - FAIL  - 2022-11-01 00:15:15

Benchmark (only OK)

croner          x 90,615 ops/sec ±0.74% (95 runs sampled)
node-schedule   x 1,301 ops/sec ±1.10% (93 runs sampled)
cronosjs        x 43,398 ops/sec ±0.42% (90 runs sampled)

Fastest is croner         
```

## Test summary

| Library | OK | FAIL | % OK |
| :---: | :--: | :---: | :-----: |
| croner | 8 | 0 | 100% |
| node-cron | 0 | 8 | 0% |
| node-schedule | 8 | 0 | 100% |
| cronosjs | 8 | 0 | 100% |
| cron | 2 | 6 | 25% |

