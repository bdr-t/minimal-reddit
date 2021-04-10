import {useState, useEffect} from 'react'
import axios from 'axios'
import { ProfileContainer, ProfileName, KarmaCreated, SpanColor, LogOutBtn} from '../styledComponents'
import {fromUnixTime } from 'date-fns'
import {useHistory} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {logOut} from '../redux/slices/authorizationSlice'



const MyProfile = ({name}) => {
    const [data, setData] = useState()
    const history = useHistory()
    const dispatch = useDispatch()
    
    

    useEffect(()=>{
        async function getData(){
            const dataResponse = await axios.get(`https://www.reddit.com/user/${name}/about.json`)
            .then(res=> res.data.data)
            setData(dataResponse)
        }
        getData()
    },[])

    let img 
    let date
    if(data){
        img = data.snoovatar_img ? data.snoovatar_img : data.icon_img
        date = fromUnixTime(data.created).toUTCString().slice(4,16)
        console.log(date)
        

    }
    

    function handleClick(){
        window.localStorage.removeItem("refreshToken")
        dispatch(logOut())
        history.push("/")
    }

    return (  
        <>
        {!data && <div className="a">'loading'</div> }
        {data && <ProfileContainer>
            <img height='300px' width='auto'src={img} alt=""/>
            <div style={{padding:'1em'}}>
                <ProfileName>{data.subreddit.display_name_prefixed}</ProfileName>
                <KarmaCreated>
                    <div>
                        <h3>{data.total_karma} karma </h3>
                    </div>
                    <div>
                        <h3>Created <SpanColor>{date}</SpanColor></h3>
                    </div>
    
                </KarmaCreated>
                <LogOutBtn onClick={()=>handleClick()}>
                        <h3>Log Out</h3>
                    </LogOutBtn>
            </div>
         
            
        </ProfileContainer>}
        </>
    );
}
 
export default MyProfile;