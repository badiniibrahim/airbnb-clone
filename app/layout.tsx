import ClientOnly from './components/ClientOnly';
import RegisterModal from './components/modal/RegisterModal';
import Navbar from './components/navbar';
import './globals.css';
import { Nunito } from 'next/font/google';
import ToasterProvider from './providers/ToasterProvider';
import LoginModal from './components/modal/LoginModal';
import getCurrentUser from './actions/getCurrentUser';
import RentModal from './components/modal/RentModal';
import SearchModal from './components/modal/SearchModal';

const inter = Nunito({ subsets: ['latin'] });

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientOnly>
          <ToasterProvider />
          <RegisterModal />
          <LoginModal />
          <SearchModal />
          <RentModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        <div className="pb-20 pt-28">{children}</div>
      </body>
    </html>
  );
}
