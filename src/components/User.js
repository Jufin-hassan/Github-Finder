import React, { Fragment,useContext,useEffect } from 'react'
import Spinner from './Spinner'
import Repos from './Repos'
import { Link } from 'react-router-dom'
import GithubContext from '../context/github/githubContext'

const User = ({match}) => {

    const githubContext = useContext(GithubContext)
    const {getUserRepos,repos,getUser,loading,user} = githubContext
    useEffect(()=>{
        getUser(match.params.login)
        getUserRepos(match.params.login)
        //eslint-disable-next-line
    },[])//there was a error sincee the [] as empty.But if we filled their dependancy it will run into an infinite loop!

        const {
           name,
            avatar_url,
            bio,
            location,
            html_url,
            hireable
        } = user
        if (loading) {
            return <Spinner />
        } else {
            return (
            
                <Fragment className="centerAll">
                <button className="btn btn-grey"><Link  to='/'>Back to search</Link> </button>
                Hireable:{' '}
                {hireable ? (
                    <i className="fas fa-check text-success" />
                ) : (
                    <i className="fas fa-check text-success" />
                )}
                <div className="grid-2  userCard">
                    <div >
                        <img className="imgg" src={avatar_url}  alt="User pic"/>
                        <h2>{name}</h2>
                        <h3>Location:{location}</h3>
    
                    </div>
                    <div>
                        <h2>Bio</h2>
                        <h4>{bio}</h4>
                        <div>
                            <a className="btn btn-dark" href={html_url}>Visit Github Profile</a>
                        </div>
                    </div>
                 </div>
                 <Repos repos={repos} />
            </Fragment>
            )
        }
}

export default User
