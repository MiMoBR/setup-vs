import React from 'react'
// import { navigate } from "gatsby"

// import { isSignedIn } from '@services/auth/service-sign-experition'
// import { verifyPermission } from '@services/auth/verify'

const PublicRoute = ({
  component: Component,
  location,
  permission,
  ...rest
}) => {
  // const isAuthenticated = isSignedIn() --- USE THIS ON PRIVATE

  // if (permission && isAuthenticated && !verifyPermission([permission])) {
  //   navigate('/private/dashboard')
  //   return null
  // }

  // if (!isAuthenticated) {
  //navigate("/");
  //   return null;
  // }

  return <Component {...rest} />
}

export default PublicRoute
