import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
function SignUp() {
const [formData, setFormData] = useState({})
const [error, setError] = useState(false)
const [loading, setLoading] = useState(false)

const handleChange = (e)=> {
setFormData( {...formData, [e.target.id]: e.target.value})


}

const handleSubmit = async (e)=> {
  e.preventDefault()

try { 
  setLoading(true)
  const res = await fetch('/api/auth/signup', {
    method: "POST",
    headers: {
      'content-Type': 'application/json',
    },
    body: JSON.stringify(formData)
  } )
  const data = await res.json()
  setLoading(false)
if (data.error) {
  setError(true)
  return
}
setError(false)
  
} catch (error) {
  setLoading(false)
  // setError(true)
}

 
 
  
}

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign up</h1>


<form onSubmit={handleSubmit} action="" className='flex flex-col gap-4'>
  <input type="text" placeholder='Username' id='username' className='bg-slate-100 p-3 rounded-lg'
  onChange={handleChange}/>
  <input type="email" placeholder='Email' id='email' className='bg-slate-100 p-3 rounded-lg'
  onChange={handleChange}/>
  <input type="password" placeholder='Password' id='password' className='bg-slate-100 p-3 rounded-lg'
  onChange={handleChange}/>
  <button disabled={loading} className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:pacity-95 disabled:opacity-80'>{loading? 'Loading....' : 'Sign up'}</button>
</form>
<div className='flex gap-2 mt-5'>
  <p>Have an account?</p>
  <Link to='/signin'>
  <span className='text-blue-500'>Sign in</span>
  </Link>
</div>

<p className='text-red-700 mt-5'>{error && "something went wrong!"}</p>
    </div>
  )
}

export default SignUp