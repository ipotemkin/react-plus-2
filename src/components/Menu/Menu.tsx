import React, { FC, useState } from 'react'
import { cn } from '@bem-react/classname'

import { StateButton } from "../StateButton/StateButton"
import './Menu.css'

const cnMenu = cn('Menu')

export type MenuItem = {
    id: number
    name: string
}

type MenuProps = {
    menu: MenuItem[]
}

export const Menu: FC<MenuProps> = ({ menu }) => {
    const [isMenuShown, setIsMenuShown] = useState(false)
    
    const handleClick = () => setIsMenuShown(prev => !prev)
    const handleMouseOut = (event: React.MouseEvent) => setIsMenuShown(false)

    return (
        <div>
            <StateButton text="Menu" icon size="m" state="action" onClick={handleClick}/>
            {isMenuShown && <nav className={cnMenu('Container')} onMouseLeave={handleMouseOut}>
                {menu.map(item => {
                    return (
                        <div className={cnMenu('Item')} key={item.id}>
                            <input
                                type="radio"
                                id={item.id.toString()}
                                name="dropDownMenu"
                                value={item.id}
                            />
                            <label htmlFor={item.id.toString()}>{item.name}</label>
                        </div>
                    )
                })}
            </nav>}
        </div>
    )
}
