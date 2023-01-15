import Footer from '../Footer';
import Header from '../Header';
import { Inter } from '@next/font/google';
import Container from '../Container';

const inter = Inter({ subsets: ['latin'] });

function MainLayout({ children }) {
	return (
		<main className={inter.className}>
			<Header />
			<Container className="px-30">{children}</Container>
			<Footer />
		</main>
	);
}

export default MainLayout;
