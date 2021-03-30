import {useParams} from 'react-router-dom'
import {Button, Linked} from '../styledComponents'



const Sort = () => {
    const {subReddit} = useParams()


    return (
        <div>

            <Button><Linked to={subReddit ? `/r/${subReddit}/new` : `/new`}> New </Linked></Button>
            <Button><Linked to={subReddit ? `/r/${subReddit}/hot` : `/hot`}> Hot </Linked></Button>
            <Button><Linked to={subReddit ? `/r/${subReddit}/top` :`/top`}> Top </Linked></Button>
            <Button><Linked to={subReddit ? `/r/${subReddit}/rising` : `/rising`}> Raising </Linked></Button>
        
        </div>
    );
}
 
export default Sort;