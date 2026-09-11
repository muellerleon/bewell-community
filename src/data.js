// Content model for the BeWell Community portal.
// Photos live in /public/photos and are credited on the /credits page.

const photo = (id) => `${import.meta.env.BASE_URL}photos/${id}.jpg`

export const categories = [
  {
    id: 'wellness',
    name: 'Wellness & mindfulness',
    short: 'Group meditation',
    photo: photo('cat_meditation'),
    banner: photo('cat_meditation'),
    tagline: 'Quiet, breath and a bit of structure',
    intro:
      'Practices that give the day a shape: breathing, sitting still, sleeping better. Most groups run weekly, take complete beginners, and ask nothing of you beyond turning up.',
    expect: [
      ['No experience assumed', 'Every group listed here is built for people who have never done it before.'],
      ['Nothing to buy', 'Mats, cushions and props are provided. Come in whatever you can move in.'],
      ['Small rooms', 'Typically eight to sixteen people, so the teacher knows your name by week two.'],
      ['No sharing circle', 'You will not be asked to talk about your feelings unless you want to.'],
    ],
  },
  {
    id: 'arts',
    name: 'Arts & creativity',
    short: 'Pottery',
    photo: photo('cat_pottery'),
    banner: photo('x_pottery_wheel'),
    tagline: 'Play is a side of us we neglect',
    intro:
      'Arts & Creativity covers a variety of activities that make use of a side of us we sometimes neglect: play. There is no audience, no grading, and nobody in the room has done it before either.',
    expect: [
      ['Beginners by default', 'Every group listed here takes complete beginners, and most people arrive on their own.'],
      ['Materials included', 'Clay, paint, film and firing costs are covered by the group fee — nothing to buy up front.'],
      ['Small groups', 'Typically eight to twelve people, so you are known by name by the second session.'],
      ['Nothing on show', 'No exhibition, no performance, no sharing at the end unless you want to.'],
    ],
  },
  {
    id: 'music-dance',
    name: 'Music & dance',
    short: 'Dance',
    photo: photo('cat_dance'),
    banner: photo('cat_dance'),
    tagline: 'Moving to something, with somebody',
    intro:
      'Dancing and playing put you in a room with other people without requiring you to make conversation. That turns out to be the easiest way back into company.',
    expect: [
      ['Come without a partner', 'Partner dances rotate, so arriving alone is the normal way to arrive.'],
      ['No performance', 'Social groups only — there is no showcase at the end of the term.'],
      ['Instruments provided', 'For the music sessions, spares are available if you do not own one.'],
      ['Stay for a drink', 'Most groups end in a pub or a kitchen. That is usually the point.'],
    ],
  },
  {
    id: 'giving',
    name: 'Volunteering & charity',
    short: 'Giving back',
    photo: photo('cat_giving'),
    banner: photo('feat_volunteer'),
    tagline: 'A few hours that are clearly useful',
    intro:
      'The fastest route out of your own head is a morning where somebody else needs the help. These are short, well-organised shifts with other people, not open-ended commitments.',
    expect: [
      ['A few hours, not a lifetime', 'Most shifts are two to four hours, and you choose the dates.'],
      ['Training on the day', 'Everything you need to know takes ten minutes at the start of the shift.'],
      ['You go with a group', 'We can put you on a shift alongside other BeWell members if you would rather not arrive alone.'],
      ['It counts', 'Many employers give paid volunteering days — your concierge can check whether yours does.'],
    ],
  },
  {
    id: 'movement',
    name: 'Movement & recreation',
    short: 'Movement outdoors',
    photo: photo('x_hike2'),
    banner: photo('feat_walk'),
    tagline: 'Exercise that is really a conversation',
    intro:
      'Walking, swimming and running groups where the pace is set by the slowest person and nobody is training for anything. The exercise is a side effect.',
    expect: [
      ['No pace requirement', 'Every group here is explicitly no-drop — somebody always stays at the back with you.'],
      ['Bring nothing special', 'Trainers and a coat. Kit lists are a way of keeping people out.'],
      ['Weather happens', 'Groups run in the rain, and stop for coffee afterwards regardless.'],
      ['Your body, your business', 'Nobody asks about weight, times or goals unless you raise it.'],
    ],
  },
  {
    id: 'local',
    name: 'Local events & discussion',
    short: 'Group discussion',
    photo: photo('cat_discussion'),
    banner: photo('cat_discussion'),
    tagline: 'Rooms where people actually talk',
    intro:
      'Book clubs, discussion evenings and neighbourhood groups. Structured conversation is much easier than unstructured conversation, which is why these work.',
    expect: [
      ['Structure helps', 'There is always a topic, a book or a task, so nobody has to make small talk.'],
      ['Turn up late, leave early', 'Drop-in groups. Missing a month does not mean losing your place.'],
      ['Free or nearly free', 'Most run in libraries and community rooms at no cost.'],
      ['Nobody is an expert', 'Half the room has not finished the book either.'],
    ],
  },
]

export const activities = [
  // ---- Wellness & mindfulness ----
  {
    id: 'calm-mornings',
    title: 'Make your mornings calmer',
    category: 'wellness',
    photo: photo('feat_meditation'),
    meta: '8 weeks · Tuesday & Thursday, 7am',
    featured: true,
    summary: 'A 20-minute guided breath and grounding session to start the day steady.',
    overview: [
      'Twenty minutes, early, before the day has had a chance to make demands of you. A facilitator talks you through a breathing pattern and a short body scan, and then everybody goes to work.',
      'It is deliberately small and deliberately boring. People come because a fixed appointment with other people is far easier to keep than a promise to yourself.',
    ],
    details: { when: 'Tuesdays & Thursdays, 7.00–7.20am', where: 'Community room, Back Bay · also runs online', cost: 'Free to members', size: 'Around 12 people' },
  },
  {
    id: 'guided-meditation',
    title: 'Guided meditation',
    category: 'wellness',
    photo: photo('cat_meditation'),
    meta: 'Weekly · 6 week blocks',
    summary: 'A teacher, a room full of mats, and nothing at all to achieve for an hour.',
    overview: [
      'A weekly hour of guided practice, running in six-week blocks so there is a natural point to stop if it is not for you.',
      'The teacher gives you something to do with your attention the whole way through, which is what makes it manageable for people who have tried meditating alone and found it unbearable.',
    ],
    details: { when: 'Wednesdays, 6.30–7.30pm', where: 'Wellbeing studio, Cambridge', cost: '$8 a session, waived on request', size: 'Up to 16 people' },
  },
  {
    id: 'sound-bath',
    title: 'Sound bath evenings',
    category: 'wellness',
    photo: photo('x_med_room'),
    meta: 'Monthly · 75 minutes',
    summary: 'You lie on the floor under a blanket while somebody else does the work.',
    overview: [
      'Seventy-five minutes lying down while bowls and chimes are played around the room. There is no technique to learn and nothing to get right.',
      'It is the lowest-effort thing on this list, which makes it a reasonable first outing if the idea of a class feels like too much.',
    ],
    details: { when: 'First Thursday of the month, 7.30pm', where: 'The old library hall, Somerville', cost: '$12', size: 'Up to 25 people' },
  },
  {
    id: 'wellness-retreat',
    title: 'Find a wellness retreat',
    category: 'wellness',
    photo: photo('x_med_water'),
    banner: photo('x_med_water'),
    meta: '2–7 nights · from $320',
    summary: 'A few days away, with people who are doing the same thing you are.',
    overview: [
      'Wellness retreats help people find their way back to some inner joy and balance — and they come in many flavours. Some are silent and structured. Some are mostly walking, cooking and sleeping. What they share is a few days where nothing is being asked of you.',
      'You do not have to know which one you want. Tell a concierge roughly what you are looking for and they will come back with two or three options that fit your budget, your dates and how far you are willing to travel.',
    ],
    included: [
      ['A concierge match', 'One call, then two or three retreats chosen around your budget, dates and travel distance.'],
      ['Booking support', 'We handle the enquiry, the waitlist and the paperwork with the retreat provider.'],
      ['A check-in afterwards', 'A short follow-up call to talk about what to keep doing once you are home.'],
      ['Confidentiality', 'Your employer never sees that you enquired, attended, or what you talked about.'],
    ],
    details: { when: '38 dates across the year', where: 'New England, upstate New York and further afield', cost: 'From $320 for a weekend', size: 'Varies by retreat' },
  },

  // ---- Arts & creativity ----
  {
    id: 'pottery-day',
    title: 'Become a potter for a day',
    category: 'arts',
    photo: photo('feat_pottery'),
    meta: 'One-off · 5 hours',
    featured: true,
    summary: 'Hands in clay, phone away. A beginner wheel class with a small group.',
    overview: [
      'Five hours in a shared studio with six other people and a very patient technician. You will centre clay badly, then less badly, and go home with two pots that are yours.',
      'Everything is included, including the firing and getting the finished pieces back to you a few weeks later.',
    ],
    details: { when: 'Saturdays, 10am–3pm', where: 'Shared studio, Union Square', cost: '$65 including materials and firing', size: '7 people' },
  },
  {
    id: 'wheel-throwing',
    title: 'Beginner wheel throwing',
    category: 'arts',
    photo: photo('x_pottery_hands'),
    meta: '8 weeks · Tuesday evenings',
    summary: 'Tuesday evenings in a shared studio. Clay, tools and firing included.',
    overview: [
      'Eight consecutive Tuesdays on the same wheel, with the same group, learning one thing a week. By the end you can throw a cylinder that holds water.',
      'The eight-week shape matters: it is long enough that people learn each other\'s names and short enough that it does not feel like a commitment.',
    ],
    details: { when: 'Tuesdays, 6.30–8.30pm', where: 'Shared studio, Union Square', cost: '$240 for the block', size: '10 people' },
  },
  {
    id: 'hand-building',
    title: 'Hand-building with clay',
    category: 'arts',
    photo: photo('x_pottery_bowl'),
    meta: '6 weeks · Thursday evenings',
    summary: 'No wheel, no speed. Pinch, coil and slab, at whatever pace suits you.',
    overview: [
      'Hand-building is the gentler half of ceramics: you make things slowly, with your fingers, and you can talk the whole time you are doing it.',
      'It suits people who want the studio and the company but not the mild panic of a spinning wheel.',
    ],
    details: { when: 'Thursdays, 6.30–8.30pm', where: 'Shared studio, Union Square', cost: '$180 for the block', size: '12 people' },
  },
  {
    id: 'glaze-paint',
    title: 'Glaze and paint evenings',
    category: 'arts',
    photo: photo('x_pottery_cups'),
    meta: 'Drop-in · monthly',
    summary: 'Bring something plain, leave with something that is definitely yours.',
    overview: [
      'A drop-in evening for decorating: bisque-fired mugs and bowls, a wall of glazes, and no deadline.',
      'Because it is drop-in, it is the easiest thing here to try once without committing to a block of weeks.',
    ],
    details: { when: 'Last Wednesday of the month, 6–9pm', where: 'Shared studio, Union Square', cost: '$25 including the piece', size: 'Up to 20 people' },
  },
  {
    id: 'craft-circle',
    title: 'Knit, mend and talk',
    category: 'arts',
    photo: photo('x_pottery_table'),
    meta: 'Weekly · drop-in',
    summary: 'Bring whatever you are making. Mostly it is an excuse to sit together.',
    overview: [
      'A table, a pot of tea, and whatever you have half-finished in a bag at home. Somebody always knows how to fix the thing you have got wrong.',
      'It is the most forgiving group on this list — people come every week for a year, or twice, and both are normal.',
    ],
    details: { when: 'Mondays, 6–8pm', where: 'Community room, Jamaica Plain', cost: 'Free', size: 'Whoever turns up' },
  },
  {
    id: 'studio-evenings',
    title: 'Studio open evenings',
    category: 'arts',
    photo: photo('cat_pottery'),
    meta: 'Drop-in · Friday nights',
    summary: 'The studio, open late, with a technician on hand and nothing scheduled.',
    overview: [
      'Once you have done a block of classes, Friday evenings are yours: the studio is open, the kilns are running, and somebody is there if you get stuck.',
      'Most people come with somebody they met in a class, which is the honest reason it is on this list.',
    ],
    details: { when: 'Fridays, 6–10pm', where: 'Shared studio, Union Square', cost: '$15 a session', size: 'Unlimited' },
  },

  // ---- Music & dance ----
  {
    id: 'salsa',
    title: 'Beginner salsa nights',
    category: 'music-dance',
    photo: photo('cat_dance'),
    meta: 'Weekly · 8 week blocks',
    summary: 'An hour of teaching, an hour of dancing, and a rotating partner.',
    overview: [
      'The first hour is a class where everybody rotates partners every few minutes, so you dance with the whole room and nobody is left standing.',
      'The second hour is a social where you can stay or leave. About half the room leaves. Nobody minds.',
    ],
    details: { when: 'Thursdays, 7.30–9.30pm', where: 'Dance hall, Central Square', cost: '$15 a night', size: '30–50 people' },
  },
  {
    id: 'ballroom',
    title: 'Ballroom, two left feet welcome',
    category: 'music-dance',
    photo: photo('x_dance2'),
    meta: '6 weeks · Sunday afternoons',
    summary: 'Slow, structured and forgiving. Come alone or bring somebody.',
    overview: [
      'Six Sunday afternoons learning three dances badly and then slightly less badly, in a bright room with a teacher who has seen far worse than you.',
      'It skews older and it is friendlier for it. Several couples come to have one hour a week that is not about logistics.',
    ],
    details: { when: 'Sundays, 3–4.30pm', where: 'Parish hall, Brookline', cost: '$90 for the block', size: '20 people' },
  },
  {
    id: 'partner-dancing',
    title: 'Partner dancing for beginners',
    category: 'music-dance',
    photo: photo('x_dance3'),
    meta: 'Drop-in · Friday evenings',
    summary: 'One dance, one hour, one evening. The lowest-commitment way in.',
    overview: [
      'A single drop-in hour teaching one dance from nothing. You will not be good at it, and that is the entire premise of the evening.',
      'People use it as a first try before signing up to a block of anything.',
    ],
    details: { when: 'Fridays, 7–8pm', where: 'Dance hall, Central Square', cost: '$10', size: 'Up to 40 people' },
  },
  {
    id: 'live-music',
    title: 'Live music social',
    category: 'music-dance',
    photo: photo('x_music'),
    meta: 'Monthly · Sunday afternoons',
    summary: 'Local players, an open circle, and spare instruments for anybody who asks.',
    overview: [
      'An afternoon session where local musicians play and anybody who wants to join in can. There are spare instruments, and a corner for people who would rather just listen.',
      'It is genuinely fine to sit at the edge with a coffee for the first few months. Several of the regulars started that way.',
    ],
    details: { when: 'Second Sunday of the month, 2–5pm', where: 'The bandstand, Jamaica Pond (indoors in winter)', cost: 'Free', size: '20–60 people' },
  },

  // ---- Volunteering & charity ----
  {
    id: 'food-bank',
    title: 'Give a morning to a food bank',
    category: 'giving',
    photo: photo('feat_volunteer'),
    meta: 'One-off · 3 hour shifts',
    featured: true,
    summary: 'Two hours, good company and a very clear sense of having helped.',
    overview: [
      'You sort, pack and check dates alongside eight or ten other people, and at the end of the morning there is a visible pile of work that was not there before.',
      'Shifts are booked individually, so you can do one and never come back, or one a month for years. Both are useful.',
    ],
    details: { when: 'Saturdays, 9am–12pm', where: 'Regional food bank, Roxbury', cost: 'Free', size: '8–12 volunteers per shift' },
  },
  {
    id: 'green-days',
    title: 'Neighbourhood green days',
    category: 'giving',
    photo: photo('cat_giving'),
    meta: 'Monthly · Saturday mornings',
    summary: 'Planting, clearing and painting, with a coffee van and a lot of chat.',
    overview: [
      'A monthly morning working on a local park or square: planting, clearing, painting railings. Tools and gloves are provided and somebody always brings pastries.',
      'It is the most sociable volunteering on this list because the work is easy enough to talk over.',
    ],
    details: { when: 'Third Saturday of the month, 10am–1pm', where: 'Varies — parks across the city', cost: 'Free', size: '15–30 people' },
  },
  {
    id: 'garden',
    title: 'Community garden mornings',
    category: 'giving',
    photo: photo('x_garden'),
    meta: 'Weekly · all seasons',
    summary: 'A plot, a shared shed, and people who will teach you what a weed is.',
    overview: [
      'Weekly mornings on a shared plot. The garden needs the same things doing every week, which means there is always a job for whoever turns up.',
      'It is slow, outdoors and quietly companionable, and it runs right through the winter.',
    ],
    details: { when: 'Saturdays, 9.30am–12pm', where: 'Community garden, Dorchester', cost: 'Free', size: '10–20 people' },
  },

  // ---- Movement & recreation ----
  {
    id: 'saturday-walk',
    title: 'Walk and talk on Saturdays',
    category: 'movement',
    photo: photo('feat_walk'),
    meta: 'Weekly · 5km · no-drop',
    featured: true,
    summary: 'A 5km social walk with a facilitator, at whatever pace you bring.',
    overview: [
      'Five kilometres at conversation pace with a facilitator who makes sure nobody ends up walking alone unless they want to.',
      'Walking side by side turns out to be much easier than sitting across a table from somebody, which is why this is the group we most often suggest first.',
    ],
    details: { when: 'Saturdays, 9.30am', where: 'Meets at the Arnold Arboretum gate', cost: 'Free', size: '10–25 people' },
  },
  {
    id: 'tuesday-swim',
    title: 'Swim with the Tuesday group',
    category: 'movement',
    photo: photo('feat_swim'),
    meta: 'Weekly · warm pool',
    featured: true,
    summary: 'A warm pool, a reserved lane, and coffee afterwards without fail.',
    overview: [
      'A reserved hour in a warm pool with a group that has been swimming together for years and absorbs new people without ceremony.',
      'Nobody counts lengths. The coffee afterwards is, by unanimous agreement, the important part.',
    ],
    details: { when: 'Tuesdays, 11am–12pm', where: 'Municipal pool, Allston', cost: '$6 pool entry', size: '12–18 people' },
  },
  {
    id: 'couch-5k',
    title: 'Couch to 5k, together',
    category: 'movement',
    photo: photo('x_run'),
    meta: '9 weeks · twice weekly',
    summary: 'Nine weeks from standing still to running 5km, in a group that waits.',
    overview: [
      'The standard nine-week programme, run twice a week with a leader and a strict no-drop rule: the group finishes together or it does not finish.',
      'Roughly four in five people who start it finish it, which is considerably better than doing it alone with an app.',
    ],
    details: { when: 'Mondays & Thursdays, 6.30pm', where: 'Meets at Castle Island car park', cost: 'Free', size: '15–20 people' },
  },
  {
    id: 'trail-days',
    title: 'Trail days',
    category: 'movement',
    photo: photo('x_hike2'),
    meta: 'Monthly · full day',
    summary: 'A day out of the city with a packed lunch and eight to twelve others.',
    overview: [
      'A monthly day hike with a leader who has walked the route before. Transport is arranged from a central meeting point, so it works without a car.',
      'Long days in company do something that an hour in a room cannot. Most people arrive at the first one on their own.',
    ],
    details: { when: 'Last Sunday of the month, 8am–5pm', where: 'Meets at South Station', cost: '$20 towards transport', size: '8–12 people' },
  },
  {
    id: 'lane-swimming',
    title: 'Lane swimming for beginners',
    category: 'movement',
    photo: photo('x_swim'),
    meta: '6 weeks · adult beginners',
    summary: 'For adults who never learned properly, taught without any of the fuss.',
    overview: [
      'Six weeks of adult beginner teaching in a quiet pool, in a session reserved so that nobody else is watching.',
      'A surprising number of people get to forty without being able to swim a length. This group exists entirely for them.',
    ],
    details: { when: 'Wednesdays, 8–9pm', where: 'Municipal pool, Allston', cost: '$60 for the block', size: '8 people' },
  },

  // ---- Local events & discussion ----
  {
    id: 'book-club',
    title: 'Book club, one chapter behind',
    category: 'local',
    photo: photo('x_discussion2'),
    meta: 'Monthly · one book',
    summary: 'Half the room has not finished it either. Come anyway.',
    overview: [
      'One book a month, chosen by whoever hosted last, discussed for an hour and a half in a room above a pub.',
      'The rule that keeps it alive is that not finishing the book is not a reason to stay home.',
    ],
    details: { when: 'Last Tuesday of the month, 7pm', where: 'Upstairs room, The Sevens, Beacon Hill', cost: 'Free', size: '8–14 people' },
  },
  {
    id: 'discussion-evenings',
    title: 'Group discussion evenings',
    category: 'local',
    photo: photo('cat_discussion'),
    meta: 'Fortnightly · facilitated',
    summary: 'A topic, a facilitator, and a room where nobody has to perform.',
    overview: [
      'A facilitated conversation on one announced topic — work, ageing, money, moving city. Everybody gets a turn and nobody has to take one.',
      'It is structured on purpose. Structure is what makes talking to strangers survivable.',
    ],
    details: { when: 'Alternate Wednesdays, 7–8.30pm', where: 'Public library, Copley Square', cost: 'Free', size: '10–16 people' },
  },
]

export const stories = [
  {
    quote: 'I got the right help and advice to pick the class I would never have taken otherwise.',
    name: 'Maria B.',
    detail: 'Member since 2024 · Boston, MA',
    photo: photo('story_1'),
  },
  {
    quote: 'I’ve always wanted to try artistic dance. I am so glad I found the courage to do it.',
    name: 'Savannah R.',
    detail: 'Member since 2023 · Austin, TX',
    photo: photo('story_2'),
  },
  {
    quote: 'I could have never imagined how fun volunteering could be. And I actually found new friends.',
    name: 'Robert N.',
    detail: 'Member since 2025 · Seattle, WA',
    photo: photo('story_3'),
  },
  {
    quote: 'I joined a Saturday walking group for the exercise and stayed for the people.',
    name: 'Priya K.',
    detail: 'Member since 2024 · Chicago, IL',
    photo: photo('story_4'),
  },
]

export const tagIndex = [
  ['Wellness & Mindfulness', ['Meditation', 'Breathwork', 'Yoga', 'Sound baths', 'Journalling']],
  ['Arts & Creativity', ['Pottery', 'Painting', 'Photography', 'Craft circles', 'Writing']],
  ['Music & Dance', ['Choir', 'Drumming', 'Salsa', 'Ballroom', 'Open mic']],
  ['Movement & Recreation', ['Walking groups', 'Running clubs', 'Hiking', 'Swimming', 'Cycling']],
  ['Community & Local', ['Volunteering', 'Book clubs', 'Cooking', 'Parent groups', 'Language exchange']],
]

export const getActivity = (id) => activities.find((a) => a.id === id)
export const getCategory = (id) => categories.find((c) => c.id === id)
export const activitiesIn = (categoryId) => activities.filter((a) => a.category === categoryId)
export const featured = () => activities.filter((a) => a.featured)
