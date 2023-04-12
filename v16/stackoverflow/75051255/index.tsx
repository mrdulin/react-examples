import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';

class HTTPStatusError extends Error {
  status: number;
  constructor(status: number, message?: string) {
    super(message);
    this.status = status;
  }
}

type Data = { result: string[] };
const getData = async (): Promise<Data> => {
  return fetch('http://localhost:3000/api/data').then((res) => {
    if (res.status !== 200) {
      return Promise.reject(new HTTPStatusError(res.status));
    }
    return res.json();
  });
};

const Page = () => {
  const { data } = useQuery<Data, HTTPStatusError>(['example'], () => getData(), {
    retry: false,
    suspense: true,
    useErrorBoundary: (error) => {
      // console.log('error: ', error.status);
      return error.status >= 500;
    },
  });

  return (
    <div>
      {data?.result.map((v) => (
        <p key={v}>{v}</p>
      ))}
    </div>
  );
};

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary
        fallbackRender={() => (
          <div>
            <div>error boundary</div>
          </div>
        )}
      >
        <React.Suspense fallback="Loading...">
          <Page />
        </React.Suspense>
      </ErrorBoundary>
    </QueryClientProvider>
  );
}
