import React from 'react'

const Profile = () => {
    const styles = {
        pic: {
            backgroundImage: `${require('../resources/pictures/Icons/Finals/PNG/SP-Icons_ALT-OC-LT-Base.png')}`,
            backgroundSize: 'cover'
        }
    }
    return (
        <div>
            
            <i className="fas fa-user fa-2x"></i>
        </div>
    )
}

export default Profile

{/* <img src={require('../resources/pictures/Icons/Finals/PNG/SP-Icons_ALT-OC-LT-Base.png')} width='50px'></img> */}