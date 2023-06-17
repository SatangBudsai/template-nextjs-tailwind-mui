import Layout from '@/components/Layout'
import { Button } from '@mui/material'
import { useRouter } from 'next/router'
import React from 'react'

type Props = {}

const pageDemo = (props: Props) => {
    const router = useRouter()
    return (
        <Layout className="p-5">
            <Button variant="contained" onClick={() => router.push('/')}>pageDemo</Button>
        </Layout>
    )
}

export default pageDemo