import React, { useState } from 'react'

const HoveringCard = ({ project, visible }) => {
    return (
        <div>
            <div className="card">
                <div onClick={() => {
                    setVisibility(false)
                }}><ion-icon name="close" /></div>
                <div className="card-body">
                    <h5 className="card-title">{project.tile}</h5>
                    <p className="card-text">{project.desc}</p>
                    <p className="card-text">{project.members.join(',')}</p>
                </div>
            </div>
        </div>
    )
}

export default HoveringCard