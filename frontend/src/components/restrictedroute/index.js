import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'

const RestrictedRoute = ({ component: Component, ...rest }) => {

  const { authenticated } = useSelector(state => state.auth)

  return (
    <Route {...rest} render={ 
      props => authenticated
        ? (<Component {...props} />) 
        : (<Redirect to={{ pathname: '/', state: { from: props.location } }} />) 
    } />
  )
}

export default RestrictedRoute