import Image from 'next/image'
import Link from 'next/link'
import { Github, Linkedin, ExternalLink, ArrowUpRight } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel'

function SocialLinkButtons() {
    return (
        <>
            <Button variant='outline' size='icon' asChild>
                <Link
                    href='https://linkedin.com/in/lee-zong-han'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <Linkedin className='h-4 w-4' />
                </Link>
            </Button>
            <Button variant='outline' size='icon' asChild>
                <Link
                    href='https://github.com/zonghanleezh'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <Github className='h-4 w-4' />
                </Link>
            </Button>
        </>
    )
}

const investmentmentManagementPlatformProjectImages = [
    {
        src: '/assets/projects/investment_management_login.png',
        alt: 'Investment Management Platform Login',
    },
    {
        src: '/assets/projects/investment_management_holdings.png',
        alt: 'Investment Management Platform Holdings',
    },
    {
        src: '/assets/projects/investment_management_statement.png',
        alt: 'Investment Management Platform Statement',
    },
]

export default function Portfolio() {
    return (
        <div className='min-h-screen bg-background text-foreground'>
            <div className='lg:h-screen lg:overflow-hidden lg:flex'>
                {/* Left column (static on large screens, scrollable on small screens) */}
                <div className='lg:w-2/5 p-8 lg:pl-48 flex flex-col items-center lg:items-start justify-center space-y-4 lg:overflow-y-hidden'>
                    <Image
                        src='/assets/profile/profile_picture.png'
                        alt='Profile Picture'
                        width={300}
                        height={300}
                        className='rounded-full'
                        priority={true}
                        loading='eager'
                    />
                    <h1 className='text-3xl font-bold'>Lee Zong Han</h1>
                    <p className='text-xl text-center lg:text-left'>Full Stack Engineer</p>
                    <p className='text-muted-foreground text-center lg:text-left max-w-md'>
                        A passionate developer with a keen interest in improving lives with
                        technology.
                    </p>
                    <div className='flex space-x-4'>
                        <SocialLinkButtons />
                    </div>
                </div>

                {/* Right column (scrollable on large screens, part of main scroll on small screens) */}
                <div className='lg:w-3/5 p-8 lg:pr-48 space-y-16 lg:overflow-y-auto'>
                    <section>
                        <h2 className='text-2xl font-semibold mb-4'>About Me</h2>
                        <p className='text-muted-foreground mb-4'>
                            Back in 2022, I began experimenting with scripting and tumbled into the
                            world of coding and web development. Fast forward to today, I have built
                            and contributed to projects in the fintech and startup space.
                        </p>
                        <p className='text-muted-foreground mb-4'>
                            My main focus these days is on building tools for the back office at{' '}
                            <a
                                href='https://taprivatecapital.com/'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='text-neutral-800 hover:text-neutral-600 no-underline'
                            >
                                TransAsia
                            </a>
                            . I enjoy improving the workflow of my colleagues and creating tools
                            that enables the business to run more efficiently.
                        </p>
                        <p className='text-muted-foreground mb-4'>
                            When I am not at my computer, you can find me running, exploring the
                            great outdoors, or reading non-fiction books.
                        </p>
                    </section>

                    <section>
                        <h2 className='text-2xl font-semibold mb-4'>Experience</h2>
                        <div className='space-y-4'>
                            {[
                                {
                                    title: 'Product ⋅ Capata',
                                    date: 'January 2024 — Present',
                                    content:
                                        'Spearheaded the business requirements gathering for the joint-venture supply chain financing platform. Translated requirements to technical language for the offshore development team. Collaborated with the joint-venture partner CTO to decide platform requirements and architecture.',
                                    url: 'https://capata.sg/',
                                    badges: ['Figma'],
                                },
                                {
                                    title: 'Software Engineer ⋅ TransAsia Private Capital',
                                    date: 'March 2023 — Present',
                                    content:
                                        'Architected, built and maintained a private debt investment management platform. Worked closely with the investment and back office to develop tools that streamline the lending process.',
                                    url: 'https://taprivatecapital.com/',
                                    badges: [
                                        'React',
                                        'Express',
                                        'Node.js',
                                        'MongoDB',
                                        'AWS',
                                        'Docker',
                                    ],
                                },
                            ].map((job, index) => (
                                <a
                                    href={job.url}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    key={index}
                                    className='block p-6 bg-card text-card-foreground rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer group'
                                >
                                    <div className='mb-2'>
                                        <h3 className='text-lg font-semibold flex items-center'>
                                            {job.title}
                                            <ArrowUpRight className='ml-2 h-4 w-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1 group-hover:-translate-y-1' />
                                        </h3>
                                        <p className='text-sm text-muted-foreground'>{job.date}</p>
                                    </div>
                                    <p className='mb-4 text-sm'>{job.content}</p>
                                    <div className='flex flex-wrap gap-2'>
                                        {job.badges.map((badge, badgeIndex) => (
                                            <Badge key={badgeIndex} variant='secondary'>
                                                {badge}
                                            </Badge>
                                        ))}
                                    </div>
                                </a>
                            ))}

                            <Button variant='contained' size='sm' asChild>
                                <Link href='/resume' target='_blank' rel='noopener noreferrer'>
                                    <div className='flex items-center space-x-2 group'>
                                        <span className='text-lg font-semibold'>
                                            View Full Resume
                                        </span>
                                        <span className='inline-block transition-transform duration-300 ease-in-out group-hover:translate-x-1 group-hover:-translate-y-1'>
                                            <ArrowUpRight className='h-4 w-4' />
                                        </span>
                                    </div>
                                </Link>
                            </Button>
                        </div>
                    </section>

                    <section>
                        <h2 className='text-2xl font-semibold mb-4'>Projects</h2>
                        <div className='grid gap-4'>
                            <Card className='flex flex-col'>
                                <Carousel className='w-full max-w-xs mx-auto'>
                                    <CarouselContent>
                                        {investmentmentManagementPlatformProjectImages.map(
                                            (image, index) => (
                                                <CarouselItem key={index}>
                                                    <div className='p-1'>
                                                        <Image
                                                            src={image.src}
                                                            alt={image.alt}
                                                            width={400}
                                                            height={200}
                                                            className='object-cover rounded-lg'
                                                        />
                                                    </div>
                                                </CarouselItem>
                                            )
                                        )}
                                    </CarouselContent>
                                    <CarouselPrevious />
                                    <CarouselNext />
                                </Carousel>
                                <CardHeader className='flex-grow'>
                                    <CardTitle className='text-lg leading-tight'>
                                        Investment Management Platform
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className='mb-2'>
                                        Developed a full-featured back office management platform
                                        with loan booking, real-time user logging, secure
                                        authentication, and a responsive portfolio management
                                        dashboard.
                                    </p>
                                    <Button variant='outline' size='sm' asChild>
                                        <Link
                                            href='https://app.leezonghan.com'
                                            target='_blank'
                                            rel='noopener noreferrer'
                                        >
                                            Visit Site <ExternalLink className='ml-2 h-4 w-4' />
                                        </Link>
                                    </Button>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    <section>
                        <div>
                            <span className='text-muted-foreground'>
                                Coded in{' '}
                                <a
                                    href='https://code.visualstudio.com/'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='text-neutral-800 hover:text-neutral-600 no-underline'
                                >
                                    Visual Studio Code
                                </a>
                                . Built with{' '}
                                <a
                                    href='https://nextjs.org/'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='text-neutral-800 hover:text-neutral-600 no-underline'
                                >
                                    Next.js
                                </a>{' '}
                                and{' '}
                                <a
                                    href='https://tailwindcss.com/'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='text-neutral-800 hover:text-neutral-600 no-underline'
                                >
                                    Tailwind CSS
                                </a>
                                , deployed with{' '}
                                <a
                                    href='https://railway.app/'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='text-neutral-800 hover:text-neutral-600 no-underline'
                                >
                                    Railway
                                </a>
                                .
                            </span>
                        </div>
                        <div className='mt-4 text-muted-foreground'>
                            <span>© {new Date().getFullYear()} Lee Zong Han</span>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}
