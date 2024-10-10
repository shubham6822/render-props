import React from 'react'

interface InputProps {
    renderProps: (value: string) => React.ReactNode;
}

export default function Input({ renderProps }: InputProps) {
    const [value, setValue] = React.useState('')
    return (
        <div>
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
            {renderProps(value)}
        </div>
    )
}
