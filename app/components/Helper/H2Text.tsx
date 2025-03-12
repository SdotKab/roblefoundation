import React from 'react'

type Props = {
    children: React.ReactNode;
}

const H2Text = ( { children }: Props) => {
    return (
        <h1 className="basis-3/5 font-monserrate text-3xl font-bold">
            {children}
        </h1>
    )
}

export default H2Text