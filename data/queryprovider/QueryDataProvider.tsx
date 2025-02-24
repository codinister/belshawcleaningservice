'use client'


import { QueryClient, QueryClientProvider } from 'react-query';

type QueryDataProvideType = {
  children: React.ReactNode;
};

const QueryDataProvider = ({ children }: QueryDataProvideType) => {
  const provider = new QueryClient();
  return (
    <QueryClientProvider client={provider}>{children}</QueryClientProvider>
  );
};

export default QueryDataProvider;
