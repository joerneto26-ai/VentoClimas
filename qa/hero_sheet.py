from playwright.sync_api import sync_playwright

IDS = "7347538,3964341,16592625,27134985,12186828,28492754,16746846,12168704,8644573,13061307,15791508,3964741,29452977,14522790,30962631,33317897,5463576,27022967,3964692,16848596,5463583,33795692,24551564,18725613".split(",")

cells = "".join(
    f'<div style="position:relative"><img src="https://images.pexels.com/photos/{i}/pexels-photo-{i}.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=480&h=320" style="width:100%;height:100%;object-fit:cover;display:block" loading="eager"/><span style="position:absolute;left:6px;top:6px;background:rgba(0,0,0,.75);color:#fff;font:bold 20px system-ui;padding:2px 10px;border-radius:8px">{n+1} · {i}</span></div>'
    for n, i in enumerate(IDS)
)
html = f'<html><body style="margin:0;background:#111;display:grid;grid-template-columns:repeat(4,1fr);gap:6px;padding:6px">{cells}</body></html>'

with sync_playwright() as p:
    b = p.chromium.launch(headless=True)
    pg = b.new_page(viewport={"width": 1600, "height": 1160})
    pg.set_content(html)
    pg.wait_for_timeout(6000)
    pg.screenshot(path="qa/hero-options.png", full_page=True)
    b.close()
    print("OK")
