import {useState, useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {fetchPosts} from '../api/exports'

function AllPosts() {
    const [allPosts, setAllPosts] = useState([])
    const navigate = useNavigate();

    useEffect(()=> {
        async function fetchData() {
            setAllPosts(await fetchPosts())
        }
        fetchData()
    }, [])

    console.log(AllPosts)

    return <>
      
      {/* {data.map((p, index)=>   
    <div key={index}
    className='posts'
    onClick={() => navigate(`/${p.title}`)}>
     <h3>{p.title}</h3>
    </div>)
    }*/}
  </>
}

export default AllPosts