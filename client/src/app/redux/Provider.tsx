'use client';

import { Provider } from 'react-redux';
import { store } from './store';

// TODO: add type
// test
export function Providers({ children }: any) {
  return <Provider store={store}>{children}</Provider>;
}
