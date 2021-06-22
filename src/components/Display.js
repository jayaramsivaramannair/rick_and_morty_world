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
    console.log(profilesFromContext)



    if (!Array.isArray(allProfiles) || allProfiles.length <= 0) {
        return <div>Loading Results......</div>
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

    console.log(character[0])

    return (
        <div className="container">
            <Navigation nextProfile={nextProfile} previousProfile={previousProfile} />
            <NameContainer character={character[0]} />
            <ImageContainer character={character[0]} />
            <Profile character={character[0]} />
        </div>
    )
}
