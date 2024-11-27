import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export default function SectionMenu({ sections, activeSection, onSectionClick }) {
    return (
        <nav className='space-y-1'>
            {sections.map((section) => (
                <motion.div
                    key={section}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <Button variant='ghost' onClick={() => onSectionClick(section)}>
                        <span className='relative'>
                            {section}
                            {activeSection === section && (
                                <motion.span
                                    className='absolute -bottom-1 left-0 h-[2px] w-full bg-primary'
                                    layoutId='underline'
                                    initial={{ width: 0 }}
                                    animate={{ width: '100%' }}
                                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                />
                            )}
                        </span>
                    </Button>
                </motion.div>
            ))}
        </nav>
    )
}
