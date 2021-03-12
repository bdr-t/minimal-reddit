import {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import { fetchToken } from '../../redux/slices/authorizationSlice';



const Callback = () => {
    const code = window.location.search.match(/code=([^&]*)/)[1];
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchToken(code))

    },[code, dispatch])

    return ( 
        <div>
            <h1>LOGING IN</h1>
        </div>
     );
}
 
export default Callback;