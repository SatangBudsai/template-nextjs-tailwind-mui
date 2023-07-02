import Layout from "@/components/Layout2";
import { Button } from "@mui/material";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter()
  return (
    <Layout className="p-5">
      <div className="uppercase">Template AroundTheCode</div>
      <Button variant="contained" onClick={() => router.push('/pageDemo')}>Home</Button>
    </Layout>
  )
}
