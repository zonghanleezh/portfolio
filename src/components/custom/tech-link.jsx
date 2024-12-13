import Link from 'next/link'

const TechLink = ({ href, children }) => {
    return (
        <Link
            href={href}
            target='_blank'
            rel='noopener noreferrer'
            className='text-neutral-800 hover:text-neutral-600 no-underline'
        >
            {children}
        </Link>
    )
}

export default TechLink
