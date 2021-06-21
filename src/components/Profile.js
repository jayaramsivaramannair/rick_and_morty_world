import React from 'react'

export default function Profile({ character }) {
    return (
        <div className="profile">
            <div className="tab tab-1">Gender: {character.gender}</div>
            <div className="tab tab-2">Species: {character.species}</div>
            <div className="tab tab-3">Location: {character.location.name}</div>
            <div className="tab tab-4">Origin: {character.origin.name}</div>
            <div className="tab tab-5">Status: {character.status}</div>
        </div>
    )
}
