import React from 'react'

export default function Profile({ character }) {
    return (
        <div className="profile">
            <h2>{`The Who, the What, and the When: ${character.name}`}</h2>
            <div className="tab tab-1"><span className="label-1">Gender:</span> {character.gender}</div>
            <div className="tab tab-2"><span className="label-2">Species:</span> {character.species}</div>
            <div className="tab tab-3"><span className="label-3">Location:</span> {character.location.name}</div>
            <div className="tab tab-4"><span className="label-4">Origin:</span> {character.origin.name}</div>
            <div className="tab tab-5"><span className="label-5">Status:</span> {character.status}</div>
        </div>
    )
}
