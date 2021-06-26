import React from 'react'


export default function Navigation({ nextProfile, previousProfile }) {

    const backButtonHandler = (e) => {
        previousProfile()
    }

    const nextButtonHandler = (e) => {
        nextProfile()
    }

    return (
        <div className="navigation arrows">
            <div className="arrow-1">
                <i className="material-icons backArrow" onClick={backButtonHandler}>
                    arrow_back
                </i>
            </div>
            <div className="arrow-2">
                <i className="material-icons forwardArrow" onClick={nextButtonHandler}>
                    arrow_forward
                </i>
            </div>
        </div>
    )
}
