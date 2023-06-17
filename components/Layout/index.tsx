import React from 'react'

type Props = {
    children: React.ReactNode
    className?: string
}

const Layout = (props: Props) => {
    return (
        <div className={`bg-gradient-to-t from-[#090513] to-[#0C0A12] text-white w-screen max-w-screen min-h-screen ${props.className}`}>
            {props.children}
        </div>
    )
}

export default Layout