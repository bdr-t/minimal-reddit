import {useParams} from 'react-router-dom'
import {SortingElement, Sorting, LinkedSort} from '../styledComponents'



const Sort = () => {
    const {subReddit} = useParams()


    return (
        <Sorting>
            

            <SortingElement><LinkedSort to={subReddit ? `/r/${subReddit}/new` : `/new`}> New </LinkedSort></SortingElement>
            <SortingElement><LinkedSort to={subReddit ? `/r/${subReddit}/hot` : `/hot`}> Hot </LinkedSort></SortingElement>
            <SortingElement><LinkedSort to={subReddit ? `/r/${subReddit}/top` :`/top`}> Top </LinkedSort></SortingElement>
            <SortingElement><LinkedSort to={subReddit ? `/r/${subReddit}/rising` : `/rising`}> Raising </LinkedSort></SortingElement>
        
        </Sorting>
    );
}
 
export default Sort;