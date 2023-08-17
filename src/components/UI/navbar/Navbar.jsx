import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navbar__links">
            <Link to="/about" style={{margin:10}}>About</Link>
            <Link to="/posts">Posts</Link>
        </div>
      </div>
  )
}

export default Navbar