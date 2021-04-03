import useComments from "../actions/useComments";
import Comment from "./Comment";
import {Container} from "../styledComponents"

const Comments = ({postId}) => {


    const {comments, status} = useComments(`https://www.reddit.com/comments/${postId}.json`)

    
    let content = 'loading'
    if (status === 'succeded'){
        content = comments.map(x=> <Comment author={x.author} id={x.id} body={x.body_html} replies={x.replies} created={x.created_utc} permalink={x.permalink}></Comment> )
    }
    window.onscroll = function (ev) {
        if (
          window.innerHeight + window.pageYOffset >=
            document.body.offsetHeight * 0.9
        ) {
          const doNothing = true
        }
      };

    return ( 
        <Container >
            {content}
        </Container>
        
    );
}

export default Comments;