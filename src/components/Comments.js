import useComments from "../actions/useComments";

const Comments = ({postId}) => {

    console.log('rendering comments with id ' + postId)
    

    const {comments, status } = useComments(postId)

    let content = 'loading'

    if(status === 'succeded'){
        content = comments.map(comment=>{
            return <div key={comment.id}>{comment.body}</div>
        })
        console.log(content)
    }
    console.log(status)
    console.log(comments)
    return ( 
        <div>
            {content}
        </div>
        
    );
}
 
export default Comments;