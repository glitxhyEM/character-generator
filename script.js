// script.js
/**
 * Plays a specific sound by element ID
 */
function playSound(id) {
    const sound = document.getElementById(id);
    if (sound) {
        sound.currentTime = 0;
        sound.play().catch(e => console.log("Audio playback blocked or interrupted.", e));
    }
}
/**
 * Typewriter with Ticking
 */
function typeWriter(elementId, text, speed = 20) {
    const element = document.getElementById(elementId);
    if (!element) return;

    element.textContent = "";
    let i = 0;
    
    if (element.typingInterval) clearInterval(element.typingInterval);

    element.typingInterval = setInterval(() => {
        if (i < text.length) {
            element.textContent += text.charAt(i);

            // Tick sound every 2 characters for a smooth "data stream" vibe
                      // if (i % 2 === 0) {
                      //     playSound('sound-ui');
                      // }
            i++;
        } else {
            clearInterval(element.typingInterval);
        }
    }, speed);
}

// 1. Data Array: Character Info (A combination of classic and futuristic roles)
// ** The new data structure groups arrays by category for coherence **
// these are names so theyre universal
const firstNames = [
    "Anya", "Kael", "Zora", "Jett", "Riven", "Cora", "Dax", "Silas", "Lyra", 
    "Kai", "Nova", "Finn", "Elara", "Talon", "Vega", "Ren", "Aris", "Jax", 
    "Aura", "Zen", "Sloan", "Echo", "Rhys", "Vex", "Mika", "Orion", "Tira",
    "Gideon", "Isolde", "Cyrus", "Sera", "Leo", "Zara", "Nero", "Eliza",
    "Astrid", "Bjorn", "Freya", "Loki", "Sven", "Ingrid", "Erik", "Greta",
    "Ragnar", "Sigrid", "Torvin", "Ylva", "Knut", "Liv", "Magnus", "Solveig",
    "Gunnar", "Hilda", "Fjorn", "Thora", "Vali", "Eira", "Kaelen", "Linnea",
    "Odin", "Runa", "Stellan", "Tyra", "Ulf", "Viggo", "Zara", "Alaric",
    "Bronte", "Caspian", "Daphne", "Evander", "Fiona", "Gareth", "Hazel", "Lysander",
    "Maeve", "Niamh", "Orrin", "Phoebe", "Quinn", "Rowan", "Seraphina", "Theron",
    "Una", "Willow", "Xavier", "Yara", "Zephyr", "Aella", "Bram", "Caelan",
    "Dara", "Eamon", "Faelan", "Gwen", "Iona", "Keira", "Lachlan", "Mairead",
    "Niall", "Oisin", "Piran", "Roisin", "Saoirse", "Tadhg", "Ula", "Vaughn",
    "Wren", "Xanthe", "Yvain", "Zelda", "Aidan", "Briar", "Cian", "Delia",
    "Eilis", "Fionn", "Glynnis", "Ivar", "Kian", "Liora", "Milo", "Nola",
    "Owen", "Pippa", "Rory", "Saffron", "Tiernan", "Ursula", "Vance", "Willa",
    "Xylon", "Yael", "Zola"
];

const lastNames = [
    "Sterling", "Vance", "Kira", "Huxley", "Reyes", "Fenn", "Volkov", "Cade", 
    "Vexen", "Storm", "Frost", "Shadow", "Quinn", "Hayes", "Zimmer", "O'Neill", 
    "Lockwood", "Drayton", "Nighthawk", "Rook", "Morrow", "Sato", "Khan", "Almeida",
    "Juno", "Valdez", "Syn", "Blackwood", "Stone", "Rivers", "Hawthorne", "Everhart",
    "Fairchild", "Goodwin", "Hart", "Ironwood", "Kincaid", "Lockhart", "Montgomery",
    "North", "Oakley", "Pemberton", "Quill", "Redwood", "Sinclair", "Thorne",
    "Underwood", "Vance", "Whitaker", "Xavier", "Yates", "Zane", "Ashworth",
    "Blythe", "Cromwell", "Davenport", "Ellington", "Fitzwilliam", "Garrison",
    "Holloway", "Ingram", "Jardine", "Kensington", "Langley", "Montague",
    "Newbury", "Overton", "Prescott", "Radcliffe", "Somerset", "Thornton",
    "Upton", "Vaughan", "Wellington", "Yardley", "Zimmerman", "Alden",
    "Benson", "Carver", "Dalton", "Emerson", "Forrest", "Graham", "Hanson",
    "Irving", "Jensen", "Keller", "Leland", "Marshall", "Nash", "Orton",
    "Paine", "Quigley", "Reed", "Sutton", "Tanner", "Ullman", "Vogel",
    "Walton", "Xenon", "Young", "Zeller"
];

const floralData = {
    "SCI_FI_ADVENTURE": [
        { name: "Protea", meaning: "Transformation & Courage" },
        { name: "Bird of Paradise", meaning: "Freedom & Excellence" },
        { name: "Aconite", meaning: "Caution & Misanthropy" },
        { name: "Spider Lily", meaning: "Finality & Reincarnation" },
        { name: "Snapdragon", meaning: "Strength & Deception" },
        { name: "Thistle", meaning: "Defiance & Survival" },
        { name: "Blue Eryngium", meaning: "Independence & Severity" },
        { name: "Cactus Flower", meaning: "Endurance & Maternal Love" },
        { name: "Venus Flytrap", meaning: "Predatory Alertness" },
        { name: "Night Cereus", meaning: "Fleeting Brilliance" },
        { name: "Ghost Orchid", meaning: "Elusiveness & Rarity" },
        { name: "Titan Arum", meaning: "Strange Beauty & Decay" },
        { name: "Eucalyptus", meaning: "Geometric Logic" },
        { name: "Passiflora", meaning: "Complexity & Sacrifice" },
        { name: "Sundew", meaning: "Deceptive Attraction" },
        { name: "Moonflower", meaning: "Celestial Dreams" }
    ],
    "PERSONAL_LIFE": [
        { name: "Lavender", meaning: "Devotion & Serenity" },
        { name: "White Poppy", meaning: "Dreams & Modernity" },
        { name: "Amaryllis", meaning: "Pride & Determination" },
        { name: "Gladiolus", meaning: "Integrity & Honor" },
        { name: "Cypress", meaning: "Mourning & Eternal Souls" },
        { name: "Sweet Pea", meaning: "Departure & Memories" },
        { name: "Forget-Me-Not", meaning: "True Love & Remembrance" },
        { name: "Hydrangea", meaning: "Heartfelt Emotion" },
        { name: "Rosemary", meaning: "Remembrance & Fidelity" },
        { name: "Peony", meaning: "Compassion & A Happy Life" },
        { name: "Daffodil", meaning: "Rebirth & New Beginnings" },
        { name: "Bluebell", meaning: "Humility & Constancy" },
        { name: "Honeysuckle", meaning: "Eternal Bonds" },
        { name: "Zinnia", meaning: "Thoughts of Absent Friends" },
        { name: "White Rose", meaning: "Purity & Secrecy" },
        { name: "Hibiscus", meaning: "Delicate Beauty" }
    ],
    "ART_ACADEMIC": [
        { name: "Lotus", meaning: "Purity & Enlightenment" },
        { name: "Black Dahlia", meaning: "Mystery & Elegance" },
        { name: "Iris", meaning: "Wisdom & Hope" },
        { name: "Orchid", meaning: "Thoughtfulness & Refinement" },
        { name: "Yellow Lily", meaning: "Intellect & Gayety" },
        { name: "Camellia", meaning: "Perfection & Refinement" },
        { name: "Wisteria", meaning: "Wisdom & Longevity" },
        { name: "Anemone", meaning: "Fragility & Anticipation" },
        { name: "Marigold", meaning: "Passion & Creativity" },
        { name: "Jasmine", meaning: "Grace & Eloquence" },
        { name: "Pansy", meaning: "Deep Thought & Remembrance" },
        { name: "Clematis", meaning: "Intellectual Aspiration" },
        { name: "Calla Lily", meaning: "Magnificent Elegance" },
        { name: "Magnolia", meaning: "Dignity & Perseverance" },
        { name: "Morning Glory", meaning: "Fleeting Intelligence" },
        { name: "Statice", meaning: "Success & Sympathy" }
    ]
};

const statuses = [
    { label: "ACTIVE / STABLE", class: "status-stable" },
    { label: "UNDER INVESTIGATION", class: "status-warning" },
    { label: "WANTED / RENEGADE", class: "status-danger" },
    { label: "REDACTED / DECEASED", class: "status-unknown" },
    { label: "LOCATION UNKNOWN", class: "status-warning" },
    { label: "NEURAL LINK ESTABLISHED", class: "status-stable" },
    { label: "TERMINATION ORDER ACTIVE", class: "status-danger" }
];

const humanSpecies = [
    { name: "Human", minAge: 8, maxAge: 50, type: "Normal" },
];

const otherSpecies = [
    { name: "Genetically Modified Human", minAge: 25, maxAge: 110, type: "Extended" },
    { name: "????", minAge: 18, maxAge: 10000000000000000000, type: "Hybrid" },
    { name: "Half Angel Half Human", minAge: 20, maxAge: 120, type: "Hybrid" },
    { name: "Half Demon Half Human", minAge: 20, maxAge: 500, type: "Hybrid" },
    { name: "Hybrid", minAge: 30, maxAge: 100, type: "Hybrid" },
    { name: "Gnome", minAge: 13, maxAge: 65, type: "Hybrid" },
    { name: "ELf", minAge: 13, maxAge: 500, type: "Long" },
    { name: "Fallen Angel", minAge: 15, maxAge: 100, type: "Long" },
    { name: "Banished From Hell", minAge: 15, maxAge: 100, type: "Long" },
    { name: "Modified Clone", minAge: 13, maxAge: 150, type: "Extended" },
    { name: "Deep Space Mutate", minAge: 13, maxAge: 180, type: "Extended" },
    { name: "Synthetic Android", minAge: 1, maxAge: 250, type: "Joke" },
    { name: "Ancient Drone AI", minAge: 13, maxAge: 10000, type: "Joke" }
];

const CATEGORIES = {
    // A. High-Stakes / Sci-Fi Category (Conflict, Danger, Espionage)
    "SCI_FI_ADVENTURE": {
        professions: [
            "Void Runner", "Chron-Enforcer", "Relic Smuggler", "Sentinel Guard", "Orbital Mechanic", 
            "Data Weaver", "Starship Diplomat", "Grid Auditor", "Drone Shepherd", "Xeno-Linguist", 
            "Guard", "Warrior", "Samurai", "Sheriff", "Spy", "Pilot", "Test Pilot", 
            "Captain", "Private Detective", "Cop", "Coroner", "Deputy", "Detective", 
            "Emperor", "Empress", "Executive", "Explorer", "Foreman", "General", 
            "Governor", "Highway Patrol", "Hunter", "Jailer", "Jockey", "Judge", 
            "Lawyer", "Linguist", "Lobbyist", "Magician", "Manager", "Marshal", 
            "Mercenary", "Messenger", "Navigator", "Negotiator", "Operator", 
            "Police Officer", "Private Security", "Quarterback", "Racer",
            "Bounty Hunter", "Sector Enforcer", "Warp Pilot", "Black Market Broker", "Cyber Runner",
            "Assassination Specialist", "Diplomatic Courier", "Pirate Captain", "Smuggler", "Inquisitor",
            "Security Analyst", "Tactical Planner", "War Correspondent", "Rebel Commander", "Arms Dealer",
            "Mecha Pilot", "Cyberneticist (Illegal)", "Interstellar Bandit", "System Hacker", "Bail Bondsman",
            "Gladiator", "Thief", "Saboteur", "Propaganda Agent", "Fleet Admiral",
            "Information Broker", "Privateer", "Wasteland Scavenger", "Combat Medic", "Ex-Military Consultant",
            "Political Prisoner (Escaped)", "Gangs Leader", "Deep Space Miner", "Mercenary Pilot", "Bodyguard",
            "Security Consultant", "Code Breaker", "Grave Robber", "Temple Guard", "Secret Agent",
            "Enforcement Drone Operator", "Arms Mechanic", "Counter-Intelligence Officer", "Gambler (High-Stakes)",
            "Fugitive", "Techno-Shaman", "Revolutionary", "Interrogator", "Asset Recovery Specialist",
            "Warlord"
        ],
        traits: [
            "Vengefully Motivated: Holds grudges for decades and is actively working towards the calculated ruin of a past offender.",
            "Wickedly Ambitious: Views everyone as a potential resource or obstacle in their calculated ascent to power.",
            "Pathologically Secretive: Hides minor details as easily as major ones, making them a puzzle even to their closest allies.",
            "Dangerously Reckless: Driven by a desire to feel something real, they constantly take unnecessary risks for a rush.",
            "Instinctively Fearless: Lack a normal sense of self-preservation, walking into danger with an almost childlike curiosity.",
            "Highly Manipulative: A master of emotional leverage, they effortlessly persuade people to act against their own self-interest.",
            "Coolly Unflappable: Rarely shows emotion, maintaining a detached, clinical demeanor even in moments of extreme crisis.",
            "Brutally Abrasive: Speaks with a biting honesty and dismissiveness that pushes most people away, preferring solitude.",
            "Paranoid: Has an irrational fear of closed-circuit cameras or government surveillance systems.",
            "Afflicted: Suffers from a phantom limb sensation from an old injury or cybernetic replacement.",
            "Perfect Recall: Possesses perfect memory, which is a curse that prevents forgetting any trauma.",
            "Difficulty Seeker: Always looks for the most difficult, risky solution to a simple problem.",
            "Deeply Cynical: Believes all systems and people are fundamentally corrupt, making them reluctant to trust any authority.",
            "Unwaveringly Loyal: Once they choose a side, they adhere to it with a fierce, self-sacrificing devotion.",
            "Doggedly Incorruptible: Refuses any bribe or compromise, following a moral code that can make them difficult to work with.",
            "Obsessive Compulsive: Must follow a highly specific set of procedures when preparing for any high-risk operation.",
            "Guilt-Ridden: Haunted by a past failure that often compromises their current decision-making.",
            "Opportunistic: Will change allegiance instantly if a better, safer, or more lucrative deal is presented.",
            "Mute Strategist: Highly intelligent but communicates only through hand signals or encrypted text during missions.",
            "Emotionally Detached: Cannot form deep bonds, viewing all relationships as temporary or transactional.",
            "Addicted to Conflict: Finds a strange peace only when facing mortal danger or high-stakes opposition.",
            "Self-Righteous: Justifies any brutal action by believing their goal is the only morally correct one.",
            "Master of Disguise: Constantly shifts their mannerisms and appearance, rarely presenting their true self.",
            "Tech-Dependent: Incapable of functioning effectively without direct access to advanced cybernetic or digital tools.",
            "Honor-Bound: Follows an ancient, strict code of conduct inherited from a warrior culture.",
            "Sleepless: Physically incapable of normal sleep due to a past trauma or bio-modification.",
            "Unnaturally Calm: Exhibits an eerie composure, suggesting extreme control or total lack of empathy.",
            "Has a Signature Ritual: Always performs a specific, strange ritual before initiating a confrontation.",
            "Driven by Noise: Finds loud, chaotic environments stimulating and quiet ones intensely agitating.",
            "Highly Superstitious: Believes in omens and luck, constantly relying on small, physical charms.",
            "A Natural Leader: Commands respect instantly, often taking charge without formally being asked.",
            "The Loner: Prefers solitary operations, finding large teams inefficient and dangerous.",
            "Physically Scarred: Carries visible, severe physical marks that often dictate how they approach interactions.",
            "Hyper-Aware: Processes sensory input far faster than average, leading to occasional sensory overload.",
            "Extremely Secretive: Possesses knowledge they would die to protect, even from close allies.",
            "Fluent Liar: Can pass any polygraph or truth-detector test with absolute ease.",
            "Driven by Revenge: The pursuit of an old enemy is their sole reason for existing.",
            "Always Prepared: Carries multiple backups and contingencies for every single scenario.",
            "Has a Tell: Exhibits a specific, small physical indicator when they are lying or stressed.",
            "Master Interrogator: Expert at finding psychological weak points and exploiting them.",
            "Resentful: Secretly holds deep bitterness towards those born into wealth or privilege.",
            "Overly Confident: Believes they are untouchable, which often leads to unnecessary risk.",
            "Resourceful: Can make necessary tools or weapons out of virtually any junk found.",
            "Coldly Efficient: Prioritizes the mission objective above all ethical or emotional concerns.",
            "A True Survivor: Has faced death numerous times and carries the mental scars to prove it.",
            "Obsessed with Justice: Driven by an uncompromising, personal sense of right and wrong.",
            "Believes in Fate: Is convinced their actions are predestined and embraces their chaotic journey.",
            "A Walking Encyclopedia of Weaponry: Can identify, use, and dismantle any weapon instantly."
        ],
        goals: [
            { text: "To expose corruption at the highest level of the ruling council.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To escape a dangerous, high-security sector.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To avenge a past betrayal by a former ally.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To destroy all remaining copies of their own archived digital consciousness.", compatibleSpeciesTypes: ["Hybrid", "Long", "Extended", "Joke"] },
            { text: "To achieve political power and dismantle the organization that created them.", compatibleSpeciesTypes: ["Hybrid", "Long", "Extended", "Joke"] },
            { text: "To reunite a fragmented memory map scattered across the solar system.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To rescue a forgotten colony trapped outside the known galaxy.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To find the cure for a synthetic plague they unknowingly helped create.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To win a high-stakes, illegal, planet-wide racing circuit.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To recover a massive data breach that contains state secrets.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To overthrow a tyrannical corporation disguised as a benevolent government.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To become the undisputed master of a specific martial/digital art.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To collect the five legendary tools needed to activate an ancient machine.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To force a confrontation with a clone or alternate version of themself.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To stop a friend or loved one from pursuing a reckless, dangerous goal.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To find the legendary 'Whispering Station,' a pirate hub of forgotten technology.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To smuggle a sentient weapon past a strict interplanetary blockade.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To prove that the current ruling entity is controlled by an alien parasite.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To broker a peace treaty between two warring space empires.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To steal the blueprints for an enemy's superweapon before launch.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To break into a maximum-security vault containing a sample of primordial chaos.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To eliminate a rival who is threatening their life or business.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To secure a permanent citizenship visa on a protected, utopian planet.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To deactivate the planetary defense system of an allied world, for mysterious reasons.", compatibleSpeciesTypes: ["Hybrid", "Long", "Extended", "Joke"] },
            { text: "To track down and retrieve a stolen, personalized combat mech.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To survive a rigged bounty hunt organized by a powerful crime boss.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To expose the illegal trade route of genetically modified slaves.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To rebuild an antique starship that holds sentimental value and fly it across the galaxy.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To erase all records of their existence and start a new, completely anonymous life.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To find the coordinates of a rumored safe world hidden outside the Galactic Core.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To locate the missing heir of a powerful, defunct noble house.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To dismantle a dangerous black-market ring dealing in illegal cybernetics.", compatibleSpeciesTypes: ["Hybrid", "Long", "Extended", "Joke"] },
            { text: "To activate a long-dormant weapon system built by a previous civilization.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To infiltrate a rival faction's headquarters disguised as a high-ranking operative.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To capture a highly valuable target and deliver them to a neutral zone authority.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To break a prisoner out of a maximum-security facility located on a hostile planet.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To participate in and win a gladiatorial combat tournament for freedom or glory.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To steal the master key that controls the local sector's power grid.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To prove their innocence after being framed for a galaxy-wide catastrophe.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To recover a stolen artifact that is slowly corrupting the minds of those near it.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To escape the bounty placed on their head by a federation military force.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To stop a terrorist plot aiming to destabilize the galactic economy.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To deliver a critical piece of intelligence across enemy lines.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To silence a witness who knows too much about their dark past.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To command a fleet in a major star-system battle for control of a vital resource.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To discover and exploit a loophole in interstellar trade law for massive profit.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To retrieve their own consciousness from a corrupted digital archive.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To convince a powerful, reclusive AI to join their resistance cause.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To find the source of the mysterious signals that have been driving people insane.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To track down and decommission the rogue AI they originally created.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] }
        ]
    },

    // B. Personal / Mundane Category (Relatable, Internal, Self-Improvement)
    "PERSONAL_LIFE": {
        professions: [
            // Initial 50
            "Accountant", "Advisor", "Aide", "Ambassador", "Attorney", "Auctioneer", 
            "Babysitter", "Baker", "Banker", "Barber", "Bellhop", "Blacksmith", 
            "Bookkeeper", "Builder", "Butcher", "Butler", "Cab Driver", "Caregiver", 
            "Carpenter", "Cashier", "Caterer", "Chaplain", "Chauffeur", "Chef", 
            "Clerk", "Coach", "Cobbler", "Concierge", "Contractor", "Cook", 
            "Courier", "Custodian", "Dentist", "Doorman", "Driver", "Dry Cleaner", 
            "Electrician", "Exterminator", "Falconer", "Farmer", "Firefighter", 
            "Fisherman", "Garbage Man", "Gardener", "Grocer", "Guide", "Hairdresser", 
            "Handyman", "Janitor", "Landlord", "Laundress",
            "Mason", "Mechanic", "Midwife", "Monk", "Nun", "Nurse", "Optician", 
            "Orderly", "Paralegal", "Pawnbroker", "Peddler", "Pediatrician", 
            "Pharmacist", "Physician", "Plumber", "Poet", "Politician", "President", 
            "Principal", "Psychiatrist", "Psychologist", "Publisher", "Quilter", 
            "Rancher", "Ranger", "Real Estate Agent", "Receptionist", "Referee", 
            "Registrar", "Reporter", "Restaurateur", "Retailer", "Retiree", 
            "Sailor", "Salesperson", "Seamstress", "Security Guard", "Senator", 
            "Singer", "Smith", "Socialite", "Soldier", "Statistician", 
            "Stockbroker", "Street Sweeper", "Surgeon", "Surveyor", "Swimmer", 
            "Tailor", "Tax Collector", "Taxidermist", "Teacher", "Technician", 
            "Therapist", "Trader", "Translator", "Travel Agent", "Truck Driver", 
            "Tutor", "Typist", "Umpire", "Undertaker", "Usher", "Valet", 
            "Veteran", "Vicar", "Waiter", "Waitress", "Warden", "Watchmaker", 
            "Weaver", "Welder", "Woodcarver", "Wrangler", "Yodeler"
        ],
        traits: [
            "Loves Routine: A creature of strict habit; any deviation from their schedule causes mild to severe anxiety.",
            "Deeply Cynical: Believes all systems and people are fundamentally corrupt, making them reluctant to trust any authority.",
            "Profoundly Jaded: Nothing surprises or excites them anymore; they move with a heavy weariness born from too many failures.",
            "Neurotically Cautious: Plans ten steps ahead and is hampered by endless 'what-if' scenarios, never acting rashly.",
            "Unwaveringly Loyal: Once they choose a side, they adhere to it with a fierce, self-sacrificing devotion.",
            "Consistently Pessimistic: Assumes the worst possible outcome in every situation, which ironically sometimes prepares them.",
            "Fervently Religious: Governed by the strict, often obscure, doctrine of a forgotten creed or planetary cult.",
            "Proactively Compassionate: Cannot ignore suffering and actively seeks out opportunities to help the defenseless.",
            "Chaotically Impulsive: Acts purely on instinct and immediate desire, making them unpredictable and unreliable.",
            "Sharply Sarcastic: Uses irony and dry wit as their primary defense mechanism against the world.",
            "Prevaricator: A compulsive liar, even when the truth would be simpler and less damaging.",
            "Aflliction: Has a notable physical tic (e.g., constantly rubbing their thumb and forefinger).",
            "Principled: Lives by a personal, overly complicated code of honor that dictates every action.",
            "Quiet Achiever: Rarely seeks recognition, preferring the satisfaction of a job well done in private.",
            "Easily Distracted: Has trouble focusing on one task, constantly bouncing between ideas and projects.",
            "Highly Empathetic: Takes on the emotions and burdens of others, often leading to personal burnout.",
            "Frugal to a Fault: Obsessed with saving money, often enduring unnecessary hardship to avoid spending.",
            "Chronic Worrier: Finds joy in the small things but spends most of their time dreading future outcomes.",
            "A Good Listener: People instinctively trust them and often reveal their deepest secrets.",
            "Simple Tastes: Prefers quiet, plain things and dislikes excessive flash, noise, or complexity.",
            "Community Focused: Finds their identity and purpose in serving their local neighborhood or block.",
            "Avoids Conflict: Will compromise heavily or retreat to prevent any argument or confrontation.",
            "Possesses a Strong Moral Compass: Always tries to do the 'right thing' even when it's difficult.",
            "Slow to Anger: Extremely patient, but terrifyingly destructive once finally pushed too far.",
            "Highly Sentimental: Clings to physical objects associated with happy memories or deceased loved ones.",
            "A Dedicated Caregiver: Finds their primary purpose in tending to the sick, elderly, or young.",
            "The Peacemaker: Always seeks mediation and compromise to resolve disputes.",
            "A Believer in Second Chances: Gives people multiple opportunities to redeem themselves.",
            "Has a Dry Wit: Uses subtle, often missed humor to lighten stressful situations.",
            "Meticulously Organized: Their life is a model of order, which they impose on their environment.",
            "A Bit of a Gossip: Loves knowing local news and spreading (mostly harmless) rumors.",
            "Has an Unusual Phobia: Terrified of something mundane, like paper clips or the color green.",
            "Always Late: Constantly underestimates the time required for any task, big or small.",
            "Very Protective: Becomes fierce and dangerous when their family or dependents are threatened.",
            "Seeks Validation: Needs external praise and approval to feel confident in their actions.",
            "Prefers the Past: Finds the complexities of the present age confusing and romanticizes older times.",
            "A Natural Negotiator: Excellent at finding mutually beneficial solutions in disagreements.",
            "Has a Secret Hobby: Dedicates a large amount of time to a weird or unexpected private pursuit.",
            "Generous: Will share their last meal or credit chip with someone in need.",
            "Slightly Clumsy: Prone to minor accidents, often tripping over air or knocking things over.",
            "Stubborn: Once their mind is made up, logic rarely changes their course.",
            "Hates Technology: Finds joy only in analog, pre-digital activities and tools.",
            "Highly Adaptive: Can quickly settle and thrive in almost any environment or situation.",
            "Takes Things Literally: Fails to understand metaphors or figurative language easily.",
            "Resilient: Can bounce back quickly from emotional or physical setbacks.",
            "A Fierce Defender of Underdogs: Always sides with the marginalized and powerless.",
            "Compulsive Cleaner: Must constantly straighten, scrub, and polish their environment.",
            "Quietly Spiritual: Their faith is personal and deep, rarely discussed but always present."
        ],
        goals: [
            { text: "To pay off a massive debt owed to a corporation.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To find a lost relic from a deceased family member.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To retire wealthy and vanish without a trace.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To gain the respect of a powerful, elusive Mentor figure.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To break free from a generational curse/oath.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To reconcile with a sibling who crossed a moral line.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To climb the social ladder and achieve nobility status.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To build a fully self-sustaining colony on a remote moon.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To prove their worth to a dismissive parent or guardian.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To protect a specific vulnerable community from resource exploitation.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To recover a piece of lost technology that only benefits their local neighborhood.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To establish a successful, legal business in a volatile economic sector.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To find a quiet, secluded place to spend the remainder of their days in peace.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To make amends for a grave mistake they committed years ago.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To protect their adopted family from threats linked to their past life.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To learn the full truth about their unknown origins or birth parents.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To achieve financial independence without compromising their ethics.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To expose a small-town scandal that everyone else is ignoring.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To perfect a niche, traditional craft that is slowly dying out.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To simply survive another year in the hazardous zone they call home.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To escape a contract they signed unknowingly that binds them to servitude.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To cultivate the rarest flower or plant species in the quadrant.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To find a replacement part for a critical, irreplaceable piece of equipment.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To settle down and start a family, despite the dangers of the world.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To recover a stolen pet or companion AI.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To establish a successful school or training center for disadvantaged youth.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To create a charitable foundation to fund essential medical care.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To build a community center that promotes cultural understanding.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To master five different languages (alien or human) for better communication.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To mentor a young person and guide them to their full potential.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To maintain a peaceful and stable life, focusing on quiet happiness.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To reconnect with a long-lost friend or childhood sweetheart.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To fully restore a derelict historical building or landmark.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To overcome a deep-seated personal fear or psychological trauma.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To write a practical guide that helps others navigate the harsh realities of their sector.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To start a successful, ethical trade route selling goods to those in need.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To secure a safe retirement for their aging parent or guardian.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To become a widely respected elder or sage in their local community.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To build a library that preserves endangered cultural knowledge.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To plant and maintain a massive, ecological forest on a barren world.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To develop a sustainable, cheap energy source for a struggling population.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To save enough credits to buy their own small moon or remote asteroid.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To organize and lead a successful worker's union or reform movement.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To fully understand and forgive someone who wronged them in the past.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To become known as the most reliable supplier/vendor in their city.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To find and document a rare, uncontacted indigenous species.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To dedicate their life to volunteering in the most dangerous regions.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To restore justice to a situation where the law failed an innocent person.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To prove that compassion and kindness can be profitable.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] }
        ],
    },// C. Artistic / Academic Category (Niche Interest, Intellectual Pursuit, Creative Focus)
    "ART_ACADEMIC": {
        professions: [
            "Bio-Sculptor", "Exo-Archeologist", "Aura Technician", "Cyber-Pharmacist", "Memory Architect", 
            "Terraforming Surveyor", "Plasma Engineer", "Dream Scribe", "Actuary", "Activist", 
            "Animator", "Archivist", "Artist", "Astronaut", "Astronomer", "Biologist", 
            "Calligrapher", "Cartographer", "Cartoonist", "Chemist", "Composer", "Cryptographer", 
            "Dancer", "Designer", "Director", "Ecologist", "Economist", "Editor", 
            "Educator", "Engineer", "Entomologist", "Game Designer", "Geneticist", 
            "Geographer", "Geologist", "Illustrator", "Instructor", "Interpreter", 
            "Inventor", "Librarian", "Mathematician", "Midwife", "Muralist", 
            "Musician", "Novelist", "Nurse", "Oboist", "Oracle", "Ornithologist",
            "Paleontologist", "Park Ranger", "Pathologist", "Performer", "Philosopher", 
            "Photographer", "Physicist", "Pianist", "Poet", "Professor", "Programmer", 
            "Radiologist", "Researcher", "Scholar", "Scientist", "Scout", "Saxophonist",
            "Soprano", "Statistician", "Student", "Surgeon", "Taxidermist", "Technician", 
            "Tiler", "Toolmaker", "Zoologist", "Urban Planner", "Concept Artist",
            "Museum Curator", "Ethnobotanist", "Cartographer (Celestial)", "Xenobotanist", "Theorist",
            "Quantum Physicist", "Synthetic Biologist", "Data Historian", "Cultural Anthropologist", "Acoustic Scientist",
            "Planetary Geologist", "Deep-Sea Biologist", "Archaeobotanist", "Forensic Chemist", "Literary Critic",
            "Choreographer", "Sculptor", "Opera Singer", "Film Editor", "Luthier",
            "Restoration Expert", "Bio-Ethics Consultant", "Theoretical Linguist", "Metaphysician", "Rune Carver"
        ],
        traits: [
            "Quietly Obsessive: Fixates intensely on specific projects or people, often to the exclusion of all else, hiding their focus well.",
            "Purely Empathetic: Feels the emotions of others so intensely it sometimes paralyzes them, unable to cause any deliberate harm.",
            "Doggedly Incorruptible: Refuses any bribe or compromise, following a moral code that can make them difficult to work with.",
            "Eccentrically Whimsical: Approaches life with a playful, often inappropriate, sense of humor and a unique sense of style.",
            "Brilliant but Arrogant: Their genius is undeniable, but their contempt for lesser minds often leaves them isolated.",
            "Fervent Idealist: Driven by an almost naive belief that the world can be fixed, often inspiring but easily exploited.",
            "Socially Aloof: Appears distant and uninterested, more focused on internal thoughts or abstract concepts than people.",
            "Collector: Obsessively collects holographic maps of dead star systems or forgotten epochs.",
            "Animist: Believes machines have souls and routinely talks to their tech and devices.",
            "Literalist: Utterly incapable of recognizing social subtext, irony, or implied feelings.",
            "Self-Saboteur: A compulsive perfectionist who finds reasons to tear down their own successes.",
            "Nostalgic: Exhibits extreme sentimentality toward pre-Collapse (ancient) media like CDs or vinyl.",
            "Superstitious: Extremely superstitious about certain colors, numbers, or celestial alignments.",
            "Obscure Speaker: Speaks in riddles or obscure historical/literary references that few understand.",
            "Addicted: Has a profound addiction to a legal, synthetic sensory or digital experience.",
            "Lineage Obsessed: Obsessed with proving their genetic lineage to a mythical figure or lost royal family.",
            "Eccentric Dresser: Always wears mismatched, but expensive or custom-tailored, garments.",
            "Specific Genius: Can calculate complex quantum math in their head, but terrible at simple subtraction.",
            "Luddite: Refuses to use any technology created after the year 2150 due to a lack of trust.",
            "Analog User: Will only communicate through encrypted, outdated, or physical protocols.",
            "Abstract Thinker: Processes the world in concepts and colors rather than linear logic.",
            "Constantly Curious: Cannot ignore an unknown; driven entirely by the desire for knowledge.",
            "Lives in their Head: Often unaware of their physical surroundings, lost in thought or research.",
            "A Walking Database: Memorizes vast amounts of factual data but struggles with common sense.",
            "Highly Creative: Possesses a powerful, almost uncontrollable imagination.",
            "The Skeptic: Automatically doubts all unverified information, requiring absolute proof for everything.",
            "Passionate Debater: Thrives on intellectual argument, often arguing a point just to see the opposing side.",
            "Aesthetic Driven: Every aspect of their work and life must conform to a specific artistic principle.",
            "Hyper-Focused: Can achieve intense states of concentration, blocking out pain or discomfort.",
            "Unconventional: Actively rejects normal methods and prefers to find unique, complex solutions.",
            "A Natural Teacher: Excellent at breaking down complex ideas for students and novices.",
            "The Visionary: Sees potential future applications that others entirely miss.",
            "Driven by Beauty: Seeks to find, create, or preserve moments of pure aesthetic perfection.",
            "A Reluctant Genius: Possesses incredible talent but actively tries to hide it or downplay it.",
            "Obsessed with Legacy: Worries constantly about how their work will be remembered after they are gone.",
            "Has a Muse: Believes their best work is inspired by an external person or entity.",
            "Digitally Fluent: Speaks code and algorithms as easily as natural language.",
            "Perpetually Disorganized: Their workspace is a creative, chaotic mess that only they can navigate.",
            "Synesthetic: Experiences one sense as another (e.g., hears colors or tastes sounds).",
            "Needs Silence to Work: Requires absolute quiet and isolation for deep thought or creation.",
            "A Social Commentator: Uses their art or research to highlight flaws in society or politics.",
            "Compulsively Notes: Must constantly write or sketch down every passing observation or idea.",
            "Highly Intuitive: Relies heavily on gut feeling and hunches, often ignoring logical data.",
            "An Academic Purist: Disdains commercial application of their research or art.",
            "Experimental: Constantly tries out new, often dangerous, techniques or methodologies.",
            "Believes in Magic: Holds a firm conviction that the boundaries of science contain the supernatural.",
            "Has a Secret Language: Communicates with a select few using a self-invented, private language."
        ],
        goals: [
            { text: "To achieve a state of perfect digital tranquility.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To protect a genetically engineered creature.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To prove a radical scientific theory, regardless of cost.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To find the meaning behind a recurring, prophetic dream.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To prove the existence of an ancient, sentient star-whale.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To secure a permanent safe haven for all sapient AI.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To achieve a state of immortality through technological augmentation.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To find the perfect, undiscovered planet to paint a masterpiece.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To establish a new religion based on the laws of physics.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To translate the complex, non-linear language of a gas giant's atmospheric readings.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To synthesize a perfect, non-addictive version of a powerful drug.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To invent a technology that fundamentally alters human perception of reality.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To complete the 'Grand Unified Field Theory' for the entire cosmos.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To design and build the most aesthetically beautiful and efficient machine ever conceived.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To catalog every known species of flora and fauna in a newly discovered sector.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To discover the historical cause of the 'Great Digital Silence.'", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To prove that ancient human myths were actually coded warnings about the future.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To revive a forgotten art form using cutting-edge cybernetic technology.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To archive and save all digital data before an anticipated magnetic collapse.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To write the definitive history of the galactic dark ages.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To compose a piece of music that can only be heard by synthetic minds.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To use advanced mathematics to predict the exact moment of their own death.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To create a viral piece of art that fundamentally changes cultural values.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To prove that parallel timelines occasionally intersect, and find the point of intersection.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To learn the lost language of the first builders of the space gates.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To solve a legendary, centuries-old mathematical problem.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To conduct an ethically pure experiment that changes the scientific paradigm.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To write a single, perfect poem that captures the essence of the universe.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To photograph every known nebula in the adjacent quadrant.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To discover the biological source of psionic or psychic abilities.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To map the inner workings of a black hole's event horizon.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To master the construction of complex, multi-dimensional geometric shapes.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To curate a historical exhibit that accurately portrays a dark period in history.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To find the legendary 'Fountain of Code' that promises infinite creativity.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To publish a controversial academic paper that overturns current planetary science.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To travel to the very edge of the known universe and record what they see.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To train an AI model to replicate the style of a long-dead master artist.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To design a new, universally accessible form of communication.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To conduct a psychological study on sentient machines in isolation.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To create a massive, gravity-defying sculpture in the center of a major city.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To discover the true nature of dark matter/energy.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To learn to control their dreams and use them to solve waking problems.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To write a fictional novel that becomes prophetically true.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To perfect a machine that can translate animal or plant communications.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To teach the youth about the beauty and importance of non-digital crafts.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To use their knowledge to preserve cultural heritage from extinction.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To compose a song that can influence the weather patterns of a small moon.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To find the final piece of evidence to exonerate a famous, wrongfully accused scientist.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To discover a non-toxic way to purify contaminated star system water.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] },
            { text: "To be granted an audience with the secretive grand master of their academic field.", compatibleSpeciesTypes: ["Normal", "Hybrid", "Long", "Extended", "Joke"] }
        ]
            }
        };


// --- Core JavaScript Logic ---

// Get a list of all category keys
const categoryKeys = Object.keys(CATEGORIES);

/**
 * Returns a random element from any given array.
 */
function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

/**
 * Returns a random integer between a min and max value (inclusive).
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Returns a funny, non-standard age string for AI/Synthetic species.
 */
function getRandomJokeAge() {
    const jokeAges = [
        "1001001", 
        "67676767",
        "69696969",
        "12069",
        "Error: NaN", 
        "Omega-27", 
        "Broke the clock",
        "NULL",
        "'Are you seriously asking me this?'",
        "'Shh, I'm secretly a robot. I don't age.'",
        "'Age is just a number.'",
        "IMMORTAL"
    ];
    return getRandomElement(jokeAges);
}


/**
 * Generates random skill stats for Intellect, Combat, and Empathy.
 * @returns {object} An object containing the generated stats.
 */
function generateSkillStats() {
    return {
        intellect: Math.floor(Math.random() * 101),
        combat: Math.floor(Math.random() * 101),
        empathy: Math.floor(Math.random() * 101)
    };
}

/**
 * Animates the skill bars based on the provided stats.
 * @param {object} stats An object with intellect, combat, and empathy properties.
 */
function animateSkillBars(stats) {
    document.getElementById('bar-intellect').style.width = stats.intellect + "%";
    document.getElementById('bar-combat').style.width = stats.combat + "%";
    document.getElementById('bar-empathy').style.width = stats.empathy + "%";
    // Optional: Play a sound when stats fill
    // playSound('sound-ui'); 
}

/**
 * Main function to generate a coherent character profile based on a chosen category key.
 * @param {string|null} categoryKey The key of the category to use, or null for random.
 */
function generateCharacterFromCategory(categoryKey) {
    const scanBar = document.getElementById('scan-line');
    // 1. Trigger the Visual Scan
    scanBar.classList.remove('scanning'); // Reset if already there
    void scanBar.offsetWidth; // "Magic" line to restart CSS animations
    scanBar.classList.add('scanning');

    // 2. Play the processing sound immediately
    playSound('sound-process');

    // 3. Delay the text generation slightly so it looks like the scan "found" the data
    setTimeout(() => {
        let selectedCategoryKey;

        if (categoryKey) {
            // User clicked a specific button
            selectedCategoryKey = categoryKey;
        } else {
            // User clicked the main 'Random' button
            selectedCategoryKey = getRandomElement(categoryKeys);
        }

        const dataSet = CATEGORIES[selectedCategoryKey];

        // 2. SPECIES SELECTION WITH PROBABILITY
        let selectedSpecies;
        if (Math.random() < 0.75) {
            selectedSpecies = getRandomElement(humanSpecies);
        } else {
            selectedSpecies = getRandomElement(otherSpecies);
        }
        let age;
        if (selectedSpecies.type === "Joke") {
            // Make joke ages rarer: 25% chance for joke, 75% chance for normal age
            if (Math.random() < 0.25) {
                age = getRandomJokeAge();
            } else {
                age = getRandomInt(selectedSpecies.minAge, selectedSpecies.maxAge);
            }
        } else {
            age = getRandomInt(selectedSpecies.minAge, selectedSpecies.maxAge);
        }
        
        // 3. GET DATA FROM THEME-SPECIFIC ARRAYS
        const firstName = getRandomElement(firstNames);
        const lastName = getRandomElement(lastNames);
        
        const profession = dataSet && dataSet.professions && dataSet.professions.length ? getRandomElement(dataSet.professions) : 'Unknown';
        let trait1 = (dataSet && dataSet.traits && dataSet.traits.length) ? getRandomElement(dataSet.traits) : 'No trait available';
        let trait2 = (dataSet && dataSet.traits && dataSet.traits.length) ? getRandomElement(dataSet.traits) : 'No trait available';

        // Simple check to prevent the same trait from being selected twice
        if (dataSet && dataSet.traits && dataSet.traits.length > 1) {
            while (trait1 === trait2) {
                trait2 = getRandomElement(dataSet.traits);
            }
        }
        let availableGoals = [];
        if (dataSet && dataSet.goals && dataSet.goals.length) {
            availableGoals = dataSet.goals.filter(goal => goal.compatibleSpeciesTypes.includes(selectedSpecies.type));
        }

        let motivation;
        if (availableGoals.length > 0) {
            motivation = getRandomElement(availableGoals);
        } else {
            // Fallback: If no compatible goals are found, select from all goals.
            // TODO: Refine this fallback to either provide a default compatible goal or re-roll species/category.
            motivation = (dataSet && dataSet.goals && dataSet.goals.length) ? getRandomElement(dataSet.goals) : 'No goal available';
        }

        // 4. DOM Manipulation (Updating the HTML fields)
        
        // Identity Section Update (Requires your HTML to have these IDs!)
        typeWriter('character-name', `${firstName} ${lastName}`, 50);
        typeWriter('character-species', selectedSpecies.name, 30);
        typeWriter('character-age', age.toString(), 30);
        typeWriter('character-profession', profession, 30);

        // Gender and Race/Ethnicity
        let gender = "???";
        let ethnicity = "???";
        const humanGenders = ["Male", "Female", "Nonbinary", "Genderfluid", "Agender", "Intersex"];
        const humanEthnicities = ["East Asian", "South Asian", "Black", "White", "Latino", "Indigenous", "Middle Eastern", "Pacific Islander", "Mixed", "Other"];
        const elfEthnicities = null;
        const gnomeEthnicities = null;
        const trollEthnicities = null;
        const hybridEthnicities = null;

        gender = getRandomElement(humanGenders);
        ethnicity = getRandomElement(humanEthnicities);

        typeWriter('character-gender', gender, 30);
        typeWriter('character-ethnicity', ethnicity, 30);

        // Profile Section Update
        typeWriter('trait-one', trait1, 20);
        typeWriter('trait-two', trait2, 20);
        typeWriter('character-goal', motivation.text || motivation, 15);
        typeWriter('character-category-display', selectedCategoryKey.replace(/_/g, ' '), 30);

            const theme = selectedCategoryKey || "PERSONAL_LIFE";
            const possibleFlowers = floralData[theme];
            const selectedFlower = possibleFlowers[Math.floor(Math.random() * possibleFlowers.length)];
            typeWriter('character-flower', `${selectedFlower.name.toUpperCase()} (${selectedFlower.meaning})`, 30);

            const flowerElement = document.getElementById('character-flower');

            if (theme === "SCI_FI_ADVENTURE") {
                flowerElement.style.color = "#00FFFF"; // Cyan glow
            } else if (theme === "PERSONAL_LIFE") {
                flowerElement.style.color = "#C0C0C0"; // Silver glow
            } else {
                flowerElement.style.color = "#FFD700"; // Gold glow for Art/Academic
            }

        // Pick a random status 
        const statusElement = document.getElementById('character-status'); 
        const randomStatus = statuses[Math.floor(Math.random() * statuses.length)]; 

        // Reset previous classes and add the new one 
        statusElement.className = ""; 
        statusElement.classList.add(randomStatus.class); 

        // Use typewriter for the status label 
        typeWriter('character-status', randomStatus.label, 40); 

        console.log(`-- GENERATED CATEGORY: ${selectedCategoryKey} --`);

        // Generate and animate skill stats
        const skillStats = generateSkillStats();
        animateSkillBars(skillStats);

    }, 600); // 600ms is halfway through the 1.2s scan
}

// 5. ATTACH NEW EVENT LISTENERS (Run on page load)

// Listener for the main random button
document.getElementById('generate-button').addEventListener('click', () => {
    playSound('sound-process'); // Play processing sound
    generateCharacterFromCategory(null); 
});

// Listener for the specific category buttons
document.querySelectorAll('#category-buttons button').forEach(button => {
    button.addEventListener('click', () => {
        playSound('sound-click'); // Play click sound
        const category = button.getAttribute('data-category');
        generateCharacterFromCategory(category);
    });
});