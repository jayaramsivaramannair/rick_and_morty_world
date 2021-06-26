import React, { useContext, useState } from 'react'
import NameContainer from './NameContainer.js'
import ImageContainer from './ImageContainer.js'
import Navigation from './Navigation.js'
import Profile from './Profile.js'
import { ProfilesContext } from '../App.js'

export default function Display() {

    const profilesFromContext = useContext(ProfilesContext)
    const [currentProfile, setCurrentProfile] = useState(0)
    const profileLength = profilesFromContext.profiles.profiles.length
    const allProfiles = profilesFromContext.profiles.profiles

    if (!Array.isArray(allProfiles) || allProfiles.length <= 0 || profilesFromContext.profiles.loading) {
        return (
            <div>
                <div className="ui segment container">
                    <div className="ui active dimmer">
                        <div className="ui large text loader">Wubba Lubba Dub Dub</div>
                    </div>
                </div>
            </div>
        )
    }


    const nextProfile = () => {
        setCurrentProfile(currentProfile === profileLength - 1 ? 0 : currentProfile + 1)
    }


    const previousProfile = () => {
        setCurrentProfile(currentProfile === 0 ? profileLength - 1 : currentProfile - 1)
    }


    const character = allProfiles.filter((profile, index) => {
        let newProfile = ''
        if (index === currentProfile) {
            newProfile = profile
        }
        return newProfile
    })


    return (
        <div className="container">
            <NameContainer character={character[0]} />
            <ImageContainer character={character[0]} />
            <Navigation nextProfile={nextProfile} previousProfile={previousProfile} />
            <Profile character={character[0]} />
        </div>
    )
}
