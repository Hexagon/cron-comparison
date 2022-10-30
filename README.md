# cron-comparison

Test and benchmark of all javascript cron implementations

## Running

Run tests and show output in console

`npm run test`

Run tests and update readme with results

`npm run update-readme`

## Latest results

> cron-comparison@1.0.0 test /workspaces/cron-comparison
> node index.js

Tests performed at 2022-10-30T22:44:16.534Z

#### Pattern '0 0 0 L 2 *'
```
Tests

croner          - OK    - 2/28/2023, 12:00:00 AM
node-cron       - FAIL  - Error: L is a invalid expression for day of month
node-schedule   - OK    - 2/28/2023, 12:00:00 AM
cronosjs        - OK    - 2/28/2023, 12:00:00 AM
cron            - FAIL  - Error: Unknown alias: l

Benchmark (only OK)

croner          x 120,309 ops/sec ±2.77% (88 runs sampled)
node-schedule   x 542 ops/sec ±2.79% (88 runs sampled)
cronosjs        x 49,897 ops/sec ±2.18% (91 runs sampled)

Fastest is croner         
```

#### Pattern '1 2 3 4 5 6'
```
Tests

croner          - OK    - 5/4/2023, 3:02:01 AM
node-cron       - FAIL  - 1/1/1970, 12:00:00 AM
node-schedule   - OK    - 5/4/2023, 3:02:01 AM
cronosjs        - OK    - 5/4/2023, 3:02:01 AM
cron            - FAIL  - 6/3/2023, 3:02:01 AM

Benchmark (only OK)

croner          x 132,522 ops/sec ±2.15% (94 runs sampled)
node-schedule   x 3,494 ops/sec ±2.78% (88 runs sampled)
cronosjs        x 42,187 ops/sec ±1.67% (93 runs sampled)

Fastest is croner         
```

#### Pattern '*/3 */3 */3 * * *'
```
Tests

croner          - OK    - 10/31/2022, 12:00:00 AM
node-cron       - FAIL  - 1/1/1970, 12:00:00 AM
node-schedule   - OK    - 10/31/2022, 12:00:00 AM
cronosjs        - OK    - 10/31/2022, 12:00:00 AM
cron            - OK    - 10/31/2022, 12:00:00 AM

Benchmark (only OK)

croner          x 117,110 ops/sec ±1.95% (89 runs sampled)
node-schedule   x 19,736 ops/sec ±3.35% (87 runs sampled)
cronosjs        x 23,722 ops/sec ±3.07% (85 runs sampled)
cron            x 29,104 ops/sec ±1.52% (93 runs sampled)

Fastest is croner         
```

#### Pattern '0 0 0 29 2 1'
```
Tests

croner          - OK    - 2/6/2023, 12:00:00 AM
node-cron       - FAIL  - 1/1/1970, 12:00:00 AM
node-schedule   - OK    - 2/6/2023, 12:00:00 AM
cronosjs        - OK    - 2/6/2023, 12:00:00 AM
cron            - FAIL  - 3/6/2023, 12:00:00 AM

Benchmark (only OK)

croner          x 138,140 ops/sec ±1.91% (94 runs sampled)
node-schedule   x 5,234 ops/sec ±2.03% (93 runs sampled)
cronosjs        x 40,034 ops/sec ±2.95% (89 runs sampled)

Fastest is croner         
```

#### Pattern '0 0 0 29 2 *'
```
Tests

croner          - OK    - 2/29/2024, 12:00:00 AM
node-cron       - FAIL  - 1/1/1970, 12:00:00 AM
node-schedule   - OK    - 2/29/2024, 12:00:00 AM
cronosjs        - OK    - 2/29/2024, 12:00:00 AM
cron            - FAIL  - 3/29/2023, 12:00:00 AM

Benchmark (only OK)

