import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
// eslint-disable-next-line import/no-extraneous-dependencies
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone';
import { faTelegram } from '@fortawesome/free-brands-svg-icons/faTelegram';

// import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
// import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
// import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
// import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';

// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons.

const data = [
  {
    link: 'https://github.com/RyabininAleck',
    label: 'Github',
    icon: faGithub,
  },
  {
    link: 'https://t.me/Ruabinin_Alexander',
    label: 'Telegram',
    icon: faTelegram,
  },
  {
    link: 'mailto:ryabininaleck@yandex.ru',
    label: 'Email',
    icon: faEnvelope,
  },
  {
    link: 'tel:+79113867588',
    label: 'Phone',
    icon: faPhone,
  },
  // {
  //   link: 'https://facebook.com/d',
  //   label: 'Facebook',
  //   icon: faFacebookF,
  // },
  // {
  //   link: 'https://www.instagram.com/dangelosaurus/',
  //   label: 'Instagram',
  //   icon: faInstagram,
  // },
  // {
  //   link: 'https://www.linkedin.com/in/michaelldangelo',
  //   label: 'LinkedIn',
  //   icon: faLinkedinIn,
  // },
  // {
  //   link: 'https://twitter.com/dangelosaurus',
  //   label: 'Twitter',
  //   icon: faTwitter,
  // },
];

export default data;
