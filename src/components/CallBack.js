import {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import { fetchToken } from '../redux/slices/authorizationSlice';
import {Link, useHistory} from 'react-router-dom'




const Callback = () => {
    let history = useHistory()
    const code = window.location.search.match(/code=([^&]*)/)[1];
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchToken(code))
        history.push('/')
    },[code, dispatch])

    return ( 
        <div>
            <h1>You are now logged in. You will soon be redirected</h1>
            <button >
                <Link to='/'>HOME</Link>
            </button>
        </div>
     );
}
 
export default Callback;