import axios from 'axios';

const fetch = ({ ...param }) => {
  const client = axios.create({
    baseURL: '/api',
  });

  return client(param)
    .then((data) => data)
    .catch((err) => err);
};

export default fetch;
