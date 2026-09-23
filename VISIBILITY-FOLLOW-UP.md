# Visibility follow-up

The website changes add a Cork location page, a venue page, visible FAQs, clearer pricing and phone compatibility, and updated search metadata. Existing photography is retained.

## Owner information still needed

- Kiosk position confirmed as "by the Graffiti Room". A real photo of the kiosk in place would still help — the current hero image is a generic shopping-centre render.
- Confirm individual phone variants currently stocked, including which variants have magnetic cases and supported accessories. The pages deliberately publish existing model ranges rather than inventing a live stock list.
- Update the "150+ cases printed" figure in the `index.html` hero proof strip as it grows.
- Supply a short real kiosk demonstration video and customer feedback with permission to publish. No invented testimonials or footage have been added.
- Reconfirm opening hours and the market address before publishing; these are preserved from the existing live site.

## After deployment

1. In Google Search Console, inspect the homepage, `/marina-market-cork.html` and `/venues.html`, then submit `https://www.covrcases.com/sitemap.xml`. This repository does not provide Search Console access or a verification token.
2. Confirm that Google can read the prototype page's `noindex` directive. `robots.txt` allows crawling so search engines can see that directive.
3. **Google Business Profile.** Google's guidelines generally exclude unattended kiosks (a listing needs staff contact during stated hours), so a standalone COVR listing risks suspension. Options: ask Marina Market to add COVR photos/mention to *their* profile; or, only if staff are on site during listed hours, create a listing with categories "Photo printing service" / "Mobile phone accessory store", link to `/marina-market-cork.html`, and add kiosk photos.
4. **Backlinks.** marinamarket.ie/vendors lists ~41 vendors (including retail such as Kawaii Store, Luna Maille, Jackie Brown Vintage) — COVR is not listed. Ask to be added, linking to `https://www.covrcases.com/marina-market-cork.html`. Then list on Cork/Irish directories (Cork Chamber, Golden Pages, PureCork) with identical name/address/hours.
5. Compare organic search impressions, relevant Cork queries and visitor engagement after deployment. Changes to ranking are not guaranteed.

## Local preview

This is a static GitHub Pages site. Run `python3 -m http.server 8765` from the repository and open `http://localhost:8765`.
Shared styles and scripts are in `assets/site.css` and `assets/site.js`. The existing waitlist integration and consent-gated analytics are retained; no test subscriptions were submitted.
