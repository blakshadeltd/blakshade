'use client';

import { ReactNode } from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './index';

export default function PersistGateWrapper({ children }: { children: ReactNode }) {
  return (
    <PersistGate loading={null} persistor={persistor}>
      {children}
    </PersistGate>
  );
}
