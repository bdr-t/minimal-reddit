import {useState, useEffect} from 'react'
import axios from 'axios'
import { ProfileContainer, ProfileName} from '../styledComponents'
import { format, parseISO,fromUnixTime } from 'date-fns'



const MyProfile = ({name}) => {
    const [data, setData] = useState()
    

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
    

    console.log(data)

    return (  
        <>
        {!data && <div className="a">'loading'</div> }
        {data && <ProfileContainer style={{width:'100%', marginTop:'50px', display:'flex'}}>
            <img height='300px' width='auto'src={img} alt=""/>
            <div className="a" style={{padding:'1em'}}>
                <ProfileName>{data.subreddit.display_name_prefixed}</ProfileName>
                <div className="karam-created" style={{display:'flex', gap:'4em', padding:'1em 0'}}>
                    <div className="karma">
                        <h3>{data.total_karma} karma </h3>
                    </div>
                    <div className="creaated">
                        <h3>Created <span style={{color:'red'}}>{date}</span></h3>
                    </div>
    
                </div>
                <div className="button" style={{textAlign:'center', padding:'1em', backgroundColor:'red', borderRadius:'20px', marginTop:'2em', cursor: 'pointer' }}>
                        <h3>Log Out</h3>
                    </div>
            </div>
         
            
        </ProfileContainer>}
        </>
    );
}
 
export default MyProfile;