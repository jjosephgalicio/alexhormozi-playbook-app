// Book 3 — $100M Leads (Alex Hormozi). Authored from the provided transcript summary,
// enriched with research, examples, common mistakes, case studies, and gym/gym-app
// plays. Same concept shape as the other books (see content.js) so all views and tests
// work generically.

export const LEADS_BOOK = {
  id: 'leads',
  title: '$100M Leads',
  subtitle: 'How to get strangers to want to buy your stuff',
  tagline: 'Get a flood of engaged leads — the people who actually want what you sell.',
  modules: [
    {
      id: 'leads-understanding',
      title: 'Get Understanding',
      summary: 'What a lead really is — and why promotion is survival.',
      concepts: [
        {
          id: 'engaged-leads',
          title: 'Leads vs. engaged leads',
          hook: 'A lead is contact info. An engaged lead actually wants what you sell — that’s the gold.',
          principle:
            'A lead is anyone whose contact information you have — a phone number, email, or social connection. But raw contact info is cheap. The real prize is the engaged lead: someone who has shown genuine interest and is likely to buy. Aim your effort at creating engagement, not just collecting names.',
          why:
            'Engaged leads convert; cold names don’t. The work of turning attention into genuine interest is what actually produces sales — so that’s what you optimize.',
          story:
            '$100M Leads is the second book in Hormozi’s acquisition trilogy: after $100M Offers (what to sell) comes how to get leads who want it. His core distinction is blunt — don’t chase leads, chase engaged leads.',
          apply:
            'A newsletter with 50,000 unopened emails is worth less than 2,000 readers who reply and click — the smaller engaged list out-earns the big dead one.',
          examples: [
            'A webinar attendee who stays to the end is an engaged lead; a scraped name is not.',
            'Someone who replies to your DM or comments on your post has shown real interest worth following up.',
            'A free-trial user who actually logged in beats 100 sign-ups who never opened the app.',
            'A person who downloaded your guide AND watched the follow-up is far closer to buying.',
          ],
          actions: [
            'Define what "engaged" means for you (replied, clicked, attended, used it).',
            'Stop reporting raw lead count; report engaged-lead count.',
            'Add a step that turns passive attention into a small interaction.',
          ],
          gym: [
            { kind: 'gym', text: 'A booked InBody scan is an engaged lead; a name in a business-card-bowl raffle is not — chase the scan.' },
            { kind: 'gym', text: 'Treat anyone who attends a free class as engaged and personally follow up within 24 hours.' },
            { kind: 'app', text: 'An install is a lead; finishing onboarding is an engaged lead — optimize hard for the second.' },
            { kind: 'app', text: 'A user who connected their wearable has shown real intent — prioritize them in every follow-up.' },
          ],
          coachNote:
            'Vanity metrics (followers, list size) feel good but don’t pay. Re-orient everything toward engagement — the small "yes" that signals genuine interest — and your numbers start meaning something.',
          mistakes: [
            'Treating raw list size as success.',
            'Buying lists of cold names that never engage.',
            'Treating every lead the same instead of prioritizing the engaged ones.',
          ],
          stats: [
            'Email marketing returns roughly $36–$42 for every $1 spent (DMA/Litmus) — but only against engaged subscribers who open and click.',
            'Across direct-response businesses, engagement (not list size) is what correlates with revenue.',
          ],
          cases: [
            'Creators with huge "dead" lists routinely earn less than peers with smaller, highly-engaged ones.',
            'Product-led SaaS companies obsess over activation because installs alone don’t predict revenue.',
          ],
          related: ['lead-magnet', 'core-four', 'market-pain'],
        },
        {
          id: 'promote-or-die',
          title: 'Promote, or stay invisible',
          hook: 'You can have the best product in the world — if nobody knows you exist, it doesn’t matter.',
          principle:
            'Leads are the direct result of promotion. Promotion (advertising) simply means making your offer known. If you’re not getting enough leads, you’re not promoting enough — and the fix is almost always more, and better, promotion.',
          why:
            'No awareness, no customers. Consistent promotion is the engine that turns a great offer into a steady stream of leads.',
          story:
            'Hormozi opens the book with a creed: businesses solve problems and make the world better, and there are too many problems for any one person to solve. The implication — it’s almost a duty to promote, so the people with the problem you solve can actually find you.',
          apply:
            'A brilliant bookkeeper with zero outreach loses to a mediocre one who emails 20 prospects a day — the second simply gets known.',
          examples: [
            'The best restaurant on a hidden street still needs signage, reviews, and social proof to fill tables.',
            'A great course that’s never promoted sells nothing; a decent one promoted daily builds an audience.',
            'Two identical SaaS tools: the one that publishes and advertises wins; the silent one dies.',
            'A skilled coach who never posts stays broke next to a louder, less-skilled one.',
          ],
          actions: [
            'Commit to a daily promotion habit (outreach or content).',
            'Pick at least one of the Core Four and do it consistently.',
            'Measure leads generated, not hours worked.',
          ],
          gym: [
            { kind: 'gym', text: 'Don’t wait for walk-ins — DM 20 locals a day, post transformations, and run a "bring a friend" class.' },
            { kind: 'gym', text: 'Put a clear offer and CTA on every surface: window, Instagram bio, Google profile.' },
            { kind: 'app', text: 'Publish daily — reels, before/afters, tips — because an unpromoted app is invisible in a sea of fitness apps.' },
            { kind: 'app', text: 'Treat content + ads as the engine; even a great app dies without consistent promotion.' },
          ],
          coachNote:
            'Most "marketing problems" are really volume problems — you’re simply not promoting enough. Before you optimize anything, multiply the amount of promotion you do.',
          mistakes: [
            'Believing a great product will "sell itself."',
            'Promoting in occasional bursts instead of daily.',
            'Hiding the offer/CTA so people don’t know what to do next.',
          ],
          stats: [
            'Hormozi’s rule: if you’re not getting leads, you’re not promoting enough.',
            'The marketing "Rule of 7" maxim: people often need many exposures before they act — one promotion is rarely enough.',
          ],
          cases: [
            'Superior products routinely lose to better-promoted rivals (Betamax vs. VHS is the classic).',
            'Many local businesses double revenue just by promoting consistently — without changing the product.',
          ],
          related: ['engaged-leads', 'core-four', 'paid-ads'],
        },
      ],
    },
    {
      id: 'lead-magnets',
      title: 'Lead Magnets',
      summary: 'Free value that bridges a small win to your core offer.',
      concepts: [
        {
          id: 'lead-magnet',
          title: 'The lead magnet',
          hook: 'Give away a small win that reveals the bigger problem only your offer can solve.',
          principle:
            'A lead magnet is a free or low-cost resource that solves a specific problem in exchange for contact info. The best ones solve problem A, which naturally surfaces problem B — and your core offer is the best solution to B. It bridges a quick win to your main offer.',
          why:
            'It earns contact info by giving real value first, and it pre-sells: by solving A you prove competence and reveal exactly why they need B (your paid thing).',
          story:
            'Hormozi’s real-estate example: your main offer is selling homes, but before someone’s ready to buy they wonder "what’s my home worth?" or "how do I stage it?" A free home valuation or staging guide solves that immediate problem and earns trust for when they’re ready to transact.',
          apply:
            'An SEO agency offers a free website speed test (solves "is my site slow?") → which reveals "your slow site is losing traffic" (problem B) → and the paid SEO service fixes B.',
          examples: [
            'Accountant: a free "are you overpaying tax?" checklist that surfaces the need for tax planning.',
            'Fitness coach: a free "find your maintenance calories" calculator that surfaces the need for a plan.',
            'Photographer: a free "10 poses that flatter" guide that surfaces the need for a real shoot.',
            'SaaS: a free audit or grader that surfaces the gap your paid product closes.',
          ],
          actions: [
            'Identify problem A your buyer feels right before they need you.',
            'Create a fast, genuinely valuable free solution to A.',
            'Make sure solving A naturally reveals B (your offer).',
            'Ask for contact info in exchange.',
          ],
          gym: [
            { kind: 'gym', text: 'Free movement screen (solves "why does my back hurt?") → reveals the need for coached strength → your transformation package.' },
            { kind: 'gym', text: 'A free 3-day meal plan that surfaces how hard consistency is → your nutrition coaching.' },
            { kind: 'app', text: 'A free "fitness age" or TDEE calculator that surfaces the need for a structured program → your subscription.' },
            { kind: 'app', text: 'A free form-check on one lift that exposes weak points → your full coached plan.' },
          ],
          coachNote:
            'A weak lead magnet is "tangentially related" to your offer; a great one is the on-ramp to it. If solving the freebie doesn’t make your paid offer the obvious next step, redesign it.',
          mistakes: [
            'Offering a freebie unrelated to your core offer (attracts freebie-seekers, not buyers).',
            'Making it so thin it builds no trust.',
            'Forgetting to capture contact info — or to follow up.',
          ],
          stats: [
            'Lead magnets are the backbone of permission marketing (Seth Godin): value first earns the right to follow up.',
            'Reciprocity (Cialdini): giving real value first measurably increases later compliance.',
          ],
          cases: [
            'HubSpot built a category by giving away free tools (Website Grader) that reveal the need for its paid software.',
            'Real-estate agents routinely win listings from free home-valuation tools.',
          ],
          related: ['lm-uncover-problem', 'lm-free-sample', 'give-away-secrets', 'market-pain'],
        },
        {
          id: 'lm-uncover-problem',
          title: 'Lead magnet 1: uncover a problem',
          hook: 'Reveal a problem they didn’t know they had — then you’re the one to fix it.',
          principle:
            'The first type of lead magnet exposes a hidden issue. A free test, audit, or assessment shows the prospect a problem they weren’t aware of. Once they see it, they want it fixed — and your offer is the fix.',
          why:
            'You can’t sell a solution to someone who doesn’t feel the problem. Uncovering it creates the pain (and urgency) that your offer relieves.',
          story:
            'An SEO business offers a free website speed test that shows exactly how a slow site is bleeding traffic and sales. The number on the screen creates the felt problem; the paid service solves it.',
          apply:
            'A dentist offers a free oral-health scan that flags early issues; patients who "felt fine" suddenly want treatment.',
          examples: [
            'HVAC: a free home-energy audit that reveals where money is leaking out.',
            'Financial advisor: a free portfolio "risk x-ray" that exposes hidden concentration risk.',
            'Agency: a free ad-account audit that surfaces wasted spend.',
            'Cybersecurity: a free scan that reveals exposed vulnerabilities.',
          ],
          actions: [
            'Pick a real problem your prospects have but can’t see.',
            'Build a quick test/audit that makes it visible and concrete.',
            'Show the cost of leaving it unfixed.',
            'Bridge straight to your offer.',
          ],
          gym: [
            { kind: 'gym', text: 'A free posture/movement assessment reveals imbalances they didn’t know were causing pain.' },
            { kind: 'gym', text: 'An InBody scan exposes visceral fat or low muscle mass — an invisible problem made visible.' },
            { kind: 'app', text: 'An in-app "fitness age" or recovery score reveals they’re "older" than their years — motivating an upgrade.' },
            { kind: 'app', text: 'A strength-standards check shows exactly how far they are from their potential.' },
          ],
          coachNote:
            'Make the hidden problem concrete and quantified — a number, a grade, a red bar. Vague worry doesn’t convert; a specific, measured gap does.',
          mistakes: [
            'Revealing a problem you can’t credibly solve.',
            'Making the test feel like a thinly-veiled sales pitch.',
            'Stopping at the diagnosis with no clear next step.',
          ],
          stats: [
            'Diagnostic/assessment funnels convert well because they manufacture felt need.',
            'Loss aversion (Kahneman & Tversky): a revealed loss or risk motivates action more than a promised gain.',
          ],
          cases: [
            'HubSpot’s Website Grader turned "your site has problems" into millions of leads.',
            'Insurance and security firms run free "audits" precisely to surface unseen risk.',
          ],
          related: ['lead-magnet', 'market-pain', 'four-value-drivers'],
        },
        {
          id: 'lm-free-sample',
          title: 'Lead magnet 2: a free sample',
          hook: 'Give a taste of the real thing — just enough to make them crave the rest.',
          principle:
            'The second type gives temporary or partial access to your actual product or service: a free trial, a sample, or the first item in a series. The goal is a genuine taste of the value so they want the full experience.',
          why:
            'Experiencing value beats hearing about it. A real sample creates desire and lowers the risk of buying.',
          story:
            'Hormozi’s examples: a software free trial, or the first cream in a multi-step beauty regimen. Give just enough value that they want everything else you offer.',
          apply:
            'A course creator releases module one free; people who finish it want the rest of the curriculum.',
          examples: [
            'Software: a 14-day full-feature trial that becomes painful to give up.',
            'Food brand: in-store samples (Costco-style) that drive full-size purchases.',
            'Consultant: a free 20-minute strategy call that previews the depth of the paid engagement.',
            'Newsletter: a few premium issues free before the paywall.',
          ],
          actions: [
            'Carve out a genuine slice of your product to give free.',
            'Make the sample deliver a real win, not a teaser.',
            'Make the full paid version the natural next step.',
          ],
          gym: [
            { kind: 'gym', text: 'A free week or a single free PT session so they feel coached programming firsthand.' },
            { kind: 'gym', text: 'One free class so they experience the community and intensity for real.' },
            { kind: 'app', text: 'A 7-day full-access trial (not a crippled free tier) so they feel the actual product.' },
            { kind: 'app', text: 'The first week of a program free; finishing it makes them want the full plan.' },
          ],
          coachNote:
            'A sample must be genuinely good, not a watered-down tease — a bad sample sells against you. Give a real win and the upgrade sells itself.',
          mistakes: [
            'Making the sample so limited it under-delivers.',
            'Giving so much that there’s no reason to buy more.',
            'No clear path from sample to paid.',
          ],
          stats: [
            'Free trials and samples lower perceived risk — a documented conversion lever.',
            'Costco’s sampling reportedly lifts sales of the sampled item substantially: experiencing value drives buying.',
          ],
          cases: [
            'SaaS free trials are the default go-to-market for product-led growth.',
            'Beauty and food brands rely on sampling because taste/feel converts better than claims.',
          ],
          related: ['lead-magnet', 'decoy-offer', 'free-trial-condition'],
        },
        {
          id: 'lm-first-step',
          title: 'Lead magnet 3: the first step free',
          hook: 'If your offer has steps, give the first one free — the result pulls them through the rest.',
          principle:
            'The third type gives the first step of a multi-step solution free or cheap. Once they see the result of step one, they’re motivated to buy the full sequence.',
          why:
            'Momentum. Completing step one delivers a visible win and a sense of progress that makes finishing irresistible.',
          story:
            'Hormozi’s garage-door example: give away the first can of wood sealant free. Once they see the difference it makes, they want the full treatment package.',
          apply:
            'A meal-prep service delivers the first week’s plan plus one done-for-you meal free; tasting the ease makes them buy the full plan.',
          examples: [
            'Home services: a free first treatment (lawn, pest, sealant) that shows the result.',
            'Course: the first lesson free, with a clear "next step" cliffhanger.',
            'Skincare: the first product in a regimen free, so they continue the system.',
            'Cleaning: a free first deep-clean that sells the recurring plan.',
          ],
          actions: [
            'Break your offer into clear steps.',
            'Give step one free (or cheap) with a visible result.',
            'Make the next steps the obvious continuation.',
            'Have the full package ready to sell.',
          ],
          gym: [
            { kind: 'gym', text: 'A free week-one program that produces an early win (better energy, first soreness) → buy the full 12 weeks.' },
            { kind: 'gym', text: 'Give nutrition "phase 1" free; the early results pull them into the paid plan.' },
            { kind: 'app', text: 'Unlock week one of a program free; finishing it nudges them to subscribe for the rest.' },
            { kind: 'app', text: 'A free "foundations" mini-program that leads straight into the full coached track.' },
          ],
          coachNote:
            'The first step must produce a felt result, not just information — momentum comes from a win, not a worksheet. Engineer an early, visible payoff.',
          mistakes: [
            'Making step one informational instead of results-producing.',
            'Not having the full sequence ready to sell.',
            'A first step that doesn’t connect to the rest.',
          ],
          stats: [
            'The goal-gradient effect (Kivetz et al., 2006): people accelerate toward a goal as they near it — an early step builds pull.',
            'Small early wins are strong predictors of follow-through.',
          ],
          cases: [
            '"First treatment free" is a staple of home-services growth.',
            'Duolingo and habit apps use early streak wins to pull users deeper.',
          ],
          related: ['lead-magnet', 'offer-build-5-steps', 'pay-now-or-later'],
        },
        {
          id: 'give-away-secrets',
          title: 'Give away your secrets',
          hook: 'Make the free thing better than other people’s paid thing — most won’t act without you anyway.',
          principle:
            'The value of your lead magnet should exceed the perceived value of your paid product. Give away your best secrets. Most people won’t take action on information alone, so sharing it costs you little while building enormous trust and reputation.',
          why:
            'Over-delivering free content proves you can deliver paid results, builds trust, and makes your paid offer the obvious choice. Hoarding value just makes you forgettable.',
          story:
            'Hormozi urges entrepreneurs to give away their secrets rather than fear that "too much free value" will hurt sales — because information without implementation rarely changes anything, so the people who want help still buy.',
          apply:
            'A coach posts his entire program for free; thousands read it, a fraction implement, and many of those hire him for accountability and customization.',
          examples: [
            'A chef shares the exact recipe; people still pay to eat at the restaurant.',
            'An agency publishes its full playbook; prospects trust it and hire it to execute.',
            'A SaaS gives away templates and courses; users adopt the paid tool to do it faster.',
            'A creator gives the "what" for free and sells the "done-with-you" for money.',
          ],
          actions: [
            'Audit what you’re holding back out of fear.',
            'Put your best, most useful content out for free.',
            'Trust that implementation — not information — is what people pay for.',
            'Track trust and reputation, not just immediate sales.',
          ],
          gym: [
            { kind: 'gym', text: 'Post your actual programs and meal templates free; people still pay for coaching, accountability, and the room.' },
            { kind: 'gym', text: 'Run a free workshop teaching your exact method — attendees become members.' },
            { kind: 'app', text: 'Publish your full training philosophy and sample programs; the app sells the structure, tracking, and coaching.' },
            { kind: 'app', text: 'Give away a complete beginner program; sell the personalization and progression.' },
          ],
          coachNote:
            'Your edge isn’t secret information — it’s your ability to make people implement. Give the "what" generously; charge for the "with you."',
          mistakes: [
            'Hoarding your best material out of scarcity fear.',
            'Giving thin, generic content that proves nothing.',
            'Forgetting that giving is what builds the trust that makes the sale.',
          ],
          stats: [
            'Reciprocity (Cialdini): leading with genuine value increases the odds people buy later.',
            'Content/inbound leads are often cheaper and higher-trust than interruptive ads (HubSpot).',
          ],
          cases: [
            'Hormozi gives away books and content near-free and monetizes through his portfolio — the trust compounds.',
            'Countless creators built businesses by giving away what others charge for.',
          ],
          related: ['lead-magnet', 'charge-premium', 'post-content'],
        },
      ],
    },
    {
      id: 'core-four',
      title: 'The Core Four',
      summary: 'The four — and only four — ways to get leads.',
      concepts: [
        {
          id: 'core-four',
          title: 'The Core Four',
          hook: 'There are only four ways to get leads. Pick one and master it before adding the next.',
          principle:
            'Every way to reach people is one of four combinations of two audiences (warm = know you, cold = don’t) and two methods (one-to-one = personal, one-to-many = public): warm outreach, posting content, cold outreach, and paid ads. That’s it — the Core Four.',
          why:
            'Clarity kills overwhelm. There aren’t infinite tactics — there are four channels, and you just need to work them consistently.',
          story:
            'Hormozi maps all promotion onto a simple 2x2 matrix. Beginners, he says, should start with one-to-one warm outreach — it’s free, fast, and the warmest audience — then layer in the others.',
          apply:
            'A new consultant starts with warm outreach (DMing past colleagues), adds content (posting lessons), then cold outreach and ads as cash allows.',
          examples: [
            'Warm + 1-to-1 → texting past customers a new offer.',
            'Warm + 1-to-many → posting a tip video to your followers.',
            'Cold + 1-to-1 → cold email/DM to strangers who fit your niche.',
            'Cold + 1-to-many → Facebook/YouTube ads to a lookalike audience.',
          ],
          actions: [
            'Map your current effort onto the 2x2.',
            'Pick ONE channel to master first (warm outreach if you’re starting).',
            'Work it daily until it produces predictable leads.',
            'Only then add the next channel.',
          ],
          gym: [
            { kind: 'gym', text: 'Warm 1:1 = text past members; Warm 1:many = post transformations; Cold 1:1 = DM local strangers; Cold 1:many = geo-targeted ads.' },
            { kind: 'gym', text: 'Reactivate old members (warm 1:1) before spending a dollar on ads.' },
            { kind: 'app', text: 'Warm 1:1 = email trial users; 1:many = post reels; Cold 1:1 = DM ideal users; Cold 1:many = install ads to lookalikes.' },
            { kind: 'app', text: 'Nail organic content before scaling paid acquisition.' },
          ],
          coachNote:
            'Don’t dabble in all four and master none. Pick one, get it predictable, then add the next — diversifying too early just spreads you thin.',
          mistakes: [
            'Jumping straight to paid ads with no proven offer or funnel.',
            'Trying all four channels at once and doing none well.',
            'Ignoring the warmest, cheapest channel — your own network.',
          ],
          stats: [
            'Hormozi’s claim: there are exactly four core ways to get leads — every tactic is a flavor of one.',
            'Channel focus beats channel-hopping; mastery compounds while dabbling doesn’t.',
          ],
          cases: [
            'Most early-stage businesses get their first customers from warm outreach before any paid channel works.',
            'Companies that master one channel deeply usually outperform those spread thin.',
          ],
          related: ['warm-outreach', 'post-content', 'cold-outreach', 'paid-ads'],
        },
        {
          id: 'warm-outreach',
          title: 'Warm outreach',
          hook: 'Start with the people who already know you — reconnect, add value, then make a soft offer.',
          principle:
            'Warm outreach is one-to-one contact with people who already know you: past customers, followers, friends, acquaintances. It’s the easiest place to start because you already have permission. Reconnect genuinely before pitching.',
          why:
            'Warm audiences already trust you, so they engage and convert fastest. It’s free and immediate — the best first channel.',
          story:
            'Hormozi recommends beginners start here: reach out personally, ask how they’re doing, share updates, rebuild trust — then move into a soft offer. Never lead with a hard pitch.',
          apply:
            'A new coach messages 30 former colleagues: "Hey, been a while — what are you working on?" Conversations rekindle, and a soft "I’m helping people with X now" turns several into clients.',
          examples: [
            'Text past customers a genuine check-in plus a new offer.',
            'DM engaged followers to start a real conversation, not a pitch.',
            'Email your existing list with value before any ask.',
            'Reconnect with old contacts and mention what you do now.',
          ],
          actions: [
            'List everyone who already knows you.',
            'Reach out one-to-one with a genuine, non-salesy opener.',
            'Rebuild rapport, then make a soft offer.',
            'Do a set number of reach-outs every single day.',
          ],
          gym: [
            { kind: 'gym', text: 'Text every past member and lead: "Miss seeing you — want to come back for a free week?"' },
            { kind: 'gym', text: 'Personally invite your social followers to a free class.' },
            { kind: 'app', text: 'Email lapsed trial users a warm, personal note with a real reason to return.' },
            { kind: 'app', text: 'DM engaged commenters and offer a free month to start.' },
          ],
          coachNote:
            'Lead with the relationship, not the offer. The soft offer only works after you’ve genuinely reconnected — pitch too fast and you burn warm goodwill.',
          mistakes: [
            'Opening with a hard pitch and torching goodwill.',
            'Treating warm contacts like a cold blast.',
            'Not following up after the first message.',
          ],
          stats: [
            'Warm audiences convert far better than cold because trust is already established.',
            'Reactivating past customers is among the cheapest, highest-ROI lead sources.',
          ],
          cases: [
            'Nearly every service business lands its first clients through warm outreach.',
            'Gyms routinely refill with "win-back" campaigns to past members.',
          ],
          related: ['core-four', 'engaged-leads', 'referrals'],
        },
        {
          id: 'post-content',
          title: 'Post free content',
          hook: 'Broadcast value to the people who follow you — one post can reach thousands.',
          principle:
            'Posting content is one-to-many communication with a warm public audience: social posts, videos, articles. You give value publicly so people discover you, trust you, and raise their hands.',
          why:
            'Content scales your promotion — make it once, reach many, forever. It builds an owned audience and warms strangers into engaged leads over time.',
          story:
            'In the Core Four, "post content" is the warm-public quadrant. Hormozi’s broader teaching: hook attention, retain it with value, and reward engagement so the algorithm — and your audience — keep coming back.',
          apply:
            'A bookkeeper posts a weekly "tax tip" reel; over months, followers who found her content book calls because they already trust her.',
          examples: [
            'Short-form video tips that showcase your expertise.',
            'A weekly newsletter or blog that compounds search traffic.',
            'Carousels or threads that teach one useful thing.',
            'Case-study posts that prove results.',
          ],
          actions: [
            'Pick one platform your buyers actually use.',
            'Post valuable content consistently (hook → value → CTA).',
            'Always include a next step (a lead magnet).',
            'Double down on whatever earns engagement.',
          ],
          gym: [
            { kind: 'gym', text: 'Post member transformations, quick technique tips, and myth-busting reels; end with "DM me START".' },
            { kind: 'gym', text: 'Go live for a free mini-workout to convert followers into visitors.' },
            { kind: 'app', text: 'Publish daily short-form (form fixes, recipes, mindset) that drives installs.' },
            { kind: 'app', text: 'Turn user wins into shareable content that markets the app for you.' },
          ],
          coachNote:
            'Every post should hook fast, deliver one real value, and point to a next step. Content without a CTA entertains; content with one generates leads.',
          mistakes: [
            'Posting inconsistently and quitting before it compounds.',
            'All value and no CTA — or all pitch and no value.',
            'Chasing virality instead of the right audience.',
          ],
          stats: [
            'Content/inbound marketing generates leads at lower cost than outbound over time (HubSpot).',
            'Owned audiences (email/followers) insulate you from ad-cost and algorithm swings.',
          ],
          cases: [
            'Countless creators turned consistent free content into large, monetizable audiences.',
            'Gymshark grew largely on organic content and community, not paid ads.',
          ],
          related: ['core-four', 'give-away-secrets', 'lead-magnet'],
        },
        {
          id: 'cold-outreach',
          title: 'Cold outreach',
          hook: 'Strangers, one at a time — personalize, persist, and treat it as a numbers game.',
          principle:
            'Cold outreach is one-to-one contact with people who don’t know you yet — cold email, DMs, calls. It works through personalization and persistence, and it’s fundamentally a volume game: more quality reach-outs, more leads.',
          why:
            'It’s scalable and, once systematized, remarkably predictable — you can dial lead flow up or down just by changing volume.',
          story:
            'Hormozi notes cold outreach can yield incredibly predictable results once you’ve built a solid system: a known response rate times volume equals a known number of leads.',
          apply:
            'An agency sends 100 personalized cold emails a day; at a steady reply rate, it reliably books a predictable number of calls each week.',
          examples: [
            'A personalized cold email referencing the prospect’s specific situation.',
            'DMs to strangers who fit your exact niche, opening with value.',
            'Cold calls with a tight, relevant script.',
            'LinkedIn outreach with a genuinely personalized first line.',
          ],
          actions: [
            'Define your exact target and where to find them.',
            'Write a personalized, value-first opener.',
            'Send consistent daily volume.',
            'Track reply/booking rates and scale what works.',
          ],
          gym: [
            { kind: 'gym', text: 'DM locals who post about wanting to get fit with a genuine, personal note and a free-session offer.' },
            { kind: 'gym', text: 'Personally contact nearby businesses to set up corporate-wellness trials.' },
            { kind: 'app', text: 'Cold-DM people in fitness communities with a tailored tip plus a free-trial link.' },
            { kind: 'app', text: 'Reach out to micro-influencers one-by-one for seeding and partnerships.' },
          ],
          coachNote:
            'Personalization is what separates outreach from spam — one specific, relevant line beats a clever template. After that, it’s just reps: volume makes it predictable.',
          mistakes: [
            'Blasting identical, impersonal messages (spam).',
            'Giving up after one touch — most replies come on follow-ups.',
            'No tracking, so you can’t improve or forecast.',
          ],
          stats: [
            'Cold outreach becomes forecastable at volume: response rate × volume = predictable leads.',
            'Personalization meaningfully lifts response rates versus generic blasts (multiple sales studies).',
          ],
          cases: [
            'Many agencies and B2B startups built their pipeline almost entirely on systematized cold email.',
            'Persistent, personalized follow-up consistently outperforms one-and-done outreach.',
          ],
          related: ['core-four', 'paid-ads', 'market-targetable'],
        },
        {
          id: 'paid-ads',
          title: 'Paid ads',
          hook: 'Pay to reach strangers at scale — call them out, give value, tell them exactly what to do.',
          principle:
            'Paid ads are one-to-many promotion to cold audiences. Target precisely (e.g., lookalike audiences modeled on your customers), then follow a three-step ad: (1) call out the exact person, (2) provide value and show how you solve their problem, (3) give a clear call to action. Then watch the money — aim for lifetime gross profit to CAC above 3.',
          why:
            'Ads turn cold audiences into warm ones at scale and give you a dial: spend more, get more leads — as long as the economics work.',
          story:
            'Hormozi’s ad framework: call out ("Small business owners in Los Angeles", "New parents in Chicago" — the more specific, the better), provide value, then a crystal-clear CTA. Track CAC and lifetime gross profit; keep LTGP:CAC above 3, or fix the promotion or the sales process.',
          apply:
            'A gym runs a geo-targeted ad: "Busy moms in Austin — drop a dress size in 6 weeks. Tap to claim a free week," then tracks cost per lead against member lifetime value.',
          examples: [
            'Facebook/Instagram ads to a lookalike of your best customers.',
            'YouTube pre-roll calling out a specific audience and pain.',
            'Google Search ads capturing high-intent queries.',
            'Retargeting ads to people who engaged but didn’t buy.',
          ],
          actions: [
            'Build a lookalike/precise audience from your customer data.',
            'Write the ad: call out → value → CTA.',
            'Track CAC and lifetime gross profit.',
            'Keep LTGP:CAC above 3, or fix the offer/funnel/sales.',
          ],
          gym: [
            { kind: 'gym', text: '"Dads in [city] — back in shape in 8 weeks. Free week, limited spots." Track cost per lead vs. average member value.' },
            { kind: 'gym', text: 'Retarget people who visited your booking page but didn’t sign up.' },
            { kind: 'app', text: 'Run install ads to lookalikes of paying subscribers; optimize to trial-start, then to paid.' },
            { kind: 'app', text: 'Keep LTGP:CAC above 3 by improving onboarding and retention — not just by lowering ad cost.' },
          ],
          coachNote:
            'Ads amplify whatever you already have — a great offer scales, a weak one just loses money faster. Prove the funnel converts cheaply before pouring in budget.',
          mistakes: [
            'Scaling ads before the offer/funnel is proven.',
            'Vague targeting and vague CTAs.',
            'Ignoring unit economics and spending past a healthy LTGP:CAC.',
          ],
          stats: [
            'Hormozi’s benchmark: keep lifetime gross profit to CAC above 3:1 (the classic LTV:CAC 3:1 rule, popularized by David Skok, echoes it).',
            'Lookalike audiences improve targeting efficiency by modeling your best customers (Meta).',
          ],
          cases: [
            'DTC brands scale on lookalike + retargeting funnels with disciplined CAC tracking.',
            'Many businesses burn cash precisely because they scaled ads before fixing unit economics.',
          ],
          related: ['cold-outreach', 'core-four', 'market-purchasing-power'],
        },
      ],
    },
    {
      id: 'lead-getters',
      title: 'Lead Getters',
      summary: 'Turn other people into your lead generators.',
      concepts: [
        {
          id: 'lead-getters',
          title: 'Lead getters (the multipliers)',
          hook: 'Stop being the only one generating leads — get other people doing it for you.',
          principle:
            'Lead getters are people who generate leads on your behalf: customers (referrals), affiliates, employees, and agencies. They multiply your reach beyond what you can do alone. The Core Four get leads; lead getters scale them.',
          why:
            'There are too many problems for one person to solve — and too many leads for one person to chase. Multipliers turn linear effort into leverage.',
          story:
            'Hormozi stresses that beyond doing promotion yourself, you recruit others — customers, affiliates, employees, agencies — to do it too. Referrals especially are gold when your product is extraordinary.',
          apply:
            'A course business adds an affiliate program, trains two appointment-setters, and asks every happy student for a referral — tripling lead flow without the founder doing more outreach.',
          examples: [
            'Customers referring friends (word of mouth).',
            'Affiliates promoting you for a commission.',
            'Employees (setters, marketers) generating leads full-time.',
            'Agencies running your ads or outreach at scale.',
          ],
          actions: [
            'Pick the multiplier that fits your stage (referrals first, usually).',
            'Build the system that makes it easy for them.',
            'Reward the exact behavior you want.',
            'Layer in the next multiplier as you grow.',
          ],
          gym: [
            { kind: 'gym', text: 'Turn members into referrers, partner with local physios/nutritionists (affiliates), hire a setter, and use an agency for ads.' },
            { kind: 'gym', text: 'A "bring a friend" program plus referral rewards multiplies member growth.' },
            { kind: 'app', text: 'Add an affiliate/influencer program, an in-app referral loop, and (later) a growth agency.' },
            { kind: 'app', text: 'Let power users earn rewards for every friend who subscribes.' },
          ],
          coachNote:
            'You can only do so much outreach yourself — leverage is other people’s reach. Build systems that make referring, affiliating, and selling for you easy and rewarding.',
          mistakes: [
            'Relying only on your own effort (a hard ceiling).',
            'Adding multipliers with no system or reward.',
            'Expecting referrals without ever asking.',
          ],
          stats: [
            'Word of mouth influences a large share of purchases — McKinsey estimates it drives a meaningful portion of buying decisions.',
            'Referred customers tend to have higher retention and lifetime value (Wharton research).',
          ],
          cases: [
            'Dropbox’s referral program (free space for both sides) drove explosive growth.',
            'Affiliate-led DTC and SaaS businesses scale acquisition far beyond founder effort.',
          ],
          related: ['referrals', 'affiliates', 'employees', 'agencies'],
        },
        {
          id: 'referrals',
          title: 'Customer referrals',
          hook: 'Your happy customers are your best salespeople — but you still have to ask.',
          principle:
            'Referrals are leads generated by your existing customers. An extraordinary product earns word of mouth, but don’t rely on luck — ask directly, make referring effortless with tools and links, and reward people for spreading the word.',
          why:
            'Referred leads arrive pre-trusted and convert better. They’re often your cheapest, highest-quality source.',
          story:
            'Hormozi: referrals are gold — if your product is extraordinary, people talk. But don’t leave it to chance: ask for referrals directly, provide referral tools, and reward customers for helping.',
          apply:
            'A coach ends every successful program with "Who else do you know who needs this?" plus a referral link and a reward — turning each client into one or two more.',
          examples: [
            'A simple "refer a friend, you both get X" program.',
            'Asking for referrals at the peak-happiness moment (right after a win).',
            'Shareable referral links/codes that track and reward.',
            'Done-for-you intro templates customers can just forward.',
          ],
          actions: [
            'Make the product genuinely worth talking about.',
            'Ask directly, at the moment of peak satisfaction.',
            'Give referral tools/links so it’s effortless.',
            'Reward both the referrer and the new lead.',
          ],
          gym: [
            { kind: 'gym', text: '"Bring a friend free week" plus a reward (a free month) when the friend joins.' },
            { kind: 'gym', text: 'Ask for referrals right after a member hits a milestone, when they’re most proud.' },
            { kind: 'app', text: 'In-app "invite a friend, you both get a free month" referral loop.' },
            { kind: 'app', text: 'Prompt for a referral right after a user logs a personal best.' },
          ],
          coachNote:
            'The two levers are timing and ease. Ask at peak happiness, and remove every ounce of friction — a one-tap share beats "tell your friends about us."',
          mistakes: [
            'Waiting and hoping instead of asking.',
            'Asking at the wrong (non-peak) moment.',
            'Making referring effortful or unrewarded.',
          ],
          stats: [
            'Referred customers show higher loyalty and roughly 16–25% higher lifetime value (Wharton/Schmitt et al., 2011).',
            'People trust recommendations from friends far more than ads (Nielsen).',
          ],
          cases: [
            'Dropbox, PayPal, and Tesla all scaled on referral incentives.',
            'Gyms grow heavily on "bring a friend" because the social proof is built in.',
          ],
          related: ['lead-getters', 'engaged-leads', 'win-your-money-back'],
        },
        {
          id: 'affiliates',
          title: 'Affiliates',
          hook: 'Let other people sell for you — and only pay them when they deliver.',
          principle:
            'Affiliates are partners who promote your offer to their audience in exchange for a commission on results. You borrow their trust and reach, and you typically pay only for performance.',
          why:
            'Affiliates give you instant access to warm audiences you don’t own, with little upfront cost — and they’re incentivized to produce.',
          story:
            'In Hormozi’s lead-getter framework, affiliates are one of the four multipliers: people who send you leads or sales for a cut. The key is making it worth their while and easy to promote.',
          apply:
            'A software company recruits niche YouTubers as affiliates; each gets a tracked link and 30% recurring — they create content, the company gets a flood of pre-warmed signups.',
          examples: [
            'Recurring commissions for SaaS referrers.',
            'Influencer affiliate codes with a revenue share.',
            'Complementary businesses cross-promoting for a cut.',
            'Course/community affiliates earning per enrollment.',
          ],
          actions: [
            'Set a commission generous enough to truly motivate.',
            'Give affiliates tracked links and ready-made assets.',
            'Recruit partners whose audience matches your buyer.',
            'Pay reliably and celebrate top performers.',
          ],
          gym: [
            { kind: 'gym', text: 'Pay local physios, dietitians, and run clubs a commission for members they send.' },
            { kind: 'gym', text: 'Partner with supplement or apparel brands to cross-promote for a cut.' },
            { kind: 'app', text: 'Recruit fitness influencers as affiliates with tracked codes and recurring revenue share.' },
            { kind: 'app', text: 'Build an affiliate dashboard so partners can see their earnings and grab assets.' },
          ],
          coachNote:
            'Affiliates promote whatever is easy and lucrative to promote — give them great creative, a fair cut, and fast payouts. Make being your affiliate a no-brainer.',
          mistakes: [
            'Commissions too small to motivate real effort.',
            'No assets or links, so promoting is hard.',
            'Recruiting affiliates whose audience doesn’t match your buyer.',
          ],
          stats: [
            'Affiliate marketing is a multi-billion-dollar channel that drives a notable share of e-commerce sales.',
            'Performance-based payouts cap your risk — you pay for results, not promises.',
          ],
          cases: [
            'Amazon Associates helped build Amazon’s early reach.',
            'Many SaaS and course businesses attribute a large share of growth to affiliates.',
          ],
          related: ['lead-getters', 'post-content', 'continuity-discount'],
        },
        {
          id: 'employees',
          title: 'Employees (your lead team)',
          hook: 'Hire people whose whole job is generating leads — so your reach stops depending on you.',
          principle:
            'Employees are team members you hire specifically to generate leads — appointment setters, outreach reps, content and marketing staff. You trade money for leverage and consistency that doesn’t depend on the founder.',
          why:
            'A trained team does far more outreach than you can alone, predictably and daily — turning lead gen into a machine instead of a founder bottleneck.',
          story:
            'In the lead-getter framework, employees are a multiplier: people on payroll who run the Core Four for you, so volume isn’t capped by your personal hours.',
          apply:
            'A founder doing 30 cold DMs a day hires two setters doing 100 each — tripling output and freeing the founder to close and build.',
          examples: [
            'Appointment setters running cold/warm outreach.',
            'A content creator producing daily posts.',
            'A media buyer managing paid ads.',
            'An SDR team booking demos.',
          ],
          actions: [
            'Document your lead-gen process so it’s teachable.',
            'Hire for the channel that’s already working.',
            'Give clear targets and scripts.',
            'Manage the daily activity that drives the leads.',
          ],
          gym: [
            { kind: 'gym', text: 'Hire a front-desk/sales setter to follow up every lead and book free sessions.' },
            { kind: 'gym', text: 'Train a staff member to run your social content daily.' },
            { kind: 'app', text: 'Hire a media buyer to scale paid acquisition and a rep for partnerships.' },
            { kind: 'app', text: 'Build a small growth team once a channel is proven and worth scaling.' },
          ],
          coachNote:
            'Only hire to scale a channel you’ve already made work yourself — an employee multiplies a working system but can’t invent one. Systematize first, then staff.',
          mistakes: [
            'Hiring before you’ve proven the channel yourself.',
            'No documented process, so they flounder.',
            'Managing outcomes without managing the daily activity behind them.',
          ],
          stats: [
            'Specialized roles (setters, media buyers) raise output and consistency versus a founder doing everything.',
            'Sales is largely an activity game — more trained reps doing more reps produces more leads.',
          ],
          cases: [
            'Hormozi’s Gym Launch scaled with teams running outreach and onboarding.',
            'Most scaling companies split lead-gen into dedicated roles as they grow.',
          ],
          related: ['lead-getters', 'agencies', 'core-four'],
        },
        {
          id: 'agencies',
          title: 'Agencies',
          hook: 'Rent expertise and execution — outsource a channel to specialists who already know it.',
          principle:
            'Agencies are outside specialists you hire to run a lead channel for you — ads, SEO, cold email, content. You buy speed and expertise without building the team in-house, usually for a retainer or performance fee.',
          why:
            'A good agency already has the skills, tools, and reps — they can get a channel working faster than you learning it from scratch.',
          story:
            'Agencies are the fourth lead-getter multiplier: outsource the running of the Core Four to people who do it all day. Useful when you lack the time or in-house skill to master a channel yourself.',
          apply:
            'A local business hires an ads agency that already runs hundreds of gym campaigns and gets a proven funnel live in a week instead of fumbling for months.',
          examples: [
            'A paid-ads agency managing your campaigns.',
            'An SEO/content agency building organic traffic.',
            'A cold-email/lead-gen agency booking meetings.',
            'A short-form video agency producing daily content.',
          ],
          actions: [
            'Choose an agency with proven results in your exact niche.',
            'Start with a clear scope and a success metric.',
            'Keep ownership of your accounts and data.',
            'Hold them to CAC and lead-quality targets, not vanity metrics.',
          ],
          gym: [
            { kind: 'gym', text: 'Hire a gym-specialist ads agency to fill your calendar with free-week bookings.' },
            { kind: 'gym', text: 'Use a content agency to produce daily reels you don’t have time to make.' },
            { kind: 'app', text: 'Engage a user-acquisition agency that specializes in app-install campaigns.' },
            { kind: 'app', text: 'Bring in an ASO/agency partner to improve store conversion and paid efficiency.' },
          ],
          coachNote:
            'Agencies are fastest when you already understand the channel enough to manage them — outsource execution, not understanding. Own your accounts and data so you’re never held hostage.',
          mistakes: [
            'Outsourcing a channel you don’t understand at all (you can’t manage what you can’t judge).',
            'Letting the agency own your ad accounts and data.',
            'Chasing vanity metrics instead of CAC and lead quality.',
          ],
          stats: [
            'Specialist agencies bring ready-made expertise and tooling, compressing time-to-results.',
            'Aligning agency pay to CAC/lead-quality protects your unit economics.',
          ],
          cases: [
            'Many DTC brands scale with specialist media-buying agencies.',
            'Hormozi’s portfolio uses specialized teams and agencies to run channels at scale.',
          ],
          related: ['lead-getters', 'employees', 'paid-ads'],
        },
      ],
    },
  ],
};
