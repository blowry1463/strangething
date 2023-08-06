import {useState, useEffect} from 'react'
import {useParams } from 'react-router-dom'
import {Link} from 'react-router-dom'

function SelectedPost() {
    const [post, setSelectedPost] = useState({})
    const {name} = useParams(

    useEffect(()=>{
        async function fetchData() {
          const response= await fetch(`${baseUrl}/posts/:title`)
          const data = await response.json()
        }
        fetchData()

        console.log('Use Effect')
    })
    )
}

export default SelectedPost