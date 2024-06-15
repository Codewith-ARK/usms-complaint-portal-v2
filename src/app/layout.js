import { Inter } from 'next/font/google';
import { UserProvider } from './Context/userContext';
import ClientLayout from './ClientLayout';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'USMS - Grievence Portal',
  description: 'University of Sufism and Modern Sciences, Bhitshah student grievence portal.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <UserProvider>
          <ClientLayout>{children}</ClientLayout>
        </UserProvider>
      </body>
    </html>
  );
}
