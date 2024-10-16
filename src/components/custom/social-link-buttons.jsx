import Link from 'next/link'
import { Button } from '../ui/button'
import { Github, Linkedin, Mail } from 'lucide-react'
export default function SocialLinkButtons() {
    return (
        <>
            <Button variant='outline' size='icon' asChild>
                <Link
                    href='https://linkedin.com/in/lee-zong-han'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <Linkedin className='h-4 w-4' />
                    <span className='sr-only'>LinkedIn Profile</span>
                </Link>
            </Button>
            <Button variant='outline' size='icon' asChild>
                <Link
                    href='https://github.com/zonghanleezh'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <Github className='h-4 w-4' />
                    <span className='sr-only'>GitHub Profile</span>
                </Link>
            </Button>
            <Button variant='outline' size='icon' asChild>
                <Link
                    href='mailto:zonghanleezh@gmail.com'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <Mail className='h-4 w-4' />
                    <span className='sr-only'>Send Email</span>
                </Link>
            </Button>
        </>
    )
}
