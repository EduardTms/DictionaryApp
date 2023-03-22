import { useContext } from "react";
import { InputContext } from "../../App";

const Results = ({ data }) => {
    const { inputValue } = useContext(InputContext);
    return (
        <>
            {/* get the first partOfSpeech */}
            <div className="firstPartOfSpeech">
                {/* if input value exists */}
                {inputValue != undefined && (
                    <>
                        {/* if data array length is atleast 1, display the first partOfSpeech  --- No need for further ifs */}
                        {data.title
                            ? ''
                            : <h2 className="inline-block mr-4 text-2xl font-semibold">{data[0].meanings[0].partOfSpeech}</h2>
                        }
                        
                        <hr className="inline-block w-10/12 mb-1" />
                    </>
                )}
            </div>
            
            <div className="meaning">
                {/* if input value exists */}
                {inputValue != undefined && (
                    <>
                        {/* if data.title is atleast 1, it renders 'not found' else map through the meanings and render the first 3 results */}
                        <p className="mt-8 text-gray-400 text-lg font-semibold">Meaning</p>
                        {data.title === 'No Definitions Found'
                            ? data.message
                            : data[0].meanings[0].definitions.slice(0,3).map((def,i) => {
                                return (
                                    <li key={i} className="mx-10 mt-8 text-purple-500">
                                        <span className="text-black inline">{def.definition}</span>
                                    </li>)
                            })                          
                         }
                    </>
                    )}
            </div>

            {/* if input value exists */}
            {inputValue != undefined && (
                <>
                    <p className="mt-8 text-gray-400 text-lg font-semibold inline-block ml-15">Synonyms: </p>
                    {/* if synonyms array length is 0 display synonyms else 404   */}
                    {data.title
                        ? <p className="text-purple-500 font-semibold mx-5 inline">No synonyms found</p>
                        : data[0].meanings[0].synonyms.slice(0,3).map((syn, i) => {
                            return <span key={i} className="text-purple-500 mx-3 font-bold text-lg">{syn}</span>
                })}
            </>
            )}

            <div className="secondPartOfSpeech mt-5">
                {/* if input value exists */}
                {inputValue != undefined && (
                    <>
                        {/* TODO: Fix bug where searching for wrong word is crashing */}
                        {data.title || data[0].meanings.length < 2
                            ? ''
                            : <h2 className="inline-block mr-4 text-2xl font-semibold">{data[0].meanings[1].partOfSpeech}</h2>
                        }
                        <hr className="inline-block w-10/12 mb-1" />
                    </>
                )}
        
            </div>

            <div className="meaning">     
                {/* if input value exists */}
                {inputValue != undefined && (
                    <>
                        <p className="mt-8 text-gray-400 text-lg font-semibold">Meaning</p>
                        {/* if data.title exists, no definition has been found */}
                        {data.title
                            ? ''
                            : data[0].meanings.length < 2
                                ? ''
                                : data[0].meanings[1].definitions.slice(0, 3).map((def, i) => {
                                    return <>
                                {/* word definitions */}
                                <li key={i} className="mx-10 mt-8 text-purple-500">
                                    <span className="text-black inline">{def.definition}</span>
                                </li>
                                
                                {/* if example exists display example else display nothing */}
                                {def.example != undefined
                                    ? <li key={i + 3} className="mx-16 mt-2 text-gray-500 list-none">{`"${def.example}"`}</li>
                                    : ''
                                }
                                </>
                            })                      
                         } 
                    </>
                    )} 
            </div>
            {inputValue != undefined && (
                <>
                    {/* if data.title exists, no definition has been found */}
                    {data.title
                        ? ''
                        :
                        <> 
                            <hr className="my-8 w-10/12" />
                            <p className="py-5 text-gray-400 text-lg font-semibold">Source:
                                <a className="pl-5" href={`https://en.wiktionary.org/wiki/${inputValue}`}>
                                    {`https://en.wiktionary.org/wiki/${inputValue}`}
                                </a>
                            </p>
                        </>
                    }
                    
                </>
            )}
            </>
    )
}

export default Results;