import { Button } from '@/components/ui/button'
import { ArrowUp } from 'lucide-react'

const ScrollUpButton = ({ scrollToTop }) => {
    return (
        <Button
            className='fixed bottom-8 right-8 rounded-full p-2 w-12 h-12 flex items-center justify-center bg-sky-100 text-sky-800 hover:bg-sky-200 hover:text-sky-900 transition-colors duration-200'
            onClick={scrollToTop}
            aria-label='Back to top'
        >
            <ArrowUp className='h-6 w-6' />
        </Button>
    )
}

export default ScrollUpButton
