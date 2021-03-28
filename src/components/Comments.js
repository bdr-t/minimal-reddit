import useComments from "../actions/useComments";
import Comment from "./Comment";

const Comments = ({postId}) => {


    const {comments, status} = useComments(postId)

    
    let content = 'loading'
    if (status === 'succeded'){
        content = comments.map(x=> <Comment author={x.author} id={x.id} body={x.body}></Comment> )
    }

    return ( 
        <div styles={{padding: '1em', borderLeft:'1px solid black'}}>
            {content}
        </div>
        
    );
}

export default Comments;