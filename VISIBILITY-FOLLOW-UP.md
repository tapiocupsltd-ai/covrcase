# Visibility follow-up

The website changes add a Cork location page, a venue page, visible FAQs, clearer pricing and phone compatibility, and updated search metadata. Existing photography is retained.

## Owner information still needed

- Confirm the exact kiosk position inside Marina Market and provide a real location photo or annotated indoor directions.
- Confirm individual phone variants currently stocked, including which variants have magnetic cases and supported accessories. The pages deliberately publish existing model ranges rather than inventing a live stock list.
- Supply a short real kiosk demonstration video and customer feedback with permission to publish. No invented testimonials or footage have been added.
- Reconfirm opening hours and the market address before publishing; these are preserved from the existing live site.

## After deployment

1. In Google Search Console, inspect the homepage, `/marina-market-cork.html` and `/venues.html`, then submit `https://www.covrcases.com/sitemap.xml`. This repository does not provide Search Console access or a verification token.
2. Confirm that Google can read the prototype page's `noindex` directive. `robots.txt` allows crawling so search engines can see that directive.
3. Review Google Business Profile eligibility for the unattended kiosk before creating a listing.
4. Ask Marina Market for a linked listing and coordinate local creator or publication outreach.
5. Compare organic search impressions, relevant Cork queries and visitor engagement after deployment. Changes to ranking are not guaranteed.

## Local preview

This is a static GitHub Pages site. Run `python3 -m http.server 8765` from the repository and open `http://localhost:8765`.
Shared styles and scripts are in `assets/site.css` and `assets/site.js`. The existing waitlist integration and consent-gated analytics are retained; no test subscriptions were submitted.
