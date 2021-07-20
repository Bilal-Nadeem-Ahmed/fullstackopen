import loginService from '../services/login'
import blogService from '../services/blogs'
import { useState } from 'react'
const LoginForm = ({setErrorMessage,setUser}) => {
    const [username, setUsername] = useState('') 
    const [password, setPassword] = useState('')

    const handleLogin = async (event)=>{
        event.preventDefault()
        try{
          const user = await loginService.login({username,password})
          window.localStorage.setItem('loggedNoteappUser',JSON.stringify(user))
          blogService.setToken(user.token)
          setUser(user)
          setUsername('')
          setPassword('')
          setErrorMessage(`successfully logged in ${username}`)
          setTimeout(()=>{
            setUsername('')
            setPassword('')
            setErrorMessage(null)
          },5000)
        } catch(exception){
          setErrorMessage('Wrong Credentials')
          setTimeout(()=>{
            setUsername('')
            setPassword('')
            setErrorMessage(null)
          },5000)
        }
        console.log('logging in with', username)
      }

    return ( 
        <form onSubmit={handleLogin}>
            <div>
                username
                <input
                type = 'text'
                name = 'Username'
                value={username}
                onChange={({target})=>setUsername(target.value)}
                />
            </div>
            <div>
                password
                <input
                type = 'password'
                name = 'Password'
                value={password}
                onChange={({target})=>setPassword(target.value)}
                />
            </div>
            <button type="submit">login</button>
        </form>
     );
}
 
export default LoginForm;