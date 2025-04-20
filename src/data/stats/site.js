import dayjs from 'dayjs';

/* Keys match keys returned by the github api. Fields without keys are
 * mostly jokes. To see everything returned by the github api, run:
 curl https://api.github.com/repos/mldangelo/personal-site
 */

// todo
const data = [
  {
    label: 'Последнее обновление',
    key: 'pushed_at',
    link: 'https://github.com/ryabininaleck/site/commits',
    format: (x) => dayjs(x).format('MMMM DD, YYYY'),
  },
];

export default data;
