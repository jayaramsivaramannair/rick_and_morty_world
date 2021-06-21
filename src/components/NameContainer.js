import React from 'react'

export default function NameContainer({ character }) {
    return (
        <div className="characterName">
            <p>{character.name}</p>
        </div>
    )
}
