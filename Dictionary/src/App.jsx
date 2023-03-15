import { createContext, useState } from "react"
import Header from "./components/Header/Header"

export const InputContext = createContext();

function App() {
  const [inputValue, setInputValue] = useState('Example');

  const value = {
    inputValue, setInputValue
  }

  return (
    <InputContext.Provider value={value}>
    <div className="App bg-white h-screen mx-7 ">
      <Header />
    </div>
    </InputContext.Provider>
  )
}

export default App
