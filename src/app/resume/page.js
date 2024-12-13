import { resumeUrl } from '@/data/urls'

export const metadata = {
    title: 'Resume | Lee Zong Han',
    description: 'Lee Zong Han Resume',
}

export default function ResumePage() {
    return (
        <div className='flex justify-center items-center min-h-screen bg-gray-100'>
            <iframe
                src={resumeUrl}
                className='w-full h-screen max-w-none shadow-lg'
                title='Lee Zong Han Resume'
            />
        </div>
    )
}
