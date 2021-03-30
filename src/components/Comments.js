import useComments from "../actions/useComments";
import Comment from "./Comment";
import {Container} from "../styledComponents"

const Comments = ({postId}) => {


    const {comments, status} = useComments(postId)

    
    let content = 'loading'
    if (status === 'succeded'){
        console.log(comments)
        content = comments.map(x=> <Comment author={x.author} id={x.id} body={x.body_html} replies={x.replies} created={x.created_utc}></Comment> )
    }

    return ( 
        <Container >
            {content}
        </Container>
        
    );
}

export default Comments;