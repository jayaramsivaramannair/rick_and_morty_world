import React from 'react'

export default function NewCharacters({ getNextPage }) {
    const getFreshCharacters = (event) => {
        getNextPage()
    }

    return (
        <div className="fetchNew">
            <button onClick={getFreshCharacters}>Get New Characters</button>
        </div>
    )
}
