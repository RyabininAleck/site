import React, { useState, useEffect } from 'react';

const Age = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('2003-04-28T09:24:00');
    setAge(((Date.now() - birthTime) / divisor).toFixed(11));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{age}</>;
};

const DaysInDevelopment = () => {
  const [days, setDays] = useState();

  const tick = () => {
    const msInDay = 1000 * 60 * 60 * 24;
    const startDate = new Date('2021-09-01T00:00:00'); // укажите вашу дату начала разработки
    setDays(((Date.now() - startDate) / msInDay).toFixed(6));
  };

  useEffect(() => {
    const timer = setInterval(tick, 25);
    return () => clearInterval(timer);
  }, []);

  return <>{days}</>;
};

const DaysInGoDevelopment = () => {
  const [days, setDays] = useState();

  const tick = () => {
    const msInDay = 1000 * 60 * 60 * 24;
    const startDate = new Date('2022-10-03T00:00:00'); // укажите вашу дату начала разработки
    setDays(((Date.now() - startDate) / msInDay).toFixed(6));
  };

  useEffect(() => {
    const timer = setInterval(tick, 25);
    return () => clearInterval(timer);
  }, []);

  return <>{days}</>;
};

const data = [
  {
    key: 'Current age',
    label: 'Возраст',
    value: <Age />,
  },
  {
    key: 'location',
    label: 'Текущий город',
    value: 'Москва, Россия',
  },
  {
    key: 'days_in_development',
    label: 'Дней в разработке',
    value: <DaysInDevelopment />,
  },

  {
    key: 'days_in_development',
    label: 'Дней в разработке на Go',
    value: <DaysInGoDevelopment />,
  },
  {
    key: 'completed_projects',
    label: 'Завершенных проектов',
    value: 9,
  },
  // {
  //   key: 'countries',
  //   label: 'Countries visited',
  //   value: 13,
  //   link: 'https://www.google.com/maps/d/embed?mid=1iBBTscqateQ93pWFVfHCUZXoDu8&z=2',
  // },

];

export default data;
