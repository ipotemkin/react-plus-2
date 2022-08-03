import React, { FC, useState } from 'react'

type FilterProps = {
    data: string[]
}

export const Filter: FC<FilterProps> = ({ data }) => {
    const [list, setList] = useState(data)
    const [inputValue, setInputValue] = useState('')
    const blankList: string[] = []
    const [history, setHistory] = useState(blankList)
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setInputValue(event.target.value)

    const handleKeyDown = (event: React.KeyboardEvent) => {
        const { code } = event
        
        if (code === 'Enter') {
                setList(data.filter(item => item.includes(inputValue)))
                setHistory([...history, inputValue])
                return
        }
        
        if (code === 'Backspace') {
                setList(data.filter(item => item.includes(inputValue.slice(0, inputValue.length-1))))
                return
        }
    }

    const reset = () => {
        setList(data)
        setHistory(blankList)
    }
    
    return (
        <>
            <div>
                <input
                    type="text"
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    value={inputValue}
                    />
                <button onClick={reset}>❌</button>
            </div>
            <p>История:
                {history && <span>{" "}{history.join(', ')}</span>}
            </p>
            <span>Результаты фильтрации:</span>            
            <ul>
                {list.map(item => <li key={item}>{item}</li>)}
            </ul>
        </>
    )
}
