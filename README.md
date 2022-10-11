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

Tests performed at 2022-10-11T19:19:36.411Z

#### Pattern '0 0 0 L 2 *'
```
Tests

croner          - OK    - 2023-02-28 00:00:00
node-cron       - FAIL  - Error: L is a invalid expression for day of month
node-schedule   - OK    - 2023-02-28 00:00:00
cronosjs        - OK    - 2023-02-28 00:00:00
cron            - FAIL  - Error: Unknown alias: l

Benchmark (only OK)

croner          x 117,083 ops/sec ±0.96% (88 runs sampled)
node-schedule   x 376 ops/sec ±3.26% (83 runs sampled)
cronosjs        x 13,037 ops/sec ±153.10% (82 runs sampled)

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

croner          x 89,704 ops/sec ±16.32% (75 runs sampled)
node-schedule   x 2,624 ops/sec ±3.78% (88 runs sampled)
cronosjs        x 45,527 ops/sec ±7.00% (75 runs sampled)

Fastest is croner         
```

#### Pattern '*/3 */3 */3 * * *'
```
Tests

croner          - OK    - 2022-10-11 21:21:00
node-cron       - FAIL  - 1970-01-01 01:00:00
node-schedule   - OK    - 2022-10-11 21:21:00
cronosjs        - OK    - 2022-10-11 21:21:00
cron            - OK    - 2022-10-11 21:21:00

Benchmark (only OK)

croner          x 93,280 ops/sec ±1.30% (90 runs sampled)
node-schedule   x 16,019 ops/sec ±7.51% (75 runs sampled)
cronosjs        x 37,458 ops/sec ±1.65% (89 runs sampled)
cron            x 44,015 ops/sec ±1.61% (91 runs sampled)

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

croner          x 110,851 ops/sec ±0.76% (92 runs sampled)
node-schedule   x 3,455 ops/sec ±1.67% (92 runs sampled)
cronosjs        x 55,666 ops/sec ±0.50% (92 runs sampled)

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

croner          x 98,211 ops/sec ±9.39% (83 runs sampled)
node-schedule   x 99.90 ops/sec ±33.09% (56 runs sampled)
cronosjs        x 46,223 ops/sec ±7.10% (78 runs sampled)

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

croner          x 85,444 ops/sec ±8.34% (74 runs sampled)
node-schedule   x 1,067 ops/sec ±3.56% (81 runs sampled)
cronosjs        x 41,815 ops/sec ±1.20% (93 runs sampled)
cron            x 43,941 ops/sec ±6.45% (83 runs sampled)

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

croner          x 100,192 ops/sec ±0.50% (93 runs sampled)
node-schedule   x 969 ops/sec ±15.94% (78 runs sampled)
cronosjs        x 51,693 ops/sec ±4.36% (83 runs sampled)

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

croner          x 74,780 ops/sec ±5.75% (78 runs sampled)
node-schedule   x 1,151 ops/sec ±4.00% (88 runs sampled)
cronosjs        x 32,598 ops/sec ±9.32% (74 runs sampled)

Fastest is croner         
```

### Test summary

| Library | OK | FAIL | % OK |
|:......:|:--:|:---:|:-----:|
| croner | 8 | 0 | 100% |
| node-cron | 0 | 8 | 0% |
| node-schedule | 8 | 0 | 100% |
| cronosjs | 8 | 0 | 100% |
| cron | 2 | 6 | 25% |

