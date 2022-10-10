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

Tests performed at 2022-10-10T21:51:18.354Z

#### Testing next invocation of pattern '0 0 0 L 2 *'
```
croner          - Success - 2023-02-28 00:00:00
node-cron       - Failure - Error: L is a invalid expression for day of month
node-schedule   - Success - 2023-02-28 00:00:00
cronosjs        - Success - 2023-02-28 00:00:00
cron            - Failure - Error: Unknown alias: l
```

##### Benchmark using pattern '0 0 0 L 2 *'
```
croner          x 25,944 ops/sec ±10.24% (83 runs sampled)
node-schedule   x 255 ops/sec ±9.53% (68 runs sampled)
cronosjs        x 27,591 ops/sec ±5.73% (84 runs sampled)

Fastest is **cronosjs       ,croner         **
```

#### Testing next invocation of pattern '1 2 3 4 5 6'
```
croner          - Success - 2023-05-04 03:02:01
node-cron       - Success - 1970-01-01 01:00:00
node-schedule   - Success - 2023-05-04 03:02:01
cronosjs        - Success - 2023-05-04 03:02:01
cron            - Success - 2023-06-03 03:02:01
```

##### Benchmark using pattern '1 2 3 4 5 6'
```
croner          x 29,261 ops/sec ±1.48% (85 runs sampled)
node-cron       x 20,014 ops/sec ±2.20% (87 runs sampled)
node-schedule   x 2,298 ops/sec ±3.65% (89 runs sampled)
cronosjs        x 17,388 ops/sec ±11.83% (70 runs sampled)
cron            x 5,949 ops/sec ±1.95% (93 runs sampled)

Fastest is **croner         **
```

#### Testing next invocation of pattern '*/3 */3 */3 * * *'
```
croner          - Success - 2022-10-11 00:00:00
node-cron       - Success - 1970-01-01 01:00:00
node-schedule   - Success - 2022-10-11 00:00:00
cronosjs        - Success - 2022-10-11 00:00:00
cron            - Success - 2022-10-11 00:00:00
```

##### Benchmark using pattern '*/3 */3 */3 * * *'
```
croner          x 37,230 ops/sec ±9.23% (73 runs sampled)
node-cron       x 6,416 ops/sec ±2.89% (89 runs sampled)
node-schedule   x 8,271 ops/sec ±15.40% (61 runs sampled)
cronosjs        x 15,636 ops/sec ±9.96% (82 runs sampled)
cron            x 18,275 ops/sec ±5.61% (84 runs sampled)

Fastest is **croner         **
```

#### Testing next invocation of pattern '0 0 0 29 2 1'
```
croner          - Success - 2023-02-06 00:00:00
node-cron       - Success - 1970-01-01 01:00:00
node-schedule   - Success - 2023-02-06 00:00:00
cronosjs        - Success - 2023-02-06 00:00:00
cron            - Success - 2023-03-06 00:00:00
```

##### Benchmark using pattern '0 0 0 29 2 1'
```
croner          x 25,540 ops/sec ±8.57% (76 runs sampled)
node-cron       x 17,876 ops/sec ±5.28% (81 runs sampled)
node-schedule   x 2,545 ops/sec ±16.64% (60 runs sampled)
cronosjs        x 21,216 ops/sec ±8.37% (81 runs sampled)
cron            x 5,374 ops/sec ±10.24% (70 runs sampled)

Fastest is **croner         **
```

#### Testing next invocation of pattern '0 0 0 29 2 *'
```
croner          - Success - 2024-02-29 00:00:00
node-cron       - Success - 1970-01-01 01:00:00
node-schedule   - Success - 2024-02-29 00:00:00
cronosjs        - Success - 2024-02-29 00:00:00
cron            - Success - 2023-03-29 00:00:00
```

##### Benchmark using pattern '0 0 0 29 2 *'
```
croner          x 35,294 ops/sec ±1.58% (85 runs sampled)
node-cron       x 17,804 ops/sec ±2.16% (87 runs sampled)
node-schedule   x 193 ops/sec ±6.63% (82 runs sampled)
cronosjs        x 18,021 ops/sec ±7.41% (76 runs sampled)
cron            x 2,311 ops/sec ±8.50% (83 runs sampled)

Fastest is **croner         **
```

