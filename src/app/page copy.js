import Image from 'next/image'
import Link from 'next/link'
import { Github, Linkedin, ExternalLink } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

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

export default function Portfolio() {
    return (
        <div className='min-h-screen bg-background text-foreground'>
            <div className='md:grid md:grid-cols-[2fr,3fr] h-screen'>
                {/* Left column (static on desktop, top on mobile) */}
                <div className='md:h-screen md:overflow-hidden p-8 flex flex-col items-center md:items-start justify-center space-y-4'>
                    <Image
                        src='/assets/profile_picture.jpg'
                        alt='Profile Picture'
                        width={300}
                        height={300}
                        className='rounded-full'
                    />
                    <h1 className='text-3xl font-bold'>Lee Zong Han</h1>
                    <p className='text-xl text-center md:text-left'>Full Stack Engineer</p>
                    <p className='text-muted-foreground text-center md:text-left max-w-md'>
                        A passionate developer with a keen interest in solving problems with web
                        applications.
                    </p>
                    <div className='flex space-x-4 md:hidden'>
                        <SocialLinkButtons />
                    </div>
                </div>

                {/* Right column (scrollable on desktop, bottom on mobile) */}
                <div className='md:h-screen md:overflow-y-auto p-8 space-y-8'>
                    <section>
                        <h2 className='text-2xl font-semibold mb-4'>About Me</h2>
                        <p className='text-muted-foreground'>
                            I'm a full stack engineer with 2 years of experience in building web
                            applications. I specialize in React, Node.js, and cloud technologies. My
                            passion lies in creating efficient, scalable, and user-friendly
                            solutions that solve real-world problems. I'm always eager to learn new
                            technologies and methodologies to stay at the forefront of web
                            development.
                        </p>
                    </section>

                    <section>
                        <h2 className='text-2xl font-semibold mb-4'>Experience</h2>
                        <div className='space-y-4'>
                            <Card>
                                <CardHeader>
                                    <CardTitle>
                                        Software Engineer ⋅ TransAsia Private Capital
                                    </CardTitle>
                                    <CardDescription>March 2023 - Present</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className='mb-2'>
                                        Led development of scalable microservices architecture.
                                        Mentored junior developers and implemented best practices
                                        for code quality and performance optimization.
                                    </p>
                                    <div className='flex flex-wrap gap-2'>
                                        <Badge variant='secondary'>React</Badge>
                                        <Badge variant='secondary'>Express</Badge>
                                        <Badge variant='secondary'>Node.js</Badge>
                                        <Badge variant='secondary'>MongoDB</Badge>
                                        <Badge variant='secondary'>AWS</Badge>
                                        <Badge variant='secondary'>Docker</Badge>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    <section>
                        <h2 className='text-2xl font-semibold mb-4'>Projects</h2>
                        <div className='grid gap-4 md:grid-cols'>
                            <Card className='flex flex-col'>
                                <Image
                                    src='/assets/transasia_web_app.png'
                                    alt='Investment Management Platform'
                                    width={400}
                                    height={200}
                                    className='object-cover'
                                />
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
                </div>
            </div>
            {/* Social links for desktop */}
            <div className='hidden md:flex fixed bottom-8 left-8 space-x-4'>
                <SocialLinkButtons />
            </div>
        </div>
    )
}
