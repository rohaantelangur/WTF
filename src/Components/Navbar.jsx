import React from 'react'

export const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg pl-5 pr-5 navbar-light  sticky-top" style={{backgroundColor:"black"}}>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <a className="navbar-brand" href="/">
    <img src="/img/logo.png" width={"50px"} alt=""/>
  </a>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto ">
      <li className="nav-item">
        <a className="nav-link text-white" href="/">Fitness</a>
      </li>
      <li className="nav-item">
        <a className="nav-link  text-white" href="/">Nutrition</a>
      </li>
      <li className="nav-item active">
        <a className="nav-link  text-white" href="/">Gyms</a>
      </li>
      <li className="nav-item">
        <a className="nav-link  text-white" href="/">Become WTF Partner</a>
      </li>
      <li className="nav-item">
        <a className="nav-link  text-white" href="/">About Us</a>
      </li>
      <li className="nav-item">
        <button className="btn btn-danger">Login</button>
      </li>
    </ul>
  </div>
</nav>
<div className='Navbar-img'>
</div>
    </>
  )
}
