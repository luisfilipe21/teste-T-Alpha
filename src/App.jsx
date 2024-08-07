import { useEffect } from "react";
import { api } from "./service"
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";

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
      <LoginPage />
      <RegisterPage />
    </>
  )
}

export default App
