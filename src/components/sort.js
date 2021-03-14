import styled from 'styled-components'

const Button = styled.button`
    paddding: 20px;
    background-color: grey;

`

const Sort = () => {
    return (
        <div>
            <Button>HOT</Button>
            <Button>NEW</Button>
            <Button>TOP</Button>
            <Button>RISING</Button>
        </div>
    );
}
 
export default Sort;