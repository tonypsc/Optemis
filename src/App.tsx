import { Suspense } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ErrorBoundary } from 'react-error-boundary';
import { ToastContainer } from 'react-toastify';

import { Home } from './home';
import { LoadingView, ErrorView } from './shared';

import './App.css';

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ErrorBoundary FallbackComponent={ErrorView}>
          <Suspense fallback={<LoadingView />}>
            <Home />
          </Suspense>
        </ErrorBoundary>
      </QueryClientProvider>
      <ToastContainer
        autoClose={10000}
        theme={'light'}
        position={'bottom-left'}
      />
    </>
  );
}

export default App;
