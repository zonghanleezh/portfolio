import TechLink from './tech-link'

export default function Footer() {
    return (
        <footer className='mt-16'>
            <div>
                <span className='text-muted-foreground'>
                    Coded in{' '}
                    <TechLink href='https://code.visualstudio.com/'>Visual Studio Code</TechLink>.
                    Built with <TechLink href='https://nextjs.org/'>Next.js</TechLink> and{' '}
                    <TechLink href='https://tailwindcss.com/'>Tailwind CSS</TechLink>. Images hosted
                    on <TechLink href='https://supabase.com/'>Supabase</TechLink>. Deployed on{' '}
                    <TechLink href='https://railway.com/'>Railway</TechLink>.
                </span>
            </div>
            <div className='mt-4 text-muted-foreground'>
                <span>© {new Date().getFullYear()} Lee Zong Han</span>
            </div>
        </footer>
    )
}
