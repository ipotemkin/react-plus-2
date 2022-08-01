import { cn } from '@bem-react/classname'
import { useState, FC } from 'react'

import './Picture.css'

import loadIcon from './assets/loading.png'

const cnPicture = cn('Picture')

type PictureProps = {
    placeholder?: string
    defaultPLaceholder?: string
    source: string
    size?: number
}

export const Picture: FC<PictureProps> = ({
    placeholder=loadIcon, source, size=400
}) => {
    const [loaded, setLoaded] = useState(false)

    const handleLoad = () => setLoaded(true)
 
    return (
        <>
            {!loaded && <img className={cnPicture()}
                src={placeholder}
                alt="imagePlaceholder"
                style={{ width: size }}
            />}       
            <img className={cnPicture()}
                src={source}
                alt="tagretPicture"
                onLoad={handleLoad}
                style={{ display: loaded ? 'block' : 'none', width: size }}
            />
        </>
    )   
}
