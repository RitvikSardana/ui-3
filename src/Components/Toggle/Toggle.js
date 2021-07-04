import React from 'react'
import './Toggle.css'
function Toggle() {
    return (
        <div>
            <label className='toggle'>
                <input type='checkbox' />
                <span className='slider'/>
            </label>
        </div>
    )
}

export default Toggle
