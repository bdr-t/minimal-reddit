import {Input} from '../styledComponents'
import TrendingCommunities from './TrendingCommunities'
const ThirdPart = () => {
    return ( 
        <div style={{display: 'grid', gridTemplateRows:'60px auto', gap:'50px', height: '100vh', position:'sticky', top:'0'}}>
            <Input/>
            <TrendingCommunities/>
        </div>
     );
}
 
export default ThirdPart;