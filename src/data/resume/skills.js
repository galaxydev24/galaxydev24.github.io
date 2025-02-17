const skills = [
  {
    title: 'Javascript',
    competency: 5,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'Node.JS',
    competency: 5,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'React',
    competency: 5,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Next.JS',
    competency: 4.7,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Bash',
    competency: 4.8,
    category: ['Tools', 'Languages'],
  },
  {
    title: 'Amazon Web Services',
    competency: 5,
    category: ['Web Development', 'Tools'],
  },
  {
    title: 'Heroku',
    competency: 4.5,
    category: ['Web Development', 'Tools'],
  },
  {
    title: 'MongoDB',
    competency: 5,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'ElasticSearch',
    competency: 4.4,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'PostgreSQL/SQLite3/SQL/Redshift',
    competency: 4.9,
    category: ['Web Development', 'Databases', 'Languages'],
  },
  {
    title: 'Redis',
    competency: 4.6,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'Data Mining',
    competency: 4.3,
    category: ['ML Engineering'],
  },
  {
    title: 'Express.JS',
    competency: 5,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'D3',
    competency: 4.8,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Flask',
    competency: 4.9,
    category: ['Web Development', 'Python'],
  },
  {
    title: 'FastAPI',
    competency: 4.74,
    category: ['Web Development', 'Python'],
  },
  {
    title: 'Git/Mercurial',
    competency: 5,
    category: ['Tools'],
  },
  {
    title: 'Kubernetes',
    competency: 4.4,
    category: ['Tools', 'Data Engineering'],
  },
  {
    title: 'Google Cloud Compute',
    competency: 5,
    category: ['Tools', 'Web Development'],
  },
  {
    title: 'AWS',
    competency: 4.9,
    category: ['Tools', 'Web Development'],
  },
  {
    title: 'Docker',
    competency: 4.9,
    category: ['Tools', 'Data Engineering'],
  },
  {
    title: 'AWS Lambda',
    competency: 4.9,
    category: ['Tools', 'Web Development'],
  },
  {
    title: 'Numpy',
    competency: 4.4,
    category: ['Data Science', 'Data Engineering', 'Python', 'ML Engineering'],
  },
  {
    title: 'Numba',
    competency: 4.4,
    category: ['Data Science', 'Data Engineering', 'Python'],
  },
  {
    title: 'Tensorflow + Keras',
    competency: 4.8,
    category: ['ML Engineering', 'Python'],
  },
  {
    title: 'PyTorch',
    competency: 4.7,
    category: ['ML Engineering', 'Python'],
  },
  {
    title: 'Jupyter',
    competency: 4.6,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'Typescript',
    competency: 5,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'HTML + SASS/SCSS/CSS',
    competency: 5,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Python',
    competency: 5,
    category: ['Languages', 'Python', 'ML Engineering'],
  },
  {
    title: 'Ruby',
    competency: 4.6,
    category: ['Languages'],
  },
  {
    title: 'Ruby on Rails',
    competency: 4.6,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'C++',
    competency: 5,
    category: ['Languages'],
  },
  {
    title: 'Julia',
    competency: 4.4,
    category: ['Languages'],
  },
  {
    title: 'MATLAB',
    competency: 4.5,
    category: ['Languages'],
  },
  {
    title: 'R',
    competency: 4.4,
    category: ['Languages'],
  },
  {
    title: 'Data Visualization',
    competency: 4.4,
    category: ['Data Science', 'Javascript'],
  },
  {
    title: 'GraphQL',
    competency: 4.4,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'Pandas',
    competency: 4.4,
    category: ['Data Engineering', 'ML Engineering', 'Python'],
  },
  {
    title: 'Matplotlib',
    competency: 4.4,
    category: ['Data Engineering', 'ML Engineering', 'Python'],
  },
  {
    title: 'Scikit-Learn',
    competency: 4.4,
    category: ['Data Engineering', 'ML Engineering', 'Python'],
  },
  {
    title: 'Spark',
    competency: 4.4,
    category: ['Data Engineering', 'ML Engineering'],
  },
  {
    title: 'Dagster',
    competency: 4.3,
    category: ['Data Engineering', 'Python', 'ML Engineering'],
  },
  {
    title: 'Mypy',
    competency: 4.3,
    category: ['Python'],
  },
  {
    title: 'Pylint',
    competency: 4.4,
    category: ['Data Engineering', 'Python'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [...new Set(skills.flatMap(({ category }) => category))]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
