# Bilibili Scraper API

Get Bilibili videos, comments, danmaku (bullet comments), creators and trending lists as clean JSON. No login.

Runs in the cloud on Apify. No servers, no proxy setup, no code to maintain. **[Open it on Apify](https://apify.com/serenido/bilibili-scraper)**

**Price:** $1 per 1,000 rows. No monthly fee. Apify's free plan gives $5 of usage every month, no credit card needed. [Current price](https://apify.com/serenido/bilibili-scraper/pricing).

## What you get

- Search videos by keyword: views, likes, coins, favorites, shares, danmaku count, tags and author followers
- Top comments with their reply threads, and danmaku (bullet comments with the second they appear)
- Creator profiles
- Trending lists: popular, rankings by category, hot searches

## Quick start: Python

```bash
pip install -U apify-client
```

```python
from apify_client import ApifyClient

client = ApifyClient("YOUR_APIFY_TOKEN")

run = client.actor("serenido/bilibili-scraper").call(run_input={
    "mode": "search",
    "keywords": [
        "iPhone 17"
    ],
    "sort": "views",
    "maxResults": 50
})

for item in client.dataset(run.default_dataset_id).iterate_items():
    print(item)
```

## Quick start: JavaScript (Node.js)

```bash
npm install apify-client
```

```javascript
import { ApifyClient } from "apify-client";

const client = new ApifyClient({ token: process.env.APIFY_TOKEN });

const run = await client.actor("serenido/bilibili-scraper").call({
    "mode": "search",
    "keywords": [
        "iPhone 17"
    ],
    "sort": "views",
    "maxResults": 50
});

const { items } = await client.dataset(run.defaultDatasetId).listItems();
console.log(items);
```

## Quick start: one HTTP call

Runs the tool and returns the rows in one request. Good for runs under 5 minutes; for bigger runs use the Python or JavaScript example.

```bash
curl -X POST "https://api.apify.com/v2/acts/serenido~bilibili-scraper/run-sync-get-dataset-items?token=$APIFY_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"mode": "search", "keywords": ["iPhone 17"], "sort": "views", "maxResults": 50}'
```

Get your token in [Apify Console > Settings > API & Integrations](https://console.apify.com/settings/integrations).

## Use it from AI apps (MCP)

Any app that supports remote MCP servers (Claude, ChatGPT, Cursor, VS Code and others) can run this tool for you. Add this server URL: `https://mcp.apify.com?tools=serenido/bilibili-scraper`. Your Apify account connects on first use. Example config for Cursor:

```json
{
  "mcpServers": {
    "apify": {
      "url": "https://mcp.apify.com?tools=serenido/bilibili-scraper"
    }
  }
}
```

## Input example

```json
{
  "mode": "search",
  "keywords": [
    "iPhone 17"
  ],
  "sort": "views",
  "maxResults": 50
}
```

Other modes: `videos`, `comments`, `danmaku`, `creators`, `trending`. All options are listed on the [input page](https://apify.com/serenido/bilibili-scraper/input-schema).

## Output example (one row)

```json
{
  "type": "video",
  "searchKeyword": "iPhone 17",
  "rank": 1,
  "bvid": "BV12Kpxz9Eyb",
  "url": "https://www.bilibili.com/video/BV12Kpxz9Eyb",
  "title": "「小白」iPhone17全面测评：你想看的都在这了！",
  "author": "小白测评",
  "authorFollowers": 4729409,
  "category": "数码",
  "duration": "19:48",
  "publishedAt": "2025-09-17T12:00:00Z",
  "views": 2104350,
  "likes": 53238,
  "coins": 27040,
  "favorites": 11874,
  "shares": 8155,
  "danmakuCount": 12122,
  "commentCount": 5843
}
```

Download as JSON, CSV or Excel, or connect to Make, Zapier or n8n.

## Use cases

- Video and creator research for marketing in China
- Tracking how a product is reviewed on Bilibili
- Danmaku and comment data for sentiment analysis

## More tools by Serenido

- [Weibo Scraper](https://github.com/serenido/weibo-scraper): posts, hot searches, comments and creators. No login.
- [AliExpress Product Details Scraper](https://github.com/serenido/aliexpress-product-details-scraper): every variant with price and stock, shipping to 89 countries.
- [AliExpress Search Scraper](https://github.com/serenido/aliexpress-search-scraper): price, discount and exact order count for any search.
- [Australian Supermarket Prices: Coles, Woolworths and ALDI](https://github.com/serenido/coles-woolworths-aldi-scraper): Coles, Woolworths and ALDI in one run, with unit prices.
- [Google Trends Scraper](https://github.com/serenido/google-trends-scraper): interest over time, rising queries, regions and Trending Now.
- [Football xG Scraper](https://github.com/serenido/football-xg-scraper): Understat xG tables, matches, shots, players and lineups.
- [Weibo Hot Search Scraper](https://github.com/serenido/weibo-hot-search): the live 微博热搜 list, changes since your last run, top posts per topic.
- [AliExpress Dropshipping Scraper](https://github.com/serenido/aliexpress-dropshipping): winning products with shipping to your country, landed cost and profit.
- [WeChat Official Account Scraper](https://github.com/serenido/wechat-official-account-scraper): 公众号 articles by keyword or link, with full text, account, author and date.

## Support

Found a bug or need a field? Open an issue here or on the [Issues tab on Apify](https://apify.com/serenido/bilibili-scraper/issues).

Use it only for public data and follow the website's terms and the laws that apply to you. This project is not affiliated with the websites it reads.
