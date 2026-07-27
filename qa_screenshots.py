from playwright.sync_api import sync_playwright
import os

OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "qa")
os.makedirs(OUT, exist_ok=True)

SECTIONS = ["problema", "valor", "proyectos", "diferencia", "proceso", "testimonios", "servicios", "faq", "contacto"]

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)

    # Desktop
    page = browser.new_page(viewport={"width": 1440, "height": 900})
    page.on("console", lambda m: print("CONSOLE:", m.type, m.text[:200]) if m.type in ("error", "warning") else None)
    page.on("pageerror", lambda e: print("PAGEERROR:", str(e)[:300]))
    page.goto("http://localhost:4173")
    page.wait_for_load_state("networkidle")
    page.wait_for_timeout(1500)
    page.screenshot(path=os.path.join(OUT, "hero.png"))
    page.screenshot(path=os.path.join(OUT, "full.png"), full_page=True)
    for sid in SECTIONS:
        try:
            el = page.locator(f"#{sid}")
            el.scroll_into_view_if_needed()
            page.wait_for_timeout(900)
            el.screenshot(path=os.path.join(OUT, f"{sid}.png"))
        except Exception as e:
            print(f"SKIP {sid}: {e}")
    # TrustBar (section right after hero, no id)
    page.evaluate("window.scrollTo(0, document.querySelector('#top').offsetHeight)")
    page.wait_for_timeout(900)
    page.screenshot(path=os.path.join(OUT, "trustbar.png"))
    page.close()

    # Mobile
    mob = browser.new_page(viewport={"width": 390, "height": 844})
    mob.goto("http://localhost:4173")
    mob.wait_for_load_state("networkidle")
    mob.wait_for_timeout(1500)
    mob.screenshot(path=os.path.join(OUT, "mobile.png"))
    mob.evaluate("window.scrollTo(0, document.body.scrollHeight * 0.25)")
    mob.wait_for_timeout(800)
    mob.screenshot(path=os.path.join(OUT, "mobile-mid.png"))
    mob.close()

    browser.close()
    print("QA DONE")
