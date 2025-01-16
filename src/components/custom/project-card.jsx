import Link from 'next/link'
import { ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel'
import ProtectedImage from './protected-image'

export default function ProjectCard({ images, title, description, isDemo, siteUrl, badges }) {
    return (
        <Card className='flex flex-col'>
            <Carousel className='w-full max-w-xs mx-auto'>
                <CarouselContent>
                    {images.map((image, index) => (
                        <CarouselItem key={index}>
                            <div className='p-1'>
                                <ProtectedImage
                                    src={image.src}
                                    alt={image.alt}
                                    width={400}
                                    height={200}
                                    unoptimized
                                    className='rounded-lg'
                                />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
            <CardHeader className='flex-grow'>
                <CardTitle className='text-lg leading-tight'>{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <p className='mb-2'>{description}</p>
                <div className='flex flex-wrap gap-2 mb-4'>
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
                {isDemo && (
                    <Button variant='outline' size='sm' asChild>
                        <Link href={siteUrl} target='_blank' rel='noopener noreferrer'>
                            Demo <ExternalLink className='ml-2 h-4 w-4' />
                        </Link>
                    </Button>
                )}
            </CardContent>
        </Card>
    )
}
