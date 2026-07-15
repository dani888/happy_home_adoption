import type { Pet } from "../types/pet";

export const pets: Pet[] = [
  {
    id: "buddy",
    name: "Buddy",
    category: "dog",
    breed: "Golden Retriever",
    age: "2 years",
    gender: "Male",
    size: "Large (65 lbs)",
    origin: "Rescued from a shelter in Portland, Oregon",
    location: "Portland, Oregon",
    lat: 45.5152,
    lng: -122.6784,
    images: ["https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=900&q=80"],
    shortDescription:
      "A goofy, affectionate goofball who loves belly rubs and long walks.",
    story:
      "Buddy was surrendered by his previous family after a move, but you'd never know he had a rough patch — he greets every visitor like they're his best friend. He's spent the last three months in a foster home learning basic commands and getting comfortable around other dogs and cats.",
    breedInfo:
      "Golden Retrievers were originally bred in Scotland in the mid-1800s as gundogs, prized for their soft mouths that could retrieve waterfowl without damaging them. Today they're one of the most popular family breeds thanks to their patience, intelligence, and eagerness to please.",
    favoriteFood:
      "Peanut butter-stuffed Kongs — and anything he can sneak off the counter.",
    temperament: ["Friendly", "Gentle", "Playful", "Eager to please"],
    goodWith: ["Kids", "Other dogs", "Cats"],
  },
  {
    id: "luna",
    name: "Luna",
    category: "dog",
    breed: "Border Collie Mix",
    age: "3 years",
    gender: "Female",
    size: "Medium (40 lbs)",
    origin: "Found as a stray near Austin, Texas",
    location: "Austin, Texas",
    lat: 30.2672,
    lng: -97.7431,
    images: [
      "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1540428665292-3593b8d9dc13?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1543466730-80793f58185c?auto=format&fit=crop&w=900&q=80",
    ],
    shortDescription:
      "Whip-smart and full of energy, Luna needs a family that loves the outdoors.",
    story:
      "Luna was picked up by animal control after being spotted wandering alone for several days. She's incredibly food-motivated, which made training a breeze once she settled in. She'd thrive in an active household — think hiking trails, fetch in the backyard, and puzzle toys.",
    breedInfo:
      "Border Collies hail from the England-Scotland border region, bred for centuries to herd sheep across rugged terrain. They're widely considered the most intelligent dog breed, which means they need consistent mental and physical stimulation to stay happy.",
    favoriteFood:
      "Freeze-dried chicken training treats — the higher-value, the better.",
    temperament: ["Intelligent", "Energetic", "Alert", "Loyal"],
    goodWith: ["Active families", "Older kids", "Other dogs"],
  },
  {
    id: "max",
    name: "Max",
    category: "dog",
    breed: "French Bulldog",
    age: "5 years",
    gender: "Male",
    size: "Small (24 lbs)",
    origin: "Surrendered by owner in Denver, Colorado",
    location: "Denver, Colorado",
    lat: 39.7392,
    lng: -104.9903,
    images: [
      "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1783373315941-cbbceecff94c?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1783373315946-6e6a4f1b15ad?auto=format&fit=crop&w=900&q=80",
    ],
    shortDescription:
      "A laid-back snuggle bug who's perfectly happy on the couch with you.",
    story:
      "Max's family relocated overseas and couldn't bring him along. He's a low-energy, low-maintenance companion who mostly wants to nap in a sunbeam and get scratches. He does great in apartments and doesn't need much exercise beyond short daily walks.",
    breedInfo:
      "French Bulldogs were developed in the 1800s from English Bulldog stock brought to France by lace workers, later becoming a favorite of Parisian society. Their bat-like ears and compact build have made them one of the most popular companion breeds worldwide.",
    favoriteFood: "Pumpkin-topped kibble and the occasional slice of banana.",
    temperament: ["Calm", "Affectionate", "Comedic", "Low-energy"],
    goodWith: ["Apartments", "First-time owners", "Seniors"],
  },
  {
    id: "rosie",
    name: "Rosie",
    category: "dog",
    breed: "Beagle",
    age: "1 year",
    gender: "Female",
    size: "Small-Medium (22 lbs)",
    origin: "Born in a foster home in Nashville, Tennessee",
    location: "Nashville, Tennessee",
    lat: 36.1627,
    lng: -86.7816,
    images: ["https://images.unsplash.com/photo-1611305366162-ce5d41340817?auto=format&fit=crop&w=900&q=80"],
    shortDescription:
      "A curious puppy at heart with an unstoppable nose for adventure.",
    story:
      "Rosie was born to a rescued mother and has been in foster care her whole life. She's playful, a little mischievous, and loves following her nose around the yard. She's still working on leash manners but is quick to learn with positive reinforcement.",
    breedInfo:
      "Beagles were bred in England as scent hounds for tracking hare, and their keen sense of smell is second only to a few other breeds. They're known for their friendly howl-like bay and their determination to follow an interesting scent wherever it leads.",
    favoriteFood:
      "Anything, honestly — but she'll do backflips for a bit of cheese.",
    temperament: ["Curious", "Merry", "Determined", "Social"],
    goodWith: ["Kids", "Other dogs", "Active households"],
  },
  {
    id: "whiskers",
    name: "Whiskers",
    category: "cat",
    breed: "Domestic Shorthair",
    age: "4 years",
    gender: "Male",
    size: "Medium (10 lbs)",
    origin: "Found in a barn colony outside Sacramento, California",
    location: "Sacramento, California",
    lat: 38.5816,
    lng: -121.4944,
    images: [
      "https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1596854372407-baba7fef6e51?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1596854372745-0906a0593bca?auto=format&fit=crop&w=900&q=80",
    ],
    shortDescription:
      "An easygoing tabby who loves sunny windowsills and gentle chin scratches.",
    story:
      "Whiskers was trapped as part of a barn-cat colony rescue, but a vet visit revealed he's incredibly people-friendly and was likely someone's pet before. He's since fully transitioned to indoor life and spends his days watching birds from the window.",
    breedInfo:
      "Domestic Shorthairs aren't a single breed but a broad category of cats with mixed ancestry, prized for hardiness and varied coat patterns. They tend to be adaptable, healthy, and make wonderful companions across a wide range of personalities.",
    favoriteFood: "Flaked tuna, with a few crunchy kibble bits to finish.",
    temperament: ["Easygoing", "Affectionate", "Independent", "Curious"],
    goodWith: ["Quiet homes", "Other cats", "Calm households"],
  },
  {
    id: "mochi",
    name: "Mochi",
    category: "cat",
    breed: "Ragdoll",
    age: "2 years",
    gender: "Female",
    size: "Large (12 lbs)",
    origin: "Surrendered by a breeder in San Diego, California",
    location: "San Diego, California",
    lat: 32.7157,
    lng: -117.1611,
    images: [
      "https://images.unsplash.com/photo-1585373683920-671438c82bfa?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1586289883499-f11d28aaf52f?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1619887712608-01ad443dbc2b?auto=format&fit=crop&w=900&q=80",
    ],
    shortDescription:
      "A gentle giant who goes limp with joy the moment you pick her up.",
    story:
      "Mochi came from a small home breeder who was downsizing. True to her breed, she flops into your arms the second you scoop her up. She's incredibly patient and gets along beautifully with children and other pets alike.",
    breedInfo:
      "Ragdolls were developed in California in the 1960s and are famous for going limp and relaxed when held, giving the breed its name. They're large, gentle cats with striking blue eyes and a semi-long coat that's surprisingly easy to groom.",
    favoriteFood: "Chicken pate, and the occasional lick of whipped cream.",
    temperament: ["Docile", "Affectionate", "Social", "Gentle"],
    goodWith: ["Kids", "Other pets", "First-time owners"],
  },
  {
    id: "shadow",
    name: "Shadow",
    category: "cat",
    breed: "Domestic Longhair",
    age: "6 years",
    gender: "Male",
    size: "Medium (11 lbs)",
    origin: "Owner surrender in Chicago, Illinois",
    location: "Chicago, Illinois",
    lat: 41.8781,
    lng: -87.6298,
    images: ["https://images.unsplash.com/photo-1516280030429-27679b3dc9cf?auto=format&fit=crop&w=900&q=80"],
    shortDescription:
      "A dignified all-black beauty who prefers a quiet lap over a wild party.",
    story:
      "Shadow's owner moved into assisted living and could no longer care for him. He's a mellow, older gentleman who enjoys slow mornings, warm blankets, and the occasional feather toy chase. He'd love a calm home where he can be the center of attention.",
    breedInfo:
      "Domestic Longhairs share the same varied ancestry as their shorthaired cousins but carry the recessive long-hair gene. Their plush coats need a bit more brushing, but they're every bit as adaptable and affectionate as any other mixed-breed cat.",
    favoriteFood: "Salmon pate, served at room temperature.",
    temperament: ["Calm", "Dignified", "Affectionate", "Quiet"],
    goodWith: ["Seniors", "Quiet homes", "Single-pet households"],
  },
  {
    id: "pixel",
    name: "Pixel",
    category: "cat",
    breed: "Bengal Mix",
    age: "1 year",
    gender: "Female",
    size: "Small-Medium (8 lbs)",
    origin: "Rescued from a feral colony in Miami, Florida",
    location: "Miami, Florida",
    lat: 25.7617,
    lng: -80.1918,
    images: [
      "https://images.unsplash.com/photo-1571566882372-1598d88abd90?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1598935888738-cd2622bcd437?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1664349976180-ff02cb604d58?auto=format&fit=crop&w=900&q=80",
    ],
    shortDescription:
      "A spotted spitfire who loves toys, climbing, and showing off her acrobatics.",
    story:
      "Pixel was rescued as a kitten and bottle-fed by a foster volunteer. She's got boundless energy and a striking spotted coat. She'd do best in a home with cat trees, interactive toys, and ideally another playful cat to burn off energy with.",
    breedInfo:
      "Bengal cats were developed by crossing domestic cats with Asian leopard cats, resulting in a wild-looking spotted coat and an athletic, playful temperament. Mixes like Pixel often retain the striking looks with a slightly calmer, more adaptable personality.",
    favoriteFood: "High-protein wet food — feathers optional, chicken required.",
    temperament: ["Energetic", "Playful", "Athletic", "Bold"],
    goodWith: ["Active households", "Other playful cats", "Experienced owners"],
  },
  {
    id: "cooper",
    name: "Cooper",
    category: "dog",
    breed: "Labrador Retriever",
    age: "3 years",
    gender: "Male",
    size: "Large (70 lbs)",
    origin: "Surrendered by owner in Raleigh, North Carolina",
    location: "Raleigh, North Carolina",
    lat: 35.7796,
    lng: -78.6382,
    images: [
      "https://images.unsplash.com/photo-1591160690555-5debfba289f0?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1640241176987-9f1e5e08892a?auto=format&fit=crop&w=900&q=80",
    ],
    shortDescription:
      "A classic, tail-wagging retriever who lives for fetch and swimming.",
    story:
      "Cooper's family had a change in circumstances that meant they could no longer keep him. He's never met a tennis ball he didn't love, and he'll happily swim laps in a lake all afternoon. He's well-mannered indoors and just wants a job to do outdoors.",
    breedInfo:
      "Labrador Retrievers originated in Newfoundland, Canada, where they helped fishermen haul nets and retrieve catch from icy water. Their water-resistant coat and otter-like tail make them natural swimmers, and they've topped popularity rankings for decades thanks to their friendly, trainable nature.",
    favoriteFood:
      "Anything that resembles a treat, especially post-swim ice cubes.",
    temperament: ["Friendly", "Outgoing", "Active", "Trainable"],
    goodWith: ["Kids", "Other dogs", "Active families"],
  },
  {
    id: "bella",
    name: "Bella",
    category: "dog",
    breed: "Siberian Husky",
    age: "2 years",
    gender: "Female",
    size: "Medium (45 lbs)",
    origin: "Rescued from an overcrowded shelter in Minneapolis, Minnesota",
    location: "Minneapolis, Minnesota",
    lat: 44.9778,
    lng: -93.265,
    images: [
      "https://images.unsplash.com/photo-1547407139-3c921a66005c?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1643277227040-1919439d29c2?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1582280314173-edba2f2ae1fd?auto=format&fit=crop&w=900&q=80",
    ],
    shortDescription:
      "A striking, vocal escape artist with a heart full of mischief and love.",
    story:
      "Bella came to the shelter as part of a large intake from an overwhelmed breeder. She's talkative, dramatic, and loves to howl a greeting when you walk in the door. She needs a securely fenced yard and an experienced handler who can keep up with her energy.",
    breedInfo:
      "Siberian Huskies were bred by the Chukchi people of northeastern Asia to pull sleds across vast frozen distances with minimal food. Their endurance, thick double coat, and independent streak make them incredible athletes, though they need consistent exercise and secure containment.",
    favoriteFood: "Raw-ish, high-protein diets — she'll howl if dinner's late.",
    temperament: ["Vocal", "Independent", "Energetic", "Mischievous"],
    goodWith: ["Experienced owners", "Cold climates", "Active households"],
  },
  {
    id: "daisy",
    name: "Daisy",
    category: "dog",
    breed: "Dachshund",
    age: "4 years",
    gender: "Female",
    size: "Small (18 lbs)",
    origin: "Owner surrender in Louisville, Kentucky",
    location: "Louisville, Kentucky",
    lat: 38.2527,
    lng: -85.7585,
    images: ["https://images.unsplash.com/photo-1681917920001-d4934319da30?auto=format&fit=crop&w=900&q=80"],
    shortDescription:
      "A confident little sausage dog with a big personality and bigger bark.",
    story:
      "Daisy's owner developed allergies and reluctantly had to give her up. She's fiercely loyal, loves burrowing under blankets, and will loudly announce every visitor. She's already leash-trained and does well in apartments as long as she gets a daily walk.",
    breedInfo:
      "Dachshunds were bred in Germany to hunt badgers, using their long low bodies to chase prey into underground burrows. Despite their small size, they're known for a bold, tenacious personality and a surprisingly loud bark for their stature.",
    favoriteFood:
      "Small, frequent meals — and she'll beg dramatically for cheese.",
    temperament: ["Bold", "Loyal", "Alert", "Stubborn"],
    goodWith: ["Apartments", "Single-pet households", "Older kids"],
  },
  {
    id: "rocky",
    name: "Rocky",
    category: "dog",
    breed: "German Shepherd",
    age: "3 years",
    gender: "Male",
    size: "Large (75 lbs)",
    origin: "Transferred from a full shelter in Phoenix, Arizona",
    location: "Phoenix, Arizona",
    lat: 33.4484,
    lng: -112.074,
    images: ["https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?auto=format&fit=crop&w=900&q=80"],
    shortDescription:
      "A smart, devoted protector who's happiest with a job and a routine.",
    story:
      "Rocky was transferred in to relieve overcrowding at a partner shelter. He's quick to learn, deeply loyal, and thrives with structure and consistent training. He'd do best with a confident owner who can channel his intelligence into obedience work or agility.",
    breedInfo:
      "German Shepherds were developed in the late 1800s for herding and quickly proved themselves as versatile working dogs in police, military, and service roles. Their intelligence and trainability make them exceptional partners, provided their need for mental stimulation is met.",
    favoriteFood:
      "High-protein kibble with a scoop of cottage cheese as a reward.",
    temperament: ["Loyal", "Intelligent", "Confident", "Protective"],
    goodWith: ["Experienced owners", "Older kids", "Training-minded families"],
  },
  {
    id: "milo",
    name: "Milo",
    category: "dog",
    breed: "Standard Poodle",
    age: "5 years",
    gender: "Male",
    size: "Medium (50 lbs)",
    origin: "Owner surrender due to relocation, Boston, Massachusetts",
    location: "Boston, Massachusetts",
    lat: 42.3601,
    lng: -71.0589,
    images: [
      "https://images.unsplash.com/photo-1656869929510-216b4976f854?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1656869929507-2d06268e3b11?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1656869929504-6654c0585ad9?auto=format&fit=crop&w=900&q=80",
    ],
    shortDescription:
      "An elegant, whip-smart companion who's as fun as he is well-mannered.",
    story:
      "Milo's family moved abroad and couldn't bring him along. He's exceptionally well-trained, low-shedding, and picks up new tricks in just a few repetitions. He gets along with everyone he meets and would slot easily into an active or a relaxed household alike.",
    breedInfo:
      "Standard Poodles were originally bred in Germany as water retrievers, and their signature clip was designed to protect joints and organs while swimming. They consistently rank among the most intelligent breeds and are a popular choice for allergy-sensitive households.",
    favoriteFood:
      "Grain-free kibble with a sprinkle of parmesan for training sessions.",
    temperament: ["Intelligent", "Elegant", "Trainable", "Sociable"],
    goodWith: ["Kids", "Other dogs", "Allergy-sensitive homes"],
  },
  {
    id: "zoe",
    name: "Zoe",
    category: "dog",
    breed: "Boxer",
    age: "1 year",
    gender: "Female",
    size: "Large (55 lbs)",
    origin: "Rescued from a neglect case in Tampa, Florida",
    location: "Tampa, Florida",
    lat: 27.9506,
    lng: -82.4572,
    images: ["https://images.unsplash.com/photo-1558349699-1e1c38c05eeb?auto=format&fit=crop&w=900&q=80"],
    shortDescription:
      "A bouncy, goofy youngster bursting with love and zero concept of a lap.",
    story:
      "Zoe was rescued alongside several littermates after a neglect investigation. She's since bounced back with the resilience puppies are known for, greeting every person and dog like the best thing that's ever happened to her. She's in basic training and improving daily.",
    breedInfo:
      "Boxers were developed in Germany in the late 1800s from bulldog-type ancestors and were originally used for hunting large game and later as guard and working dogs. Their playful, high-energy nature paired with deep loyalty makes them beloved family companions.",
    favoriteFood: "Anything crunchy — carrots and apple slices are her go-to.",
    temperament: ["Playful", "Energetic", "Loyal", "Goofy"],
    goodWith: ["Kids", "Active families", "Other dogs with introductions"],
  },
  {
    id: "chloe",
    name: "Chloe",
    category: "cat",
    breed: "Persian",
    age: "5 years",
    gender: "Female",
    size: "Medium (9 lbs)",
    origin: "Owner surrender in Los Angeles, California",
    location: "Los Angeles, California",
    lat: 34.0522,
    lng: -118.2437,
    images: [
      "https://images.unsplash.com/photo-1622584985171-35cd07f0253e?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1616987030273-caeb4ecd6541?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1598372980059-15763db07446?auto=format&fit=crop&w=900&q=80",
    ],
    shortDescription:
      "A plush, regal beauty who prefers slow pets and a well-groomed coat.",
    story:
      "Chloe's owner passed away and family members were unable to take her in. She's calm, sweet, and enjoys being brushed almost as much as she enjoys napping in a sunny spot. She'd love a quiet home where she can be pampered and adored.",
    breedInfo:
      "Persians are one of the oldest known cat breeds, prized since the 1600s for their luxurious long coat and sweet, mellow temperament. Their flat faces and dense fur mean they need regular grooming and cool environments, but they reward the effort with calm companionship.",
    favoriteFood: "Delicate bites of chicken breast, served in a shallow dish.",
    temperament: ["Calm", "Sweet", "Gentle", "Reserved"],
    goodWith: ["Quiet homes", "Seniors", "Single-pet households"],
  },
  {
    id: "leo",
    name: "Leo",
    category: "cat",
    breed: "Maine Coon",
    age: "3 years",
    gender: "Male",
    size: "Large (16 lbs)",
    origin: "Rescued from a hoarding situation in Portland, Maine",
    location: "Portland, Maine",
    lat: 43.6591,
    lng: -70.2568,
    images: ["https://images.unsplash.com/photo-1519052537078-e6302a4968d4?auto=format&fit=crop&w=900&q=80"],
    shortDescription:
      "A gentle giant with a shaggy coat and a chirpy, dog-like devotion.",
    story:
      "Leo was one of many cats rescued from a hoarding situation, but he bounced back quickly thanks to his naturally social personality. He follows his favorite humans from room to room, chirps instead of meowing, and loves a good game of fetch with a crinkle ball.",
    breedInfo:
      "Maine Coons are one of the largest domestic cat breeds and a native New England breed, thought to have developed for survival in harsh winters thanks to their shaggy, water-resistant coat. They're famously friendly and often described as having dog-like loyalty.",
    favoriteFood: "Big portions to match his big body — turkey is his favorite.",
    temperament: ["Sociable", "Gentle", "Playful", "Loyal"],
    goodWith: ["Kids", "Other pets", "Families"],
  },
  {
    id: "willow",
    name: "Willow",
    category: "cat",
    breed: "Siamese",
    age: "2 years",
    gender: "Female",
    size: "Small-Medium (8 lbs)",
    origin: "Found as a stray in New Orleans, Louisiana",
    location: "New Orleans, Louisiana",
    lat: 29.9511,
    lng: -90.0715,
    images: [
      "https://images.unsplash.com/photo-1611668070024-4b53a3908386?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1611668069616-938397b2f9e2?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1611668069991-1e45c9fac36f?auto=format&fit=crop&w=900&q=80",
    ],
    shortDescription:
      "A vocal, striking talker who will narrate every moment of your day.",
    story:
      "Willow was found wandering near a busy intersection and thankfully had no trouble warming up to her rescuers. True to her breed, she's endlessly chatty and loves being involved in whatever her people are doing, from cooking dinner to folding laundry.",
    breedInfo:
      "Siamese cats trace their origins to ancient Siam (modern-day Thailand), where they were treasured companions to royalty. They're known for their striking blue eyes, sleek coat, and famously vocal, people-oriented personalities.",
    favoriteFood:
      "Fish-based wet food, and she'll tell you exactly when it's time.",
    temperament: ["Vocal", "Social", "Intelligent", "Affectionate"],
    goodWith: ["Attentive owners", "Other cats", "Families"],
  },
  {
    id: "biscuit",
    name: "Biscuit",
    category: "cat",
    breed: "Orange Tabby",
    age: "1 year",
    gender: "Male",
    size: "Medium (10 lbs)",
    origin: "Born in foster care in Kansas City, Missouri",
    location: "Kansas City, Missouri",
    lat: 39.0997,
    lng: -94.5786,
    images: ["https://images.unsplash.com/photo-1581898262339-10bac03c5818?auto=format&fit=crop&w=900&q=80"],
    shortDescription:
      "A cuddly, food-motivated goofball who purrs the moment you look at him.",
    story:
      "Biscuit was born to a rescued mother and has never known anything but a loving foster home. He's endlessly food-motivated, learns tricks quickly as a result, and greets every person with an instant, rumbling purr. He'd love a home that keeps the treats coming.",
    breedInfo:
      "Orange tabbies aren't a distinct breed but a coat-color pattern found across many breeds, caused by a sex-linked gene that appears far more often in males. They've earned a reputation, backed by many owners, for being especially food-driven and easygoing.",
    favoriteFood: "Literally anything — he's famous for his food motivation.",
    temperament: ["Affectionate", "Food-motivated", "Easygoing", "Playful"],
    goodWith: ["Kids", "First-time owners", "Other pets"],
  },
  {
    id: "jasper",
    name: "Jasper",
    category: "cat",
    breed: "British Shorthair",
    age: "4 years",
    gender: "Male",
    size: "Large (13 lbs)",
    origin: "Owner surrender in Seattle, Washington",
    location: "Seattle, Washington",
    lat: 47.6062,
    lng: -122.3321,
    images: ["https://images.unsplash.com/photo-1645437326286-d54861c8a181?auto=format&fit=crop&w=900&q=80"],
    shortDescription:
      "A dignified, round-faced homebody who's content just being near you.",
    story:
      "Jasper's owner moved to a no-pets building and had to find him a new home. He's independent but affectionate on his own terms, happiest curled up on the same couch cushion as his favorite person. He's low-maintenance and adjusts well to routine.",
    breedInfo:
      "British Shorthairs are one of the oldest English cat breeds, descended from cats brought to Britain by the Romans. Their dense coat, round face, and easygoing temperament have made them a enduringly popular, low-fuss companion breed.",
    favoriteFood: "Pate-style wet food, enjoyed slowly and deliberately.",
    temperament: ["Independent", "Easygoing", "Affectionate", "Calm"],
    goodWith: ["Quiet homes", "Seniors", "First-time owners"],
  },
  {
    id: "coco",
    name: "Coco",
    category: "cat",
    breed: "Calico",
    age: "2 years",
    gender: "Female",
    size: "Medium (9 lbs)",
    origin: "Rescued from a feral colony in Sacramento, California",
    location: "Sacramento, California",
    lat: 38.5816,
    lng: -121.4944,
    images: ["https://images.unsplash.com/photo-1622015681719-9783953d5305?auto=format&fit=crop&w=900&q=80"],
    shortDescription:
      "A spunky, colorful character with a strong sense of who she likes.",
    story:
      "Coco was trapped and rescued from the same barn colony as Whiskers, though her personality is a bit more spirited. She's selective about her favorite people but fiercely affectionate once she picks you. She'd do best in a calm home without too much change.",
    breedInfo:
      "Calico refers to a tri-color coat pattern rather than a breed, and it's almost exclusively found in female cats due to the genetics behind the coloring. Many cultures consider calicos good luck, and their personalities are as varied and vivid as their coats.",
    favoriteFood: "Chicken and gravy — she's particular about texture.",
    temperament: ["Spirited", "Selective", "Affectionate", "Independent"],
    goodWith: ["Calm households", "Single-pet homes", "Patient owners"],
  },
  {
    id: "duke",
    name: "Duke",
    category: "dog",
    breed: "Great Dane",
    age: "4 years",
    gender: "Male",
    size: "Giant (140 lbs)",
    origin: "Owner surrender in Columbus, Ohio",
    location: "Columbus, Ohio",
    lat: 39.9612,
    lng: -82.9988,
    images: ["https://images.unsplash.com/photo-1777612901436-9abd96f0f478?auto=format&fit=crop&w=900&q=80"],
    shortDescription:
      "A towering gentle giant convinced he's still a lap dog.",
    story:
      "Duke's owner could no longer manage his size in a small apartment, though you'd never guess it from his manners. He leans his whole body against your legs for pets and is remarkably calm indoors for his size. He needs a home with space and a sturdy couch.",
    breedInfo:
      "Great Danes were bred in Germany to hunt wild boar, valued for their size, speed, and courage, before becoming beloved companions prized for their gentle, affectionate nature. Despite their imposing stature, they're famously sweet and often unaware of just how big they are.",
    favoriteFood: "Large-breed kibble, plus the occasional ice cube treat.",
    temperament: ["Gentle", "Affectionate", "Calm", "Devoted"],
    goodWith: ["Families with space", "Other dogs", "Experienced owners"],
  },
  {
    id: "sadie",
    name: "Sadie",
    category: "dog",
    breed: "Australian Shepherd",
    age: "2 years",
    gender: "Female",
    size: "Medium (48 lbs)",
    origin: "Surrendered by owner in Boise, Idaho",
    location: "Boise, Idaho",
    lat: 43.615,
    lng: -116.2023,
    images: [
      "https://images.unsplash.com/photo-1613480188167-ac69cf8665e2?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1613480188110-e22ae41347e2?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1613480750354-6c466d466f92?auto=format&fit=crop&w=900&q=80",
    ],
    shortDescription:
      "A striking, whip-smart herder who's always ready for the next task.",
    story:
      "Sadie's owners didn't have the time to keep up with her exercise needs and made the tough call to rehome her. She's brilliant, biddable, and lights up whenever there's a job to do, whether that's agility, herding balls around the yard, or learning a new trick.",
    breedInfo:
      "Despite the name, Australian Shepherds were actually developed in the United States to herd livestock, prized for their intelligence, stamina, and striking merle coats. They excel in dog sports and need an active home that can match their drive.",
    favoriteFood:
      "High-energy kibble and training treats she'll work hard for.",
    temperament: ["Intelligent", "Energetic", "Loyal", "Eager to work"],
    goodWith: ["Active families", "Older kids", "Experienced owners"],
  },
  {
    id: "nova",
    name: "Nova",
    category: "cat",
    breed: "Tuxedo Shorthair",
    age: "3 years",
    gender: "Female",
    size: "Medium (9 lbs)",
    origin: "Found as a stray in Pittsburgh, Pennsylvania",
    location: "Pittsburgh, Pennsylvania",
    lat: 40.4406,
    lng: -79.9959,
    images: ["https://images.unsplash.com/photo-1498100152307-ce63fd6c5424?auto=format&fit=crop&w=900&q=80"],
    shortDescription:
      "A sharp-dressed charmer who supervises every household task closely.",
    story:
      "Nova showed up on a porch one winter and never left, eventually making her way into rescue care. She's endlessly curious, insists on inspecting every grocery bag and open drawer, and sleeps curled up against her favorite person's pillow every night.",
    breedInfo:
      "Tuxedo refers to the black-and-white bicolor pattern rather than a breed, caused by a piebald gene that limits pigment distribution. Cats with this pattern have a long history as ship and farm cats thanks to their hardy, adaptable nature.",
    favoriteFood: "Turkey pate, inspected thoroughly before eating.",
    temperament: ["Curious", "Confident", "Affectionate", "Playful"],
    goodWith: ["Families", "Other cats", "First-time owners"],
  },
  {
    id: "ziggy",
    name: "Ziggy",
    category: "cat",
    breed: "Brown Tabby",
    age: "1 year",
    gender: "Male",
    size: "Small-Medium (8 lbs)",
    origin: "Born in foster care in Columbus, Ohio",
    location: "Columbus, Ohio",
    lat: 39.9612,
    lng: -82.9988,
    images: ["https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&w=900&q=80"],
    shortDescription:
      "A playful young tabby with an endless supply of zoomies.",
    story:
      "Ziggy was born to a rescued mother and has spent his whole life around people, so he's remarkably well-socialized for his age. He tears through the house in bursts of energy, then collapses into a nap in the sunniest spot he can find. A cat tree is a must for this one.",
    breedInfo:
      "Brown tabby is one of the most common coat patterns in domestic cats, caused by the agouti gene creating a striped, marbled, or spotted look. Tabbies come from a huge range of genetic backgrounds and are known for their varied, often extroverted personalities.",
    favoriteFood: "Crunchy kibble, followed immediately by a nap.",
    temperament: ["Playful", "Energetic", "Social", "Curious"],
    goodWith: ["Kids", "Other cats", "Active households"],
  },
];

export const getPetById = (id: string) => pets.find((pet) => pet.id === id);
export const getPetsByCategory = (category: Pet["category"]) =>
  pets.filter((pet) => pet.category === category);
