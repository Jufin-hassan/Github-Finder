import React,{useReducer} from 'react'
import axios from 'axios'
import GithubContext from './githubContext'
import githubReducer from './githubReducer'
 import {
    SEARCH_USERS,
    GET_REPOS,
    GET_USER,
    SET_LOADING,
    CLEAR_USER
 } from '../types'

 let githubClienId;
 let githubCLientSecret;

 if(process.env.NODE_ENV !== 'development'){
   githubClienId=process.env.REACT_APP_GITHUB_CLIENT_ID
   githubCLientSecret=process.env.REACT_APP_GITHUB_CLIENT_SECRET
 }else{
   githubClienId=process.env.GITHUB_CLIENT_ID
   githubCLientSecret=process.env.REACT_APP_GITHUB_CLIENT_SECRET
 }

 const GithubState = props => {
     const initialState ={
         users:[],
         user:{},
         repos:[],
         loading:false
     }

     const [state,dispatch] = useReducer(githubReducer,initialState)


      //searching for the users
  const searchUsers = async text => {
    setLoading()
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${githubClienId}&client_secret=${githubCLientSecret}`)
    dispatch({type:SEARCH_USERS,payload:res.data.items})
    
  }

   //clearing the users 
   const clearUsers = () => {
    setLoading()
    dispatch({type:CLEAR_USER})
  }



  //specific user
  const getUser = async userName => {
    setLoading()

    const res = await axios.get(`https://api.github.com/users/${userName}?client_id=${githubClienId}&client_secret=${githubCLientSecret}`)
    dispatch({type:GET_USER,payload:res.data})
  }

  //specific user repos
  const getUserRepos = async userName => {
    setLoading()

    const res = await axios.get(`https://api.github.com/users/${userName}/repos?per_page=5&sortcreated:asc&client_id=${githubClienId}&client_secret=${githubCLientSecret}`)
    dispatch({type:GET_REPOS,payload:res.data})
  }

//   set loading
const setLoading = () =>  dispatch({type:SET_LOADING})



   return  <GithubContext.Provider 
                value={{
                    user:state.user,
                    users:state.users,
                    repos:state.repos,
                    loading:state.loading,
                    searchUsers,
                    clearUsers,
                    getUser,
                    getUserRepos
                }}>
        {props.children}
     </GithubContext.Provider>

 }

 export default GithubState;