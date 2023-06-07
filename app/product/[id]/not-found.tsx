import Link from 'next/link';

export default function NotFound() {
	return (
		<div className='text-5xl font-bold text-center mt-48'>
			<h2 className='text-red-800'>Not Found</h2>
			<p>Could not find requested resource</p>
			<p>
				View{' '}
				<Link href='/' className='text-slate-500'>
					Home
				</Link>
			</p>
		</div>
	);
}
