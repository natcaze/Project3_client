import React from 'react'
import {Link} from 'react-router-dom';

function ContactUs() {
  return (
    <div>
    <div className='Gabriela'>
    {/* <img></img> */}
    <h3>Gabriela Meirelles</h3>
    <Link to='https://www.linkedin.com/in/gabriela-meirelles-martins/'>LinkedIn</Link>
    <Link to='https://github.com/gabimeirellesm'>Github</Link>
    <h5>Email: gb.meirellesmartins@gmail.com</h5>
    </div>
    <div className='Nathalie'>
    {/* <img></img> */}
    <Link to='https://www.linkedin.com/in/nathalie-cazemajou/'>LinkedIn</Link>
    <Link to='https://github.com/natcaze'>Github</Link>
    <h5>Email: nat.caze@gmail.com</h5>
    </div>
    </div>
  )
}

export default ContactUs