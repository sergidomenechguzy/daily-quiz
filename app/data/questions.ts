import type { QuizQuestion } from '~/types/quizQuestion'; // Adjust path as needed
// Adjust path as needed

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
    hint: 'It is the foundation of data communication for the World Wide Web.',
    explanation:
      'Tim Berners-Lee initiated development of HTTP at CERN in 1989.',
  },
  {
    id: 'q-002',
    type: 'top-five',
    category: 'Geography',
    questionText: 'Name the top 5 largest countries by land area.',
    correctAnswers: ['Russia', 'Canada', 'China', 'United States', 'Brazil'],
    // Strict Tuple of 5 string arrays
    acceptedVariations: [
      ['Russian Federation'],
      [], // No variations for Canada needed
      ['PRC', 'Peoples Republic of China'],
      ['USA', 'America', 'US', 'The US'],
      ['Brasil'],
    ],
    // Optional display values (e.g. Area in million sq km)
    correctValues: [
      '17.1M km²',
      '9.98M km²',
      '9.6M km²',
      '9.5M km²',
      '8.5M km²',
    ],
    hint: 'The largest spans 11 time zones.',
    explanation:
      'Russia is almost twice the size of the second-largest country, Canada.',
  },
  {
    id: 'q-003',
    type: 'multiple-choice',
    category: 'Science',
    questionText: 'Which element has the chemical symbol "Fe"?',
    options: ['Gold', 'Silver', 'Iron', 'Lead'],
    correctAnswer: 2, // Index for 'Iron'
    hint: 'This metal is commonly used in construction and machinery.',
    explanation: 'The symbol "Fe" comes from the Latin word "Ferrum".',
  },
  {
    id: 'q-004',
    type: 'estimation',
    category: 'History',
    questionText: 'In what year did the Titanic sink?',
    correctAnswer: 1912,
    unit: 'year',
    tolerance: 0, // Strict exact year required
    range: { min: 1900, max: 1930 },
    hint: 'It was early in the 20th century, two years before WWI began.',
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
    hint: 'James Cameron directed 3 of the top 5.',
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
    hint: 'He is an Italian plumber.',
    explanation:
      'Mario first appeared in 1981 as "Jumpman" in the Donkey Kong arcade game.',
  },
  {
    id: 'q-007',
    type: 'estimation',
    category: 'Space',
    questionText:
      'How many minutes does it take for light from the Sun to reach Earth?',
    correctAnswer: 8.3, // 8 minutes 20 seconds
    unit: 'minutes',
    tolerance: 0.5, // Allow 7.8 to 8.8
    range: { min: 0, max: 20 },
    hint: 'It is less than 10 minutes.',
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
    hint: 'He is arguably the most famous playwright in history.',
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
    tolerance: 200, // Allow 12542 to 12942
    range: { min: 0, max: 20000 },
    hint: 'It is roughly 40,000 km in circumference.',
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
    hint: 'It is often abbreviated as two letters.',
    explanation: 'JavaScript was created in just 10 days in 1995.',
  },
  {
    id: 'q-011',
    type: 'estimation',
    category: 'History',
    questionText: 'In what year was the first iPhone released?',
    correctAnswer: 2007,
    unit: 'year',
    range: { min: 1990, max: 2025 },
    hint: 'It was introduced by Steve Jobs in January.',
    explanation: 'The original iPhone was a GSM-only phone and lacked 3G.',
  },
];
