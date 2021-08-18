window.BENCHMARK_DATA = {
  "lastUpdate": 1629319684774,
  "repoUrl": "https://github.com/ethereumjs/ethereumjs-monorepo",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "77563348+emersonmacro@users.noreply.github.com",
            "name": "emersonmacro",
            "username": "emersonmacro"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8d140c3ba11a5f9824c7a0dd5952eea8e80f9a75",
          "message": "Chain & HF enum usage (#1363)",
          "timestamp": "2021-07-19T16:59:44-07:00",
          "tree_id": "22b160f5cdb6e735a0e87956468b4444e2b5cc1b",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/8d140c3ba11a5f9824c7a0dd5952eea8e80f9a75"
        },
        "date": 1626739326714,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 15280,
            "range": "±14.31%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 16966,
            "range": "±3.04%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 17792,
            "range": "±2.59%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 15681,
            "range": "±5.60%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 6447,
            "range": "±21.47%",
            "unit": "ops/sec",
            "extra": "43 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1242,
            "range": "±5.89%",
            "unit": "ops/sec",
            "extra": "58 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 132,
            "range": "±103.88%",
            "unit": "ops/sec",
            "extra": "33 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 105,
            "range": "±42.66%",
            "unit": "ops/sec",
            "extra": "59 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 9.45,
            "range": "±112.16%",
            "unit": "ops/sec",
            "extra": "18 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ryan@ryanio.com",
            "name": "Ryan Ghods",
            "username": "ryanio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4f23469c2e04389962c46e66e6ac92f1b9f9e489",
          "message": "client: update changelog (#1367)",
          "timestamp": "2021-07-19T18:30:32-07:00",
          "tree_id": "94b3034f1476d0abd606251bdcbf4774e1abd638",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/4f23469c2e04389962c46e66e6ac92f1b9f9e489"
        },
        "date": 1626744919730,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 15609,
            "range": "±15.53%",
            "unit": "ops/sec",
            "extra": "60 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 18405,
            "range": "±2.11%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 17186,
            "range": "±2.23%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 14317,
            "range": "±7.49%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 5670,
            "range": "±25.13%",
            "unit": "ops/sec",
            "extra": "36 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1144,
            "range": "±7.28%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 130,
            "range": "±93.03%",
            "unit": "ops/sec",
            "extra": "45 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 113,
            "range": "±21.97%",
            "unit": "ops/sec",
            "extra": "60 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 9.42,
            "range": "±125.80%",
            "unit": "ops/sec",
            "extra": "26 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jochembrouwer96@gmail.com",
            "name": "Jochem Brouwer",
            "username": "jochem-brouwer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7a2301c2fc00f3350634bcc7f4a50c41d1445094",
          "message": "VM: fix EIP1559 bug to include tx value in balance check, fix nonce check (#1372)",
          "timestamp": "2021-07-21T20:08:07-07:00",
          "tree_id": "504fbb5b8f0b62c43295452d56c814b648adaaee",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/7a2301c2fc00f3350634bcc7f4a50c41d1445094"
        },
        "date": 1626923423454,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 18532,
            "range": "±13.51%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 19443,
            "range": "±3.25%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 17870,
            "range": "±1.97%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 11692,
            "range": "±15.32%",
            "unit": "ops/sec",
            "extra": "50 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 10543,
            "range": "±27.62%",
            "unit": "ops/sec",
            "extra": "55 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1254,
            "range": "±6.83%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 125,
            "range": "±106.46%",
            "unit": "ops/sec",
            "extra": "32 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 106,
            "range": "±46.76%",
            "unit": "ops/sec",
            "extra": "60 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 22.12,
            "range": "±72.91%",
            "unit": "ops/sec",
            "extra": "17 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "17355484+acolytec3@users.noreply.github.com",
            "name": "acolytec3",
            "username": "acolytec3"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ca6c8315d414941b87631abf4d5c7f366b8a2dc3",
          "message": "Hardhat e2e test integration (#1348)",
          "timestamp": "2021-07-21T22:13:24-07:00",
          "tree_id": "d1d9ffd2887f97c44b80d070ffe37bcb61fa091a",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/ca6c8315d414941b87631abf4d5c7f366b8a2dc3"
        },
        "date": 1626930943386,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 15285,
            "range": "±14.04%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 16256,
            "range": "±3.15%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 16758,
            "range": "±1.97%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 15098,
            "range": "±2.76%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 6847,
            "range": "±22.99%",
            "unit": "ops/sec",
            "extra": "37 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1211,
            "range": "±5.79%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 125,
            "range": "±98.40%",
            "unit": "ops/sec",
            "extra": "34 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 118,
            "range": "±19.79%",
            "unit": "ops/sec",
            "extra": "52 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 11.2,
            "range": "±126.72%",
            "unit": "ops/sec",
            "extra": "18 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jochembrouwer96@gmail.com",
            "name": "Jochem Brouwer",
            "username": "jochem-brouwer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "008a4c3a044908614d2f0da22583537b7b383289",
          "message": "VM: add tests for wrong transactions (#1374)",
          "timestamp": "2021-07-22T15:59:11-07:00",
          "tree_id": "e0f143a48720fb9f4c70a448594d0c47753d9b06",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/008a4c3a044908614d2f0da22583537b7b383289"
        },
        "date": 1626994877301,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 16807,
            "range": "±17.63%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 22262,
            "range": "±2.76%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 20924,
            "range": "±2.92%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 9044,
            "range": "±23.25%",
            "unit": "ops/sec",
            "extra": "38 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 18893,
            "range": "±23.48%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1372,
            "range": "±6.16%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 108,
            "range": "±127.41%",
            "unit": "ops/sec",
            "extra": "27 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 132,
            "range": "±9.66%",
            "unit": "ops/sec",
            "extra": "60 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 28.9,
            "range": "±9.30%",
            "unit": "ops/sec",
            "extra": "16 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ryan@ryanio.com",
            "name": "Ryan Ghods",
            "username": "ryanio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8b358df24517b92e53a573c6acc583dbaa2d2d63",
          "message": "VM: fix several internal todos (#1375)",
          "timestamp": "2021-07-25T10:33:12-07:00",
          "tree_id": "35a6f6a40c3ae81f93e91bb9b8665fd1c2483026",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/8b358df24517b92e53a573c6acc583dbaa2d2d63"
        },
        "date": 1627234522750,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 14731,
            "range": "±18.84%",
            "unit": "ops/sec",
            "extra": "51 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 20948,
            "range": "±2.90%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 19067,
            "range": "±2.95%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 11024,
            "range": "±16.34%",
            "unit": "ops/sec",
            "extra": "48 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 13124,
            "range": "±41.38%",
            "unit": "ops/sec",
            "extra": "40 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1280,
            "range": "±6.14%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 122,
            "range": "±113.69%",
            "unit": "ops/sec",
            "extra": "30 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 108,
            "range": "±33.51%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 8.64,
            "range": "±126.67%",
            "unit": "ops/sec",
            "extra": "15 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "17355484+acolytec3@users.noreply.github.com",
            "name": "acolytec3",
            "username": "acolytec3"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6461858868d9350bb58dac4fc55877e30ed79258",
          "message": "trie: remove use of deprecated setRoot (#1376)",
          "timestamp": "2021-07-26T12:28:18-07:00",
          "tree_id": "08d7899c4378ad51d9a1035f1b72684dfabfd000",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/6461858868d9350bb58dac4fc55877e30ed79258"
        },
        "date": 1627327834754,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 17950,
            "range": "±12.93%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 20659,
            "range": "±2.52%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 17704,
            "range": "±2.47%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 11250,
            "range": "±18.16%",
            "unit": "ops/sec",
            "extra": "51 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 9197,
            "range": "±28.48%",
            "unit": "ops/sec",
            "extra": "57 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1146,
            "range": "±6.92%",
            "unit": "ops/sec",
            "extra": "58 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 124,
            "range": "±102.23%",
            "unit": "ops/sec",
            "extra": "34 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 114,
            "range": "±22.48%",
            "unit": "ops/sec",
            "extra": "57 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 9.2,
            "range": "±131.48%",
            "unit": "ops/sec",
            "extra": "24 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ryan@ryanio.com",
            "name": "Ryan Ghods",
            "username": "ryanio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c008e8eb76f520df83eb47c769e3a006bc24124f",
          "message": "eslint: rule clean up and consolidation (#1378)",
          "timestamp": "2021-07-26T21:24:09-07:00",
          "tree_id": "a4e40db7c3b5747c5de10289c3f452016fdefe31",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/c008e8eb76f520df83eb47c769e3a006bc24124f"
        },
        "date": 1627360097456,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 12866,
            "range": "±15.27%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 14534,
            "range": "±11.03%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 14900,
            "range": "±3.08%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 13721,
            "range": "±3.98%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 6364,
            "range": "±25.98%",
            "unit": "ops/sec",
            "extra": "32 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1080,
            "range": "±7.30%",
            "unit": "ops/sec",
            "extra": "59 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 138,
            "range": "±78.67%",
            "unit": "ops/sec",
            "extra": "54 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 98.19,
            "range": "±34.69%",
            "unit": "ops/sec",
            "extra": "57 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 10.46,
            "range": "±117.91%",
            "unit": "ops/sec",
            "extra": "27 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "17355484+acolytec3@users.noreply.github.com",
            "name": "acolytec3",
            "username": "acolytec3"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5ac0ff827b9220f77515ccbb34a4ea8611d36ee8",
          "message": "Client: Small types clean-up (#1377)",
          "timestamp": "2021-07-27T12:01:02-07:00",
          "tree_id": "9f1281e5489df205cab5bbf3ba5de8b8a0ccedb5",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/5ac0ff827b9220f77515ccbb34a4ea8611d36ee8"
        },
        "date": 1627412579965,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 22244,
            "range": "±13.01%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 24464,
            "range": "±2.35%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 19051,
            "range": "±9.90%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 8929,
            "range": "±21.04%",
            "unit": "ops/sec",
            "extra": "57 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 21442,
            "range": "±1.70%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1339,
            "range": "±5.73%",
            "unit": "ops/sec",
            "extra": "58 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 82.7,
            "range": "±113.93%",
            "unit": "ops/sec",
            "extra": "20 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 157,
            "range": "±6.63%",
            "unit": "ops/sec",
            "extra": "58 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 7.11,
            "range": "±139.55%",
            "unit": "ops/sec",
            "extra": "12 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "77563348+emersonmacro@users.noreply.github.com",
            "name": "emersonmacro",
            "username": "emersonmacro"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "39c18b133b57469c157d97f5cfefafa52b89bd12",
          "message": "VM: stateManager -> add modifyAccountFields method (#1369)",
          "timestamp": "2021-07-27T12:55:40-07:00",
          "tree_id": "4eabb2b0289d8cd3481983cd203a16db6655bda9",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/39c18b133b57469c157d97f5cfefafa52b89bd12"
        },
        "date": 1627415879554,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 15324,
            "range": "±14.05%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 17446,
            "range": "±2.42%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 16673,
            "range": "±1.51%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 15196,
            "range": "±2.09%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 5853,
            "range": "±20.23%",
            "unit": "ops/sec",
            "extra": "37 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1141,
            "range": "±7.22%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 131,
            "range": "±89.14%",
            "unit": "ops/sec",
            "extra": "45 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 111,
            "range": "±21.30%",
            "unit": "ops/sec",
            "extra": "59 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 10.12,
            "range": "±125.12%",
            "unit": "ops/sec",
            "extra": "26 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jochembrouwer96@gmail.com",
            "name": "Jochem Brouwer",
            "username": "jochem-brouwer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "755c4a6b4f84475edf70ecc818d90dc2e88bc652",
          "message": "ethereum/tests: update to 904 (#1379)",
          "timestamp": "2021-07-28T09:24:29-07:00",
          "tree_id": "6f269b81f7fd2759759323b2e227d5c4b7dad382",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/755c4a6b4f84475edf70ecc818d90dc2e88bc652"
        },
        "date": 1627489609288,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 13846,
            "range": "±14.17%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 14460,
            "range": "±6.88%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 15498,
            "range": "±2.70%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 14077,
            "range": "±3.59%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 7026,
            "range": "±19.79%",
            "unit": "ops/sec",
            "extra": "33 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1087,
            "range": "±8.19%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 138,
            "range": "±86.46%",
            "unit": "ops/sec",
            "extra": "45 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 103,
            "range": "±35.15%",
            "unit": "ops/sec",
            "extra": "60 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 10.02,
            "range": "±119.71%",
            "unit": "ops/sec",
            "extra": "25 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "77563348+emersonmacro@users.noreply.github.com",
            "name": "emersonmacro",
            "username": "emersonmacro"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "25ec1ac1e0b89efb01bb2340675091bb6004ac40",
          "message": "Common, Blockchain: add browser tests (#1380)",
          "timestamp": "2021-07-29T10:41:34-07:00",
          "tree_id": "88d200b18decb94589f39a1e20676a1447670ff8",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/25ec1ac1e0b89efb01bb2340675091bb6004ac40"
        },
        "date": 1627580817969,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 17168,
            "range": "±13.75%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 20176,
            "range": "±3.03%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 17206,
            "range": "±2.78%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 12643,
            "range": "±13.71%",
            "unit": "ops/sec",
            "extra": "56 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 6790,
            "range": "±20.45%",
            "unit": "ops/sec",
            "extra": "36 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1134,
            "range": "±6.19%",
            "unit": "ops/sec",
            "extra": "51 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 130,
            "range": "±93.64%",
            "unit": "ops/sec",
            "extra": "37 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 109,
            "range": "±36.23%",
            "unit": "ops/sec",
            "extra": "51 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 12.2,
            "range": "±21.63%",
            "unit": "ops/sec",
            "extra": "17 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ryan@ryanio.com",
            "name": "Ryan Ghods",
            "username": "ryanio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7cad58910ee5479474284435205092538dc5eb2b",
          "message": "tx: fix getMessageToSign return type for EIP1559Transaction (#1382)",
          "timestamp": "2021-07-29T14:30:14-07:00",
          "tree_id": "c85e1b21d26da1e4147256cf8c5a527403adca16",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/7cad58910ee5479474284435205092538dc5eb2b"
        },
        "date": 1627594337586,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 18152,
            "range": "±14.77%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 20107,
            "range": "±1.88%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 17906,
            "range": "±2.20%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 11370,
            "range": "±17.35%",
            "unit": "ops/sec",
            "extra": "50 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 11694,
            "range": "±24.57%",
            "unit": "ops/sec",
            "extra": "54 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1241,
            "range": "±6.32%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 124,
            "range": "±107.11%",
            "unit": "ops/sec",
            "extra": "33 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 126,
            "range": "±11.67%",
            "unit": "ops/sec",
            "extra": "57 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 28.71,
            "range": "±12.74%",
            "unit": "ops/sec",
            "extra": "21 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "CrimsonGlory@users.noreply.github.com",
            "name": "CrimsonGlory",
            "username": "CrimsonGlory"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "49877f4d6b0ffb8438d4b4101299a2e10d576f43",
          "message": "README.md: fix broken link (#1383)",
          "timestamp": "2021-07-30T22:35:23-04:00",
          "tree_id": "bcb1d8d67cc673dd36ec2d698992b500923cfc44",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/49877f4d6b0ffb8438d4b4101299a2e10d576f43"
        },
        "date": 1627699055541,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 13809,
            "range": "±14.17%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 14197,
            "range": "±5.33%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 15281,
            "range": "±1.42%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 13966,
            "range": "±3.73%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 8091,
            "range": "±19.34%",
            "unit": "ops/sec",
            "extra": "40 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 824,
            "range": "±35.00%",
            "unit": "ops/sec",
            "extra": "57 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 143,
            "range": "±79.52%",
            "unit": "ops/sec",
            "extra": "47 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 124,
            "range": "±7.35%",
            "unit": "ops/sec",
            "extra": "56 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 11.97,
            "range": "±123.72%",
            "unit": "ops/sec",
            "extra": "20 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "17355484+acolytec3@users.noreply.github.com",
            "name": "acolytec3",
            "username": "acolytec3"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f01403a2b598c9232885dba43c6442e34d0d3ab7",
          "message": "tx: clarify documentation for `gasPrice` under `FeeMarketEIP1559TxData` interface (#1387)",
          "timestamp": "2021-08-02T10:54:03-07:00",
          "tree_id": "a00652d332bd82629decd9ed5532f253d3c46762",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/f01403a2b598c9232885dba43c6442e34d0d3ab7"
        },
        "date": 1627926968161,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 14966,
            "range": "±14.89%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 16170,
            "range": "±2.56%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 15973,
            "range": "±2.26%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 15020,
            "range": "±3.54%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 4557,
            "range": "±25.48%",
            "unit": "ops/sec",
            "extra": "39 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1185,
            "range": "±6.43%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 136,
            "range": "±90.74%",
            "unit": "ops/sec",
            "extra": "41 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 129,
            "range": "±8.36%",
            "unit": "ops/sec",
            "extra": "58 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 11.06,
            "range": "±117.80%",
            "unit": "ops/sec",
            "extra": "27 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ryan@ryanio.com",
            "name": "Ryan Ghods",
            "username": "ryanio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7f095a8d91fe537f040063767871fb6e90716307",
          "message": "VM: New release v5.5.1 (#1388)",
          "timestamp": "2021-08-02T13:04:34-07:00",
          "tree_id": "c1cdf20e5dd10f8f5aefc420fbf10edbd91daaed",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/7f095a8d91fe537f040063767871fb6e90716307"
        },
        "date": 1627934982904,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 18584,
            "range": "±14.04%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 20058,
            "range": "±1.44%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 17585,
            "range": "±2.78%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 11963,
            "range": "±14.36%",
            "unit": "ops/sec",
            "extra": "51 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 10977,
            "range": "±20.00%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1261,
            "range": "±5.85%",
            "unit": "ops/sec",
            "extra": "56 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 131,
            "range": "±111.34%",
            "unit": "ops/sec",
            "extra": "30 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 135,
            "range": "±8.93%",
            "unit": "ops/sec",
            "extra": "53 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 10,
            "range": "±107.98%",
            "unit": "ops/sec",
            "extra": "19 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ryan@ryanio.com",
            "name": "Ryan Ghods",
            "username": "ryanio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b463d8ea96c8655b7d4d3b638b459e16ae8d76d8",
          "message": "VM: New release v5.5.2 (#1390)",
          "timestamp": "2021-08-03T15:14:01-07:00",
          "tree_id": "413540375be38477f3d2c2f07922067fd2ed3c8e",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/b463d8ea96c8655b7d4d3b638b459e16ae8d76d8"
        },
        "date": 1628029200680,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 14022,
            "range": "±16.07%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 17394,
            "range": "±5.45%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 15823,
            "range": "±1.71%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 14818,
            "range": "±2.94%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 4878,
            "range": "±24.52%",
            "unit": "ops/sec",
            "extra": "28 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1187,
            "range": "±6.29%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 135,
            "range": "±91.04%",
            "unit": "ops/sec",
            "extra": "42 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 108,
            "range": "±29.81%",
            "unit": "ops/sec",
            "extra": "60 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 10.47,
            "range": "±124.12%",
            "unit": "ops/sec",
            "extra": "26 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ryan@ryanio.com",
            "name": "Ryan Ghods",
            "username": "ryanio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f0ade046e2c4205bf27d86dc4f1462f444a2980b",
          "message": "common: fix hardforkBlockBN() to correctly return null for unscheduled hardforks (#1329)",
          "timestamp": "2021-08-05T19:17:07-07:00",
          "tree_id": "1d256ddfcf0909433a86167ead726a78df2d94d3",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/f0ade046e2c4205bf27d86dc4f1462f444a2980b"
        },
        "date": 1628216354998,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 18737,
            "range": "±13.15%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 22284,
            "range": "±2.09%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 19853,
            "range": "±2.74%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 7875,
            "range": "±22.28%",
            "unit": "ops/sec",
            "extra": "34 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 19515,
            "range": "±7.48%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1294,
            "range": "±5.71%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 108,
            "range": "±123.17%",
            "unit": "ops/sec",
            "extra": "26 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 130,
            "range": "±10.81%",
            "unit": "ops/sec",
            "extra": "56 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 8.93,
            "range": "±148.17%",
            "unit": "ops/sec",
            "extra": "15 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ryan@ryanio.com",
            "name": "Ryan Ghods",
            "username": "ryanio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3a989d0d9d59dca1113759c8babd1d1fb55c6f8e",
          "message": "ci: fix hardhat e2e resolutions (#1391)",
          "timestamp": "2021-08-05T19:30:08-07:00",
          "tree_id": "0d57f946f79e7bc60250d9a9aa001ddb4239efee",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/3a989d0d9d59dca1113759c8babd1d1fb55c6f8e"
        },
        "date": 1628217133892,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 19823,
            "range": "±12.84%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 23268,
            "range": "±2.31%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 20347,
            "range": "±2.48%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 7629,
            "range": "±23.88%",
            "unit": "ops/sec",
            "extra": "31 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 20357,
            "range": "±3.36%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1313,
            "range": "±6.17%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 106,
            "range": "±128.82%",
            "unit": "ops/sec",
            "extra": "27 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 99.29,
            "range": "±55.59%",
            "unit": "ops/sec",
            "extra": "52 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 30.94,
            "range": "±9.94%",
            "unit": "ops/sec",
            "extra": "22 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "contact@rockwaterweb.com",
            "name": "Gabriel Rocheleau",
            "username": "gabrocheleau"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ae96604a7e384f3d7fc4005f6489aaca1717cc2e",
          "message": "block, common: set constants block headers fields for The Merge (#1393)",
          "timestamp": "2021-08-06T19:26:16-07:00",
          "tree_id": "cdda8e9aca130fd7b4c15735b6cfa84ba05b6379",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/ae96604a7e384f3d7fc4005f6489aaca1717cc2e"
        },
        "date": 1628303300783,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 20127,
            "range": "±11.80%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 21486,
            "range": "±2.37%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 18995,
            "range": "±2.70%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 8864,
            "range": "±22.05%",
            "unit": "ops/sec",
            "extra": "36 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 18697,
            "range": "±4.59%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1272,
            "range": "±5.90%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 119,
            "range": "±117.82%",
            "unit": "ops/sec",
            "extra": "28 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 120,
            "range": "±30.25%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 8.48,
            "range": "±121.01%",
            "unit": "ops/sec",
            "extra": "16 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "contact@rockwaterweb.com",
            "name": "Gabriel Rocheleau",
            "username": "gabrocheleau"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "587ee70ae9b21cfe9c0eb438d946248382468c31",
          "message": "Merge pull request #1398 from ethereumjs/common/consensus-type-enum\n\ncommon: enums for ConsensusType and ConsensusAlgorithm",
          "timestamp": "2021-08-11T12:56:48-04:00",
          "tree_id": "59fdbcb1bd503b6fbdf6a10b898a04bfae605f42",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/587ee70ae9b21cfe9c0eb438d946248382468c31"
        },
        "date": 1628701141309,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 17529,
            "range": "±13.68%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 19947,
            "range": "±2.80%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 17464,
            "range": "±1.33%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 13890,
            "range": "±11.61%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 7202,
            "range": "±25.03%",
            "unit": "ops/sec",
            "extra": "52 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1237,
            "range": "±6.70%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 128,
            "range": "±103.12%",
            "unit": "ops/sec",
            "extra": "33 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 122,
            "range": "±22.68%",
            "unit": "ops/sec",
            "extra": "60 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 20.98,
            "range": "±68.65%",
            "unit": "ops/sec",
            "extra": "18 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "66d02e11b9fcaa81ca82a6ccedad00ad022b0d58",
          "message": "Merge pull request #1395 from ethereumjs/npm-workspaces\n\nmonorepo: replace lerna with npm workspaces",
          "timestamp": "2021-08-11T22:38:09+02:00",
          "tree_id": "5dc3518a837cbcb8e574166f12c223351b2015db",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/66d02e11b9fcaa81ca82a6ccedad00ad022b0d58"
        },
        "date": 1628714635004,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 14296,
            "range": "±8.40%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 7927,
            "range": "±26.01%",
            "unit": "ops/sec",
            "extra": "46 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 13028,
            "range": "±15.20%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 7136,
            "range": "±20.42%",
            "unit": "ops/sec",
            "extra": "43 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 14471,
            "range": "±1.45%",
            "unit": "ops/sec",
            "extra": "59 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1049,
            "range": "±7.23%",
            "unit": "ops/sec",
            "extra": "59 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 130,
            "range": "±80.98%",
            "unit": "ops/sec",
            "extra": "47 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 115,
            "range": "±9.04%",
            "unit": "ops/sec",
            "extra": "56 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 23.39,
            "range": "±11.98%",
            "unit": "ops/sec",
            "extra": "29 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e2a0a4dd22dbae9abcd5be840236e989322d7785",
          "message": "Merge pull request #1401 from ethereumjs/ci-cache-refactor\n\nci: simplify dependency cache code",
          "timestamp": "2021-08-12T14:32:39+02:00",
          "tree_id": "a7fbe66394eaf3a429f60b11228e866e8256bcb5",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/e2a0a4dd22dbae9abcd5be840236e989322d7785"
        },
        "date": 1628771877148,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 16889,
            "range": "±17.20%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 20407,
            "range": "±1.50%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 18837,
            "range": "±1.89%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 11073,
            "range": "±16.83%",
            "unit": "ops/sec",
            "extra": "48 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 11786,
            "range": "±32.55%",
            "unit": "ops/sec",
            "extra": "57 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1192,
            "range": "±6.68%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 118,
            "range": "±105.93%",
            "unit": "ops/sec",
            "extra": "36 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 107,
            "range": "±37.77%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 8.84,
            "range": "±132.98%",
            "unit": "ops/sec",
            "extra": "23 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7cd22b6599dc6f9c75fbca974feb130205ba1b85",
          "message": "Merge pull request #1399 from ethereumjs/snappy\n\ndevp2p: Add snappy compression for devp2p - EIP-706",
          "timestamp": "2021-08-17T11:47:32+02:00",
          "tree_id": "c46fdaa3b2f5608a05b9f1572bbe7d49b6a3c809",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/7cd22b6599dc6f9c75fbca974feb130205ba1b85"
        },
        "date": 1629193983236,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 13513,
            "range": "±9.84%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 12208,
            "range": "±13.69%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 15010,
            "range": "±2.08%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 13973,
            "range": "±3.45%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 10084,
            "range": "±18.39%",
            "unit": "ops/sec",
            "extra": "47 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 736,
            "range": "±24.91%",
            "unit": "ops/sec",
            "extra": "49 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 231,
            "range": "±8.16%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 17.56,
            "range": "±159.57%",
            "unit": "ops/sec",
            "extra": "11 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 23.93,
            "range": "±9.38%",
            "unit": "ops/sec",
            "extra": "44 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "278549f560d84d4d3325f8749c55e15ec27e3675",
          "message": "Merge pull request #1373 from ethereumjs/fix-verify-proof\n\ntrie: Better error checking for invalid proofs",
          "timestamp": "2021-08-17T12:09:14+02:00",
          "tree_id": "769dda80865898ef7dbfb80d640bb50fbce5d053",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/278549f560d84d4d3325f8749c55e15ec27e3675"
        },
        "date": 1629195210079,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 21364,
            "range": "±13.33%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 22730,
            "range": "±2.67%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 20805,
            "range": "±2.58%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 8075,
            "range": "±20.41%",
            "unit": "ops/sec",
            "extra": "39 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 20961,
            "range": "±2.76%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1368,
            "range": "±5.80%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 118,
            "range": "±119.92%",
            "unit": "ops/sec",
            "extra": "25 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 155,
            "range": "±6.50%",
            "unit": "ops/sec",
            "extra": "57 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 9.49,
            "range": "±143.32%",
            "unit": "ops/sec",
            "extra": "14 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ab4a5ec9231d2033ce4aac504f8205fef9c2f45c",
          "message": "Merge pull request #1407 from ethereumjs/new-mpt-release\n\nNew MPT Release v4.2.1",
          "timestamp": "2021-08-18T12:36:11+02:00",
          "tree_id": "5a31fa3e0b22c902f33c486460deb8438928eaf5",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/ab4a5ec9231d2033ce4aac504f8205fef9c2f45c"
        },
        "date": 1629283305946,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 13386,
            "range": "±13.80%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 13303,
            "range": "±17.78%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 14666,
            "range": "±2.86%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 13604,
            "range": "±3.78%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 6927,
            "range": "±27.33%",
            "unit": "ops/sec",
            "extra": "35 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1002,
            "range": "±20.20%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 136,
            "range": "±81.48%",
            "unit": "ops/sec",
            "extra": "49 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 104,
            "range": "±28.36%",
            "unit": "ops/sec",
            "extra": "59 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 10.24,
            "range": "±123.45%",
            "unit": "ops/sec",
            "extra": "26 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "340a3851d8a39d5cd35a5dd53a296d49f5562b1f",
          "message": "Merge pull request #1409 from ethereumjs/common-with-custom-genesis\n\nCommon: allow Common with custom genesis state (for a custom chain)",
          "timestamp": "2021-08-18T17:05:43+02:00",
          "tree_id": "72cc9354930b15899dee036964102f029092115f",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/340a3851d8a39d5cd35a5dd53a296d49f5562b1f"
        },
        "date": 1629299439320,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 16001,
            "range": "±14.67%",
            "unit": "ops/sec",
            "extra": "60 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 18579,
            "range": "±1.29%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 16729,
            "range": "±2.25%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 13145,
            "range": "±12.85%",
            "unit": "ops/sec",
            "extra": "60 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 6846,
            "range": "±19.19%",
            "unit": "ops/sec",
            "extra": "54 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1152,
            "range": "±7.44%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 128,
            "range": "±86.90%",
            "unit": "ops/sec",
            "extra": "47 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 113,
            "range": "±11.47%",
            "unit": "ops/sec",
            "extra": "56 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 10.19,
            "range": "±116.87%",
            "unit": "ops/sec",
            "extra": "28 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "17355484+acolytec3@users.noreply.github.com",
            "name": "acolytec3",
            "username": "acolytec3"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "106165a53ceda371f524cb2bbe7470613825ea74",
          "message": "Remove tsbuild caches (#1410)\n\n* simplify clean scripts\r\n\r\nCo-authored-by: Holger Drewes <Holger.Drewes@gmail.com>\r\nCo-authored-by: Ryan Ghods <ryan@ryanio.com>",
          "timestamp": "2021-08-18T12:25:19-04:00",
          "tree_id": "ffe707cfacca79380dd1614420e0b4f569d22a48",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/106165a53ceda371f524cb2bbe7470613825ea74"
        },
        "date": 1629304216134,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 15573,
            "range": "±13.62%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 17577,
            "range": "±3.29%",
            "unit": "ops/sec",
            "extra": "59 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 15877,
            "range": "±1.80%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 14906,
            "range": "±2.53%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 7953,
            "range": "±15.04%",
            "unit": "ops/sec",
            "extra": "36 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 801,
            "range": "±32.40%",
            "unit": "ops/sec",
            "extra": "56 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 143,
            "range": "±79.72%",
            "unit": "ops/sec",
            "extra": "56 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 124,
            "range": "±7.77%",
            "unit": "ops/sec",
            "extra": "59 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 9.65,
            "range": "±124.69%",
            "unit": "ops/sec",
            "extra": "26 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "17355484+acolytec3@users.noreply.github.com",
            "name": "acolytec3",
            "username": "acolytec3"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "50ad6367a91c2ba25385ef0166e5b3bd92de197a",
          "message": "Switch out valid block RLP test data (#1411)",
          "timestamp": "2021-08-18T13:04:09-07:00",
          "tree_id": "d8395ed8d26490ee1ab20c0411ac03625851ae2b",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/50ad6367a91c2ba25385ef0166e5b3bd92de197a"
        },
        "date": 1629317324186,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 17079,
            "range": "±15.09%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 19301,
            "range": "±2.32%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 17631,
            "range": "±2.74%",
            "unit": "ops/sec",
            "extra": "49 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 11568,
            "range": "±17.03%",
            "unit": "ops/sec",
            "extra": "51 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 10415,
            "range": "±32.31%",
            "unit": "ops/sec",
            "extra": "54 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1179,
            "range": "±7.23%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 124,
            "range": "±97.93%",
            "unit": "ops/sec",
            "extra": "37 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 117,
            "range": "±23.80%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 9.42,
            "range": "±133.29%",
            "unit": "ops/sec",
            "extra": "24 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "17355484+acolytec3@users.noreply.github.com",
            "name": "acolytec3",
            "username": "acolytec3"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3d9774defa21cc9ca3af9c188d4be60d9de8c246",
          "message": "PoS/The Merge(tm) changes for `Blockchain` package (#1408)",
          "timestamp": "2021-08-18T13:43:20-07:00",
          "tree_id": "49b9b276ced91be0f8d153d00c9d54ef093301f9",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/3d9774defa21cc9ca3af9c188d4be60d9de8c246"
        },
        "date": 1629319684117,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 16431,
            "range": "±13.78%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 19072,
            "range": "±1.80%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 17051,
            "range": "±1.69%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 15207,
            "range": "±7.87%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 6157,
            "range": "±24.89%",
            "unit": "ops/sec",
            "extra": "39 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1125,
            "range": "±7.12%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 129,
            "range": "±90.29%",
            "unit": "ops/sec",
            "extra": "44 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 120,
            "range": "±8.23%",
            "unit": "ops/sec",
            "extra": "57 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 10.08,
            "range": "±124.64%",
            "unit": "ops/sec",
            "extra": "27 samples"
          }
        ]
      }
    ]
  }
}