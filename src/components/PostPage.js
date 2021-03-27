
import {useParams} from 'react-router-dom' 
import {useSelector} from 'react-redux'
import Post from "./Post";
import Comments from "./Comments";

const PostPage = () => {
    const {id} = useParams()
    const token = useSelector((state) => state.authorization.token);
    
    
    return (  
        <>
        <Post postId={id} token={token}></Post>
        <Comments postId={id}/>
        </>
    );
}
 
export default PostPage;
