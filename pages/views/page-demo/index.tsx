import Layout from '@/components/layout'
import { Button } from '@mui/material'
import { useRouter } from 'next/router'
import React from 'react'

type Props = {}

const PageDemo = (props: Props) => {
    const router = useRouter()
    return (
        <Layout className="p-5">
            <Button variant="contained" onClick={() => router.push('/')}>PageDemo</Button>
            <div className='bg-white p-5 mt-2 rounded-lg'>
                <div className='bg-white rounded-lg p-5 drop-shadow-lg text-primary text-xl font-bold'>
                    PageDemo
                </div>
            </div>
        </Layout>
    )
}

export default PageDemo