import React,{ useState,useContext }  from 'react'
import GithubContext from '../context/github/githubContext'
import AlertContext from '../context/alert/alertContext'

const Search = () => {

    const githubContext = useContext(GithubContext)
    const {setAlert} = useContext(AlertContext)
    const[text,setText] = useState('')

  const onSubmit = e => {
        e.preventDefault()
        if(text === ''){
            setAlert("Please enter A name",'danger')
        }
        else{
            githubContext.searchUsers(text);
            setText('')
        }
       
    }

    const onChange = e => {
        setText(e.target.value)
    }
        return (
            <div>
                <form onSubmit={onSubmit}>
                    <input 
                    type="text" 
                    name="text" 
                    placeholder="Search Users..." 
                    value={text}
                    onChange={onChange}
                    />
                    <input type="submit" value="search" className="btn"/>
                </form>
                {githubContext.users.length>0 && <button type="submit" value="clear" className="btn btn-grey" onClick={githubContext.clearUsers}>Clear</button> }
            </div>
        )
    
}

export default Search
