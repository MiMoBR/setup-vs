import React from 'react'

const Footer = () => {

  const AppFooter = () => {
    return (
      <div>
        <small>&copy; Reinaldo Nani - 2015 - {new Date().getFullYear()}</small>
      </div>
    )
  }
    return(
      <footer>
        <AppFooter/>
      </footer>
    )
}

export default Footer
