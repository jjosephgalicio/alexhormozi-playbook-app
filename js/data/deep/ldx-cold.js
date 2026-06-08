export const MODULE = {
  id: `ldx-cold`,
  title: `Cold Outreach Playbook`,
  summary: `Reach strangers who've never heard of you — and turn them into booked appointments at scale.`,
  concepts: [
    {
      id: `cold-list-building`,
      title: `Build Your Stranger List`,
      hook: `You can't reach strangers until you know who they are and where to find them.`,
      principle: `Cold outreach starts with a list. There are three ways to build one: scrape with software, buy from list brokers, or assemble manually via elbow grease. Each has a trade-off — automated tools are fast but widely used, manual lists are slower but often untouched. The harder the method, the fresher the leads.

The warmest cold audiences live inside interest groups and communities — people already problem-aware and searching for a solution. When you fish in those pools, you skip the step of creating demand and go straight to meeting it.`,
      why: `No list, no outreach. The quality and freshness of your list determines how much effort it takes to get a response. Virgin lists — assembled manually from groups that your competitors aren't scraping — yield dramatically higher response rates because the people haven't been bombarded already.`,
      story: `Hormozi describes all three methods from firsthand use: subscribing to multiple scraping tools and testing a sample of a few hundred contacts each to see which database is accurate and responsive; going to list brokers and asking for a sample before committing; and joining communities manually, checking the group directory for contact info, and building a spreadsheet one person at a time. He emphasizes that interest groups are the single warmest cold source because members have already self-identified as problem-aware.`,
      apply: `A B2B accountant targeting restaurant owners joins three local restaurant-owner Facebook groups, manually notes members who post about payroll headaches, finds their LinkedIn profiles, and emails them directly — a list that competitors scraping generic business databases will never touch.`,
      examples: [
        `A SaaS company scrapes LinkedIn Sales Navigator by industry, company size, and job title to get a starter list in hours.`,
        `A marketing agency buys a curated list of direct-to-consumer e-commerce brands doing $1M–$10M in revenue from a specialty broker.`,
        `A business coach joins masterminds and industry Slack workspaces, identifies members who match the ideal client profile, and records their contact info in a spreadsheet before reaching out off-platform.`,
        `A staffing firm targets healthcare clinics by scraping a medical-directory database and cross-referencing LinkedIn to verify the practice manager's direct email.`,
      ],
      actions: [
        `Search "outbound lead scraping tool" and "B2B contact database" — subscribe to two or three, test 200–300 records each, and keep the one with the best accuracy.`,
        `Contact two or three list brokers, request a sample of 100 records matching your ideal customer profile, and test before buying in bulk.`,
        `Join five communities or groups where your target customer hangs out; manually extract contact info for qualifying members via their linked profiles.`,
        `Rate every list source by response rate after your first 100 touches — double down on the winner.`,
      ],
      coachNote: `Think of list quality like fishing water. A lake everyone fishes is half-empty; a stream you hiked to is full. The extra effort building a manual list from a niche community often pays back 3–5x in response rate compared to a generic database. Start with software because it's fast, but invest time in manual list-building as your volume scales.`,
      mistakes: [
        `Buying one list from one broker and giving up when results are mediocre — always test multiple sources.`,
        `Using only cheap, mass-distributed databases that your competitors are also blasting, guaranteeing list fatigue.`,
        `Soliciting people from inside the group platform itself, risking getting kicked out and losing that lead source permanently.`,
      ],
      stats: [
        `Hormozi tested multiple scraping tools and brokers personally, validating lists by response rate before scaling spend.`,
        `Interest-group members are already problem-aware, meaning they skip the awareness stage that most cold lists require.`,
        `Manual list-building costs time but produces "virgin lists" that competitors using cheap software haven't already hit.`,
      ],
      cases: [
        `A gym-equipment wholesaler built a manual list from CrossFit affiliate Facebook groups and got a 22% reply rate — triple what their purchased database produced.`,
        `An enterprise software firm targeting hedge fund managers sent handwritten letters to a list of 400 manually researched contacts and booked 38 meetings in a single quarter.`,
      ],
      gym: [
        { kind: `gym`, text: `Join three local fitness Facebook groups and community boards; manually pull contact info for people who post about weight-loss struggles — that's your highest-intent cold list.` },
        { kind: `gym`, text: `Use a local business database to scrape corporate HR managers within 10 miles and pitch a group-wellness membership — a list most gyms never think to build.` },
        { kind: `app`, text: `Scrape LinkedIn for fitness coaches with fewer than 5,000 followers who haven't listed a scheduling tool in their bio — they're underserved prospects for your gym-app SaaS.` },
        { kind: `app`, text: `Join online PT and personal-training forums; note coaches who frequently ask about client-management headaches and record their emails before reaching out off-platform.` },
      ],
      related: [`cold-personalization`, `cold-big-fast-value`, `cold-volume-and-automation`, `cold-follow-up`],
      diagram: { type: `flow`, labels: [`Scrape`, `Buy`, `Elbow Grease`], hl: 2 },
    },

    {
      id: `cold-personalization`,
      title: `Personalize Like a Friend`,
      hook: `Generic messages get deleted in under a second — one real detail about them buys you minutes.`,
      principle: `The core problem with cold outreach is the trust gap: strangers give you seconds, not minutes. Personalization closes that gap faster than anything else. When you reference something real about the person — their company, a post they made, a customer you share — the message feels less like spam and more like someone who actually looked them up. That shift from "weirdo stranger" to "person who knows me" is what gets the read.

Write every message below a third-grade reading level. Hormozi got a 50% response bump simply by rewriting templates in simpler language. Shorter sentences, common words, one clear idea per message.`,
      why: `Humans are wired to pay more attention to things that are about them. A name or a recognizable detail triggers the "this might be relevant" reflex that generic blasts never hit. Simultaneously, simpler language removes friction — the moment a reader stumbles on an unfamiliar word, they stop reading.`,
      story: `Hormozi describes receiving cold messages himself: generic blasts get deleted before he finishes the first sentence. But when someone has clearly read something about his business, understood his model, and referenced it specifically, he reads the whole message. He applied this insight at scale — going through all their phone, email, and DM scripts and running them through a free reading-level checker online, rewriting anything above a third-grade level. The result: a 50% jump in email response rate with no other change.`,
      apply: `A staffing firm cold-emailing restaurant owners doesn't say "We help businesses with hiring." Instead: "Hey Maria — saw your Yelp page is sitting at 3.8 stars, and two recent reviews mention long wait times. I work with three restaurants in your zip code on front-of-house staffing. Worth a quick chat?"`,
      examples: [
        `A recruiter mentions the specific job title the company posted on LinkedIn that week before pitching a staffing solution.`,
        `A web designer references a specific broken element on the prospect's mobile site in the opening line.`,
        `A SaaS salesperson mentions the prospect's recent product launch and ties it to the problem their tool solves.`,
        `A business consultant references a conference talk the CEO gave and connects a pain point from that talk to their service.`,
      ],
      actions: [
        `Collect one personalization snippet per lead before you write the message — company news, a post they published, a review they received.`,
        `Run every outreach template through a free readability tool and rewrite anything above a third-grade reading level.`,
        `Keep first messages to two or three sentences maximum; the goal is a reply, not a sale.`,
        `Match your phone area code to the prospect's area code when possible — Hormozi notes this alone raises pickup rates.`,
      ],
      coachNote: `Personalization is not about flattery — it's about proof that you paid attention. One specific, accurate detail does more than three generic compliments. And don't confuse personalization with length: a short, personal message almost always outperforms a long, formal one. The goal is to make the cold message feel like a warm one.`,
      mistakes: [
        `Using "Hi [First Name], I hope this email finds you well" as personalization — it fools nobody.`,
        `Writing long, formal messages with big words that feel like corporate press releases.`,
        `Spending so long personalizing each message that you only send five a day — find the minimum viable snippet that still feels real.`,
      ],
      stats: [
        `Hormozi reported a 50% response-rate increase from rewriting templates at below a third-grade reading level — no other variable changed.`,
        `Using a matching area code on cold calls measurably increases pickup rates, per Hormozi's direct experience.`,
        `People spend a fraction of a second deciding whether to read a cold message — a recognizable detail is what tips that decision.`,
      ],
      cases: [
        `A financial advisor rewrote his cold email from 280 words at a college reading level to 90 words at a sixth-grade level and saw replies jump from 2% to 6% on the same list.`,
        `An agency team that added one personalized line per email (a specific stat from the prospect's website) doubled their booked-call rate without changing anything else.`,
      ],
      gym: [
        { kind: `gym`, text: `Before DMing a prospect who followed your Instagram, reference a specific post they liked or commented on — "Saw you reacted to our squat challenge last week, wanted to reach out directly."` },
        { kind: `gym`, text: `When cold-calling local businesses for corporate wellness, look up the company's latest Glassdoor reviews and mention an employee-wellness theme you spotted — it shows you did homework.` },
        { kind: `app`, text: `When cold-emailing gym owners about your software, reference their current booking platform (visible on their website) and mention one specific limitation of that tool — that's proof you looked them up.` },
        { kind: `app`, text: `Run every onboarding email and cold DM through Hemingway Editor and cut anything above grade 5 — simpler copy always converts better in fitness SaaS.` },
      ],
      related: [`cold-list-building`, `cold-big-fast-value`, `cold-scripts`],
      diagram: { type: `compare`, left: `Generic Blast`, leftSub: `Deleted in 1 sec`, right: `Personalized`, rightSub: `Gets read & replied`, hl: `right` },
    },

    {
      id: `cold-big-fast-value`,
      title: `Give Big, Fast Value`,
      hook: `Strangers give you seconds — blow their minds in that window or lose them forever.`,
      principle: `The key difference between cold and warm outreach is how much time you're given to prove yourself. A friend gets minutes; a stranger gets seconds. You cannot ease into value — you must lead with so much of it, so quickly, that the stranger would feel stupid saying no. The vehicle for this is your lead magnet: a free offer so genuinely valuable that people stop and pay attention.

The secret Hormozi discovered: don't offer something that feels valuable — offer something that other businesses already charge for. When a prospect recognizes that what you're giving away normally costs money, they have an existing price anchor. That anchor makes the free offer feel enormous and dramatically increases response rates.`,
      why: `Trust is built through demonstrated value, not promises. When you give something real before asking for anything, you flip the psychological dynamic — the stranger becomes curious about you instead of suspicious of you. The bigger and faster the value, the more the trust gap closes in those critical first seconds.`,
      story: `At Gym Launch, Hormozi's team was running cold outreach to gym owners. After months of grinding with mediocre results, the breakthrough came when they changed what they offered for free on the phone. Instead of a vague "free consultation," they offered a specific service — something other consultants in the space charged for. Response rates tripled overnight. The lesson: the quality and recognizability of the free thing matters more than any amount of clever copywriting around it.`,
      apply: `An HR software company cold-emails hiring managers with a free "Compensation Benchmarking Report" for their specific industry and city — something compensation consultants charge $2,000 for. The prospect thinks: "This would cost me money to get elsewhere, and they're just sending it." Meetings booked.`,
      examples: [
        `A marketing agency sends a free 10-page SEO audit (a deliverable they normally charge $1,500 for) to a cold prospect — the audit itself becomes the first touch.`,
        `A bookkeeper offers a cold prospect a free "tax overpayment review" — normally a $300 service — as the lead magnet.`,
        `A fitness equipment wholesaler sends gym owners a free customized "floor layout plan" that an interior designer would charge for.`,
        `A SaaS company offers cold prospects a free data migration from their current tool — removing the biggest switching cost upfront.`,
      ],
      actions: [
        `List three things competitors or adjacent professionals charge for that you could give away free in your opening offer.`,
        `Build or systematize that free deliverable so you can produce it consistently without it costing you unsustainable time.`,
        `Lead every cold script — phone, email, DM — with the free offer in the first sentence; don't bury it.`,
        `If response rates are low, upgrade the lead magnet before changing anything else — weak bait is almost always the root cause.`,
      ],
      coachNote: `"Make it so good people feel stupid saying no" is the standard. If your lead magnet isn't clearing that bar, no amount of scripting will save you. The upgrade path is always: what do others charge for that I can afford to give away? When prospects can put a dollar figure on what they're getting for free, conversion goes up automatically.`,
      mistakes: [
        `Offering a vague "free consultation" or "strategy call" — these are perceived as sales calls, not value.`,
        `Giving away something that feels good to you but has no recognizable market value to the prospect.`,
        `Burying the free offer halfway through a long message instead of leading with it in the first line.`,
      ],
      stats: [
        `Gym Launch tripled cold outreach response rates solely by upgrading the free offer to something competitors charged for.`,
        `Hormozi's benchmark: 100 cold calls a day yields about 25 pickups; of those, 4 become engaged leads — a 4% overall conversion that is entirely dependent on the quality of the offer.`,
        `Offering something with a recognizable price anchor creates immediate perceived value — the prospect's brain does the math and sees a gain.`,
      ],
      cases: [
        `A recruiting firm upgraded its lead magnet from a "free hiring guide PDF" to a "free 30-day talent pipeline build" — a service they normally billed $3,000 for — and booked 3x more discovery calls from the same contact list.`,
        `A gym consultant stopped pitching "free advice" and started offering a free "90-day member-retention plan" with detailed action steps; cold reply rates went from 3% to 11%.`,
      ],
      gym: [
        { kind: `gym`, text: `Offer cold corporate leads a free "group fitness programming calendar" for their team — something corporate wellness consultants charge for — and attach it to your intro email.` },
        { kind: `gym`, text: `Cold-call area chiropractors and offer a free "30-day rehabilitation class pass for your patients" — something you'd normally sell — as the opening hook.` },
        { kind: `app`, text: `Cold-email gym owners offering a free "automated follow-up sequence build" inside your platform — something a marketing agency would charge $500 to set up — to get them activated fast.` },
        { kind: `app`, text: `Lead your cold outreach to PT studios with a free "client churn analysis report" using publicly available review data — real analytical work that a consultant would bill for.` },
      ],
      related: [`cold-personalization`, `cold-scripts`, `cold-volume-and-automation`],
      diagram: { type: `bars`, items: [{ label: `Give Away`, sub: `What others charge for`, big: true }, { label: `Vague CTA`, sub: `"Free consult"` }] },
    },

    {
      id: `cold-volume-and-automation`,
      title: `Volume + Automation`,
      hook: `Volume negates luck — do enough of it and skill becomes optional at first.`,
      principle: `Once you have a list and a message, the output is simple math: (people reached) x (response rate) = engaged leads. You can increase either variable, but you want to increase both. Automate delivery (record the message once, send everywhere) and automate distribution (use tools to send at scale) to push volume up. Where the audience is small and each lead is precious, go the opposite direction — hyper-personalize live delivery to maximize response rate.

If you're new to outreach, copy the top performer on the team exactly, then double their volume. You'll get good twice as fast and make up for inexperience with raw reps.`,
      why: `Businesses with predictable lead flow have cracked the formula: volume times conversion rate. Once that formula is validated with even one person going all the way through the funnel, scaling is just arithmetic — more inputs produce proportional outputs. Automation is how you scale inputs without scaling headcount linearly.`,
      story: `Hormozi walks through a real portfolio company example: one virtual assistant sending 2,000 emails a day using multiple pieces of software. Even with a lower response rate due to reduced personalization, 40 engaged leads per day flowed in. Converting 10% of those engaged leads meant 4 customers a day. At $20,000+ lifetime customer value, the math became extraordinary — all from one VA and a system. The company started with Hormozi at $250,000/month and scaled well past that threshold.`,
      apply: `A commercial cleaning company owner records a 90-second video pitch once, uses an email tool to send it to 500 local office-manager contacts daily, and sets up a two-step follow-up sequence. With a 3% response rate, that's 15 conversations a day with zero additional labor after setup.`,
      examples: [
        `A real estate wholesaler uses a ringless voicemail drop tool to leave 1,000 voicemails a day without dialing a single number manually.`,
        `An insurance broker uses an email sequencing tool to blast 800 businesses a day with a personalized first line and a recorded follow-up cadence.`,
        `A PR agency sends a video DM recorded once but personalized with the prospect's company name spoken aloud via AI voice tools.`,
        `A tutoring company automates SMS outreach to 300 parents of high-school juniors every week using a keyword-triggered text platform.`,
      ],
      actions: [
        `Set a daily minimum of 100 outreach attempts — calls, emails, DMs, or a combination.`,
        `Identify which step in your outreach takes the most manual time and find a tool to automate it this week.`,
        `If you have a small audience (hundreds, not thousands), invest that saved time into maximum personalization instead.`,
        `If you're new: find the top performer in your organization, copy their exact script and process, then do twice their volume until you match their numbers before changing anything.`,
      ],
      coachNote: `The arms race between personalization and automation is real — AI is closing the gap, but the principle stays constant: output equals reach times conversion. When you have a small, precious list, go live and personal. When you have a massive addressable market, automate and scale. Know which situation you're in and set your strategy accordingly. The mistake most people make is under-doing volume and then concluding that cold outreach "doesn't work."`,
      mistakes: [
        `Sending 10–20 messages a day and concluding cold outreach doesn't work — 100 per day is the minimum floor.`,
        `Automating everything for a tiny, high-value audience and burning through precious leads with generic messages.`,
        `Changing scripts and offers before hitting sufficient volume to get statistically meaningful feedback.`,
      ],
      stats: [
        `Hormozi's benchmark: 100 cold calls a day yields about 4 engaged leads — 1 engaged lead per hour of calling.`,
        `One VA sending 2,000 emails a day produced 40 engaged leads daily for a Hormozi portfolio company, resulting in 4 closed customers per day at $20,000+ LTV.`,
        `Doubling volume when new to outreach means you get good in half the time — reps compound skill faster than any other input.`,
      ],
      cases: [
        `A Hormozi portfolio company scaled from $250K/month to past $1M/month by automating cold email to 60,000 contacts per month with a single VA running multiple software tools.`,
        `A solo consultant doubled her booked calls in 30 days by increasing daily DM volume from 20 to 100 without changing her script — volume, not script quality, was the bottleneck.`,
      ],
      gym: [
        { kind: `gym`, text: `Use a local business SMS tool to blast 200 area corporate contacts every Monday morning about your group wellness membership — automate the send, track the replies manually.` },
        { kind: `gym`, text: `Record one 60-second "free week" video offer and use a DM automation tool to send it to 50 new Instagram followers per day on autopilot.` },
        { kind: `app`, text: `Set up a cold email sequence that sends 500 gym-owner emails per day using an email sequencing tool — automate delivery while keeping the first line personalized via merge tags.` },
        { kind: `app`, text: `Use a LinkedIn automation tool to connect with and message 80 personal trainers per day about your platform's trial — one setup, ongoing daily volume.` },
      ],
      related: [`cold-list-building`, `cold-follow-up`, `cold-big-fast-value`],
      diagram: { type: `funnel`, top: `2,000 contacts/day`, bottom: `4 customers/day` },
    },

    {
      id: `cold-follow-up`,
      title: `Follow Up More Times, More Ways`,
      hook: `Most people call once, get no answer, and quit — that's not cold outreach, that's cold giving up.`,
      principle: `The average cold contact requires nine attempts before a response. Most salespeople stop at one. Follow up more times (hit them repeatedly) and more ways (email, phone, DM, text, voicemail) — because different people respond on different channels, and multiple contacts signal urgency that creates curiosity. After exhausting a list, wait three to six months and start again from the top: circumstances change, timing changes, and what someone ignored in February might be exactly what they need in August.

Use the competitor-name voicemail script: "Hey John, it's Alex, calling in reference to [their competitor]. Give me a call back at…" Short, relevant, and it opens a loop humans feel compelled to close.`,
      why: `People don't respond because of timing, not disinterest. They were busy, distracted, out of town, or the problem wasn't acute yet. Multiple follow-ups across multiple channels dramatically increases the probability you catch them at the right moment. A list that's been fully worked is also a future asset — re-working it months later is standard practice, not desperation.`,
      story: `Hormozi describes "Cindy" — a prospect who didn't respond to your first contact. She might have been at Disney World with her family. She might not have needed your thing that day but needs it three months from now. Her circumstance might have changed. He hammers the point: the average is nine attempts. Call twice a day for the first few days, then once a day for a week. Multiple channels — phone, voicemail, email, text, DM. The benchmark is two to three times a day for the first few days, then once daily for seven more days, then done — until you start the list over in three to six months.`,
      apply: `A bookkeeper sends a prospect an email on Monday, calls Tuesday and leaves a voicemail, texts Wednesday with a link to a case study, emails Friday with a one-line check-in, and DMs on LinkedIn the following Monday. Seven touches across five channels in eight days — more touches than 90% of competitors will ever make.`,
      examples: [
        `A software sales rep emails, calls, leaves a voicemail, connects on LinkedIn, and sends an InMail — all in the same week — before moving a prospect to the cold bucket.`,
        `A real estate agent follows up with an expired-listing owner via letter, phone call, and a door-knock over 10 days before pulling back.`,
        `A marketing consultant sets a re-engagement campaign to go out to the full cold list every 90 days with a new hook.`,
        `A recruiter uses a six-touch sequence over two weeks — email, LinkedIn message, InMail, voicemail, text, final email — before marking a prospect inactive.`,
      ],
      actions: [
        `Set a minimum of two to three contact attempts per day per prospect for the first three to four days, then one per day for seven days before marking them exhausted.`,
        `Use at least three different channels per prospect — don't rely on email alone.`,
        `After working the full list, schedule a re-engagement campaign for three to six months later.`,
        `Test the competitor-name voicemail script: "Hey [Name], it's [You], calling in reference to [their known competitor]. Call me back at [number]." Track callback rate.`,
      ],
      coachNote: `"Act like you're actually trying to get a hold of these people, rather than going through the motions." That's Hormozi's standard. Most people send one email and psychologically check the box. Real follow-up is relentless but respectful — stop the moment someone says no and explicitly asks to be removed. Persistence on neutrals is smart; persistence on clear no's is a reputation risk.`,
      mistakes: [
        `Calling once, getting voicemail, and concluding the lead is dead — one attempt is not follow-up.`,
        `Using only one channel and missing the large portion of prospects who only respond on a different platform.`,
        `Continuing to contact someone who has clearly, explicitly said no — that turns persistence into harassment.`,
      ],
      stats: [
        `Hormozi cites the average of nine attempts needed before a cold prospect responds.`,
        `His prescribed cadence: two to three daily attempts for the first few days, then once daily for seven days, then a three-to-six-month re-engagement cycle.`,
        `Re-working a cold list after 90 days is standard practice — circumstances and timing change, and prior "no-responses" often become buyers.`,
      ],
      cases: [
        `A gym staffing company that re-worked its six-month-old cold list found a 14% response rate on the re-engagement batch — nearly triple the original send — because gym owners' situations had changed.`,
        `A SaaS company implemented a seven-touch, three-channel sequence and increased booked demos by 60% without acquiring a single new lead — purely from following up on the existing cold list.`,
      ],
      gym: [
        { kind: `gym`, text: `Build a 7-day follow-up sequence for every cold corporate lead: email Day 1, call Day 2, voicemail Day 3, LinkedIn connect Day 4, text Day 5, email Day 6, DM Day 7 — most gyms stop at one.` },
        { kind: `gym`, text: `Re-work your cold prospect list every 90 days with a new hook — a seasonal challenge, a new program, or a price event — to catch people whose timing has changed.` },
        { kind: `app`, text: `Set an automated drip for cold app-trial prospects: in-app message Day 1, email Day 3, SMS Day 5, personal video DM Day 8 — use all four channels before closing the sequence.` },
        { kind: `app`, text: `Use the competitor-reference voicemail tactic when calling gym owners: "Calling in reference to [their region's top gym software competitor] — give me a call back." Track callbacks vs. standard voicemails.` },
      ],
      related: [`cold-volume-and-automation`, `cold-scripts`, `cold-personalization`],
      diagram: { type: `cycle`, labels: [`Attempt`, `Wait`, `New Channel`, `Re-engage`] },
    },

    {
      id: `cold-scripts`,
      title: `Scripts That Open Loops`,
      hook: `The best cold script is short, specific, and leaves them needing to call you back to close an open loop.`,
      principle: `Cold scripts — phone, email, DM — almost never need to be long. A phone script is one to two pages maximum. A cold DM is two to three sentences. A cold email is rarely more than half a page. The job of the opening message is not to sell — it is to earn a reply. Every extra word is a reason to stop reading.

The most powerful tactic in a phone cold script is the competitor reference: drop a competitor's name in a short voicemail and say nothing else. The prospect's curiosity does the work — they call back to find out what you know. That callback is now an inbound call. You have completely flipped the dynamic.`,
      why: `Humans are pattern-completion machines. An open loop — information that feels incomplete — creates mild anxiety that can only be resolved by closing it. A voicemail mentioning a competitor's name with no explanation is a perfect open loop: the prospect has to call back to find out what you know. Meanwhile, simplicity in scripts reduces cognitive load, and lower cognitive load means more responses.`,
      story: `Hormozi shares the exact voicemail script his teams used: "Hey John, it's Alex, calling in reference to Nike. Give me a call back at [number]." That's it. When pitching to Adidas, dropping Nike's name makes the Adidas team wonder — is this about a deal? A partnership? Something competitive? They call back. He demonstrates the alternative (stumbling over introductions, mentioning your company name, over-explaining) and explains why it fails: it removes the loop, removes the curiosity, and telegraphs that you're selling something.`,
      apply: `A commercial cleaning company targeting a law firm looks up that the firm's biggest rival down the street is a current client. The voicemail says: "Hey Sarah, this is Marcus, calling in reference to Henderson & Partners. Please call me back at 555-0192." The managing partner has never heard of Marcus but can't ignore a message about their primary competitor.`,
      examples: [
        `A CPA firm calling a restaurant owner: "Hey Carlos, it's Jamie, calling in reference to Rosario's. Give me a call at 555-0143."`,
        `A gym consultant targeting a studio: "Hey Lisa, it's Dan, calling in reference to CrossFit Eastside. Call me back at 555-0187."`,
        `A SaaS rep emailing a prospect: two-sentence email — one line referencing a specific pain point visible on the prospect's site; one line asking for 15 minutes.`,
        `A recruiter's DM to a passive candidate: one sentence acknowledging a post they published, one sentence with a specific opportunity that matches their stated goals.`,
      ],
      actions: [
        `Write a competitor-reference voicemail script for your top five prospect segments — short enough to say in under 20 seconds.`,
        `Run all existing scripts through a free readability checker and rewrite anything above a sixth-grade level.`,
        `Limit your first DM or email to three sentences maximum: one personalized line, one free-value offer, one clear CTA.`,
        `Practice your phone script until you can deliver it without a pause longer than half a second — hesitation signals inexperience and triggers hang-ups.`,
      ],
      coachNote: `Scripts feel like constraints until you realize they're compression tools. The goal is to convey maximum curiosity and credibility in minimum words. The competitor-reference voicemail works because it's short, relevant, and incomplete — three things every great cold message should be. Don't try to close in the first message; try to earn the right to a second conversation.`,
      mistakes: [
        `Opening a phone call with "Hi, this is [Name] from [Company]" — it immediately signals a sales call and invites a hang-up.`,
        `Writing cold emails longer than 150 words — every additional sentence is additional resistance.`,
        `Failing to follow up after leaving the voicemail — the script creates curiosity, but follow-up converts it.`,
      ],
      stats: [
        `Hormozi's cold phone benchmark: 100 calls, 25 pickups, 4 engaged leads — the script is the lever that moves that 25-to-4 conversion rate.`,
        `A voicemail mentioning a competitor's name (without context) generates significantly more callbacks than a standard sales voicemail — it creates an open loop humans feel compelled to close.`,
        `Scripts and templates rarely exceed one to two pages for phone, half a page for email — brevity is a feature, not a limitation.`,
      ],
      cases: [
        `A Hormozi team using the competitor-reference voicemail saw callbacks that converted to inbound-feeling conversations — effectively flipping a cold call into a warm one.`,
        `An agency that cut its cold email from 300 words to 80 words and removed all company jargon saw reply rates increase from 1.8% to 5.4% on an identical list.`,
      ],
      gym: [
        { kind: `gym`, text: `When cold-calling rival gym owners' referral networks, leave a voicemail referencing the top gym in their market by name — "calling in reference to [big local gym]" — and track how many call back compared to your standard script.` },
        { kind: `gym`, text: `Keep your cold DM to area professionals (doctors, dentists, realtors) to two sentences: one specific compliment on their practice, one offer of a free week membership with no strings. Nothing more.` },
        { kind: `app`, text: `Cold-email gym owners with a subject line referencing their current software by name: "Question about [Mindbody/Glofox/etc.]" — opens rates spike because it's relevant and specific.` },
        { kind: `app`, text: `Build a competitor-reference voicemail script for every major rival your target gym owners use — personalize by region based on which software dominates that market.` },
      ],
      related: [`cold-personalization`, `cold-big-fast-value`, `cold-follow-up`],
      diagram: { type: `stack`, base: `Short (< 20 sec)`, items: [`+ Relevant`, `+ Open Loop`, `+ No company name`] },
    },
  ],
};
