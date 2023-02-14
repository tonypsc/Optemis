import { Suspense } from 'react';
import {
  QueryClient,
  QueryClientProvider,
  QueryErrorResetBoundary,
} from 'react-query';

import { Home } from './home';
import { LoadingView } from './shared';

import './App.css';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<LoadingView />}>
        <Home />
      </Suspense>
    </QueryClientProvider>
  );
}

export default App;
