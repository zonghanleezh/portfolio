import Link from 'next/link'

export default function Footer() {
    return (
        <footer className='mt-16'>
            <div>
                <span className='text-muted-foreground'>
                    Coded in{' '}
                    <Link
                        href='https://code.visualstudio.com/'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-neutral-800 hover:text-neutral-600 no-underline'
                    >
                        Visual Studio Code
                    </Link>
                    . Built with{' '}
                    <Link
                        href='https://nextjs.org/'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-neutral-800 hover:text-neutral-600 no-underline'
                    >
                        Next.js
                    </Link>{' '}
                    and{' '}
                    <Link
                        href='https://tailwindcss.com/'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-neutral-800 hover:text-neutral-600 no-underline'
                    >
                        Tailwind CSS
                    </Link>
                    . Deployed on{' '}
                    <Link
                        href='https://railway.com/'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-neutral-800 hover:text-neutral-600 no-underline'
                    >
                        Railway
                    </Link>
                    .
                </span>
            </div>
            <div className='mt-4 text-muted-foreground'>
                <span>© {new Date().getFullYear()} Lee Zong Han</span>
            </div>
        </footer>
    )
}
