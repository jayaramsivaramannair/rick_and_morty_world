import React from 'react'

export default function Profile({ character }) {
    return (
        <div className="profile">
            <div className="tab">Gender: {character.gender}</div>
            <div className="tab">Species: {character.species}</div>
            <div className="tab">Location: {character.location.name}</div>
            <div className="tab">Origin: {character.origin.name}</div>
            <div className="tab">Status: {character.status}</div>

        </div>
    )
}
