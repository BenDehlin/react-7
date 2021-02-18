import React, {useState, useEffect} from 'react'

const FunctionalComponent = (props) => {
    const [word, setWord] = useState('test')
    const [wordTwo, setWordTwo] = useState('something else')
    useEffect(() => {
        console.log('Component Mounted')
    }, [])
    return(
        <div>
            <p>{word}</p>
            <p>{wordTwo}</p>
        </div>
    )
}

export default FunctionalComponent