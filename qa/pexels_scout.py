from playwright.sync_api import sync_playwright
import re

QUERIES = [
    "air conditioner installation",
    "hvac technician",
    "air conditioner home",
]

found = {}  # id -> photo page url

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    ctx = browser.new_context(
        user_agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36",
        viewport={"width": 1440, "height": 900},
    )
    page = ctx.new_page()
    for q in QUERIES:
        url = "https://www.pexels.com/search/" + q.replace(" ", "%20") + "/"
        try:
            page.goto(url, wait_until="domcontentloaded", timeout=45000)
            page.wait_for_timeout(4000)
            for _ in range(3):
                page.mouse.wheel(0, 2500)
                page.wait_for_timeout(1200)
            hrefs = page.eval_on_selector_all(
                "a[href*='/photo/']", "els => els.map(e => e.href)"
            )
            for h in hrefs:
                m = re.search(r"-(\d+)/?$", h)
                if m:
                    found[m.group(1)] = h
            print(q, "->", len(hrefs), "links")
        except Exception as e:
            print(q, "FAIL", str(e)[:120])
    browser.close()

print("IDS:", ",".join(found.keys()))
