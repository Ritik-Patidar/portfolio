import React from 'react'

const Toggle = (props) => {
    const { onChange, checked } = props ;
    return (
        <>
            <div>
                <input type="checkbox" id="switch" onChange={onChange} checked={checked} />
                <div className="container">
                    <div class="content w-16">
                        <label for="switch">
                            <div class="toggle"><div class="crescent"></div></div>
                        </label>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Toggle;