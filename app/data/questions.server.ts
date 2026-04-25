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
      // 'It is the primary ingredient in steel.',
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
    hints: [
      'He is an Italian plumber.',
      // 'He has a brother named Luigi.'
    ],
    explanation:
      'Mario first appeared in 1981 as "Jumpman" in the Donkey Kong arcade game. He was originally a carpenter before becoming a plumber in the 1983 arcade game Mario Bros.',
  },
  {
    id: 'q-007',
    type: 'multiple-choice',
    category: 'Technology',
    questionText: 'Who co-founded Microsoft alongside Bill Gates?',
    options: ['Steve Jobs', 'Steve Wozniak', 'Paul Allen', 'Tim Berners-Lee'],
    correctAnswer: 2, // Paul Allen
    hints: [
      'He was a childhood friend of Gates.',
      'He owned the Seattle Seahawks and Portland Trail Blazers.',
    ],
    explanation:
      'Paul Allen and Bill Gates founded Microsoft in 1975 in Albuquerque, New Mexico. Allen coined the original name "Micro-Soft" (a combination of microcomputer and software).',
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Paul_G._Allen_(cropped).jpg?width=600',
      altText: 'Paul Allen',
      source: 'Wikimedia Commons',
      attribution: 'Miles Harris / CC BY-SA 3.0',
    },
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
      // 'The name is thought to mean "meeting place" in the local Indigenous language.',
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
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Sibirischer_tiger_de_edit02.jpg?width=600',
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
      // 'It has a spiky, thorn-covered rind.',
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
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Mona_Lisa,_by_Leonardo_da_Vinci,_from_C2RMF_retouched.jpg?width=600',
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
      // 'It is essential for hearing.',
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
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Mount_Everest,_Himalayas.jpg?width=600',
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
      // 'Named after a German physicist named Georg.',
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
    type: 'multiple-choice',
    category: 'Music',
    questionText:
      'For which holiday was the classic song "Jingle Bells" originally written?',
    options: ['Christmas', 'New Year’s Eve', 'Thanksgiving', 'Easter'],
    correctAnswer: 2, // Thanksgiving
    hints: [
      'It was originally titled "The One Horse Open Sleigh".',
      'It was intended for a Sunday school choir in autumn.',
    ],
    explanation:
      'James Lord Pierpont published the song in 1857 for Thanksgiving. The lyrics mention snow and sleigh rides, which led to it becoming associated with Christmas over time.',
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/One_Horse_Open_Sleigh_title_page.jpg?width=600',
      altText: 'Original sheet music cover for "The One Horse Open Sleigh"',
      source: 'Wikimedia Commons',
      attribution: 'Public Domain',
    },
  },
  {
    id: 'q-025',
    type: 'multiple-choice',
    category: 'History',
    questionText:
      'Which modern country is credited with starting the tradition of the Christmas tree?',
    options: ['England', 'United States', 'Germany', 'Norway'],
    correctAnswer: 2, // Germany
    hints: [
      'The tradition began in the 16th century.',
      'Devout Christians brought decorated trees into their homes.',
    ],
    explanation:
      'Germany is credited with starting the Christmas tree tradition as we know it in the 16th century when devout Christians brought decorated trees into their homes. It is said that Martin Luther was the first to add lighted candles to a tree.',
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Rockefeller_Christmas_Tree_Close-Up_2018.jpg?width=600',
      altText: 'The Rockefeller Center Christmas Tree',
      source: 'Wikimedia Commons',
      attribution: 'Matthew Binebrink / CC BY-SA 4.0',
    },
  },
  {
    id: 'q-026',
    type: 'estimation',
    category: 'Animals',
    questionText: 'What is the top speed (in km/h) of a cheetah?',
    correctAnswer: 120,
    unit: 'km/h',
    tolerance: 10,
    range: { min: 50, max: 160 },
    hints: [
      'They are the fastest land animal.',
      'That is roughly 75 miles per hour.',
    ],
    explanation:
      'Cheetahs can accelerate from 0 to 100 km/h in just 3 seconds, faster than many sports cars. However, they can only maintain this speed for about 30 seconds before overheating.',
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Fastest_animal.jpg?width=600',
      altText: 'A cheetah running at full speed',
      source: 'Wikimedia Commons',
      attribution: 'Srivath / CC BY-SA 4.0',
    },
  },
  {
    id: 'q-027',
    type: 'estimation',
    category: 'Physics',
    questionText: 'What is the speed of sound in dry air at 20°C?',
    correctAnswer: 343,
    unit: 'm/s',
    tolerance: 15,
    range: { min: 200, max: 500 },
    hints: [
      'It is much slower than the speed of light.',
      'It is roughly 1.235 km/h.',
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
    id: 'q-028',
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
    id: 'q-029',
    type: 'multiple-choice',
    category: 'Literature',
    questionText:
      'Which Hogwarts House is known for valuing bravery and chivalry?',
    options: ['Slytherin', 'Ravenclaw', 'Gryffindor', 'Hufflepuff'],
    correctAnswer: 2, // Gryffindor
    hints: [
      'Harry Potter himself belongs to this house.',
      // 'Its symbol is a lion.',
    ],
    explanation:
      'Gryffindor was founded by Godric Gryffindor. Its house colors are scarlet and gold, and its ghost is Sir Nicholas de Mimsy-Porpington (Nearly Headless Nick).',
  },
  {
    id: 'q-030',
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
    id: 'q-031',
    type: 'estimation',
    category: 'History',
    questionText:
      'In what year did the first "Ball Drop" occur in Times Square on New Year’s Eve?',
    correctAnswer: 1907,
    range: { min: 1850, max: 1950 },
    hints: [
      'It was shortly after the turn of the 20th century.',
      'The ball was made of iron and wood.',
    ],
    explanation:
      'The first ball drop happened in 1907 to welcome 1908. The ball was designed by Artkraft Strauss, weighed 700 pounds, and was lowered from the flagpole of One Times Square.',
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/New_Years_Crystal_Ball_(6279777660).jpg?width=600',
      altText: 'The Times Square Ball',
      source: 'Wikimedia Commons',
      attribution: 'Erik Drost / CC BY 2.0',
    },
  },
  {
    id: 'q-032',
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
    id: 'q-033',
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
    id: 'q-034',
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
    id: 'q-035',
    type: 'multiple-choice',
    category: 'Food',
    questionText:
      'What scale is used to measure the spiciness of chili peppers?',
    options: ['Richter Scale', 'Scoville Scale', 'Mohs Scale', 'Kelvin Scale'],
    correctAnswer: 1, // Scoville
    hints: [
      'Named after an American pharmacist named Wilbur.',
      // 'Pure capsaicin tops this scale at 16 million.',
    ],
    explanation:
      'The Scoville scale measures the concentration of capsaicinoids. For context, a Jalapeño is 2.500–8.000 SHU, while the Carolina Reaper is over 1,6 million SHU.',
  },
  {
    id: 'q-036',
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
    id: 'q-037',
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
    id: 'q-038',
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
    id: 'q-039',
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
      // "It is often used in emergency situations when the patient's blood type is unknown.",
    ],
    explanation:
      'O Negative blood can be given to patients of any blood type. However, O Negative individuals can only receive O Negative blood themselves.',
  },
  {
    id: 'q-040',
    type: 'exact-match',
    category: 'Nature',
    questionText:
      'What is the largest animal known to have ever lived on Earth?',
    correctAnswer: 'Blue Whale',
    acceptedVariations: ['The Blue Whale', 'Whale'],
    hints: [
      'It lives in the ocean.',
      'Its tongue alone can weigh as much as an elephant.',
    ],
    explanation:
      'The Blue Whale can reach lengths of up to 30 meters (98 ft) and weigh upwards of 170 tonnes. It is larger than any known dinosaur.',
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Blue_Whale_001_body_bw.jpg?width=600',
      altText: 'A Blue Whale surfacing',
      source: 'Wikimedia Commons',
      attribution: 'NOAA Photo Library / Public Domain',
    },
  },
  {
    id: 'q-041',
    type: 'estimation',
    category: 'History',
    questionText: 'How many years did the "Hundred Years’ War" actually last?',
    correctAnswer: 116,
    tolerance: 5,
    range: { min: 90, max: 130 },
    hints: [
      'It lasted slightly longer than its name suggests.',
      'It was fought between England and France.',
    ],
    explanation:
      'The conflict between the House of Plantagenet (England) and the House of Valois (France) lasted from 1337 to 1453, totaling 116 years.',
  },
  {
    id: 'q-042',
    type: 'top-five',
    category: 'Science',
    questionText:
      'Name the 5 "Noble Gases" closest to the top of the Periodic Table.',
    correctAnswers: [
      { answer: 'Helium', acceptedVariations: ['He'] },
      { answer: 'Neon', acceptedVariations: ['Ne'] },
      { answer: 'Argon', acceptedVariations: ['Ar'] },
      { answer: 'Krypton', acceptedVariations: ['Kr'] },
      { answer: 'Xenon', acceptedVariations: ['Xe'] },
    ],
    otherOptions: [{ answer: 'Radon', acceptedVariations: ['Rn'] }],
    hints: [
      'They are in Group 18 and are odorless and colorless.',
      'The first is used in balloons, the second in glowing signs.',
    ],
    explanation:
      'Noble gases are chemically inert, meaning they rarely react with other elements. This makes them useful for applications like lighting and welding.',
  },
  {
    id: 'q-043',
    type: 'exact-match',
    category: 'Geography',
    questionText: 'What is the capital city of Japan?',
    correctAnswer: 'Tokyo',
    hints: [
      'It is the most populous metropolitan area in the world.',
      'It was formerly known as Edo.',
    ],
    explanation:
      'Tokyo became the capital in 1868 when the Emperor moved his residence there from Kyoto.',
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Skyscrapers_of_Shinjuku_2009_January.jpg?width=600',
      altText: 'Skyline of Shinjuku, Tokyo',
      source: 'Wikimedia Commons',
      attribution: 'Morio / CC BY-SA 3.0',
    },
  },
  {
    id: 'q-044',
    type: 'multiple-choice',
    category: 'Movies',
    questionText: 'Who directed the original 1993 film "Jurassic Park"?',
    options: [
      'George Lucas',
      'James Cameron',
      'Steven Spielberg',
      'Christopher Nolan',
    ],
    correctAnswer: 2, // Spielberg
    hints: [
      'He also directed "E.T." and "Jaws".',
      'He is one of the most commercially successful directors in history.',
    ],
    explanation:
      'Steven Spielberg directed the film based on Michael Crichton’s novel. It was a landmark in the use of computer-generated imagery (CGI).',
  },
  {
    id: 'q-045',
    type: 'exact-match',
    category: 'Literature',
    questionText: 'Who wrote the dystopian novel "1984"?',
    correctAnswer: 'George Orwell',
    acceptedVariations: ['Orwell', 'Eric Arthur Blair'],
    hints: ['He also wrote "Animal Farm".', 'Big Brother is watching you.'],
    explanation:
      'Published in 1949, "1984" introduced terms like "Big Brother," "Doublethink," and "Newspeak" into common usage.',
  },
  {
    id: 'q-046',
    type: 'estimation',
    category: 'Sports',
    questionText: 'How long is a standard marathon race in kilometers?',
    correctAnswer: 42.195,
    unit: 'km',
    tolerance: 0.5,
    precision: 1,
    range: { min: 20, max: 60 },
    hints: [
      'It is roughly 26.2 miles.',
      'The distance was standardized at the 1908 London Olympics.',
    ],
    explanation:
      'The exact distance of 42.195 km reflects the route from Windsor Castle to the White City Stadium at the 1908 Olympics, finishing right in front of the Royal Box.',
  },
  {
    id: 'q-047',
    type: 'top-five',
    category: 'Geography',
    questionText: 'Name 5 countries that share a land border with Germany.',
    correctAnswers: [
      { answer: 'France' },
      { answer: 'Poland' },
      { answer: 'Austria' },
      { answer: 'Switzerland' },
      { answer: 'Netherlands' },
    ],
    otherOptions: [
      { answer: 'Denmark' },
      { answer: 'Czech Republic', acceptedVariations: ['Czechia'] },
      { answer: 'Luxembourg' },
      { answer: 'Belgium' },
    ],
    hints: [
      'Germany has 9 neighbors in total.',
      'One is famous for cheese and tulips, another for the Alps.',
    ],
    explanation:
      'Germany shares borders with Denmark to the north, Poland and the Czech Republic to the east, Austria and Switzerland to the south, and France, Luxembourg, Belgium, and the Netherlands to the west.',
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Europe_map_de_2.png?width=600',
      altText: 'Map of Germany in Europe',
      source: 'Wikimedia Commons',
      attribution: 'Public Domain',
    },
  },
  {
    id: 'q-048',
    type: 'multiple-choice',
    category: 'Food',
    questionText: 'What is the primary ingredient in the dip Hummus?',
    options: ['Lentils', 'Chickpeas', 'White Beans', 'Soybeans'],
    correctAnswer: 1, // Chickpeas
    hints: [
      'They are also known as Garbanzo beans.',
      'It is blended with tahini, lemon juice, and garlic.',
    ],
    explanation:
      'Hummus comes from the Arabic word for "chickpeas". It has been eaten in the Middle East for centuries.',
  },
  {
    id: 'q-049',
    type: 'exact-match',
    category: 'Art',
    questionText: 'Who painted "The Starry Night"?',
    correctAnswer: 'Vincent van Gogh',
    acceptedVariations: ['Van Gogh', 'Vincent Van Gogh'],
    hints: [
      'He was a Dutch Post-Impressionist painter.',
      'He famously cut off part of his own ear.',
    ],
    explanation:
      'Painted in June 1889, it depicts the view from the east-facing window of his asylum room at Saint-Rémy-de-Provence, just before sunrise.',
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg?width=600',
      altText: 'The Starry Night painting',
      source: 'Wikimedia Commons',
      attribution: 'Public Domain',
    },
  },
  {
    id: 'q-050',
    type: 'estimation',
    category: 'Space',
    questionText: 'How many moons does the planet Mars have?',
    correctAnswer: 2,
    range: { min: 0, max: 10 },
    hints: [
      'Their names are Phobos and Deimos.',
      'It is the same number as the amount of eyes on a human face.',
    ],
    explanation:
      'Mars has two small, irregularly shaped moons, Phobos (fear) and Deimos (panic), named after the horses that pulled the chariot of the Greek war god Ares.',
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/OSIRIS_Mars_true_color.jpg?width=600',
      altText: 'Planet Mars',
      source: 'Wikimedia Commons',
      attribution: 'ESA / CC BY-SA 3.0 IGO',
    },
  },
  {
    id: 'q-051',
    type: 'top-five',
    category: 'History',
    questionText: 'Name the first 5 Presidents of the United States.',
    correctAnswers: [
      { answer: 'George Washington', acceptedVariations: ['Washington'] },
      { answer: 'John Adams', acceptedVariations: ['Adams'] },
      { answer: 'Thomas Jefferson', acceptedVariations: ['Jefferson'] },
      { answer: 'James Madison', acceptedVariations: ['Madison'] },
      { answer: 'James Monroe', acceptedVariations: ['Monroe'] },
    ],
    hints: [
      'Washington was the very first.',
      'One of them wrote the Declaration of Independence.',
    ],
    explanation:
      'These five Founding Fathers served consecutive terms from 1789 to 1825. Four of the five were from Virginia (Adams was from Massachusetts).',
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Gilbert_Stuart_Williamstown_Portrait_of_George_Washington.jpg?width=600',
      altText: 'Portrait of George Washington',
      source: 'Wikimedia Commons',
      attribution: 'Public Domain',
    },
  },
  {
    id: 'q-052',
    type: 'multiple-choice',
    category: 'Biology',
    questionText:
      'Which type of blood cell is primarily responsible for fighting infections?',
    options: ['Red Blood Cells', 'Platelets', 'White Blood Cells', 'Plasma'],
    correctAnswer: 2, // White
    hints: [
      'They are also called leukocytes.',
      'They are a key part of the immune system.',
    ],
    explanation:
      'White blood cells account for only about 1% of your blood, but their impact is significant. They flow through your bloodstream to battle viruses, bacteria, and other foreign invaders.',
  },
  {
    id: 'q-053',
    type: 'exact-match',
    category: 'Geography',
    questionText: 'Which country has the most islands in the world?',
    correctAnswer: 'Sweden',
    hints: ['It is a Scandinavian country.', 'It has over 260,000 islands.'],
    explanation:
      'Sweden has an estimated 267,570 islands. However, fewer than 1,000 of them are inhabited. Norway and Finland follow closely behind.',
  },
  {
    id: 'q-054',
    type: 'estimation',
    category: 'Pop Culture',
    questionText: 'How many episodes of the TV sitcom "Friends" were aired?',
    correctAnswer: 236,
    range: { min: 100, max: 400 },
    tolerance: 10,
    hints: ['The show ran for 10 seasons.', 'It is between 200 and 250.'],
    explanation:
      'Friends aired from 1994 to 2004. The 236 episodes became a cultural phenomenon, launching the careers of Jennifer Aniston, Courteney Cox, Lisa Kudrow, Matt LeBlanc, Matthew Perry, and David Schwimmer.',
  },
  {
    id: 'q-055',
    type: 'multiple-choice',
    category: 'Technology',
    questionText: 'In the web address "HTTPS", what does the "S" stand for?',
    options: ['Standard', 'Secure', 'System', 'Simple'],
    correctAnswer: 1, // Secure
    hints: [
      'It means the connection is encrypted.',
      'It uses TLS/SSL protocols.',
    ],
    explanation:
      'HTTPS stands for Hypertext Transfer Protocol Secure. It uses encryption to increase the security of data transfer, which is essential for protecting sensitive information like passwords and credit card numbers.',
  },
  {
    id: 'q-056',
    type: 'estimation',
    category: 'Space',
    questionText:
      'How many Earth years does it take for Pluto to complete one orbit around the Sun?',
    correctAnswer: 248,
    unit: 'years',
    tolerance: 10,
    range: { min: 100, max: 400 },
    hints: [
      'It is much longer than a human lifetime.',
      'Since its discovery in 1930, it has not yet completed a full orbit.',
    ],
    explanation:
      'Pluto takes roughly 248 Earth years to orbit the Sun. It will complete its first full orbit since its discovery on Monday, March 23, 2178.',
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Pluto-01_Stern_03_Pluto_Color_TXT.jpg?width=600',
      altText: 'High-resolution color photo of Pluto',
      source: 'Wikimedia Commons',
      attribution: 'NASA / JHUAPL / SwRI / Public Domain',
    },
  },
  {
    id: 'q-057',
    type: 'multiple-choice',
    category: 'History',
    questionText:
      'Where did Martin Luther King Jr. deliver his famous "I Have a Dream" speech?',
    options: [
      'The White House',
      'Lincoln Memorial',
      'Statue of Liberty',
      'US Capitol Building',
    ],
    correctAnswer: 1, // Lincoln Memorial
    hints: [
      'It took place during the March on Washington in 1963.',
      'He spoke from the steps of the monument dedicated to the President who issued the Emancipation Proclamation.',
    ],
    explanation:
      'On August 28, 1963, Dr. King delivered the speech to over 250,000 supporters. It is considered one of the defining moments of the civil rights movement.',
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Dr._Martin_Luther_King_Jr._at_a_civil_rights_march_on_Washington_D.C._in_1963.jpg?width=600',
      altText: 'Martin Luther King Jr. holding a speech',
      source: 'Wikimedia Commons',
      attribution: 'Public Domain',
    },
  },
  {
    id: 'q-058',
    type: 'top-five',
    category: 'Geography',
    questionText: 'Name the 5 "Great Lakes" of North America.',
    correctAnswers: [
      { answer: 'Superior' },
      { answer: 'Michigan' },
      { answer: 'Huron' },
      { answer: 'Erie' },
      { answer: 'Ontario' },
    ],
    hints: [
      'They form the largest group of freshwater lakes on Earth.',
      'A common mnemonic to remember them is "HOMES".',
    ],
    explanation:
      "Located on the Canada–United States border, they hold 21% of the world's surface fresh water. Lake Superior is the largest by volume and area.",
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Great_Lakes_from_space.jpg?width=600',
      altText: 'Satellite view of the Great Lakes',
      source: 'Wikimedia Commons',
      attribution: 'SeaWiFS Project / NASA / Public Domain',
    },
  },
  {
    id: 'q-059',
    type: 'estimation',
    category: 'Architecture',
    questionText:
      'What is the total height of the Eiffel Tower (including the tip)?',
    correctAnswer: 330,
    unit: 'meters',
    tolerance: 15,
    range: { min: 200, max: 500 },
    hints: [
      'It is roughly 1,083 feet.',
      'It was the tallest man-made structure in the world for 41 years.',
    ],
    explanation:
      "Completed in 1889 for the World's Fair, it was originally 300 meters tall. Several antennas added over the years have increased its height to 330 meters.",
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Tour_Eiffel_Wikimedia_Commons.jpg?width=600',
      altText: 'The Eiffel Tower in Paris',
      source: 'Wikimedia Commons',
      attribution: 'Benh LIEU SONG / CC BY-SA 3.0',
    },
  },
  {
    id: 'q-060',
    type: 'exact-match',
    category: 'Science',
    questionText: 'Who is credited with the discovery of Penicillin?',
    correctAnswer: 'Alexander Fleming',
    acceptedVariations: ['Fleming', 'Sir Alexander Fleming'],
    hints: [
      'He was a Scottish physician and microbiologist.',
      'He discovered it by accident in a petri dish of Staphylococcus bacteria.',
    ],
    explanation:
      "In 1928, Fleming returned from a holiday to find mold growing on a culture plate. He noticed the mold killed the surrounding bacteria, leading to the world's first antibiotic.",
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Alexander_Fleming_1945.jpg?width=600',
      altText: 'Sir Alexander Fleming in his lab',
      source: 'Wikimedia Commons',
      attribution: 'Public Domain',
    },
  },
  {
    id: 'q-061',
    type: 'multiple-choice',
    category: 'Nature',
    questionText:
      'Which bird is capable of the fastest diving speed (over 300 km/h)?',
    options: ['Golden Eagle', 'Peregrine Falcon', 'Common Swift', 'Albatross'],
    correctAnswer: 1, // Peregrine Falcon
    hints: [
      'It hunts by diving from great heights to strike prey.',
      'It is found on every continent except Antarctica.',
    ],
    explanation:
      'During its hunting stoop (high-speed dive), the Peregrine Falcon can reach speeds of over 320 km/h (200 mph), making it the fastest member of the animal kingdom.',
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Peregrine_Falcon_(Falco_peregrinus)_07.jpg?width=600',
      altText: 'Peregrine Falcon in flight',
      source: 'Wikimedia Commons',
      attribution: "Shiv's fotografia / CC BY-SA 4.0",
    },
  },
  {
    id: 'q-062',
    type: 'exact-match',
    category: 'Literature',
    questionText: 'Who wrote the fantasy novel "The Hobbit"?',
    correctAnswer: 'J.R.R. Tolkien',
    acceptedVariations: ['Tolkien', 'JRR Tolkien'],
    hints: [
      'He was a professor at Oxford University.',
      'He also wrote "The Lord of the Rings".',
    ],
    explanation:
      'Published in 1937, "The Hobbit" was originally written for Tolkien\'s own children. Its success led the publisher to request a sequel, which became the epic "Lord of the Rings" trilogy.',
  },
  {
    id: 'q-063',
    type: 'top-five',
    category: 'Science',
    questionText:
      'Name the 5 most abundant chemical elements in the human body (by mass).',
    correctAnswers: [
      { answer: 'Oxygen', value: '65%' },
      { answer: 'Carbon', value: '18.5%' },
      { answer: 'Hydrogen', value: '9.5%' },
      { answer: 'Nitrogen', value: '3.2%' },
      { answer: 'Calcium', value: '1.5%' },
    ],
    hints: [
      "The top one is also the most abundant in Earth's crust.",
      'One is the primary element in organic chemistry (diamonds/coal).',
    ],
    explanation:
      'Oxygen is the most abundant element largely because the body is mostly water. Calcium is the most abundant mineral, found almost entirely in bones and teeth.',
  },
  {
    id: 'q-064',
    type: 'estimation',
    category: 'Architecture',
    questionText:
      "What is the height of the Burj Khalifa (the world's tallest building)?",
    correctAnswer: 828,
    unit: 'meters',
    tolerance: 20,
    range: { min: 500, max: 1000 },
    hints: ['It is located in Dubai.', 'It is over 800 meters tall.'],
    explanation:
      'Completed in 2010, the Burj Khalifa in Dubai stands at 828 meters (2,717 feet). It holds the records for the tallest building, tallest free-standing structure, and highest number of stories in the world.',
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Burj_Khalifa_(16260269606).jpg?width=600',
      altText: 'The Burj Khalifa skyscraper',
      source: 'Wikimedia Commons',
      attribution: 'Laika ac / CC BY-SA 2.0',
    },
  },
  {
    id: 'q-065',
    type: 'exact-match',
    category: 'History',
    questionText: 'Who was the first woman to travel into space?',
    correctAnswer: 'Valentina Tereshkova',
    acceptedVariations: ['Tereshkova', 'Valentina Vladimirovna Tereshkova'],
    hints: [
      'She was a Soviet cosmonaut.',
      'Her mission took place in 1963, two years after Yuri Gagarin.',
    ],
    explanation:
      'Valentina Tereshkova orbited the Earth 48 times in her Vostok 6 capsule on June 16, 1963. She remains the only woman to have been on a solo space mission.',
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/RIAN_archive_612748_Valentina_Tereshkova.jpg?width=600',
      altText: 'Valentina Tereshkova in a space suit',
      source: 'Wikimedia Commons',
      attribution: 'RIA Novosti / CC BY-SA 3.0',
    },
  },
  {
    id: 'q-066',
    type: 'multiple-choice',
    category: 'Geography',
    questionText: 'What is the capital city of Canada?',
    options: ['Toronto', 'Vancouver', 'Ottawa', 'Montreal'],
    correctAnswer: 2, // Ottawa
    hints: [
      'It is located in the province of Ontario.',
      // 'It sits on the border with Quebec.',
    ],
    explanation:
      'Queen Victoria chose Ottawa as the capital in 1857. It was chosen partly because it was far from the American border, making it safer from potential attacks.',
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Centre_Block_-_Parliament_Hill.jpg?width=600',
      altText: 'Parliament Hill in Ottawa',
      source: 'Wikimedia Commons',
      attribution: 'Saffron Blaze / CC BY-SA 3.0',
    },
  },
  {
    id: 'q-067',
    type: 'exact-match',
    category: 'Art',
    questionText: 'Who painted the famous expressionist work "The Scream"?',
    correctAnswer: 'Edvard Munch',
    acceptedVariations: ['Munch'],
    hints: [
      'He was a Norwegian painter.',
      'The painting depicts a figure with an agonized expression against a bloody sky.',
    ],
    explanation:
      'Munch created four versions of "The Scream" between 1893 and 1910. He said the inspiration came while walking at sunset when he "sensed an infinite scream passing through nature."',
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Edvard_Munch_-_The_Scream_-_Google_Art_Project.jpg?width=600',
      altText: 'The Scream by Edvard Munch',
      source: 'Wikimedia Commons',
      attribution: 'Public Domain',
    },
  },
  {
    id: 'q-068',
    type: 'estimation',
    category: 'Anatomy',
    questionText: 'How many bones are there in the average adult human body?',
    correctAnswer: 206,
    range: { min: 150, max: 300 },
    tolerance: 0, // Strict
    hints: [
      'Babies are born with about 270, but many fuse together.',
      'More than half of them are in your hands and feet.',
    ],
    explanation:
      'An adult human has 206 bones. The femur (thigh bone) is the longest and strongest, while the stapes in the ear is the smallest.',
  },
  {
    id: 'q-069',
    type: 'multiple-choice',
    category: 'Economics',
    questionText: 'What is the official currency of Japan?',
    options: ['Won', 'Yuan', 'Yen', 'Baht'],
    correctAnswer: 2, // Yen
    hints: [
      'Its symbol is ¥.',
      // 'It is the third most traded currency in the foreign exchange market.',
    ],
    explanation:
      'The Yen was adopted in 1871. The word "yen" means "round object" or "circle" in Japanese, referring to the shape of the coins.',
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Yen_bills2.jpg?width=600',
      altText: 'Japanese Yen banknotes',
      source: 'Wikimedia Commons',
      attribution: 'Japanexperterna.se / CC BY-SA 3.0',
    },
  },
  {
    id: 'q-070',
    type: 'top-five',
    category: 'Geography',
    questionText: 'Name the 5 Boroughs of New York City.',
    correctAnswers: [
      { answer: 'Manhattan' },
      { answer: 'Brooklyn' },
      { answer: 'Queens' },
      { answer: 'The Bronx', acceptedVariations: ['Bronx'] },
      { answer: 'Staten Island' },
    ],
    hints: [
      'One is an island famous for its ferry.',
      'One shares its name with a type of cocktail.',
    ],
    explanation:
      'New York City was consolidated into these five boroughs in 1898. Brooklyn alone would be the fourth most populous city in the US if it were independent.',
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/5_Boroughs_Labels_New_York_City_Map_Julius_Schorzman.png?width=600',
      altText: 'Map showing the 5 boroughs of NYC',
      source: 'Wikimedia Commons',
      attribution: 'Julius Schorzman / CC BY-SA 2.5',
    },
  },
  {
    id: 'q-071',
    type: 'multiple-choice',
    category: 'Geography',
    questionText: 'What is the capital city of Brazil?',
    options: ['Rio de Janeiro', 'São Paulo', 'Brasília', 'Salvador'],
    correctAnswer: 2, // Brasília
    hints: [
      'It is a planned city, built in just 41 months from 1956 to 1960.',
      // 'It is known for its modernist architecture designed by Oscar Niemeyer.',
    ],
    explanation:
      "While Rio de Janeiro was the capital until 1960, the government moved to the newly constructed Brasília to promote the development of the country's interior.",
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Congresso_do_Brasil.jpg?width=600',
      altText: 'The National Congress of Brazil in Brasília',
      source: 'Wikimedia Commons',
      attribution: 'P - A - S / CC BY-SA 2.0',
    },
  },
  {
    id: 'q-072',
    type: 'exact-match',
    category: 'Literature',
    questionText: 'Who wrote the novel "Pride and Prejudice"?',
    correctAnswer: 'Jane Austen',
    acceptedVariations: ['Austen'],
    hints: [
      'She was an English novelist known for her social commentary.',
      'The book features the character Mr. Darcy.',
    ],
    explanation:
      'Published in 1813, "Pride and Prejudice" is one of the most popular novels in English literature, selling over 20 million copies.',
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Jane_Austen_by_Cassandra_Austen_1870_reduit.jpg?width=600',
      altText: 'Portrait of Jane Austen',
      source: 'Wikimedia Commons',
      attribution: 'Public Domain',
    },
  },
  {
    id: 'q-073',
    type: 'estimation',
    category: 'Science',
    questionText: 'What is the atomic number of Carbon?',
    correctAnswer: 6,
    range: { min: 1, max: 20 },
    tolerance: 0, // Strict
    hints: [
      'It is the basis for all known life.',
      'It sits between Boron (5) and Nitrogen (7) on the periodic table.',
    ],
    explanation:
      'Carbon has 6 protons in its nucleus. Its ability to form long polymer chains makes it the ideal chemical backbone for life.',
  },
  {
    id: 'q-074',
    type: 'top-five',
    category: 'History',
    questionText: 'Name the 5 Permanent Members of the UN Security Council.',
    correctAnswers: [
      { answer: 'China' },
      { answer: 'France' },
      { answer: 'Russia', acceptedVariations: ['Russian Federation'] },
      { answer: 'United Kingdom', acceptedVariations: ['UK', 'Britain'] },
      { answer: 'United States', acceptedVariations: ['USA', 'US', 'America'] },
    ],
    hints: [
      'They represent the great powers that were the victors of World War II.',
      'They are the only members with veto power.',
    ],
    explanation:
      "The P5 members have held their seats since the UN's founding in 1945 (with Russia succeeding the USSR and the PRC succeeding the ROC).",
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/UN_Security_Council.jpg?width=600',
      altText: 'The UN Security Council chamber',
      source: 'Wikimedia Commons',
      attribution: 'Neptuul / CC BY-SA 3.0',
    },
  },
  {
    id: 'q-075',
    type: 'multiple-choice',
    category: 'Nature',
    questionText: 'Which is the only mammal capable of true, sustained flight?',
    options: ['Flying Squirrel', 'Bat', 'Sugar Glider', 'Colugo'],
    correctAnswer: 1, // Bat
    hints: [
      'Other "flying" mammals actually just glide.',
      // 'They use echolocation to navigate.',
    ],
    explanation:
      'Bats are the only mammals that can truly fly. Their wings are actually elongated hands with a membrane of skin stretched between the fingers.',
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Big-eared-townsend-fledermaus.jpg?width=600',
      altText: "A Townsend's big-eared bat",
      source: 'Wikimedia Commons',
      attribution: 'Public Domain',
    },
  },
  {
    id: 'q-076',
    type: 'exact-match',
    category: 'Art',
    questionText: 'Who painted the ceiling of the Sistine Chapel?',
    correctAnswer: 'Michelangelo',
    acceptedVariations: ['Michelangelo Buonarroti'],
    hints: [
      'He was also a famous sculptor, known for "David".',
      'It took him four years to complete, painting while standing on scaffolding.',
    ],
    explanation:
      'Painted between 1508 and 1512, the ceiling is a cornerstone of High Renaissance art. The central scene is "The Creation of Adam".',
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Sistine_Chapel_ceiling_02_(brightened).jpg?width=600',
      altText: 'The ceiling of the Sistine Chapel',
      source: 'Wikimedia Commons',
      attribution: 'Jean-Christophe BENOIST / CC BY-SA 3.0',
    },
  },
  {
    id: 'q-077',
    type: 'estimation',
    category: 'Space',
    questionText:
      'In what year did the Apollo 11 mission land humans on the Moon?',
    correctAnswer: 1969,
    range: { min: 1960, max: 1975 },
    hints: [
      'It was the end of the Space Race in the 60s.',
      'Neil Armstrong took his famous "small step" in July of this year.',
    ],
    explanation:
      "On July 20, 1969, Neil Armstrong and Buzz Aldrin became the first humans to land on the Moon, fulfilling President Kennedy's goal of landing a man on the moon before the decade was out.",
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Aldrin_Apollo_11_original.jpg?width=600',
      altText: 'Buzz Aldrin on the Moon',
      source: 'Wikimedia Commons',
      attribution: 'NASA / Public Domain',
    },
  },
  {
    id: 'q-078',
    type: 'top-five',
    category: 'General',
    questionText:
      'Name the 5 colors of the Olympic Rings (excluding the white background).',
    correctAnswers: [
      { answer: 'Blue' },
      { answer: 'Yellow' },
      { answer: 'Black' },
      { answer: 'Green' },
      { answer: 'Red' },
    ],
    hints: [
      'Think of the flags of the world; at least one of these colors appears on every national flag.',
      'Primary colors plus Black and Green.',
    ],
    explanation:
      'Designed by Pierre de Coubertin in 1913, the rings represent the five inhabited continents of the world united by Olympism.',
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Olympic_rings_with_white_rims.svg?width=600',
      altText: 'The Olympic Rings',
      source: 'Wikimedia Commons',
      attribution: 'Public Domain',
    },
  },
  {
    id: 'q-079',
    type: 'multiple-choice',
    category: 'Science',
    questionText:
      'Which gas makes up the majority (approx. 78%) of Earth’s atmosphere?',
    options: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Hydrogen'],
    correctAnswer: 2, // Nitrogen
    hints: [
      'It is a colorless, odorless gas.',
      // 'Oxygen only makes up about 21% of the air.',
    ],
    explanation:
      'While we need oxygen to breathe, our atmosphere is dominated by Nitrogen (N2). The remaining 1% is mostly Argon and other trace gases.',
  },
  {
    id: 'q-080',
    type: 'estimation',
    category: 'Games',
    questionText: 'How many total squares are there on a standard chess board?',
    correctAnswer: 64,
    range: { min: 50, max: 100 },
    tolerance: 0, // Strict
    hints: [
      'The board is an 8x8 grid.',
      'It alternates between light and dark squares.',
    ],
    explanation:
      "A chessboard has 8 ranks (rows) and 8 files (columns), making a total of 64 squares. The squares are always arranged so that a white square is in each player's bottom-right corner.",
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Chess_Board.svg?width=600',
      altText: 'A standard Chess board layout',
      source: 'Wikimedia Commons',
      attribution: 'Public Domain',
    },
  },
  {
    id: 'q-081',
    type: 'multiple-choice',
    category: 'Space',
    questionText: 'Which planet in our solar system is the hottest?',
    options: ['Mercury', 'Venus', 'Mars', 'Jupiter'],
    correctAnswer: 1, // Venus
    hints: ['Its thick atmosphere traps heat in a runaway greenhouse effect.'],
    explanation:
      'Even though Mercury is closer to the Sun, Venus is hotter due to its thick atmosphere of carbon dioxide. Surface temperatures can reach 475°C (900°F).',
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Venus-real_color.jpg?width=600',
      altText: 'Real color image of Venus',
      source: 'Wikimedia Commons',
      attribution: 'NASA / Public Domain',
    },
  },
  {
    id: 'q-082',
    type: 'estimation',
    category: 'History',
    questionText: 'In what year did the Berlin Wall fall?',
    correctAnswer: 1989,
    range: { min: 1950, max: 2000 },
    tolerance: 0, // Strict
    hints: [
      'It happened in November, marking the end of the Cold War era.',
      'It was two years before the dissolution of the Soviet Union.',
    ],
    explanation:
      'On November 9, 1989, the head of the East German Communist Party announced that citizens could cross the border whenever they pleased. Crowds swarmed the wall and began chipping away at it.',
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/West_and_East_Germans_at_the_Brandenburg_Gate_in_1989.jpg?width=600',
      altText: 'Germans at the Brandenburg Gate in 1989',
      source: 'Wikimedia Commons',
      attribution: 'Lear 21 / CC BY-SA 3.0',
    },
  },
  {
    id: 'q-083',
    type: 'exact-match',
    category: 'Chemistry',
    questionText: 'What is the chemical symbol for Gold?',
    correctAnswer: 'Au',
    acceptedVariations: ['AU', 'au'],
    hints: [
      'It comes from the Latin word "Aurum".',
      'It consists of two letters, the first is "A".',
    ],
    explanation:
      'Gold is a noble metal, meaning it is resistant to corrosion and oxidation. Its symbol "Au" is derived from the Latin word for shining dawn.',
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Native_gold_nuggets.jpg?width=600',
      altText: 'Native gold nuggets',
      source: 'Wikimedia Commons',
      attribution: 'Aram Dulyan / Public Domain',
    },
  },
  {
    id: 'q-084',
    type: 'top-five',
    category: 'Pop Culture',
    questionText: 'Name the 5 members of "The Simpsons" immediate family.',
    correctAnswers: [
      { answer: 'Homer' },
      { answer: 'Marge' },
      { answer: 'Bart', acceptedVariations: ['Bartholomew'] },
      { answer: 'Lisa' },
      { answer: 'Maggie', acceptedVariations: ['Margaret'] },
    ],
    hints: [
      'The father works at a nuclear power plant.',
      'The youngest is a baby who rarely speaks.',
    ],
    explanation:
      'Created by Matt Groening, the family first appeared as shorts on The Tracey Ullman Show in 1987 before getting their own series in 1989.',
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/The_logo_simpsons_yellow.png?width=600',
      altText: 'The Simpsons logo',
      source: 'Wikimedia Commons',
      attribution: '20th Century Studios / CC BY-SA 4.0',
    },
  },
  {
    id: 'q-085',
    type: 'multiple-choice',
    category: 'Economics',
    questionText: 'What is the official currency of the United Kingdom?',
    options: ['Euro', 'Dollar', 'Pound Sterling', 'Franc'],
    correctAnswer: 2, // Pound
    hints: ['Its symbol is £.'],
    explanation:
      "The Pound Sterling is the world's oldest currency still in use. While the UK was part of the EU, it never adopted the Euro.",
  },
  {
    id: 'q-086',
    type: 'estimation',
    category: 'History',
    questionText:
      'How many stripes are there on the flag of the United States?',
    correctAnswer: 13,
    range: { min: 10, max: 50 },
    tolerance: 0, // Strict
    hints: [
      'They represent the original colonies.',
      'It is an odd number between 10 and 15.',
    ],
    explanation:
      'The 13 horizontal stripes represent the original 13 colonies that declared independence from Great Britain. The 50 stars represent the current 50 states.',
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_the_United_States.svg?width=600',
      altText: 'Flag of the United States',
      source: 'Wikimedia Commons',
      attribution: 'Public Domain',
    },
  },
  {
    id: 'q-087',
    type: 'exact-match',
    category: 'Literature',
    questionText: 'Who wrote the "Harry Potter" book series?',
    correctAnswer: 'J.K. Rowling',
    acceptedVariations: ['JK Rowling', 'Rowling', 'Joanne Rowling'],
    hints: [
      'She wrote the first book in cafes in Edinburgh.',
      'Her first name is Joanne.',
    ],
    explanation:
      'Rowling conceived the idea for Harry Potter in 1990 while on a delayed train from Manchester to London. The seven-book series has sold over 500 million copies worldwide.',
  },
  {
    id: 'q-088',
    type: 'top-five',
    category: 'Science',
    questionText:
      'Name 5 distinct colors found in a natural rainbow (ROYGBIV).',
    correctAnswers: [
      { answer: 'Red' },
      { answer: 'Orange' },
      { answer: 'Yellow' },
      { answer: 'Green' },
      { answer: 'Blue' },
    ],
    otherOptions: [
      { answer: 'Indigo' },
      { answer: 'Violet', acceptedVariations: ['Purple'] },
    ],
    hints: [
      'Think of the acronym ROY G. BIV.',
      'It starts with Red and ends with Violet.',
    ],
    explanation:
      'Sir Isaac Newton originally identified five primary colors: red, yellow, green, blue, and violet. He later added orange and indigo to match the number of notes in a musical scale (7).',
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Double-alaskan-rainbow.jpg?width=600',
      altText: 'A double rainbow',
      source: 'Wikimedia Commons',
      attribution: 'Eric Rolph / CC BY-SA 2.5',
    },
  },
  {
    id: 'q-089',
    type: 'multiple-choice',
    category: 'Movies',
    questionText:
      'What was the first feature-length animated movie released by Disney?',
    options: [
      'Cinderella',
      'Snow White and the Seven Dwarfs',
      'Fantasia',
      'Bambi',
    ],
    correctAnswer: 1, // Snow White
    hints: ['It was released in 1937.'],
    explanation:
      'Critics at the time called it "Disney\'s Folly," believing audiences wouldn\'t sit through a full-length cartoon. It became a massive success and launched the Golden Age of Animation.',
  },
  {
    id: 'q-090',
    type: 'estimation',
    category: 'Science',
    questionText: 'How many elements are currently in the Periodic Table?',
    correctAnswer: 118,
    range: { min: 100, max: 130 },
    tolerance: 0, // Strict
    hints: ['The last element is Oganesson.', 'It is just under 120.'],
    explanation:
      'As of 2024, there are 118 confirmed elements. The first 94 occur naturally on Earth, while the rest are synthetic elements created in laboratories.',
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Simple_Periodic_Table_Chart-en.svg?width=600',
      altText: 'The Periodic Table of Elements',
      source: 'Wikimedia Commons',
      attribution: 'Public Domain',
    },
  },
  {
    id: 'q-091',
    type: 'exact-match',
    category: 'Physics',
    questionText: 'Who developed the theory of relativity (E = mc²)?',
    correctAnswer: 'Albert Einstein',
    acceptedVariations: ['Einstein'],
    hints: [
      'He was a German-born theoretical physicist.',
      'He won the Nobel Prize for his work on the photoelectric effect.',
    ],
    explanation:
      "Einstein's formula E=mc² is the world's most famous equation. It states that energy equals mass times the speed of light squared.",
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Albert_Einstein_Head.jpg?width=600',
      altText: 'Portrait of Albert Einstein',
      source: 'Wikimedia Commons',
      attribution: 'Public Domain',
    },
  },
  {
    id: 'q-092',
    type: 'multiple-choice',
    category: 'Geography',
    questionText: 'Which is the longest river in Europe?',
    options: ['Danube', 'Rhine', 'Volga', 'Thames'],
    correctAnswer: 2, // Volga
    hints: ['It flows entirely through Russia.'],
    explanation:
      'The Volga is the longest river in Europe, flowing 3,531 km (2,194 mi) into the Caspian Sea. It is widely viewed as the national river of Russia.',
  },
  {
    id: 'q-093',
    type: 'estimation',
    category: 'Math',
    questionText: 'How many degrees are in a right angle?',
    correctAnswer: 90,
    unit: '°',
    tolerance: 0, // Strict
    range: { min: 0, max: 180 },
    hints: [
      'It is a quarter of a full circle.',
      'It is the angle found in a square corner.',
    ],
    explanation:
      'A right angle is exactly 90 degrees, corresponding to one quarter of a turn. It is denoted by a small square symbol in geometry diagrams.',
  },
  {
    id: 'q-094',
    type: 'top-five',
    category: 'Space',
    questionText: 'Name the 5 "Dwarf Planets" currently recognized by the IAU.',
    correctAnswers: [
      { answer: 'Pluto' },
      { answer: 'Eris' },
      { answer: 'Ceres' },
      { answer: 'Haumea' },
      { answer: 'Makemake' },
    ],
    hints: [
      'Pluto is the most famous one.',
      'Ceres is located in the asteroid belt, while the others are beyond Neptune.',
    ],
    explanation:
      'The IAU defined the term "dwarf planet" in 2006. Ceres is the only one in the inner solar system; the rest are Trans-Neptunian Objects.',
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Ceres_-_RC3_-_Haulani_Crater_(22381131691)_(cropped).jpg?width=600',
      altText: 'The dwarf planet Ceres',
      source: 'Wikimedia Commons',
      attribution: 'NASA/JPL-Caltech / Public Domain',
    },
  },
  {
    id: 'q-095',
    type: 'multiple-choice',
    category: 'Geography',
    questionText:
      'As of 2023/2024, which country has the largest population in the world?',
    options: ['China', 'United States', 'India', 'Indonesia'],
    correctAnswer: 2, // India
    hints: ['It surpassed China recently.'],
    explanation:
      "According to UN estimates, India overtook China as the world's most populous nation in April 2023, with a population exceeding 1.428 billion people.",
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_India.svg?width=600',
      altText: 'Flag of India',
      source: 'Wikimedia Commons',
      attribution: 'Public Domain',
    },
  },
  {
    id: 'q-096',
    type: 'exact-match',
    category: 'Geography',
    questionText: 'What is the capital city of Italy?',
    correctAnswer: 'Rome',
    acceptedVariations: ['Roma'],
    hints: [
      'It is home to the Colosseum.',
      'It is often called the "Eternal City".',
    ],
    explanation:
      'Rome has been a major human settlement for almost three millennia. It is the only city in the world that contains an entire independent country (Vatican City) inside its boundaries.',
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Colosseum_in_Rome,_Italy_-_April_2007.jpg?width=600',
      altText: 'The Colosseum in Rome',
      source: 'Wikimedia Commons',
      attribution: 'Diliff / CC BY-SA 2.5',
    },
  },
  {
    id: 'q-097',
    type: 'estimation',
    category: 'Games',
    questionText:
      'How many individual small squares (cells) are there on a standard Sudoku board?',
    correctAnswer: 81,
    range: { min: 50, max: 100 },
    tolerance: 0, // Strict
    hints: ['The board is a 9x9 grid.', 'It is made of 9 smaller 3x3 boxes.'],
    explanation:
      'A standard Sudoku grid consists of 9 rows and 9 columns, resulting in 81 total cells. The goal is to fill them so that each column, row, and 3x3 subgrid contains all digits from 1 to 9.',
  },
  {
    id: 'q-098',
    type: 'top-five',
    category: 'Language',
    questionText: 'Name the first 5 letters of the Greek Alphabet.',
    correctAnswers: [
      { answer: 'Alpha' },
      { answer: 'Beta' },
      { answer: 'Gamma' },
      { answer: 'Delta' },
      { answer: 'Epsilon' },
    ],
    hints: [
      'The word "Alphabet" comes from the first two.',
      'They are often used in math and science equations.',
    ],
    explanation:
      'The Greek alphabet has been used to write the Greek language since the late 9th or early 8th century BC. It is the ancestor of the Latin and Cyrillic scripts.',
  },
  {
    id: 'q-099',
    type: 'multiple-choice',
    category: 'Chemistry',
    questionText: 'What is the chemical formula for water?',
    options: ['CO2', 'H2O', 'NaCl', 'O2'],
    correctAnswer: 1, // H2O
    hints: ['It contains two Hydrogen atoms and one Oxygen atom.'],
    explanation:
      'Water is essential for all known forms of life. Despite being a simple molecule, it has unique properties like expanding when it freezes, which is why ice floats.',
  },
  {
    id: 'q-100',
    type: 'exact-match',
    category: 'Philosophy',
    questionText:
      'Which philosopher is famous for the quote "I think, therefore I am"?',
    correctAnswer: 'René Descartes',
    acceptedVariations: ['Descartes', 'Rene Descartes'],
    hints: ['He was French.', 'The Latin version is "Cogito, ergo sum".'],
    explanation:
      'Descartes argued that because he was doubting his own existence, he must exist as a thinking entity. This became a foundational element of Western philosophy.',
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Frans_Hals_-_Portret_van_Ren%C3%A9_Descartes.jpg?width=600',
      altText: 'Portrait of René Descartes',
      source: 'Wikimedia Commons',
      attribution: 'Public Domain',
    },
  },
  {
    id: 'q-101',
    type: 'multiple-choice',
    category: 'History',
    questionText:
      'The Statue of Liberty was a gift to the United States from which country?',
    options: ['Great Britain', 'France', 'Spain', 'Germany'],
    correctAnswer: 1, // France
    hints: [
      'It was dedicated in 1886 to commemorate the centennial of the Declaration of Independence.',
    ],
    explanation:
      'Designed by French sculptor Frédéric Auguste Bartholdi, the statue was a gift from the people of France. The metal framework was built by Gustave Eiffel.',
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Statue_of_Liberty,_NY_(cropped).jpg?width=600',
      altText: 'The Statue of Liberty',
      source: 'Wikimedia Commons',
      attribution: 'William Warby / CC BY 2.0',
    },
  },
  {
    id: 'q-102',
    type: 'estimation',
    category: 'History',
    questionText:
      'In what year did the Wright Brothers achieve the first powered flight?',
    correctAnswer: 1903,
    range: { min: 1890, max: 1920 },
    tolerance: 0, // Strict
    hints: [
      'It happened on December 17th in Kitty Hawk, North Carolina.',
      'It was the same year the first Teddy Bear was introduced.',
    ],
    explanation:
      'Orville and Wilbur Wright made four brief flights at Kitty Hawk with their first powered aircraft. The first flight lasted 12 seconds and covered 120 feet.',
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Firstflight_2_cropped.jpg?width=600',
      altText: 'First successful flight of the Wright Flyer',
      source: 'Wikimedia Commons',
      attribution: 'John T. Daniels / Public Domain',
    },
  },
  {
    id: 'q-103',
    type: 'exact-match',
    category: 'Literature',
    questionText: 'Who created the fictional detective Sherlock Holmes?',
    correctAnswer: 'Arthur Conan Doyle',
    acceptedVariations: ['Conan Doyle', 'Sir Arthur Conan Doyle'],
    hints: [
      'He was a British writer and physician.',
      'He tried to kill off the character in "The Final Problem" but brought him back due to public demand.',
    ],
    explanation:
      'Sherlock Holmes first appeared in 1887 in "A Study in Scarlet". Doyle wrote four novels and 56 short stories featuring the character.',
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Arthur_Conan_Doyle_by_Herbert_Rose_Barraud_1893.jpg?width=600',
      altText: 'Portrait of Arthur Conan Doyle',
      source: 'Wikimedia Commons',
      attribution: 'Herbert Rose Barraud / Public Domain',
    },
  },
  {
    id: 'q-104',
    type: 'top-five',
    category: 'Geography',
    questionText: 'Name the 5 largest deserts in the world (by area).',
    correctAnswers: [
      {
        answer: 'Antarctic Desert',
        acceptedVariations: ['Antarctic', 'Antarctica'],
      },
      { answer: 'Arctic Desert', acceptedVariations: ['Arctic'] },
      { answer: 'Sahara Desert', acceptedVariations: ['Sahara'] },
      { answer: 'Arabian Desert', acceptedVariations: ['Arabian'] },
      { answer: 'Gobi Desert', acceptedVariations: ['Gobi'] },
    ],
    hints: [
      'The top two are "polar deserts" (ice sheets).',
      'The Sahara is only the third largest overall, but the largest hot desert.',
    ],
    explanation:
      'A desert is defined by low precipitation, not heat. Therefore, the polar ice caps of Antarctica and the Arctic qualify as the largest deserts on Earth.',
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Sand_dune_in_the_desert,_Sahara_Desert,_Egypt.jpg?width=600',
      altText: 'Sand dunes in the Sahara Desert',
      source: 'Wikimedia Commons',
      attribution: 'Vyacheslav Argenberg / CC BY 4.0',
    },
  },
  {
    id: 'q-105',
    type: 'multiple-choice',
    category: 'Biology',
    questionText: 'What is the primary function of mitochondria in a cell?',
    options: [
      'Digestion',
      'Energy Production',
      'Cell Division',
      'Photosynthesis',
    ],
    correctAnswer: 1, // Energy
    hints: ['They are often called the "powerhouse" of the cell.'],
    explanation:
      "Mitochondria generate most of the cell's supply of adenosine triphosphate (ATP), which is used as a source of chemical energy.",
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Drawing_of_Mitochondria.jpg?width=600',
      altText: 'Drawing of a Mitochondrion',
      source: 'Wikimedia Commons',
      attribution: 'Captain MarcusL / CC BY-SA 4.0',
    },
  },
  {
    id: 'q-106',
    type: 'estimation',
    category: 'Anatomy',
    questionText: 'How many chambers does the human heart have?',
    correctAnswer: 4,
    range: { min: 1, max: 10 },
    tolerance: 0, // Strict
    hints: [
      'They are divided into two atria and two ventricles.',
      'Frogs only have 3, but humans have one more.',
    ],
    explanation:
      'The human heart has four chambers: the right atrium, left atrium, right ventricle, and left ventricle. This separation allows for efficient circulation of oxygenated and deoxygenated blood.',
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Heart_diagram-en.svg?width=600',
      altText: 'Diagram of the human heart',
      source: 'Wikimedia Commons',
      attribution: 'ZooFari / CC BY-SA 3.0',
    },
  },
  {
    id: 'q-107',
    type: 'exact-match',
    category: 'Chemistry',
    questionText: 'What is the chemical symbol for Sodium?',
    correctAnswer: 'Na',
    acceptedVariations: ['NA', 'na'],
    hints: [
      'It comes from the Latin word "Natrium".',
      'It forms table salt when combined with Chlorine.',
    ],
    explanation:
      'Sodium is a highly reactive metal. Its symbol Na reflects its historical name, distinct from the English word.',
  },
  {
    id: 'q-108',
    type: 'top-five',
    category: 'Geography',
    questionText: 'Name the 5 longest rivers in the world.',
    correctAnswers: [
      { answer: 'Nile' },
      { answer: 'Amazon' },
      { answer: 'Yangtze', acceptedVariations: ['Yangtse'] },
      { answer: 'Mississippi', acceptedVariations: ['Mississippi-Missouri'] },
      { answer: 'Yenisei', acceptedVariations: ['Yenisey'] },
    ],
    hints: [
      'The Nile and Amazon are the top two.',
      'One flows through China, one through the USA, and one through Russia.',
    ],
    explanation:
      'The exact order of the Nile and Amazon is debated, but they are universally recognized as the top two. The Yangtze is the longest in Asia.',
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Satellite_picture_of_the_Amazon_River.jpg?width=600',
      altText: 'Satellite view of the Amazon River',
      source: 'Wikimedia Commons',
      attribution: 'NASA / Public Domain',
    },
  },
  {
    id: 'q-109',
    type: 'multiple-choice',
    category: 'Art',
    questionText: 'Who painted the masterpiece "Girl with a Pearl Earring"?',
    options: ['Rembrandt', 'Johannes Vermeer', 'Frans Hals', 'Van Gogh'],
    correctAnswer: 1, // Vermeer
    hints: [
      'He was a Dutch Baroque painter who specialized in domestic interior scenes.',
    ],
    explanation:
      'Painted around 1665, the girl\'s gaze and the enigmatic expression have led to it being known as the "Mona Lisa of the North".',
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Johannes_Vermeer_-_Girl_with_a_Pearl_Earring_-_WGA24666.jpg?width=600',
      altText: 'Girl with a Pearl Earring painting',
      source: 'Wikimedia Commons',
      attribution: 'Public Domain',
    },
  },
  {
    id: 'q-110',
    type: 'estimation',
    category: 'Music',
    questionText: 'How many strings does a standard violin have?',
    correctAnswer: 4,
    range: { min: 1, max: 10 },
    tolerance: 0, // Strict
    hints: [
      'They are tuned to perfect fifths: G, D, A, and E.',
      'It is the same number of strings as a bass guitar.',
    ],
    explanation:
      'A standard violin has four strings. The bow is typically strung with horsehair.',
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Violin_front_view.jpg?width=600',
      altText: 'Front view of a Violin',
      source: 'Wikimedia Commons',
      attribution: 'LJ / Public Domain',
    },
  },
  {
    id: 'q-111',
    type: 'exact-match',
    category: 'Geography',
    questionText: 'What is the capital city of Egypt?',
    correctAnswer: 'Cairo',
    acceptedVariations: ['Al-Qahirah'],
    hints: [
      'It is located near the Giza pyramid complex.',
      'It lies on the banks of the Nile River.',
    ],
    explanation:
      'Cairo is the largest city in the Arab world. Its name means "The Victorious".',
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Giza-pyramids.JPG?width=600',
      altText: 'The Pyramids of Giza near Cairo',
      source: 'Wikimedia Commons',
      attribution: 'Robster1983 / CC0',
    },
  },
  {
    id: 'q-112',
    type: 'top-five',
    category: 'Demographics',
    questionText:
      'Name the 5 most populous countries in the world (as of 2024).',
    correctAnswers: [
      { answer: 'India' },
      { answer: 'China' },
      { answer: 'United States', acceptedVariations: ['USA', 'US'] },
      { answer: 'Indonesia' },
      { answer: 'Pakistan' },
    ],
    hints: [
      'India recently surpassed China for the #1 spot.',
      'Nigeria and Brazil are #6 and #7, just missing the list.',
    ],
    explanation:
      'Asia dominates this list, with four of the top five countries located on the continent. The US is the only non-Asian country in the top 5.',
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_India.svg?width=600',
      altText: 'Flag of India',
      source: 'Wikimedia Commons',
      attribution: 'Public Domain',
    },
  },
  {
    id: 'q-113',
    type: 'multiple-choice',
    category: 'Nature',
    questionText: 'In which hemisphere do penguins primarily live?',
    options: [
      'Northern Hemisphere',
      'Southern Hemisphere',
      'Both Equally',
      'None',
    ],
    correctAnswer: 1, // Southern
    hints: ['You will generally not find them at the North Pole.'],
    explanation:
      'Almost all penguin species live in the Southern Hemisphere. The Galapagos Penguin is the only species found north of the equator.',
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Single_Emperor_penguin.jpg?width=600',
      altText: 'An Emperor Penguin',
      source: 'Wikimedia Commons',
      attribution: 'Rsperberg / CC BY-SA 3.0',
    },
  },
  {
    id: 'q-114',
    type: 'estimation',
    category: 'Nature',
    questionText: 'How many legs does a spider have?',
    correctAnswer: 8,
    range: { min: 0, max: 20 },
    tolerance: 0, // Strict
    hints: [
      'Insects have 6, but arachnids have more.',
      'It is an even number.',
    ],
    explanation:
      'All arachnids, including spiders, scorpions, mites, and ticks, have eight legs. Insects have six.',
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Jumping_Spider.jpg?width=600',
      altText: 'A jumping spider',
      source: 'Wikimedia Commons',
      attribution: 'Kilarin / CC BY 2.0',
    },
  },
  {
    id: 'q-115',
    type: 'exact-match',
    category: 'Invention',
    questionText:
      'Who is credited with patenting the first practical telephone?',
    correctAnswer: 'Alexander Graham Bell',
    acceptedVariations: ['Bell', 'Graham Bell'],
    hints: [
      'He made the first call to his assistant, Mr. Watson.',
      'He was Scottish-born.',
    ],
    explanation:
      'Bell was awarded the first US patent for the telephone in 1876. His first words were "Mr. Watson, come here, I want to see you."',
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/First_Bell_telephone_1875.png?width=600',
      altText: 'Model of the first Bell telephone',
      source: 'Wikimedia Commons',
      attribution: 'Public Domain',
    },
  },
  {
    id: 'q-116',
    type: 'top-five',
    category: 'Music',
    questionText:
      'Name the 4 members of The Beatles (plus their manager Brian Epstein for a 5th slot!).',
    correctAnswers: [
      { answer: 'John Lennon', acceptedVariations: ['Lennon'] },
      { answer: 'Paul McCartney', acceptedVariations: ['McCartney'] },
      { answer: 'George Harrison', acceptedVariations: ['Harrison'] },
      {
        answer: 'Ringo Starr',
        acceptedVariations: ['Starr', 'Richard Starkey'],
      },
      { answer: 'Brian Epstein', value: '(Manager)' },
    ],
    otherOptions: [
      { answer: 'George Martin', value: '(Producer)' },
      { answer: 'Pete Best', value: '(Original Drummer)' },
    ],
    hints: [
      'They are the "Fab Four" from Liverpool.',
      'The manager was often called the "Fifth Beatle".',
    ],
    explanation:
      'The principal lineup consisted of Lennon, McCartney, Harrison, and Starr. Brian Epstein managed them from 1962 until his death in 1967.',
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/The_Beatles_Ed_Sullivan_1964.jpg?width=600',
      altText: 'The Beatles on the Ed Sullivan Show',
      source: 'Wikimedia Commons',
      attribution: 'Bernard Gotfryd / Public Domain',
    },
  },
  {
    id: 'q-117',
    type: 'multiple-choice',
    category: 'Space',
    questionText:
      'Is the Great Wall of China visible from space with the naked eye?',
    options: ['Yes, easily', 'No', 'Only at night', 'Yes, but only in summer'],
    correctAnswer: 1, // No
    hints: ['This is a very common myth.'],
    explanation:
      'NASA confirms that the Great Wall is generally not visible to the naked eye from low Earth orbit, and certainly not from the Moon. It is too narrow and blends in with the natural colors of the terrain.',
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Great_Wall_of_China,_Satellite_image.jpeg?width=600',
      altText: 'Satellite image of the Great Wall',
      source: 'Wikimedia Commons',
      attribution: 'NASA / Public Domain',
    },
  },
  {
    id: 'q-118',
    type: 'estimation',
    category: 'Sports',
    questionText:
      'How many years apart are the Summer Olympic Games typically held?',
    correctAnswer: 4,
    range: { min: 1, max: 10 },
    tolerance: 0, // Strict
    hints: [
      'It follows the "Olympiad" cycle.',
      'The same interval applies to the Winter Olympics (though they are offset by 2 years).',
    ],
    explanation:
      'The ancient Olympic Games were held every four years, a period known as an Olympiad. The modern games continue this tradition.',
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Olympic_rings_with_white_rims.svg?width=600',
      altText: 'The Olympic Rings',
      source: 'Wikimedia Commons',
      attribution: 'Public Domain',
    },
  },
  {
    id: 'q-119',
    type: 'exact-match',
    category: 'Science',
    questionText: 'Who proposed the theory of evolution by natural selection?',
    correctAnswer: 'Charles Darwin',
    acceptedVariations: ['Darwin'],
    hints: [
      'He sailed on the HMS Beagle.',
      'He wrote "On the Origin of Species".',
    ],
    explanation:
      "Darwin's book, published in 1859, introduced the scientific theory that populations evolve over the course of generations through a process of natural selection.",
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Charles_Darwin_photograph_by_Julia_Margaret_Cameron,_1868.jpg?width=600',
      altText: 'Photograph of Charles Darwin',
      source: 'Wikimedia Commons',
      attribution: 'Julia Margaret Cameron / Public Domain',
    },
  },
  {
    id: 'q-120',
    type: 'top-five',
    category: 'Games',
    questionText: 'Name 5 of the 6 distinct chess piece types.',
    correctAnswers: [
      { answer: 'King' },
      { answer: 'Queen' },
      { answer: 'Rook', acceptedVariations: ['Castle'] },
      { answer: 'Bishop' },
      { answer: 'Knight', acceptedVariations: ['Horse'] },
    ],
    otherOptions: [{ answer: 'Pawn' }],
    hints: [
      'One is the most powerful piece, one is the most important.',
      'One moves in an L-shape.',
    ],
    explanation:
      'Each player starts with 16 pieces: 1 King, 1 Queen, 2 Rooks, 2 Bishops, 2 Knights, and 8 Pawns.',
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Chess_Set.jpg?width=600',
      altText: 'A standard Chess set',
      source: 'Wikimedia Commons',
      attribution: 'Jeff Dahl / CC BY-SA 3.0',
    },
  },
  {
    id: 'q-121',
    type: 'multiple-choice',
    category: 'History',
    questionText:
      'Which ancient artifact allowed scholars to finally decipher Egyptian hieroglyphs?',
    options: [
      'The Sphinx',
      'The Rosetta Stone',
      'King Tut’s Mask',
      'The Dead Sea Scrolls',
    ],
    correctAnswer: 1, // Rosetta Stone
    hints: [
      'It contained the same text written in three scripts: Hieroglyphic, Demotic, and Greek.',
    ],
    explanation:
      'Discovered in 1799, the Rosetta Stone provided the key to understanding Egyptian hieroglyphs. It is currently held in the British Museum.',
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Rosetta_Stone.JPG?width=600',
      altText: 'The Rosetta Stone',
      source: 'Wikimedia Commons',
      attribution: 'Hans Hillewaert / CC BY-SA 4.0',
    },
  },
  {
    id: 'q-122',
    type: 'estimation',
    category: 'Nature',
    questionText: 'How many hearts does an octopus have?',
    correctAnswer: 3,
    range: { min: 1, max: 5 },
    tolerance: 0, // Strict
    hints: [
      'One pumps blood to the body, while the other two pump blood to the gills.',
      'It is an odd number.',
    ],
    explanation:
      'Octopuses have three hearts. Two branchial hearts pump blood through the gills, while a third systemic heart circulates it to the rest of the body.',
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Octopus_vulgaris_2.jpg?width=600',
      altText: 'Common Octopus',
      source: 'Wikimedia Commons',
      attribution: 'Albert Kok / CC BY-SA 3.0',
    },
  },
  {
    id: 'q-123',
    type: 'exact-match',
    category: 'Pop Culture',
    questionText:
      'What is the name of the fictional continent in "Game of Thrones" where most of the story takes place?',
    correctAnswer: 'Westeros',
    hints: [
      'It is separated from Essos by the Narrow Sea.',
      'It is home to the Seven Kingdoms.',
    ],
    explanation:
      'Westeros is the primary setting for George R.R. Martin\'s "A Song of Ice and Fire" series. It is roughly the size of South America.',
  },
  {
    id: 'q-124',
    type: 'top-five',
    category: 'Food',
    questionText: 'Name 5 major types of pasta shapes.',
    correctAnswers: [
      { answer: 'Spaghetti' },
      { answer: 'Penne' },
      { answer: 'Fusilli', acceptedVariations: ['Rotini'] },
      { answer: 'Ravioli' },
      { answer: 'Macaroni', acceptedVariations: ['Elbows'] },
    ],
    otherOptions: [
      { answer: 'Lasagna' },
      { answer: 'Fettuccine' },
      { answer: 'Linguine' },
      { answer: 'Rigatoni' },
      { answer: 'Farfalle', acceptedVariations: ['Bowtie'] },
    ],
    hints: [
      'Think of long strands, tubes, and spirals.',
      'One is famous for being filled with cheese or meat.',
    ],
    explanation:
      'There are over 350 different shapes of pasta. The shape often dictates which sauce pairs best with it (e.g., tube pasta for thick sauces).',
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Pasta_2006_1.jpg?width=600',
      altText: 'Various types of pasta',
      source: 'Wikimedia Commons',
      attribution: 'Public Domain',
    },
  },
  {
    id: 'q-125',
    type: 'multiple-choice',
    category: 'Science',
    questionText: 'What is the closest star to Earth (after the Sun)?',
    options: ['Sirius', 'Alpha Centauri A', 'Proxima Centauri', 'Betelgeuse'],
    correctAnswer: 2, // Proxima Centauri
    hints: ['It is a red dwarf star about 4.2 light-years away.'],
    explanation:
      'Proxima Centauri is part of the Alpha Centauri star system. It is slightly closer to us than the other two stars in the system.',
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/New_shot_of_Proxima_Centauri,_our_nearest_neighbour.jpg?width=600',
      altText: 'Hubble image of Proxima Centauri',
      source: 'Wikimedia Commons',
      attribution: 'ESA/Hubble & NASA / CC BY 4.0',
    },
  },
  {
    id: 'q-126',
    type: 'estimation',
    category: 'Geography',
    questionText: 'How many states does the United States of America have?',
    correctAnswer: 50,
    range: { min: 40, max: 60 },
    tolerance: 0, // Strict
    hints: [
      'The last two to join were Alaska and Hawaii in 1959.',
      'It corresponds to the number of stars on the flag.',
    ],
    explanation:
      'There are 50 states. Washington D.C. is a federal district, not a state, and Puerto Rico is a territory.',
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Map_of_USA_with_state_names_2.svg?width=600',
      altText: 'Map of the 50 US States',
      source: 'Wikimedia Commons',
      attribution: 'Public Domain',
    },
  },
  {
    id: 'q-127',
    type: 'exact-match',
    category: 'Music',
    questionText: 'Who is known as the "King of Pop"?',
    correctAnswer: 'Michael Jackson',
    acceptedVariations: ['MJ', 'Jackson'],
    hints: [
      'He released the best-selling album of all time, "Thriller".',
      'He popularized the "Moonwalk".',
    ],
    explanation:
      'Michael Jackson is one of the most significant cultural figures of the 20th century. "Thriller" (1982) remains the best-selling album in history.',
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Michael_Jackson_in_1988.jpg?width=600',
      altText: 'Michael Jackson performing in 1988',
      source: 'Wikimedia Commons',
      attribution: 'Zoran Veselinovic / CC BY-SA 2.0',
    },
  },
  {
    id: 'q-128',
    type: 'top-five',
    category: 'Technology',
    questionText: 'Name the 5 largest tech companies (Big Tech / GAFAM).',
    correctAnswers: [
      { answer: 'Apple' },
      { answer: 'Microsoft' },
      { answer: 'Alphabet', acceptedVariations: ['Google'] },
      { answer: 'Amazon' },
      { answer: 'Meta', acceptedVariations: ['Facebook'] },
    ],
    hints: [
      'One started as a bookstore, another as a search engine.',
      'The list includes the makers of the iPhone and Windows.',
    ],
    explanation:
      'These five companies dominate the global technology industry. They have a combined market capitalization in the trillions of dollars.',
  },
  {
    id: 'q-129',
    type: 'multiple-choice',
    category: 'Literature',
    questionText: 'Which famous detective lives at 221B Baker Street?',
    options: [
      'Hercule Poirot',
      'Sherlock Holmes',
      'Miss Marple',
      'Philip Marlowe',
    ],
    correctAnswer: 1, // Sherlock Holmes
    hints: ['He has a friend and assistant named Dr. John Watson.'],
    explanation:
      '221B Baker Street is perhaps the most famous address in literature. In reality, the address did not exist when the stories were written.',
  },
  {
    id: 'q-130',
    type: 'estimation',
    category: 'Sports',
    questionText:
      'How many players are on a standard soccer (football) team on the field?',
    correctAnswer: 11,
    range: { min: 5, max: 15 },
    tolerance: 0, // Strict
    hints: ['This includes the goalkeeper.', 'It is an odd number.'],
    explanation:
      'A standard match is played by two teams, each with 11 players. One must be the goalkeeper.',
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Soccer_formation_3-4-3.svg?width=600',
      altText: 'Diagram of a football pitch',
      source: 'Wikimedia Commons',
      attribution: 'Mario Ortegon / CC BY-SA 4.0',
    },
  },
  {
    id: 'q-131',
    type: 'exact-match',
    category: 'History',
    questionText:
      'Who was the first female Prime Minister of the United Kingdom?',
    correctAnswer: 'Margaret Thatcher',
    acceptedVariations: ['Thatcher', 'Baroness Thatcher'],
    hints: [
      'She was known as the "Iron Lady".',
      'She served from 1979 to 1990.',
    ],
    explanation:
      'Margaret Thatcher was the longest-serving British Prime Minister of the 20th century and the first woman to hold the office.',
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Margaret_Thatcher_cropped.jpg?width=600',
      altText: 'Margaret Thatcher',
      source: 'Wikimedia Commons',
      attribution: 'Public Domain',
    },
  },
  {
    id: 'q-132',
    type: 'multiple-choice',
    category: 'Science',
    questionText: 'What is the hardest mineral on the Mohs scale?',
    options: ['Quartz', 'Topaz', 'Corundum', 'Diamond'],
    correctAnswer: 3, // Diamond
    hints: ['It scores a perfect 10 on the scale.'],
    explanation:
      'Diamond is the hardest known natural material. It can only be scratched by another diamond.',
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Rough_Diamond.jpg?width=600',
      altText: 'A rough uncut diamond',
      source: 'Wikimedia Commons',
      attribution: 'USGS / Public Domain',
    },
  },
  {
    id: 'q-133',
    type: 'estimation',
    category: 'Anatomy',
    questionText:
      'What is the normal body temperature for a human in degrees Celsius?',
    correctAnswer: 37,
    unit: '°C',
    tolerance: 0.5,
    range: { min: 35, max: 40 },
    hints: ['It is equivalent to 98.6°F.', 'It is slightly less than 40.'],
    explanation:
      'While 37°C is the standard average, individual body temperature can vary slightly based on time of day and activity level.',
  },
  {
    id: 'q-134',
    type: 'top-five',
    category: 'Geography',
    questionText: 'Name the 5 boroughs of London (Inner London).',
    correctAnswers: [
      { answer: 'Westminster', acceptedVariations: ['City of Westminster'] },
      { answer: 'Camden' },
      { answer: 'Greenwich' },
      { answer: 'Hackney' },
      { answer: 'Islington' },
    ],
    otherOptions: [
      { answer: 'Lambeth' },
      { answer: 'Southwark' },
      { answer: 'Kensington and Chelsea' },
      { answer: 'Tower Hamlets' },
      { answer: 'Wandsworth' },
    ],
    hints: [
      'Westminster is home to the Parliament.',
      'Greenwich is famous for timekeeping.',
    ],
    explanation:
      'London is divided into 32 boroughs plus the City of London. "Inner London" typically refers to the boroughs that form the central part of the metropolis.',
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Outer_Inner_London_Boroughs.png?width=600',
      altText: 'Map of London Boroughs',
      source: 'Wikimedia Commons',
      attribution: 'Peter Fitzgerald / CC BY-SA 4.0',
    },
  },
  {
    id: 'q-135',
    type: 'multiple-choice',
    category: 'Animals',
    questionText: 'Which animal has the longest gestation period (pregnancy)?',
    options: ['Blue Whale', 'African Elephant', 'Giraffe', 'Rhinoceros'],
    correctAnswer: 1, // Elephant
    hints: ['It lasts nearly 22 months (almost 2 years).'],
    explanation:
      'African elephants have the longest pregnancy of any mammal, lasting about 645 days. This long development allows the calf to be born with a highly developed brain.',
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/African_Bush_Elephant.jpg?width=600',
      altText: 'African Bush Elephant',
      source: 'Wikimedia Commons',
      attribution: 'Amoghavarsha JS / CC BY-SA 3.0',
    },
  },
  {
    id: 'q-136',
    type: 'exact-match',
    category: 'Art',
    questionText: 'Who painted "The Last Supper"?',
    correctAnswer: 'Leonardo da Vinci',
    acceptedVariations: ['Leonardo', 'Da Vinci'],
    hints: [
      'It is a mural painted in Milan in the late 15th century.',
      'He also painted the Mona Lisa.',
    ],
    explanation:
      'The mural covers the end wall of the dining hall at the monastery of Santa Maria delle Grazie in Milan. It represents the scene of the Last Supper of Jesus with his apostles.',
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Leonardo_da_Vinci_-_The_Last_Supper_high_res.jpg?width=600',
      altText: 'The Last Supper by Leonardo da Vinci',
      source: 'Wikimedia Commons',
      attribution: 'Public Domain',
    },
  },
  {
    id: 'q-137',
    type: 'estimation',
    category: 'Chemistry',
    questionText: 'What is the pH level of pure water?',
    correctAnswer: 7,
    range: { min: 0, max: 14 },
    tolerance: 0.1,
    hints: [
      'It is considered "neutral".',
      'The scale ranges from 0 (acidic) to 14 (basic).',
    ],
    explanation:
      'Pure water is neutral, meaning it is neither acidic nor basic. Acids have a pH less than 7, while bases have a pH greater than 7.',
  },
  {
    id: 'q-138',
    type: 'top-five',
    category: 'Games',
    questionText: 'Name the 5 standard colors in the game of Risk.',
    correctAnswers: [
      { answer: 'Red' },
      { answer: 'Green' },
      { answer: 'Yellow' },
      { answer: 'Blue' },
      { answer: 'Black' },
    ],
    otherOptions: [
      { answer: 'Grey', value: '(In some newer editions)' },
      { answer: 'Purple', value: '(In some editions)' },
    ],
    hints: [
      'They are mostly primary colors.',
      'Think of classic board game pieces.',
    ],
    explanation:
      'Risk is a strategy board game of diplomacy, conflict, and conquest. The classic version typically features these five army colors.',
  },
  {
    id: 'q-139',
    type: 'multiple-choice',
    category: 'Space',
    questionText:
      'Which Apollo mission was the first to land humans on the Moon?',
    options: ['Apollo 8', 'Apollo 11', 'Apollo 13', 'Apollo 17'],
    correctAnswer: 1, // Apollo 11
    hints: ['It happened in 1969.'],
    explanation:
      'Apollo 11 landed Neil Armstrong and Buzz Aldrin on the moon on July 20, 1969. Apollo 13 is famous for its "successful failure," and Apollo 17 was the final moon landing.',
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Aldrin_Apollo_11_original.jpg?width=600',
      altText: 'Buzz Aldrin on the Moon',
      source: 'Wikimedia Commons',
      attribution: 'NASA / Public Domain',
    },
  },
  {
    id: 'q-140',
    type: 'exact-match',
    category: 'History',
    questionText:
      'What was the name of the ship that brought the Pilgrims to America in 1620?',
    correctAnswer: 'Mayflower',
    acceptedVariations: ['The Mayflower'],
    hints: ['It is named after a flower.', 'It landed at Plymouth Rock.'],
    explanation:
      'The Mayflower transported 102 passengers (the Pilgrims) from Plymouth, England, to the New World in 1620. They established the Plymouth Colony.',
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Mayflower_in_Plymouth_Harbor,_by_William_Halsall.jpg?width=600',
      altText: 'Painting of the Mayflower',
      source: 'Wikimedia Commons',
      attribution: 'William Halsall / Public Domain',
    },
  },
  {
    id: 'q-141',
    type: 'multiple-choice',
    category: 'Geography',
    questionText: 'What is the largest ocean on Earth?',
    options: [
      'Atlantic Ocean',
      'Indian Ocean',
      'Arctic Ocean',
      'Pacific Ocean',
    ],
    correctAnswer: 3, // Pacific Ocean
    hints: ["It covers more than 30% of the Earth's surface."],
    explanation:
      "The Pacific Ocean is the largest and deepest of Earth's oceanic divisions. It extends from the Arctic Ocean in the north to the Southern Ocean in the south.",
    media: {
      type: 'image',
      url: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Pacific_Ocean_-_en.png',
      altText: 'Map showing the Pacific Ocean',
      source: 'Wikimedia Commons',
      attribution: 'Public Domain',
    },
  },
  {
    id: 'q-142',
    type: 'estimation',
    category: 'History',
    questionText:
      'In what year did the United States officially enter World War II?',
    correctAnswer: 1941,
    range: { min: 1935, max: 1945 },
    tolerance: 0, // Strict
    hints: [
      'It occurred following the attack on Pearl Harbor in December.',
      'It was a little over two years after the war began in Europe.',
    ],
    explanation:
      'The United States officially declared war on Japan on December 8, 1941, the day after the surprise attack on the naval base at Pearl Harbor.',
    media: {
      type: 'image',
      url: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/USS_SHAW_exploding_Pearl_Harbor_Nara_80-G-16871_2.jpg',
      altText: 'The USS Shaw exploding during the attack on Pearl Harbor',
      source: 'Wikimedia Commons',
      attribution: 'Public Domain',
    },
  },
  {
    id: 'q-143',
    type: 'exact-match',
    category: 'Art',
    questionText:
      'Which famous Spanish artist painted the monumental anti-war mural "Guernica"?',
    correctAnswer: 'Pablo Picasso',
    acceptedVariations: ['Picasso'],
    hints: [
      'He is credited with co-founding the Cubist movement.',
      'His first name is Pablo.',
    ],
    explanation:
      'Created in 1937, "Guernica" is regarded by many art critics as one of the most moving and powerful anti-war paintings in history. It portrays the suffering wrought by violence and chaos.',
  },
  {
    id: 'q-144',
    type: 'top-five',
    category: 'Geography',
    questionText: 'Name the 5 largest countries in South America by land area.',
    correctAnswers: [
      { answer: 'Brazil', acceptedVariations: ['Brasil'] },
      { answer: 'Argentina' },
      { answer: 'Peru' },
      { answer: 'Colombia' },
      { answer: 'Bolivia' },
    ],
    hints: [
      'Brazil is by far the largest, covering nearly half the continent.',
      'Two of these countries are landlocked (though only one is in the top 5).',
    ],
    explanation:
      'Brazil dominates the continent in size, followed by Argentina. Peru, Colombia, and Bolivia round out the top five, making up a massive portion of the Andes and the Amazon basin.',
  },
  {
    id: 'q-145',
    type: 'multiple-choice',
    category: 'Biology',
    questionText: 'What is the longest and strongest bone in the human body?',
    options: ['Tibia', 'Humerus', 'Femur', 'Fibula'],
    correctAnswer: 2, // Femur
    hints: ['It is located in the upper portion of the leg.'],
    explanation:
      'The femur, or thigh bone, is the longest, heaviest, and strongest bone in the entire human body. It extends from the hip to the knee.',
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Femur_-_anterior_view.png?width=600',
      altText: 'Anterior view of a human femur',
      source: 'Wikimedia Commons',
      attribution: 'Anatomography / CC BY-SA 2.1 JP',
    },
  },
  {
    id: 'q-146',
    type: 'estimation',
    category: 'Music',
    questionText:
      'How many strings does a standard acoustic or electric guitar have?',
    correctAnswer: 6,
    range: { min: 4, max: 12 },
    tolerance: 0, // Strict
    hints: [
      'It is two more strings than a standard bass guitar.',
      'They are typically tuned to E, A, D, G, B, E.',
    ],
    explanation:
      'While there are 7-string, 8-string, and 12-string variants, the vast majority of standard guitars feature exactly six strings.',
  },
  {
    id: 'q-147',
    type: 'exact-match',
    category: 'Chemistry',
    questionText: 'What is the chemical symbol for Iron?',
    correctAnswer: 'Fe',
    acceptedVariations: ['FE', 'fe'],
    hints: [
      'It comes from the Latin word "Ferrum".',
      'It is a two-letter symbol starting with F.',
    ],
    explanation:
      "Iron is a chemical element with symbol Fe and atomic number 26. It is by mass the most common element on Earth, forming much of Earth's outer and inner core.",
  },
  {
    id: 'q-148',
    type: 'top-five',
    category: 'Language',
    questionText: 'Name 5 of the 6 official languages of the United Nations.',
    correctAnswers: [
      { answer: 'Arabic' },
      { answer: 'Chinese', acceptedVariations: ['Mandarin'] },
      { answer: 'English' },
      { answer: 'French' },
      { answer: 'Russian' },
    ],
    otherOptions: [{ answer: 'Spanish' }],
    hints: [
      'Two are primarily spoken in Europe, while two are major Asian languages.',
      'German and Japanese are NOT official UN languages.',
    ],
    explanation:
      'These six languages are used in UN meetings, and all official UN documents are written in them. They were chosen to represent the major linguistic groups of the world.',
  },
  {
    id: 'q-149',
    type: 'multiple-choice',
    category: 'Food',
    questionText: 'What is the primary ingredient in traditional guacamole?',
    options: ['Tomato', 'Avocado', 'Lime', 'Jalapeño'],
    correctAnswer: 1, // Avocado
    hints: ['It is a green, pear-shaped fruit with a large pit.'],
    explanation:
      'Guacamole is an avocado-based dip, spread, or salad first developed in Mexico. In addition to mashed avocados, it typically includes lime juice, cilantro, onions, and seasonings.',
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Guacamole_-_La_Casa_Restaurant_-_January_2023_-_Sarah_Stierch.jpg?width=600',
      altText: 'A bowl of guacamole',
      source: 'Wikimedia Commons',
      attribution: 'Missvain / CC BY-SA 4.0',
    },
  },
  {
    id: 'q-150',
    type: 'estimation',
    category: 'Anatomy',
    questionText:
      'How many cervical vertebrae (neck bones) does a typical human have?',
    correctAnswer: 7,
    range: { min: 3, max: 12 },
    tolerance: 0, // Strict
    hints: [
      'Interestingly, giraffes have this exact same number of neck bones, they are just much larger.',
      'It is a prime number.',
    ],
    explanation:
      'Most mammals, from humans to mice to giraffes, possess exactly seven cervical vertebrae, which support the head and allow for neck mobility.',
  },
  {
    id: 'q-151',
    type: 'exact-match',
    category: 'Literature',
    questionText: 'Who wrote the classic American novel "The Great Gatsby"?',
    correctAnswer: 'F. Scott Fitzgerald',
    acceptedVariations: ['Scott Fitzgerald', 'Fitzgerald'],
    hints: [
      'He was a prominent figure of the "Jazz Age".',
      'The book focuses on the mysterious millionaire Jay Gatsby.',
    ],
    explanation:
      'Published in 1925, "The Great Gatsby" is widely considered to be a literary masterwork and a contender for the title of the "Great American Novel".',
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/F_Scott_Fitzgerald_1921.jpg?width=600',
      altText: 'Portrait of F. Scott Fitzgerald',
      source: 'Wikimedia Commons',
      attribution: 'Public Domain',
    },
  },
  {
    id: 'q-152',
    type: 'top-five',
    category: 'Science',
    questionText:
      'Name the 5 primary phases of mitosis (cell division) in chronological order.',
    correctAnswers: [
      { answer: 'Prophase' },
      { answer: 'Prometaphase' },
      { answer: 'Metaphase' },
      { answer: 'Anaphase' },
      { answer: 'Telophase' },
    ],
    hints: [
      'Metaphase is in the middle.',
      'They all end with the suffix "-phase".',
    ],
    explanation:
      'Mitosis is the process where a single cell divides into two identical daughter cells. Some textbooks combine Prometaphase into Prophase, leaving 4 main stages (PMAT), but modern biology typically breaks it into these 5 distinct phases.',
  },
  {
    id: 'q-153',
    type: 'multiple-choice',
    category: 'Science',
    questionText: 'At what temperature are Celsius and Fahrenheit equal?',
    options: ['0', '-32', '-40', '100'],
    correctAnswer: 2, // -40
    hints: ['It is a very cold, negative number.'],
    explanation:
      'The scales converge at -40 degrees. Therefore, -40°C is exactly the same temperature as -40°F.',
  },
  {
    id: 'q-154',
    type: 'estimation',
    category: 'Biology',
    questionText:
      'How many permanent teeth does a typical adult human have (including wisdom teeth)?',
    correctAnswer: 32,
    range: { min: 20, max: 40 },
    tolerance: 0, // Strict
    hints: [
      'Children only have 20 primary ("baby") teeth.',
      'It is a power of 2.',
    ],
    explanation:
      'A full set of adult teeth consists of 32 teeth: 8 incisors, 4 canines, 8 premolars, and 12 molars (including 4 wisdom teeth).',
  },
  {
    id: 'q-155',
    type: 'exact-match',
    category: 'Geography',
    questionText: 'What is the capital city of Spain?',
    correctAnswer: 'Madrid',
    acceptedVariations: ['madrid'],
    hints: [
      'It is centrally located on the Iberian Peninsula.',
      'It is home to the famous Prado Museum and a very famous "Real" soccer team.',
    ],
    explanation:
      'Madrid is the capital and most populous city of Spain. It has served as the capital since the 1500s, replacing Toledo.',
  },
  {
    id: 'q-156',
    type: 'top-five',
    category: 'Geography',
    questionText: 'Name 5 of the 7 continents of the world.',
    correctAnswers: [
      { answer: 'Asia' },
      { answer: 'Africa' },
      { answer: 'North America' },
      { answer: 'South America' },
      { answer: 'Antarctica' },
    ],
    otherOptions: [
      { answer: 'Europe' },
      { answer: 'Australia', acceptedVariations: ['Oceania'] },
    ],
    hints: [
      'Three of them start with the letter A.',
      'One is completely covered in ice.',
    ],
    explanation:
      'The widely recognized seven continents are Asia, Africa, North America, South America, Antarctica, Europe, and Australia.',
  },
  {
    id: 'q-157',
    type: 'multiple-choice',
    category: 'Animals',
    questionText: 'What is the fastest land animal in the world?',
    options: ['Lion', 'Cheetah', 'Pronghorn Antelope', 'Greyhound'],
    correctAnswer: 1, // Cheetah
    hints: ['It is a large cat native to Africa and central Iran.'],
    explanation:
      'The cheetah is capable of running at 80 to 128 km/h (50 to 80 mph). It has several adaptations for speed, including a light build, long thin legs, and a long tail.',
    media: {
      type: 'image',
      url: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Cheetah_%28Acinonyx_jubatus%29_female_2.jpg',
      altText: 'A running cheetah',
      source: 'Wikimedia Commons',
      attribution: 'Kiwimac / CC BY 2.0',
    },
  },
  {
    id: 'q-158',
    type: 'estimation',
    category: 'Games',
    questionText:
      'What is the maximum score you can achieve in a single game of 10-pin bowling?',
    correctAnswer: 300,
    range: { min: 200, max: 400 },
    tolerance: 0, // Strict
    hints: [
      'It requires rolling 12 consecutive strikes.',
      'It is exactly three centuries.',
    ],
    explanation:
      'A perfect game in bowling is 300. This requires the bowler to bowl a strike in every frame, including all three potential throws in the tenth frame.',
  },
  {
    id: 'q-159',
    type: 'exact-match',
    category: 'Biology',
    questionText:
      'What is the name of the pigment that gives human skin, hair, and eyes their color?',
    correctAnswer: 'Melanin',
    acceptedVariations: ['Melanine'],
    hints: [
      'It also helps protect the skin against damage from ultraviolet (UV) sunlight.',
      'It starts with the letter M.',
    ],
    explanation:
      'Melanin is produced by cells called melanocytes. People with more melanin have darker skin, while those with less have lighter skin.',
  },
  {
    id: 'q-160',
    type: 'top-five',
    category: 'History',
    questionText:
      'Name the 5 most recent Presidents of the United States (serving between 1993 and 2024).',
    correctAnswers: [
      { answer: 'Joe Biden', acceptedVariations: ['Biden'] },
      { answer: 'Donald Trump', acceptedVariations: ['Trump'] },
      { answer: 'Barack Obama', acceptedVariations: ['Obama'] },
      { answer: 'George W. Bush', acceptedVariations: ['George Bush', 'Bush'] },
      { answer: 'Bill Clinton', acceptedVariations: ['Clinton'] },
    ],
    hints: [
      'They represent the 42nd through the 46th presidents.',
      'Three are Democrats, and two are Republicans.',
    ],
    explanation:
      'This list encompasses all U.S. presidents from the inauguration of Bill Clinton in 1993 up through the presidency of Joe Biden.',
  },
  {
    id: 'q-161',
    type: 'multiple-choice',
    category: 'Science',
    questionText: "What is the primary gas found in the Earth's atmosphere?",
    options: ['Oxygen', 'Nitrogen', 'Carbon Dioxide', 'Hydrogen'],
    correctAnswer: 1, // Nitrogen
    hints: ['It makes up roughly 78% of the air we breathe.'],
    explanation:
      'While oxygen is essential for human survival, nitrogen is actually the most abundant gas in our atmosphere. Oxygen makes up only about 21%.',
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Top_of_Atmosphere.jpg?width=600',
      altText: "The Earth's atmosphere seen from space",
      source: 'Wikimedia Commons',
      attribution: 'NASA / Public Domain',
    },
  },
  {
    id: 'q-162',
    type: 'estimation',
    category: 'History',
    questionText: 'In what year was the United Nations founded?',
    correctAnswer: 1945,
    range: { min: 1930, max: 1960 },
    tolerance: 0, // Strict
    hints: [
      'It was established shortly after the end of World War II.',
      'The original charter was signed in San Francisco.',
    ],
    explanation:
      'The UN was founded in 1945 to replace the ineffective League of Nations, with the goal of preventing future world wars and fostering international cooperation.',
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/United_Nations_HQ_-_New_York_City.jpg?width=600',
      altText: 'United Nations Headquarters',
      source: 'Wikimedia Commons',
      attribution: 'Neptune, CC BY-SA 3.0',
    },
  },
  {
    id: 'q-163',
    type: 'exact-match',
    category: 'Math',
    questionText:
      'What is the mathematical term for the perimeter of a circle?',
    correctAnswer: 'Circumference',
    acceptedVariations: ['circumference'],
    hints: [
      'It starts with the letter C.',
      'The formula to find it is 2 * π * r.',
    ],
    explanation:
      'The circumference is the linear distance around the outside edge of a closed curve or circular object.',
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Circle_-_black_simple.svg?width=600',
      altText: 'A simple black circle',
      source: 'Wikimedia Commons',
      attribution: 'Public Domain',
    },
  },
  {
    id: 'q-164',
    type: 'top-five',
    category: 'Movies',
    questionText:
      'Name the first 5 actors to play James Bond in the official Eon Productions film series.',
    correctAnswers: [
      { answer: 'Sean Connery' },
      { answer: 'George Lazenby' },
      { answer: 'Roger Moore' },
      { answer: 'Timothy Dalton' },
      { answer: 'Pierce Brosnan' },
    ],
    otherOptions: [{ answer: 'Daniel Craig' }],
    hints: [
      'The very first one starred in "Dr. No".',
      'The fifth one debuted in "GoldenEye".',
    ],
    explanation:
      'These actors portrayed Ian Fleming\'s famous MI6 spy from 1962 through 2002, before Daniel Craig took over the role in 2006\'s "Casino Royale".',
    media: {
      type: 'image',
      url: 'https://upload.wikimedia.org/wikipedia/commons/0/05/1963_Aston_Martin_DB5_Sports.jpg',
      altText: 'An Aston Martin DB5, famous for its use in James Bond films',
      source: 'Wikimedia Commons',
      attribution: 'Vauxford / CC BY-SA 4.0',
    },
  },
  {
    id: 'q-165',
    type: 'multiple-choice',
    category: 'Mythology',
    questionText: 'In Greek mythology, who is the King of the Gods?',
    options: ['Apollo', 'Poseidon', 'Hades', 'Zeus'],
    correctAnswer: 3, // Zeus
    hints: [
      'His Roman equivalent is Jupiter, and he is famous for wielding thunderbolts.',
    ],
    explanation:
      'Zeus ruled as king of the gods of Mount Olympus. He was the god of the sky, lightning, thunder, law, order, and justice.',
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Zeus_Otricoli_Pio-Clementino_Inv257.jpg?width=600',
      altText: 'Bust of Zeus',
      source: 'Wikimedia Commons',
      attribution: 'Marie-Lan Nguyen / Public Domain',
    },
  },
  {
    id: 'q-166',
    type: 'estimation',
    category: 'Biology',
    questionText:
      'How many chromosomes are in a typical human somatic (body) cell?',
    correctAnswer: 46,
    range: { min: 20, max: 60 },
    tolerance: 0, // Strict
    hints: [
      'They are organized into 23 pairs.',
      'You inherit half of them from your mother and half from your father.',
    ],
    explanation:
      'Humans typically have 46 chromosomes in each cell. These are divided into 22 pairs of autosomes and one pair of sex chromosomes (XX for females, XY for males).',
  },
  {
    id: 'q-167',
    type: 'exact-match',
    category: 'Literature',
    questionText:
      'What was the pen name of the American author Samuel Langhorne Clemens?',
    correctAnswer: 'Mark Twain',
    acceptedVariations: ['Twain'],
    hints: [
      'He wrote "The Adventures of Tom Sawyer" and "Adventures of Huckleberry Finn".',
      'The name is a riverboat term meaning "two fathoms deep".',
    ],
    explanation:
      'Mark Twain is often celebrated as the "greatest humorist the United States has produced," and William Faulkner called him "the father of American literature."',
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Mark_Twain_by_AF_Bradley.jpg?width=600',
      altText: 'Portrait of Mark Twain',
      source: 'Wikimedia Commons',
      attribution: 'A.F. Bradley / Public Domain',
    },
  },
  {
    id: 'q-168',
    type: 'top-five',
    category: 'Geography',
    questionText: 'Name the 5 highest mountain peaks in the world.',
    correctAnswers: [
      { answer: 'Mount Everest', acceptedVariations: ['Everest'] },
      { answer: 'K2', acceptedVariations: ['Mount Godwin-Austen'] },
      { answer: 'Kangchenjunga' },
      { answer: 'Lhotse' },
      { answer: 'Makalu' },
    ],
    hints: [
      'They are all located in the Himalayan and Karakoram ranges in Asia.',
      'Everest is #1, followed by a mountain famously known by a letter and a number.',
    ],
    explanation:
      'These five peaks are the only mountains in the world that exceed 8,400 meters (27,559 ft) in elevation above sea level.',
  },
  {
    id: 'q-169',
    type: 'multiple-choice',
    category: 'Art',
    questionText:
      'The masterpiece marble statue of "David" was sculpted by which Renaissance artist?',
    options: ['Leonardo da Vinci', 'Michelangelo', 'Donatello', 'Raphael'],
    correctAnswer: 1, // Michelangelo
    hints: ['He also famously painted the ceiling of the Sistine Chapel.'],
    explanation:
      "Michelangelo sculpted David between 1501 and 1504. Standing over 17 feet tall, it represents the Biblical hero David and is housed in the Galleria dell'Accademia in Florence.",
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/David_von_Michelangelo.jpg?width=600',
      altText: 'Statue of David by Michelangelo',
      source: 'Wikimedia Commons',
      attribution: 'Jörg Bittner Unna / CC BY 3.0',
    },
  },
  {
    id: 'q-170',
    type: 'estimation',
    category: 'Science',
    questionText:
      'How many days does it take for the Earth to complete one full orbit around the Sun? (Rounded to the nearest whole number)',
    correctAnswer: 365,
    range: { min: 300, max: 400 },
    tolerance: 0, // Strict
    hints: [
      'This duration defines a standard Earth year.',
      'We add an extra day to the calendar every four years to account for the fraction left over.',
    ],
    explanation:
      'It takes Earth approximately 365.25 days to orbit the Sun. The 0.25 is accounted for by adding a Leap Day (February 29) every four years.',
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Earth_Eastern_Hemisphere.jpg?width=600',
      altText: 'The Earth viewed from space',
      source: 'Wikimedia Commons',
      attribution: 'NASA / Public Domain',
    },
  },
  {
    id: 'q-171',
    type: 'exact-match',
    category: 'Music',
    questionText:
      'What is the musical term for an ensemble consisting of exactly four performers?',
    correctAnswer: 'Quartet',
    acceptedVariations: ['quartette'],
    hints: ['Think of a "string ____".', 'It starts with the letter Q.'],
    explanation:
      'A quartet is a group of four singers or instrumentalists playing together. The string quartet (two violins, viola, and cello) is one of the most prominent chamber ensembles in classical music.',
  },
  {
    id: 'q-172',
    type: 'top-five',
    category: 'Geography',
    questionText: 'Name the 5 largest U.S. states by total land area.',
    correctAnswers: [
      { answer: 'Alaska' },
      { answer: 'Texas' },
      { answer: 'California' },
      { answer: 'Montana' },
      { answer: 'New Mexico' },
    ],
    hints: [
      'The top state is over twice the size of the second state.',
      'Three of them share a border with Mexico.',
    ],
    explanation:
      'Alaska is by far the largest state, covering over 660,000 square miles. Texas is the largest of the lower 48 contiguous states.',
  },
  {
    id: 'q-173',
    type: 'multiple-choice',
    category: 'History',
    questionText:
      'Which Ancient Wonder of the World was located in Alexandria, Egypt?',
    options: ['Hanging Gardens', 'Colossus', 'Lighthouse', 'Pyramids'],
    correctAnswer: 2, // Lighthouse
    hints: [
      "It was built on the island of Pharos to guide sailors safely into the city's busy harbor.",
    ],
    explanation:
      'The Lighthouse of Alexandria was built by the Ptolemaic Kingdom in the 3rd century BC. It is estimated to have been at least 100 meters (330 ft) tall, making it one of the tallest man-made structures in the world for many centuries.',
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Lighthouse_-_Thiersch.png?width=600',
      altText: 'Drawing of the Lighthouse of Alexandria',
      source: 'Wikimedia Commons',
      attribution: 'Hermann Thiersch / Public Domain',
    },
  },
  {
    id: 'q-174',
    type: 'estimation',
    category: 'Pop Culture',
    questionText:
      'In what year was the first "Star Wars" movie (Episode IV - A New Hope) released in theaters?',
    correctAnswer: 1977,
    range: { min: 1965, max: 1985 },
    tolerance: 0, // Strict
    hints: [
      'It was released in the late 1970s.',
      'It came out two years after Spielberg\'s "Jaws".',
    ],
    explanation:
      'Written and directed by George Lucas, Star Wars premiered on May 25, 1977. It revolutionized motion picture special effects and became a massive pop culture phenomenon.',
  },
  {
    id: 'q-175',
    type: 'exact-match',
    category: 'Physics',
    questionText:
      'What is the name of the fundamental force that keeps planets in orbit around the Sun?',
    correctAnswer: 'Gravity',
    acceptedVariations: ['Gravitation', 'Gravitational force'],
    hints: [
      'Isaac Newton famously formulated the universal law for this force.',
      'It is the same force that pulls an apple to the ground.',
    ],
    explanation:
      "Gravity is an invisible pulling force. The Sun's massive gravitational pull is what keeps all the planets in the solar system locked in their orbits.",
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Sir_Isaac_Newton_(1643-1727).jpg?width=600',
      altText: 'Portrait of Sir Isaac Newton',
      source: 'Wikimedia Commons',
      attribution: 'Godfrey Kneller / Public Domain',
    },
  },
  {
    id: 'q-176',
    type: 'top-five',
    category: 'Anatomy',
    questionText: 'Name the 5 traditional senses of the human body.',
    correctAnswers: [
      { answer: 'Sight', acceptedVariations: ['Vision'] },
      { answer: 'Hearing', acceptedVariations: ['Audition', 'Sound'] },
      { answer: 'Taste', acceptedVariations: ['Gustation'] },
      { answer: 'Smell', acceptedVariations: ['Olfaction'] },
      { answer: 'Touch', acceptedVariations: ['Somatosensation', 'Feeling'] },
    ],
    hints: [
      'You use your eyes, ears, tongue, nose, and skin to experience them.',
      'Aristotle is often credited with originally classifying these five.',
    ],
    explanation:
      'While modern neurology recognizes more specialized senses (like balance and temperature), these five remain the universally recognized classical senses.',
  },
  {
    id: 'q-177',
    type: 'multiple-choice',
    category: 'Language',
    questionText:
      'What is the most spoken language in the world by total number of speakers (native and non-native combined)?',
    options: ['Mandarin Chinese', 'Spanish', 'English', 'Hindi'],
    correctAnswer: 2, // English
    hints: [
      'It is the primary international language of business, science, and aviation.',
    ],
    explanation:
      'While Mandarin Chinese has the most native speakers, English has the highest total number of speakers worldwide due to its massive number of second-language learners.',
  },
  {
    id: 'q-178',
    type: 'estimation',
    category: 'Food',
    questionText: 'How many fluid ounces are in a standard US cup?',
    correctAnswer: 8,
    range: { min: 4, max: 16 },
    tolerance: 0, // Strict
    hints: ['It is exactly half of a pint.', 'Two of these make up 16 ounces.'],
    explanation:
      'In the United States customary system, 1 cup equals 8 fluid ounces. This measurement is standard in North American cooking and baking.',
  },
  {
    id: 'q-179',
    type: 'exact-match',
    category: 'Animals',
    questionText: 'What is the specific term used for a baby kangaroo?',
    correctAnswer: 'Joey',
    acceptedVariations: ['joey'],
    hints: [
      "It spends its early months developing inside its mother's pouch.",
      'It shares its name with a famous character from the sitcom "Friends".',
    ],
    explanation:
      "Baby marsupials, including kangaroos, koalas, and wombats, are all called joeys. They are born extremely premature and crawl into the mother's pouch to finish developing.",
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Kangaroo_and_joey03.jpg?width=600',
      altText: 'A kangaroo with a joey in its pouch',
      source: 'Wikimedia Commons',
      attribution: 'Glen Fergus / CC BY-SA 2.5',
    },
  },
  {
    id: 'q-180',
    type: 'top-five',
    category: 'History',
    questionText: 'Name 5 of the original 13 American colonies.',
    correctAnswers: [
      { answer: 'Virginia' },
      { answer: 'Massachusetts' },
      { answer: 'New York' },
      { answer: 'Maryland' },
      { answer: 'Rhode Island' },
    ],
    otherOptions: [
      { answer: 'Connecticut' },
      { answer: 'New Hampshire' },
      { answer: 'Delaware' },
      { answer: 'New Jersey' },
      { answer: 'Pennsylvania' },
      { answer: 'North Carolina' },
      { answer: 'South Carolina' },
      { answer: 'Georgia' },
    ],
    hints: [
      'Three of them start with the word "New".',
      'One was named after William Penn, and another after King George II.',
    ],
    explanation:
      'These thirteen British colonies on the Atlantic coast of North America declared their independence in 1776, forming the original United States.',
  },
  {
    id: 'q-181',
    type: 'multiple-choice',
    category: 'Space',
    questionText:
      'Which planet in our solar system is known as the "Red Planet"?',
    options: ['Jupiter', 'Venus', 'Mars', 'Saturn'],
    correctAnswer: 2, // Mars
    hints: ['It is named after the Roman god of war.'],
    explanation:
      'Mars appears red due to the high concentration of iron oxide (rust) on its surface. It is the fourth planet from the Sun.',
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/OSIRIS_Mars_true_color.jpg?width=600',
      altText: 'True color image of Mars',
      source: 'Wikimedia Commons',
      attribution: 'ESA / CC BY-SA 3.0',
    },
  },
  {
    id: 'q-182',
    type: 'estimation',
    category: 'Geography',
    questionText:
      'What is the official height of Mount Everest above sea level in meters (as jointly measured by Nepal and China in 2020)?',
    correctAnswer: 8848,
    range: { min: 8000, max: 9500 },
    tolerance: 10,
    unit: 'm',
    hints: [
      'It is slightly under 9,000 meters.',
      'The traditional accepted height for decades was exactly 8,848 meters (though the 2020 measurement added 0.86m).',
    ],
    explanation:
      "Mount Everest is Earth's highest mountain above sea level, located in the Mahalangur Himal sub-range of the Himalayas.",
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Everest_kalapatthar.jpg?width=600',
      altText: 'Mount Everest seen from Kala Patthar',
      source: 'Wikimedia Commons',
      attribution: 'Pavel Novak / CC BY-SA 2.5',
    },
  },
  {
    id: 'q-183',
    type: 'exact-match',
    category: 'Pop Culture',
    questionText:
      'What is the secret civilian identity of the DC Comics superhero Batman?',
    correctAnswer: 'Bruce Wayne',
    acceptedVariations: ['Bruce Thomas Wayne', 'Wayne'],
    hints: [
      'He is a billionaire philanthropist who lives in Gotham City.',
      'His family name is on his company, "____ Enterprises".',
    ],
    explanation:
      'Bruce Wayne swore vengeance against criminals after witnessing the murder of his parents, Thomas and Martha Wayne, as a child.',
  },
  {
    id: 'q-184',
    type: 'top-five',
    category: 'History',
    questionText: 'Name 5 of the 6 wives of King Henry VIII of England.',
    correctAnswers: [
      { answer: 'Catherine of Aragon' },
      { answer: 'Anne Boleyn' },
      { answer: 'Jane Seymour' },
      { answer: 'Anne of Cleves' },
      { answer: 'Catherine Howard' },
    ],
    otherOptions: [{ answer: 'Catherine Parr' }],
    hints: [
      'Three of them were named Catherine.',
      'Two of them were named Anne.',
    ],
    explanation:
      'The rhyme to remember their fates is: "Divorced, beheaded, died, divorced, beheaded, survived."',
  },
  {
    id: 'q-185',
    type: 'multiple-choice',
    category: 'Literature',
    questionText:
      'Which author wrote the Pulitzer Prize-winning novel "To Kill a Mockingbird"?',
    options: [
      'Harper Lee',
      'John Steinbeck',
      'J.D. Salinger',
      'Ernest Hemingway',
    ],
    correctAnswer: 0, // Harper Lee
    hints: ['The story is narrated by the young character Scout Finch.'],
    explanation:
      'Published in 1960, "To Kill a Mockingbird" became an immediate success and is widely read in high schools across the United States. It deals with serious issues of racial injustice in the Deep South.',
  },
  {
    id: 'q-186',
    type: 'estimation',
    category: 'Math',
    questionText: 'How many flat faces does a regular dodecahedron have?',
    correctAnswer: 12,
    range: { min: 6, max: 20 },
    tolerance: 0, // Strict
    hints: [
      'Each face is a regular pentagon.',
      'It is the shape of the 12-sided die used in tabletop roleplaying games.',
    ],
    explanation:
      'A regular dodecahedron is one of the five Platonic solids. It consists of 12 regular pentagonal faces, 30 edges, and 20 vertices.',
  },
  {
    id: 'q-187',
    type: 'exact-match',
    category: 'Chemistry',
    questionText: 'What is the chemical symbol for Silver?',
    correctAnswer: 'Ag',
    acceptedVariations: ['AG', 'ag'],
    hints: [
      'It comes from the Latin word "Argentum".',
      'The country of Argentina is named after this same root word.',
    ],
    explanation:
      'Silver has the highest electrical conductivity, thermal conductivity, and reflectivity of any metal. Its symbol Ag reflects its Latin name.',
  },
  {
    id: 'q-188',
    type: 'top-five',
    category: 'Language',
    questionText:
      'Name the 5 most spoken languages in the world by number of NATIVE speakers.',
    correctAnswers: [
      {
        answer: 'Mandarin Chinese',
        acceptedVariations: ['Mandarin', 'Chinese'],
      },
      { answer: 'Spanish' },
      { answer: 'English' },
      { answer: 'Hindi' },
      { answer: 'Bengali' },
    ],
    hints: [
      'While English is #1 in total speakers, it is #3 in native speakers.',
      'Two of the languages are primarily spoken in India and its neighboring countries.',
    ],
    explanation:
      'Mandarin has roughly 939 million native speakers. Spanish is second with nearly 485 million, edging out English native speakers.',
  },
  {
    id: 'q-189',
    type: 'multiple-choice',
    category: 'Music',
    questionText:
      'Which legendary classical composer famously continued to compose music even after becoming almost completely deaf?',
    options: [
      'Wolfgang Amadeus Mozart',
      'Ludwig van Beethoven',
      'Johann Sebastian Bach',
      'Frederic Chopin',
    ],
    correctAnswer: 1, // Beethoven
    hints: [
      'He composed his acclaimed 9th Symphony when he could barely hear.',
    ],
    explanation:
      'Beethoven began losing his hearing in his late 20s. Despite his severe deafness, he continued to compose, conduct, and perform, creating some of his most admired works during his final years.',
  },
  {
    id: 'q-190',
    type: 'estimation',
    category: 'Biology',
    questionText: 'How many permanent teeth does a typical adult dog have?',
    correctAnswer: 42,
    range: { min: 20, max: 60 },
    tolerance: 0, // Strict
    hints: [
      'They have 10 more teeth than a typical adult human.',
      'It is the "answer to the ultimate question of life, the universe, and everything" in The Hitchhiker\'s Guide to the Galaxy.',
    ],
    explanation:
      'Adult dogs have 42 permanent teeth: 20 on the top jaw and 22 on the bottom jaw. Puppies start with 28 deciduous (baby) teeth.',
  },
  {
    id: 'q-191',
    type: 'exact-match',
    category: 'History',
    questionText: 'Who was the first person to walk on the Moon?',
    correctAnswer: 'Neil Armstrong',
    acceptedVariations: ['Armstrong'],
    hints: [
      'He commanded the Apollo 11 mission.',
      'He famously said, "That\'s one small step for [a] man, one giant leap for mankind."',
    ],
    explanation:
      'Neil Armstrong stepped onto the lunar surface on July 20, 1969, shortly followed by Buzz Aldrin.',
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Neil_Armstrong_pose.jpg?width=600',
      altText: 'Portrait of Neil Armstrong in his spacesuit',
      source: 'Wikimedia Commons',
      attribution: 'NASA / Public Domain',
    },
  },
  {
    id: 'q-192',
    type: 'top-five',
    category: 'Movies',
    questionText:
      'Name 5 of the 6 highest-grossing films of all time (unadjusted for inflation, as of 2024).',
    correctAnswers: [
      { answer: 'Avatar' },
      { answer: 'Avengers: Endgame', acceptedVariations: ['Endgame'] },
      {
        answer: 'Avatar: The Way of Water',
        acceptedVariations: ['The Way of Water', 'Avatar 2'],
      },
      { answer: 'Titanic' },
      {
        answer: 'Star Wars: The Force Awakens',
        acceptedVariations: ['The Force Awakens', 'Star Wars Episode VII'],
      },
    ],
    otherOptions: [
      {
        answer: 'Avengers: Infinity War',
        acceptedVariations: ['Infinity War'],
      },
    ],
    hints: [
      'James Cameron directed three of them.',
      'Two of them are Avengers movies.',
    ],
    explanation:
      'James Cameron holds an unprecedented record with three of the top four spots (Avatar, The Way of Water, and Titanic).',
  },
  {
    id: 'q-193',
    type: 'multiple-choice',
    category: 'Games',
    questionText: 'In the game of chess, which piece can only move diagonally?',
    options: ['Rook', 'Knight', 'Pawn', 'Bishop'],
    correctAnswer: 3, // Bishop
    hints: [
      'Each player starts with two of these pieces: one on a light square and one on a dark square.',
    ],
    explanation:
      'The Bishop moves any number of vacant squares diagonally. Because of this movement rule, a bishop is restricted to squares of the same color it started on for the entire game.',
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Chess_blt45.svg?width=600',
      altText: 'A light-colored chess Bishop piece',
      source: 'Wikimedia Commons',
      attribution: 'Public Domain',
    },
  },
  {
    id: 'q-194',
    type: 'estimation',
    category: 'Anatomy',
    questionText:
      'How many individual ribs are there in a standard human skeletal system?',
    correctAnswer: 24,
    range: { min: 10, max: 40 },
    tolerance: 0, // Strict
    hints: [
      'They are arranged in pairs.',
      'There are 12 on each side of the body.',
    ],
    explanation:
      'Most humans are born with 12 pairs of ribs, totaling 24. They form a protective cage around the heart and lungs.',
  },
  {
    id: 'q-195',
    type: 'exact-match',
    category: 'Geography',
    questionText: 'What is the capital city of New Zealand?',
    correctAnswer: 'Wellington',
    acceptedVariations: ['wellington'],
    hints: [
      'It is located at the south-western tip of the North Island.',
      'It is the southernmost capital of a sovereign state in the world.',
    ],
    explanation:
      'While Auckland is the largest city in New Zealand, Wellington has served as the political capital since 1865.',
  },
  {
    id: 'q-196',
    type: 'top-five',
    category: 'Chemistry',
    questionText:
      'Name the 5 chemical elements that make up the "Halogen" group (Group 17) on the periodic table.',
    correctAnswers: [
      { answer: 'Fluorine' },
      { answer: 'Chlorine' },
      { answer: 'Bromine' },
      { answer: 'Iodine' },
      { answer: 'Astatine' },
    ],
    hints: [
      'One is heavily used in swimming pools, another in toothpaste.',
      'They all end in the suffix "-ine".',
    ],
    explanation:
      'The halogens are highly reactive nonmetallic elements. Tennessine is also technically in this group, but as a synthetic superheavy element, it is generally excluded from basic halogen lists.',
  },
  {
    id: 'q-197',
    type: 'multiple-choice',
    category: 'Art',
    questionText:
      'The iconic painting "The Starry Night" was created by which post-impressionist artist?',
    options: [
      'Claude Monet',
      'Vincent van Gogh',
      'Pablo Picasso',
      'Salvador Dalí',
    ],
    correctAnswer: 1, // Van Gogh
    hints: ['He painted it while in an asylum in Saint-Rémy-de-Provence.'],
    explanation:
      'Vincent van Gogh painted "The Starry Night" in 1889. It depicts the view from the east-facing window of his asylum room just before sunrise, with the addition of an idealized village.',
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg?width=600',
      altText: 'The Starry Night painting',
      source: 'Wikimedia Commons',
      attribution: 'Public Domain',
    },
  },
  {
    id: 'q-198',
    type: 'estimation',
    category: 'History',
    questionText:
      'In what year did the French Revolution begin with the Storming of the Bastille?',
    correctAnswer: 1789,
    range: { min: 1700, max: 1850 },
    tolerance: 0, // Strict
    hints: [
      'It happened in the late 18th century.',
      'It was shortly after the American Revolutionary War concluded.',
    ],
    explanation:
      'On July 14, 1789, an angry mob stormed the Bastille, a state prison in Paris. This event became the flashpoint for the French Revolution.',
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Prise_de_la_Bastille.jpg?width=600',
      altText: 'Painting of the Storming of the Bastille',
      source: 'Wikimedia Commons',
      attribution: 'Jean-Pierre Houël / Public Domain',
    },
  },
  {
    id: 'q-199',
    type: 'exact-match',
    category: 'Science',
    questionText:
      'What is the name of the positively charged subatomic particle found in the nucleus of an atom?',
    correctAnswer: 'Proton',
    acceptedVariations: ['proton'],
    hints: [
      'It shares the nucleus with neutrons.',
      'The number of these particles determines the atomic number of an element.',
    ],
    explanation:
      'Protons are subatomic particles with a positive electric charge. The number of protons in the nucleus determines which chemical element the atom represents (e.g., all carbon atoms have exactly 6 protons).',
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Stylised_atom_with_three_Bohr_model_orbits_and_stylised_nucleus.svg?width=600',
      altText: 'Diagram of a stylised atom',
      source: 'Wikimedia Commons',
      attribution: 'Indolences / CC BY-SA 3.0',
    },
  },
  {
    id: 'q-200',
    type: 'top-five',
    category: 'Sports',
    questionText:
      'Name the 5 traditional positions on a standard basketball team.',
    correctAnswers: [
      { answer: 'Point Guard', acceptedVariations: ['PG', '1'] },
      { answer: 'Shooting Guard', acceptedVariations: ['SG', '2'] },
      { answer: 'Small Forward', acceptedVariations: ['SF', '3'] },
      { answer: 'Power Forward', acceptedVariations: ['PF', '4'] },
      { answer: 'Center', acceptedVariations: ['C', '5'] },
    ],
    hints: [
      'Two are "Guards", two are "Forwards", and one plays in the middle.',
      'The player who runs the offense is the "Point" one.',
    ],
    explanation:
      'While modern basketball has become largely "positionless", these five traditional roles form the foundational structure of the sport.',
  },
  {
    id: 'q-201',
    type: 'multiple-choice',
    category: 'History',
    questionText: 'Which ancient civilization built the Machu Picchu citadel?',
    options: ['Aztec', 'Maya', 'Inca', 'Olmec'],
    correctAnswer: 2, // Inca
    hints: ['The empire was located in the Andes mountains of South America.'],
    explanation:
      'Machu Picchu was built in the 15th century by the Inca Empire. It is located in the Cusco Region of modern-day Peru and was abandoned around the time of the Spanish conquest.',
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Machu_Picchu,_Peru.jpg?width=600',
      altText: 'The ruins of Machu Picchu',
      source: 'Wikimedia Commons',
      attribution: 'Pedro Szekely / CC BY-SA 2.0',
    },
  },
  {
    id: 'q-202',
    type: 'estimation',
    category: 'History',
    questionText: 'In what year did World War II officially end?',
    correctAnswer: 1945,
    range: { min: 1935, max: 1955 },
    tolerance: 0, // Strict
    hints: [
      'It ended with the surrender of the Axis powers following the bombings of Hiroshima and Nagasaki.',
      'It was exactly six years after the war began in 1939.',
    ],
    explanation:
      "World War II ended on September 2, 1945, when US General Douglas MacArthur accepted Japan's formal surrender aboard the USS Missouri.",
  },
  {
    id: 'q-203',
    type: 'exact-match',
    category: 'Chemistry',
    questionText: 'What is the chemical symbol for Copper?',
    correctAnswer: 'Cu',
    acceptedVariations: ['CU', 'cu'],
    hints: [
      'It comes from the Latin word "Cuprum".',
      'It starts with the letter C.',
    ],
    explanation:
      'Copper is a soft, malleable, and ductile metal with very high thermal and electrical conductivity. Its symbol Cu is derived from the Latin aes Cyprium (metal of Cyprus).',
  },
  {
    id: 'q-204',
    type: 'top-five',
    category: 'Geography',
    questionText:
      'Name the 5 sovereign states that make up the Nordic countries.',
    correctAnswers: [
      { answer: 'Sweden' },
      { answer: 'Norway' },
      { answer: 'Denmark' },
      { answer: 'Finland' },
      { answer: 'Iceland' },
    ],
    hints: [
      'Three of them are located on the Scandinavian Peninsula.',
      'One is an island nation in the North Atlantic famous for its volcanoes.',
    ],
    explanation:
      'These five countries share strong historical, cultural, and linguistic ties. While "Scandinavia" technically only refers to Sweden, Norway, and Denmark, the "Nordic Region" includes all five.',
  },
  {
    id: 'q-205',
    type: 'multiple-choice',
    category: 'Geography',
    questionText: 'Which continent is the Sahara Desert located on?',
    options: ['Asia', 'Africa', 'Australia', 'South America'],
    correctAnswer: 1, // Africa
    hints: [
      'It covers large parts of countries like Egypt, Algeria, and Morocco.',
    ],
    explanation:
      'The Sahara is the largest hot desert in the world, covering most of North Africa. It is nearly as large as the entire United States.',
  },
  {
    id: 'q-206',
    type: 'estimation',
    category: 'Games',
    questionText:
      "How many individual colored squares (stickers) are there on the outside of a solved standard 3x3x3 Rubik's Cube?",
    correctAnswer: 54,
    range: { min: 20, max: 100 },
    tolerance: 0, // Strict
    hints: ['There are 6 faces on a cube.', 'Each face has a 3x3 grid.'],
    explanation:
      "A standard Rubik's Cube has 6 faces, and each face is divided into 9 smaller squares (3x3). 6 multiplied by 9 equals 54.",
    media: {
      type: 'image',
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Rubik's_cube.svg?width=600",
      altText: "A standard Rubik's Cube",
      source: 'Wikimedia Commons',
      attribution: 'Public Domain',
    },
  },
  {
    id: 'q-207',
    type: 'exact-match',
    category: 'Biology',
    questionText: 'What is the largest organ of the human body?',
    correctAnswer: 'Skin',
    acceptedVariations: ['The skin'],
    hints: [
      'It covers the entire outside of the body.',
      'It is part of the integumentary system.',
    ],
    explanation:
      "The skin is the body's largest and heaviest organ. In adults, it covers a surface area of about 2 square meters and accounts for roughly 15% of total body weight.",
  },
  {
    id: 'q-208',
    type: 'top-five',
    category: 'Pop Culture',
    questionText:
      'Name 5 of the 6 main characters from the popular 90s sitcom "Friends".',
    correctAnswers: [
      { answer: 'Rachel', acceptedVariations: ['Rachel Green'] },
      { answer: 'Monica', acceptedVariations: ['Monica Geller'] },
      { answer: 'Phoebe', acceptedVariations: ['Phoebe Buffay'] },
      { answer: 'Joey', acceptedVariations: ['Joey Tribbiani'] },
      { answer: 'Chandler', acceptedVariations: ['Chandler Bing'] },
    ],
    otherOptions: [{ answer: 'Ross', acceptedVariations: ['Ross Geller'] }],
    hints: [
      'They famously hung out at the Central Perk coffee shop.',
      'Two of them are siblings with the last name Geller.',
    ],
    explanation:
      'The iconic cast of Friends featured Jennifer Aniston (Rachel), Courteney Cox (Monica), Lisa Kudrow (Phoebe), Matt LeBlanc (Joey), Matthew Perry (Chandler), and David Schwimmer (Ross).',
  },
  {
    id: 'q-209',
    type: 'multiple-choice',
    category: 'Music',
    questionText:
      'Which classical stringed instrument is famously known for having 47 strings and 7 pedals?',
    options: ['Grand Piano', 'Cello', 'Harp', 'Harpsichord'],
    correctAnswer: 2, // Harp
    hints: ['It is often associated with angels in classical mythology.'],
    explanation:
      'The modern concert harp typically has 47 strings and seven pedals. The pedals are used to change the pitch of the strings, allowing the harpist to play in different keys.',
  },
  {
    id: 'q-210',
    type: 'estimation',
    category: 'Math',
    questionText: 'How many straight sides does a regular heptagon have?',
    correctAnswer: 7,
    range: { min: 3, max: 12 },
    tolerance: 0, // Strict
    hints: [
      'It has one more side than a hexagon.',
      'It has one less side than an octagon.',
    ],
    explanation:
      'A heptagon (also known as a septagon) is a seven-sided polygon. The sum of the internal angles of a regular heptagon is 900 degrees.',
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Regular_heptagon.svg?width=600',
      altText: 'A regular heptagon',
      source: 'Wikimedia Commons',
      attribution: 'Public Domain',
    },
  },
  {
    id: 'q-211',
    type: 'exact-match',
    category: 'Literature',
    questionText:
      'Who wrote the groundbreaking 1818 science fiction novel "Frankenstein"?',
    correctAnswer: 'Mary Shelley',
    acceptedVariations: ['Shelley', 'Mary Wollstonecraft Shelley'],
    hints: [
      'She wrote it when she was just 18 years old during a trip to Geneva.',
      'Her husband was the famous Romantic poet Percy Bysshe ____.',
    ],
    explanation:
      'Mary Shelley conceived of the story during a legendary ghost story competition with Lord Byron and her future husband, Percy Shelley. It is widely considered one of the very first science fiction novels.',
    media: {
      type: 'image',
      url: 'https://upload.wikimedia.org/wikipedia/commons/3/31/Mary_Shelley_portrait.png',
      altText: 'Portrait of Mary Shelley',
      source: 'Wikimedia Commons',
      attribution: 'Richard Rothwell / Public Domain',
    },
  },
  {
    id: 'q-212',
    type: 'top-five',
    category: 'Space',
    questionText:
      'Name the 5 "classical planets" of our solar system that can easily be seen from Earth with the naked eye.',
    correctAnswers: [
      { answer: 'Mercury' },
      { answer: 'Venus' },
      { answer: 'Mars' },
      { answer: 'Jupiter' },
      { answer: 'Saturn' },
    ],
    hints: [
      'Uranus and Neptune were discovered much later with telescopes.',
      'They are the 5 planets closest to Earth.',
    ],
    explanation:
      'These five planets have been known to humanity since ancient times. Our days of the week are historically derived from the names of these planets along with the Sun and the Moon.',
  },
  {
    id: 'q-213',
    type: 'multiple-choice',
    category: 'Animals',
    questionText:
      'What is the main structural material that makes up a rhinoceros horn?',
    options: ['Bone', 'Ivory', 'Keratin', 'Cartilage'],
    correctAnswer: 2, // Keratin
    hints: [
      'It is the exact same protein that makes up human hair and fingernails.',
    ],
    explanation:
      'Unlike the horns of cattle or sheep, which have a bony core, rhino horns are completely composed of compacted keratin. Because of this, a broken horn can grow back.',
  },
  {
    id: 'q-214',
    type: 'estimation',
    category: 'Sports',
    questionText:
      'In American Football, how many points is a touchdown worth (before the extra point is kicked)?',
    correctAnswer: 6,
    range: { min: 1, max: 10 },
    tolerance: 0, // Strict
    hints: [
      'It is worth twice as much as a field goal.',
      'With a standard extra point kick, the total usually becomes 7.',
    ],
    explanation:
      "A touchdown is scored when a team crosses the opponent's goal line with the football. It awards 6 points and the opportunity to try for 1 or 2 additional points.",
  },
  {
    id: 'q-215',
    type: 'exact-match',
    category: 'Geography',
    questionText: 'What is the highest mountain peak in North America?',
    correctAnswer: 'Denali',
    acceptedVariations: ['Mount McKinley', 'Mt. McKinley', 'McKinley'],
    hints: [
      'It is located in the US state of Alaska.',
      'Its official name was reverted to its native Koyukon Athabascan name in 2015.',
    ],
    explanation:
      'Denali is the highest mountain peak in North America, with a summit elevation of 20,310 feet (6,190 meters) above sea level. It is the centerpiece of Denali National Park.',
  },
  {
    id: 'q-216',
    type: 'top-five',
    category: 'Geography',
    questionText:
      'Name the 5 U.S. states that share a border with the Pacific Ocean.',
    correctAnswers: [
      { answer: 'Washington' },
      { answer: 'Oregon' },
      { answer: 'California' },
      { answer: 'Alaska' },
      { answer: 'Hawaii' },
    ],
    hints: [
      'Three are contiguous states on the West Coast, and two are not.',
      'One is an island archipelago.',
    ],
    explanation:
      'These five states make up the Pacific Coast region of the United States. Hawaii is the only US state entirely surrounded by the Pacific Ocean.',
  },
  {
    id: 'q-217',
    type: 'multiple-choice',
    category: 'History',
    questionText:
      'Who was the first female aviator to fly solo across the Atlantic Ocean?',
    options: [
      'Bessie Coleman',
      'Amelia Earhart',
      'Harriet Quimby',
      'Jacqueline Cochran',
    ],
    correctAnswer: 1, // Amelia Earhart
    hints: [
      'She mysteriously disappeared in 1937 during an attempt to fly around the globe.',
    ],
    explanation:
      'Amelia Earhart made her famous solo flight across the Atlantic in 1932. She received the United States Distinguished Flying Cross for this record.',
  },
  {
    id: 'q-218',
    type: 'estimation',
    category: 'History',
    questionText:
      'In what year was the historic Magna Carta signed by King John of England?',
    correctAnswer: 1215,
    range: { min: 1100, max: 1400 },
    tolerance: 0, // Strict
    hints: [
      'It happened in the early 13th century.',
      'It was signed at Runnymede.',
    ],
    explanation:
      'The Magna Carta was issued in June 1215. It established the principle that everyone is subject to the law, even the king, and guarantees the rights of individuals.',
  },
  {
    id: 'q-219',
    type: 'exact-match',
    category: 'Astronomy',
    questionText: 'What is the name of the largest moon of the planet Saturn?',
    correctAnswer: 'Titan',
    acceptedVariations: ['titan'],
    hints: [
      'It shares its name with the race of mythological beings that preceded the Olympian gods.',
      'It is the only moon in our solar system with a dense atmosphere.',
    ],
    explanation:
      "Titan is Saturn's largest moon and the second-largest natural satellite in the Solar System. It is the only known moon with a significant atmosphere and liquid on its surface.",
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Titan_in_true_color.jpg?width=600',
      altText: "Saturn's moon Titan in true color",
      source: 'Wikimedia Commons',
      attribution: 'NASA/JPL/Space Science Institute / Public Domain',
    },
  },
  {
    id: 'q-220',
    type: 'top-five',
    category: 'Pop Culture',
    questionText:
      'Name 5 of the 7 dwarfs from the classic Disney film "Snow White and the Seven Dwarfs".',
    correctAnswers: [
      { answer: 'Doc' },
      { answer: 'Grumpy' },
      { answer: 'Happy' },
      { answer: 'Sleepy' },
      { answer: 'Bashful' },
    ],
    otherOptions: [{ answer: 'Sneezy' }, { answer: 'Dopey' }],
    hints: [
      'All but one of them are named after adjectives.',
      "One wears glasses, and one doesn't speak.",
    ],
    explanation:
      'The 1937 animated film gave these specific names and distinct personalities to the dwarfs, who were unnamed in the original Brothers Grimm fairy tale.',
  },
  {
    id: 'q-221',
    type: 'multiple-choice',
    category: 'Science',
    questionText:
      "Which of the following is the most abundant metal in the Earth's crust?",
    options: ['Iron', 'Aluminum', 'Copper', 'Gold'],
    correctAnswer: 1, // Aluminum
    hints: [
      'It is a lightweight, silvery-white metal widely used in aerospace and everyday packaging.',
    ],
    explanation:
      "Aluminum (or Aluminium) is the most abundant metallic element in Earth's crust and the most widely used nonferrous metal. Iron is the second most abundant.",
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Aluminium-4.jpg?width=600',
      altText: 'Pieces of aluminum metal',
      source: 'Wikimedia Commons',
      attribution: 'Jurii / CC BY 3.0',
    },
  },
  {
    id: 'q-222',
    type: 'estimation',
    category: 'History',
    questionText:
      'In what year did the United States formally declare its independence from Great Britain?',
    correctAnswer: 1776,
    range: { min: 1750, max: 1800 },
    tolerance: 0, // Strict
    hints: [
      'The Declaration of Independence was adopted on July 4th of this year.',
      'It was during the late 18th century.',
    ],
    explanation:
      'The Second Continental Congress adopted the Declaration of Independence on July 4, 1776, formally proclaiming the 13 American colonies as independent sovereign states.',
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Declaration_of_Independence_(1819),_by_John_Trumbull.jpg?width=600',
      altText: 'Painting of the Declaration of Independence by John Trumbull',
      source: 'Wikimedia Commons',
      attribution: 'Public Domain',
    },
  },
  {
    id: 'q-223',
    type: 'exact-match',
    category: 'Geography',
    questionText: 'What is the capital city of South Korea?',
    correctAnswer: 'Seoul',
    acceptedVariations: ['seoul'],
    hints: [
      'It hosted the 1988 Summer Olympics.',
      'It is located on the Han River.',
    ],
    explanation:
      "Seoul is the capital and largest metropolis of South Korea, forming the heart of the Seoul Capital Area, which houses about half of the country's population.",
  },
  {
    id: 'q-224',
    type: 'top-five',
    category: 'Pop Culture',
    questionText:
      'Name 5 of the 6 Infinity Stones from the Marvel Cinematic Universe.',
    correctAnswers: [
      { answer: 'Space', acceptedVariations: ['Space Stone', 'Tesseract'] },
      { answer: 'Reality', acceptedVariations: ['Reality Stone', 'Aether'] },
      { answer: 'Power', acceptedVariations: ['Power Stone', 'Orb'] },
      { answer: 'Mind', acceptedVariations: ['Mind Stone'] },
      { answer: 'Time', acceptedVariations: ['Time Stone', 'Eye of Agamotto'] },
    ],
    otherOptions: [{ answer: 'Soul', acceptedVariations: ['Soul Stone'] }],
    hints: [
      'Thanos collected all of them in a golden gauntlet.',
      'One controls the flow of seconds/hours, another grants immense physical strength.',
    ],
    explanation:
      'In the MCU, the Infinity Stones were six immensely powerful gem-like objects tied to different aspects of the universe, sought after by the Mad Titan Thanos.',
  },
  {
    id: 'q-225',
    type: 'multiple-choice',
    category: 'Technology',
    questionText:
      'What does "HTTP" stand for at the beginning of a website address?',
    options: [
      'Hypertext Transfer Protocol',
      'Hyperlink Transfer Technology',
      'Hypertext Terminal Processor',
      'Host Type Text Protocol',
    ],
    correctAnswer: 0, // Hypertext Transfer Protocol
    hints: [
      'The "P" stands for Protocol, which is a set of rules for formatting and processing data.',
    ],
    explanation:
      'HTTP is the foundation of data communication for the World Wide Web. When "S" is added (HTTPS), it means the connection is secure and encrypted.',
  },
  {
    id: 'q-226',
    type: 'estimation',
    category: 'Games',
    questionText:
      'How many alternating black and white squares are there on a standard chessboard?',
    correctAnswer: 64,
    range: { min: 40, max: 100 },
    tolerance: 0, // Strict
    hints: [
      'The board is a grid of 8 rows by 8 columns.',
      'It is the square of 8.',
    ],
    explanation:
      'A standard chessboard is an 8x8 grid, yielding 64 individual squares, alternating between 32 light squares and 32 dark squares.',
    media: {
      type: 'image',
      url: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Chess_Board.svg',
      altText: 'An empty 8x8 chessboard',
      source: 'Wikimedia Commons',
      attribution: 'Public Domain',
    },
  },
  {
    id: 'q-227',
    type: 'exact-match',
    category: 'Math',
    questionText:
      'What is the mathematical term for a polygon with exactly eight sides?',
    correctAnswer: 'Octagon',
    acceptedVariations: ['octagon'],
    hints: [
      'It shares a prefix with an eight-legged sea creature.',
      'It is the shape of a standard Stop sign.',
    ],
    explanation:
      'An octagon is an eight-sided polygon or 8-gon. The sum of all the internal angles of any non-self-intersecting octagon is 1080 degrees.',
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Regular_octagon.svg?width=600',
      altText: 'A regular octagon',
      source: 'Wikimedia Commons',
      attribution: 'Public Domain',
    },
  },
  {
    id: 'q-228',
    type: 'top-five',
    category: 'Biology',
    questionText:
      'Name the 5 traditional kingdoms in the biological classification of living organisms.',
    correctAnswers: [
      { answer: 'Animalia', acceptedVariations: ['Animals', 'Animal'] },
      { answer: 'Plantae', acceptedVariations: ['Plants', 'Plant'] },
      { answer: 'Fungi', acceptedVariations: ['Fungus'] },
      { answer: 'Protista', acceptedVariations: ['Protists', 'Protist'] },
      { answer: 'Monera', acceptedVariations: ['Bacteria', 'Prokaryotes'] },
    ],
    hints: [
      'Humans belong to one, and mushrooms belong to another.',
      'One contains simple, single-celled organisms without a nucleus.',
    ],
    explanation:
      'Robert Whittaker proposed this widely taught five-kingdom system in 1969. Modern biology often uses a more complex system including domains like Archaea, but the 5 kingdoms remain a foundational teaching tool.',
  },
  {
    id: 'q-229',
    type: 'multiple-choice',
    category: 'Music',
    questionText:
      'Which of the following instruments is a member of the woodwind family?',
    options: ['Trumpet', 'Cello', 'Flute', 'Snare Drum'],
    correctAnswer: 2, // Flute
    hints: [
      'It produces sound by blowing a stream of air across a hole, rather than using a vibrating reed or buzzing lips.',
    ],
    explanation:
      'Despite often being made of metal today, the flute is classified as a woodwind instrument because of how its sound is produced (splitting a column of air), distinguishing it from brass instruments.',
  },
  {
    id: 'q-230',
    type: 'estimation',
    category: 'Geography',
    questionText:
      'As of 2024, how many sovereign states are member countries of the United Nations?',
    correctAnswer: 193,
    range: { min: 180, max: 210 },
    tolerance: 0, // Strict
    hints: [
      'It is just shy of 200.',
      'The most recent member to join was South Sudan in 2011.',
    ],
    explanation:
      'There are currently 193 member states in the United Nations. Additionally, there are two non-member observer states: the Holy See (Vatican City) and the State of Palestine.',
  },
  {
    id: 'q-231',
    type: 'exact-match',
    category: 'Literature',
    questionText:
      'Who is traditionally credited as the author of the ancient Greek epic poems "The Iliad" and "The Odyssey"?',
    correctAnswer: 'Homer',
    acceptedVariations: ['homer'],
    hints: [
      'He shares a name with the father figure from the animated show "The Simpsons".',
      'He is often depicted as a blind bard.',
    ],
    explanation:
      'Homer is the presumed author of these foundational works of ancient Greek literature. However, modern scholars believe the epics were likely the culmination of a long oral tradition.',
  },
  {
    id: 'q-232',
    type: 'top-five',
    category: 'Geography',
    questionText:
      'Name the 5 major permanently inhabited territories of the United States.',
    correctAnswers: [
      { answer: 'Puerto Rico' },
      { answer: 'Guam' },
      {
        answer: 'U.S. Virgin Islands',
        acceptedVariations: ['US Virgin Islands', 'Virgin Islands'],
      },
      { answer: 'American Samoa', acceptedVariations: ['Samoa'] },
      {
        answer: 'Northern Mariana Islands',
        acceptedVariations: ['Mariana Islands', 'Marianas'],
      },
    ],
    hints: [
      'One is located in the Caribbean, directly east of the Dominican Republic.',
      'Three are located in the Pacific Ocean.',
    ],
    explanation:
      'While the US has 50 states, it also oversees these five major inhabited territories. People born in these territories (except American Samoa) are US citizens, but they do not have voting representation in Congress.',
  },
  {
    id: 'q-233',
    type: 'multiple-choice',
    category: 'Food',
    questionText:
      'What is the primary base ingredient in a traditional Spanish paella?',
    options: ['Pasta', 'Rice', 'Potatoes', 'Bread'],
    correctAnswer: 1, // Rice
    hints: [
      'It is a grain that absorbs the rich broth and takes on a distinct yellow color when cooked with saffron.',
    ],
    explanation:
      'Paella is a classic Spanish rice dish originating from Valencia. Traditional versions are cooked in a wide, shallow pan and often include seafood, meats, and vegetables over a bed of saffron-infused rice.',
  },
  {
    id: 'q-234',
    type: 'estimation',
    category: 'Science',
    questionText: 'What is the atomic number of Oxygen?',
    correctAnswer: 8,
    range: { min: 1, max: 15 },
    tolerance: 0, // Strict
    hints: [
      'It sits directly between Nitrogen (7) and Fluorine (9).',
      'It is the mathematical cube of 2.',
    ],
    explanation:
      "Oxygen is a chemical element with the symbol O and atomic number 8. It is a highly reactive nonmetal and makes up roughly 21% of Earth's atmosphere.",
  },
  {
    id: 'q-235',
    type: 'exact-match',
    category: 'Games',
    questionText:
      'In the classic 1980 arcade game Pac-Man, what is the generic term for the four colorful enemies that chase the player?',
    correctAnswer: 'Ghosts',
    acceptedVariations: ['Monsters', 'Ghost', 'Monster'],
    hints: [
      'They turn blue and can be eaten after Pac-Man consumes a Power Pellet.',
      'Their names are Blinky, Pinky, Inky, and Clyde.',
    ],
    explanation:
      'The enemies in Pac-Man are universally known as ghosts. In the original Japanese version, they were referred to as "monsters", which is also an accepted answer.',
  },
  {
    id: 'q-236',
    type: 'top-five',
    category: 'Geography',
    questionText:
      'Name the 5 most populated cities in the United States (as of the 2020 Census).',
    correctAnswers: [
      { answer: 'New York City', acceptedVariations: ['New York', 'NYC'] },
      { answer: 'Los Angeles', acceptedVariations: ['LA'] },
      { answer: 'Chicago' },
      { answer: 'Houston' },
      { answer: 'Phoenix' },
    ],
    hints: [
      'New York, LA, and Chicago have held the top 3 spots for decades.',
      'The 4th is in Texas, and the 5th is the capital of Arizona.',
    ],
    explanation:
      'These five major metropolises are the only US cities with populations firmly exceeding 1.5 million people within their direct city limits.',
  },
  {
    id: 'q-237',
    type: 'multiple-choice',
    category: 'Art',
    questionText:
      'Which architectural style is characterized by pointed arches, ribbed vaults, and flying buttresses?',
    options: ['Romanesque', 'Gothic', 'Baroque', 'Neoclassical'],
    correctAnswer: 1, // Gothic
    hints: [
      'Famous examples include Notre-Dame de Paris and Westminster Abbey.',
    ],
    explanation:
      'Gothic architecture flourished in Europe during the High and Late Middle Ages. The use of the flying buttress allowed architects to build much taller, thinner walls featuring massive stained-glass windows.',
  },
  {
    id: 'q-238',
    type: 'estimation',
    category: 'History',
    questionText:
      'In what year did the German Democratic Republic begin construction of the Berlin Wall?',
    correctAnswer: 1961,
    range: { min: 1950, max: 1970 },
    tolerance: 0, // Strict
    hints: [
      'It happened in the early 1960s.',
      'It was built during the presidency of John F. Kennedy.',
    ],
    explanation:
      'Construction of the Berlin Wall began on August 13, 1961. It physically and ideologically divided Berlin until it was opened in November 1989.',
  },
  {
    id: 'q-239',
    type: 'exact-match',
    category: 'Chemistry',
    questionText:
      'What is the everyday common name for the chemical compound Sodium Chloride (NaCl)?',
    correctAnswer: 'Salt',
    acceptedVariations: ['Table salt'],
    hints: [
      'It is widely used as a seasoning and food preservative.',
      'It makes seawater undrinkable.',
    ],
    explanation:
      'Sodium Chloride is the salt most responsible for the salinity of seawater and of the extracellular fluid of many multicellular organisms. In its edible form, it is commonly used as a condiment.',
  },
  {
    id: 'q-240',
    type: 'top-five',
    category: 'Pop Culture',
    questionText:
      'Name the 5 official nicknames (personas) of the members of the British 90s girl group, the Spice Girls.',
    correctAnswers: [
      { answer: 'Scary', acceptedVariations: ['Scary Spice', 'Mel B'] },
      { answer: 'Sporty', acceptedVariations: ['Sporty Spice', 'Mel C'] },
      { answer: 'Baby', acceptedVariations: ['Baby Spice', 'Emma Bunton'] },
      {
        answer: 'Ginger',
        acceptedVariations: ['Ginger Spice', 'Geri Halliwell'],
      },
      {
        answer: 'Posh',
        acceptedVariations: ['Posh Spice', 'Victoria Beckham'],
      },
    ],
    hints: [
      'One later married soccer star David Beckham.',
      'Their names reflect their distinct public personas: frightening, athletic, youthful, red-haired, and elegant.',
    ],
    explanation:
      'The Spice Girls exploded onto the pop culture scene in 1996 with "Wannabe." The nicknames were supposedly created by the British pop magazine Top of the Pops.',
  },
  {
    id: 'q-241',
    type: 'multiple-choice',
    category: 'Space',
    questionText:
      'What is the name of the galaxy that contains our Solar System?',
    options: ['Andromeda', 'Milky Way', 'Sombrero', 'Triangulum'],
    correctAnswer: 1, // Milky Way
    hints: ['It is named after a spilled dairy product.'],
    explanation:
      'The Milky Way is a barred spiral galaxy with an estimated visible diameter of 100,000–200,000 light-years. Our Solar System is located on the Orion Arm, one of its spiral arms.',
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/ESO_-_Milky_Way.jpg?width=600',
      altText: 'A panoramic view of the Milky Way',
      source: 'Wikimedia Commons',
      attribution: 'ESO / CC BY 4.0',
    },
  },
  {
    id: 'q-242',
    type: 'estimation',
    category: 'History',
    questionText: 'In what year did the First World War (WWI) begin?',
    correctAnswer: 1914,
    range: { min: 1900, max: 1930 },
    tolerance: 0, // Strict
    hints: [
      'It was triggered by the assassination of Archduke Franz Ferdinand.',
      'It began in the early 20th century, a few years after the sinking of the Titanic.',
    ],
    explanation:
      'World War I began on July 28, 1914, when Austria-Hungary declared war on Serbia, following the assassination of Archduke Franz Ferdinand one month prior.',
  },
  {
    id: 'q-243',
    type: 'exact-match',
    category: 'Geography',
    questionText: 'What is the capital city of France?',
    correctAnswer: 'Paris',
    acceptedVariations: ['paris'],
    hints: [
      'It is known globally as the "City of Light".',
      'It is home to the Louvre museum and the Eiffel Tower.',
    ],
    explanation:
      "Paris is the capital and most populous city of France. It has been one of the world's major centers of finance, diplomacy, commerce, fashion, and art since the 17th century.",
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Tour_Eiffel_Wikimedia_Commons.jpg?width=600',
      altText: 'The Eiffel Tower in Paris',
      source: 'Wikimedia Commons',
      attribution: 'Benh LIEU SONG / CC BY-SA 3.0',
    },
  },
  {
    id: 'q-244',
    type: 'top-five',
    category: 'Geography',
    questionText:
      'Name 5 countries that share a contiguous land border with France (Metropolitan France).',
    correctAnswers: [
      { answer: 'Spain' },
      { answer: 'Italy' },
      { answer: 'Switzerland' },
      { answer: 'Germany' },
      { answer: 'Belgium' },
    ],
    otherOptions: [
      { answer: 'Luxembourg' },
      { answer: 'Andorra' },
      { answer: 'Monaco' },
    ],
    hints: [
      'It shares borders with 8 different countries in total on the European mainland.',
      'The Pyrenees mountains form the border with one of them.',
    ],
    explanation:
      'Metropolitan France borders Belgium and Luxembourg to the northeast, Germany and Switzerland to the east, Italy and Monaco to the southeast, and Spain and Andorra to the south.',
  },
  {
    id: 'q-245',
    type: 'multiple-choice',
    category: 'Biology',
    questionText:
      'Which animal holds the title for being the largest known living species on Earth?',
    options: ['African Elephant', 'Blue Whale', 'Colossal Squid', 'Giraffe'],
    correctAnswer: 1, // Blue Whale
    hints: [
      'It is a massive marine mammal that feeds primarily on tiny krill.',
    ],
    explanation:
      'The Blue Whale is the largest animal known to have ever existed. They can reach lengths of up to 100 feet and weigh upwards of 150 tons.',
    media: {
      type: 'image',
      url: 'https://upload.wikimedia.org/wikipedia/commons/3/3d/Blue_whale_size.svg',
      altText: 'Size comparison of a blue whale to a human',
      source: 'Wikimedia Commons',
      attribution: 'Public Domain',
    },
  },
  {
    id: 'q-246',
    type: 'estimation',
    category: 'Math',
    questionText: 'What is the square root of 144?',
    correctAnswer: 12,
    range: { min: 1, max: 20 },
    tolerance: 0, // Strict
    hints: [
      'It is equivalent to one dozen.',
      'It is an even number between 10 and 15.',
    ],
    explanation:
      'The square root of 144 is 12, because 12 multiplied by itself (12 x 12) equals 144.',
  },
  {
    id: 'q-247',
    type: 'exact-match',
    category: 'Pop Culture',
    questionText:
      'Who is the author of the epic fantasy book series "A Song of Ice and Fire"?',
    correctAnswer: 'George R.R. Martin',
    acceptedVariations: ['George RR Martin', 'GRRM', 'George Martin'],
    hints: [
      'The series was famously adapted into the television show "Game of Thrones".',
      'He is notorious among fans for taking a very long time to write "The Winds of Winter".',
    ],
    explanation:
      'George R.R. Martin began writing the series in 1991. The first volume, "A Game of Thrones", was published in 1996.',
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/George_R._R._Martin_by_Gage_Skidmore_2.jpg?width=600',
      altText: 'Portrait of George R.R. Martin',
      source: 'Wikimedia Commons',
      attribution: 'Gage Skidmore / CC BY-SA 3.0',
    },
  },
  {
    id: 'q-248',
    type: 'top-five',
    category: 'Space',
    questionText: 'Name 5 of the 8 recognized planets in our solar system.',
    correctAnswers: [
      { answer: 'Mercury' },
      { answer: 'Venus' },
      { answer: 'Earth' },
      { answer: 'Mars' },
      { answer: 'Jupiter' },
    ],
    otherOptions: [
      { answer: 'Saturn' },
      { answer: 'Uranus' },
      { answer: 'Neptune' },
    ],
    hints: [
      'Four of them are rocky terrestrial planets, and four are gas/ice giants.',
      'Pluto is no longer considered a major planet.',
    ],
    explanation:
      'In 2006, the International Astronomical Union officially defined the term "planet", leaving our solar system with eight recognized major planets and classifying others as dwarf planets.',
  },
  {
    id: 'q-249',
    type: 'multiple-choice',
    category: 'History',
    questionText:
      'Who served as the very first President of the United States?',
    options: [
      'Thomas Jefferson',
      'Benjamin Franklin',
      'George Washington',
      'John Adams',
    ],
    correctAnswer: 2, // George Washington
    hints: ['His face is featured on the United States one-dollar bill.'],
    explanation:
      "George Washington served as the first president of the United States from 1789 to 1797. He previously led the Patriot forces to victory in the nation's War for Independence.",
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Gilbert_Stuart_Williamstown_Portrait_of_George_Washington.jpg?width=600',
      altText: 'Portrait of George Washington',
      source: 'Wikimedia Commons',
      attribution: 'Public Domain',
    },
  },
  {
    id: 'q-250',
    type: 'estimation',
    category: 'Geography',
    questionText:
      'According to the most widely accepted English-speaking model, how many distinct continents are there on Earth?',
    correctAnswer: 7,
    range: { min: 4, max: 10 },
    tolerance: 0, // Strict
    hints: [
      'It is a prime number.',
      'This model separates the Americas into North and South, and also separates Europe from Asia.',
    ],
    explanation:
      'The 7-continent model is taught primarily in English-speaking countries and China. It includes Africa, Antarctica, Asia, Australia/Oceania, Europe, North America, and South America.',
  },
  {
    id: 'q-251',
    type: 'exact-match',
    category: 'Biology',
    questionText:
      'What is the scientific term for an animal that regularly consumes both plant and animal matter?',
    correctAnswer: 'Omnivore',
    acceptedVariations: ['omnivores'],
    hints: [
      'It shares a prefix with words meaning "all" or "every".',
      'Humans, bears, and pigs all fall into this dietary category.',
    ],
    explanation:
      'Derived from Latin "omnis" (all) and "vorare" (to devour), omnivores are flexible eaters that can derive energy from a variety of food sources, unlike strict herbivores or carnivores.',
  },
  {
    id: 'q-252',
    type: 'top-five',
    category: 'History',
    questionText: 'Name 5 of the 7 Wonders of the Ancient World.',
    correctAnswers: [
      {
        answer: 'Great Pyramid of Giza',
        acceptedVariations: ['Pyramid of Giza', 'Pyramids'],
      },
      {
        answer: 'Hanging Gardens of Babylon',
        acceptedVariations: ['Hanging Gardens'],
      },
      {
        answer: 'Statue of Zeus at Olympia',
        acceptedVariations: ['Statue of Zeus'],
      },
      {
        answer: 'Temple of Artemis at Ephesus',
        acceptedVariations: ['Temple of Artemis'],
      },
      {
        answer: 'Mausoleum at Halicarnassus',
        acceptedVariations: ['Mausoleum'],
      },
    ],
    otherOptions: [
      { answer: 'Colossus of Rhodes', acceptedVariations: ['Colossus'] },
      {
        answer: 'Lighthouse of Alexandria',
        acceptedVariations: ['Lighthouse'],
      },
    ],
    hints: [
      'Only the one located in Giza remains largely intact today.',
      'One was a massive bronze statue of the sun god Helios on a Greek island.',
    ],
    explanation:
      'Compiled by ancient Hellenic travelers, this list highlights the most remarkable man-made structures of classical antiquity. Most were destroyed by earthquakes over the centuries.',
  },
  {
    id: 'q-253',
    type: 'multiple-choice',
    category: 'Literature',
    questionText:
      'In Herman Melville\'s classic novel "Moby-Dick", what type of animal is the titular creature?',
    options: [
      'A giant squid',
      'A great white shark',
      'A sperm whale',
      'A kraken',
    ],
    correctAnswer: 2, // A sperm whale
    hints: ['The creature famously bites off the leg of Captain Ahab.'],
    explanation:
      "Moby Dick is a massive, incredibly fierce white sperm whale. The novel tells the story of Captain Ahab's obsessive quest for revenge against the animal.",
  },
  {
    id: 'q-254',
    type: 'estimation',
    category: 'Science',
    questionText:
      'At what temperature, in degrees Fahrenheit, does pure water freeze?',
    correctAnswer: 32,
    range: { min: 0, max: 100 },
    tolerance: 0, // Strict
    hints: [
      'It is exactly equivalent to 0 degrees on the Celsius scale.',
      'It is in the low 30s.',
    ],
    explanation:
      'Under standard atmospheric pressure, water freezes at 32°F (0°C) and boils at 212°F (100°C).',
  },
  {
    id: 'q-255',
    type: 'exact-match',
    category: 'Art',
    questionText:
      'Which Spanish surrealist artist painted "The Persistence of Memory", famously featuring melting clocks?',
    correctAnswer: 'Salvador Dali',
    acceptedVariations: ['Dali', 'Salvador Dalí', 'Dalí'],
    hints: [
      'He was known for his eccentric behavior and flamboyant, upward-curling mustache.',
      'His first name is Salvador.',
    ],
    explanation:
      'Painted in 1931, "The Persistence of Memory" is one of the most recognizable works of Surrealism. Dalí once claimed the melting clocks were inspired by watching Camembert cheese melt in the sun.',
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Salvador_Dal%C3%AD_1939.jpg?width=600',
      altText: 'Portrait of Salvador Dalí',
      source: 'Wikimedia Commons',
      attribution: 'Carl Van Vechten / Public Domain',
    },
  },
  {
    id: 'q-256',
    type: 'top-five',
    category: 'Technology',
    questionText:
      'Name 5 of the most popular mainstream programming languages in use today (as consistently ranked by indexes like TIOBE).',
    correctAnswers: [
      { answer: 'Python' },
      { answer: 'JavaScript', acceptedVariations: ['JS'] },
      { answer: 'Java' },
      { answer: 'C++', acceptedVariations: ['cpp'] },
      { answer: 'C#', acceptedVariations: ['C sharp'] },
    ],
    otherOptions: [
      { answer: 'C' },
      { answer: 'PHP' },
      { answer: 'Ruby' },
      { answer: 'Swift' },
      { answer: 'Go', acceptedVariations: ['Golang'] },
    ],
    hints: [
      'One is named after a snake, another shares its name with an Indonesian island/coffee.',
      'One is universally used for frontend web development.',
    ],
    explanation:
      'While popularity ranks fluctuate slightly, Python, JavaScript, Java, C, C++, and C# consistently dominate the software development industry due to their wide range of applications.',
  },
  {
    id: 'q-257',
    type: 'multiple-choice',
    category: 'Geography',
    questionText:
      'Which of the following major cities is NOT located in Europe?',
    options: ['Prague', 'Vienna', 'Buenos Aires', 'Budapest'],
    correctAnswer: 2, // Buenos Aires
    hints: ['It is the capital city of a large country in South America.'],
    explanation:
      'Buenos Aires is the capital of Argentina, located on the continent of South America. The other three cities are capitals located in Central/Eastern Europe.',
    media: {
      type: 'image',
      url: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Buenos_Aires_-_Obelisco.jpg',
      altText: 'The Obelisk of Buenos Aires',
      source: 'Wikimedia Commons',
      attribution: 'Jikatu / CC BY-SA 2.0',
    },
  },
  {
    id: 'q-258',
    type: 'estimation',
    category: 'Anatomy',
    questionText:
      'How many primary (baby) teeth does a human child typically grow before losing them?',
    correctAnswer: 20,
    range: { min: 10, max: 35 },
    tolerance: 0, // Strict
    hints: [
      'It is exactly 12 fewer than the full adult set of 32 teeth.',
      'They typically consist of 10 on the top jaw and 10 on the bottom.',
    ],
    explanation:
      'Children typically develop 20 primary teeth (deciduous teeth), which begin to erupt around 6 months of age and are eventually replaced by permanent adult teeth.',
  },
  {
    id: 'q-259',
    type: 'exact-match',
    category: 'Music',
    questionText:
      'Which iconic British rock band released the 1975 hit song "Bohemian Rhapsody"?',
    correctAnswer: 'Queen',
    acceptedVariations: ['queen'],
    hints: [
      'Their legendary lead singer was Freddie Mercury.',
      'The band shares its name with the title given to a female monarch.',
    ],
    explanation:
      'Queen formed in London in 1970. "Bohemian Rhapsody" stayed at number one on the UK Singles Chart for nine weeks and helped establish the band as global superstars.',
  },
  {
    id: 'q-260',
    type: 'top-five',
    category: 'History',
    questionText:
      'Name 5 of the original 6 founding member countries of the European Economic Community (predecessor to the EU).',
    correctAnswers: [
      { answer: 'France' },
      { answer: 'Germany', acceptedVariations: ['West Germany'] },
      { answer: 'Italy' },
      { answer: 'Belgium' },
      {
        answer: 'Netherlands',
        acceptedVariations: ['The Netherlands', 'Holland'],
      },
    ],
    otherOptions: [{ answer: 'Luxembourg' }],
    hints: [
      'They signed the Treaty of Rome in 1957.',
      'Three of them make up the "Benelux" region.',
    ],
    explanation:
      'The "Inner Six" were the six founding member states of the European Coal and Steel Community in 1951, which eventually evolved into the modern European Union.',
  },
  {
    id: 'q-261',
    type: 'multiple-choice',
    category: 'Biology',
    questionText: 'What is the primary organ of the human respiratory system?',
    options: ['Heart', 'Lungs', 'Liver', 'Kidneys'],
    correctAnswer: 1, // Lungs
    hints: [
      'They are spongy, air-filled organs located on either side of the chest (thorax).',
    ],
    explanation:
      'The lungs are responsible for the process of gas exchange, extracting oxygen from the atmosphere and transferring it into the bloodstream, while releasing carbon dioxide.',
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Lungs_diagram_simple.svg?width=600',
      altText: 'Diagram of the human lungs',
      source: 'Wikimedia Commons',
      attribution: 'Patrick J. Lynch / CC BY 2.5',
    },
  },
  {
    id: 'q-262',
    type: 'estimation',
    category: 'Math',
    questionText: 'How many flat faces does a regular icosahedron have?',
    correctAnswer: 20,
    range: { min: 10, max: 30 },
    tolerance: 0, // Strict
    hints: [
      'Each face is an equilateral triangle.',
      'It is the shape of a standard "d20" die used in tabletop roleplaying games.',
    ],
    explanation:
      'An icosahedron is a polyhedron with 20 faces. A regular icosahedron is one of the five Platonic solids, consisting of 20 equilateral triangular faces, 30 edges, and 12 vertices.',
  },
  {
    id: 'q-263',
    type: 'exact-match',
    category: 'Physics',
    questionText: 'What is the standard SI unit of electrical resistance?',
    correctAnswer: 'Ohm',
    acceptedVariations: ['ohms', 'ohm'],
    hints: [
      'It shares its name with the German physicist Georg Simon ____.',
      'Its symbol is the uppercase Greek letter Omega (Ω).',
    ],
    explanation:
      'The ohm (symbol: Ω) is the SI derived unit of electrical resistance, named after Georg Simon Ohm, who proposed Ohm\'s law (V = IR).',
    media: {
      type: 'image',
      url: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Greek_uc_omega.svg',
      altText: 'The uppercase Greek letter Omega',
      source: 'Wikimedia Commons',
      attribution: 'Public Domain',
    },
  },
  {
    id: 'q-264',
    type: 'top-five',
    category: 'Geography',
    questionText: 'Name the 5 most populous states in the United States (as of the 2020 Census).',
    correctAnswers: [
      { answer: 'California' },
      { answer: 'Texas' },
      { answer: 'Florida' },
      { answer: 'New York' },
      { answer: 'Pennsylvania' },
    ],
    hints: [
      'Three of them are located in the southern "Sun Belt" of the country.',
      'One is famous for Hollywood, and another is famous for the Alamo.',
    ],
    explanation:
      'California is the most populous state, followed by Texas, Florida, New York, and Pennsylvania. Illinois narrowly missed the top 5, sitting at number 6.',
  },
  {
    id: 'q-265',
    type: 'multiple-choice',
    category: 'Pop Culture',
    questionText: 'In the Harry Potter universe, what is the name of the magical train that transports students to school?',
    options: ['The Knight Bus', 'The Hogwarts Express', 'The Flying Ford Anglia', 'The Magic Train'],
    correctAnswer: 1, // Hogwarts Express
    hints: [
      'It famously departs from Platform 9¾ at King\'s Cross Station in London.',
    ],
    explanation:
      'The Hogwarts Express is a red steam locomotive that runs between London King\'s Cross Station and Hogsmeade Station. Students board it on September 1st each year.',
  },
  {
    id: 'q-266',
    type: 'estimation',
    category: 'Games',
    questionText: 'How many cards are in a standard French-suited deck of playing cards (excluding Jokers)?',
    correctAnswer: 52,
    range: { min: 40, max: 60 },
    tolerance: 0, // Strict
    hints: [
      'It corresponds to the number of weeks in a standard year.',
      'There are 4 suits (Hearts, Diamonds, Clubs, Spades) of 13 cards each.',
    ],
    explanation:
      'A standard deck consists of 52 cards divided into 4 suits of 13 cards. This deck composition has been used for centuries to play games like Poker, Bridge, and Solitaire.',
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Cards-A-Spade.svg?width=600',
      altText: 'The Ace of Spades playing card',
      source: 'Wikimedia Commons',
      attribution: 'Public Domain',
    },
  },
  {
    id: 'q-267',
    type: 'exact-match',
    category: 'History',
    questionText: 'What is the name of the ancient network of trade routes that connected China and the Far East with the Middle East and Europe?',
    correctAnswer: 'Silk Road',
    acceptedVariations: ['The Silk Road', 'Silk Route'],
    hints: [
      'It is named after a highly lucrative and luxurious fabric produced in ancient China.',
      'Marco Polo famously traveled along it.',
    ],
    explanation:
      'The Silk Road was central to economic, cultural, political, and religious interactions between the East and West from the 2nd century BC to the 15th century AD.',
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Silk_route.jpg?width=600',
      altText: 'Map depicting the Silk Road trade routes',
      source: 'Wikimedia Commons',
      attribution: 'Public Domain',
    },
  },
  {
    id: 'q-268',
    type: 'top-five',
    category: 'Science',
    questionText: 'Name the first 5 elements of the periodic table by atomic number (1 through 5).',
    correctAnswers: [
      { answer: 'Hydrogen', acceptedVariations: ['H'] },
      { answer: 'Helium', acceptedVariations: ['He'] },
      { answer: 'Lithium', acceptedVariations: ['Li'] },
      { answer: 'Beryllium', acceptedVariations: ['Be'] },
      { answer: 'Boron', acceptedVariations: ['B'] },
    ],
    hints: [
      'The first one makes up most of the sun, and the second is used in floating party balloons.',
      'The third is famously used in modern rechargeable batteries.',
    ],
    explanation:
      'These are the five lightest elements in the universe. Hydrogen (1) and Helium (2) were the primary elements created during the Big Bang.',
  },
  {
    id: 'q-269',
    type: 'multiple-choice',
    category: 'Art',
    questionText: 'Which Renaissance artist is famous for creating the "Vitruvian Man" drawing, which depicts a man in two superimposed positions?',
    options: ['Michelangelo', 'Leonardo da Vinci', 'Raphael', 'Donatello'],
    correctAnswer: 1, // Leonardo da Vinci
    hints: [
      'He was an Italian polymath whose other famous works include the "Mona Lisa".',
    ],
    explanation:
      'Created by Leonardo da Vinci around 1490, the drawing is based on the ideal human proportions described by the ancient Roman architect Vitruvius.',
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Da_Vinci_Vitruve_Luc_Viatour.jpg?width=600',
      altText: 'The Vitruvian Man drawing by Leonardo da Vinci',
      source: 'Wikimedia Commons',
      attribution: 'Luc Viatour / Public Domain',
    },
  },
  {
    id: 'q-270',
    type: 'estimation',
    category: 'Geography',
    questionText: 'How many standard time zones cover the contiguous United States (the "lower 48" states)?',
    correctAnswer: 4,
    range: { min: 2, max: 8 },
    tolerance: 0, // Strict
    hints: [
      'They are Eastern, Central, Mountain, and Pacific.',
      'It is the same as the number of seasons in a year.',
    ],
    explanation:
      'The contiguous US spans four main time zones. If you include Alaska and Hawaii, the total number of primary time zones covering the 50 states is six.',
  },
  {
    id: 'q-271',
    type: 'exact-match',
    category: 'Music',
    questionText: 'What is the musical term for the highest female singing voice type in classical music and opera?',
    correctAnswer: 'Soprano',
    acceptedVariations: ['soprano'],
    hints: [
      'It sits above the alto and mezzo-soprano ranges.',
      'It starts with the letter S.',
    ],
    explanation:
      'The soprano has the highest vocal range of all voice types. In opera, the soprano usually plays the leading female role or the protagonist.',
  },
  {
    id: 'q-272',
    type: 'top-five',
    category: 'Animals',
    questionText: 'Name the 5 species that make up the traditional "Big Five" game animals of Africa.',
    correctAnswers: [
      { answer: 'Lion', acceptedVariations: ['African Lion'] },
      { answer: 'Leopard', acceptedVariations: ['African Leopard'] },
      { answer: 'Rhinoceros', acceptedVariations: ['Rhino', 'Black Rhino', 'White Rhino'] },
      { answer: 'Elephant', acceptedVariations: ['African Elephant'] },
      { answer: 'Cape Buffalo', acceptedVariations: ['Buffalo', 'African Buffalo'] },
    ],
    hints: [
      'Two of them are large predatory cats.',
      'One has a trunk, and another has a horn on its snout.',
    ],
    explanation:
      'The term "Big Five" was coined by big-game hunters and refers to the five most difficult animals in Africa to hunt on foot. Today, the term is widely used by safari tour operators.',
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Lion_waiting_in_Namibia.jpg?width=600',
      altText: 'A male lion resting in the grass',
      source: 'Wikimedia Commons',
      attribution: 'Kevin Pluck / CC BY 2.0',
    },
  },
  {
    id: 'q-273',
    type: 'multiple-choice',
    category: 'Science',
    questionText: 'Which part of the human brain is located at the back of the skull and is primarily responsible for coordinating balance and movement?',
    options: ['Cerebrum', 'Cerebellum', 'Brainstem', 'Hypothalamus'],
    correctAnswer: 1, // Cerebellum
    hints: [
      'Its name translates to "little brain" in Latin.',
    ],
    explanation:
      'The cerebellum receives information from the sensory systems, the spinal cord, and other parts of the brain and then regulates motor movements. It coordinates voluntary movements such as posture, balance, and coordination.',
    media: {
      type: 'image',
      url: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Complete_neuron_cell_diagram_en.svg',
      altText: 'Diagram of the human brain',
      source: 'Wikimedia Commons',
      attribution: 'Patrick J. Lynch / CC BY 2.5',
    },
  },
  {
    id: 'q-274',
    type: 'estimation',
    category: 'Literature',
    questionText: 'How many lines are there in a traditional Shakespearean sonnet?',
    correctAnswer: 14,
    range: { min: 10, max: 20 },
    tolerance: 0, // Strict
    hints: [
      'They are typically written in iambic pentameter.',
      'They consist of three quatrains and a final rhyming couplet (4 + 4 + 4 + 2).',
    ],
    explanation:
      'A traditional English (or Shakespearean) sonnet is a 14-line poem written in iambic pentameter. William Shakespeare famously wrote a collection of 154 sonnets.',
  },
  {
    id: 'q-275',
    type: 'exact-match',
    category: 'Geography',
    questionText: 'What is the longest continental mountain range in the world?',
    correctAnswer: 'Andes',
    acceptedVariations: ['The Andes', 'Andes Mountains'],
    hints: [
      'It stretches along the entire western coast of South America.',
      'It passes through countries like Peru, Chile, and Argentina.',
    ],
    explanation:
      'The Andes range is about 8,900 km (5,500 miles) long. It is the longest continental mountain range in the world, featuring some of the highest peaks outside of Asia.',
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Aconcagua_13.JPG?width=600',
      altText: 'Aconcagua, the highest peak in the Andes',
      source: 'Wikimedia Commons',
      attribution: 'Marianocecowski / CC BY-SA 3.0',
    },
  },
  {
    id: 'q-276',
    type: 'top-five',
    category: 'Pop Culture',
    questionText: 'Name the 6 original members of the Avengers as depicted in the 2012 Marvel Cinematic Universe film.',
    correctAnswers: [
      { answer: 'Iron Man', acceptedVariations: ['Tony Stark'] },
      { answer: 'Captain America', acceptedVariations: ['Steve Rogers'] },
      { answer: 'Thor', acceptedVariations: ['Thor Odinson'] },
      { answer: 'Hulk', acceptedVariations: ['Bruce Banner', 'The Hulk'] },
      { answer: 'Black Widow', acceptedVariations: ['Natasha Romanoff'] },
    ],
    otherOptions: [
      { answer: 'Hawkeye', acceptedVariations: ['Clint Barton'] },
    ],
    hints: [
      'One wields a mythical hammer, and another is an expert archer.',
      'One is a billionaire in a high-tech suit of armor.',
    ],
    explanation:
      'In the 2012 film "The Avengers", Nick Fury brings together Iron Man, Captain America, Thor, Hulk, Black Widow, and Hawkeye to form a team capable of stopping Loki.',
  },
  {
    id: 'q-277',
    type: 'multiple-choice',
    category: 'Food',
    questionText: 'Which European country is the origin of the popular mild, yellow cheese known as Gouda?',
    options: ['France', 'Switzerland', 'Netherlands', 'Italy'],
    correctAnswer: 2, // Netherlands
    hints: [
      'It is named after a city located in the province of South Holland.',
    ],
    explanation:
      'Gouda is a sweet, creamy, yellow cow\'s milk cheese originating from the Netherlands. It is one of the most popular cheeses worldwide, accounting for 50 to 60 percent of the world\'s cheese consumption.',
  },
  {
    id: 'q-278',
    type: 'estimation',
    category: 'Sports',
    questionText: 'How many holes are played in a standard, full round of golf?',
    correctAnswer: 18,
    range: { min: 9, max: 27 },
    tolerance: 0, // Strict
    hints: [
      'A "half" round is usually 9 holes.',
      'It is a multiple of 9.',
    ],
    explanation:
      'The modern game of golf originated in Scotland. In 1764, the Old Course at St Andrews was reduced from 22 holes to 18, establishing the standard format used today.',
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Golf_ball_on_tee.jpg?width=600',
      altText: 'A golf ball sitting on a tee',
      source: 'Wikimedia Commons',
      attribution: 'Public Domain',
    },
  },
  {
    id: 'q-279',
    type: 'exact-match',
    category: 'Technology',
    questionText: 'What prominent tech company developed and owns the Windows operating system?',
    correctAnswer: 'Microsoft',
    acceptedVariations: ['Microsoft Corporation'],
    hints: [
      'It was co-founded by Bill Gates and Paul Allen.',
      'Its name is a portmanteau of "microcomputer" and "software".',
    ],
    explanation:
      'Microsoft released the first version of Windows in 1985 as a graphical operating system shell for MS-DOS. It went on to dominate the world\'s personal computer market.',
    media: {
      type: 'image',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Microsoft_logo_(2012).svg?width=600',
      altText: 'The Microsoft corporate logo',
      source: 'Wikimedia Commons',
      attribution: 'Public Domain',
    },
  },
  {
    id: 'q-280',
    type: 'top-five',
    category: 'Pop Culture',
    questionText: 'Name the 5 main human characters comprising the "Mystery Inc." gang in the cartoon franchise Scooby-Doo (including the dog!).',
    correctAnswers: [
      { answer: 'Scooby-Doo', acceptedVariations: ['Scooby'] },
      { answer: 'Shaggy', acceptedVariations: ['Shaggy Rogers', 'Norville Rogers'] },
      { answer: 'Fred', acceptedVariations: ['Fred Jones', 'Freddy'] },
      { answer: 'Daphne', acceptedVariations: ['Daphne Blake'] },
      { answer: 'Velma', acceptedVariations: ['Velma Dinkley'] },
    ],
    hints: [
      'One famously drives the Mystery Machine van.',
      'One is incredibly smart and often loses her glasses.',
    ],
    explanation:
      'Created by Hanna-Barbera in 1969, the classic lineup consists of the talking Great Dane Scooby-Doo, his cowardly best friend Shaggy, the leader Fred, the danger-prone Daphne, and the intellectual Velma.',
  },
];
