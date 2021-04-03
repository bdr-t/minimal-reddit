import { useState, useEffect } from "react";
function useComments(link) {
    const [comments,setComments] = useState('')
    const [status, setStatus] = useState('idle')

    useEffect(()=>{
        const fetchData = async () => {
          console.log(link)
            const algo = await fetch(link)
              .then((res) => res.json())
              .then((json) =>
                json[1].data.children.map((data) => {
                  const {
                      author,
                    author_fullname,
                    body_html,
                    created_utc,
                    depth,
                    downs,
                    id,
                    parent_id,
                    permalink,
                    replies,
                    ups,
                    body,
                  } = data.data;
                  let obj = {
                      author,
                    author_fullname,
                    body_html,
                    created_utc,
                    depth,
                    downs,
                    id,
                    parent_id,
                    permalink,
                    replies,
                    ups,
                    body,
                  };
                  return obj;
                })
              );
        
              setComments(algo)
              setStatus('succeded')
          };
        fetchData()  
    },[])
  
  return {comments, status}
}

export default useComments
