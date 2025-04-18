const skills = [
  { title: 'Golang', competency: 4, category: ['Programming Languages'] },
  { title: 'Python', competency: 4, category: ['Programming Languages', 'ML'] },
  { title: 'Haskell', competency: 2, category: ['Programming Languages'] },
  { title: 'C++', competency: 2, category: ['Programming Languages'] },
  { title: 'Bash', competency: 3, category: ['Programming Languages'] },
  { title: 'Solidity', competency: 3, category: ['Programming Languages', 'Blockchain'] },

  // DevOps и инфраструктура
  { title: 'Terraform', competency: 4, category: ['DevOps'] },
  { title: 'Ansible', competency: 3, category: ['DevOps'] },
  { title: 'GitHub Actions', competency: 4, category: ['DevOps'] },
  { title: 'GCP', competency: 3, category: ['DevOps'] },
  { title: 'S3', competency: 3, category: ['DevOps'] },
  { title: 'Prometheus', competency: 3, category: ['DevOps'] },
  { title: 'Docker', competency: 4, category: ['DevOps'] },
  { title: 'Werf', competency: 3, category: ['DevOps'] },
  { title: 'Linux', competency: 3, category: ['DevOps'] },

  // Backend и архитектура
  { title: 'RabbitMQ', competency: 4, category: ['Backend'] },
  { title: 'GRPC', competency: 4, category: ['Backend', 'Architecture'] },
  { title: 'REST API', competency: 4, category: ['Backend', 'Architecture'] },
  { title: 'Nakama', competency: 2, category: ['Backend', 'GameDev'] },

  // Базы данных
  { title: 'PostgreSQL', competency: 4, category: ['Databases'] },
  { title: 'Redis', competency: 3, category: ['Databases'] },
  { title: 'ClickHouse', competency: 3, category: ['Databases'] },
  { title: 'MongoDB', competency: 3, category: ['Databases'] },

  // Машинное обучение и автоматизация
  { title: 'TensorFlow', competency: 2, category: ['ML'] },
  { title: 'n8n', competency: 3, category: ['Automation', 'ML'] },

  // Frontend и веб
  { title: 'React JS', competency: 3, category: ['Frontend'] },
  { title: 'HTML', competency: 3, category: ['Frontend'] },
  { title: 'SSR', competency: 4, category: ['Frontend', 'Architecture'] },

  // Blockchain и SDK
  { title: 'Atom SDK', competency: 2, category: ['Blockchain'] },
  // {
  //   title: 'Javascript',
  //   competency: 4,
  //   category: ['Web Development', 'Languages', 'Javascript'],
  // },
  // {
  //   title: 'Node.JS',
  //   competency: 5,
  //   category: ['Web Development', 'Javascript'],
  // },
  // {
  //   title: 'React',
  //   competency: 2,
  //   category: ['Web Development', 'Javascript'],
  // },
  // {
  //   title: 'Next.JS',
  //   competency: 3,
  //   category: ['Web Development', 'Javascript'],
  // },
  // {
  //   title: 'Bash',
  //   competency: 2,
  //   category: ['Tools', 'Languages'],
  // },
  // {
  //   title: 'Amazon Web Services',
  //   competency: 4,
  //   category: ['Web Development', 'Tools'],
  // },
  // {
  //   title: 'Heroku',
  //   competency: 2,
  //   category: ['Web Development', 'Tools'],
  // },
  // {
  //   title: 'MongoDB',
  //   competency: 3,
  //   category: ['Web Development', 'Databases'],
  // },
  // {
  //   title: 'ElasticSearch',
  //   competency: 2,
  //   category: ['Web Development', 'Databases'],
  // },
  // {
  //   title: 'PostgreSQL/SQLite3/SQL/Redshift',
  //   competency: 4,
  //   category: ['Web Development', 'Databases', 'Languages'],
  // },
  // {
  //   title: 'Redis',
  //   competency: 3,
  //   category: ['Web Development', 'Databases'],
  // },
  // {
  //   title: 'Data Mining',
  //   competency: 3,
  //   category: ['ML Engineering'],
  // },
  // {
  //   title: 'Express.JS',
  //   competency: 2,
  //   category: ['Web Development', 'Javascript'],
  // },
  // {
  //   title: 'D3',
  //   competency: 2,
  //   category: ['Web Development', 'Javascript'],
  // },
  // {
  //   title: 'Flask',
  //   competency: 3,
  //   category: ['Web Development', 'Python'],
  // },
  // {
  //   title: 'FastAPI',
  //   competency: 3,
  //   category: ['Web Development', 'Python'],
  // },
  // {
  //   title: 'Git/Mercurial',
  //   competency: 3,
  //   category: ['Tools'],
  // },
  // {
  //   title: 'Kubernetes',
  //   competency: 2,
  //   category: ['Tools', 'Data Engineering'],
  // },
  // {
  //   title: 'Google Cloud Compute',
  //   competency: 2,
  //   category: ['Tools', 'Web Development'],
  // },
  // {
  //   title: 'AWS',
  //   competency: 3,
  //   category: ['Tools', 'Web Development'],
  // },
  // {
  //   title: 'Docker',
  //   competency: 3,
  //   category: ['Tools', 'Data Engineering'],
  // },
  // {
  //   title: 'AWS Lambda',
  //   competency: 3,
  //   category: ['Tools', 'Web Development'],
  // },
  // {
  //   title: 'Numpy',
  //   competency: 3,
  //   category: ['Data Science', 'Data Engineering', 'Python', 'ML Engineering'],
  // },
  // {
  //   title: 'Numba',
  //   competency: 2,
  //   category: ['Data Science', 'Data Engineering', 'Python'],
  // },
  // {
  //   title: 'Tensorflow + Keras',
  //   competency: 3,
  //   category: ['ML Engineering', 'Python'],
  // },
  // {
  //   title: 'PyTorch',
  //   competency: 3,
  //   category: ['ML Engineering', 'Python'],
  // },
  // {
  //   title: 'Jupyter',
  //   competency: 3,
  //   category: ['Data Science', 'Python'],
  // },
  // {
  //   title: 'Typescript',
  //   competency: 3,
  //   category: ['Web Development', 'Languages', 'Javascript'],
  // },
  // {
  //   title: 'HTML + SASS/SCSS/CSS',
  //   competency: 3,
  //   category: ['Web Development', 'Languages'],
  // },
  // {
  //   title: 'Python',
  //   competency: 5,
  //   category: ['Languages', 'Python', 'ML Engineering'],
  // },
  // {
  //   title: 'Ruby',
  //   competency: 2,
  //   category: ['Languages'],
  // },
  // {
  //   title: 'Ruby on Rails',
  //   competency: 3,
  //   category: ['Web Development', 'Languages'],
  // },
  // {
  //   title: 'C++',
  //   competency: 1,
  //   category: ['Languages'],
  // },
  // {
  //   title: 'Julia',
  //   competency: 2,
  //   category: ['Languages'],
  // },
  // {
  //   title: 'MATLAB',
  //   competency: 2,
  //   category: ['Languages'],
  // },
  // {
  //   title: 'R',
  //   competency: 2,
  //   category: ['Languages'],
  // },
  // {
  //   title: 'Data Visualization',
  //   competency: 3,
  //   category: ['Data Science', 'Javascript'],
  // },
  // {
  //   title: 'GraphQL',
  //   competency: 2,
  //   category: ['Web Development', 'Databases'],
  // },
  // {
  //   title: 'Pandas',
  //   competency: 5,
  //   category: ['Data Engineering', 'ML Engineering', 'Python'],
  // },
  // {
  //   title: 'Matplotlib',
  //   competency: 3,
  //   category: ['Data Engineering', 'ML Engineering', 'Python'],
  // },
  // {
  //   title: 'Scikit-Learn',
  //   competency: 4,
  //   category: ['Data Engineering', 'ML Engineering', 'Python'],
  // },
  // {
  //   title: 'Spark',
  //   competency: 2,
  //   category: ['Data Engineering', 'ML Engineering'],
  // },
  // {
  //   title: 'Dagster',
  //   competency: 2,
  //   category: ['Data Engineering', 'Python', 'ML Engineering'],
  // },
  // {
  //   title: 'Mypy',
  //   competency: 3,
  //   category: ['Python'],
  // },
  // {
  //   title: 'Pylint',
  //   competency: 4,
  //   category: ['Data Engineering', 'Python'],
  // },
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
