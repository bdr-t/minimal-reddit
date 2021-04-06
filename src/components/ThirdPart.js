import {Input} from '../styledComponents'
import TrendingCommunities from './TrendingCommunities'
import {useParams} from 'react-router-dom'
import SubRedditInfo from './SubRedditInfo'
import {useSelector} from 'react-redux'
const ThirdPart = () => {
    const {subReddit} = useParams()
    const token = useSelector((state) => state.authorization.token);
    
    

    return ( 
        <div style={{display: 'grid', gridTemplateRows:'60px auto', gap:'50px', height: '100vh', position:'sticky', top:'0'}}>
            <Input/>
            {!subReddit && <TrendingCommunities/>}
            {subReddit && token && <SubRedditInfo/>}
            
        </div>
     );
}
 
export default ThirdPart;