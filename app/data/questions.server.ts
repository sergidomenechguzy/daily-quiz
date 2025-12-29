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
];
