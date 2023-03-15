
const Results = ({ data }) => {

    return (
        <div className="" >
            <div className="noun">
            <h2 className="inline-block mr-4 text-2xl font-semibold">Noun</h2>
            <hr className="inline-block w-10/12 mb-1"/>
            </div>
            <div className="meaning">
                <p className="mt-8 text-gray-400 text-lg font-semibold">Meaning</p>
                {data && (
                    <>
                        <p>{data[0].meanings[0].partOfSpeech}</p>
                    </>
                )}
            </div>
        </div>
    )
}

export default Results;