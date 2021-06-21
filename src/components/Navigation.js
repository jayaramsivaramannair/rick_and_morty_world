import React from 'react'

export default function Navigation({ nextProfile, previousProfile }) {

    const backButtonHandler = (e) => {
        console.log('back button clicked!')
        previousProfile()
    }

    const nextButtonHandler = (e) => {
        console.log('next button clicked!')
        nextProfile()
    }

    return (
        <div className="navigation">
            <div className="arrows">
                <i className="material-icons backArrow" onClick={backButtonHandler}>
                    arrow_back
                </i>

                <i className="material-icons forwardArrow" onClick={nextButtonHandler}>
                    arrow_forward
                </i>
            </div>
        </div>
    )
}
