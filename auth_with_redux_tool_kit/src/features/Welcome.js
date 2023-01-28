import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser,selectToken } from './auth/authSlice'
import { Link } from 'react-router-dom'

function Welcome() {
    const user=useSelector(selectUser)
    const token=useSelector(selectToken)
   
    const welcome = user ? `welcome ${user}` : 'Welcome!'
    const tokenAbr=`${token.slice(0,9)}......`

    const content=(
        <section>
            <h1>{welcome}</h1>
            <p>Token:{tokenAbr}</p>
            <p><Link to="/check">go to</Link></p>
        </section>
    )
  return content
}

export default Welcome