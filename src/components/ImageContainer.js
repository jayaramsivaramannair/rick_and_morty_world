import React from 'react'

export default function ImageContainer({ character }) {
    return (
        <div className="imageContainer">
            {console.log(character.image)}
            <img alt={character.name} src={character.image} />
        </div>
    )
}
