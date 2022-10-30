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

Tests performed at 2022-10-30T22:28:27.206Z

#### Pattern '0 0 0 L 2 *'
```
Tests

croner          - OK    - 2023-02-28 00:00:00
node-cron       - FAIL  - Error: L is a invalid expression for day of month
node-schedule   - OK    - 2023-02-28 00:00:00
cronosjs        - OK    - 2023-02-28 00:00:00
cron            - FAIL  - Error: Unknown alias: l

Benchmark (only OK)

croner          x 53,084 ops/sec ±7.55% (57 runs sampled)
node-schedule   x 252 ops/sec ±8.18% (54 runs sampled)
cronosjs        x 21,494 ops/sec ±14.09% (68 runs sampled)

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

croner          x 78,217 ops/sec ±4.49% (72 runs sampled)
node-schedule   x 1,304 ops/sec ±7.17% (62 runs sampled)
cronosjs        x 15,991 ops/sec ±16.92% (57 runs sampled)

Fastest is croner         
```

#### Pattern '*/3 */3 */3 * * *'
```
Tests

croner          - OK    - 2022-10-31 00:00:00
node-cron       - FAIL  - 1970-01-01 01:00:00
node-schedule   - OK    - 2022-10-31 00:00:00
cronosjs        - OK    - 2022-10-31 00:00:00
cron            - OK    - 2022-10-31 00:00:00

Benchmark (only OK)

croner          x 50,946 ops/sec ±8.85% (52 runs sampled)
node-schedule   x 8,729 ops/sec ±4.66% (60 runs sampled)
cronosjs        x 8,828 ops/sec ±13.02% (55 runs sampled)
cron            x 13,994 ops/sec ±7.40% (56 runs sampled)

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

croner          x 62,212 ops/sec ±6.63% (57 runs sampled)
node-schedule   x 2,101 ops/sec ±6.65% (52 runs sampled)
cronosjs        x 16,582 ops/sec ±6.85% (58 runs sampled)

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

croner          x 37,612 ops/sec ±4.64% (60 runs sampled)
node-schedule   x 119 ops/sec ±6.96% (52 runs sampled)
cronosjs        x 16,618 ops/sec ±7.51% (62 runs sampled)

Fastest is croner         
```

#### Pattern '15 15 */3 * * *'
```
Tests

croner          - OK    - 2022-10-31 00:15:15
node-cron       - FAIL  - 1970-01-01 01:00:00
node-schedule   - OK    - 2022-10-31 00:15:15
cronosjs        - OK    - 2022-10-31 00:15:15
cron            - OK    - 2022-10-31 00:15:15

Benchmark (only OK)

croner          x 55,150 ops/sec ±5.95% (62 runs sampled)
node-schedule   x 1,465 ops/sec ±6.79% (64 runs sampled)
cronosjs        x 11,149 ops/sec ±5.83% (60 runs sampled)
cron            x 2,847 ops/sec ±6.20% (60 runs sampled)

Fastest is croner         
```

#### Pattern '15 15 */3 */10 10 *'
```
Tests

croner          - OK    - 2022-10-31 00:15:15
node-cron       - FAIL  - 1970-01-01 01:00:00
node-schedule   - OK    - 2022-10-31 00:15:15
cronosjs        - OK    - 2022-10-31 00:15:15
cron            - FAIL  - 2022-11-01 00:15:15

Benchmark (only OK)

croner          x 50,257 ops/sec ±6.36% (52 runs sampled)
node-schedule   x 1,372 ops/sec ±6.86% (57 runs sampled)
cronosjs        x 12,775 ops/sec ±2.65% (62 runs sampled)

Fastest is croner         
```

#### Pattern '15 15 */3 * 10 SUN,MON,TUE'
```
Tests

croner          - OK    - 2022-10-31 00:15:15
node-cron       - FAIL  - 1970-01-01 01:00:00
node-schedule   - OK    - 2022-10-31 00:15:15
cronosjs        - OK    - 2022-10-31 00:15:15
cron            - FAIL  - 2022-11-01 00:15:15

Benchmark (only OK)

croner          x 39,533 ops/sec ±5.66% (56 runs sampled)
node-schedule   x 1,175 ops/sec ±6.08% (50 runs sampled)
cronosjs        x 9,742 ops/sec ±4.39% (60 runs sampled)

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

