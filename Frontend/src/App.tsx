import { Button } from "@/components/ui/button"
import { useEffect } from "react"
import { useRoutes } from "react-router-dom"

function App() {

  const router = useRoutes([
    {
      path:'/',
      element: <div>home</div>
    }
  ])
  useEffect(() => {
    const getAllProducts = async () => {
      const res = await fetch('http://localhost:8888/api/products')
      const data = await res.json()
      console.log(data)
    }
    getAllProducts()
  }, [])
  
  return (
    <div className="flex flex-col items-center justify-center min-h-svh">
      <Button>Click me</Button>
      {router}
    </div>
  )
}

export default App
