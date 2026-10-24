# Local link audit

Reviewed all 40 local venue/event cards across 19 area pages and their Spanish mirrors. Every card now has an official destination. Three missing URLs were added (Clovis Rodeo, Ventura Botanical Gardens, California Strawberry Festival). Four broader destinations were changed to more directly relevant official pages (Paso Robles Event Center, Firestone Walker Invitational, International Agri-Center rentals, Colony House events).

All 37 original distinct URLs returned relevant pages through the web retrieval service. Direct shell HTTP requests were blocked by the environment and were not treated as broken destinations. Ventura Botanical Gardens and California Strawberry Festival official destinations were confirmed by search results/official listings; direct web retrieval returned 403, so full destination loading could not be verified for those two.

Local cards use native same-tab HTTPS anchors, descriptive official-website labels and minimum 44px tap targets. No JavaScript navigation or pop-up dependency. The original Tulare links already contained valid href values; a new-tab issue in the user’s iPhone preview is a hypothesis, not a reproduced root cause. Browser QA confirmed that clicking the revised World Ag Expo link navigated to https://www.worldagexpo.com/.

Internal service/guide arrows retain internal destinations. tests/local-links.cjs checks card coverage, language parity, native navigation and empty/hash/javascript placeholders in authored components. Existing bilingual route checks cover internal related-link destinations.

| Area | Place | Official URL |
|---|---|---|
| /service-areas/bakersfield-ca/ | Kern County Museum | https://kerncountymuseum.org/weddings-events-venue-rentals/ |
| /service-areas/bakersfield-ca/ | CALM Zoo | https://calmzoo.org/events/ |
| /service-areas/bakersfield-ca/ | The Willows at CALM | https://willowsatcalm.org/weddings/ |
| /service-areas/paso-robles-ca/ | CASS Winery | https://www.casswines.com/private-events/ |
| /service-areas/paso-robles-ca/ | Paso Robles Event Center & California Mid-State Fair | https://www.midstatefair.com/event-center/ |
| /service-areas/paso-robles-ca/ | Firestone Walker Invitational Beer Festival | https://www.firestonewalker.com/event/invitational-beer-festival/ |
| /service-areas/san-luis-obispo-ca/ | Madonna Inn | https://www.madonnainn.com/weddings-events |
| /service-areas/san-luis-obispo-ca/ | Rod & Hammer Rock | https://rhgatherings.com/therock |
| /service-areas/visalia-ca/ | ImagineU Children’s Museum | https://www.imagineumuseum.org/birthdayparties |
| /service-areas/visalia-ca/ | Visalia Convention Center | https://www.visalia.gov/199/Visalia-Convention-Center |
| /service-areas/tulare-ca/ | International Agri-Center | https://events.internationalagricenter.com/ |
| /service-areas/tulare-ca/ | World Ag Expo | https://www.worldagexpo.com/ |
| /service-areas/tehachapi-ca/ | Oak & Vine Weddings | https://www.oakandvinewedding.com/ |
| /service-areas/tehachapi-ca/ | Tehachapi Mountain Festival | https://tehachapimountainfestival.com/ |
| /service-areas/fresno-ca/ | Fresno Chaffee Zoo | https://fcz.org/events/ |
| /service-areas/fresno-ca/ | Wolf Lakes Park — nearby Sanger | https://www.wolflakespark.com/weddings-receptions |
| /service-areas/clovis-ca/ | Clovis Rodeo | https://www.clovisrodeo.com/ |
| /service-areas/clovis-ca/ | Wolf Lakes Park — nearby Sanger | https://www.wolflakespark.com/ |
| /service-areas/santa-maria-ca/ | Historic Santa Maria Inn | https://santamariainn.com/weddings/ |
| /service-areas/santa-maria-ca/ | Santa Maria Elks Rodeo & Parade | https://www.elksrec.com/ |
| /service-areas/lancaster-ca/ | AV Fair & Event Center | https://avfair.com/ |
| /service-areas/lancaster-ca/ | California Poppy Festival | https://avfair.com/california-poppy-festival/ |
| /service-areas/palmdale-ca/ | Rancho Vista Golf Club | https://www.ranchovistagolfclub.com/weddings/ |
| /service-areas/palmdale-ca/ | DryTown Water Park | https://www.drytownwaterpark.com/p/getconnected/rentals/party-packages |
| /service-areas/santa-clarita-ca/ | Hart & Main | https://hartandmain.com/ |
| /service-areas/santa-clarita-ca/ | Santa Clarita Cowboy Festival | https://cowboyfestival.org/ |
| /service-areas/ventura-ca/ | Ventura Botanical Gardens | https://venturabotanicalgardens.org/plan-your-event/ |
| /service-areas/ventura-ca/ | California Strawberry Festival | https://castrawberryfestival.org/ |
| /service-areas/los-angeles-ca/ | Natural History Museum of Los Angeles County | https://nhmlac.org/host-event/private-events-nhm |
| /service-areas/los-angeles-ca/ | La Brea Tar Pits | https://live-tarpits.nhmlac.org/host-event/private-events-la-brea-tar-pits |
| /service-areas/anaheim-ca/ | The Colony House | https://colonyhouseanaheim.com/events/ |
| /service-areas/anaheim-ca/ | Anaheim Convention Center | https://www.anaheim.net/facilities/facility/details/Anaheim-Convention-Center-432 |
| /service-areas/orange-county-ca/ | Discovery Cube Orange County | https://www.discoverycube.org/orange-county/visit/ |
| /service-areas/orange-county-ca/ | Lyon Air Museum | https://lyonairmuseum.org/facilityrental/ |
| /service-areas/san-diego-ca/ | San Diego Air & Space Museum | https://sandiegoairandspace.org/plan-your-event/overview |
| /service-areas/san-diego-ca/ | MCAS Miramar Air Show | https://miramarairshow.com/ |
| /service-areas/sacramento-ca/ | Fairytale Town | https://www.fairytaletown.org/birthday-parties/ |
| /service-areas/sacramento-ca/ | Sacramento Farm-to-Fork events | https://www.visitsacramento.com/restaurants-and-drinks/farm-to-fork/ |
| /service-areas/modesto-ca/ | McHenry Mansion | https://mchenrymansion.org/rental/ |
| /service-areas/modesto-ca/ | Graffiti Summer | https://www.modestogov.com/1350/Graffiti-Summer |
