import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primeicons/primeicons.css';

import { Suspense } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ErrorBoundary } from 'react-error-boundary';

import { Home } from './home';
import { LoadingView, ErrorView } from './shared';

import './App.css';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary FallbackComponent={ErrorView}>
        <Suspense fallback={<LoadingView />}>
          <Home />
        </Suspense>
      </ErrorBoundary>
    </QueryClientProvider>
  );
}

export default App;
