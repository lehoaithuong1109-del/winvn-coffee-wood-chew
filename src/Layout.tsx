import { Outlet } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';
import SessionTracker from './components/layout/SessionTracker';
import { SampleModalProvider } from './context/SampleModalContext';

export default function Layout() {
  return (
    <>
      <ScrollToTop />
      <SessionTracker />
      <SampleModalProvider>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Outlet />
          </main>
          <Footer />
        </div>
      </SampleModalProvider>
    </>
  );
}
