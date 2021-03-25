import styled from 'styled-components'
import {Link, useLocation} from 'react-router-dom'


const Button = styled.button`
    padding: 10px;
    background-color: lighgrey;
`

const Enlace = styled(Link)`
text-decoration: none;
color: inherit;

`
const Sort = ({url}) => {
    const location = useLocation()

    console.log(location)

    


    return (
        <div>

            <Button><Enlace to={`${location.pathname}new`}> New </Enlace></Button>
            <Button><Enlace to={`${location.pathname}hot`}> Hot </Enlace></Button>
            <Button><Enlace to={`${location.pathname}top`}> Top </Enlace></Button>
            <Button><Enlace to={`${location.pathname}raising`}> Raising </Enlace></Button>
        
        </div>
    );
}
 
export default Sort;