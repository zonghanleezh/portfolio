'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

import { Button } from '@/components/ui/button'

import JobCard from '@/components/custom/job-card'
import ProjectCard from '@/components/custom/project-card'
import SectionMenu from '@/components/custom/section-menu'
import Footer from '@/components/custom/footer'
import SocialLinkButtons from '@/components/custom/social-link-buttons'

import { jobs } from '@/data/jobs'
import { projects } from '@/data/projects'

export default function Portfolio() {
    const [activeSection, setActiveSection] = useState('About Me')
    const sectionRefs = useRef({})

    const sections = ['About Me', 'Experience', 'Projects']

    const scrollToSection = (section) => {
        setActiveSection(section)
        sectionRefs.current[section]?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <div className='min-h-screen bg-background text-foreground'>
            <div className='lg:h-screen lg:overflow-hidden lg:flex'>
                {/* LEFT SIDE */}
                <div className='lg:w-2/5 p-8 lg:pl-48 flex flex-col items-center lg:items-start justify-center space-y-4 lg:overflow-y-hidden'>
                    <Image
                        src='/assets/profile/profile_picture.jpg'
                        alt='Profile Picture'
                        width={300}
                        height={300}
                        style={{ borderRadius: '90px' }}
                        priority
                        loading='eager'
                    />
                    <h1 className='text-3xl font-bold'>Lee Zong Han</h1>
                    <p className='text-xl text-center lg:text-left'>Full Stack Engineer</p>
                    <p className='text-muted-foreground text-center lg:text-left max-w-md'>
                        Hi there! 👋🏻
                        <br />
                        <br />
                        I&apos;m a developer driven by a passion to make a positive impact through
                        technology.
                        <br />
                        <br />
                        Feel free to explore and try out the demos. I&apos;d love to hear your
                        thoughts — let&apos;s connect and create something amazing! 🚀
                    </p>
                    <div className='flex space-x-4'>
                        <SocialLinkButtons />
                    </div>
                    <div className='hidden lg:block'>
                        <SectionMenu
                            sections={sections}
                            activeSection={activeSection}
                            onSectionClick={scrollToSection}
                        />
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className='lg:w-3/5 p-8 lg:pr-48 space-y-16 lg:overflow-y-auto'>
                    <section ref={(el) => (sectionRefs.current['About Me'] = el)}>
                        <h2 className='text-2xl font-semibold mb-4'>About Me</h2>
                        <p className='text-muted-foreground mb-4'>
                            In 2022, I began experimenting with scripting, which sparked my journey
                            into coding and web development. Since then, I have built and
                            contributed to impactful projects in the fintech and startup space,
                            focusing on scalable web applications and intuitive user experiences.
                        </p>
                        <p className='text-muted-foreground mb-4'>
                            Currently, I am dedicated to developing tools at{' '}
                            <a
                                href='https://taprivatecapital.com/'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='text-neutral-800 hover:text-neutral-600 no-underline'
                            >
                                TransAsia
                            </a>{' '}
                            and supporting the launch of its joint-venture,{' '}
                            <a
                                href='https://capata.sg/'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='text-neutral-800 hover:text-neutral-600 no-underline'
                            >
                                Capata
                            </a>
                            . My work involves designing and implementing solutions that streamline
                            workflows, improve efficiency, and address complex business needs. With
                            experience in both frontend and backend development, I enjoy crafting
                            full-stack solutions that bring technical ideas to life in practical,
                            impactful ways.
                        </p>
                        <p className='text-muted-foreground mb-4'>
                            Outside of work, I enjoy running, exploring the outdoors, and diving
                            into non-fiction books to continually expand my knowledge and
                            perspective.
                        </p>
                    </section>

                    <section ref={(el) => (sectionRefs.current['Experience'] = el)}>
                        <h2 className='text-2xl font-semibold mb-4'>Experience</h2>
                        <div className='space-y-4'>
                            {jobs.map((job, index) => (
                                <JobCard key={index} {...job} />
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

                    <section ref={(el) => (sectionRefs.current['Projects'] = el)}>
                        <h2 className='text-2xl font-semibold mb-4'>Projects</h2>
                        <div className='grid gap-4 '>
                            {projects.map((project, index) => (
                                <ProjectCard key={index} {...project} />
                            ))}
                        </div>
                    </section>

                    <Footer />
                </div>
            </div>
        </div>
    )
}
