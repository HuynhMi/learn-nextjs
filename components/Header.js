import navLinks from '@/data/navLinks';
import Link from 'next/link';
import Logo from './Logo';
import style from '@/styles/Header.module.css';
import Container from './Container';

function Header() {
	return (
		<header className={style.wrap}>
			<Container>
				<div className={style.inner}>
					<Logo />
					<div className={style.navigate}>
						{navLinks.map((item) => (
							<Link
								href={item.href}
								key={item.id}
								className={style.navigateLink}
							>
								{item.name}
							</Link>
						))}
					</div>
				</div>
			</Container>
		</header>
	);
}

export default Header;
