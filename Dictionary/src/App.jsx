import { createContext, useEffect, useState } from "react"
import Results from "./components/Results/Results";
import Header from "./components/Header/Header"

export const InputContext = createContext();

function App() {
  const [inputValue, setInputValue] = useState('');
  const [data, setData] = useState([]);

  const value = {
    inputValue, setInputValue
  }

  useEffect(() => {
    const dictionaryFetch = fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${inputValue}`)
    .then(response => response.json())
    .then(data => setData(data))
    .catch((err) => console.log(err));
  }, [inputValue])

  
  
  return (
    <InputContext.Provider value={value}>
    <div className="App bg-white h-screen mx-7 ">
        {data && <Header data={data} />}
        {data && <Results data={data} />}
    </div>
    </InputContext.Provider>
  )
}

export default App
