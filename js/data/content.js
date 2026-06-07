// All learning content for the playbook.
// Shape: BOOKS -> modules -> concepts. Add a new transcript by pushing a new book
// object; every view iterates this data generically, so no view code changes.
//
// Concept fields:
//   id        stable slug (used in routes + storage keys)
//   title     short headline
//   hook      one punchy essence line (rendered as a pull-quote)
//   principle what it is, plainly
//   why       the mechanism — why it works
//   story     the memorable example straight from the book
//   apply     one fully-worked application in a different business
//   examples  several extra real-world applications across industries
//   actions   tickable implementation steps (becomes the checklist)
//   related   ids of related concepts

export const BOOKS = [
  {
    id: 'offers',
    title: '$100M Offers',
    subtitle: 'How to make offers so good people feel stupid saying no',
    tagline: 'What to sell, to whom, and at what price.',
    modules: [
      {
        id: 'product',
        title: 'Your Product',
        summary: 'Stop competing on price. Build something that can’t be compared.',
        concepts: [
          {
            id: 'differentiate',
            coachNote:
              `Commoditization is a slow death by a thousand discounts. Your job isn't to be cheaper — it's to be the only logical choice for one specific person. Pick a unique mechanism (a named method, a guarantee, a delivery format) competitors can't claim, and the price conversation quietly disappears.`,
            mistakes: [
              `Adding a "unique" twist the customer can't actually feel or value — differentiation only counts if the buyer perceives it.`,
              `Differentiating on features rivals can copy overnight instead of on outcome, guarantee, or brand.`,
              `Dropping price "just to get started," which trains the market to treat you as a commodity.`,
            ],
            stats: [
              `In a Caltech/Stanford study (Plassmann et al., 2008), people rated the same wine as tastier when told it cost more — price itself shifts perceived quality.`,
              `Commodity markets compete on price, compressing margins toward zero; "category-of-one" offers escape that race (the core thesis of $100M Offers).`,
            ],
            cases: [
              `Liquid Death sells ordinary canned water at a premium by differentiating on brand and identity, not the water.`,
              `Dollar Shave Club cracked a Gillette-dominated market not with a better blade but a differentiated model (subscription + voice) — and sold for ~$1B.`,
            ],
            title: 'Differentiate — never compete on price',
            hook: 'If your product looks like everyone else’s, you’re forced to sell it cheaper — a race to the bottom.',
            principle:
              'A commodity is available from many places at similar quality — like apples at any grocery store. With commodities the buyer picks the cheapest, so you must keep cutting price to stay competitive. A differentiated offer can’t be price-compared, so the prospect is forced to judge it on value instead of price.',
            why:
              'When nothing compares to your offer, the decision becomes “your product vs. nothing,” not “your product vs. a cheaper one.” You’re effectively selling in a vacuum, which protects your margin and lets you charge a premium.',
            story:
              'Hormozi contrasts two weight-loss offers. The commodity: “$1,000 down plus $500/month for consultations.” The differentiated one: “Pay once, only if you get results — I guarantee you lose 5kg in your first month or your next month is free, plus a personalized exercise program and an app to help you shop, cook, and eat healthier, with consultations any time.” Asked to choose, almost everyone picks the second. It isn’t comparable to anything.',
            apply:
              'Selling resume help? Don’t list “resume edits — $99” (instantly comparable). Package it as “The Land-the-Interview System: a tailored resume, three mock interviews, and a 30-day apply plan — or I keep working with you free until you get a callback.” Now there is no apples-to-apples competitor.',
            examples: [
              'Coffee shop: instead of a “$4 latte” (commodity), become “the neighborhood’s only single-origin pour-over bar — served in 90 seconds or it’s free.”',
              'SaaS: don’t launch “project-management tool #500”; sell “the only PM tool built for wedding planners, with vendor timelines and seating charts baked in.”',
              'Plumber: not “plumbing repair,” but “Same-day fix or we pay you $100 — licensed, flat-rate, no surprise bills.”',
              'Fitness coach: not “online coaching,” but “Busy-Dad Shred: 30-minute home workouts, a done-for-you grocery list, lose the gut in 90 days or keep coaching free.”',
            ],
            actions: [
              'Write down exactly how a customer could price-compare you today.',
              'List three ways to make your offer un-comparable (a guarantee, a bundle, outcome-based pricing, a unique named mechanism).',
              'Rewrite your headline to sell the outcome, not the deliverable.',
              'Give your offer a distinct name so it stops looking like a generic category.',
            ],
            related: ['four-value-drivers', 'offer-build-5-steps', 'pick-a-niche'],
          },
        ],
      },
      {
        id: 'market',
        title: 'Your Market',
        summary: 'Sell to a starving crowd: in pain, able to pay, easy to reach, and growing.',
        concepts: [
          {
            id: 'market-pain',
            coachNote:
              `Demand follows pain, not features. Before crafting the offer, get obsessive about the exact, present-tense problem — the words your customer says at 2 a.m. The more precisely you describe their pain back to them, the more they assume you can solve it.`,
            mistakes: [
              `Selling a "vitamin" (nice-to-have) and wondering why it's a slow, hard sell.`,
              `Describing your solution instead of their problem — people buy when they feel understood, not informed.`,
              `Targeting people who have the problem but don't yet feel it urgently.`,
            ],
            stats: [
              `Loss aversion (Kahneman & Tversky, 1979): a loss feels about twice as intense as an equivalent gain — relieving pain motivates harder than promising upside.`,
              `"Painkiller vs. vitamin" is a standard product/venture heuristic for why urgent-problem businesses convert faster and retain better.`,
            ],
            cases: [
              `Analgesics like Advil built huge brands on acute, immediate relief, while many "wellness" supplements struggle to retain customers.`,
              `24/7 locksmiths, tow trucks, and emergency plumbers command premium prices precisely because the pain is acute and now.`,
            ],
            title: 'Look for pain — sell painkillers, not vitamins',
            hook: 'People pay now for what hurts now. Vitamins are optional; painkillers are urgent.',
            principle:
              'Your market must not merely want what you sell — they must need it. A painkiller solves a problem they feel right now; a vitamin is a nice-to-have for some future benefit. If you can accurately articulate the pain a customer feels, they will almost always buy your solution.',
            why:
              'Pain creates urgency. When people clearly see the solution to their pain — and what life looks like without it — they are pulled toward your offer instead of having to be pushed.',
            story:
              'Hormozi’s analogy: if someone has a headache, what’s easier to sell — a painkiller or a vitamin C? The vitamin is something they might want for future health, but the painkiller is something they need this instant. Aim your offer at the headache.',
            apply:
              'A bookkeeper could sell “monthly financial wellness” (a vitamin) or “Got an IRS letter? We’ll clean up your books and respond before the deadline” (a painkiller). The second one gets bought today.',
            examples: [
              'Emergency locksmith (acute pain) outsells a “home-security tips” newsletter (vitamin) every time.',
              'Tax-resolution service for people who just received an IRS notice, versus generic “financial planning.”',
              '“Fix my leaking roof before the storm this weekend” versus an “annual roof-maintenance plan.”',
              'B2B: “Stop your top sales rep from quitting” lands harder than “improve team culture.”',
            ],
            actions: [
              'Write the exact painful moment your customer is in, in their words.',
              'Rephrase your offer as the painkiller for that specific moment.',
              'Cut any “nice-to-have” framing and lead with the urgent problem.',
            ],
            related: ['four-value-drivers', 'market-purchasing-power', 'pick-a-niche'],
          },
          {
            id: 'market-purchasing-power',
            coachNote:
              `Willingness to pay is part of the market, not an afterthought. The same effort sells far better to people who already spend on the problem. Follow the existing budgets — find who's already paying to solve this, and sell them a better way.`,
            mistakes: [
              `Falling in love with a big audience that can't afford the price you need.`,
              `Confusing audience size with revenue potential — reach without budget is vanity.`,
              `Pricing for the broke majority instead of the able-to-pay minority.`,
            ],
            stats: [
              `Hormozi's own example: a ~$300 course got 107 sales from a 150k-subscriber channel and zero from a 1.1M-subscriber channel that lacked purchasing power.`,
              `The Pareto principle shows up in pricing: a small share of "whale" customers often drives most of the revenue.`,
            ],
            cases: [
              `B2B software routinely out-earns consumer apps with a fraction of the users, because businesses have budgets and ROI to justify high prices.`,
              `Luxury brands deliberately shrink their addressable market to those who can pay — and profit more per customer.`,
            ],
            title: 'Look for purchasing power',
            hook: 'A huge audience is worthless if they can’t afford you.',
            principle:
              'Choose a market that can pay your prices. You might build a brilliant system for improving resumes, but if your customers are all unemployed you’ll struggle to charge enough to make it worth your time. The audience must be able to afford the service at the price you require.',
            why:
              'Revenue is demand times ability to pay. Without purchasing power, even a perfect product in a giant market never converts — the game is over before it starts.',
            story:
              'A creator promoted the same ~$300 course on two channels: 107 people bought from the channel with 150,000 subscribers, while ZERO bought from the channel with 1.1 million subscribers. Why? The big channel’s audience came largely from low-income countries where $300 can be a month’s income.',
            apply:
              'A $2,000 golf-coaching program should target country-club members, not college students — same skill taught, completely different ability to pay.',
            examples: [
              'Premium dog products: target affluent pet “parents,” not all dog owners.',
              'High-ticket consulting: sell to profitable mid-market firms, not pre-revenue startups.',
              'Luxury wedding photography: engaged couples in high-income metros.',
              'Keep low-purchasing-power audiences for a free or “charity” tier, not your main business.',
            ],
            actions: [
              'Estimate your target customer’s realistic disposable income.',
              'Gut-check your price against that budget — can they say yes without pain to their rent?',
              'If not, move that audience to a free/low tier and re-target a segment that can pay.',
            ],
            related: ['market-pain', 'charge-premium', 'pick-a-niche'],
          },
          {
            id: 'market-targetable',
            coachNote:
              `Reachability is a growth multiplier hiding in plain sight. If your buyers already cluster somewhere — a subreddit, an association, a hashtag, a trade show — your acquisition cost plummets. Choose markets you can reach repeatedly and cheaply, not just ones that exist.`,
            mistakes: [
              `Picking a "great" market you have no affordable way to reach.`,
              `Spraying broad ads instead of going where buyers already gather.`,
              `Ignoring owned channels (lists, communities) in favor of rented attention.`,
            ],
            stats: [
              `Customer Acquisition Cost falls sharply when a market is concentrated and reachable — targeting is a primary lever on unit economics.`,
              `Niche communities give near-zero-cost repeat access to the exact buyer, versus paying per impression on open platforms.`,
            ],
            cases: [
              `Many B2B companies grow almost entirely through industry associations, trade shows, and niche newsletters, because the buyers are pre-aggregated.`,
              `Creators who build an email list own a reachable audience and escape algorithm and ad-cost volatility.`,
            ],
            title: 'Look for a market that’s easy to target',
            hook: 'If you can’t find them, you can’t sell to them.',
            principle:
              'Pick a market you can actually reach. Make sure your customers gather somewhere you can access them — mailing lists, social-media groups, communities, channels they watch. A perfect market with no way in is useless.',
            why:
              'Distribution is half the battle. A reachable audience means you can deliver your message repeatedly and cheaply; an unreachable one means infinite acquisition cost.',
            story:
              'Hormozi’s test is blunt: “Where is your customer? Make sure you can find them on mailing lists, social-media groups, the channels they watch.” If you can’t name where they congregate, you can’t sell to them.',
            apply:
              'Targeting “CrossFit box owners” works because they cluster in specific Facebook groups, affiliate directories, and equipment newsletters — you know exactly where to show up.',
            examples: [
              'Etsy sellers doing $1k+/month: reachable via Etsy seller forums and niche YouTube channels.',
              'Dental-practice owners: industry associations, trade shows, and rented email lists.',
              'New moms in one city: local Facebook mom groups and pediatrician partnerships.',
              'Real-estate agents: brokerage networks, MLS communities, and agent podcasts.',
            ],
            actions: [
              'List the exact three places your customers already gather.',
              'Confirm you can post, advertise, or partner in each of those places.',
              'If you can’t reach them, narrow the market until you can.',
            ],
            related: ['pick-a-niche', 'market-growing', 'market-pain'],
          },
          {
            id: 'market-growing',
            coachNote:
              `A rising market forgives mistakes; a shrinking one punishes excellence. Tailwinds compound. Anchor your business in health, wealth, or relationships, then find the fastest-growing sub-niche inside it.`,
            mistakes: [
              `Building in a structurally declining category and blaming yourself for the headwind.`,
              `Chasing a short-lived fad spike instead of a durable growth trend.`,
              `Ignoring demographic shifts that quietly grow (or shrink) your market.`,
            ],
            stats: [
              `The three evergreen markets — health, wealth, relationships — persist because the pain of lacking them is severe and universal.`,
              `The subscription economy has grown several times faster than S&P 500 sales over the past decade (Zuora Subscription Economy Index) — riding a growing model pays.`,
            ],
            cases: [
              `Businesses built on YouTube and creator tools rode a growth wave; print-classifieds businesses (newspapers) shrank with theirs.`,
              `Senior-focused services keep expanding as populations age — in many countries more people turn 60 than 20.`,
            ],
            title: 'Find a market that’s growing',
            hook: 'Row with the current. In a growing market you grow; in a dying one you shrink — no matter how good you are.',
            principle:
              'When a market grows, you grow with it; when it shrinks, it drags you down. Three markets always exist because they’re so painful to lack: health, wealth, and relationships. Find a growing sub-group inside one of these.',
            why:
              'A rising tide lifts your business. Tailwinds compound; fighting a structural decline wastes even great execution.',
            story:
              'A business built on social media (YouTube) rides a growing market; one built on newspapers rides a dying one. And in dating: there are more people turning 60 than 20, so a service for lonely seniors targets a growing market — they also have more pain and more buying power.',
            apply:
              'Creator-economy tools sit on a growing wave; DVD-rental services sit on a dying one. Pick the wave first, then build the surfboard.',
            examples: [
              'Telehealth and longevity services (growing) versus fax-based workflows (dying).',
              'EV-charger installation as adoption climbs.',
              'Senior-care and loneliness solutions, riding demographics.',
              'AI-assisted productivity tools versus legacy on-premise software.',
            ],
            actions: [
              'Confirm your market sits under health, wealth, or relationships.',
              'Check the 5-year trend — is demand rising, flat, or falling?',
              'If flat or declining, find a growing sub-niche to ride instead.',
            ],
            related: ['market-targetable', 'pick-a-niche', 'market-purchasing-power'],
          },
          {
            id: 'pick-a-niche',
            coachNote:
              `Specialization is the fastest path to premium pricing. "For everyone" reads as "for no one." When the prospect thinks "this is literally me," price sensitivity drops and trust spikes. Commit long enough to master the niche before judging it.`,
            mistakes: [
              `Niche-hopping when the real problem is a weak offer, not the niche.`,
              `Staying broad out of fear of "leaving money on the table" — and converting no one.`,
              `Picking a niche with pain but no purchasing power or way to reach it.`,
            ],
            stats: [
              `"The riches are in the niches" names a real effect: narrower targeting raises message-to-market match and conversion.`,
              `The long-tail dynamic means specialized offers face far less competition and can hold higher margins than generic ones.`,
            ],
            cases: [
              `Hormozi's example: "time management" → "for night-shift nurses" turns a crowded category into a near-monopoly for that buyer.`,
              `Many 7-figure agencies serve one vertical (e.g., "Google Ads for dentists") and out-earn generalist shops.`,
            ],
            title: 'Commit to a niche',
            hook: 'If you sell to everybody, you sell to nobody.',
            principle:
              'Don’t sell to an entire market — focus on a specific segment. A niche makes your product more unique, with little to no competition, so you can charge more. Once you pick a niche, commit; don’t jump from one to another, because the problem is usually a weak offer, not the niche.',
            why:
              'Specificity signals “this was made exactly for me,” which converts far better than a generic claim. Narrower also means fewer competitors and higher prices.',
            story:
              'Many sell time-management courses. Fewer sell time management for health professionals. Fewer still for nurses. And almost nobody sells time management for night-shift nurses — so a night-shift nurse who sees that offer thinks, “This is made exactly for me.”',
            apply:
              'Generic “bookkeeping” becomes “bookkeeping for Shopify stores doing $500k+” — a sharper promise, less competition, and a price you can defend.',
            examples: [
              '“Marketing agency” → “Google Ads for med spas.”',
              '“Meal prep” → “high-protein halal meal prep for shift workers.”',
              '“Fitness for women” → “post-partum core rehab for first-time moms.”',
              '“Copywriting” → “email copy for DTC skincare brands.”',
            ],
            actions: [
              'Pick ONE niche you can credibly dominate.',
              'Put the niche directly in your offer’s name and headline.',
              'Commit for a set period before judging — fix the offer before changing the niche.',
            ],
            related: ['differentiate', 'market-targetable', 'market-pain'],
          },
        ],
      },
      {
        id: 'pricing',
        title: 'Your Prices',
        summary: 'Charge premium by making the value impossible to miss.',
        concepts: [
          {
            id: 'price-vs-value',
            coachNote:
              `A price is never expensive or cheap in a vacuum — only relative to the value the buyer can see. Make the return obvious before you ever name the number. Sell the destination, and the ticket price stops mattering.`,
            mistakes: [
              `Leading with price before establishing value — guaranteeing a "too expensive" reaction.`,
              `Talking features instead of the dollar, time, and emotional payoff.`,
              `Assuming the customer will do the ROI math themselves (they won't).`,
            ],
            stats: [
              `Value-based pricing (set by perceived value, not cost-plus) consistently beats cost-based pricing on margin in pricing research.`,
              `Framing the same number against a bigger payoff flips the decision — Hormozi's $5k course becomes a "yes" reframed as guaranteed $7k/month.`,
            ],
            cases: [
              `LASIK sells by reframing its price against a lifetime of glasses, contacts, and hassle.`,
              `Solar installers close by reframing a large upfront cost as locking in 25 years of energy prices.`,
            ],
            title: 'Price vs. value',
            hook: 'People don’t reject your price — they reject the value they can’t see yet.',
            principle:
              'Price is what you pay; value is what you get. People buy when the value they perceive is greater than the price. The moment value drops below price, the sale dies. So your job is to make the value impossible to miss — not to blindly charge more.',
            why:
              'A number in isolation always looks expensive. Anchored against a clear, larger payoff, the same number looks like a bargain.',
            story:
              'A $5,000 “how to make money online” course sounds like a hard no. But reframed — “you’ll earn $7,000/month, it takes ~11 months, three hours a day, and you don’t pay until you’re already earning” — suddenly you’re interested. Same price, now you can see the value.',
            apply:
              '$200/month bookkeeping looks pricey until reframed as “saves you 12 hours a month and prevents an average $5,000 in tax penalties” — now it’s obviously worth it.',
            examples: [
              '$3,000 LASIK reframed as “never buy glasses or contacts again for the rest of your life.”',
              'Solar panels reframed as “lock in today’s energy rate for 25 years.”',
              'A $50k executive program reframed as a lifetime earnings uplift.',
              'A premium mattress reframed as “$1.50 a night for a third of your life.”',
            ],
            actions: [
              'List the full dollar, time, and emotional value your offer delivers.',
              'Reframe your price directly against that value.',
              'Show the ROI in concrete numbers, not adjectives.',
            ],
            related: ['charge-premium', 'four-value-drivers'],
          },
          {
            id: 'charge-premium',
            coachNote:
              `Price isn't just what you collect — it's a tool that shapes behavior. A higher price raises client commitment (so they show up and get results) and funds a better product (which creates a flywheel). Charging more and over-delivering is often kinder than charging little and under-serving.`,
            mistakes: [
              `Underpricing to feel "accessible," then lacking the margin to deliver real results.`,
              `Competing on price against bigger players instead of on value.`,
              `Raising price without raising the perceived value to match.`,
            ],
            stats: [
              `The price-quality heuristic (Plassmann et al., 2008): a higher price literally increased neural pleasure and rated enjoyment of identical wine.`,
              `Veblen goods break the normal demand curve — for status products, a higher price can increase demand.`,
              `Higher financial commitment is linked to higher follow-through (sunk-cost and consistency effects), which improves client outcomes.`,
            ],
            cases: [
              `Premium gyms whose members pay more attend more and get better results than $10/month gyms, where most never show up.`,
              `Apple sustains industry-leading margins by pricing on perceived value and brand, then reinvesting in product.`,
            ],
            title: 'Charge premium prices',
            hook: 'Charge so much it almost hurts — then over-deliver.',
            principle:
              'Once you genuinely deliver value, raising your price does two powerful things: it increases the client’s emotional investment (so they actually do the work and get results), and it gives you money to improve — better staff, better product, better experience — which snowballs into a stronger business.',
            why:
              'Low price → low commitment → weak results and easy quitting. High price → invested clients who show up, plus margin to reinvest. Better results create referrals and let you scale.',
            story:
              'A transformation or therapy program needs an invested client willing to push through discomfort; pay a low price and they quit easily. Hormozi also describes the snowball: higher prices let you pay great employees, who build better products, which improves the customer experience, which lets you scale.',
            apply:
              'A $200/month gym whose members actually show up (because they paid) gets better client results than a $10/month gym — and those results become testimonials that fund growth.',
            examples: [
              'A high-ticket mastermind: members implement precisely because they paid, and their wins fund marketing.',
              'A Prada bag: buyers value status and craftsmanship, and the brand reinvests in quality.',
              'A premium SaaS tier funds faster support and a quicker roadmap.',
              'A boutique salon charging double can afford master stylists — raising results and word of mouth.',
            ],
            actions: [
              'Raise your price to a level that slightly scares you.',
              'Reinvest the added margin straight into delivery quality.',
              'Track whether higher-paying clients get measurably better outcomes.',
            ],
            related: ['price-vs-value', 'four-value-drivers', 'market-purchasing-power'],
          },
          {
            id: 'four-value-drivers',
            coachNote:
              `Value is a fraction you can engineer: raise the dream outcome and the perceived likelihood, lower the time and the effort. Most competitors only promise a bigger dream — the durable edge is cutting time-to-result and effort, because those are hardest to copy and what people pay a premium to escape.`,
            mistakes: [
              `Cranking up the promise while ignoring believability — which reads as hype.`,
              `Forgetting to attack time delay and effort, where the real willingness-to-pay lives.`,
              `Offering no proof, so perceived likelihood stays low no matter how good the offer.`,
            ],
            stats: [
              `People pay big premiums for speed: express shipping, rideshare vs. walking, and Amazon's delivery investment all monetize lower time delay.`,
              `Guarantees and social proof raise "perceived likelihood of achievement," a documented driver of conversion through risk reduction.`,
            ],
            cases: [
              `Amazon Prime turned lower time delay (fast, free shipping) into one of the stickiest subscriptions ever.`,
              `HelloFresh and other meal kits win on effort reduction — pre-portioned, delivered, 20-minute recipes — not cheaper food.`,
            ],
            title: 'The four value drivers',
            hook: 'Value = (Dream Outcome × Likelihood) ÷ (Time × Effort). Push two up, two down.',
            principle:
              'Four variables create perceived value. Increase the Dream Outcome and the Perceived Likelihood of achieving it (certainty); decrease the Time Delay and the Effort & Sacrifice required. The real gold is in lowering time and effort — that’s the hardest for competitors to copy.',
            why:
              'Anyone can promise a result. Delivering it faster and with less effort than the competition is what justifies a premium price. An “instant six-pack” would be infinitely valuable precisely because time and effort would be zero.',
            story:
              'A gym isn’t selling membership — it’s selling weight loss, definition, and health (the dream outcome). You sell the vacation, not the flight. People pay huge premiums for speed (airplane vs. bus, Uber vs. walking, Amazon’s drone deliveries). And certainty matters: you want clients as sure of your result as they are that they’ll enjoy their favorite chocolate.',
            apply:
              'A meal-kit service: dream = healthy family dinners; certainty = chef-designed recipes; time ↓ = 20-minute meals; effort ↓ = pre-portioned and delivered. Every driver pushed the right way.',
            examples: [
              'Tax software: dream = max refund; certainty = accuracy guarantee; time ↓ = file in 20 minutes; effort ↓ = auto-import your W-2.',
              'Language app: dream = speak on your trip; certainty = a proven method; time ↓ = 10 minutes a day; effort ↓ = gamified lessons.',
              'Lawn service: dream = best lawn on the street; certainty = a guarantee; time ↓ = done this week; effort ↓ = fully done-for-you.',
              'Coding bootcamp: dream = a dev job; certainty = job guarantee; time ↓ = 12 weeks; effort ↓ = structured curriculum + mentor.',
            ],
            actions: [
              'Rate your current offer 1–10 on each of the four drivers.',
              'Brainstorm three ways to cut the time to result.',
              'Brainstorm three ways to cut the effort required.',
              'Add a certainty element — a guarantee, proof, or track record.',
            ],
            related: ['psychological-solutions', 'offer-build-5-steps', 'differentiate', 'price-vs-value'],
          },
          {
            id: 'psychological-solutions',
            coachNote:
              `Perception is cheaper to change than reality. Before spending to make something genuinely faster or easier, ask how to make it feel faster or easier. Progress, proof, framing, and anticipation move the same value needle at a fraction of the cost.`,
            mistakes: [
              `Spending heavily on logical fixes (more speed, more features) when a perception fix would do.`,
              `Ignoring the emotional experience of waiting, choosing, or onboarding.`,
              `Adding "psychology" that feels manipulative rather than genuinely helpful.`,
            ],
            stats: [
              `The elevator-mirror fix is real building-management lore: mirrors cut wait complaints without changing the wait.`,
              `The peak-end rule (Kahneman): people judge an experience by its peak and ending, not its average — cheap to design for, powerful in effect.`,
            ],
            cases: [
              `Domino's Pizza Tracker reduced perceived wait and anxiety without cooking a single pizza faster.`,
              `Uber's live driver map turned an anxious wait into a watchable, tolerable one.`,
            ],
            title: 'Find psychological solutions',
            hook: 'The cheapest wins are psychological, not logical.',
            principle:
              'There are two kinds of solutions. Logical ones (a faster elevator, a faster train) are expensive and often fail. Psychological ones (mirrors by the elevator, a countdown clock at the platform) are cheap, effective, and plentiful. Hunt for the psychological fixes first.',
            why:
              'Most logical solutions have already been tried and are costly. Psychological solutions change the perceived time and effort — which is what actually drives value — for a fraction of the cost.',
            story:
              'Instead of building a faster elevator, building owners added mirrors so people watch themselves and forget the wait. Instead of faster trains, stations added clocks showing how many minutes until arrival. The wait didn’t shrink — the perceived wait did.',
            apply:
              'A pizza shop can’t always cook faster, but an order tracker (“your pizza is in the oven”) slashes the perceived wait and the complaints.',
            examples: [
              'An onboarding progress bar makes software setup feel easier than it is.',
              'A “Most popular” badge raises certainty on a pricing page.',
              'A restaurant’s free bread reduces the perceived wait for the meal.',
              'A delivery ETA countdown lowers anxiety without speeding anything up.',
            ],
            actions: [
              'Find the moments where customers feel friction or waiting.',
              'Add a psychological fix (progress, proof, status, or distraction) before spending on a logical one.',
              'Measure whether complaints or drop-off fall after the change.',
            ],
            related: ['four-value-drivers'],
          },
        ],
      },
      {
        id: 'the-offer',
        title: 'Your Offer',
        summary: 'Solve every obstacle between the customer and their dream — then stack it.',
        concepts: [
          {
            id: 'offer-build-5-steps',
            coachNote:
              `A "grand slam" offer isn't one big promise — it's the systematic removal of every reason to fail. List the obstacles, solve each one, then trim to the highest value-to-cost solutions and stack them. The goal: the prospect can't imagine NOT getting the result.`,
            mistakes: [
              `Stacking quantity ("100 bonuses!") instead of solving the few obstacles that actually block results.`,
              `Keeping high-cost, low-value deliverables that hurt margin and dilute focus.`,
              `Skipping the "list every problem" step, so the offer leaves obvious failure points open.`,
            ],
            stats: [
              `Choice overload (Iyengar & Lepper, 2000): a 24-jam display drew more lookers but ~10x fewer buyers than a 6-jam display — trimming options can raise conversion.`,
              `Reducing friction and perceived risk at each step compounds into higher conversion — the core mechanic of the offer stack.`,
            ],
            cases: [
              `Hormozi's weight-loss "grocery system" solves one obstacle with six delivery vehicles, then stacks similar bundles for cooking and exercise.`,
              `Productized services win by pre-solving every common obstacle into one fixed-scope, fixed-price package.`,
            ],
            title: 'Build the offer in 5 steps',
            hook: 'Make it impossible to fail — solve every obstacle between them and the dream.',
            principle:
              'Five steps: (1) Identify the dream outcome. (2) List every problem and obstacle on the way there. (3) Turn each problem into a solution by adding “how to” and reversing it. (4) Create delivery vehicles for each solution (one-on-one, group, DIY, done-for-you, recordings, tools). (5) Trim & stack — classify each solution by value and cost, cut the low-value/high-cost ones, keep the high-value (especially low-cost/high-value, often digital), scale down any high-cost/high-value items, and stack the winners into one irresistible bundle.',
            why:
              'When you’ve solved every obstacle, the customer’s chance of failure is tiny — so the offer feels un-comparable and worth a premium, and you never feel like a fraud charging for it.',
            story:
              'For weight loss, Hormozi lists obstacles in dieting and exercise, reverses each into a solution, then builds bundles. The “foolproof bargain grocery system” alone has six delivery vehicles: a 1-on-1 nutrition orientation, a recorded grocery tour, a DIY grocery calculator, weekly shopping lists, a grocery-buddy system, and pre-made carts for delivery — with separate bundles for cooking, exercising, and so on.',
            apply:
              'A course-launch offer: dream = your first $10k month; obstacles = no audience, no offer, fear of selling; solutions → delivery vehicles like templates, swipe files, a live cohort, and an accountability pod.',
            examples: [
              'Dating coach: dream = a great relationship; obstacles = no matches, bad photos, anxiety → photo review, opener scripts, role-play calls.',
              'Bookkeeping: dream = stress-free taxes; obstacles = messy receipts, deadlines → a receipt app, monthly reconciliation, a year-end packet.',
              'Kitchen remodel: dream = dream kitchen on time and budget → a 3D plan, a fixed-price quote, weekly updates, and a cleanup crew.',
              'Bookkeeping-to-CFO upsell: stack templates + monthly call + dashboard into one premium tier.',
            ],
            actions: [
              'Write the single dream outcome your customer wants.',
              'Brainstorm every obstacle between them and that outcome.',
              'Reverse each obstacle into a “how to…” solution.',
              'List delivery vehicles for each solution.',
              'Trim by value vs. cost, then stack the winners into one bundle.',
            ],
            related: ['four-value-drivers', 'differentiate', 'bonus-offer'],
          },
        ],
      },
    ],
  },
  {
    id: 'money-models',
    title: '$100M Money Models',
    subtitle: 'How to make money',
    tagline: 'Structure offers so customers buy, buy again, and stay.',
    modules: [
      {
        id: 'attraction',
        title: 'Attraction Offers',
        summary: 'Get customers in the door with something free or cheap — then sell more.',
        concepts: [
          {
            id: 'giveaways',
            coachNote:
              `A giveaway is a lead-generation engine disguised as a contest. The grand prize buys attention and contact info; the real money is the time-boxed consolation offer to everyone who didn't win. If entries are weak, the prize isn't grand enough.`,
            mistakes: [
              `A grand prize that isn't truly grand (or isn't relevant to your core offer), so few enter.`,
              `Forgetting the consolation offer — leaving 99% of entrants unmonetized.`,
              `No urgency or entry cap, so the consolation offer loses its punch.`,
            ],
            stats: [
              `Reciprocity (Cialdini): giving something first (a real chance to win) raises the odds people say yes to your follow-up offer.`,
              `Deadlines and scarcity reliably lift response versus open-ended offers — urgency is one of marketing's most consistent levers.`,
            ],
            cases: [
              `Brands run "win our flagship product" sweepstakes to build huge email lists, then sell to the entrants.`,
              `Hormozi's dentist: a $6,000 invisible-braces grand prize plus a one-week $2,000-off offer for everyone else.`,
            ],
            title: 'Giveaways',
            hook: 'One grand prize draws the crowd; the “losers” become your buyers.',
            principle:
              'Run a contest where the grand prize is your most expensive thing, given free to one publicly announced winner. Everyone who entered but didn’t win gets a killer, time-limited discount. Add urgency and entry caps. If the giveaway flops, your grand prize wasn’t grand enough.',
            why:
              'A free grand prize attracts a flood of entries and contact info. The non-winners then receive an exciting discounted offer with urgency — and most buy right away.',
            story:
              'A fitness-certification business gave away a scholarship; applicants shared contact info, one public winner was announced, and everyone else got a time-limited discount. A dentist example: grand prize = $6,000 invisible braces; consolation = $2,000 off, valid one week. One company’s giveaway flopped until they upgraded a weak event-ticket prize to something truly grand.',
            apply:
              'A med spa gives away a year of Botox (~$5,000) to one winner; every other entrant gets 30% off their first treatment if they book within 7 days.',
            examples: [
              'SaaS: win a free year; everyone else gets 3 months free if they upgrade this week.',
              'Auto detailer: win a $2,000 ceramic coating; entrants get $200 off a detail package, 50 spots only.',
              'Online course: win free lifetime access; entrants get 50% off in a 72-hour window.',
              'Restaurant: win a private chef’s dinner; entrants get a free appetizer with any entrée this month.',
            ],
            actions: [
              'Pick your most expensive thing as the grand prize.',
              'Set a strong, time-limited discount for everyone who didn’t win.',
              'Cap entries and add a clear deadline for urgency.',
              'Announce the winner publicly, then call/email non-winners within 24 hours.',
            ],
            related: ['decoy-offer', 'win-your-money-back'],
          },
          {
            id: 'decoy-offer',
            coachNote:
              `A cheap entry offer gets the buyer in motion; the premium offer gets them the result. The decoy isn't the product — it's the moment they realize the cheap path won't deliver what they came for. Set up the contrast honestly and let them choose the outcome.`,
            mistakes: [
              `Making the decoy so good it satisfies the need, removing the reason to upgrade.`,
              `Failing to show the premium beside the decoy, so the value gap stays invisible.`,
              `Bashing the cheap option instead of letting the customer feel its limits.`,
            ],
            stats: [
              `The decoy effect / asymmetric dominance (Huber, Payne & Puto, 1982) reliably shifts choices toward a target option when a cleverly-worse option is present.`,
              `Ariely's Economist experiment: adding a $125 print-only decoy made far more people pick the $125 print+web bundle, lifting revenue by reshaping the comparison.`,
            ],
            cases: [
              `Hormozi's tanning salon: a $5 five-day pass leads, via the "turkey talk," to a $20/month unlimited membership.`,
              `Costco's free samples are decoys — you taste, then buy the full-size product.`,
            ],
            title: 'Decoy offer',
            hook: 'Get them in cheap, then show the premium that actually gets the result.',
            principle:
              'Offer something free or cheap as a decoy to get people in the door, then present your premium offer side-by-side so the value gap is obvious. Talk about the premium with genuine excitement, focused on the dream outcome.',
            why:
              'Once customers realize the cheap option won’t get them the result they actually came for, they’re ready to pay for the one that will.',
            story:
              'John’s tanning salon sold a $5 five-day pass. When customers wanted to get darker, he gave the “turkey talk” — you can’t cook a turkey in half the time by doubling the heat; you’ll burn it, same with tanning. Then he offered unlimited access for $20/month on a one-year sign-up, with the $5 applied as a first-month discount. Most upgraded.',
            apply:
              'A gym offers a $1 week trial (decoy); once members feel that a week isn’t enough, the coach presents a premium transformation package that actually delivers the result.',
            examples: [
              'Car wash: a $5 basic wash leads to an unlimited monthly membership once you see the difference.',
              'Photographer: a free mini-session leads to the full package with an edited album.',
              'SaaS: a free tier leads to the paid tier framed around the result the free tier can’t deliver.',
              'Salon: a $15 fringe trim leads to a full cut-and-color membership.',
            ],
            actions: [
              'Design a low-friction decoy that gets people in the door.',
              'Write your version of the “turkey talk” — why the cheap option underdelivers.',
              'Show the decoy and premium side-by-side so the value gap is visible.',
              'Lead with the dream outcome, with real enthusiasm.',
            ],
            related: ['giveaways', 'anchor-upsell', 'classic-upsell'],
          },
          {
            id: 'buy-x-get-y-free',
            coachNote:
              `"Free" is psychologically louder than an equivalent discount. Raise the headline unit price and bundle the rest as free — you grab attention and lift average order value without depending on holiday sales. The free item doesn't even have to be the same product.`,
            mistakes: [
              `Discounting instead of using "free," and losing the disproportionate pull of the word.`,
              `Giving away so much that the bundle loses money instead of raising order value.`,
              `Choosing free items with no perceived value (free isn't compelling unless the gift matters).`,
            ],
            stats: [
              `The zero-price effect (Shampanier, Mazar & Ariely, 2007): dropping a chocolate's price to $0 made demand jump far more than the price change alone predicts — "free" has outsized power.`,
              `Bundling raises average order value and hides per-unit price comparison, protecting margin.`,
            ],
            cases: [
              `The boot store's "buy one, get two free" (really three pairs at $200) grew the business while feeling like a steal.`,
              `"BOGO" promotions remain a retail staple because "free" outperforms an equal percentage discount.`,
            ],
            title: 'Buy X, get Y free',
            hook: '“Free” beats “discount” — reframe the same price so it pulls harder.',
            principle:
              'Sell more than one unit and reframe the price as “buy one, get [more] free.” Raise the headline unit price and bundle the rest as free. The word “free” grabs more attention than a discount and frees you from relying on holiday sales. The free items can even be different from the paid one.',
            why:
              'It’s the same money but more perceived value, and “free” pulls attention. Options with more free stuff out-pull options with less.',
            story:
              'A boot store advertised “buy one pair, get two free.” The $600 price was really three pairs at $200 each — and the store kept growing. “Buy 3 shirts for $30” and “buy 1 shirt for $30, get 2 free” cost the same, but the second pulls harder. For services: “buy 6 months, get 6 months free.” You can also mix in free socks instead of more shirts.',
            apply:
              'A supplement brand sells “buy 1 tub, get 2 free” at a bundle price — really three tubs at unit cost — which converts better than a plain 3-pack discount.',
            examples: [
              'Spa: “Buy 6 months, get 6 months free” on an annual membership.',
              'Software: “Buy the course, get the templates and community free.”',
              'Restaurant: “Buy one entrée, get two appetizers free.”',
              'Mattress store: “Buy the mattress, get the frame and pillows free.”',
            ],
            actions: [
              'Raise the headline price of your single unit.',
              'Bundle additional units or items as “free.”',
              'Pick the most-free framing that still keeps you profitable.',
              'Test free complementary items, not just more of the same.',
            ],
            related: ['bonus-offer', 'decoy-offer'],
          },
          {
            id: 'win-your-money-back',
            coachNote:
              `This offer sells accountability and stakes the outcome on action. It de-risks the buy, turns winners into walking testimonials, and filters for committed customers. Only run it if you can stomach the refunds — and always have the next thing ready for the people who win.`,
            mistakes: [
              `Running it with no upsell, so winners take their refund and leave.`,
              `Goals so easy everyone wins (you lose money) or so hard no one tries (no excitement).`,
              `Offering it when your cash or margins can't absorb the refund rate.`,
            ],
            stats: [
              `Hormozi cites data from thousands of gyms: roughly 10% of customers actually claim the money back — far fewer than fear suggests.`,
              `Risk-reversal guarantees usually increase sales more than they increase refunds when the product genuinely delivers.`,
            ],
            cases: [
              `Danny's gym: a $600 six-week "win it back" challenge produced before/after photos that brought in 13 new clients.`,
              `Coaching programs use "hit the milestone or refund" to convert skeptics and drive client action.`,
            ],
            title: 'Win your money back',
            hook: 'Charge for accountability; let them earn it back by hitting the goal.',
            principle:
              'Set a clear goal and have the customer pay for accountability — they get their money back if they hit it (lose 5kg in a month, make $1,000 online in a month). Two safeguards: many won’t qualify even under realistic conditions, and those who do tend to stay — if you have an upsell ready. Only run it if you can stomach refunding (~10% ask).',
            why:
              'It’s exciting and low-risk for the buyer. Winners become before/after testimonials that attract their friends, and refunded money often gets reinvested in buying more from you.',
            story:
              'A gym owner, Danny, let a client pay $600 for six weeks and win it back by hitting his goal and giving before/after photos. The client hit the goal, used the $600 to buy more training, and his photos brought in 13 new clients. Danny now offers it to everyone.',
            apply:
              'An online course: “Make your first $1,000 in 60 days or get a full refund — and we’ll feature your win as a case study.”',
            examples: [
              'Sales trainer: “Book 10 qualified meetings in 30 days or your money back.”',
              'Dentist: “Noticeably whiter in one visit or it’s free.”',
              'Coding bootcamp: “Land an interview within 90 days or get refunded.”',
              'Weight-loss coach: “Hit your first milestone or the next month is on us.”',
            ],
            actions: [
              'Define a measurable goal and a timeframe.',
              'Set realistic qualifying conditions (so not everyone wins).',
              'Line up an upsell for the people who do win.',
              'Only run it if the refund rate won’t sink you.',
            ],
            related: ['rollover-upsell', 'giveaways', 'pay-now-or-later'],
          },
          {
            id: 'pay-now-or-later',
            coachNote:
              `"Pay later if it works" annihilates risk for the buyer and signals supreme confidence from you. It needs a clean yes/no result, a deadline, and a participation condition — plus a next offer for the many who'll happily pay once satisfied.`,
            mistakes: [
              `A fuzzy result with no clear yes/no, so you can't fairly charge later.`,
              `No participation condition (show up / use it), so people fail and you eat the cost.`,
              `Not taking a card on file, making the "later" charge hard to collect.`,
            ],
            stats: [
              `The pain of paying (Prelec & Loewenstein, 1998): separating consumption from payment reduces friction and raises willingness to commit.`,
              `Risk reversal (only pay if it works) is among the strongest documented conversion levers — it transfers risk from buyer to seller.`,
            ],
            cases: [
              `Hormozi's speed-reading event: $0 down, $297 charged only if your reading speed doubled (and you attended).`,
              `Performance-based agencies ("pay per qualified lead") win clients by removing upfront risk.`,
            ],
            title: 'Pay less now or pay more later',
            hook: 'Remove all risk: pay a little now, or pay more later — only if it works.',
            principle:
              'Give two options: (1) pay a smaller amount now and get a bonus (like the recording), or (2) put $0 down with a card on file and get charged more later only if you achieve the promised result. It requires a clear yes/no result delivered in a set timeframe, plus a condition (such as attending).',
            why:
              'It removes essentially all risk from the customer, so it’s an easy yes — and almost anyone will agree to pay later once they’re satisfied. You just need an upsell ready.',
            story:
              'An ad promised “double your reading speed in 3 hours or it’s free.” Option 1: $97 now plus the recording. Option 2: $0 now, $297 charged later only if your speed doubles — but you must attend. Hormozi chose option 2; after two hours his speed doubled, so he happily paid $297.',
            apply:
              'A lead-gen agency: “$0 setup — pay our fee only after we’ve delivered 20 qualified leads.”',
            examples: [
              'Weight loss: “Pay nothing today; $500 once you’ve lost 5kg” (card on file).',
              'SaaS: “Free until it saves you 10 hours, then it starts billing.”',
              'Tutor: “Pay after your child’s grade goes up a full letter.”',
              'Consultant: “Half now, half only if we hit the agreed KPI.”',
            ],
            actions: [
              'Define a binary yes/no result and a timeframe.',
              'Set a participation condition (show up, use it).',
              'Take a card on file up front.',
              'Prepare the next offer for satisfied buyers.',
            ],
            related: ['free-trial-condition', 'win-your-money-back'],
          },
        ],
      },
      {
        id: 'upsell',
        title: 'Upsell Offers',
        summary: 'Sell more: more quantity, better quality, or new and complementary.',
        concepts: [
          {
            id: 'menu-upsell',
            coachNote:
              `Stop asking "do you want more?" Decide for the customer what they need, remove what they don't (unselling builds trust), then offer a simple A-or-B choice. You become a prescribing expert, not a pushy seller — and assumptive choices convert.`,
            mistakes: [
              `Asking yes/no questions instead of either/or, inviting a "no."`,
              `Overwhelming the customer with the whole menu instead of prescribing.`,
              `Skipping the "unsell" step that earns the trust which makes the upsell easy.`,
            ],
            stats: [
              `Choice overload (Iyengar & Lepper, 2000): fewer, curated options convert better — prescribing beats presenting everything.`,
              `"Unselling" leverages reciprocity and trust (Cialdini): removing what they don't need raises compliance on what they do.`,
            ],
            cases: [
              `Hormozi crossed off the supplements a client didn't need, then asked "chocolate or vanilla?" — and closed effortlessly.`,
              `Great sommeliers and opticians prescribe ("this frame, these lenses — A or B?") rather than list the whole catalog.`,
            ],
            title: 'Menu upsell (unsell, then A or B)',
            hook: 'Don’t ask “do you want it?” Ask “A or B?” — after crossing off what they don’t need.',
            principle:
              'Use the formula: unsell → prescribe → A-or-B → easy payment. Lay out all your products, cross off what the customer doesn’t need (this “unselling” builds trust), prescribe what they do need, then ask a preference question — A or B — not “yes or no.” Finally, make payment frictionless with the card on file.',
            why:
              'Asking “A or B” assumes the sale. Unselling positions you as a trusted advisor instead of a pushy seller, and removing options reduces overwhelm.',
            story:
              'Hormozi froze and forgot his script, so he just asked a customer, “Chocolate or vanilla?” — and made the sale. He also describes “unselling”: laying supplements on the table and crossing off the weight-gainer and testosterone booster she didn’t need, so she felt helped, not upsold.',
            apply:
              'A med spa: “You don’t need fillers right now. What you’d benefit from is a hydrafacial — Tuesdays or Thursdays?”',
            examples: [
              'Software onboarding: “Skip the enterprise add-ons. You need the automation pack — monthly or annual?”',
              'Mechanic: “Your brakes are fine. You need an oil change — synthetic or standard?”',
              'Salon: “Skip the color today. A gloss treatment is what you need — warm or cool tone?”',
              'Financial advisor: “You don’t need the managed fund. Start the index plan — monthly or lump sum?”',
            ],
            actions: [
              'Lay out everything you offer.',
              'Explicitly cross off what the customer doesn’t need.',
              'Prescribe the right items for them.',
              'Offer an A-or-B choice and use the card on file.',
            ],
            related: ['classic-upsell', 'anchor-upsell'],
          },
          {
            id: 'anchor-upsell',
            coachNote:
              `The first number a customer sees becomes the yardstick for every number after it. Show a genuine premium option first; against it, your real offer feels reasonable — even above their original budget. The anchor must be real, not a fake prop.`,
            mistakes: [
              `Leading with your target price, so there's no anchor to make it feel cheap.`,
              `Using an absurd, obviously-fake anchor that destroys trust.`,
              `Failing to pivot gracefully ("do you care about the designer?") toward the main offer.`,
            ],
            stats: [
              `Anchoring bias (Tversky & Kahneman, 1974): even arbitrary first numbers measurably bias later judgments and valuations.`,
              `Williams-Sonoma reportedly saw a $279 bread machine sell better after adding a pricier $429 model — the expensive one anchored the cheaper as a deal.`,
            ],
            cases: [
              `Hormozi's suit shop showed a $16,000 suit first; the $2,200 suit then felt cheap (on a $500 budget).`,
              `Menus place a very expensive "anchor" dish to make mid-priced entrées feel like sensible value.`,
            ],
            title: 'Anchor upsell',
            hook: 'Show the $16,000 option first, and your $2,000 feels like a steal.',
            principle:
              'Present a very expensive option — the anchor — before your main offer. Against the anchor, your real offer feels affordable, even if it’s above the customer’s original budget. Steps: present the anchor, let them be shocked, ask whether they care about the premium feature, then present your main offer as the relief.',
            why:
              'Prices are judged relatively. The first big number resets the customer’s reference point, so the next price feels small by comparison.',
            story:
              'A suit shop showed Hormozi a $16,000 suit first (his budget was $500). After the shock, the owner asked, “Do you care much about the designer?” and brought out a $2,200 suit — which now felt cheap. He bought it plus $300 in accessories, spending 5x his budget and feeling fine about it.',
            apply:
              'A web-design studio shows the $50,000 custom build first, then presents the $8,000 template package — which suddenly feels reasonable.',
            examples: [
              'Car dealer: walk the buyer past the loaded $80k trim before showing the $45k one.',
              'Consultant: present the $30k done-for-you package before the $6k coaching.',
              'Kitchen remodel: show the $120k luxury option before the $40k refresh.',
              'Jeweler: display the $25k ring before the $4k one.',
            ],
            actions: [
              'Create a legitimate premium anchor option.',
              'Show the anchor first and let the sticker shock land.',
              'Ask if they care about what makes the anchor premium.',
              'Present your main offer as the sensible, affordable choice.',
            ],
            related: ['decoy-offer', 'menu-upsell'],
          },
          {
            id: 'rollover-upsell',
            coachNote:
              `Don't let a finished purchase end the relationship — roll its value into the next, bigger commitment. Spreading a credit across a longer term multiplies retention and lifetime value. Make the next thing better/new/different, and add a one-time urgency window.`,
            mistakes: [
              `Letting a great first offer expire with no roll-forward, so you restart acquisition from zero.`,
              `Crediting toward more of the same instead of a better, bigger next step.`,
              `No urgency, so the rollover offer gets "thought about" and forgotten.`,
            ],
            stats: [
              `Retention economics (Reichheld/Bain): a 5% increase in retention can lift profits 25–95% — extending commitment is hugely valuable.`,
              `The sunk-cost and endowment effects make customers value continuing something they've already invested in.`,
            ],
            cases: [
              `Hormozi's friend Justin rolled a $600 challenge into $50/month off a 12-month membership — turning 3-month customers into 12-month ones.`,
              `Airlines and hotels roll status and credits forward to keep you committed to their ecosystem.`,
            ],
            title: 'Rollover upsell',
            hook: 'Roll a past purchase into the next one — and stretch the commitment.',
            principle:
              'Apply a customer’s previous purchase as credit toward a bigger or longer next offer, spreading the credit across months so they stay longer. The next thing must be better, newer, or different — and add urgency (one-time, today only).',
            why:
              'It turns a one-off into retention. Spreading the credit across a longer commitment multiplies how long the customer stays — and their lifetime value.',
            story:
              'Alex’s win-your-money-back clients left after a 3-month membership. His friend Justin instead spread the returned $600 as $50/month off for 12 months, tied to a one-year membership — so his customers stayed 12 months instead of 3. A chiropractor can roll a $300 basic package into a discount on a premium one; a dentist can roll a $200 whitening into a multi-session package.',
            apply:
              'A coach: “Your $1,000 intensive applies as $1,000 off the 6-month mastermind — if you join today.”',
            examples: [
              'Gym: “Your challenge fee becomes $40/month off a 12-month membership.”',
              'SaaS: “Your starter spend credits toward an annual Pro plan.”',
              'Salon: “Your single facial applies to a 10-session package — today only.”',
              'Agency: “Your audit fee rolls into the first month of the retainer.”',
            ],
            actions: [
              'Identify a past purchase you can credit.',
              'Design a bigger, longer, or better next offer.',
              'Spread the credit across the commitment period.',
              'Add a one-time urgency window.',
            ],
            related: ['win-your-money-back', 'continuity-discount', 'bonus-offer'],
          },
          {
            id: 'classic-upsell',
            coachNote:
              `Solve the next problem the instant the customer feels it. Each add-on should answer a real "but what about…?" so it feels like help, not greed. Stack them in the natural order of problems — and remember the worst outcome is the yes you never asked for.`,
            mistakes: [
              `Stopping after one offer when more genuine problems remain unsolved.`,
              `Upselling things the customer doesn't actually need (erodes trust fast).`,
              `Pitching add-ons before the core purchase decision is made.`,
            ],
            stats: [
              `McKinsey estimated ~35% of Amazon's revenue comes from its recommendation and cross-sell engine ("customers also bought").`,
              `Order bumps and cross-sells reliably raise average order value across e-commerce and quick-service restaurants.`,
            ],
            cases: [
              `The car-rental "$19/day" that becomes $100/day via upgrade, late return, insurance, and prepaid gas — each solving a real worry.`,
              `McDonald's "would you like fries with that?" is the canonical upsell, adding enormous incremental sales.`,
            ],
            title: 'Classic upsell',
            hook: 'You can’t have X without Y — solve the next problem the moment they feel it.',
            principle:
              'Offer the solution to the customer’s next problem the instant they become aware of it, stacking offers in sequence (upgrade → add-on → protection → convenience). The logic is “you can’t have X without Y.” Upsell as many times as there are problems you can genuinely solve.',
            why:
              'Each upsell solves a real adjacent problem, so it feels helpful, not greedy. As Hormozi puts it, the worst outcome is that they would have said yes but you never asked.',
            story:
              'A car-rental agent turned a $19/day reservation into $100/day: a roomier truck, then a late return, then insurance (declined), then prepaid gas (cheaper than the station). Each upsell solved a real problem, so Hormozi left happy. A weight-loss course similarly adds a nutrition course, then a supplement.',
            apply:
              'A bike shop: bike → helmet (“you can’t ride without one”) → lock → a tune-up plan.',
            examples: [
              'Camera store: camera → lens → SD card → warranty → bag.',
              'Web host: hosting → domain → SSL → automated backups → email.',
              'Wedding venue: venue → catering → bar package → coordinator → cleanup.',
              'Online course: course → templates → group coaching → done-with-you intensive.',
            ],
            actions: [
              'Map the customer’s sequence of next problems.',
              'Prepare a Y (solution) for each problem in advance.',
              'Offer each one at the moment the customer feels that problem.',
              'Keep offering until you get a no — don’t stop early.',
            ],
            related: ['menu-upsell', 'offer-build-5-steps'],
          },
        ],
      },
      {
        id: 'downsell',
        title: 'Downsell Offers',
        summary: 'Turn a no into a yes — change how they pay or what they get.',
        concepts: [
          {
            id: 'payment-plan-downsell',
            coachNote:
              `"I can't afford it" usually means "not all at once." Change how they pay, never the price — start at full price and ladder down through financing, then 2, 3, and evenly-spread payments. Schedule charges on paydays and you'll close more without devaluing your offer.`,
            mistakes: [
              `Dropping the price at the first objection instead of offering terms.`,
              `Not scheduling payments around paydays, causing failed charges.`,
              `Skipping the desire check (1–10) and pushing terms on someone who doesn't truly want it.`,
            ],
            stats: [
              `Buy-Now-Pay-Later exploded precisely because splitting payments lifts conversion and average order value (multiple retail studies).`,
              `The pain of paying (Prelec & Loewenstein, 1998) drops when a sum is split into smaller, scheduled amounts.`,
            ],
            cases: [
              `Hormozi's first gym: laddering from "half now" to "pay on the 1st" closed a client and covered the rent.`,
              `Dental and medical providers use third-party financing (e.g., CareCredit) to close instead of discounting.`,
            ],
            title: 'Payment-plan downsell',
            hook: 'Never lower the price — change how they pay. Start high and work down.',
            principle:
              'When a customer says they can’t afford it, change how they pay, not the price. The ladder: (1) start at full price; (2) offer financing/credit/layaway; (3) two payments — ask their next payday and the most they can put down today; (4) gauge desire 1–10 (8+ keep going; 7 or below, ask “why not 10?” and pivot to a feature downsell); (5) three payments; (6) evenly spread payments (e.g., 16 weekly); (7) last resort, a free trial. Schedule payments on paydays to reduce declines.',
            why:
              'Changing how they pay preserves your price and your value, while discounting the same thing destroys trust. Aligning charges with paychecks cuts failed payments.',
            story:
              'In his first gym, with rent due on the 5th, Alex met a woman who “couldn’t afford it.” He moved from half-now/half-on-payday, to thirds, and finally she paid in full on the 1st — covering his rent.',
            apply:
              'A coaching program: “Two payments — $1,000 today and $1,000 on the 15th, your payday.”',
            examples: [
              'Dental office: offer third-party financing (e.g., CareCredit) before any discount.',
              'Furniture store: layaway — the customer receives it once it’s fully paid.',
              'Course: six weekly payments scheduled on Fridays.',
              'Med spa: split a package into three monthly charges on the 1st.',
            ],
            actions: [
              'Hold your full price.',
              'Offer financing or layaway first.',
              'Ladder from two payments to three to evenly spread.',
              'Gauge desire 1–10 and schedule charges on paydays.',
            ],
            related: ['free-trial-condition', 'feature-downsell'],
          },
          {
            id: 'free-trial-condition',
            coachNote:
              `A free trial only works if the user actually experiences the value — so attach a condition that forces activation (attend the training, import the data, book the sessions) and hold a card on file. Usage, not access, creates the switching cost that converts.`,
            mistakes: [
              `Offering a no-strings trial, so most users drift away without ever activating.`,
              `Not taking a card up front, removing the cost of failing the condition.`,
              `A condition that's busywork instead of the real "aha" moment.`,
            ],
            stats: [
              `In SaaS, reaching an "activation" milestone is one of the strongest predictors of trial-to-paid conversion (product-led-growth research).`,
              `Switching costs and the endowment effect make an already-used, set-up product feel costly to abandon.`,
            ],
            cases: [
              `Hormozi's HR software conditioned the trial on attending training (card on file); once Leila learned it, switching felt like too much hassle.`,
              `Costco's free samples are conditional trials — you taste, you're far likelier to buy.`,
            ],
            title: 'Free trial with a condition',
            hook: 'Free trials fail unless a condition forces them to actually use it.',
            principle:
              'Offer a free trial, but attach a condition that forces real usage — attend the training, complete onboarding. Take a card up front; if they don’t meet the condition, they’re charged. Real use leads them to fall in love with the product and stay.',
            why:
              'Most free trials fail because people sign up and drift away. A condition drives activation and creates switching costs, so they experience the value before deciding.',
            story:
              'An HR-software company won Leila as a customer by offering a free trial conditioned on attending their training, with a card on file. After she learned the software, switching to anything else felt like too much trouble — so she bought.',
            apply:
              'A SaaS tool: “Free trial — just complete a 30-minute onboarding call (card on file).” So every trial user actually activates.',
            examples: [
              'Gym: a free week that requires three booked sessions with a trainer.',
              'Meal kit: a free first box that requires completing your taste profile and cooking one meal.',
              'Tutoring: a free assessment that requires the student to finish a diagnostic.',
              'Software: a free month that requires importing your real data.',
            ],
            actions: [
              'Pick a condition that guarantees activation.',
              'Require a card on file up front.',
              'Design the trial to deliver a real “aha” moment.',
              'Charge if the condition isn’t met.',
            ],
            related: ['payment-plan-downsell', 'pay-now-or-later'],
          },
          {
            id: 'feature-downsell',
            coachNote:
              `When price is the block, remove value instead of discounting it. Cut quantity, quality, or a feature (even a free guarantee) and lower the price to match. The customer suddenly sees what they're giving up — which protects your pricing integrity and reveals value.`,
            mistakes: [
              `Discounting the same package, which devalues it and trains customers to wait for deals.`,
              `Cutting features the customer doesn't care about (no perceived sacrifice = no effect).`,
              `Stripping so much that the lower tier can't deliver a result.`,
            ],
            stats: [
              `Good-better-best versioning is a well-documented pricing strategy; a stripped tier captures price-sensitive buyers without cannibalizing premium ones.`,
              `Removing a guarantee (which costs the seller nothing when the product is good) makes its value salient — a framing effect.`,
            ],
            cases: [
              `A business owner tripled close rate (25%→75%) by lowering price while cutting features, not by discounting.`,
              `Software "lite" tiers (no integrations or priority support) capture budget buyers while preserving the flagship's price.`,
            ],
            title: 'Feature downsell',
            hook: 'Lower the price by giving less — not by discounting the same thing.',
            principle:
              'Lower the price by changing what the customer gets — less quantity, lower quality, or fewer features (leather becomes leather-look fabric; four sessions become two; remove the money-back guarantee). The customer now sees the value of what was removed.',
            why:
              'Discounting the same item devalues it and kills trust. A feature downsell keeps your pricing integrity and actually reveals value — removing a free guarantee (which costs you nothing) makes people feel its worth.',
            story:
              'A business owner tripled his close rate from 25% to 75% — not with payment plans or discounts (which take too long or devalue the product), but by lowering the price while cutting features. Think leather-look fabric instead of leather, two sessions instead of four, or removing the money-back guarantee.',
            apply:
              'An agency drops from a full-funnel build to a landing-page-only package at a lower price — less scope, not a discount.',
            examples: [
              'SaaS: a “lite” plan without integrations or priority support.',
              'Coaching: a group-only tier with no one-on-one calls.',
              'Catering: a buffet instead of plated service.',
              'Design: brand logo only, instead of the full identity system.',
            ],
            actions: [
              'Build a stripped-down tier with less quantity, quality, or fewer guarantees.',
              'Price it lower to match the reduced scope.',
              'Present it as a trade-off, never as a discount on the same thing.',
            ],
            related: ['payment-plan-downsell', 'differentiate'],
          },
        ],
      },
      {
        id: 'continuity',
        title: 'Continuity Offers',
        summary: 'Keep customers paying again and again with recurring revenue.',
        concepts: [
          {
            id: 'bonus-offer',
            coachNote:
              `Convert one-time buyers into recurring revenue by reframing the sale: "want it free? Become a member." Then stack bonuses you already have (with honest dollar values) and reward prepayment with a discount. High perceived value, low marginal cost, steadier cash flow.`,
            mistakes: [
              `Inventing new bonuses (costly) instead of packaging high-value things you already do.`,
              `Using fake or inflated dollar values — one exposed number kills trust.`,
              `Selling the subscription without enough bonus value to justify the commitment.`,
            ],
            stats: [
              `Recurring-revenue businesses are typically valued at higher multiples than one-time-sale businesses, thanks to predictable cash flow.`,
              `Value stacking with stated dollar amounts raises perceived value far above the price — the heart of Hormozi's offer math.`,
            ],
            cases: [
              `A small gym sold memberships by bundling perks it already had (better class times, tanning, VIP events), then upsold prepaid 6-month plans.`,
              `Amazon Prime stacks bonuses (shipping, video, music, deals) into one membership most members consider a no-brainer.`,
            ],
            title: 'Continuity bonus offer',
            hook: 'Sell the subscription, sweeten it with bonuses you already have.',
            principle:
              'Sell something recurring (a yearly membership) so people pay every month, and make it attractive with high-value bonuses — things you already do — plus a discount for paying several months upfront. Always state real dollar values for each bonus; fake numbers destroy trust.',
            why:
              '“Want it for free? Become a member” reframes the sale. Bonuses cost you little but add big perceived value, and prepayment improves your cash flow.',
            story:
              'A small gym crushed everyone’s numbers by pitching the six-week challenge, then asking “want it for free? Become a member” — unlocking perks like better class times, the tanning booth, and VIP events — then upselling a discounted prepaid six-month membership. A pet-food example: $69/month with free vitamins, or prepay six months for $59/month plus a new toy.',
            apply:
              'A SaaS company sells an annual plan and bundles free onboarding, a template library, and priority support (each with a stated dollar value), plus a discount for paying annually.',
            examples: [
              'Gym: membership plus free body scans, guest passes, and member-only events.',
              'Coffee subscription: monthly beans plus a free mug, and prepay six months to get a bag free.',
              'Coaching: membership plus a recorded library and a monthly group call, with a prepay discount.',
              'Software: annual plan plus a free certification course (stated value $499).',
            ],
            actions: [
              'Turn your offer into a recurring membership.',
              'Bundle three high-value bonuses you already have, each with a real dollar value.',
              'Add a discount for paying several months upfront.',
            ],
            related: ['buy-x-get-y-free', 'continuity-discount', 'offer-build-5-steps'],
          },
          {
            id: 'continuity-discount',
            coachNote:
              `Trade an upfront free period for a long commitment, and protect it with a cancellation fee equal to the discount. The free stretch wins the relationship; the fee keeps it; the exit interview turns churn into insight (and a chance to re-sell). Decide how you apply the discount before you offer it.`,
            mistakes: [
              `Giving free time with no commitment or cancellation policy, so people take the free part and leave.`,
              `No exit interview, so you lose the lesson and the save/re-sell opportunity.`,
              `A cancellation fee that doesn't match the discount — too small to protect you, or so large it feels predatory.`,
            ],
            stats: [
              `Retention economics (Reichheld/Bain): a 5% lift in retention can raise profits 25–95% — long commitments compound value.`,
              `Acquiring a new customer can cost 5–25x more than retaining one (widely cited in HBR) — continuity protects your most valuable asset.`,
            ],
            cases: [
              `The trash-business owner gave one year free for a five-year commitment, then sold the company for a fortune.`,
              `Internet and telecom providers use "first month free" plus contract terms (and early-termination fees) to lock in long commitments.`,
            ],
            title: 'Continuity discount offer',
            hook: 'Give the first stretch free in exchange for a long commitment.',
            principle:
              'Give product or service free (or discounted) up front in exchange for a long commitment. You need two rules: how you apply the discount (upfront, at the end, after the first two payments, or spread over time) and a cancellation policy — set the cancellation fee equal to the discount they received. Offer to waive that fee in exchange for an exit interview.',
            why:
              'Free up front wins the long commitment; the cancellation fee protects you from people quitting after they’ve taken the free part; and exit interviews surface fixes and re-sell chances.',
            story:
              'A neighbor who drove a Ferrari built a trash business by telling big apartment complexes, “I’ll do your trash free for a year if you commit to five years.” His family thought he was crazy during the free year — then cash flooded in, and he sold the business for a fortune. Internet providers do the same with “first month free.”',
            apply:
              'A B2B service: “We’ll do month one free if you sign a 12-month contract; cancel early and you repay the free month.”',
            examples: [
              'SaaS: “3 months free on a 12-month commitment; cancel early = pay back the 3 months.”',
              'Gym: “First month free on an annual plan.”',
              'Telecom: free installation plus the first month on a one-year term.',
              'Landscaping: “First month free with a season-long contract.”',
            ],
            actions: [
              'Pick a free or discounted period that wins the commitment.',
              'Choose how to apply it (upfront, end, after two payments, or spread).',
              'Set the cancellation fee equal to the discount given.',
              'Offer to waive the fee in exchange for an exit interview.',
            ],
            related: ['bonus-offer', 'waved-fee-offer', 'rollover-upsell'],
          },
          {
            id: 'waved-fee-offer',
            coachNote:
              `Make staying easy and leaving expensive. Offer a real one-time fee, then let customers waive it by committing long-term — with the fee owed either way if they quit early. Most choose the commitment, giving you instant retention and cash flow. It shines for slow-to-work services where people quit on emotion.`,
            mistakes: [
              `A waiver fee too small to actually deter early cancellation.`,
              `Using it on fast-result services where lock-in isn't needed (and feels heavy-handed).`,
              `Hiding the terms — surprise fees destroy trust and invite chargebacks.`,
            ],
            stats: [
              `Loss aversion (Kahneman & Tversky): the threat of forfeiting a fee looms about twice as large as an equivalent gain, keeping people committed.`,
              `Commitment devices and switching costs are well-documented mechanisms for improving follow-through and retention.`,
            ],
            cases: [
              `Hormozi's "legend" offered $5k fee + $1k/mo (quit anytime) vs. waiving the $5k for a 12-month commitment — most chose to commit and stayed.`,
              `Gyms famously waive initiation fees on annual contracts; DellaVigna & Malmendier (2006) found members often overpay and rarely cancel.`,
            ],
            title: 'Waved-fee offer',
            hook: 'Pay a big fee to stay flexible — or commit long-term to waive it.',
            principle:
              'Offer two options: (A) a one-time fee plus a monthly charge, quit anytime but forfeit the fee; or (B) waive the fee by committing 12 months upfront — and if they quit, they still owe the fee. Most people choose B, which locks in a long commitment and steady cash flow. It works best for services that take time to show results.',
            why:
              'It makes quitting expensive, which keeps people committed even through the emotional dips of slow-to-work services like SEO, investing, or weight loss.',
            story:
              'A “legend” with zero employees made a million a year by giving two options: (A) $5,000 one-time plus $1,000/month, quit anytime but lose the $5,000; or (B) waive the $5,000 by committing to 12 months — but quit and you owe the $5,000 anyway. Most chose B and stayed.',
            apply:
              'An SEO agency: “$5,000 setup, or it’s waived if you sign a 12-month retainer.” Most clients commit — right when SEO needs time to work.',
            examples: [
              'Premium gym: a $500 initiation fee, waived on an annual contract.',
              'Software: an implementation fee waived on annual prepay.',
              'Investing program: an onboarding fee waived for a one-year commitment.',
              'Coaching: a $2,000 enrollment fee waived for a 12-month membership.',
            ],
            actions: [
              'Set a meaningful one-time fee.',
              'Offer to waive it in exchange for a long commitment.',
              'Make the fee owed either way if they cancel early.',
              'Use it especially for slow-to-show-results services.',
            ],
            related: ['continuity-discount', 'bonus-offer'],
          },
        ],
      },
    ],
  },
];
