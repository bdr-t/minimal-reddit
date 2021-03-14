import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Button = styled.button`
    paddding: 20px;
    background-color: lighgrey;
`

const Sort = () => {
    return (
        <div>
            
            <Button onClick={()=> window.location.href='/hot'}>Hot</Button>
            <Button onClick={()=> window.location.href='/new'}>New</Button>
            <Button onClick={()=> window.location.href='/top'}>Top</Button>
            <Button onClick={()=> window.location.href='/raising'}>Raising</Button>
        
        </div>
    );
}
 
export default Sort;