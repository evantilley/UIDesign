from flask import Flask
from flask import render_template
from flask import Response, request, jsonify
app = Flask(__name__)

mushrooms = [
    {
        "Id": 0,
        "Species": "Agaricus bisporus",
        "Image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/ChampignonMushroom.jpg/330px-ChampignonMushroom.jpg",
        "Edible": "Yes",
        "Info": "Agaricus bisporus mushrooms are one of the most common mushrooms in the world and are consumed by millions each year. These mushrooms tend to grow in grassy field after periods of rain and their growth can be promoted with manure. A. bisporus is so common that the white button form of it accounts for about 90% of total mushrooms sold in the US. Please exercise caution if you find a similar mushroom as it is often confused with harmful mushrooms such as Agaricus xanthodermus.",
        "CommonNames": [
            "Common mushroom",
            "White mushroom",
            "Button mushroom",
            "Portobello mushroom"
        ],
        "ApproximateCapSize": 5,
        "Comments": [
            "I love these mushrooms!",
            "Made these the other day with my husband - great with pasta!",
            "These mushrooms are super cute :D"
        ]
    },
        {
        "Id": 1,
        "Species": "Amanita muscaria",
        "Image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/2006-10-25_Amanita_muscaria_crop.jpg/1200px-2006-10-25_Amanita_muscaria_crop.jpg",
        "Edible": "Only with proper preparation",
        "Info": "Amanita muscaria are one of the most recognizable mushrooms as they have bright red and white dotted caps. Amanita muscaria are natie to woodlands throughout parts of the Northern Hemisphere and thrive in higher elevations in warmer latitude regions. The mushrooms are technically classified as poisonous, but, if they are parboiled twice their toxic and halluncinogenic properties will be weakened. Fun fact: These mushrooms are very common in the Elder Scrolls Universe.",
        "CommonNames": [
            "Fly agaric"
        ],
        "ApproximateCapSize": 6,
        "Comments": [
            "These mushrooms look so mushroom-like haha",
            "Do not eat these raw! I tried this and I felt nauseous and awful.",
            "Nice."
        ]
    },
        {
        "Id": 2,
        "Species": "Shiitake",
        "Image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Shiitakegrowing.jpg/330px-Shiitakegrowing.jpg",
        "Edible": "Yes",
        "Info": "Shiitake mushrooms are a common edible species of mushroom. They often grow in clusters on decaying deciduous trees. Shiitake are popular in East Asian cuisine and are often served in soup or sautéed. Shiitake have also been used in some  forms of traditional medicine.",
        "CommonNames": [
            "Sawtooth Oak",
            "Black Forest Mushroom",
            "Black Mushrooms"
        ],
        "ApproximateCapSize": 6,
        "Comments": [
            "Had these the other day at an Asian restaraunt - soooo good!",
            "Ah shiitake! Forgot to take out the trash yesterday and now it smells.",
            "I found these the other day in a forest and wondered what they were called. Now I know. Thanks, mushrooms.com!"
        ]
    },
    {
        "Id": 3,
        "Species": "Amanita Phalloides",
        "Image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Amanita_phalloides_1.JPG/351px-Amanita_phalloides_1.JPG",
        "Edible": "No",
        "Info": "Amanita Phalloides, often known as death caps, are one ofm the most poisonous mushrooms known. It only takes about half of a mushroom to kill an adult human. The mushroom is native to Europe and has symbiotic relationships with a variety of trees, including beech trees, chestnut trees, birch trees, and spruces. Fun fact: It is believed that the death cap was involved in the death of Holy Roman Emperor Charles VI.",
        "CommonNames": [
            "Death cap",
            "Deadly amanita",
            "Destroying angel"
        ],
        "ApproximateCapSize": 4,
        "Comments": [
            "Destroying angel... now there's a scary name",
            "Found those in the woods the other day, thank god I checked this site before trying to cook it",
            "My uncle's dog died from eating one of these :( please avoid death caps at all costs."
        ]
    },
    {
        "Id": 4,
        "Species": "Pleurotus ostreatus",
        "Image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Pleurotus_ostreatus_JPG7.jpg/353px-Pleurotus_ostreatus_JPG7.jpg",
        "Edible": "Yes",
        "Info": "Pleurotus ostreatus have a distinct oyster-like shape and were originally cultivated in Germany during WWI for food. They are often found in subtropical forests through the world. The mushrooms are frequently used in Japanese, Korean, and Chinese meals, and sometimes are made into a sauce, similar to oyster sauce. Fun Fact: Tree oyster mushrooms have a smell similar to that of bitter almonds.",
        "CommonNames": [
            "Pearl Oyster Mushroom",
            "Tree Oyster Mushroom"
        ],
        "ApproximateCapSize": 6,
        "Comments": [
            "LOL these really do look like oysters! I thought there was an oyster growing out of a tree in my backyard at first and was like 'What?!'",
            "Oyster gang",
            "I love these! My grandfather is from Japan and uses Pearl Oyster Shrooms all the time when cooking!"
        ]
    },
        {
        "Id": 5,
        "Species": "Psilocybe mexicana",
        "Image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Psilocybe_mexicana_Veracruz.jpg/353px-Psilocybe_mexicana_Veracruz.jpg",
        "Edible": "Yes",
        "Info": "Psilocybe mexicana are known for being psychedelic mushrooms. Their first documented usage was by the Aztecs over 2000 years ago. They grow in small groups in humid places, often at elevations around 400 meters. Fun Fact: Dr. Albert Hofmann first isolated and named the psychoactive substances psilocybin and psilocin after growing these mushrooms.",
        "CommonNames": [
            "God Fungus"
        ],
        "ApproximateCapSize": 1,
        "Comments": [
            "I heard that Hofmann tried about 32 of these after growing them himself. Must of been an interesting time, to see the least.",
            "Crazy how signicant the presence of hallucinogenic mushrooms are in ancient societies.",
            "Never again..."
        ]
    },
            {
        "Id": 6,
        "Species": "Psilocybe cubensis",
        "Image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Cubensis_Xalapa.jpg/330px-Cubensis_Xalapa.jpg",
        "Edible": "Yes",
        "Info": "Psilocybe cubensis are the most well known hallucinogenic mushrooms, due to their ease of cultivation and wide distribution. They grow all over the world, from the US to Australia, and often thrive in humid environments. Research is being conducted into using magic mushrooms as a psychological treatment, though they remain illegal in many parts of the world. Fun Fact: Magic Mushrooms are often spread by Cattle egrets, as they walk along cattle and thus help spread spores that are in the cow dung.",
        "CommonNames": [
            "Shrooms",
            "Magic mushrooms",
            "Cubes"
        ],
        "ApproximateCapSize": 2,
        "Comments": [
            "Whew, thank god I consulted this site, I found something in the woods that's I was about to give to my daughter! Based on the picture here though, I'm pretty sure they're magic mushrooms, so I will not be feeding this to my daughter any time soon.",
            "Huh, I didn't realize there were different species of hallucinogenic mushrooms, interesting",
            "$15/teenth - email me at susmans@mushrooms.com",
            "Fascinating!"
        ]
    },
        {
        "Id": 7,
        "Species": "Hydnum repandum",
        "Image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Hedgehog_fungi2.jpg/330px-Hedgehog_fungi2.jpg",
        "Edible": "Yes",
        "Info": "Hyndum repandum are relatively large mushrooms that have spines hanging down from the underside of the cap. They grow throughout Europe, Asia, and parts of North America, often in close groups in coniferous or deciduous forests. Hedgehog mushrooms are edible and have a sweet, nutty taste. There are no dangerous lookalikes, so if you happen upon a mushroom resembling this one, it's likely safe to eat!",
        "CommonNames": [
            "Hedgehod mushroom",
            "Wood Hedgehod",
            "Sweet tooth"
        ],
        "ApproximateCapSize": 5,
        "Comments": [
            "These mushrooms are the besttt omg. They're super crunchy and sweet and are great to add to a stir fry.",
            "Aww hedeghog mushrooms :D"
        ]
    },
    {
        "Id": 8,
        "Species": "Calbovista",
        "Image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Calbovista_subsculpta_42758.jpg/351px-Calbovista_subsculpta_42758.jpg",
        "Edible": "Yes",
        "Info": "Calbovista are mushrooms that have a distinct 'puffball' shape. They are common in the Rocky Mountains and the Pacific Coast mountain ranges. Puffball mushrooms are edible when the interior is firm and white; the mushroom has no odor and a mild taste. Fun fact: If you step on a dried out puffball mushroom it might give off a bunch of powder that looks like smoke!",
        "CommonNames": [
            "Puffball",
            "Sculptured Puffball",
            "Warted Giant Puffball"
        ],
        "ApproximateCapSize": 4,
        "Comments": [
            "I stepped one of these last week and thought I had started a fire because of the smoke-looking power LOL",
            "These ones are soo cute :) I wanna eat one!"
        ]
    },
        {
        "Id": 9,
        "Species": "Volvariella Volvacea",
        "Image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/StrawMushroom.jpg/330px-StrawMushroom.jpg",
        "Edible": "Yes",
        "Info": "Calbovista are relatively small mushrooms that are cultivated throughout East and Southeast Asia. They are very popular in Asian cuisine and rank third world wide in mushroom consumption. Volvariella Volvacea are grown on rice straw beds and often canned for preservation. Word of warning: These mushrooms can resemble death caps so be careful before consuming them, as there have been cases of poisoning due to misidentification.",
        "CommonNames": [
            "Straw Mushroom",
            "Paddy Straw Mushroom",
        ],
        "ApproximateCapSize": .5,
        "Comments": [
            "I love these guys! They're super small and go great in Asian stir fries.",
            "Always be careful if you think you find one of these in the wild - it could be a death cap D:"
        ]
    },
    {
        "Id": 10,
        "Species": "Tuber melanosporum",
        "Image": "https://www.almagourmet.com/store/images/winter-black-truffle-S.jpg",
        "Edible": "Yes",
        "Info": "Tuber melanosporum are most commonly known as black truffles. They are one of the most expensive edible mushrooms in the world. They are cultivated throughout the world, with the majority of cultivation occuring in Frnace, Spain, and Italy. A kilogram of black truffes can be sold for over $2,000",
        "CommonNames": [
            "Black Truffle",
            "French Black Truffle",
        ],
        "ApproximateCapSize": 2,
        "Comments": [
            "Sometimes I use these with blanched eggs.",
            "LOL I'm pretty sure they hunt these out with specially trained truffle hogs. Oink Oink!",
            "These are too expensive for me."
        ]
    },
     {
        "Id": 11,
        "Species": "Trametes versicolor",
        "Image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Trametes_versicolor_G4_%281%29.JPG/351px-Trametes_versicolor_G4_%281%29.JPG",
        "Edible": "Yes",
        "Info": "Trametes versicolor are multicolored layered mushrooms that grow on the sides of trees. They grow all throughout the world and are edible. Turkey Tails are notable for being used in traditional Chinese medicine to boost the immune system. Clinical trials with trametes versicolor mushrooms have also been conducted to test their anticarcinogenic properties.",
        "CommonNames": [
            "Turkey Tail",
        ],
        "ApproximateCapSize": 3,
        "Comments": [
            "Damn, mushrooms can cure cancer now! What can't they do?",
            "These are so ruffly haha",
            "I see these all the time where I live. Sometimes trees are covered in them!"
        ]
    },
    {
        "Id": 12,
        "Species": "Lyophyllum decastes",
        "Image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Lyophyllum_decastes_071012.jpg/360px-Lyophyllum_decastes_071012.jpg",
        "Edible": "Yes",
        "Info": "Lyophyllum decastes grow in clusters on disturbed ground and are white but may yellow slightly with age. They are often found on the US West Coast and throughout other parts of North America. They are edible are have a radish-like taste. Fun Fact: They are sometimes referred to as 'Fried Chicken Mushrooms' because they have a similar, juicy, meaty texture, to fried chicken when cooked properly.",
        "CommonNames": [
            "Fried Chicken Mushroom",
        ],
        "ApproximateCapSize": 2,
        "Comments": [
            "Lmao these legit taste like air to me",
            "Found these in my backyard a few months back! Cooked them for dinner and was not disappointed!",
            "Bruh just fry chicken don't eat some weird mushroom."
        ]
    },
     {
        "Id": 13,
        "Species": "Phallus impudicus",
        "Image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Phallus_impudicus_LC0235.jpg/351px-Phallus_impudicus_LC0235.jpg",
        "Edible": "Only at the egg stage.",
        "Info": "Lyophyllum decastes are common throughout Europe and North America. They often grow in habitats with wood debris, like forests and mulched gardens. They are notable for their phallic shape and they can only be eaten when they are in the egg stage; pieces of the inner layer can be cut out and consumed. Fun Fat: In Northern Montenegro, peasants rub Phallus impudicus on the necks of bulls before bull fights as they believe doing so makes the bull stronger. Phallus impudicus are also thought to help reduce the risk of blood clots in veins.",
        "CommonNames": [
            "Pricke Mushroom",
        ],
        "ApproximateCapSize": 1,
        "Comments": [
            "Bruh chill with these mushrooms",
            "Wouldn't recommend eating these unless you know what you're doing",
            "These are also used as an aphrodisiac in some places!"
        ]
    },
    {
        "Id": 14,
        "Species": "Suillus luteus",
        "Image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Suillus_luteus_475376.jpg/330px-Suillus_luteus_475376.jpg",
        "Edible": "Yes.",
        "Info": "Suillus luteus mushrooms are native to various parts of Eurasia and have been introduced throughout the globe, from North America to Australia. It is notable for its often slimly large brown cap. Sticky bun mushrooms are edible and commonly used in soups and fried dishes. Be careful though - if you don't remove the slime coating you before eating, you might get indigestion!",
        "CommonNames": [
            "Slippery Jack",
            "Stick Bun"
        ],
        "ApproximateCapSize": 3,
        "Comments": [
            "Haha these mushrooms are funny. I tried to pick one up once and it slipped out of my hand because of the slippery cap.",
            "My wife and I tried this with a stir fry on Tuesday. Wasn't bad.",
            "Yeyeyeyeye"
        ]
    },
    {
        "Id": 15,
        "Species": "Suillus luteus",
        "Image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Suillus_luteus_475376.jpg/330px-Suillus_luteus_475376.jpg",
        "Edible": "Yes.",
        "Info": "Suillus luteus mushrooms are native to various parts of Eurasia and have been introduced throughout the globe, from North America to Australia. It is notable for its often slimly large brown cap. Sticky bun mushrooms are edible and commonly used in soups and fried dishes. Be careful though - if you don't remove the slime coating you before eating, you might get indigestion!",
        "CommonNames": [
            "Slippery Jack",
            "Stick Bun"
        ],
        "ApproximateCapSize": 3,
        "Comments": [
            "Haha these mushrooms are funny. I tried to pick one up once and it slipped out of my hand because of the slippery cap.",
            "My wife and I tried this with a stir fry on Tuesday. Wasn't bad.",
            "Yeyeyeyeye"
        ]
    },
        {
        "Id": 16,
        "Species": "Psilocybe baeocystis",
        "Image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Psilocybe_baeocystis_Singer_%26_A.H._Sm_373850.jpg/330px-Psilocybe_baeocystis_Singer_%26_A.H._Sm_373850.jpg",
        "Edible": "Yes.",
        "Info": "Psilocybe baeocystis is a hallucinogenic mushroom that often grows on ground bark, wood chips, and peat moss. It is notable for its blue color and stains items blue easily. It has a starchy taste and smell. Fun Fact: It was first collected in Oregon in 1945.",
        "CommonNames": [
            "Bottle Caps",
            "Blue Bells",
            "Knobby Tops"
        ],
        "ApproximateCapSize": 1,
        "Comments": [
            "These are a rare find. Remember the homies and I at home got our hands on them once. Was a fun night",
            "What?! They stain blue? That's weird LOL",
            "We call em olive caps where I'm from"
        ]
    },
        {
        "Id": 17,
        "Species": "Hygrocybe chlorophana",
        "Image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Hygrocybe_chlorophana.jpg/330px-Hygrocybe_chlorophana.jpg",
        "Edible": "Yes.",
        "Info": "Hygrocybe chlorophana mushrooms are distinguishable by their bright yellow caps. They grow throughout parts of Europe, North America, northern Asia, and southern Australia. They are an endangered species, and though they are edible, they are easily confused with other inedible yellow mushrooms, so be careful if you plan on consuming one! Fun Fact: Golden Waxcaps were featured on a postage stamp issued by the Faeroe Islands.",
        "CommonNames": [
            "Golden Waxcap"
        ],
        "ApproximateCapSize": 2,
        "Comments": [
            "These are some cool looking mushrooms",
            "Yellow4dayz",
            "Visited the Faeroe Islands once with my girlfriend. Such an awesome time. We ended up having our wedding there a few years later. Sadly, we got divorced after I found out she had been stealing money from our local Mormon church :'(. Oh well, life happens I suppose.",
            "^ Aww that's too bad man, hope you find someone else :)"
        ]
    },
    {
        "Id": 18,
        "Species": "Helvella crispa",
        "Image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/0_Helvella_crispa_-_Havr%C3%A9_%281%29.JPG/330px-0_Helvella_crispa_-_Havr%C3%A9_%281%29.JPG",
        "Edible": "No.",
        "Info": "Helvella crispa mushrooms are notable for their oddle shaped lobes on the cap. They have a wide, white base. White saddle mushrooms grow eastern North America and in Europe, often near deciduous trees. Although they are listed as edible by some guidebooks, it is likely not a good idea to ingest these mushrooms as they may contain carcinogens and can cause gastrointestinal symptoms.",
        "CommonNames": [
            "White saddle",
            "Elfin saddle",
            "Common Helvel"
        ],
        "ApproximateCapSize": 3,
        "Comments": [
            "Okay, so let me get this straight: some mushrooms might be able to cure cancer, and some mushrooms might cause cancer?! Christ, make up your mind mushrooms!",
            "Helluva Helvella mushroom lmao",
            "Beans are good"
        ]
    },
     {
        "Id": 19,
        "Species": "Hygrocybe miniata",
        "Image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Hygrocybe_miniata_-_Ferndale_Park.jpg/330px-Hygrocybe_miniata_-_Ferndale_Park.jpg",
        "Edible": "Yes, but rarely eaten.",
        "Info": "Hygrocybe miniata mushrooms are small mushrooms, bright red or red-orange mushrooms. They are found in Europe and Australia, as well as some rainforests. They are technically edible but almost never eaten as they are very small and have little nutritional value. Fun fact: 'miniata' omes from German 'miniat' which means 'painted with red lead'.",
        "CommonNames": [
            "Vermilion Waxcap"
        ],
        "ApproximateCapSize": 1,
        "Comments": [
            "These mushrooms are so red!",
            "I live in Europe and found a few of these growing in my fields once! I ate them and they tasted like nothing LOL",
            "Cool shrooms"
        ]
    },
        {
        "Id": 20,
        "Species": "Omphalotus olearius",
        "Image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Omphalotus_olearius.JPG/351px-Omphalotus_olearius.JPG",
        "Edible": "No.",
        "Info": "Omphalotus olearius mushrooms are dark orange and are notable for their bioluminescent properties. Jack-o'-lantern mushrooms are primarily found in woodland areas throughout Europe. The mushrooms are poisonous to humans and will cause severe cramps, vomiting, and diarrhea if ingested. Fun Fact: In low light conditions, parts of the mushroom can emit as much light as fireflies.",
        "CommonNames": [
            "Jack-o'-lantern Mushroom"
        ],
        "ApproximateCapSize": 3,
        "Comments": [
            "Oo this really is like a Jack-o'-lantern! It's orange and glows in the dark!",
            "Aww, too bad these are poisonous, they look like they would taste good lol"
        ]
    },
        {
        "Id": 21,
        "Species": "Omphalotus illudens",
        "Image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Omphalotus_illudens_78007.jpg/330px-Omphalotus_illudens_78007.jpg",
        "Edible": "No.",
        "Info": "Omphalotus illudens mushrooms are often found growing together in clumps on decaying woods. They are found in parts of eastern North America. There is debate as to whether these mushrooms exhibit a weak green bioluminescence when fresh. Do not ingest these mushrooms, as they, similar to their relatives, Omphalotus olearius, will cause vomiting, cramps, and diarrhea. Fun Fact: There is research being conducted in the feasability of using Omphalotus illudents for treating cancer.",
        "CommonNames": [
            "Eastern Jack-o'-lantern Mushroom"
        ],
        "ApproximateCapSize": 2,
        "Comments": [
            "I ordered spores for these the other day. I want to grow them to see if they actually do glow in the dark!",
            "I love mushrooms."
        ]
    },
        {
        "Id": 22,
        "Species": "Cantharellus cibarius",
        "Image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Chanterelle_Cantharellus_cibarius.jpg/330px-Chanterelle_Cantharellus_cibarius.jpg",
        "Edible": "Yes.",
        "Info": "Cantharellus cibarius mushrooms are a species of golden chanterelle mushroom. They vary in color from yellow to dark yellow and grow in Europe from Scandinavia to the Mediterranean Basin, most commonly in deciduous and coniferous forests. These mushrooms are edible but resemble other poisonous mushrooms, such as Jack-o'-lantern mushrooms. They have a faint aroma and flavour of apricots.",
        "CommonNames": [
            "Girolle",
            "Girole"
        ],
        "ApproximateCapSize": 2,
        "Comments": [
            "Mushrooms that taste like apricots?! I have to try!",
            "I think I found one of these while taking a nature walk, but I'm a bit hesitant about eating it - I want to make sure its not a Jack-o'-lantern mushroom.",
            "Pro-tip: Don't put these in the oven or else they become bitter!"
        ]
    },
    {
        "Id": 23,
        "Species": "Cantharellus formosus",
        "Image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Cantharellus_formosus_174975_Belfair.jpg/353px-Cantharellus_formosus_174975_Belfair.jpg",
        "Edible": "Yes.",
        "Info": "Cantharellus formosus mushrooms vary in color from orange to yellow and are native to the Pacific Northwest region of North America. They have a mild, sweet odor. The mushrooms are edible and are the most important commercially harvested Cantharellus species in the Pacific Northwest. Fun Fact: Cantharellus formosus is the state mushroom of Oregon.",
        "CommonNames": [
            "Pacific Golden Chanterelle"
        ],
        "ApproximateCapSize": 3,
        "Comments": [
            "Whoo, go Oregon! Born and raised in Seattle. Never saw one of these mushrooms, but I guess that's because I lived in Seattle haha",
            "Interesting note: Pacific golden Chanterelle mushrooms have a pinkish hue on their false gills.",
            "Mushrooms are so colorful! Who doesn't love them?!"
        ]
    },
    {
        "Id": 24,
        "Species": "Grifola frondosa",
        "Image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Eikhaas.JPG/351px-Eikhaas.JPG",
        "Edible": "Yes.",
        "Info": "Grifola frondosa mushrooms grow in clusters at the base of trees, most often oak trees. They are native to China, North America, and the northeastern part of Japan. The mushroom is frequently consumed in China and Japan. Fun Fact: In Japan the maitake can grow to over 100lbs and thus they are called the 'king of mushrooms'.",
        "CommonNames": [
            "Ram's Head",
            "Maitake",
            "Sheep's Head",
            "King of Mushrooms"
        ],
        "ApproximateCapSize": "N/A",
        "Comments": [
            "These mushrooms are MASSIVE!. As a senior in college I studied abroad in Japan (I majored in Japanese History). My host family's house had a huge forest in the back and I'd often walk around, marveling at the huge clusters of these growing on the trees. I used to joke with my hosts that the weight of the mushrooms would bring the trees down LOL. Haha good times. Wish I was back there. Currently serving 2 years in prison for siphoning gas from my neighbor's car. Then I'll be back to teaching Japanense History!",
            "^You good?",
            "I love these! Had these in many dishes when I visited China!"
        ]
    },
        {
        "Id": 25,
        "Species": "Sparassis crispa",
        "Image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Sparassis_crispa_JPG1.jpg/330px-Sparassis_crispa_JPG1.jpg",
        "Edible": "Yes.",
        "Info": "Sparassis crispa mushrooms are notable for growing in large entangled globes. They're often find growing at the bbase of conifer trunks, especially in Great Britain. Cauliflower fungus mushrooms are difficult to clean and prepare but they can be eaten after being blanched in boiling water for several water. They have a pleasant odour and a mild taste.",
        "CommonNames": [
            "Cauliflower fungus"
        ],
        "ApproximateCapSize": "N/A",
        "Comments": [
            "Great mushroom! Stumbled upon a few clumps of these while walking in the woods and, after reading about them on this site, decided to blanche them. Made a great meal for the husband and kids.",
            "These have a surprisingly meaty texture lol, I was surprised. Not bad though",
            "Fungus looking bois"
        ]
    },
        {
        "Id": 26,
        "Species": "Craterellus cornucopioides",
        "Image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Craterellus_cornucopioides_JPG1.jpg/351px-Craterellus_cornucopioides_JPG1.jpg",
        "Edible": "Yes.",
        "Info": "Craterellus cornucopioides mushrooms are edible mushrooms that grow in woods throughouht North America, Europe, Japan, and Korea. These mushrooms are difficult to find because, due to their dark color, they easily blend in with leaves on the ground. They have very nutritious and have been known to have a simmilar taste to black truffles. Fun Fact: These mushrooms are known as the 'trumpet of the dead' because the growing mushrooms were seen as being played as trumpets by dead people under the ground.",
        "CommonNames": [
            "Horn of Plenty",
            "Trumpet of the Dead",
            "Black Trumpet"
        ],
        "ApproximateCapSize": 2,
        "Comments": [
            "If you're ever lucky enough to find yourself in a situation where you can eat these mushrooms, try them! They're soo good!",
            "Morbid name D:",
            "Huh, wonder how these compare to black truffles."
        ]
    },
        {
        "Id": 27,
        "Species": "Cantharellus cinereus",
        "Image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/CantharellusCinereus.JPG/330px-CantharellusCinereus.JPG",
        "Edible": "Yes.",
        "Info": "Cantharellus cinereus mushrooms are a rare species of Cantharellus mushrooms. They are found growing in confierous forests in Europe. They are dark and grow in clusters and thus are difficult to find. They are also edible and are rumored to taste similar to Craterellus cornucopioides",
        "CommonNames": [
            "Ashen Chanterelle"
        ],
        "ApproximateCapSize": "N/A",
        "Comments": [
            "Knew a guy that spent a good few months searching for these. He said they did indeed taste similar to Black Trumpets",
            "These mushrooms are literattly just a huge clump of black fungi on the ground. Super hard to spot."
        ]
    },
        {
        "Id": 28,
        "Species": "Stropharia rugosoannulata",
        "Image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/2011-05-19_Stropharia_rugosoannulata_Farl._ex_Murrill_183478.jpg/351px-2011-05-19_Stropharia_rugosoannulata_Farl._ex_Murrill_183478.jpg",
        "Edible": "Yes.",
        "Info": "Stropharia rugosoannulata are a large species of mushrooms, often found on wood chips across North America in summer and autumn. They have caps the color of burgundy, leading to their name 'Burgundy Mushroom'. Burgundy mushrooms are commercially cultivated and are often grilled or sautéed in butter. Fun Fact: They are best grown alongside corn.",
        "CommonNames": [
            "Godzilla mushroom",
            "Garden Giant",
            "Burgundy Mushroom",
            "King Stropharia"
        ],
        "ApproximateCapSize": 6,
        "Comments": [
            "Would really recommend grilling these and serving with other vegetables! Great mushroom 10/10 would recommend",
            "If only these made you as drunk as Burgundy haha"
        ]
    },
     {
        "Id": 29,
        "Species": "Psilocybe semilanceata",
        "Image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Psilocybe.semilanceata.Alan.jpg/351px-Psilocybe.semilanceata.Alan.jpg",
        "Edible": "Yes.",
        "Info": "Psilocybe semilanceata mushrooms are one of the most potent hallucinogenic mushrooms. They are notable for their bell-shaped cap and grow in wet grassland habitats, most commonly in regions of Europe. The first documentation of Liberty Caps was by a British Family in 1799 who ate the mushrooms with a meal. The father and children subsequently had a psychedlic experience.",
        "CommonNames": [
            "Liberty Cap"
        ],
        "ApproximateCapSize": 1,
        "Comments": [
            "Freeing...",
            "Crazy what mushrooms can do! Some can cause cancer, some can cure cancer, and some can make you hallucinate!"
        ]
    },
    {
        "Id": 30,
        "Species": "Hericium erinaceus",
        "Image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Hericium_erinaceum_on_an_old_tree_in_Shave_Wood%2C_New_Forest_-_geograph.org.uk_-_254892.jpg/180px-Hericium_erinaceum_on_an_old_tree_in_Shave_Wood%2C_New_Forest_-_geograph.org.uk_-_254892.jpg",
        "Edible": "Yes",
        "Info": "Hericium erinaceus are easily recognizable as they don't have caps and grow in large clumps of white spines. They are native to North America, Europe, and Asia and often grow on hardwoods, especially American beech trees. Hericium erinaceus are consumed in Asian countries as they are believed to have health benefits, but there have been no experiments proving this. Fun Fact: Hericium erinaceus are able to withstand frost and cold temperatures and thus can continue producing spores as late as February.",
        "CommonNames": [
            "Lion's name Mushroom",
            "Monkey Head Mushroom",
            "Beareded Hedgehod Mushroom",
            "Pom Pom Mushroom"
        ],
        "ApproximateCapSize": "NA",
        "Comments": [
            "Stumbled upon one of these a few days ago, I didn't even realize it was a mushroom!",
            "Damn haha, haven't thought of this mushroom in ages. Tried them once in college while studying abroad since someone told me they're good for treating anxiety. College was a dark time for me. Safe to say these mushrooms didn't help much",
            "OMG so fuzzy!"
        ]
    }
]
source = []
for mushroom in mushrooms:
    source.append(mushroom["Species"])


@app.route('/')
def home():
   return render_template('index.html', mushrooms = mushrooms, source = source)

@app.route('/view/<id>', methods=['GET'])
def view(id = None):
    #print(request.get_json())
    return render_template('template.html', mushroom = mushrooms[int(id)])

@app.route('/create', methods = ['GET', 'POST'])
def create():
    return render_template('create.html', mushrooms = mushrooms)

@app.route('/edit/<id>', methods = ['GET', 'POST'])
def edit(id = None):
    return render_template('edit.html', mushroom = mushrooms[int(id)])

@app.route('/add_mushroom', methods = ['GET', 'POST'])
def add_mushroom():
    json_data = request.get_json()
    print(json_data)
    mushrooms.append(json_data)
    for mushroom in mushrooms:
        if mushroom["Species"] not in source:
            source.append(mushroom["Species"])
    for i in range(len(mushrooms)):
        mushrooms[i]["Id"] = i
    return jsonify(mushrooms = mushrooms)

@app.route('/delete_mushroom', methods = ['GET', 'POST'])
def delete_mushroom():
    for i in range(len(mushrooms)):
        mushrooms[i]["Id"] = i 
    json_data = request.get_json()
    mushroom = json_data["Species"]
    id = json_data["Id"]
    print("id is", id)
    del mushrooms[id]
    if (mushroom in source):
        source.remove(mushroom)
    for i in range(len(mushrooms)):
        mushrooms[i]["Id"] = i
    return jsonify(mushrooms = mushrooms, source = source)

@app.route('/add_comment', methods = ['GET', 'POST'])
def add_comment():
    json_data = request.get_json()
    id = json_data["Id"]
    comment = json_data["comment"]
    for i in range(len(mushrooms)):
        if i == id:
            mushroom = mushrooms[i]
            mushrooms[i]["Comments"].append(comment)
    return jsonify(mushroom = mushroom)



if __name__ == '__main__':
   app.run(debug = True)




