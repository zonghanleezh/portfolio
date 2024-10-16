import { ArrowUpRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

export default function JobCard({ title, date, content, url, badges }) {
    return (
        <a
            href={url}
            target='_blank'
            rel='noopener noreferrer'
            className='block p-6 bg-card text-card-foreground rounded-lg border border-transparent shadow-sm hover:bg-accent hover:text-accent-foreground hover:border-accent hover:shadow-md transition-all duration-200 cursor-pointer group'
        >
            <div className='mb-2'>
                <h3 className='text-lg font-semibold flex items-center'>
                    {title}
                    <ArrowUpRight className='ml-2 h-4 w-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1 group-hover:-translate-y-1' />
                </h3>
                <p className='text-sm text-muted-foreground'>{date}</p>
            </div>
            <p className='mb-4 text-sm'>{content}</p>
            <div className='flex flex-wrap gap-2'>
                {badges.map((badge, index) => (
                    <Badge key={index} variant='secondary'>
                        {badge}
                    </Badge>
                ))}
            </div>
        </a>
    )
}
