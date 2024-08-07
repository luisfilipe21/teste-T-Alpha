import { useEffect } from "react";
import { api } from "./service"

function App() {

  useEffect(() => {
    const apiTest = async () => {
      try {
        const { data } = await api.get("/api/products/get-all-products");
        console.log(data);

      } catch (error) {
        console.log(error.message);
      }
    }
    apiTest();
  }, [])

  return (
    <>
      sad
    </>
  )
}

export default App
