import type { QuizQuestion } from '~/types/quiz-question';

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'q-001',
    type: 'exact-match',
    category: 'Technology',
    questionText: 'What does "HTTP" stand for?',
    correctAnswer: 'Hypertext Transfer Protocol',
    acceptedVariations: [
      'Hyper Text Transfer Protocol',
      'Hypertext Transfer Protocol Secure',
    ],
    hints: [
      'It is the foundation of data communication for the World Wide Web.',
      'The first word is "Hypertext" and the last is "Protocol".',
    ],
    explanation:
      'Tim Berners-Lee initiated development of HTTP at CERN in 1989. The protocol was designed to be simple and stateless, meaning the server does not retain information about the user between requests.',
  },
  {
    id: 'q-002',
    type: 'top-five',
    category: 'Geography',
    questionText: 'Name the top 5 largest countries by land area.',
    correctAnswers: [
      {
        answer: 'Russia',
        acceptedVariations: ['Russian Federation'],
        value: '17,1M km²',
      },
      {
        answer: 'Canada',
        value: '9,98M km²',
      },
      {
        answer: 'China',
        acceptedVariations: ['PRC', 'Peoples Republic of China'],
        value: '9,6M km²',
      },
      {
        answer: 'United States',
        acceptedVariations: ['USA', 'America', 'US', 'The US'],
        value: '9,5M km²',
      },
      {
        answer: 'Brazil',
        acceptedVariations: ['Brasil'],
        value: '8,5M km²',
      },
    ],
    hints: [
      'The largest spans 11 time zones.',
      'The United States is fourth, slightly smaller than China.',
    ],
    explanation:
      'Russia is massively dominant, occupying about 11% of the Earths total landmass. It is almost twice the size of Canada, the second-largest country.',
  },
  {
    id: 'q-003',
    type: 'multiple-choice',
    category: 'Science',
    questionText: 'Which element has the chemical symbol "Fe"?',
    options: ['Gold', 'Silver', 'Iron', 'Lead'],
    correctAnswer: 2,
    hints: [
      'This metal is commonly used in construction and machinery.',
      'It is the primary ingredient in steel.',
    ],
    explanation:
      'The symbol "Fe" comes from the Latin word "Ferrum". Iron is the most common element on Earth by mass, as it forms much of the planets outer and inner core.',
  },
  {
    id: 'q-004',
    type: 'estimation',
    category: 'History',
    questionText: 'In what year did the Titanic sink?',
    correctAnswer: 1912,
    tolerance: 0, // Strict
    range: { min: 1900, max: 1930 },
    hints: [
      'It was early in the 20th century, two years before WWI began.',
      'The ship was labeled "unsinkable" before its maiden voyage.',
    ],
    explanation:
      'The Titanic hit an iceberg on April 14, 1912, and sank early the next morning. It was one of three Olympic-class ocean liners built by Harland and Wolff; its sisters were the Olympic and the Britannic.',
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Titanic_the_sinking.jpg?width=600',
      altText: 'Illustration of the Titanic sinking',
      source: 'Wikimedia Commons',
      attribution: 'Public Domain',
    },
  },
  {
    id: 'q-005',
    type: 'top-five',
    category: 'Pop Culture',
    questionText:
      'Name the 5 highest-grossing movies of all time (Global Box Office).',
    correctAnswers: [
      {
        answer: 'Avatar',
        acceptedVariations: ['Avatar 1'],
        value: '$2.92B',
      },
      {
        answer: 'Avengers: Endgame',
        acceptedVariations: ['Avengers 4', 'Endgame'],
        value: '$2.79B',
      },
      {
        answer: 'Avatar: The Way of Water',
        acceptedVariations: ['Avatar 2', 'The Way of Water'],
        value: '$2.32B',
      },
      {
        answer: 'Titanic',
        value: '$2.26B',
      },
      {
        answer: 'Star Wars: The Force Awakens',
        acceptedVariations: ['Star Wars Ep 7', 'Force Awakens', 'Episode VII'],
        value: '$2.07B',
      },
    ],
    hints: [
      'James Cameron directed 3 of the top 5.',
      'The top movie features blue aliens.',
    ],
    explanation:
      'James Cameron is the undisputed king of the box office. If adjusted for inflation, "Gone with the Wind" would actually take the top spot, but in raw dollars, "Avatar" (2009) reigns supreme.',
  },
  {
    id: 'q-006',
    type: 'multiple-choice',
    category: 'Gaming',
    questionText: 'Who is the mascot of Nintendo?',
    options: ['Link', 'Kirby', 'Mario', 'Donkey Kong'],
    correctAnswer: 2,
    hints: ['He is an Italian plumber.', 'He has a brother named Luigi.'],
    explanation:
      'Mario first appeared in 1981 as "Jumpman" in the Donkey Kong arcade game. He was originally a carpenter before becoming a plumber in the 1983 arcade game Mario Bros.',
  },
  {
    id: 'q-007',
    type: 'estimation',
    category: 'Space',
    questionText:
      'How many minutes does it take for light from the Sun to reach Earth?',
    correctAnswer: 8.3,
    unit: 'minutes',
    tolerance: 0.3,
    precision: 1,
    range: { min: 0, max: 20 },
    hints: [
      'It is less than 10 minutes.',
      'Speed of light is approx 300.000 km/s.',
    ],
    explanation:
      'Light takes 8 minutes and 20 seconds to travel the 150 million km to Earth. This means if the Sun suddenly vanished, we wouldn’t know for over 8 minutes.',
  },
  {
    id: 'q-008',
    type: 'exact-match',
    category: 'Literature',
    questionText: 'Who wrote "Romeo and Juliet"?',
    correctAnswer: 'William Shakespeare',
    acceptedVariations: ['Shakespeare', 'Bard of Avon'],
    hints: [
      'He is arguably the most famous playwright in history.',
      'His initials are W.S.',
    ],
    explanation:
      'Written early in his career (c. 1597), the play was based on an Italian tale. It has been adapted into more films and plays than almost any other story in history.',
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/William_Shakespeare_by_John_Taylor,_edited.jpg?width=600',
      altText: 'The Chandos portrait of William Shakespeare',
      source: 'Wikimedia Commons',
      attribution: 'John Taylor / Public Domain',
    },
  },
  {
    id: 'q-009',
    type: 'estimation',
    category: 'Astronomy',
    questionText: 'What is the diameter of the Earth at the equator?',
    correctAnswer: 12742,
    unit: 'km',
    tolerance: 500,
    range: { min: 0, max: 20000 },
    hints: [
      'It is roughly 40.000 km in circumference.',
      'Think between 10.000 and 15.000 km.',
    ],
    explanation:
      'Earth is not a perfect sphere; it is an "oblate spheroid." This means the diameter at the equator (12.742 km) is slightly larger than the diameter from pole to pole (12.714 km).',
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/The_Blue_Marble.jpg?width=600',
      altText: 'The Blue Marble photo of Earth',
      source: 'Wikimedia Commons',
      attribution: 'NASA/Apollo 17 Crew / Public Domain',
    },
  },
  {
    id: 'q-010',
    type: 'exact-match',
    category: 'Tech',
    questionText: 'What is the programming language that runs in web browsers?',
    correctAnswer: 'JavaScript',
    acceptedVariations: ['JS', 'EcmaScript'],
    hints: [
      'It is often abbreviated as two letters.',
      'Despite the name, it is not related to the Java language.',
    ],
    explanation:
      'JavaScript was created by Brendan Eich in just 10 days in 1995. It was originally named "Mocha", then "LiveScript", before finally settling on JavaScript for marketing reasons.',
  },
  {
    id: 'q-011',
    type: 'estimation',
    category: 'History',
    questionText: 'In what year was the first iPhone released?',
    correctAnswer: 2007,
    range: { min: 1990, max: 2025 },
    hints: [
      'It was introduced by Steve Jobs in January.',
      'The device had no App Store when it launched.',
    ],
    explanation:
      'The original iPhone was a GSM-only phone and lacked 3G. When it launched, it did not support third-party apps, copy-paste, or video recording.',
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/IPhone_First_Generation.jpg?width=600',
      altText: 'The first generation iPhone',
      source: 'Wikimedia Commons',
      attribution: 'Carl Berkeley / CC BY-SA 2.0',
    },
  },
  {
    id: 'q-012',
    type: 'multiple-choice',
    category: 'Geography',
    questionText: 'What is the capital city of Australia?',
    options: ['Sydney', 'Melbourne', 'Canberra', 'Brisbane'],
    correctAnswer: 2, // Canberra
    hints: [
      'It is an inland city, chosen as a compromise between the two largest cities.',
      'The name is thought to mean "meeting place" in the local Indigenous language.',
    ],
    explanation:
      'Canberra was selected as the capital in 1908 as a compromise between rivals Sydney and Melbourne. American architect Walter Burley Griffin won the competition to design the city.',
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Parliament_House_at_dusk,_Canberra_ACT.jpg?width=600',
      altText: 'Parliament House in Canberra',
      source: 'Wikimedia Commons',
      attribution: 'Thennicke / CC BY-SA 4.0',
    },
  },
  {
    id: 'q-013',
    type: 'exact-match',
    category: 'Science',
    questionText: 'What is the hardest natural substance on Earth?',
    correctAnswer: 'Diamond',
    acceptedVariations: ['Diamonds'],
    hints: [
      'It is a solid form of the element carbon.',
      'It is commonly found in engagement rings.',
    ],
    explanation:
      'Diamonds rate a 10 on the Mohs scale of mineral hardness. They are formed deep within the Earth under extreme heat and pressure and are brought to the surface by volcanic eruptions.',
  },
  {
    id: 'q-014',
    type: 'top-five',
    category: 'Nature',
    questionText: 'Name the 5 "Big Cats" of the genus Panthera.',
    correctAnswers: [
      {
        answer: 'Tiger',
      },
      {
        answer: 'Lion',
      },
      {
        answer: 'Jaguar',
      },
      {
        answer: 'Leopard',
      },
      {
        answer: 'Snow Leopard',
        acceptedVariations: ['Ounce'],
      },
    ],
    hints: [
      'One is known as the "King of the Jungle".',
      'The Snow Leopard is the only one that cannot roar.',
    ],
    explanation:
      'These are the only cats capable of roaring (except the Snow Leopard). This ability comes from the specialized structure of their hyoid bone.',
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Sibirischer tiger de edit02.jpg?width=600',
      altText: 'Siberian Tiger',
      source: 'Wikimedia Commons',
      attribution: 'S. Taheri / CC BY-SA 2.5',
    },
  },
  {
    id: 'q-015',
    type: 'estimation',
    category: 'Sports',
    questionText: 'What is the height of a regulation NBA basketball hoop?',
    correctAnswer: 10,
    unit: 'feet',
    tolerance: 0, // Strict
    range: { min: 5, max: 15 },
    hints: [
      'It is exactly 3.048 meters.',
      'This height has been standard since the game was invented.',
    ],
    explanation:
      'The 10-foot standard was established by James Naismith in 1891 simply because that was the height of the gym railing where he nailed the original peach baskets.',
  },
  {
    id: 'q-016',
    type: 'exact-match',
    category: 'Pop Culture',
    questionText: 'Which fictional city is Batman’s home?',
    correctAnswer: 'Gotham City',
    acceptedVariations: ['Gotham'],
    hints: [
      'It is typically depicted as a dark, gritty version of New York City.',
      'It shares its name with a style of typeface.',
    ],
    explanation:
      'Gotham City was first identified as Batman\'s home in Batman #4 (1940). Before that, his adventures were said to take place in New York City or "Metropolis".',
  },
  {
    id: 'q-017',
    type: 'multiple-choice',
    category: 'Food',
    questionText:
      'Which fruit is known as the "King of Fruits" and is famous for its strong smell?',
    options: ['Mango', 'Durian', 'Jackfruit', 'Papaya'],
    correctAnswer: 1, // Durian
    hints: [
      'It is banned in many hotels and public transport in Southeast Asia due to its odor.',
      'It has a spiky, thorn-covered rind.',
    ],
    explanation:
      'The Durian has a distinctively potent odor that some compare to rotting onions or gym socks. Despite the smell, the flesh is rich and creamy, making it a delicacy.',
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Durian_fruit_and_seeds_0495.JPG?width=600',
      altText: 'Open Durian fruit showing seeds',
      source: 'Wikimedia Commons',
      attribution: 'Btcpg / CC BY-SA 4.0',
    },
  },
  {
    id: 'q-018',
    type: 'exact-match',
    category: 'Art',
    questionText: 'Who painted the "Mona Lisa"?',
    correctAnswer: 'Leonardo da Vinci',
    acceptedVariations: ['Leonardo', 'Da Vinci', 'Leonardo DaVinci'],
    hints: [
      'He was a true "Renaissance Man" - painter, engineer, and scientist.',
      'The painting hangs in the Louvre Museum in Paris.',
    ],
    explanation:
      'Painted in the early 16th century, the Mona Lisa is famous for her enigmatic smile. It holds the Guinness World Record for the highest known insurance valuation in history.',
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg?width=600',
      altText: 'The Mona Lisa painting',
      source: 'Wikimedia Commons',
      attribution: 'Public Domain',
    },
  },
  {
    id: 'q-019',
    type: 'multiple-choice',
    category: 'Anatomy',
    questionText: 'Where is the smallest bone in the human body located?',
    options: ['Nose', 'Pinky Finger', 'Ear', 'Toe'],
    correctAnswer: 2, // Ear (Stapes)
    hints: [
      'It is essential for hearing.',
      'The bone is called the "stapes" or "stirrup".',
    ],
    explanation:
      'The stapes is located in the middle ear and is roughly the size of a grain of rice (about 3mm x 2.5mm). It transmits sound vibrations from the anvil to the inner ear.',
  },
  {
    id: 'q-020',
    type: 'estimation',
    category: 'Geography',
    questionText: 'What is the height of Mount Everest above sea level?',
    correctAnswer: 8849,
    unit: 'meters',
    tolerance: 100,
    range: { min: 5000, max: 10000 },
    hints: [
      'It is almost 9 kilometers high.',
      'The exact height was updated slightly in 2020 by Nepal and China.',
    ],
    explanation:
      'The official height is 8.848,86 meters. The mountain continues to grow roughly 4mm per year due to the collision of the Indian and Eurasian tectonic plates.',
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Everest, Himalayas.jpg?width=600',
      altText: 'Mount Everest, Nepal, Himalayas',
      source: 'Wikimedia Commons',
      attribution: 'Vyacheslav Argenberg / CC BY 4.0',
    },
  },
  {
    id: 'q-021',
    type: 'top-five',
    category: 'Space',
    questionText:
      'Name the 5 largest planets in our Solar System (by diameter).',
    correctAnswers: [
      {
        answer: 'Jupiter',
        value: '139k km',
      },
      {
        answer: 'Saturn',
        value: '116k km',
      },
      {
        answer: 'Uranus',
        value: '50k km',
      },
      {
        answer: 'Neptune',
        value: '49k km',
      },
      {
        answer: 'Earth',
        acceptedVariations: ['Terra'],
        value: '12k km',
      },
    ],
    hints: [
      'The top four are all Gas Giants or Ice Giants.',
      'Earth is the largest of the rocky planets, ranking 5th overall.',
    ],
    explanation:
      'Jupiter is so large that over 1,300 Earths could fit inside it. The four gas giants make up 99% of the mass orbiting the Sun.',
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Portrait_of_Jupiter_from_Cassini.jpg?width=600',
      altText: 'True color portrait of Jupiter',
      source: 'Wikimedia Commons',
      attribution: 'NASA/JPL / Public Domain',
    },
  },
  {
    id: 'q-022',
    type: 'multiple-choice',
    category: 'Physics',
    questionText: 'What is the unit of measurement for electrical resistance?',
    options: ['Volt', 'Ampere', 'Ohm', 'Watt'],
    correctAnswer: 2, // Ohm
    hints: [
      'The symbol is the Greek letter Omega (Ω).',
      'Named after a German physicist named Georg.',
    ],
    explanation:
      "Ohm's Law states that Current (I) equals Voltage (V) divided by Resistance (R). The Ohm is named after Georg Ohm, who formulated this relationship in 1827.",
  },
  {
    id: 'q-023',
    type: 'exact-match',
    category: 'Biology',
    questionText:
      'What is the process by which plants convert sunlight into energy?',
    correctAnswer: 'Photosynthesis',
    acceptedVariations: [],
    hints: [
      'It involves the green pigment chlorophyll.',
      'The name comes from Greek words meaning "light" and "putting together".',
    ],
    explanation:
      'During photosynthesis, plants take in carbon dioxide and water to produce glucose (sugar) and release oxygen as a byproduct.',
  },
  {
    id: 'q-024',
    type: 'estimation',
    category: 'Physics',
    questionText: 'What is the speed of sound in dry air at 20°C?',
    correctAnswer: 343,
    unit: 'm/s',
    tolerance: 15,
    range: { min: 200, max: 500 },
    hints: [
      'It is roughly 1.235 km/h.',
      'It is much slower than the speed of light.',
    ],
    explanation:
      'The speed of sound varies with temperature and medium. In water, sound travels over 4 times faster than it does in air.',
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/FA-18_Hornet_breaking_sound_barrier_(7_July_1999).jpg?width=600',
      altText: 'An F-18 Hornet breaking the sound barrier',
      source: 'Wikimedia Commons',
      attribution: 'U.S. Navy / Public Domain',
    },
  },
  {
    id: 'q-025',
    type: 'top-five',
    category: 'Geography',
    questionText: 'Name the 5 oceans of the world.',
    correctAnswers: [
      {
        answer: 'Pacific Ocean',
        acceptedVariations: ['Pacific'],
      },
      {
        answer: 'Atlantic Ocean',
        acceptedVariations: ['Atlantic'],
      },
      {
        answer: 'Indian Ocean',
        acceptedVariations: ['Indian'],
      },
      {
        answer: 'Southern Ocean',
        acceptedVariations: ['Southern', 'Antarctic Ocean'],
      },
      {
        answer: 'Arctic Ocean',
        acceptedVariations: ['Arctic'],
      },
    ],
    hints: [
      'The Pacific is the largest.',
      'The Southern Ocean was officially recognized by the IHO relatively recently (2000/2021).',
    ],
    explanation:
      "The Pacific Ocean alone covers more area than all of the Earth's landmass combined. The Arctic Ocean is the smallest and shallowest.",
  },
  {
    id: 'q-026',
    type: 'multiple-choice',
    category: 'Literature',
    questionText:
      'Which Hogwarts House is known for valuing bravery and chivalry?',
    options: ['Slytherin', 'Ravenclaw', 'Gryffindor', 'Hufflepuff'],
    correctAnswer: 2, // Gryffindor
    hints: [
      'Harry Potter himself belongs to this house.',
      'Its symbol is a lion.',
    ],
    explanation:
      'Gryffindor was founded by Godric Gryffindor. Its house colors are scarlet and gold, and its ghost is Sir Nicholas de Mimsy-Porpington (Nearly Headless Nick).',
  },
  {
    id: 'q-027',
    type: 'estimation',
    category: 'Music',
    questionText: 'How many keys are there on a standard full-sized piano?',
    correctAnswer: 88,
    tolerance: 0, // Strict
    range: { min: 50, max: 100 },
    hints: [
      'It is an even number.',
      'It includes 52 white keys and 36 black keys.',
    ],
    explanation:
      'The 88-key standard (A0 to C8) became popularized by Steinway in the late 1880s. Before that, pianos often had only 85 keys.',
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Pianoforte_Klaviatur-wIKI_4.jpg?width=600',
      altText: 'Standard piano keyboard layout',
      source: 'Wikimedia Commons',
      attribution: 'Olebrandt / Public Domain',
    },
  },
  {
    id: 'q-028',
    type: 'top-five',
    category: 'Chemistry',
    questionText:
      'Name the 5 most abundant elements in Earth’s crust (by percentage).',
    correctAnswers: [
      {
        answer: 'Oxygen',
        acceptedVariations: ['O', 'O2'],
        value: '46.6%',
      },
      {
        answer: 'Silicon',
        acceptedVariations: ['Si'],
        value: '27.7%',
      },
      {
        answer: 'Aluminum',
        acceptedVariations: ['Al', 'Aluminium'],
        value: '8.1%',
      },
      {
        answer: 'Iron',
        acceptedVariations: ['Fe'],
        value: '5.0%',
      },
      {
        answer: 'Calcium',
        acceptedVariations: ['Ca'],
        value: '3.6%',
      },
    ],
    hints: [
      'The top one is essential for human respiration.',
      'The second is the main component of sand and glass.',
    ],
    explanation:
      "While the Earth's core is mostly Iron, the crust we live on is dominated by Oxygen and Silicon, which combine to form silicates (rocks).",
  },
  {
    id: 'q-029',
    type: 'exact-match',
    category: 'History',
    questionText: 'Who was the first human to travel into space?',
    correctAnswer: 'Yuri Gagarin',
    acceptedVariations: ['Gagarin'],
    hints: ['He was a Soviet cosmonaut.', 'His flight took place in 1961.'],
    explanation:
      'On April 12, 1961, Gagarin completed one orbit of Earth aboard the Vostok 1 capsule. His flight lasted just 108 minutes.',
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Cosmonaut_Yuri_Gagarin_(13403704893).jpg?width=600',
      altText: 'Portrait of Yuri Gagarin',
      source: 'Wikimedia Commons',
      attribution: 'NASA / Public Domain',
    },
  },
  {
    id: 'q-030',
    type: 'estimation',
    category: 'Animals',
    questionText: 'What is the top speed (in km/h) of a cheetah?',
    correctAnswer: 120,
    unit: 'km/h',
    tolerance: 15,
    range: { min: 50, max: 160 },
    hints: [
      'They are the fastest land animal.',
      'That is roughly 75 miles per hour.',
    ],
    explanation:
      'Cheetahs can accelerate from 0 to 100 km/h in just 3 seconds, faster than many sports cars. However, they can only maintain this speed for about 30 seconds before overheating.',
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Fastest animal.jpg?width=600',
      altText: 'A cheetah running at full speed',
      source: 'Wikimedia Commons',
      attribution: 'Srivath / CC BY-SA 4.0',
    },
  },
  {
    id: 'q-031',
    type: 'multiple-choice',
    category: 'Food',
    questionText:
      'What scale is used to measure the spiciness of chili peppers?',
    options: ['Richter Scale', 'Scoville Scale', 'Mohs Scale', 'Kelvin Scale'],
    correctAnswer: 1, // Scoville
    hints: [
      'Named after an American pharmacist named Wilbur.',
      'Pure capsaicin tops this scale at 16 million.',
    ],
    explanation:
      'The Scoville scale measures the concentration of capsaicinoids. For context, a Jalapeño is 2.500–8.000 SHU, while the Carolina Reaper is over 1,6 million SHU.',
  },
  {
    id: 'q-032',
    type: 'exact-match',
    category: 'Movies',
    questionText: 'In "The Matrix", which pill does Neo take to see the truth?',
    correctAnswer: 'Red Pill',
    acceptedVariations: ['Red', 'The Red Pill'],
    hints: [
      'The other option would have let him wake up in his bed and believe whatever he wanted.',
      'Morpheus offers him a blue one and a...?',
    ],
    explanation:
      'The concept of the "Red Pill" has become a cultural metaphor for learning a potentially unsettling truth rather than remaining in blissful ignorance.',
  },
  {
    id: 'q-033',
    type: 'top-five',
    category: 'Gaming',
    questionText:
      'Name the top 5 best-selling video game consoles of all time.',
    correctAnswers: [
      {
        answer: 'PlayStation 2',
        acceptedVariations: ['PS2', 'Sony PlayStation 2'],
        value: '~155M',
      },
      {
        answer: 'Nintendo DS',
        acceptedVariations: ['DS', 'NDS'],
        value: '154M',
      },
      {
        answer: 'Nintendo Switch',
        acceptedVariations: ['Switch'],
        value: '~143M',
      },
      {
        answer: 'Game Boy',
        acceptedVariations: ['GB', 'Game Boy Color', 'GameBoy'],
        value: '118M',
      },
      {
        answer: 'PlayStation 4',
        acceptedVariations: ['PS4'],
        value: '117M',
      },
    ],
    hints: [
      'Sony and Nintendo dominate this list exclusively.',
      'The #1 spot belongs to a Sony console released in 2000.',
    ],
    explanation:
      'The PlayStation 2 remains the champion largely due to its long lifespan and ability to play DVDs. The Nintendo Switch is currently the only active console in the top 5 and may eventually take the #1 spot.',
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Sony-PlayStation-2-70001-Console-BR.jpg?width=600',
      altText: 'The PlayStation 2 Console',
      source: 'Wikimedia Commons',
      attribution: 'Evan-Amos / Public Domain',
    },
  },
  {
    id: 'q-034',
    type: 'estimation',
    category: 'Geography',
    questionText: 'How long is the Nile River?',
    correctAnswer: 6650,
    unit: 'km',
    tolerance: 300,
    range: { min: 4000, max: 9000 },
    hints: [
      'It is generally considered the longest river in the world.',
      'It flows north through northeastern Africa.',
    ],
    explanation:
      'The Nile flows through 11 countries. While there is an ongoing debate about whether the Amazon River might be slightly longer, the Nile is traditionally recognized as the longest at approx 6,650 km.',
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Nile_River_(MODIS_2022-01-26).jpg?width=600',
      altText: 'Satellite view of the Nile River',
      source: 'Wikimedia Commons',
      attribution: 'NASA / Public Domain',
    },
  },
  {
    id: 'q-035',
    type: 'multiple-choice',
    category: 'Anatomy',
    questionText: 'Which blood type is known as the "Universal Donor"?',
    options: [
      'Type A Positive',
      'Type AB Negative',
      'Type O Negative',
      'Type O Positive',
    ],
    correctAnswer: 2, // O Negative
    hints: [
      'Red blood cells of this type lack A, B, and Rh antigens.',
      "It is often used in emergency situations when the patient's blood type is unknown.",
    ],
    explanation:
      'O Negative blood can be given to patients of any blood type. However, O Negative individuals can only receive O Negative blood themselves.',
  },
];
