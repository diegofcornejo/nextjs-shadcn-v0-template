import Link from 'next/link';

import { GetTheme, ModeToggle } from '@/components/theme-selector';
import { UserAuthForm } from '@/components/login-form';
import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';

const technologies = [
	{
		link: 'https://nextjs.org/',
		name: 'Next.js 13 (App Router)',
	},
	{
		link: 'https://tailwindcss.com/',
		name: 'Tailwind CSS',
	},
	{
		link: 'https://ui.shadcn.com/',
		name: 'Shadcn Components & Theming',
	},
	{
		link: 'https://v0.dev/',
		name: 'v0 AI Components (Alpha).',
	},
	{
		link: 'https://bun.sh/',
		name: 'Bun as npm installer and builder',
	},
	{
		link: 'https://vercel.com/',
		name: 'Vercel as deployer',
	},
];

export default function LoginPage() {
	return (
		<>
			<div className='container relative h-screen md:flex md:flex-row lg:grid lg:max-w-full lg:grid-cols-2 lg:px-0'>
				<div className='relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex'>
					<div className='absolute inset-0 bg-zinc-900' />
					<div className='relative z-20 flex items-center text-lg font-medium gap-6'>
						<ModeToggle />
						<div className='flex flex-col w-12'>
							<Icons.logo_light color='#FFFFFF' />
						</div>
					</div>
					<div className='relative z-20 mt-auto'>
						<blockquote className='space-y-2'>
							<footer className='text-sm'>
								<p>This is a starter template for a static website using:</p>
								<ul className='list-disc list-inside'>
									{technologies.map((tech, index) => (
										<li key={index}>
											<Link
												href={tech.link}
												target='_blank'
												rel='noopener noreferrer'
											>
												{tech.name}
											</Link>
										</li>
									))}
								</ul>
							</footer>
						</blockquote>
						<div className='flex space-x-4 mt-4'>
							<Link
								href='https://nextjs-shadcn-v0ai.vercel.app/'
								target='_blank'
								rel='noopener noreferrer'
							>
								<Button type='button'>Demo</Button>
							</Link>
							<Link
								href='https://github.com/diegofcornejo/nextjs-shadcn-v0-template'
								target='_blank'
								rel='noopener noreferrer'
							>
								<Button variant='outline' type='button'>
									<Icons.gitHub className='mr-2 h-4 w-4' />
									Github
								</Button>
							</Link>
						</div>
					</div>
				</div>
				<div className='lg:p-8 h-screen flex items-center justify-center'>
					<div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
						<div className='flex flex-col items-center'>
							<Icons.logo className='h-16 w-16' />
						</div>
						<div className='flex flex-col space-y-2 text-center'>
							<h1 className='text-2xl font-semibold tracking-tight'>Login</h1>
							<p className='text-sm text-muted-foreground'>
								Enter your credentials below to access.
							</p>
						</div>
						<UserAuthForm />
						<div className='flex flex-col space-y-2 text-center'>
							<p className='text-sm text-muted-foreground'>
							Don&apos;t have an account?{' '}
								<Link href='/register'>
									Register
								</Link>
							</p>
						</div>
						<div className='flex flex-col space-y-2 text-center'>
							<p className='text-sm text-muted-foreground'>
								user: admin@email.com <br/>
								pass: admin
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
