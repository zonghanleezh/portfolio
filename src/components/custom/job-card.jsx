import { Badge } from '@/components/ui/badge'
import { ArrowUpRight } from 'lucide-react'

export default function JobCard({ title, date, intro, bullets, url, badges }) {
    return (
        <a
            href={url}
            target='_blank'
            rel='noopener noreferrer'
            className='block p-6 bg-background text-foreground rounded-lg border border-border hover:bg-accent hover:text-accent-foreground transition-all duration-200 cursor-pointer group'
        >
            <div className='mb-2'>
                <h3 className='text-lg font-semibold flex items-center'>
                    {title}
                    <ArrowUpRight className='ml-2 h-4 w-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1 group-hover:-translate-y-1' />
                </h3>
                <p className='text-sm text-muted-foreground'>{date}</p>
            </div>
            {intro && <p className='mb-2 text-sm'>{intro}</p>}
            {bullets && bullets.length > 0 && (
                <ul className='list-disc list-inside space-y-1 mb-4 text-sm'>
                    {bullets.map((bullet, index) => (
                        <li key={index}>{bullet}</li>
                    ))}
                </ul>
            )}
            <div className='flex flex-wrap gap-2'>
                {badges.map((badge, index) => (
                    <Badge
                        key={index}
                        variant='secondary'
                        className='bg-sky-100 text-sky-800 group-hover:bg-sky-200 group-hover:text-sky-900 transition-colors duration-200'
                    >
                        {badge}
                    </Badge>
                ))}
            </div>
        </a>
    )
}
