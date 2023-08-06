import {useState} from 'react'
const cohortName = '2306-ftb-et-web-ft'
const baseUrl = `https://strangers-things.herokuapp.com/api/${cohortName}`
function SignInForm({setToken}) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)

    async function handlesubmit(e) {
        e.preventDefault()
      try {
        const response = await fetch('baseUrl/POST/users/login',
        {
            method: 'POST',
            headers:{
                "ContentType": "application/json"
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        }
      )
      const data = await response.json()

      setToken(data.token)
      
      setUsername('')
      setPassword('')

      }catch(err){
        setError(err)
      }
        
    }
  

return <>
    <h2>SignIn</h2>
    <form onSubmit={handleSubmit}>
      <label>Username:
        <input value={username} onChange={e => setUsername(e.target.value)}/>
      </label>
        <input value={password} onChange={e =>setPassword(e.target.value)}/>
    <label>Password:
    <input value={password} onChange={e =>setPassword(e.target.value)}/>
      
    </label>
    <button>Submit</button>


    </form>
</>
}

export default SignInForm