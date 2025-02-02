const bucketUrl = process.env.NEXT_PUBLIC_SUPABASE_URL

export const projects = [
    {
        title: 'AI-Powered Email Client',
        description:
            'A SaaS email client featuring a RAG chatbot, full-text vector search and a command shortcut interface.',
        isDemo: true,
        siteUrl: `${process.env.AI_EMAIL_DEMO_URL}`,
        images: [
            {
                src: `${bucketUrl}/storage/v1/object/public/portfolio-assets/projects/ai-email/landing.jpg`,
                alt: 'Landing',
            },
            {
                src: `${bucketUrl}/storage/v1/object/public/portfolio-assets/projects/ai-email/mail.jpg`,
                alt: 'Mail',
            },
            {
                src: `${bucketUrl}/storage/v1/object/public/portfolio-assets/projects/ai-email/autocompose.jpg`,
                alt: 'Autocompose',
            },
            {
                src: `${bucketUrl}/storage/v1/object/public/portfolio-assets/projects/ai-email/command.jpg`,
                alt: 'Command',
            },
            {
                src: `${bucketUrl}/storage/v1/object/public/portfolio-assets/projects/ai-email/stripe.jpg`,
                alt: 'Stripe',
            },
        ],
        badges: ['Next.js', 'PostgreSQL', 'OpenAI', 'Stripe'],
    },
    {
        title: 'Investment Management Platform',
        description:
            'A platform featuring asynchronous trade booking, self-service reporting, portfolio management, and role-based authorisation, enabling efficient workflows for operations and investment teams.',
        isDemo: true,
        siteUrl: `${process.env.INVESTMENT_DEMO_URL}`,
        images: [
            {
                src: `${bucketUrl}/storage/v1/object/public/portfolio-assets/projects/investment/login.jpg`,
                alt: 'Login',
            },
            {
                src: `${bucketUrl}/storage/v1/object/public/portfolio-assets/projects/investment/create_user.jpg`,
                alt: 'Create User',
            },
            {
                src: `${bucketUrl}/storage/v1/object/public/portfolio-assets/projects/investment/holdings.jpg`,
                alt: 'Holdings',
            },
            {
                src: `${bucketUrl}/storage/v1/object/public/portfolio-assets/projects/investment/statement_single.jpg`,
                alt: 'Statement of Account',
            },
            {
                src: `${bucketUrl}/storage/v1/object/public/portfolio-assets/projects/investment/statement_multi.jpg`,
                alt: 'Statement of Account Multiple Download',
            },
        ],
        badges: ['React', 'Express', 'Node.js', 'MongoDB', 'Docker'],
    },
]
