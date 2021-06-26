import React from 'react'

export default function ImageContainer({ character }) {
    return (
        <div className="imageContainer">
            <img alt={character.name} src={character.image} />
        </div>
    )
}
