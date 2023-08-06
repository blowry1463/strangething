import {useState} from 'react'
const cohortName = '2306-ftb-et-web-ft'
const baseUrl = `https://strangers-things.herokuapp.com/api/${cohortName}`
function Authenticate({token}) {
    const [successMessage, setSuccessMessage] = useState(null)
    const [error, setError] = useState(null)
  
    async function handleCick() {
        try {
            const response = await fetch(`${baseUrl}/authenticate`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            })
          const responseData = await response.json()
          console.log(responseData)
          setSuccessMessage(`Hello, ${responseData.data.username}`)
        } catch (error) {
            setError(error.message);
        }
    }
 return <>
 <h2>Login</h2>
  
 {(successMessage) ? <p>{successMessage}</p>: <></> }

 {successMessage && <p>{successMessage}</p>}
 {error && <p>{error}</p>}
<button onClick={handleClick}>Login</button>
      </>

}
export default Authenticate