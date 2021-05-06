import React from 'react'
import { Link } from 'react-router-dom'

const UserItem = ({user:{avatar_url,html_url,login}}) => {
   
    
        return (
            <div className="card ">
                <img src={avatar_url} alt="Github" />
                <h3><b>{login}</b></h3>
                <button ><Link to={`/users/${login}`}>More</Link> </button>
            </div>
        )
    
}

export default UserItem
