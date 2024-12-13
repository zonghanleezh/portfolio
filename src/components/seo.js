import Head from 'next/head'
import { profilePictureUrl } from '@/data/urls'

const SEO = ({ title, description, message }) => {
    const defaultTitle = 'Lee Zong Han | Full Stack Engineer'
    const defaultDescription =
        "Dedicated to building solutions that make a positive impact on people's lives."
    const defaultMessage = "Welcome to my portfolio website! Explore my work and let's connect."

    const displayMessage = message || description || defaultMessage

    return (
        <Head>
            <title>{title || defaultTitle}</title>
            <meta name='description' content={description || defaultDescription} />
            <meta
                name='keywords'
                content='Lee Zong Han, full stack engineer, developer, software engineer, portfolio'
            />
            <meta name='author' content='Lee Zong Han' />
            {/* Open Graph tags for social media sharing */}
            <meta property='og:title' content={title || defaultTitle} />
            <meta property='og:description' content={displayMessage} />
            <meta property='og:image' content={profilePictureUrl} />{' '}
            <meta property='og:url' content='https://me.leezonghan.com' />
            <meta property='og:type' content='website' />
            {/* Twitter Card tags */}
            <meta name='twitter:card' content='summary_large_image' />
            <meta name='twitter:title' content={title || defaultTitle} />
            <meta name='twitter:description' content={displayMessage} />
            <meta name='twitter:image' content={profilePictureUrl} />{' '}
            <meta name='twitter:url' content='https://me.leezonghan.com' />
        </Head>
    )
}

export default SEO
