import os

from apify_client import ApifyClient

client = ApifyClient(os.environ["APIFY_TOKEN"])

run = client.actor("teegemspod/bilibili-scraper").call(run_input={
    "mode": "search",
    "keywords": [
        "iPhone 17"
    ],
    "sort": "views",
    "maxResults": 50
})

for item in client.dataset(run["defaultDatasetId"]).iterate_items():
    print(item)
