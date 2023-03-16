import { useContext } from "react";
import { InputContext } from "../../App";

const Results = ({ data }) => {
    const { inputValue } = useContext(InputContext);
    return (
        <div className="" >
            {/* get the first partOfSpeech */}
                <div className="noun">
                {inputValue != undefined && (
                    <>
                        {/* if data exists and data lenght is more or equal to 1 */}
                        {data  && data.length >= 1 ? <h2 className="inline-block mr-4 text-2xl font-semibold">{data[0].meanings[0].partOfSpeech}</h2> : ''}
                    </>
                )}
                    <hr className="inline-block w-10/12 mb-1" />
                </div>
            <div className="meaning">
                {/* if data exists render @Meaning@ */}
                {data ? <p className="mt-8 text-gray-400 text-lg font-semibold">Meaning</p> : ''}
                {inputValue != undefined && (
                    <>
                        {/* if data.title exists, it renders 'not found' else map through the meanings and render the first 3 */}
                        {data.title === 'No Definitions Found' ? data.message
                            : data[0].meanings[0].definitions.slice(0,3).map((def,i) => {
                                return <li key={i} className="mx-10 mt-8 text-purple-500"><span className="text-black inline">{def.definition}</span></li>
                            })                          
                         }
                    </>
                    )}
            </div>
            {/* if data exists, it renders @Synonyms@ */}
            {data ? <p className="mt-8 text-gray-400 text-lg font-semibold inline-block ml-15">Synonyms: </p> : ''}
            {data.length >= 1 && (
            <>
                    {data[0].meanings[0].synonyms.length < 1 ? <p className="text-purple-500 font-semibold mx-5 inline">No synonyms found</p>
                : data[0].meanings[0].synonyms.splice(3,3).map((syn, i) => {
                    return <span key={i} className="text-purple-500 mx-3 font-bold text-lg">{syn}</span>
                })}
            </>
            )}
            <div className="verb mt-5">
                {inputValue != undefined && (
                    <>
                        {data.length === 0 && !data[0].meanings[1] ? <h2 className="inline-block mr-4 text-2xl font-semibold">{data[0].meanings[1].partOfSpeech}</h2> : ''}
                    </>
                )}
                <hr className="inline-block w-10/12 mb-1" />
            </div>
            <div className="meaning">
                {data ? <p className="mt-8 text-gray-400 text-lg font-semibold">Meaning</p> : ''}
                {inputValue != undefined && (
                    <>
                        {data.title === 'No Definitions Found' ? ''
                            : data.length === 0 || data[0].meanings[1] === undefined ? ' ' : data[0].meanings[1].definitions.slice(0, 3).map((def, i) => {
                            return <>
                                <li key={i} className="mx-10 mt-8 text-purple-500"><span className="text-black inline">{def.definition}</span></li>
                                {def.example != undefined ? <li key={i + 3} className="mx-16 mt-2 text-gray-500 list-none">{`"${def.example}"`}</li> : ''}
                            </>
                            })                      
                         } 
                    </>
                    )} 
            </div>
            <hr className="my-8 w-10/12" />
            {inputValue != undefined && (
                <>
                    {<p className="py-5 text-gray-400 text-lg font-semibold">Source: <a className="pl-5" href={`https://en.wiktionary.org/wiki/${inputValue}`}>{`https://en.wiktionary.org/wiki/${inputValue}`}</a></p>}
                </>
            )}
            </div>
    )
}

export default Results;