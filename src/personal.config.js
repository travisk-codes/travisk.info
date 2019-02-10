export default {
  address: [
    '3122 Tanager St.',
    'Raleigh, NC 27606',
  ],
  phone: [
    '404 955 7789'
  ],
  job: {
    title: 'Search Ranking Analyst',
    company: 'Accenture @ Facebook',
    location: 'Menlo Park, CA',
    duration: [
      'Feb 2014',
      'Nov 2016',
    ],
    bullets: [
      'Worked with engineers to specify data metrics for a new site product',
      'Wrote a PHP & MySQL script for improving rater efficiency, reducing time spent by ~50%',
      'Wrote various tooling improvements based on observation and feedback from coworkers',
    ],
  },
  portfolio: {
    names: [
      'bag n\' fits',
      'datum',
    ],
    bullets: [
      'Given a directory, will create a csv containing all metadata of it\'s contents, with optional archiving and error checking',
      'A personal metrics management platform, currently accepting voice messages and remote logging',
      'A web app for learning notes on a fretboard (or other instrument), producing random notes with variable accents, tempo, and sound',
      'Designed and deployed a website advertising a piece of real estate featuring Facebook integration, SEO, and HTML5 Video',
    ],
  },
  knowledge: {
    languages: [
      'JavaScript',
      'Python',
      'HTML+CSS',
      'Java',
      'C',
      'Matlab',
    ],
    practices: [
      'Distributed version control',
      'Search Engine Optimization',
      'Responsive web design',
      'Object oriented & functional techniques',
      'Shell scripting',
    ],
    technologies: [
      'React',
      'Nginx',
      'Git',
      'Node/Express',
      'Flexbox',
    ],
  },
  education: {
    degree: 'B.S. Mechanical Engineering',
    institute: 'Georgia Institute of Technology',
    location: 'Atlanta, GA',
    duration: [
      'Fall 2008',
      'Summer 2013',
    ],
    bullets: [
      'Programmed, prototyped and contributed to design of a robot for a mechanical design competition',
      'Implemented an English dictionary with constant-time word lookup',
    ],
  },
}

export const bookmarks = [
  {
    title: 'Observable HQ: interactive javascript notebooks in the browser',
    url: 'https://beta.observablehq.com/',
    site: 'beta.observablehq.com',
    tags: ['code', 'tool', 'app'],
  },
  {
    title: 'Instruction for timed breathing',
    url: 'https://www.vandenoever.info/breathe.html',
    site: 'www.vandenoever.info',
    tags: ['life hack', 'tool', 'app'],
  },
  {
    title: 'The Feynman Lectures on Physics',
    url: 'http://www.feynmanlectures.caltech.edu/',
    site: 'www.feynmanlectures.caltech.edu',
    tags: ['physics', 'learning', 'text'],
  },
  {
    title: 'Uncoiling the spiral: Maths and hallucinations',
    url: 'https://plus.maths.org/content/uncoiling-spiral-maths-and-hallucinations',
    site: 'plus.maths.org',
    tags: ['physics', 'text'],
  },
  {
    title: 'Who Can Name the Bigger Number?',
    url: 'https://www.scottaaronson.com/writings/bignumbers.html',
    site: 'www.scottaaronson.com',
    tags: ['math', 'text'],
  },
  {
    title: 'The Evolution of the Physicist\'s Picture of Nature',
    url: 'https://blogs.scientificamerican.com/guest-blog/the-evolution-of-the-physicists-picture-of-nature/',
    site: 'blogs.scientificamerican.com',
    tags: ['physics', 'text'],
  },
  {
    title: 'The Earth is Flat',
    url: 'https://bartoszmilewski.com/2018/01/11/the-earth-is-flat/',
    site: 'bartoszmilewski.com',
    tags: ['physics', 'text', 'code', 'math'],
  },
  {
    title: 'Moment: Less phone. More real life.',
    url: 'https://inthemoment.io/',
    site: 'inthemoment.io',
    tags: ['app', 'life hack', 'tool'],
  },
  {
    title: 'Framer - Interactive Design Tool',
    url: 'https://framer.com/',
    site: 'framer.com',
    tags: ['app', 'code', 'tool'],
  },
  {
    title: 'Blind Spot and the "Filling-in" phenomenon',
    url: 'http://www.colorcube.com/illusions/blndspot.htm',
    site: 'colorcube.com',
    tags: ['misc'],
  },
  {
    title: 'Quantum Soccer',
    url: 'http://www.gregegan.net/BORDER/Soccer/Soccer.html',
    site: 'gregegan.net',
    tags: ['physics'],
  },
  {
    title: 'JavaScript Visualizer',
    url: 'https://tylermcginnis.com/javascript-visualizer/',
    site: 'tylermcginnis.com',
    tags: ['code', 'tool'],
  },
  {
    title: 'Notion - All-in-one workspace',
    url: 'https://www.notion.so/',
    site: 'www.notion.so',
    tags: ['tool', 'app', ],
  },
  {
    title: 'Why is Maxwell\'s theory so hard to understand?',
    url: 'https://news.ycombinator.com/item?id=18837677',
    site: 'news.ycombinator.com',
    tags: ['physics', 'learning', 'text'],
  },
  {
    title: 'RealWorld example apps: The mother of all demo apps',
    url: 'https://github.com/gothinkster/realworld',
    site: 'github.com',
    tags: ['code', 'app'],
  },
  {
    title: 'React as a UI Runtime',
    url: 'https://overreacted.io/react-as-a-ui-runtime/',
    site: 'overreacted.io',
    tags: ['code', 'text'],
  },
  {
    title: 'The Inter font family',
    url: 'https://rsms.me/inter/',
    site: 'rsms.me',
    tags: ['tool', 'misc'],
  },
  {
    title: 'How Gravity Makes Things Fall',
    url: 'https://www.youtube.com/watch?v=jlTVIMOix3I',
    site: 'www.youtube.com',
    tags: ['physics', 'video', 'learning']
  }
]

export const projects = [
  {
    title: 'Datum',
    subtitle: 'web app',
    img: 'datum.jpg',
    big: null,
    description: 'A personal metrics management platform. Currently features easy tag-value entry, tag name auto-complete, and entry edit & deletion.',
    style: {maxWidth: 'unset', width: '18em'}, // serves as both big and small images
  },
  {
    title: 'Datum',
    subtitle: 'CLI',
    img: 'datum-cli.png',
    big: 'datum-cli-big.png',
    description: 'A command line program to create/read/update/delete datum entries. Features a time-tracking mode and a SMS/chatbot interface.',
    style: {border: '1px solid grey'},
  },
  {
    title: 'Bag \'n Fits',
    img: 'bag-it-fits-it.png',
    description: 'Given a directory, will create a spreadsheet containing the metadata of every file in the directory. Options to archive and checksum error check.',
    style: {border: '1px solid grey'},
  },
  {
    title: 'Random Notes',
    img: 'react-random-notes.png',
    description: 'Presents a random music note on a regular beat. Features an adjustable tempo, optional note accidentals, and audio cue.',
  },
  {
    title: 'Math Tutoring',
    img: 'datum.jpg',
    description: 'A personal metrics management platform. Currently features easy tag-value entry, tag name auto-complete, and entry edit & deletion.',
  },
  {
    title: 'Magic Car Wash',
    img: 'datum.jpg',
    description: 'A personal metrics management platform. Currently features easy tag-value entry, tag name auto-complete, and entry edit & deletion.',
  },
  {
    title: 'Mindful Guide',
    img: 'datum.jpg',
    description: 'A personal metrics management platform. Currently features easy tag-value entry, tag name auto-complete, and entry edit & deletion.',
    style: { maxWidth: 'unset', width: '18em' },
  },
]

export const contact_info = [
  {
    name: 'email',
    color1: 'black',
    color2: 'white',
    url: 'me@travisk.info',
  },
  {
    name: 'github',
    color1: '#0062d9',
    color2: '#f6f8fa',
    url: 'https://github.com/tdkohlbeck',
  },
  {
    name: 'facebook',
    color1: 'white',
    color2: '#4a65a2',
    url: 'https://www.facebook.com/travisdkohlbeck',
  },
  {
    name: 'twitter',
    color1: 'white',
    color2: '#039ff5',
    url: 'https://twitter.com/good_travisk',
  },
  {
    name: 'linkedIn',
    color1: 'white',
    color2: '#0073bb',
    url: 'https://www.linkedin.com/in/traviskohlbeck',
  },
  {
    name: 'twitch',
    color1: 'white',
    color2: '#4b347d',
    url: 'https://www.twitch.tv/watch_travisk_do_',
  },
  {
    name: 'soundcloud',
    color1: 'white',
    color2: '#ff5400',
    url: 'https://soundcloud.com/tdkohlbeck',
  },
  {
    name: 'last.fm',
    color1: 'white',
    color2: '#bc0000',
    url: 'https://www.last.fm/user/Thadius_Dean',
  },
]