import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {User} = useContext(UserContext)
    
    if (!User) return <div>please login</div>

    return <div>Welcome {User.username}</div>
}

export default Profile