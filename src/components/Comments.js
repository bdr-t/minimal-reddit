import useComments from "../actions/useComments";
import Comment from "./Comment";
import {Container} from "../styledComponents"

const Comments = ({postId}) => {


    const {comments, status} = useComments(postId)

    
    let content = 'loading'
    if (status === 'succeded'){
        content = comments.map(x=> <Comment author={x.author} id={x.id} body={x.body_html} replies={x.replies.data} created={x.created_utc}></Comment> )
    }

    return ( 
        <Container >
            {content}
        </Container>
        
    );
}

export default Comments;