import Image from 'next/image'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { ExternalLink, ArrowUpRight } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel'

import JobCard from '@/components/custom/job-card'
const SocialLinkButtons = dynamic(() => import('@/components/custom/social-link-buttons'), {
    ssr: false,
})

import { jobs } from '@/data/jobs'
import { investmentmentManagementPlatform } from '@/data/projectImages'

// const ThemeSwitcher = dynamic(() => import('@/components/common/theme-switcher'), { ssr: false })

export default function Portfolio() {
    return (
        <div className='min-h-screen bg-background text-foreground'>
            {/* Dark mode toggle */}
            {/* <div className='flex py-4 px-48 justify-end'>
                <ThemeSwitcher />
            </div> */}
            <div className='lg:h-screen lg:overflow-hidden lg:flex'>
                {/* Left column (static on large screens, scrollable on small screens) */}
                <div className='lg:w-2/5 p-8 lg:pl-48 flex flex-col items-center lg:items-start justify-center space-y-4 lg:overflow-y-hidden'>
                    <Image
                        src='/assets/profile/profile_picture.jpg'
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
                        A passionate developer with a passion to bring positive impact with
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
                            My main focus these days is on building tools at{' '}
                            <a
                                href='https://taprivatecapital.com/'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='text-neutral-800 hover:text-neutral-600 no-underline'
                            >
                                TransAsia
                            </a>{' '}
                            and starting up a TransAsia joint-venture{' '}
                            <a
                                href='https://capata.sg/'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='text-neutral-800 hover:text-neutral-600 no-underline'
                            >
                                Capata
                            </a>
                            . I enjoy improving the workflow of my colleagues and building solutions
                            that enables businesses to run more effectively and efficiently.
                        </p>
                        <p className='text-muted-foreground mb-4'>
                            When I am not at my computer, you can find me running, exploring the
                            great outdoors, or reading non-fiction books.
                        </p>
                    </section>
                    <section>
                        <h2 className='text-2xl font-semibold mb-4'>Experience</h2>
                        <div className='space-y-4'>
                            {jobs.map((job, index) => (
                                <JobCard
                                    key={index}
                                    title={job.title}
                                    date={job.date}
                                    content={job.content}
                                    url={job.url}
                                    badges={job.badges}
                                />
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
                                        {investmentmentManagementPlatform.map((image, index) => (
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
                                        ))}
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
                                        Developed a full-featured investment management platform
                                        with asynchrnous trade booking, self-service reporting, a
                                        responsive portfolio management dashboard, and role-based
                                        authentication. The platform serves as the backbone of the
                                        middle office, enabling the operations and investment teams
                                        to execute their tasks effectively.
                                    </p>
                                    <Button variant='outline' size='sm' asChild>
                                        <Link
                                            href='https://transasia.demo.leezonghan.com'
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
                                . Deployed with{' '}
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
