import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { fetchToken } from '../redux/slices/authorizationSlice';
import {Link} from 'react-router-dom'



const Callback = () => {
    const token = useSelector((state) => state.authorization.token);
    const code = window.location.search.match(/code=([^&]*)/)[1];
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchToken(code))

    },[code, dispatch])

    return ( 
        <div>
            <h1>LOGING IN</h1>
            <button >
                <Link to='/'>HOME</Link>
            </button>
        </div>
     );
}
 
export default Callback;