import React, { useState } from 'react'
import {connect} from 'react-redux';
import NameContainer from './NameContainer.js'
import ImageContainer from './ImageContainer.js'
import Navigation from './Navigation.js'
import Profile from './Profile.js'

function Display({loading, profiles}) {

    const [currentProfile, setCurrentProfile] = useState(0)
    const profileLength = profiles.length
    const allProfiles = profiles

    if (!Array.isArray(allProfiles) || allProfiles.length <= 0 || loading) {
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

const mapStateToProps = (state) => {
    return {
        loading: state.profiles.loading,
        profiles: state.profiles.profiles,
    }
}

export default connect(mapStateToProps, null)(Display)
