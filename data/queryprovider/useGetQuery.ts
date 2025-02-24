import { useQuery } from 'react-query';
import fetch from '../axios/fetch';

const useGetQuery = (key: string, url: string) => {
  const fn = () => fetch({ url });
  const qry = useQuery(key, fn);

  if (qry) {
    return qry?.data?.data;
  } else {
    return [];
  }
};

export default useGetQuery;
