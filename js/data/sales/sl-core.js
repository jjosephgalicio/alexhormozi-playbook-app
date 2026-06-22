export const MODULE = {
  id: `sl-core`,
  title: `The Core Sales Skills`,
  summary: `Four transferable skills: find the leverage, build value, keep it simple, and break the pattern.`,
  concepts: [
    {
      id: `sl-leverage`,
      title: `Find the Leverage (Pain Points)`,
      hook: `You can sell the same thing ten different ways — your job is to find the one that moves this person.`,
      principle: `In sales you can sell the same thing ten different ways. Take a fitness program. You can sell it to someone who wants to lose weight, to someone who wants to gain weight, to someone with an urgent health problem right now, and to someone who only wants prevention and overall health. It is one offer, but each buyer is driven by a completely different motivation. If you sell the same thing the same way to everyone, you only win the few people that one pitch happens to fit.

Shelby calls the thing that actually moves a buyer their leverage — and she defines leverage plainly as pain points. Your job is to identify the specific leverage for the person in front of you: what they specifically want, what motivates them to make a buying decision, and what will change their day-to-day life if they say yes. Once you find the leverage points, that is the problem. The solution is simply whatever you are selling them.`,
      why: `Generic pitches lose because they speak to an average buyer who does not exist. Two people can buy the identical product for opposite reasons, and the words that close one will fall flat on the other. When you name a person's actual pain — the thing keeping them stuck — they feel understood, and felt-understanding is what lowers resistance and opens a buying decision. The world is problem and solution; leverage is just you correctly locating the problem so your offer can land as the obvious solution.`,
      story: `Jay Shetty asks Shelby about the first core skill: knowing somebody's leverage. She explains that in sales you can sell the same thing ten different ways. Her example is a fitness offer she might close on. The exact same program, she says, sells to four totally different people: the person who wants to lose weight, the person who wants to gain weight, the person facing an urgent health problem right now, and the person who just wants prevention and overall health. If you try to sell the same thing the same way to all of them, she warns, you only get the specific people the leverage was already built for. So the job is to identify the specific leverage — and by leverage, she clarifies, she means pain points. Find what someone specifically wants and what will change their daily life, and you have found the problem. The solution, she says, is whatever you are selling them — and the same move works on a promotion, on rolling objections with your partner, on literally anything, because the world is problem and solution.`,
      apply: `A B2B software seller demos one project-management tool to four buyers in a week. To the overwhelmed ops lead, leverage is "stop drowning in status-update meetings." To the CFO, leverage is "see budget burn before it overruns." To the new VP trying to prove herself, leverage is "ship the launch on time and look like a hero." To the burned-out team, leverage is "stop working weekends." Same software, four problems. The rep who reads which pain is live and frames the demo around that one buyer's day-to-day closes; the rep who recites the same feature tour to all four closes only the lucky fit.`,
      examples: [
        `A car salesperson sells the same SUV as "keeps my kids safe" to a new parent and "tows the boat every summer" to a weekend angler.`,
        `A life-insurance agent sells one policy as "your kids finish college if you're gone" to a father and "your spouse keeps the house" to a newlywed.`,
        `A solar installer sells identical panels as "lock in your bill against rate hikes" to a retiree and "shrink your carbon footprint" to a young eco-buyer.`,
        `A bootcamp sells the same coding course as "escape a dead-end job" to a career-changer and "finally build my app idea" to a founder.`,
      ],
      actions: [
        `Before pitching, ask enough questions to name the single pain point that is actually driving this person right now.`,
        `Write three or four distinct leverage angles for your one offer — then choose the one that fits the buyer in front of you.`,
        `Frame your solution as the answer to their stated pain, using their words, not your feature list.`,
        `Notice when you are reusing the same pitch on everyone, and stop — segment buyers by motivation, not by demographic.`,
      ],
      coachNote: `Stop asking "what should I say about my product?" and start asking "what is keeping this specific person up at night?" Your offer almost never changes — your aim does. The closer who can hold one product and find four different doorways into it will outsell the one with the slickest single script every single time. Leverage is empathy with a purpose.`,
      mistakes: [
        `Delivering the same memorized pitch to every prospect and assuming the offer simply doesn't appeal to the ones who pass.`,
        `Guessing at someone's motivation instead of asking questions until the real pain point surfaces.`,
        `Leading with what you most love about the product rather than what this buyer most needs to change in their day-to-day life.`,
      ],
      stats: [
        `Cialdini's principle of liking shows people buy more readily from those who demonstrate genuine understanding of their situation — naming the right pain builds that bridge fast.`,
        `Loss aversion (Kahneman & Tversky, 1979) finds losses loom roughly twice as large as equivalent gains, so framing your offer against the pain a buyer is trying to escape is typically more motivating than the upside alone.`,
        `Sales research widely holds that discovery-led conversations outperform feature-led pitches — uncovering need before presenting is a repeated finding in studies of consultative selling.`,
      ],
      cases: [
        `Shelby closes one fitness offer across four opposing motivations — weight loss, weight gain, urgent health, and prevention — by matching the pitch to each buyer's pain point rather than reusing one script.`,
        `Dove's "Real Beauty" campaign sold the same soap and body products by speaking to self-acceptance rather than ingredients, reaching buyers that a feature-led "moisturizes better" pitch never moved.`,
      ],
      gym: [
        { kind: `gym`, text: `Train front-desk and sales staff to open every tour with discovery questions ("what made you walk in today?") so they sell the same membership as fat-loss to one prospect and stress-relief or strength to the next.` },
        { kind: `gym`, text: `Build three leverage scripts for one personal-training package — post-injury recovery, wedding deadline, and "keep up with my kids" — and have coaches pick the one that fits the lead in front of them.` },
        { kind: `app`, text: `In onboarding, ask the new user their primary goal (lose weight, build muscle, reduce stress, prep for an event) and tailor the very first screen, plan, and notification copy to that exact leverage point.` },
        { kind: `app`, text: `Segment your re-engagement emails by the pain point each lapsed subscriber originally signed up for, so a marathon-trainer and a stress-reliever each get a message that speaks to their reason.` },
      ],
      related: [`sl-build-value`, `sl-question-selling`, `sl-price-vs-cost`],
      diagram: {
        type: `branch`,
        center: `Same offer`,
        items: [`Lose weight`, `Gain weight`, `Health scare`, `Prevention`],
      },
    },
    {
      id: `sl-build-value`,
      title: `Sell the Sizzle, Not the Steak`,
      hook: `Nobody cares what you're selling — they care what it does for them on a day-to-day basis.`,
      principle: `Skill two is building value, and Shelby's shorthand is "sell the sizzle, not the steak." Nobody cares about the thing itself. They do not care about the color, the engraving, the spec sheet, or how clever the mechanism is. They care about what it does for them on a day-to-day basis. Value is what you create when you take a person's pain points — what they want solved — and present your solution not as a recitation of what is included, but as the transformation it produces in their life.

People do not buy what something is; they buy who they become and what changes for them. So your job is to extrapolate from the object to the outcome the person actually cares about, and then let them feel the size of that outcome before you ever talk price. The product is just the vehicle. The transformation is the sale.`,
      why: `Features describe the seller's world; transformation lives in the buyer's world, and buyers act on their own world. A list of inclusions forces the prospect to do the mental work of translating "what it is" into "what it means for me," and most people will not finish that translation on their own. When you do the translation for them — painting the specific moment their life gets better — you make the value vivid and emotionally real, and decisions are made on emotion and justified with logic. Sizzle is simply you handing the buyer the meaning instead of the manual.`,
      story: `Jay hands Shelby a pen and asks her to sell it. She never once sells the pen itself — not the all-black monochrome look, not the signature engraving, not "it'll look nice on your desk." Nobody, she says, cares about your pen. Instead she digs for leverage by asking what he does for work, learns he rarely uses a pen because everything is on a laptop and DocuSign, and then builds the moment: someone calls with amazing, tangible, million-dollar advice for his next book, and he reaches over for a pen — but it is a chewed-on 50-cent Sharpie from the bottom of a backpack. How does it feel writing down million-dollar advice with that? She sells the leverage of insurance and peace of mind: "you don't need a pen until you need a pen," and when that one person calls, this pen is always right there so you are never frantic. Earlier she did the same with a cup of tea — she did not sell caffeine, she sold "showing up as your best self," then asked what that would be worth. People, she says, do not buy what it is; they buy the transformation.`,
      apply: `A mattress brand stops listing coil counts and foam densities. Instead the salesperson says: "Picture Monday — you wake up before the alarm, no aching lower back, and for the first time in months you actually want to get out of bed. That's what eight hours of real sleep does to your whole week." Then, "what would a year of mornings like that be worth?" The coils still matter, but they are now proof of a transformation the buyer can feel, not a spec the buyer has to decode.`,
      examples: [
        `A gym sells "fitting into the dress at your reunion and feeling unstoppable," not "45-minute HIIT classes and a squat rack."`,
        `A financial advisor sells "retiring without ever checking your bank balance in fear," not "a diversified 60/40 portfolio."`,
        `A meal-kit service sells "calm family dinners instead of the 6pm what's-for-dinner panic," not "pre-portioned ingredients."`,
        `A camera brand sells "never miss your kid's first steps again," not "a 24-megapixel sensor with fast autofocus."`,
      ],
      actions: [
        `For every feature you'd normally list, write the "so that..." transformation it creates in the buyer's daily life — and lead with that.`,
        `Paint one specific future moment where the buyer's life is visibly better because they own your solution.`,
        `Ask "what would that be worth to you?" to let the buyer attach value before you name a price.`,
        `Cut any line from your pitch that describes the product instead of describing the buyer's changed life.`,
      ],
      coachNote: `Whenever you catch yourself describing what your thing is — its parts, its process, its prestige — stop and ask the only question that matters to the buyer: so what? So what does that do for them on Tuesday morning? The steak is your product. The sizzle is the version of their life that your product makes possible. Sell the second one, and the first one comes along for free.`,
      mistakes: [
        `Reciting everything that's included or how the product works, forcing the buyer to translate features into personal benefit themselves.`,
        `Falling in love with your product's cleverness and assuming the buyer shares your fascination with the mechanism.`,
        `Naming a price before the buyer has felt the size of the transformation, so the number lands against nothing.`,
      ],
      stats: [
        `Decision research (Damasio; Kahneman) consistently shows emotion drives choice and reason justifies it afterward — transformation language reaches the emotional driver that feature lists miss.`,
        `Classic marketing teaching frames it as Theodore Levitt's line that people don't want a quarter-inch drill, they want a quarter-inch hole — buyers purchase the outcome, not the object.`,
        `Studies of vivid, concrete messaging find specific imagined scenarios are more persuasive and memorable than abstract attribute lists, supporting Shelby's "paint the moment" approach.`,
      ],
      cases: [
        `Shelby sells a pen by selling peace-of-mind insurance for the moment million-dollar advice arrives — and a cup of tea by selling "showing up as your best self," never the caffeine.`,
        `Apple's "1,000 songs in your pocket" sold the iPod's transformation rather than its "5GB hard drive," and outsold spec-sheet MP3 players that listed gigabytes.`,
      ],
      gym: [
        { kind: `gym`, text: `Coach your sales team to sell "the energy to chase your kids and the confidence to wear what you want," not "treadmills, a sauna, and 24-hour access."` },
        { kind: `gym`, text: `When pitching personal training, walk the prospect through a specific future moment — keeping pace on the family hike next summer — then ask what that would be worth before quoting the package.` },
        { kind: `app`, text: `Replace feature-list screenshots in your app-store listing with transformation copy: "wake up stronger" beats "1,200 video exercises and a rep counter."` },
        { kind: `app`, text: `In push notifications, lead with the outcome ("you're three workouts from your strongest month ever") rather than the activity ("you have a workout scheduled").` },
      ],
      related: [`sl-leverage`, `sl-pitch-price`, `sl-price-vs-cost`],
      diagram: {
        type: `compare`,
        left: `The steak`,
        leftSub: `features`,
        right: `The sizzle`,
        rightSub: `transformation`,
        hl: `right`,
      },
    },
    {
      id: `sl-keep-it-simple`,
      title: `Keep It Simple — Then Ask`,
      hook: `People don't say no because they don't want it — they say no because you weren't clear.`,
      principle: `Skill three is the KISS method: Keep It Simple, Stupid. Shelby says life gets so much better when you realize people often do not say no because they do not want what you have. They say no because you were not clear. So make your ask so clear that the person knows exactly what happens the moment they hand over their credit card, exactly what they get when you give them the promotion, exactly what changes when you hand them the job. Clarity removes the no, because confusion always defaults to "let me think about it."

Skill four is the simplest and the one people skip: just ask. "I created a career off of being annoying," Shelby says. To sell, to grow a business, to grow content, you have to be a little annoying, a little pushy, a little delusional. The people who step out of the box and accept that are the ones who get put in rooms they did not think they deserved — and the plot twist is that they do deserve it, because they asked. Do not overcomplicate the process. It is just problem and solution.`,
      why: `A confused mind says no. Every ambiguity in an offer — what exactly do I get, what happens next, when does it start — is a small risk the buyer's brain flags, and unresolved risk feels safest to decline. Clarity dissolves that risk so the decision becomes a clean yes-or-no instead of a foggy maybe. And the ask works because most people never make a direct one; the awkward, slightly-annoying willingness to actually request the sale, the raise, or the introduction is rare, and rarity gets noticed and rewarded. You miss every shot you do not take.`,
      story: `Walking Jay through the four skills, Shelby lands on the third, which she calls the KISS method — keeping it simple, stupid. Life will get so much better, she tells him, once you understand that people do not say no because they do not want it or do not want you around. They say no because you were not clear. Make your ask clear, she says, so that someone knows exactly what happens when they hand over their credit card, exactly what happens when you give this person the promotion, exactly what happens when you give this person the job — "I know exactly what's going to happen." You give them clarity. Then the fourth thing, she says, is just ask. You never get anything done if you don't ask for it. And she laughs: "I created a career off of being annoying." Selling, growing a business, growing content — you have to be a little annoying, a little pushy, a little delusional. The people who step out of the box and accept that are the ones who get put in rooms they did not think they deserved. The plot twist, she says, is you do deserve it, because you asked for it.`,
      apply: `A freelancer who keeps losing proposals rewrites them to be brutally clear: "You pay $4,000 today. Within 48 hours I send the contract and a kickoff call invite. In two weeks you receive the finished site, plus two rounds of edits. Here's the payment link." No vague "let's see where this goes." Then, instead of waiting and hoping, she ends every call with the direct ask: "Want me to send the link now so we can start Monday?" Clarity strips out the hesitation, and the explicit ask forces a real decision instead of a polite drift into silence.`,
      examples: [
        `A SaaS checkout that states "you're billed $29 today, cancel anytime in one click" converts better than a vague "start your journey."`,
        `An employee who says "I'd like a raise to $X, effective next quarter — what do you need from me to say yes?" outperforms one who hints at feeling underpaid.`,
        `A nonprofit that asks "donate $25 today to fund one child's meals for a month" raises more than "support our mission."`,
        `A contractor who writes a one-line scope and a fixed price wins over one who buries the deliverable in jargon.`,
      ],
      actions: [
        `Rewrite your offer in one sentence a twelve-year-old could repeat back to you correctly.`,
        `Spell out exactly what happens step by step after the buyer says yes, so there is zero ambiguity about the next moment.`,
        `End every conversation with a direct, specific ask — and then stay silent and let them answer.`,
        `Get comfortable being a little annoying: follow up, ask again, and request the things most people are too timid to request.`,
      ],
      coachNote: `Most lost deals are not rejections — they are confusions wearing the costume of a no. Before you assume someone doesn't want what you offer, ask whether you ever made it crystal clear what they get and what happens next. Then ask whether you actually asked at all. Clarity plus a direct ask will close more than charisma ever will. Being slightly annoying is the tax you pay for the rooms you want to be in.`,
      mistakes: [
        `Assuming a no means disinterest, when often it means the buyer never clearly understood what they'd get or what happens next.`,
        `Overcomplicating the offer with options, caveats, and jargon until the prospect retreats to a safe "let me think about it."`,
        `Building all the value and then never actually making a direct ask, leaving the decision to drift into silence.`,
      ],
      stats: [
        `Research on choice overload (Iyengar & Lepper's jam study) shows that more options can reduce the likelihood of any purchase — simplicity often beats abundance at the point of decision.`,
        `It is a widely repeated sales heuristic that many deals close only after several follow-ups, while a lot of reps stop after the first attempt — the persistent, repeated ask is where much of the business actually gets done.`,
        `Cognitive-fluency studies find that information which is easy to process is judged more favorably and trusted more — clearer offers literally feel more credible.`,
      ],
      cases: [
        `Shelby attributes her sales career to being willing to be "annoying" — to make the clear, direct ask most people avoid — and credits clarity with removing the no.`,
        `Dropbox's early growth came from one unmistakably clear offer — "get more free space when your friend signs up" — that anyone could understand and act on in seconds, fueling viral referrals.`,
      ],
      gym: [
        { kind: `gym`, text: `Replace a confusing tiered price wall with one clear membership and a one-sentence ask: "$99 a month, start today, cancel anytime — want me to get you signed up right now?"` },
        { kind: `gym`, text: `Train coaches to actually ask for the sale and the referral out loud at the end of a session, instead of hoping the member brings it up themselves.` },
        { kind: `app`, text: `Make the subscription screen state exactly what happens — "you're billed $79 today, your 12-week plan unlocks instantly, cancel in two taps" — so confusion never triggers the no.` },
        { kind: `app`, text: `Use a single, direct in-app prompt at the right moment ("ready to start week one? tap to begin") rather than a cluttered menu of choices that stalls the decision.` },
      ],
      related: [`sl-pitch-price`, `sl-confidence-from-action`, `sl-solidify-sale`],
      diagram: {
        type: `flow`,
        labels: [`Be clear`, `Make the ask`, `Yes`],
        hl: 1,
      },
    },
    {
      id: `sl-pattern-interrupt`,
      title: `Be the Pattern Interrupt`,
      hook: `99% of salespeople sound the same, so they get the same result — denied.`,
      principle: `A pattern interrupt is someone who breaks the pattern. In sales, Shelby says, 99% of salespeople sound exactly the same — like robots running the same cringy, scripted pitch — so they all get the same result: denied. If you want a different result than every other rep who gets turned away, you have to do something different. You break the pattern of the pitch people brace themselves to hear.

The same law runs through life. To stand out, you have to be different and do different things than everybody else. And the cleanest version of the interrupt is sometimes not selling at all when selling is exactly what is expected. People expect you to start pitching; the move is to not do that — to open with curiosity, a conversation, or something genuinely unexpected. Sometimes the best selling is not immediately selling.`,
      why: `Brains tune out the expected and snap to attention at the unexpected — that orienting response is wired in. When every salesperson sounds identical, the buyer's defenses are already up before you speak, and sameness gets filtered as noise. Breaking the pattern resets attention and disarms the rehearsed objection, because the script the buyer was about to run no longer applies. Difference is also a credibility signal: doing the harder, more specific, more expert thing reads as competence, which is why a genuinely different approach earns attention that volume alone never buys.`,
      story: `Shelby tells Jay that to stand out you need to be a pattern interrupt — someone who breaks the pattern — because 99% of salespeople sound the same, like robots, and so they get denied like everybody else. She ties it to Jay's friend who built a following with only around six thousand people but gets introduced around rooms anyway: his videos were genuinely different, very specific, deeply researched, and expert-level, so people in that niche pay attention even without a big following — because he is actually good at what he talks about. Then she demonstrates it live. Handed a pen and the classic "sell me this pen," she does the opposite of what everyone expects. She gathers up all of Jay's pens, even from the other room, leaving him with none — then offers him a game of tic-tac-toe with a $5 entry fee for a $100 upside, where the $5 simply buys back one of his own pens. It is a joke, she says, and obviously not how you really sell a pen — but it is a true pattern interrupt. Everybody expects you to start praising the pen; the whole trick is that not doing that is the move.`,
      apply: `A cold-email rep watches every competitor open with "Hi {FirstName}, I hope this email finds you well — I wanted to tell you about our platform." Buyers delete those on sight. So she breaks the pattern: her first line is a single specific observation about the prospect's own product — a bug she found, a metric she noticed slipping — and no pitch at all, just "thought you'd want to know." The unexpected helpfulness stops the scroll, earns a reply, and only then does a conversation about her solution begin. Same product as her competitors; a completely different, attention-resetting entry.`,
      examples: [
        `A car salesperson who opens with "honestly, this might not be the right car for you — what are you actually trying to solve?" disarms a buyer braced for a hard sell.`,
        `A job applicant who sends a short Loom auditing the company's onboarding flow stands out from 300 identical résumés.`,
        `A restaurant that answers the phone with a real, funny human instead of a hold menu gets remembered and talked about.`,
        `A B2B founder who shares a free teardown of a prospect's funnel earns the meeting that ten "quick intro" emails could not.`,
      ],
      actions: [
        `Listen to how every competitor opens — then deliberately do the opposite of the expected first move.`,
        `Lead with a conversation, a question, or genuine help instead of an immediate pitch.`,
        `Make your approach more specific and expert than anyone else's, so difference reads as competence.`,
        `Audit your own outreach for robotic, scripted lines and rewrite the ones that sound like everybody else.`,
      ],
      coachNote: `If you sound like every other rep, you have already lost — the buyer pattern-matched you to "salesperson" before you finished your first sentence and put the wall up. The fastest way to win attention is to refuse to be the thing they were bracing for. Be specific, be genuinely useful, and when everyone expects a pitch, sometimes the most powerful move is to not pitch at all. Different is not a risk here. Sounding the same is the risk.`,
      mistakes: [
        `Running the same robotic, scripted opener as every other salesperson and then blaming the buyer for the predictable no.`,
        `Jumping straight into the pitch when the buyer is braced for exactly that, instead of opening with a conversation or genuine help.`,
        `Mistaking loud or gimmicky for different — a true pattern interrupt is grounded in real expertise and specificity, not noise.`,
      ],
      stats: [
        `The orienting response, documented in attention research, shows novel or unexpected stimuli automatically capture attention while repeated, predictable input gets habituated and ignored.`,
        `The Von Restorff (isolation) effect finds that an item which stands out from a uniform set is far more likely to be remembered — being the different rep makes you memorable.`,
        `Marketing research on banner blindness and email fatigue shows audiences learn to filter out formats they recognize as sales — pattern-matched pitches get tuned out before they're read.`,
      ],
      cases: [
        `Shelby's "sell me this pen" answer breaks the pattern entirely: instead of praising the pen, she collects every pen in the room and turns it into a $5-entry tic-tac-toe game — a deliberate interrupt because nobody expects you not to pitch the pen.`,
        `Jay's friend with roughly six thousand followers gets introduced around rooms because his content is genuinely different, specific, and expert — proof that breaking the pattern beats raw audience size.`,
      ],
      gym: [
        { kind: `gym`, text: `Instead of the standard "want to sign up today?" tour, open with "let's just figure out if this is even right for you" — the unexpected honesty disarms a prospect braced for a hard sell.` },
        { kind: `gym`, text: `Stand out from every "first month free" gym by offering something genuinely different — a free movement assessment with a real coach — so prospects remember you among identical flyers.` },
        { kind: `app`, text: `Break the pattern of generic "start your free trial" onboarding by leading with a personalized 60-second assessment that tells the user something surprising about themselves first.` },
        { kind: `app`, text: `Make your push notifications a pattern interrupt — a specific, human, slightly unexpected line instead of the same "don't forget to work out!" that every fitness app sends and users mute.` },
      ],
      related: [`sl-build-value`, `sl-keep-it-simple`, `sl-emotional-leadership`],
      diagram: {
        type: `compare`,
        left: `Every rep`,
        leftSub: `sounds same`,
        right: `You`,
        rightSub: `break pattern`,
        hl: `right`,
      },
    },
  ],
};
