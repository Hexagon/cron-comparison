# cron-comparison

Test and benchmark of all javascript cron implementations

## Running

Run tests and show output in console

`npm run test`

Run tests and update readme with results

`npm run update-readme`

## Latest results

> cron-comparison@1.0.2 test
> node index.js

Tests performed at 2023-10-09T13:39:53.626Z

Tested libraries:

*   [croner](https://github.com/hexagon/croner)
*   [node-cron](https://github.com/node-cron/node-cron)
*   [node-schedule](https://github.com/node-schedule/node-schedule)
*   [cronosjs](https://github.com/jaclarke/cronosjs)
*   [cron](https://github.com/kelektiv/node-cron)

#### Pattern '0 0 0 L 2 *'
```
Tests

croner          - OK    - 2/29/2024, 12:00:00 AM
node-cron       - FAIL  - Error: L is a invalid expression for day of month
node-schedule   - OK    - 2/29/2024, 12:00:00 AM
cronosjs        - OK    - 2/29/2024, 12:00:00 AM
cron            - FAIL  - Error: Unknown alias: l

Benchmark (only OK)

croner          x 159,210 ops/sec ±4.43% (83 runs sampled)
node-schedule   x 365 ops/sec ±8.62% (81 runs sampled)
cronosjs        x 75,099 ops/sec ±3.46% (90 runs sampled)

Fastest is croner         
```

#### Pattern '1 2 3 4 5 6'
```
Tests

croner          - OK    - 5/4/2024, 3:02:01 AM
node-cron       - FAIL  - 1/1/1970, 12:00:00 AM
node-schedule   - OK    - 5/4/2024, 3:02:01 AM
cronosjs        - OK    - 5/4/2024, 3:02:01 AM
cron            - OK    - 5/4/2024, 3:02:01 AM

Benchmark (only OK)

croner          x 164,011 ops/sec ±3.94% (90 runs sampled)
node-schedule   x 2,679 ops/sec ±7.32% (86 runs sampled)
cronosjs        x 50,996 ops/sec ±17.06% (88 runs sampled)
cron            x 6,375 ops/sec ±5.11% (85 runs sampled)

Fastest is croner         
```

#### Pattern '*/3 */3 */3 * * *'
```
Tests

croner          - OK    - 10/9/2023, 3:00:00 PM
node-cron       - FAIL  - 1/1/1970, 12:00:00 AM
node-schedule   - OK    - 10/9/2023, 3:00:00 PM
cronosjs        - OK    - 10/9/2023, 3:00:00 PM
cron            - OK    - 10/9/2023, 3:00:00 PM

Benchmark (only OK)

croner          x 163,762 ops/sec ±3.43% (89 runs sampled)
node-schedule   x 16,136 ops/sec ±4.94% (84 runs sampled)
cronosjs        x 33,104 ops/sec ±7.08% (87 runs sampled)
cron            x 21,784 ops/sec ±5.12% (85 runs sampled)

Fastest is croner         
```

#### Pattern '0 0 0 29 2 1'
```
Tests

croner          - OK    - 2/5/2024, 12:00:00 AM
node-cron       - FAIL  - 1/1/1970, 12:00:00 AM
node-schedule   - OK    - 2/5/2024, 12:00:00 AM
cronosjs        - OK    - 2/5/2024, 12:00:00 AM
cron            - OK    - 2/5/2024, 12:00:00 AM

Benchmark (only OK)

croner          x 171,759 ops/sec ±3.35% (88 runs sampled)
node-schedule   x 5,584 ops/sec ±5.09% (84 runs sampled)
cronosjs        x 56,341 ops/sec ±3.97% (88 runs sampled)
cron            x 9,814 ops/sec ±4.79% (84 runs sampled)

Fastest is croner         
```

#### Pattern '0 0 0 29 2 *'
```
Tests

croner          - OK    - 2/29/2024, 12:00:00 AM
node-cron       - FAIL  - 1/1/1970, 12:00:00 AM
node-schedule   - OK    - 2/29/2024, 12:00:00 AM
cronosjs        - OK    - 2/29/2024, 12:00:00 AM
cron            - OK    - 2/29/2024, 12:00:00 AM

Benchmark (only OK)

croner          x 183,873 ops/sec ±4.08% (86 runs sampled)
node-schedule   x 724 ops/sec ±5.34% (82 runs sampled)
cronosjs        x 69,239 ops/sec ±4.35% (87 runs sampled)
cron            x 3,016 ops/sec ±4.89% (86 runs sampled)

Fastest is croner         
```

#### Pattern '15 15 */3 * * *'
```
Tests

croner          - OK    - 10/9/2023, 3:15:15 PM
node-cron       - FAIL  - 1/1/1970, 12:00:00 AM
node-schedule   - OK    - 10/9/2023, 3:15:15 PM
cronosjs        - OK    - 10/9/2023, 3:15:15 PM
cron            - OK    - 10/9/2023, 3:15:15 PM

Benchmark (only OK)

croner          x 192,480 ops/sec ±3.89% (89 runs sampled)
node-schedule   x 2,357 ops/sec ±4.13% (85 runs sampled)
cronosjs        x 40,607 ops/sec ±4.51% (91 runs sampled)
cron            x 5,102 ops/sec ±4.99% (85 runs sampled)

Fastest is croner         
```

#### Pattern '15 15 */3 */10 10 *'
```
Tests

croner          - OK    - 10/11/2023, 12:15:15 AM
node-cron       - FAIL  - 1/1/1970, 12:00:00 AM
node-schedule   - OK    - 10/11/2023, 12:15:15 AM
cronosjs        - OK    - 10/11/2023, 12:15:15 AM
cron            - OK    - 10/11/2023, 12:15:15 AM

Benchmark (only OK)

croner          x 163,109 ops/sec ±4.29% (81 runs sampled)
node-schedule   x 2,698 ops/sec ±5.58% (86 runs sampled)
cronosjs        x 54,200 ops/sec ±5.08% (84 runs sampled)
cron            x 5,137 ops/sec ±3.81% (87 runs sampled)

Fastest is croner         
```

#### Pattern '15 15 */3 * 10 SUN,MON,TUE'
```
Tests

croner          - OK    - 10/9/2023, 3:15:15 PM
node-cron       - FAIL  - 1/1/1970, 12:00:00 AM
node-schedule   - OK    - 10/9/2023, 3:15:15 PM
cronosjs        - OK    - 10/9/2023, 3:15:15 PM
cron            - OK    - 10/9/2023, 3:15:15 PM

Benchmark (only OK)

croner          x 111,874 ops/sec ±4.31% (85 runs sampled)
node-schedule   x 2,403 ops/sec ±4.27% (85 runs sampled)
cronosjs        x 40,637 ops/sec ±5.45% (83 runs sampled)
cron            x 4,631 ops/sec ±7.71% (78 runs sampled)

Fastest is croner         
```

## Test summary

| Library | OK | FAIL | % OK |
| :---: | :--: | :---: | :-----: |
| croner | 8 | 0 | 100% |
| node-cron | 0 | 8 | 0% |
| node-schedule | 8 | 0 | 100% |
| cronosjs | 8 | 0 | 100% |
| cron | 7 | 1 | 87.5% |

