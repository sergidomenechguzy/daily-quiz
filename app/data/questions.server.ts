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
  // --- NEW BATCH (q-071 to q-080) ---

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
    questionText: 'The Statue of Liberty was a gift to the United States from which country?',
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
    questionText: 'In what year did the Wright Brothers achieve the first powered flight?',
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
      { answer: 'Antarctic Desert', acceptedVariations: ['Antarctic', 'Antarctica'] },
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
    options: ['Digestion', 'Energy Production', 'Cell Division', 'Photosynthesis'],
    correctAnswer: 1, // Energy
    hints: [
      'They are often called the "powerhouse" of the cell.',
    ],
    explanation:
      'Mitochondria generate most of the cell\'s supply of adenosine triphosphate (ATP), which is used as a source of chemical energy.',
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
    questionText: 'Name the 5 most populous countries in the world (as of 2024).',
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
    options: ['Northern Hemisphere', 'Southern Hemisphere', 'Both Equally', 'None'],
    correctAnswer: 1, // Southern
    hints: [
      'You will generally not find them at the North Pole.',
    ],
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
    questionText: 'Who is credited with patenting the first practical telephone?',
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
    questionText: 'Name the 4 members of The Beatles (plus their manager Brian Epstein for a 5th slot!).',
    correctAnswers: [
      { answer: 'John Lennon', acceptedVariations: ['Lennon'] },
      { answer: 'Paul McCartney', acceptedVariations: ['McCartney'] },
      { answer: 'George Harrison', acceptedVariations: ['Harrison'] },
      { answer: 'Ringo Starr', acceptedVariations: ['Starr', 'Richard Starkey'] },
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
    questionText: 'Is the Great Wall of China visible from space with the naked eye?',
    options: ['Yes, easily', 'No', 'Only at night', 'Yes, but only in summer'],
    correctAnswer: 1, // No
    hints: [
      'This is a very common myth.',
    ],
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
    questionText: 'How many years apart are the Summer Olympic Games typically held?',
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
      'Darwin\'s book, published in 1859, introduced the scientific theory that populations evolve over the course of generations through a process of natural selection.',
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
    otherOptions: [
      { answer: 'Pawn' },
    ],
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
  // --- NEW BATCH (q-121 to q-140) ---

  {
    id: 'q-121',
    type: 'multiple-choice',
    category: 'History',
    questionText: 'Which ancient artifact allowed scholars to finally decipher Egyptian hieroglyphs?',
    options: ['The Sphinx', 'The Rosetta Stone', 'King Tut’s Mask', 'The Dead Sea Scrolls'],
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
    questionText: 'What is the name of the fictional continent in "Game of Thrones" where most of the story takes place?',
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
    hints: [
      'It is a red dwarf star about 4.2 light-years away.',
    ],
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
    options: ['Hercule Poirot', 'Sherlock Holmes', 'Miss Marple', 'Philip Marlowe'],
    correctAnswer: 1, // Sherlock Holmes
    hints: [
      'He has a friend and assistant named Dr. John Watson.',
    ],
    explanation:
      '221B Baker Street is perhaps the most famous address in literature. In reality, the address did not exist when the stories were written.',
  },
  {
    id: 'q-130',
    type: 'estimation',
    category: 'Sports',
    questionText: 'How many players are on a standard soccer (football) team on the field?',
    correctAnswer: 11,
    range: { min: 5, max: 15 },
    tolerance: 0, // Strict
    hints: [
      'This includes the goalkeeper.',
      'It is an odd number.',
    ],
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
    questionText: 'Who was the first female Prime Minister of the United Kingdom?',
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
    hints: [
      'It scores a perfect 10 on the scale.',
    ],
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
    questionText: 'What is the normal body temperature for a human in degrees Celsius?',
    correctAnswer: 37,
    unit: '°C',
    tolerance: 0.5,
    range: { min: 35, max: 40 },
    hints: [
      'It is equivalent to 98.6°F.',
      'It is slightly less than 40.',
    ],
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
    hints: [
      'It lasts nearly 22 months (almost 2 years).',
    ],
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
    questionText: 'Which Apollo mission was the first to land humans on the Moon?',
    options: ['Apollo 8', 'Apollo 11', 'Apollo 13', 'Apollo 17'],
    correctAnswer: 1, // Apollo 11
    hints: [
      'It happened in 1969.',
    ],
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
    questionText: 'What was the name of the ship that brought the Pilgrims to America in 1620?',
    correctAnswer: 'Mayflower',
    acceptedVariations: ['The Mayflower'],
    hints: [
      'It is named after a flower.',
      'It landed at Plymouth Rock.',
    ],
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
];
