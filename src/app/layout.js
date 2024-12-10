import Header from '../components/Header';
import Footer from '../components/Footer';
import { AuthProvider } from '../context/AuthContext';

import '../styles/variables.css';
import '../styles/responsive.css';
import WaveComponent from '@/components/common/WaveComponent';
import RaindropsComponent from '@/components/common/RaindropsComponent';
import Drop from '@/components/common/Drop';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <Header />
          <RaindropsComponent/>
          <main>{children}</main>
          <Drop/>
     <WaveComponent/>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
