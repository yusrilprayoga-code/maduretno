interface GoogleMapProps {
    src: string
    width?: number | string
    height?: number | string
    className?: string
    style?: React.CSSProperties
    allowFullScreen?: boolean
    loading?: 'eager' | 'lazy'
    referrerPolicy?: 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url'
  }
  
  export default function GoogleMap({
    src,
    width = 600,
    height = 350,
    className = '',
    style = {},
    allowFullScreen = true,
    loading = 'lazy',
    referrerPolicy = 'no-referrer-when-downgrade'
  }: GoogleMapProps) {
    return (
      <iframe
        src={src}
        width={width}
        height={height}
        className={className}
        style={{ border: 0, ...style }}
        allowFullScreen={allowFullScreen}
        loading={loading}
        referrerPolicy={referrerPolicy}
        title="Google Map"
      />
    )
  }
  
  