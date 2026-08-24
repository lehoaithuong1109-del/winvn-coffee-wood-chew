import { createContext, useContext, useState, type ReactNode } from 'react';
import { AnimatePresence } from 'motion/react';
import SampleRequestModal from '../components/sections/SampleRequestModal';

interface SampleModalContextValue {
  openSampleModal: () => void;
}

const SampleModalContext = createContext<SampleModalContextValue | null>(null);

export function SampleModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SampleModalContext.Provider value={{ openSampleModal: () => setIsOpen(true) }}>
      {children}
      <AnimatePresence>
        {isOpen && <SampleRequestModal onClose={() => setIsOpen(false)} />}
      </AnimatePresence>
    </SampleModalContext.Provider>
  );
}

export function useSampleModal() {
  const ctx = useContext(SampleModalContext);
  if (!ctx) throw new Error('useSampleModal must be used within SampleModalProvider');
  return ctx;
}
