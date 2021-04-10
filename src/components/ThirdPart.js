import {Input} from '../styledComponents'
import TrendingCommunities from './TrendingCommunities'
import {useParams} from 'react-router-dom'
import {useSelector} from 'react-redux'
import SubLayer from './SubLayer'
import SubLayerNot from './SubLayerNot'
const ThirdPart = () => {
    const authorization = useSelector(
        (state) => state.authorization.authorization
      );
    const {subReddit} = useParams()
    const token = useSelector((state) => state.authorization.token);
    
    

    return ( 
        <div style={{display: 'grid', gridTemplateRows:'60px auto', gap:'50px', height: '100vh', position:'sticky', top:'0'}}>
            <Input/>
            {!subReddit && <TrendingCommunities/>}
            {subReddit && token && <SubLayer/>}
            {!authorization && subReddit && <SubLayerNot/>}
            
        </div>
     );
}
 
export default ThirdPart;