# cron-comparison

Automated benchmark of all JavaScript `cron` implementations, using [Renovate](https://github.com/renovatebot/renovate) and [GitHub Actions](https://docs.github.com/en/actions).

## Running locally

Run benchmark and show output in console

`npm run benchmark`

Run benchmark and update readme with results

`npm run update-readme`

## Credits

- Hexagon
- sheerlox

## Latest results

> cron-comparison@1.3.1 benchmark
> node --no-warnings src/benchmark.js

Tests performed at 2023-10-09T19:35:28.895Z

Tested libraries ([npm trends](https://npmtrends.com/cron-vs-croner-vs-cronosjs-vs-node-cron-vs-node-schedule)):

- [cron](https://github.com/kelektiv/node-cron) `v3.1.0`
- [croner](https://github.com/hexagon/croner) `v7.0.2`
- [cronosjs](https://github.com/jaclarke/cronosjs) `v1.7.1`
- [node-cron](https://github.com/node-cron/node-cron) `v3.0.2`
- [node-schedule](https://github.com/node-schedule/node-schedule) `v2.1.1`

#### Pattern `0 0 0 L 2 *`
```
Tests

cron            - FAIL  - Error: Unknown alias: l
croner          - OK    - 2024-02-29 00:00:00
cronosjs        - OK    - 2024-02-29 00:00:00
node-cron       - FAIL  - Error: L is a invalid expression for day of month
node-schedule   - OK    - 2024-02-29 00:00:00

Benchmark (only OK)

croner          x 150,794 ops/sec ±8.96% (85 runs sampled)
cronosjs        x 66,798 ops/sec ±15.04% (87 runs sampled)
node-schedule   x 380 ops/sec ±9.81% (83 runs sampled)

Fastest is croner         
```

#### Pattern `0 0 0 * 2 5#L`
```
Tests

cron            - FAIL  - Error: Unknown alias: l
croner          - OK    - 2024-02-23 00:00:00
cronosjs        - FAIL  - Error: Field item invalid format
node-cron       - FAIL  - 1970-01-01 00:00:00
node-schedule   - FAIL  - TypeError: Cannot read properties of null (reading 'nextInvocation')

Benchmark (only OK)

croner          x 59,777 ops/sec ±3.36% (88 runs sampled)

Fastest is croner         
```

#### Pattern `0 0 0 * 12 5#2`
```
Tests

cron            - FAIL  - Error: Field (dayOfWeek) cannot be parsed
croner          - OK    - 2023-12-08 00:00:00
cronosjs        - OK    - 2023-12-08 00:00:00
node-cron       - FAIL  - 1970-01-01 00:00:00
node-schedule   - OK    - 2023-12-08 00:00:00

Benchmark (only OK)

croner          x 133,599 ops/sec ±5.63% (87 runs sampled)
cronosjs        x 58,524 ops/sec ±13.08% (87 runs sampled)
node-schedule   x 3,727 ops/sec ±4.23% (86 runs sampled)

Fastest is croner         
```

#### Pattern `0 0 0 L 12 5-6#3`
```
Tests

cron            - FAIL  - Error: Unknown alias: l
croner          - OK    - 2023-12-15 00:00:00
cronosjs        - OK    - 2023-12-15 00:00:00
node-cron       - FAIL  - Error: L is a invalid expression for day of month
node-schedule   - FAIL  - TypeError: Cannot read properties of null (reading 'nextInvocation')

Benchmark (only OK)

croner          x 86,291 ops/sec ±4.50% (89 runs sampled)
cronosjs        x 56,134 ops/sec ±4.17% (88 runs sampled)

Fastest is croner         
```

#### Pattern `1 2 3 4 5 6`
```
Tests

cron            - OK    - 2024-05-04 03:02:01
croner          - OK    - 2024-05-04 03:02:01
cronosjs        - OK    - 2024-05-04 03:02:01
node-cron       - FAIL  - 1970-01-01 00:00:00
node-schedule   - OK    - 2024-05-04 03:02:01

Benchmark (only OK)

cron            x 6,313 ops/sec ±7.07% (84 runs sampled)
croner          x 160,651 ops/sec ±2.95% (87 runs sampled)
cronosjs        x 55,693 ops/sec ±4.69% (87 runs sampled)
node-schedule   x 2,726 ops/sec ±4.22% (85 runs sampled)

Fastest is croner         
```

#### Pattern `*/3 */3 */3 * * *`
```
Tests

cron            - OK    - 2023-10-09 21:00:00
croner          - OK    - 2023-10-09 21:00:00
cronosjs        - OK    - 2023-10-09 21:00:00
node-cron       - FAIL  - 1970-01-01 00:00:00
node-schedule   - OK    - 2023-10-09 21:00:00

Benchmark (only OK)

cron            x 21,765 ops/sec ±5.38% (83 runs sampled)
croner          x 161,614 ops/sec ±3.57% (86 runs sampled)
cronosjs        x 32,285 ops/sec ±8.05% (88 runs sampled)
node-schedule   x 16,514 ops/sec ±4.31% (88 runs sampled)

Fastest is croner         
```

#### Pattern `0 0 0 29 2 1`
```
Tests

cron            - OK    - 2024-02-05 00:00:00
croner          - OK    - 2024-02-05 00:00:00
cronosjs        - OK    - 2024-02-05 00:00:00
node-cron       - FAIL  - 1970-01-01 00:00:00
node-schedule   - OK    - 2024-02-05 00:00:00

Benchmark (only OK)

cron            x 9,744 ops/sec ±6.65% (84 runs sampled)
croner          x 161,572 ops/sec ±4.47% (88 runs sampled)
cronosjs        x 51,609 ops/sec ±5.92% (81 runs sampled)
node-schedule   x 5,341 ops/sec ±6.21% (82 runs sampled)

Fastest is croner         
```

#### Pattern `0 0 0 29 2 *`
```
Tests

cron            - OK    - 2024-02-29 00:00:00
croner          - OK    - 2024-02-29 00:00:00
cronosjs        - OK    - 2024-02-29 00:00:00
node-cron       - FAIL  - 1970-01-01 00:00:00
node-schedule   - OK    - 2024-02-29 00:00:00

Benchmark (only OK)

cron            x 3,104 ops/sec ±3.65% (86 runs sampled)
croner          x 176,714 ops/sec ±4.69% (86 runs sampled)
cronosjs        x 67,920 ops/sec ±3.43% (89 runs sampled)
node-schedule   x 737 ops/sec ±3.69% (85 runs sampled)

Fastest is croner         
```

#### Pattern `15 15 */3 * * *`
```
Tests

cron            - OK    - 2023-10-09 21:15:15
croner          - OK    - 2023-10-09 21:15:15
cronosjs        - OK    - 2023-10-09 21:15:15
node-cron       - FAIL  - 1970-01-01 00:00:00
node-schedule   - OK    - 2023-10-09 21:15:15

Benchmark (only OK)

cron            x 5,232 ops/sec ±3.66% (86 runs sampled)
croner          x 189,412 ops/sec ±4.44% (88 runs sampled)
cronosjs        x 40,316 ops/sec ±3.56% (89 runs sampled)
node-schedule   x 2,313 ops/sec ±4.69% (84 runs sampled)

Fastest is croner         
```

#### Pattern `15 15 */3 */10 10 *`
```
Tests

cron            - OK    - 2023-10-11 00:15:15
croner          - OK    - 2023-10-11 00:15:15
cronosjs        - OK    - 2023-10-11 00:15:15
node-cron       - FAIL  - 1970-01-01 00:00:00
node-schedule   - OK    - 2023-10-11 00:15:15

Benchmark (only OK)

cron            x 5,129 ops/sec ±4.01% (86 runs sampled)
croner          x 158,104 ops/sec ±6.95% (81 runs sampled)
cronosjs        x 55,083 ops/sec ±3.85% (87 runs sampled)
node-schedule   x 2,622 ops/sec ±5.25% (80 runs sampled)

Fastest is croner         
```

#### Pattern `15 15 */3 * 10 SUN,MON,TUE`
```
Tests

cron            - OK    - 2023-10-09 21:15:15
croner          - OK    - 2023-10-09 21:15:15
cronosjs        - OK    - 2023-10-09 21:15:15
node-cron       - FAIL  - 1970-01-01 00:00:00
node-schedule   - OK    - 2023-10-09 21:15:15

Benchmark (only OK)

cron            x 5,131 ops/sec ±4.00% (88 runs sampled)
croner          x 111,913 ops/sec ±3.74% (88 runs sampled)
cronosjs        x 42,010 ops/sec ±3.53% (88 runs sampled)
node-schedule   x 2,275 ops/sec ±6.14% (83 runs sampled)

Fastest is croner         
```

## Test summary

| Library | OK | FAIL | % OK |
| :---: | :--: | :---: | :-----: |
| cron | 7 | 4 | 63.63636363636363% |
| croner | 11 | 0 | 100% |
| cronosjs | 10 | 1 | 90.9090909090909% |
| node-cron | 0 | 11 | 0% |
| node-schedule | 9 | 2 | 81.81818181818183% |

