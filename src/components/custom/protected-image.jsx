import Image from 'next/image'

export default function ProtectedImage({ src, alt, width, height, style, className, ...props }) {
    return (
        <div className='relative'>
            <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                className={className}
                style={style}
                onContextMenu={(e) => e.preventDefault()}
                draggable={false}
                {...props}
            />
            <div className='absolute inset-0' onContextMenu={(e) => e.preventDefault()} />
        </div>
    )
}
