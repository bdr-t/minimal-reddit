import styled from 'styled-components'


const Button = styled.button`
    paddding: 20px;
    background-color: lighgrey;
`

const Sort = ({url}) => {





    return (
        <div>
            <Button onClick={() => (window.location.href = url ? `/r/${url}/new` : 'new' )}>New</Button>
            <Button onClick={() => (window.location.href = url ? `/r/${url}/hot` : 'hot')}>Hot</Button>
            <Button onClick={() => (window.location.href = url ? `/r/${url}/top` : 'top')}>Top</Button>
            <Button onClick={() => (window.location.href = url ? `/r/${url}/rising` : 'rising')}>Rising</Button>
        
        </div>
    );
}
 
export default Sort;