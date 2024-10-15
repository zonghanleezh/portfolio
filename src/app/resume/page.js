export const metadata = {
    title: 'Resume | Lee Zong Han',
    description: 'Full Stack Engineer Resume',
}

export default function ResumePage() {
    return (
        <div className='flex justify-center items-center min-h-screen bg-gray-100'>
            <iframe
                src='/assets/Lee Zong Han Resume.pdf'
                className='w-full h-screen max-w-4xl shadow-lg'
                title='Lee Zong Han Resume'
            />
        </div>
    )
}
