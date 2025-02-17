/* eslint-disable max-len */
/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Glorium Technologies Inc.',
    position: 'Senior Software Engineer',
    url: '',
    startDate: '2023-04-01',
    summary: 'Kyiv, Ukraine · Hybrid',
    highlights: [
      'Led a team of 8 developers, managing the architecture, development, and deployment of web and mobile applications including blockchain projects.',
      'Designed and implemented scalable, high performance applications using React, Node.js, React Native, FastAPI, and MongoDB.',
      'Managed the software development lifecycle from planning to deployment using Agile methodologies.',
      'Integrated third-party services, including Stripe, Twilio, WalletConnect, and AI-driven analytics platforms.',
      'Established and maintained coding standards, CI/CD pipelines, and DevOps best practices for efficient deployments.',
      'Mentored junior and mid-level engineers through mentorship, code reviews, pair programming, and technical training.',
      'Led the migration of legacy systems to modern cloud infrastructure (AWS, GCP, or Azure).',
      'Collaborated with product managers to align technical decisions with business goals.',
    ],
  },
  {
    name: 'Glorium Technologies Inc.',
    position: 'Full Stack Software Engineer',
    url: '',
    startDate: '2019-08-01',
    summary: 'Kyiv, Ukraine · Hybrid',
    highlights: [
      'Developed and maintained enterprise-level applications for e-commerce and fintech platforms.',
      'Improved API performance and optimized database queries, reducing response time by 30%.',
      'Implemented real-time capabilities, including WebSockets, push notifications, and background task processing.',
      'Implemented security best practices, including JWT authentication, OAuth, and role-based access control (RBAC).',
      'Collaborated with UI/UX teams to transform Figma designs into webflow, resulting in pixel-perfect interfaces.',
      'Built serverless applications and deployed them on AWS, GCP, and Azure.',
    ],
  },
  {
    name: 'TmaxSoft Deutschland GmBH',
    position: 'Software Engineer Intern',
    url: '',
    startDate: '2018-05-01',
    summary: 'Munich, Bavaria, Germany · Remote',
    highlights: [
      'Successfully assisted in web and mobile applications using React and React Native and Node.js.',
      'Participated in database design and optimization using MongoDB and Firebase.',
      'Worked on API development for backend development and integration with third party services such as Stripe and Plivo.',
      'Gain hands-on experience with CI/CD deployment and cloud hosting.',
      'Collaborated with senior engineers during Agile development sprints using Jira and Git.',
    ],
  },
  // {
  //   name: 'Promptfoo',
  //   position: 'Co-founder & CTO',
  //   url: 'https://promptfoo.dev',
  //   startDate: '2024-07-01',
  //   summary: 'Promptfoo builds open-source tools to evaluate, find, and fix vulnerabilities in large language models (LLMs). Our open-source tools are used by over 35,000 developers and researchers worldwide.',
  //   highlights: [
  //     'Built and scaled engineering team, emphasizing diversity and open-source contribution',
  //     'Established key partnerships with AI research institutions and tech companies',
  //   ],
  // },
  // {
  //   name: 'Smile Identity',
  //   position: 'VP Engineering & Head of AI',
  //   url: 'https://smileidentity.com',
  //   startDate: '2022-01-01',
  //   endDate: '2024-07-01',
  //   summary: `Smile builds machine learning APIs to compare user submitted photos to ID documents. Our APIs are
  //   used by hundreds of thousands of people every day to access financial services. As VP of Engineering,
  //   I provide technical leadership on high-impact projects, influence and coach a distributed team of engineers,
  //   and facilitate alignment and clarity across teams on goals, outcomes, and timelines. I was promoted
  //   from Director of Engineering to VP of Engineering in April 2022, and then to VP of Engineering and Head
  //   of AI in November 2022. I lead a 20+ person engineering org. I directly manage ~8 engineers and spend
  //   >50% of my time writing code.`,
  //   highlights: [
  //     'Redesigned engineering processes for bug tracking, meetings, and standups. Improved culture for code reviews, blameless post-mortems, and retrospectives.',
  //     'Re-architected engineering hiring and onboarding processes. Recruited several strong engineers.',
  //     'Reorged engineering teams to focus on product delivery. Created a new team to focus on ML infrastructure.',
  //     'Lead re-design of internal APIs for inference. Built new computer vision pipelines for industry leading certifications (NIST/iBeta liveness).',
  //     'Pitched, designed, developed, deployed, and maintain a fraud detection product based on 1-N facial recognition using embeddings and vector search.',
  //   ],
  // },
  // {
  //   name: 'Skeptical Investments',
  //   position: 'Co-founder',
  //   url: 'http://skepticalinvestments.biz',
  //   startDate: '2017-04-01',
  //   summary: `Skeptical Investments is a micro-vc fund focused on Angel, Seed, and Series-A
  //   YC companies.`,
  //   highlights: [
  //     'Created the InstaSafe. Fast, automated investment docs for YC companies.',
  //     'Advise several startups in the fund.',
  //   ],
  // },
  // {
  //   name: 'Arthena',
  //   position: 'Co-founder & C.T.O.',
  //   url: 'https://arthena.com',
  //   startDate: '2014-01-01',
  //   endDate: '2022-01-01',
  //   summary: `Arthena is a Series A Company funded by <a href="https://www.anthemis.com/">Athemis</a>,
  //   <a href="https://foundationcapital.com">Foundation Capital</a>, and <a href="https://ycombinator.com/">YC</a>.
  //   We develop quantitative strategies to predict the value of fine art and build investment products.
  //   I ran a 20-person product and engineering org for 8 years. We were acquired by
  //   <a href="https://www.masterworks.com/">Masterworks</a> in 2023.`,
  //   highlights: [
  //     'Built production, online, end-to-end optimized machine learning pipelines for time-series prediction.',
  //     'Designed micro-service architecture around: data collection, data integrity, feature engineering, research, strategy, backtesting, deployment, and reporting.',
  //     "Set and communicated team priorities that supported the broader organization's goals. Aligned strategy, processes, and decision-making across teams.",
  //     "Set clear expectations with individuals based on their level and role and aligned them to the broader organization's goals. Met regularly with individuals to discuss performance and development, and provided feedback and coaching.",
  //     'Developed the long-term technical vision and roadmap within, and often beyond, the scope of my teams. Evolved the roadmap to meet anticipated future requirements and infrastructure needs.',
  //   ],
  // },
  // {
  //   name: 'Enveritas',
  //   position: 'ML Engineering Contractor',
  //   url: 'http://enveritas.org',
  //   startDate: '2016-09-01',
  //   endDate: '2018-01-01',
  //   summary: `Enveritas is a non-profit that works with coffee farmers to improve their livelihoods.
  //   I joined on day one and helped build a variety of tools to collect and analyze data. I also advised
  //   on technical strategy, helped hire engineers, and advised on their YC application.`,
  //   highlights: [
  //     'Trained a model for the Brazilian Coffee Scenes Dataset with better than state of the art accuracy.',
  //     'Collected training sets on the ground in Uganda. Built dashboards to visualize work of surveyors using Flask, React, and D3.',
  //     "Performed supporting analysis to ensure data integrity using Pandas, t-SNE, SVM's, and other techniques.",
  //   ],
  // },
  // {
  //   name: 'Zenysis',
  //   position: 'Software Engineering Contractor',
  //   url: 'https://zenysis.com',
  //   startDate: '2016-02-01',
  //   endDate: '2016-03-01',
  //   summary: `Zenysis develops data analysis and visualization tools for government agencies and international organizations.
  //   Their solutions help improve decision-making by integrating and analyzing large-scale datasets from various sources.
  //   I was the second contributor to the codebase. We built data visualization tools and tackled complex data ingestion
  //   challenges for the Ethiopian Ministry of Health.`,
  //   highlights: [
  //     'Worked in Addis Ababa for the Ethiopian Ministry of Health and built data visualization tools in React and Flask.',
  //     'Ingested multiple databases with different alphabets, calendars, and without official spellings of geographic locations.',
  //   ],
  // },
  // {
  //   name: 'Matroid',
  //   position: 'Co-founder',
  //   url: 'https://matroid.com',
  //   startDate: '2015-07-01',
  //   endDate: '2016-01-01',
  //   summary: `Matroid is a computer vision platform for creating and deploying detectors. Detectors help customers identify objects,
  //   events, or patterns in images and videos without requiring machine learning or coding expertise. I played a crucial role in
  //   defining the company's vision. I was responsible for architecting and building the initial product. I left shortly after the
  //   Series A to focus on Arthena.`,
  //   highlights: [
  //     'Developed end to end machine learning pipeline to train visual classifiers from keywords using Caffe, Node.JS, Redis, MongoDB, and other technologies.',
  //   ],
  // },
  // {
  //   name: 'Planet',
  //   position: 'Missions Intern',
  //   url: 'https://planet.com',
  //   startDate: '2014-06-01',
  //   endDate: '2015-01-01',
  //   highlights: [
  //     'Built models to improve image quality, signal to noise ratio, and dynamic range.',
  //     'Performed statistical analysis of image quality in Matlab and Python.  Developed flight software in C++.',
  //     'Organized first hackathon, prototyped hardware, and designed and built photography equipment for rocket launches.',
  //   ],
  // },
  // {
  //   name: 'Planetary Resources',
  //   position: 'Avionics Intern',
  //   startDate: '2014-01-01',
  //   endDate: '2014-05-01',
  //   url: 'http://planetaryresources.com',
  //   highlights: [
  //     'Developed simulations in Matlab for Attitude Determination and Control Subsystem.',
  //     'Developed processes for in lab testing and characterization of various subsystems.',
  //     'Assembled flight hardware in cleanroom.',
  //   ],
  // },
  // {
  //   name: 'Facebook',
  //   position: 'Software Engineer Intern',
  //   url: 'https://facebook.com',
  //   startDate: '2013-06-01',
  //   endDate: '2013-09-01',
  //   highlights: [
  //     'Developed software in python for automated testing of servers.',
  //     'Performed statistical analysis with R, HIVE to assist in triage of malfunctioning servers.',
  //     "Worked with vendors and ODM's during triage to assist in risk mitigation.",
  //   ],
  // },
  // {
  //   name: 'SEDS-USA',
  //   position: 'At Large Board Member',
  //   url: 'http://seds.org',
  //   startDate: '2013-10-01',
  //   endDate: '2014-10-01',
  //   highlights: [
  //     "Elected to Board of Directors of the USA's largest student space advocacy group based on 5+ years of work with SEDS.",
  //     'Responsibilities included: organizational strategy, conference presentations, fundraising, special projects, promoting SEDS nationally and internationally, and photographing conferences.',
  //   ],
  // },
  // {
  //   name: 'UB Nanosatellite Program',
  //   position: 'Co-founder, Program Manager',
  //   url: 'https://ubnl.space/',
  //   startDate: '2010-10-01',
  //   endDate: '2012-06-01',
  //   highlights: [
  //     'Coauthored grant to build a multi-spectral imaging satellite as part of the AFRL University Nanosatellite Program.',
  //     'Lead a team of 60 students through satellite development life cycle. Served as a technical expert, acquired intimate working knowledge of satellite subsystems.  Solicited funding through NASA, AFOSR, and several corporate sponsors.',
  //   ],
  // },
];

export default work;
