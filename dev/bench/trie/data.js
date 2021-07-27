window.BENCHMARK_DATA = {
  "lastUpdate": 1627412580598,
  "repoUrl": "https://github.com/ethereumjs/ethereumjs-monorepo",
  "entries": {
    "Benchmark": [
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
          "id": "daa6a546d259cf8f04691e0c057dcbd206df4860",
          "message": "Merge pull request #1319 from ethereumjs/blockchain-release-5.3.1\n\nBlockchain: v5.3.1 Release",
          "timestamp": "2021-06-28T10:22:03+02:00",
          "tree_id": "9a00d3c91ef94e4e47554dbdb1d77f96823fd950",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/daa6a546d259cf8f04691e0c057dcbd206df4860"
        },
        "date": 1624868650650,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 19884,
            "range": "±13.62%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 21560,
            "range": "±1.88%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 18955,
            "range": "±3.18%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 8141,
            "range": "±26.46%",
            "unit": "ops/sec",
            "extra": "31 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 19915,
            "range": "±3.91%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1317,
            "range": "±5.92%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 110,
            "range": "±125.10%",
            "unit": "ops/sec",
            "extra": "27 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 133,
            "range": "±24.46%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 22.42,
            "range": "±72.79%",
            "unit": "ops/sec",
            "extra": "15 samples"
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
          "id": "0126581c6e3795d249dfa7522f3cf86e0f0f30b4",
          "message": "Merge pull request #1320 from ethereumjs/typedoc-fix-link-resolution\n\ntypedoc: convert link resolution to new syntax",
          "timestamp": "2021-06-28T10:41:38+02:00",
          "tree_id": "75ac3d5c7a6eb9e76364435bc348b7b3861c66bb",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/0126581c6e3795d249dfa7522f3cf86e0f0f30b4"
        },
        "date": 1624869828089,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 20270,
            "range": "±12.37%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 23085,
            "range": "±2.60%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 20756,
            "range": "±2.84%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 8344,
            "range": "±22.52%",
            "unit": "ops/sec",
            "extra": "37 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 21366,
            "range": "±2.56%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1327,
            "range": "±6.02%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 108,
            "range": "±125.74%",
            "unit": "ops/sec",
            "extra": "27 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 101,
            "range": "±60.58%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 7.26,
            "range": "±120.93%",
            "unit": "ops/sec",
            "extra": "15 samples"
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
          "id": "2357981d89b865361126e2fa3e77f90780a8f3ef",
          "message": "Common: Reworked Custom Chain Instantiation, Polygon/Arbitrum Supported Chains Integration (#1317)",
          "timestamp": "2021-06-28T14:27:28-07:00",
          "tree_id": "dd3f9d6bb675c0e3bcd94624e412372b2e10ba62",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/2357981d89b865361126e2fa3e77f90780a8f3ef"
        },
        "date": 1624915774161,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 20527,
            "range": "±13.23%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 23419,
            "range": "±2.19%",
            "unit": "ops/sec",
            "extra": "90 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 19546,
            "range": "±8.73%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 7718,
            "range": "±23.39%",
            "unit": "ops/sec",
            "extra": "54 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 21509,
            "range": "±2.56%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1316,
            "range": "±6.02%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 275,
            "range": "±12.90%",
            "unit": "ops/sec",
            "extra": "26 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 130,
            "range": "±20.50%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 7.75,
            "range": "±136.96%",
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
          "id": "d4e2a5a8c52c7e8b7ab2ecb96866d75ec9723adb",
          "message": "monorepo: Restructure Config Documentation (#1325)",
          "timestamp": "2021-06-29T19:31:44-07:00",
          "tree_id": "492de1f78afd978f91ad791677a575e77491ad29",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/d4e2a5a8c52c7e8b7ab2ecb96866d75ec9723adb"
        },
        "date": 1625020674802,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 18668,
            "range": "±12.48%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 21314,
            "range": "±1.74%",
            "unit": "ops/sec",
            "extra": "88 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 19670,
            "range": "±2.03%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 9884,
            "range": "±18.26%",
            "unit": "ops/sec",
            "extra": "40 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 12222,
            "range": "±45.59%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1228,
            "range": "±6.74%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 117,
            "range": "±110.93%",
            "unit": "ops/sec",
            "extra": "32 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 125,
            "range": "±22.31%",
            "unit": "ops/sec",
            "extra": "60 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 8.57,
            "range": "±116.44%",
            "unit": "ops/sec",
            "extra": "17 samples"
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
          "id": "095270c790b05937bf110de0cf9a419fa068c477",
          "message": "Merge pull request #1326 from ethereumjs/blockbuilder-customizable-basefee\n\nblockbuilder: allow customizable baseFeePerGas",
          "timestamp": "2021-06-30T11:12:13+02:00",
          "tree_id": "a8d38e689f2ea96d2698d90c9f7d9164bef7cdc1",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/095270c790b05937bf110de0cf9a419fa068c477"
        },
        "date": 1625044476238,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 14685,
            "range": "±16.36%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 15870,
            "range": "±2.78%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 15752,
            "range": "±2.48%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 14507,
            "range": "±3.18%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 6833,
            "range": "±26.69%",
            "unit": "ops/sec",
            "extra": "23 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1138,
            "range": "±6.93%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 134,
            "range": "±90.33%",
            "unit": "ops/sec",
            "extra": "43 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 107,
            "range": "±26.92%",
            "unit": "ops/sec",
            "extra": "59 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 24.46,
            "range": "±11.24%",
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
          "id": "cff15170235cf4bbe6e12e45a829fd7652416a9f",
          "message": "Merge pull request #1322 from emersonmacro/common-chain-fork-enums\n\nCommon: Chain & Hardfork enums",
          "timestamp": "2021-06-30T11:26:19+02:00",
          "tree_id": "ea7cff3176bce8b4f3f37b9354632235c7805045",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/cff15170235cf4bbe6e12e45a829fd7652416a9f"
        },
        "date": 1625045309760,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 19408,
            "range": "±13.11%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 21440,
            "range": "±2.51%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 18772,
            "range": "±2.64%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 10080,
            "range": "±17.52%",
            "unit": "ops/sec",
            "extra": "45 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 13013,
            "range": "±38.74%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1235,
            "range": "±6.98%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 115,
            "range": "±109.77%",
            "unit": "ops/sec",
            "extra": "32 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 110,
            "range": "±38.48%",
            "unit": "ops/sec",
            "extra": "59 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 9.88,
            "range": "±143.80%",
            "unit": "ops/sec",
            "extra": "16 samples"
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
          "id": "9c5d6ea5b78d3b3166d2e0931112593c630863af",
          "message": "Merge pull request #1334 from ethereumjs/validate-kovan-genesis\n\nblock: Add fix for kovan nonce",
          "timestamp": "2021-07-06T18:21:10-04:00",
          "tree_id": "a0c5875eb230233d7e89ae92faf159f76348a101",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/9c5d6ea5b78d3b3166d2e0931112593c630863af"
        },
        "date": 1625610207116,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 16542,
            "range": "±13.70%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 18470,
            "range": "±2.17%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 17990,
            "range": "±2.49%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 13677,
            "range": "±11.17%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 7915,
            "range": "±20.70%",
            "unit": "ops/sec",
            "extra": "46 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1193,
            "range": "±6.90%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 125,
            "range": "±99.13%",
            "unit": "ops/sec",
            "extra": "37 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 125,
            "range": "±8.17%",
            "unit": "ops/sec",
            "extra": "52 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 10.53,
            "range": "±122.91%",
            "unit": "ops/sec",
            "extra": "28 samples"
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
          "id": "ba6de670bfac5d110350125a352ec968dfe7e928",
          "message": "Merge pull request #1314 from ethereumjs/client/chainId_sync_RPC\n\nClient: eth_chainID and eth_syncing RPC implementations",
          "timestamp": "2021-07-07T07:39:39-04:00",
          "tree_id": "4d66c794ddd2c933c8ee4e05338133c24ec991c6",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/ba6de670bfac5d110350125a352ec968dfe7e928"
        },
        "date": 1625658111407,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 18692,
            "range": "±14.13%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 21216,
            "range": "±2.54%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 19926,
            "range": "±2.39%",
            "unit": "ops/sec",
            "extra": "58 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 8442,
            "range": "±25.64%",
            "unit": "ops/sec",
            "extra": "38 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 17179,
            "range": "±31.53%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1317,
            "range": "±5.55%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 108,
            "range": "±121.82%",
            "unit": "ops/sec",
            "extra": "28 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 119,
            "range": "±24.65%",
            "unit": "ops/sec",
            "extra": "58 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 9.31,
            "range": "±148.38%",
            "unit": "ops/sec",
            "extra": "16 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mfornet94@gmail.com",
            "name": "Marcelo Fornet",
            "username": "mfornet"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9037a945e43271e2132c187201486a1a9d44a67f",
          "message": "Add baseFeePerGas to block header from rpc + fix readme typo (#1330)",
          "timestamp": "2021-07-07T18:28:49-07:00",
          "tree_id": "efecd70f634e032ec751c3ff86bb919cfd4c4ec8",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/9037a945e43271e2132c187201486a1a9d44a67f"
        },
        "date": 1625707856010,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 20520,
            "range": "±12.40%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 23342,
            "range": "±2.29%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 19304,
            "range": "±9.59%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 7691,
            "range": "±29.39%",
            "unit": "ops/sec",
            "extra": "57 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 20934,
            "range": "±3.37%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1262,
            "range": "±6.08%",
            "unit": "ops/sec",
            "extra": "57 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 103,
            "range": "±134.66%",
            "unit": "ops/sec",
            "extra": "22 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 101,
            "range": "±62.81%",
            "unit": "ops/sec",
            "extra": "57 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 5.89,
            "range": "±130.44%",
            "unit": "ops/sec",
            "extra": "12 samples"
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
          "id": "fa15aba71aeeab3b7a5617b83224cd2004048995",
          "message": "devp2p/client: add les v3/v4 (#1324)",
          "timestamp": "2021-07-07T18:39:51-07:00",
          "tree_id": "3ebfeaaabf8043670d0f4dbcf58419a51603a1b1",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/fa15aba71aeeab3b7a5617b83224cd2004048995"
        },
        "date": 1625708903631,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 20172,
            "range": "±13.95%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 23241,
            "range": "±2.33%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 20534,
            "range": "±2.88%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 8106,
            "range": "±20.41%",
            "unit": "ops/sec",
            "extra": "37 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 21216,
            "range": "±3.37%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1307,
            "range": "±5.71%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 91.77,
            "range": "±138.19%",
            "unit": "ops/sec",
            "extra": "23 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 97.85,
            "range": "±56.92%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 9.51,
            "range": "±143.18%",
            "unit": "ops/sec",
            "extra": "16 samples"
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
          "id": "e89639927018e0a9195be632895ad53bf168f358",
          "message": "Merge pull request #1337 from ethereumjs/add-london-rpc-block-test\n\nblock: add london from-rpc test",
          "timestamp": "2021-07-08T09:34:59+02:00",
          "tree_id": "2290b8a2514b5bacb7698e06e6d3c0fe666c1362",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/e89639927018e0a9195be632895ad53bf168f358"
        },
        "date": 1625729947210,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 19999,
            "range": "±12.99%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 23095,
            "range": "±2.32%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 20663,
            "range": "±1.82%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 8083,
            "range": "±15.69%",
            "unit": "ops/sec",
            "extra": "33 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 21208,
            "range": "±3.09%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1301,
            "range": "±6.17%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 108,
            "range": "±126.48%",
            "unit": "ops/sec",
            "extra": "27 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 130,
            "range": "±9.98%",
            "unit": "ops/sec",
            "extra": "58 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 9.22,
            "range": "±137.38%",
            "unit": "ops/sec",
            "extra": "17 samples"
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
          "id": "2ba896ea10d6d85416710377a05a8755b8450c34",
          "message": "Merge pull request #1327 from ethereumjs/new-releases\n\nNew Library Releases (tx.supports() integration, Common custom chains + enum Chain/HF, Util v7.1.0)",
          "timestamp": "2021-07-08T11:08:29+02:00",
          "tree_id": "9078ec4195a93612a47c7f4d5d818e470034e593",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/2ba896ea10d6d85416710377a05a8755b8450c34"
        },
        "date": 1625735444288,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 19562,
            "range": "±13.84%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 22343,
            "range": "±2.52%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 18552,
            "range": "±3.30%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 9584,
            "range": "±19.57%",
            "unit": "ops/sec",
            "extra": "36 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 12135,
            "range": "±47.48%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1285,
            "range": "±5.82%",
            "unit": "ops/sec",
            "extra": "59 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 91.81,
            "range": "±138.63%",
            "unit": "ops/sec",
            "extra": "27 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 135,
            "range": "±9.45%",
            "unit": "ops/sec",
            "extra": "57 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 8.75,
            "range": "±127.93%",
            "unit": "ops/sec",
            "extra": "16 samples"
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
          "id": "103402bedb9c0adcb649761baaacd9ad7d38ec91",
          "message": "Merge pull request #1336 from ethereumjs/kovan-readme-updates\n\nclient: README updates - CLI parameters",
          "timestamp": "2021-07-08T09:06:31-04:00",
          "tree_id": "29ab315f259de69c4ed3d576fc8c40fbd2523f2f",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/103402bedb9c0adcb649761baaacd9ad7d38ec91"
        },
        "date": 1625749734228,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 13973,
            "range": "±11.91%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 13681,
            "range": "±14.75%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 14805,
            "range": "±2.89%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 14437,
            "range": "±3.41%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 6880,
            "range": "±21.40%",
            "unit": "ops/sec",
            "extra": "34 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1009,
            "range": "±13.70%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 136,
            "range": "±84.35%",
            "unit": "ops/sec",
            "extra": "46 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 105,
            "range": "±30.49%",
            "unit": "ops/sec",
            "extra": "59 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 10.22,
            "range": "±118.32%",
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
          "id": "2bcfc40db564217393ae15aa35e9dde165f767a5",
          "message": "devp2p/client: upgrade to eth/66 (#1331)",
          "timestamp": "2021-07-08T10:56:42-07:00",
          "tree_id": "4cacf86d5606a5cc289873156fb3eeb66ec83410",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/2bcfc40db564217393ae15aa35e9dde165f767a5"
        },
        "date": 1625767143002,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 14234,
            "range": "±8.23%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 9615,
            "range": "±34.81%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 14154,
            "range": "±3.36%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 13517,
            "range": "±3.63%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 11811,
            "range": "±14.21%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 606,
            "range": "±25.37%",
            "unit": "ops/sec",
            "extra": "45 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 233,
            "range": "±7.85%",
            "unit": "ops/sec",
            "extra": "59 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 38.97,
            "range": "±108.17%",
            "unit": "ops/sec",
            "extra": "23 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 23.76,
            "range": "±9.27%",
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
          "id": "3e69efdaba3ab1f11e99f23c5595de7ca6288a89",
          "message": "Merge pull request #1165 from ethereumjs/add-client-cli-test\n\nclient: add basic cli test",
          "timestamp": "2021-07-12T11:51:11+02:00",
          "tree_id": "d4842a837546ab48e4154f6e085c486c36fea601",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/3e69efdaba3ab1f11e99f23c5595de7ca6288a89"
        },
        "date": 1626083611266,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 15318,
            "range": "±13.35%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 17858,
            "range": "±2.60%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 17462,
            "range": "±1.03%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 13420,
            "range": "±13.99%",
            "unit": "ops/sec",
            "extra": "60 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 7079,
            "range": "±28.90%",
            "unit": "ops/sec",
            "extra": "40 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1108,
            "range": "±7.33%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 127,
            "range": "±90.46%",
            "unit": "ops/sec",
            "extra": "49 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 101,
            "range": "±34.75%",
            "unit": "ops/sec",
            "extra": "59 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 9.69,
            "range": "±124.58%",
            "unit": "ops/sec",
            "extra": "26 samples"
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
          "id": "b8bc2551ba2f300c657db12bed4d9905bc5e5c7e",
          "message": "common: remove dao hardfork from chains when not applied (#1344)",
          "timestamp": "2021-07-12T12:18:12-07:00",
          "tree_id": "7c76350724a861d9c4f534d8ec80ef6314807483",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/b8bc2551ba2f300c657db12bed4d9905bc5e5c7e"
        },
        "date": 1626117725404,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 19466,
            "range": "±13.08%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 21723,
            "range": "±1.15%",
            "unit": "ops/sec",
            "extra": "91 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 19217,
            "range": "±2.87%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 10483,
            "range": "±16.30%",
            "unit": "ops/sec",
            "extra": "48 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 14810,
            "range": "±17.31%",
            "unit": "ops/sec",
            "extra": "59 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1307,
            "range": "±6.55%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 110,
            "range": "±119.28%",
            "unit": "ops/sec",
            "extra": "24 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 115,
            "range": "±40.02%",
            "unit": "ops/sec",
            "extra": "55 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 7.34,
            "range": "±124.79%",
            "unit": "ops/sec",
            "extra": "13 samples"
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
          "id": "afd07c26828ab8dd9fd9aa01097ac85f8c554534",
          "message": "ci: fix failing node 16 (#1346)\n\n* add fail-fast: false\r\n\r\n* update package-lock for client to get new \"multiformats\" dependency from libp2p-crypto (https://github.com/libp2p/js-libp2p-crypto/commit/94966df10f86e3844363780873f03518138cf874)\r\n\r\n* lint: fix new errors from eslint-plugin-implicit-dependencies v1.1.0 release\r\n\r\n* add `multiformats` alias hotfix to karma config",
          "timestamp": "2021-07-13T13:32:52-04:00",
          "tree_id": "c85f8b1567cc50a47e78003f6f8a108df924855f",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/afd07c26828ab8dd9fd9aa01097ac85f8c554534"
        },
        "date": 1626197933403,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 14437,
            "range": "±14.22%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 12887,
            "range": "±31.90%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 15230,
            "range": "±2.93%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 14250,
            "range": "±3.20%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 6716,
            "range": "±25.94%",
            "unit": "ops/sec",
            "extra": "33 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1137,
            "range": "±7.76%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 131,
            "range": "±92.24%",
            "unit": "ops/sec",
            "extra": "37 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 115,
            "range": "±24.44%",
            "unit": "ops/sec",
            "extra": "57 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 11.18,
            "range": "±122.40%",
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
          "id": "51e96b4ba4a23f3b4a07ec871b0ab7d9b20dd60e",
          "message": "devp2p: new release v4.1.0 (#1352)\n\n* update version, changelog, package-lock\r\n* devp2p -> release: added note on london HF compatibility\r\n* devp2p: rebuild documentation\r\nCo-authored-by: holgerd77 <Holger.Drewes@gmail.com>",
          "timestamp": "2021-07-16T13:44:26-07:00",
          "tree_id": "2e49508507a7dd58596a07279c60c07cf87f653d",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/51e96b4ba4a23f3b4a07ec871b0ab7d9b20dd60e"
        },
        "date": 1626468580440,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 18400,
            "range": "±14.31%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 22165,
            "range": "±2.46%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 19426,
            "range": "±1.41%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 8552,
            "range": "±23.71%",
            "unit": "ops/sec",
            "extra": "37 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 16906,
            "range": "±5.39%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1280,
            "range": "±6.83%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 120,
            "range": "±111.36%",
            "unit": "ops/sec",
            "extra": "31 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 120,
            "range": "±28.03%",
            "unit": "ops/sec",
            "extra": "56 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 21.85,
            "range": "±68.46%",
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
          "id": "2b7ff760551539d1b516de51d5ad403a1571640b",
          "message": "Readme gh actions url fixes (#1353)",
          "timestamp": "2021-07-16T17:07:00-07:00",
          "tree_id": "7c5a99abb1256c02f1d4452e6caffd9802bf63be",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/2b7ff760551539d1b516de51d5ad403a1571640b"
        },
        "date": 1626480560447,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 15718,
            "range": "±13.00%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 17770,
            "range": "±2.68%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 16518,
            "range": "±1.52%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 14786,
            "range": "±4.68%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 5480,
            "range": "±22.22%",
            "unit": "ops/sec",
            "extra": "52 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1128,
            "range": "±7.16%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 132,
            "range": "±89.51%",
            "unit": "ops/sec",
            "extra": "47 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 109,
            "range": "±19.79%",
            "unit": "ops/sec",
            "extra": "54 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 25.13,
            "range": "±10.51%",
            "unit": "ops/sec",
            "extra": "30 samples"
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
          "id": "bfd53752d8d589a38fc3fb41bb67f5f5acb74f9d",
          "message": "Client: central event bus implementation (#1187)",
          "timestamp": "2021-07-16T19:01:55-07:00",
          "tree_id": "bf54476872b84e090920defcd90e0e3c7d63a055",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/bfd53752d8d589a38fc3fb41bb67f5f5acb74f9d"
        },
        "date": 1626487446731,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 16179,
            "range": "±13.76%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 16623,
            "range": "±3.23%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 17241,
            "range": "±1.80%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 13597,
            "range": "±16.36%",
            "unit": "ops/sec",
            "extra": "48 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 9549,
            "range": "±22.28%",
            "unit": "ops/sec",
            "extra": "55 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1318,
            "range": "±5.63%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 277,
            "range": "±11.01%",
            "unit": "ops/sec",
            "extra": "30 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 132,
            "range": "±11.62%",
            "unit": "ops/sec",
            "extra": "58 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 22.52,
            "range": "±80.17%",
            "unit": "ops/sec",
            "extra": "14 samples"
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
          "id": "7a5af5996481116b580d8c267f89b15fc3db8e2a",
          "message": "Update tests to 9.0.3 (#1347)",
          "timestamp": "2021-07-19T16:21:29-07:00",
          "tree_id": "d537f06b74e84e6c076aa5033185add4641600d1",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/7a5af5996481116b580d8c267f89b15fc3db8e2a"
        },
        "date": 1626737031277,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 14816,
            "range": "±18.16%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 16549,
            "range": "±3.00%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 15829,
            "range": "±1.91%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 14387,
            "range": "±1.83%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 5678,
            "range": "±19.36%",
            "unit": "ops/sec",
            "extra": "27 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1021,
            "range": "±9.01%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 134,
            "range": "±84.18%",
            "unit": "ops/sec",
            "extra": "52 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 109,
            "range": "±12.95%",
            "unit": "ops/sec",
            "extra": "55 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 10.4,
            "range": "±117.16%",
            "unit": "ops/sec",
            "extra": "29 samples"
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
      }
    ]
  }
}