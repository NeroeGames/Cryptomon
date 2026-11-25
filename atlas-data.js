/* Atlas geography is an editorial guide to the fictional Compendium. */
const atlasData = {
  "spots": [
    {
      "id": "h01",
      "region": "north",
      "label": "Pacific Northwest",
      "lon": -123,
      "lat": 46
    },
    {
      "id": "h02",
      "region": "north",
      "label": "California",
      "lon": -119.8,
      "lat": 36.7
    },
    {
      "id": "h03",
      "region": "north",
      "label": "Southwestern United States",
      "lon": -111,
      "lat": 34
    },
    {
      "id": "h04",
      "region": "north",
      "label": "Wyoming & Rocky Mountains",
      "lon": -107,
      "lat": 43
    },
    {
      "id": "h05",
      "region": "north",
      "label": "British Columbia · Okanagan",
      "lon": -119.5,
      "lat": 50
    },
    {
      "id": "h06",
      "region": "north",
      "label": "Canada · broad association",
      "lon": -102,
      "lat": 56
    },
    {
      "id": "h07",
      "region": "north",
      "label": "Northern forests & Great Lakes",
      "lon": -87,
      "lat": 48
    },
    {
      "id": "h08",
      "region": "north",
      "label": "Wisconsin",
      "lon": -89.6,
      "lat": 44.5
    },
    {
      "id": "h09",
      "region": "north",
      "label": "Ohio",
      "lon": -83.5,
      "lat": 40.2
    },
    {
      "id": "h10",
      "region": "north",
      "label": "West Virginia",
      "lon": -80.7,
      "lat": 38.5
    },
    {
      "id": "h11",
      "region": "north",
      "label": "Mid-Atlantic United States",
      "lon": -75.5,
      "lat": 40.5
    },
    {
      "id": "h12",
      "region": "north",
      "label": "Georgia & Southern swamps",
      "lon": -83.5,
      "lat": 31.8
    },
    {
      "id": "h13",
      "region": "north",
      "label": "North America · broad association",
      "lon": -100,
      "lat": 40
    },
    {
      "id": "h14",
      "region": "latin",
      "label": "Puerto Rico",
      "lon": -66.4,
      "lat": 18.2
    },
    {
      "id": "h15",
      "region": "latin",
      "label": "Mexico",
      "lon": -102,
      "lat": 23
    },
    {
      "id": "h16",
      "region": "latin",
      "label": "Southern Andes",
      "lon": -71,
      "lat": -39
    },
    {
      "id": "h17",
      "region": "europe",
      "label": "Scotland",
      "lon": -4.5,
      "lat": 57
    },
    {
      "id": "h18",
      "region": "europe",
      "label": "Ireland & Scottish coasts",
      "lon": -9,
      "lat": 54
    },
    {
      "id": "h19",
      "region": "europe",
      "label": "Southern England",
      "lon": -3,
      "lat": 50.7
    },
    {
      "id": "h20",
      "region": "europe",
      "label": "Europe · broad association",
      "lon": 12,
      "lat": 48
    },
    {
      "id": "h21",
      "region": "europe",
      "label": "Scandinavian waters",
      "lon": 6,
      "lat": 63
    },
    {
      "id": "h22",
      "region": "asia",
      "label": "Gobi Desert",
      "lon": 104,
      "lat": 43
    },
    {
      "id": "h23",
      "region": "asia",
      "label": "Central Asia",
      "lon": 66,
      "lat": 43
    },
    {
      "id": "h24",
      "region": "asia",
      "label": "Himalayas",
      "lon": 86,
      "lat": 28
    },
    {
      "id": "h25",
      "region": "asia",
      "label": "Japan",
      "lon": 138,
      "lat": 37
    },
    {
      "id": "h26",
      "region": "asia",
      "label": "Southeast Asia · broad association",
      "lon": 104,
      "lat": 13
    },
    {
      "id": "h27",
      "region": "asia",
      "label": "Java, Indonesia",
      "lon": 110,
      "lat": -7.5
    },
    {
      "id": "h28",
      "region": "asia",
      "label": "Ancient Near East · textual tradition",
      "lon": 39,
      "lat": 32
    },
    {
      "id": "h29",
      "region": "africa",
      "label": "Zanzibar, Tanzania",
      "lon": 39.3,
      "lat": -6.1
    },
    {
      "id": "h30",
      "region": "global",
      "label": "Worldwide & modern legends",
      "lon": null,
      "lat": null
    },
    {
      "id": "h31",
      "region": "global",
      "label": "Maritime & atmospheric traditions",
      "lon": null,
      "lat": null
    }
  ],
  "families": {
    "bramble": {
      "spot": "h01",
      "species": "Bigfoot",
      "origin": "Bigfoot, or Sasquatch, is associated with stories of a large, elusive, hairy humanoid in North America, especially the Pacific Northwest. The name “Bigfoot” gained popularity after 1958 footprint reports; Indigenous traditions are diverse and much older.",
      "biome": "Pine forests, foothills"
    },
    "wrapwraith": {
      "spot": "h01",
      "species": "Bandage Man of Cannon Beach",
      "origin": "Inspired by the Oregon legend of the Bandage Man, a mysterious wrapped figure said to haunt the roads near Cannon Beach.",
      "biome": "Foggy Oregon beaches and coastal roads"
    },
    "stilts": {
      "spot": "h02",
      "species": "Fresno Nightcrawler",
      "origin": "The Fresno Nightcrawler is a modern internet cryptid associated with strange, long-legged figures appearing in purported security-camera footage from California in the 2000s.",
      "biome": "Desert outskirts, empty roads"
    },
    "arizamel": {
      "spot": "h03",
      "species": "Red Ghost of Arizona",
      "origin": "Inspired by the Red Ghost of Arizona, a nineteenth-century legend of a roaming camel with mysterious remains strapped to its back.",
      "biome": "Arizona deserts, mesas and dry washes"
    },
    "prickitty": {
      "spot": "h03",
      "species": "Cactus Cat",
      "origin": "Inspired by the Cactus Cat of Southwestern American fearsome-critter folklore, a thorn-covered feline said to slash cacti and drink their fermented sap.",
      "biome": "Sonoran deserts and saguaro groves"
    },
    "skinwraith": {
      "spot": "h03",
      "species": "Skinwalker",
      "origin": "Skinwalker stories are part of Navajo cultural traditions. This fictional creature is a loose fantasy interpretation, not a representation of those beliefs.",
      "biome": "Remote woodlands, moonlit hills"
    },
    "jaks": {
      "spot": "h04",
      "species": "Jackalope",
      "origin": "The jackalope is a horned-rabbit tall tale popularized in Wyoming in the 1930s, particularly through taxidermy curiosities made by the Herrick brothers. Older horned-hare imagery also exists.",
      "biome": "Temperate forests, wildflower meadows"
    },
    "ogoro": {
      "spot": "h05",
      "species": "Ogopogo",
      "origin": "Inspired by Ogopogo, the legendary lake creature associated with Okanagan Lake in British Columbia.",
      "biome": "Deep freshwater lakes, especially Okanagan Lake"
    },
    "houshippo": {
      "spot": "h06",
      "species": "Canadian House Hippo",
      "origin": "The Canadian House Hippo originated in a Canadian television public-service announcement encouraging media literacy; it is fictional, not a traditional cryptid.",
      "biome": "Basements, indoor gardens and suburban homes"
    },
    "agrobelter": {
      "spot": "h07",
      "species": "Agropelter",
      "origin": "The Agropelter is a creature from North American lumberjack folklore, said to throw branches and wooden debris from the trees.",
      "biome": "North American forests, old logging trails and dense treetops"
    },
    "wendrift": {
      "spot": "h07",
      "species": "Wendigo",
      "origin": "Inspired by the wendigo stories of Algonquian-speaking Indigenous traditions. This Cryptomon is a fictional fantasy reinterpretation, not a depiction of a traditional sacred narrative.",
      "biome": "Snowbound northern forests and remote winter wilderness"
    },
    "furrowtrout": {
      "spot": "h07",
      "species": "Furred Trout",
      "origin": "Inspired by the fur-bearing trout, a North American tall tale about fish adapted to icy waters.",
      "biome": "Cold mountain rivers and alpine streams"
    },
    "braymutt": {
      "spot": "h08",
      "species": "Beast of Bray Road",
      "origin": "The Beast of Bray Road is a wolf-like cryptid associated with reported sightings near Elkhorn, Wisconsin.",
      "biome": "Rural roads, Wisconsin woodlands"
    },
    "hodax": {
      "spot": "h08",
      "species": "Hodag",
      "origin": "Inspired by the Hodag, a legendary horned beast associated with Rhinelander, Wisconsin.",
      "biome": "Dense northern forests and rocky clearings"
    },
    "lovelandor": {
      "spot": "h09",
      "species": "Loveland Frogman",
      "origin": "The Loveland Frogman is a cryptid reported around Loveland, Ohio, especially in stories from the twentieth century.",
      "biome": "Riverbanks, marshes and wooded streams"
    },
    "carmyx": {
      "spot": "h09",
      "species": "Carmel Area Creature",
      "origin": "Inspired by reports of the Carmel Area Creature in Ohio, described as an unusual long-limbed figure.",
      "biome": "Wooded roadsides and dark rural paths"
    },
    "nocturne": {
      "spot": "h10",
      "species": "Mothman",
      "origin": "Mothman entered modern folklore after reported sightings near Point Pleasant, West Virginia, in 1966–67. Witnesses described a large winged figure with striking red eyes.",
      "biome": "Foggy woodlands, abandoned towers"
    },
    "flatzoid": {
      "spot": "h10",
      "species": "Flatwoods Monster",
      "origin": "The Flatwoods Monster is associated with a reported 1952 encounter in Flatwoods, West Virginia, often linked to UFO lore.",
      "biome": "Remote forests, wooded ridgelines"
    },
    "jerzimp": {
      "spot": "h11",
      "species": "Jersey Devil",
      "origin": "The Jersey Devil is a legendary winged creature associated with the Pine Barrens of New Jersey, with stories tied to the Leeds family.",
      "biome": "Pine barrens, nocturnal woodland"
    },
    "squonky": {
      "spot": "h11",
      "species": "Squonk",
      "origin": "The Squonk comes from Pennsylvania lumberjack folklore and was described as a melancholy creature that weeps over its appearance.",
      "biome": "Misty forests, creeks and wet hollows"
    },
    "snallygaster": {
      "spot": "h11",
      "species": "Snallygaster",
      "origin": "Inspired by the Snallygaster of Maryland folklore, described as a strange birdlike monster with fantastic features.",
      "biome": "Rural hills, farms and mountain skies"
    },
    "guttergator": {
      "spot": "h11",
      "species": "Sewer Alligator",
      "origin": "Inspired by the urban legend of alligators living in city sewers, often linked to stories of discarded exotic pets.",
      "biome": "Urban storm drains, sewers and underground waterways"
    },
    "fiddlevil": {
      "spot": "h12",
      "species": "The Devil Went Down to Georgia",
      "origin": "Inspired by the musical tale of a devil who travels to Georgia to challenge a young fiddler, drawing on older crossroads and musical-duel folklore.",
      "biome": "Wooded crossroads and Georgia pine forests"
    },
    "skunkapee": {
      "spot": "h12",
      "species": "Skunk Ape",
      "origin": "Inspired by Southern United States folklore about the Skunk Ape, a mysterious, pungent ape-like creature reported in swamps and forests.",
      "biome": "Cypress swamps, bayous and moss-draped wetlands"
    },
    "voltwing": {
      "spot": "h13",
      "species": "Thunderbird",
      "origin": "Thunderbird stories belong to multiple Indigenous North American traditions, with different meanings and sacred significance. The game creature is a fictional, birdlike interpretation rather than a representation of any one tradition.",
      "biome": "Stormy mountains, high cliffs"
    },
    "hoopsire": {
      "spot": "h13",
      "species": "Hoop Snake",
      "origin": "Inspired by North American hoop snake tales, in which a snake takes its tail in its mouth and rolls after its quarry. Some versions also describe a venomous tail.",
      "biome": "Dry canyons, scrublands and dusty trails"
    },
    "chuby": {
      "spot": "h14",
      "species": "Chupacabra",
      "origin": "The chupacabra legend emerged in Puerto Rico in the 1990s after reports of livestock deaths. Early descriptions were spiny and reptilian; later mainland sightings often resembled hairless canids.",
      "biome": "Scrublands, rocky canyons"
    },
    "paciencia_abductors": {
      "spot": "h14",
      "species": "Palenciagas",
      "origin": "Inspired by stories of the Palenciagas of Puerto Rico.",
      "biome": "Secluded forests, remote roads, suspected landing sites"
    },
    "lloronae": {
      "spot": "h15",
      "species": "La Llorona",
      "origin": "La Llorona, the Weeping Woman, is a figure in Mexican and wider Latin American folklore, commonly associated with grief and waterways.",
      "biome": "Moonlit rivers, lakeshores and marshes"
    },
    "quetzofly": {
      "spot": "h15",
      "species": "Mexican Pterodactyl",
      "origin": "Inspired by modern Mexican reports of large pterosaur-like flying creatures, sometimes called pterodáctilos. These sightings remain unverified.",
      "biome": "Arid canyons, desert cliffs and high plateaus"
    },
    "magmunch": {
      "spot": "h16",
      "species": "Cherufe",
      "origin": "The Cherufe is a fiery volcanic being from Mapuche tradition in southern Chile and Argentina. Accounts connect it with lava, eruptions, and dangerous volcanic power.",
      "biome": "Volcano slopes, lava fields"
    },
    "nessi": {
      "spot": "h17",
      "species": "Loch Ness Monster",
      "origin": "The Loch Ness Monster became internationally famous after a wave of Scottish loch sightings in 1933. Tales of unusual beings in the area reach further back, though Nessie remains unverified.",
      "biome": "Deep lakes, misty lochs"
    },
    "caitsith": {
      "spot": "h17",
      "species": "Cait Sith",
      "origin": "Scottish folklore describes the Cait Sith as a supernatural black cat.",
      "biome": "Moonlit Scottish highlands and old stone walls"
    },
    "selkira": {
      "spot": "h18",
      "species": "Selkie",
      "origin": "Selkies are seal-like beings of Scottish and Irish folklore associated with transforming between seal and human forms.",
      "biome": "Rocky northern shores, coastal caves"
    },
    "keena": {
      "spot": "h18",
      "species": "Bean Sidhe",
      "origin": "The Bean Sidhe, or banshee, is a spirit from Irish folklore associated with mournful cries.",
      "biome": "Irish ruins and misty moors"
    },
    "sandowny": {
      "spot": "h19",
      "species": "Sandown Clown",
      "origin": "The Sandown Clown refers to an unusual figure reportedly encountered on the Isle of Wight in the 1970s.",
      "biome": "Foggy lanes, coastal woods"
    },
    "hootveil": {
      "spot": "h19",
      "species": "Owlman",
      "origin": "Inspired by the Owlman of Mawnan, a winged figure reported near Cornwall, England.",
      "biome": "Moonlit forests and wooded valleys"
    },
    "rootle": {
      "spot": "h20",
      "species": "Mandrake",
      "origin": "Mandrakes are real plants whose branching roots can resemble human figures. European folklore gave them magical properties, including a deadly scream when uprooted.",
      "biome": "Ancient gardens, damp forests"
    },
    "cinder": {
      "spot": "h20",
      "species": "Hellhound",
      "origin": "Hellhounds are supernatural dogs in European folklore, including English black-dog legends such as Black Shuck. Some stories describe glowing eyes, omens, or fiery appearances.",
      "biome": "Ashen forests, volcanic ruins"
    },
    "gnomble": {
      "spot": "h20",
      "species": "Garden Gnome",
      "origin": "Inspired by garden gnome folklore and stories of small, elusive household and woodland spirits.",
      "biome": "Overgrown gardens, hedgerows and moonlit orchards"
    },
    "kraken": {
      "spot": "h21",
      "species": "Kraken",
      "origin": "The Kraken is a legendary giant sea creature from Scandinavian maritime folklore.",
      "biome": "Deep ocean trenches and rocky coastlines"
    },
    "dunewyrm": {
      "spot": "h22",
      "species": "Mongolian Death Worm",
      "origin": "The Mongolian Death Worm, often called olgoi-khorkhoi, is a creature of Gobi Desert reports and popular cryptozoology, described as a large red worm with dangerous secretions or powers.",
      "biome": "Arid deserts, shifting dunes"
    },
    "lambloom": {
      "spot": "h23",
      "species": "Vegetable Lamb of Tartary",
      "origin": "The Vegetable Lamb of Tartary is a legendary plant-animal from historical European accounts of Central Asia.",
      "biome": "Flowering meadows, fertile grasslands"
    },
    "yetoro": {
      "spot": "h24",
      "species": "Yeti",
      "origin": "The Yeti is a mysterious ape-like being associated with Himalayan folklore and mountaineering accounts.",
      "biome": "Snowy alpine slopes, mountain caves"
    },
    "raiko": {
      "spot": "h25",
      "species": "Raijū",
      "origin": "Raijū is a lightning-associated beast in Japanese folklore, sometimes imagined as a wolf, weasel, or other animal.",
      "biome": "Stormy mountains, pine forests"
    },
    "kodaroot": {
      "spot": "h25",
      "species": "Kodama",
      "origin": "Kodama are tree spirits in Japanese folklore, traditionally associated with particular trees and the sacredness of forests.",
      "biome": "Ancient forests, moss-covered shrines"
    },
    "tsuchubby": {
      "spot": "h25",
      "species": "Tsuchinoko",
      "origin": "The tsuchinoko is a legendary stout-bodied snake from Japanese folklore, reported in mountain and woodland regions.",
      "biome": "Japanese mountain forests, bamboo thickets, grassy slopes"
    },
    "kunekune": {
      "spot": "h25",
      "species": "Kune-kune",
      "origin": "Inspired by the Japanese kune-kune legend of a distant, wavering white figure.",
      "biome": "Japanese fields and rural grasslands"
    },
    "bambooel": {
      "spot": "h26",
      "species": "Bamboo Fish",
      "origin": "The bamboo fish is a fantastical fish-like creature associated with Southeast Asian-inspired folklore and imagery.",
      "biome": "Tropical rivers, submerged reed beds, slow forest streams"
    },
    "ahoolen": {
      "spot": "h27",
      "species": "Ahool",
      "origin": "Inspired by the Ahool, a giant bat-like cryptid from Java, Indonesia, described in cryptozoological stories.",
      "biome": "Mist-shrouded tropical rainforests, river valleys and caves"
    },
    "seraphluff": {
      "spot": "h28",
      "species": "Biblically accurate angel",
      "origin": "Inspired by biblical imagery of seraphim and the eye-covered wheels in Ezekiel’s vision. Its design combines these distinct motifs into a fictional creature.",
      "biome": "High skies, mountain sanctuaries and ancient ruins"
    },
    "popobat": {
      "spot": "h29",
      "species": "Popobawa",
      "origin": "Inspired by Popobawa, a frightening bat-winged shapeshifting figure in Zanzibar folklore.",
      "biome": "Coastal caves, tropical rooftops and dark woodland"
    },
    "greylien": {
      "spot": "h30",
      "species": "Gray Alien",
      "origin": "The gray alien is a familiar figure in modern UFO and alleged alien-abduction stories, typically depicted with a large head and dark eyes.",
      "biome": "Desert outskirts, isolated roads"
    },
    "orbite": {
      "spot": "h30",
      "species": "Unidentified Flying Object",
      "origin": "Inspired by accounts of unidentified flying objects and mysterious aerial lights.",
      "biome": "Night skies, remote fields, atmospheric anomalies"
    },
    "phantomotive": {
      "spot": "h30",
      "species": "Ghost Train",
      "origin": "Ghost trains are phantom locomotives said to haunt abandoned tracks.",
      "biome": "Forgotten railways and misty tunnels"
    },
    "mirrormary": {
      "spot": "h30",
      "species": "Bloody Mary",
      "origin": "Inspired by the Bloody Mary mirror-summoning legend, in which a name repeated before a mirror is said to summon a frightening apparition.",
      "biome": "Abandoned houses, dark rooms and antique mirrors"
    },
    "wispit": {
      "spot": "h30",
      "species": "Will-o’-the-Wisp",
      "origin": "Will-o’-the-wisps are mysterious lights reported over bogs and wetlands.",
      "biome": "Marshes, bogs and wooded wetlands"
    },
    "noctihorn": {
      "spot": "h30",
      "species": "Unicorn",
      "origin": "Inspired by unicorn traditions describing a rare, elusive single-horned creature. This storm-charged specimen is a fictional reinterpretation of that folklore.",
      "biome": "Stormy mountain meadows and remote forests"
    },
    "skulltide": {
      "spot": "h31",
      "species": "Ghost Ship",
      "origin": "Ghost ships are spectral vessels reported at sea in maritime folklore.",
      "biome": "Fogbound oceans and abandoned harbors"
    },
    "stelmo": {
      "spot": "h31",
      "species": "St. Elmo’s Fire",
      "origin": "St. Elmo’s fire is a real electrical glow sometimes seen around pointed objects during storms.",
      "biome": "Storm-tossed coasts and ship masts"
    }
  },
  "habitats": {
    "jaks": "Temperate forests, wildflower meadows",
    "nocturne": "Foggy woodlands, abandoned towers",
    "chuby": "Scrublands, rocky canyons",
    "bramble": "Pine forests, foothills",
    "nessi": "Deep lakes, misty lochs",
    "voltwing": "Stormy mountains, high cliffs",
    "stilts": "Desert outskirts, empty roads",
    "rootle": "Ancient gardens, damp forests",
    "magmunch": "Volcano slopes, lava fields",
    "dunewyrm": "Arid deserts, shifting dunes",
    "cinder": "Ashen forests, volcanic ruins",
    "jerzimp": "Pine barrens, nocturnal woodland",
    "squonky": "Misty forests, creeks and wet hollows",
    "lovelandor": "Riverbanks, marshes and wooded streams",
    "houshippo": "Basements, indoor gardens and suburban homes",
    "raiko": "Stormy mountains, pine forests",
    "flatzoid": "Remote forests, wooded ridgelines",
    "greylien": "Desert outskirts, isolated roads",
    "kodaroot": "Ancient forests, moss-covered shrines",
    "lloronae": "Moonlit rivers, lakeshores and marshes",
    "skinwraith": "Remote woodlands, moonlit hills",
    "braymutt": "Rural roads, Wisconsin woodlands",
    "yetoro": "Snowy alpine slopes, mountain caves",
    "sandowny": "Foggy lanes, coastal woods",
    "lambloom": "Flowering meadows, fertile grasslands",
    "quetzofly": "Arid canyons, desert cliffs and high plateaus",
    "ahoolen": "Mist-shrouded tropical rainforests, river valleys and caves",
    "bambooel": "Tropical rivers, submerged reed beds, slow forest streams",
    "tsuchubby": "Japanese mountain forests, bamboo thickets, grassy slopes",
    "gnomble": "Overgrown gardens, hedgerows and moonlit orchards",
    "agrobelter": "North American forests, old logging trails and dense treetops",
    "popobat": "Coastal caves, tropical rooftops and dark woodland",
    "selkira": "Rocky northern shores, coastal caves",
    "orbite": "Night skies, remote fields, atmospheric anomalies",
    "paciencia_abductors": "Secluded forests, remote roads, suspected landing sites",
    "ogoro": "Deep freshwater lakes, especially Okanagan Lake",
    "hootveil": "Moonlit forests and wooded valleys",
    "snallygaster": "Rural hills, farms and mountain skies",
    "hodax": "Dense northern forests and rocky clearings",
    "carmyx": "Wooded roadsides and dark rural paths",
    "furrowtrout": "Cold mountain rivers and alpine streams",
    "arizamel": "Arizona deserts, mesas and dry washes",
    "kunekune": "Japanese fields and rural grasslands",
    "caitsith": "Moonlit Scottish highlands and old stone walls",
    "skulltide": "Fogbound oceans and abandoned harbors",
    "phantomotive": "Forgotten railways and misty tunnels",
    "keena": "Irish ruins and misty moors",
    "stelmo": "Storm-tossed coasts and ship masts",
    "wispit": "Marshes, bogs and wooded wetlands",
    "kraken": "Deep ocean trenches and rocky coastlines",
    "skunkapee": "Cypress swamps, bayous and moss-draped wetlands",
    "wendrift": "Snowbound northern forests and remote winter wilderness",
    "fiddlevil": "Wooded crossroads and Georgia pine forests",
    "wrapwraith": "Foggy Oregon beaches and coastal roads",
    "hoopsire": "Dry canyons, scrublands and dusty trails",
    "prickitty": "Sonoran deserts and saguaro groves",
    "guttergator": "Urban storm drains, sewers and underground waterways",
    "mirrormary": "Abandoned houses, dark rooms and antique mirrors",
    "noctihorn": "Stormy mountain meadows and remote forests",
    "seraphluff": "High skies, mountain sanctuaries and ancient ruins",
    "jaks_mythic": "Temperate forests, wildflower meadows",
    "nocturne_mythic": "Foggy woodlands, abandoned towers",
    "chuby_mythic": "Scrublands, rocky canyons",
    "bramble_mythic": "Pine forests, foothills",
    "nessi_mythic": "Scottish Highland lochs",
    "voltwing_mythic": "Stormy mountains, high cliffs",
    "stilts_mythic": "Desert outskirts, empty roads",
    "rootle_mythic": "Ancient gardens, damp forests",
    "magmunch_mythic": "Volcano slopes, lava fields",
    "dunewyrm_mythic": "Arid deserts and underground sand tunnels",
    "cinder_mythic": "Ashen forests, volcanic ruins",
    "jerzimp_mythic": "Pine barrens, nocturnal woodland",
    "squonky_mythic": "Misty forests and secluded wetlands",
    "lovelandor_mythic": "Rivers, creeks and wooded wetlands",
    "houshippo_mythic": "Basements, indoor gardens and suburban homes",
    "raiko_mythic": "Stormy mountains, pine forests",
    "flatzoid_mythic": "Foggy forests and remote hillsides",
    "greylien_mythic": "Desert outskirts, isolated roads",
    "kodaroot_mythic": "Sacred old-growth forests, ancient groves and forgotten woodland shrines",
    "skinwraith_mythic": "Remote forests and moonlit wilderness",
    "yetoro_mythic": "Remote Himalayan ridgelines, ice caves and permanent snowfields",
    "sandowny_mythic": "Abandoned fairs, fog-bound coastal paths and deserted carnival grounds",
    "lambloom_mythic": "Wildflower steppes, fertile grasslands and secluded flowering valleys",
    "quetzofly_mythic": "Arid canyons, desert cliffs and high plateaus",
    "ahoolen_mythic": "Javan mountain rainforests, river gorges and vast limestone caverns",
    "bambooel_mythic": "Bamboo-lined waterways, deep forest pools and submerged river gardens",
    "tsuchubby_mythic": "Japanese mountain paths, bamboo thickets and secluded forest clearings",
    "gnomble_mythic": "Overgrown gardens, hedgerows and moonlit orchards",
    "orbite_mythic": "Night skies, remote fields, atmospheric anomalies",
    "arizamel_mythic": "Arizona deserts, mesas and dry washes",
    "skulltide_mythic": "Fogbound oceans and abandoned harbors",
    "keena_mythic": "Irish ruins and misty moors",
    "wispit_mythic": "Marshes, bogs and wooded wetlands",
    "lloronae_mythic": "Moonlit rivers, lakeshores and marshes",
    "braymutt_mythic": "Rural roads, Wisconsin woodlands",
    "agrobelter_mythic": "North American forests, old logging trails and dense treetops",
    "popobat_mythic": "Coastal caves, tropical rooftops and dark woodland",
    "selkira_mythic": "Rocky northern shores, coastal caves",
    "paciencia_abductors_mythic": "Secluded forests, remote roads, suspected landing sites",
    "ogoro_mythic": "Deep freshwater lakes, especially Okanagan Lake",
    "hootveil_mythic": "Moonlit forests and wooded valleys",
    "snallygaster_mythic": "Rural hills, farms and mountain skies",
    "jaks_feral": "Temperate forests, wildflower meadows",
    "nocturne_feral": "Foggy woodlands, abandoned towers",
    "chuby_feral": "Scrublands, rocky canyons",
    "bramble_feral": "Pine forests, foothills",
    "nessi_feral": "Scottish Highland lochs",
    "voltwing_feral": "Stormy mountains, high cliffs",
    "stilts_feral": "Desert outskirts, empty roads",
    "rootle_feral": "Ancient gardens, damp forests",
    "magmunch_feral": "Volcano slopes, lava fields",
    "dunewyrm_feral": "Arid deserts and underground sand tunnels",
    "cinder_feral": "Ashen forests, volcanic ruins",
    "jerzimp_feral": "Pine barrens, nocturnal woodland",
    "squonky_feral": "Misty forests and secluded wetlands",
    "lovelandor_feral": "Rivers, creeks and wooded wetlands",
    "houshippo_feral": "Basements, indoor gardens and suburban homes",
    "raiko_feral": "Stormy mountains, pine forests",
    "flatzoid_feral": "Foggy forests and remote hillsides",
    "greylien_feral": "Desert outskirts, isolated roads",
    "skinwraith_feral": "Remote forests and moonlit wilderness",
    "quetzofly_feral": "Arid canyons, desert cliffs and high plateaus",
    "gnomble_feral": "Overgrown gardens, hedgerows and moonlit orchards",
    "orbite_feral": "Night skies, remote fields, atmospheric anomalies",
    "arizamel_feral": "Arizona deserts, mesas and dry washes",
    "skulltide_feral": "Fogbound oceans and abandoned harbors",
    "keena_feral": "Irish ruins and misty moors",
    "wispit_feral": "Marshes, bogs and wooded wetlands",
    "kodaroot_feral": "Deadwood groves, abandoned mountain shrines and forests consumed by root rot",
    "yetoro_feral": "Storm-wracked Himalayan passes, crimson ice caves and unstable glacier shelves",
    "sandowny_feral": "Deserted fairgrounds, fog-covered coastal lanes and shuttered amusement parks",
    "lambloom_feral": "Abandoned grazing fields, poisoned meadows and thorn-choked marshland",
    "ahoolen_feral": "Moonlit Javan ravines, ruined forest temples and caves above deep river gorges",
    "bambooel_feral": "Flooded bamboo forests, stagnant river pools and lightless underwater caverns",
    "tsuchubby_feral": "Rotting bamboo thickets, muddy forest clearings and abandoned mountain trails",
    "hodax_mythic": "Old-growth forests near Rhinelander, Wisconsin",
    "carmyx_mythic": "Rural roads and wooded fields near Carmel, Ohio",
    "furrowtrout_mythic": "Cold alpine rivers and rocky mountain streams",
    "kunekune_mythic": "Rice paddies, misty farms and open fields in Japan",
    "caitsith_mythic": "Scottish Highland ruins, moors and moonlit stone walls",
    "phantomotive_mythic": "Abandoned rail bridges, mountain tunnels and ghost stations",
    "stelmo_mythic": "Storm-lashed sea cliffs, lighthouses and ship masts"
  }
};
