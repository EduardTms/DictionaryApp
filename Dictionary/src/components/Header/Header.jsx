import { useContext, useState } from "react";
import { InputContext } from "../../App";

const Header = () => {
    const [value, setValue] = useState('');
    const { inputValue, setInputValue } = useContext(InputContext);

    const handleInput = (e) => {
        setValue(e.target.value);
    }

    const handleClick = () => {
        setInputValue(value);
        setValue('');
    }

    return (
        <div className= "container shadow max-w-full" >
            <div className="container mx-auto py-8 inline-flex items-center">
                <img className="ml-5" src="https://img.icons8.com/ios/50/null/open-book--v1.png" alt="logo"/>
                <h1 className="text-5xl font-bold text-center text-black m-auto font-mono"> Dictionary</h1>
            </div>
            <div className="flex items-center justify-center mt-5">
                <div className="flex rounded mb-5 w-8/12">
                    <input className="px-4 py-2 w-10/12 bg-gray-100 rounded-lg outline-none" type="search" placeholder="Search" onChange={handleInput}/>
                    <button className="bg-gray-100 border-l px-4 py-2 rounded-lg cursor-pointer hover:bg-slate-200" onClick={handleClick}>Search</button>
                </div>
            </div>    
                <div className="flex flex-col mx-5 my-8">
                <h1 className="my-5 text-6xl font-bold font-mono">{inputValue}</h1>
                <p className="italic text-fuchsia-400 font-semibold mb-3">/ {inputValue} /</p>
                <hr />
                </div>
        </div>
    )
}

export default Header;