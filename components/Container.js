import clsx from 'clsx';

function Container({ children, className }) {
	return <div className={clsx('container', className)}>{children}</div>;
}

export default Container;
