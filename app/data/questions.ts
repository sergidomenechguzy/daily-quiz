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
      'Tim Berners-Lee initiated development of HTTP at CERN in 1989.',
  },
  {
    id: 'q-002',
    type: 'top-five',
    category: 'Geography',
    questionText: 'Name the top 5 largest countries by land area.',
    correctAnswers: ['Russia', 'Canada', 'China', 'United States', 'Brazil'],
    acceptedVariations: [
      ['Russian Federation'],
      [],
      ['PRC', 'Peoples Republic of China'],
      ['USA', 'America', 'US', 'The US'],
      ['Brasil'],
    ],
    correctValues: [
      '17.1M km²',
      '9.98M km²',
      '9.6M km²',
      '9.5M km²',
      '8.5M km²',
    ],
    hints: ['The largest spans 11 time zones.'],
    explanation:
      'Russia is almost twice the size of the second-largest country, Canada.',
  },
  {
    id: 'q-003',
    type: 'multiple-choice',
    category: 'Science',
    questionText: 'Which element has the chemical symbol "Fe"?',
    options: ['Gold', 'Silver', 'Iron', 'Lead'],
    correctAnswer: 2,
    hints: ['This metal is commonly used in construction and machinery.'],
    explanation: 'The symbol "Fe" comes from the Latin word "Ferrum".',
  },
  {
    id: 'q-004',
    type: 'estimation',
    category: 'History',
    questionText: 'In what year did the Titanic sink?',
    correctAnswer: 1912,
    range: { min: 1900, max: 1930 },
    hints: ['It was early in the 20th century, two years before WWI began.'],
    explanation: 'The Titanic hit an iceberg on April 14, 1912.',
  },
  {
    id: 'q-005',
    type: 'top-five',
    category: 'Pop Culture',
    questionText:
      'Name the 5 highest-grossing movies of all time (Global Box Office).',
    correctAnswers: [
      'Avatar',
      'Avengers: Endgame',
      'Avatar: The Way of Water',
      'Titanic',
      'Star Wars: The Force Awakens',
    ],
    acceptedVariations: [
      ['Avatar 1'],
      ['Avengers 4', 'Endgame'],
      ['Avatar 2', 'The Way of Water'],
      [],
      ['Star Wars Ep 7', 'Force Awakens', 'Episode VII'],
    ],
    correctValues: ['$2.92B', '$2.79B', '$2.32B', '$2.26B', '$2.07B'],
    hints: ['James Cameron directed 3 of the top 5.'],
    explanation:
      'Avatar (2009) remains the highest-grossing film almost 15 years later.',
  },
  {
    id: 'q-006',
    type: 'multiple-choice',
    category: 'Gaming',
    questionText: 'Who is the mascot of Nintendo?',
    options: ['Link', 'Kirby', 'Mario', 'Donkey Kong'],
    correctAnswer: 2,
    hints: ['He is an Italian plumber.'],
    explanation:
      'Mario first appeared in 1981 as "Jumpman" in the Donkey Kong arcade game.',
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
    hints: ['It is less than 10 minutes.'],
    explanation:
      'Light travels at roughly 300,000 km/s, and the sun is 150 million km away.',
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
      'It was written early in his career about two young star-crossed lovers.',
  },
  {
    id: 'q-009',
    type: 'estimation',
    category: 'Astronomy',
    questionText: 'What is the diameter of the Earth at the equator?',
    correctAnswer: 12742,
    unit: 'km',
    tolerance: 200,
    range: { min: 0, max: 20000 },
    hints: ['It is roughly 40,000 km in circumference.'],
    explanation:
      'Earth is not a perfect sphere; it bulges at the equator due to rotation.',
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
    explanation: 'JavaScript was created in just 10 days in 1995.',
  },
  {
    id: 'q-011',
    type: 'estimation',
    category: 'History',
    questionText: 'In what year was the first iPhone released?',
    correctAnswer: 2007,
    range: { min: 1990, max: 2025 },
    hints: ['It was introduced by Steve Jobs in January.'],
    explanation: 'The original iPhone was a GSM-only phone and lacked 3G.',
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
    ],
    explanation:
      'Canberra was selected as the capital in 1908 as a compromise between rivals Sydney and Melbourne.',
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
      'Diamonds are formed deep within the Earth under extreme heat and pressure.',
  },
  {
    id: 'q-014',
    type: 'top-five',
    category: 'Nature',
    questionText: 'Name the 5 "Big Cats" of the genus Panthera.',
    correctAnswers: ['Tiger', 'Lion', 'Jaguar', 'Leopard', 'Snow Leopard'],
    acceptedVariations: [
      [],
      [],
      [],
      [],
      ['Ounce'], // Alternative name for Snow Leopard
    ],
    hints: ['One is known as the "King of the Jungle".'],
    explanation:
      'These are the only cats capable of roaring (except the Snow Leopard).',
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
    hints: ['It is exactly 3.048 meters.'],
    explanation:
      'The 10-foot standard was established by James Naismith in 1891 simply because that was the height of the gym railing.',
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
      "Gotham City was first identified as Batman's home in Batman #4 (1940).",
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
    ],
    explanation:
      'The Durian has a thorn-covered rind and a distinctively potent odor that some compare to rotting onions.',
  },
];
