import { Metadata } from 'next';
import Link from 'next/link';

import { ModeToggle } from '@/components/theme-selector';
import { UserAuthForm } from '@/components/login-form';
import { Icons } from '@/components/icons';

export const metadata: Metadata = {
	title: 'Login',
	description: 'Next.js Starter Template with Tailwind CSS, Shadcn Components, v0 Components (Alpha), Bun as npm installer and builder, Vercel as deployer.',
};

export default function LoginPage() {
	return (
		<>
			<div className='container relative h-screen md:flex md:flex-row lg:grid lg:max-w-full lg:grid-cols-2 lg:px-0'>
				<div className='relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex'>
					<div className='absolute inset-0 bg-zinc-900' />
					<div className='relative z-20 flex items-center text-lg font-medium gap-6'>
						<ModeToggle />
						<div className='flex flex-col w-12'>
							<Icons.logo_light color='#FFFFFF'/>
						</div>
					</div>
					<div className='relative z-20 mt-auto'>
					<blockquote className='space-y-2'>
						<footer className='text-sm'>
								<p>This is a starter template for a static website using:</p>
								<ul className="list-disc list-inside">
										<li><Link href="https://nextjs.org/" target="_blank" rel="noopener noreferrer"><button className="hover:underline">Next.js 13 (App Router)</button></Link></li>
										<li><Link href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer"><button className="hover:underline">Tailwind CSS</button></Link></li>
										<li><Link href="https://ui.shadcn.com/" target="_blank" rel="noopener noreferrer"><button className="hover:underline">Shadcn Components & Theming</button></Link></li>
										<li><Link href="https://v0.dev/" target="_blank" rel="noopener noreferrer"><button className="hover:underline">v0 AI Components (Alpha).</button></Link></li>
										<li><Link href="https://bun.sh/" target="_blank" rel="noopener noreferrer"><button className="hover:underline">Bun as npm installer and builder</button></Link></li>
										<li><Link href="https://vercel.com/" target="_blank" rel="noopener noreferrer"><button className="hover:underline">Vercel as deployer</button></Link></li>
								</ul>
						</footer>
					</blockquote>
					</div>
				</div>
				<div className='lg:p-8 h-screen flex items-center justify-center'>
					<div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
						{/* <div className='flex flex-col w-4/5 mx-auto'>
							<Icons.logo/>
						</div> */}
						<div className='flex flex-col space-y-2 text-center'>
							<h1 className='text-2xl font-semibold tracking-tight'>Login</h1>
							<p className='text-sm text-muted-foreground'>
								Enter your credentials below to access.
							</p>
						</div>
						<UserAuthForm />
					</div>
				</div>
			</div>
		</>
	);
}
