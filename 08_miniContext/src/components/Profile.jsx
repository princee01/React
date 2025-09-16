import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const { user } = useContext(UserContext);
    const {pass} =useContext(UserContext)
     
    if (!user) return <div>please login</div>
    return( <>
        <div>welcome {user.username}</div>
        <div>your password is { pass.password}</div>
    </>
    )

}

export default Profile
