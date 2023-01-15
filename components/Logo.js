import Image from 'next/image';
import logoImg from '@/public/static/images/logo.png';
import Link from 'next/link';

function Logo() {
	return (
		<Link href="/">
			<Image
				src={logoImg}
				alt="Logo"
				width={400}
				height={400}
				priority
			/>
		</Link>
	);
}

export default Logo;
