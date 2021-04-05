import {Input} from '../styledComponents'
import TrendingCommunities from './TrendingCommunities'
import {useParams} from 'react-router-dom'
import SubRedditInfo from './SubRedditInfo'
const ThirdPart = () => {
    const {subReddit} = useParams()
    

    return ( 
        <div style={{display: 'grid', gridTemplateRows:'60px auto', gap:'50px', height: '100vh', position:'sticky', top:'0'}}>
            <Input/>
            {!subReddit && <TrendingCommunities/>}
            {subReddit && <SubRedditInfo/>}
            
        </div>
     );
}
 
export default ThirdPart;