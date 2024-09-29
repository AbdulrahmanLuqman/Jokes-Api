import { useState } from "react"
import Form from "./Form"
import Dashboard from "./Dashboard"

const App = ()=>{
  const [isForm, setIsForm] = useState(true)

  return isForm ? <Form setIsForm={setIsForm}/> : <Dashboard setIsForm={setIsForm}/>
}

export default App