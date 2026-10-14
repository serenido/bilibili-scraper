import { ApifyClient } from "apify-client";

const client = new ApifyClient({ token: process.env.APIFY_TOKEN });

const run = await client.actor("teegemspod/bilibili-scraper").call({
    "mode": "search",
    "keywords": [
        "iPhone 17"
    ],
    "sort": "views",
    "maxResults": 50
});

const { items } = await client.dataset(run.defaultDatasetId).listItems();
console.log(items);
