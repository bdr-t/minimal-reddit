import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Post from './Post';
import Comments from './Comments';
import { Section } from '../styledComponents';
import LogoNav from './LogoNav';
import ThirdPart from './ThirdPart';
import axios from 'axios';
import { useEffect, useState } from 'react';

const PostPage = () => {
  const { id, subReddit } = useParams();
  const token = useSelector((state) => state.authorization.token);
  window.scrollTo(0, 0);
  const [post, setPost] = useState()


  useEffect(() => {
    async function getData() {
      const response = await axios.get(`https://www.reddit.com/r/${subReddit}/comments/${id}.json`).then(response => response.data[0].data.children[0])
      let posta = {
        id: response.data.id,
        author_fullname: response.data.author_fullname,
        comments: response.data.num_comments,
        author: response.data.author,
        is_video: response.data.is_video,
        media: response.data.media,
        post_id: response.data.name,
        over_18: response.data.over_18,
        link: response.data.permalink,
        selftext: response.data.selftext_html,
        subreddit: response.data.subreddit,
        subreddit_id: response.data.subreddit_id,
        thumbnail: response.data.thumbnail,
        title: response.data.title,
        downs: response.data.downs,
        created: response.data.created_utc,
        ups: response.data.ups,
        url: response.data.url,
        is_gallery: response.data.is_gallery,
        likes: response.data.likes,
        saved: response.data.saved,
        gallery_data: response.data.gallery_data,
      };
      setPost(posta)

    }
    getData()
  }, []);


  return (
    <Section>
      <LogoNav />
      <div>
        {post && <Post postId={id} token={token} postFetched={post}></Post>}
        {post && <Comments postId={id} />}
      </div>
      <ThirdPart />
    </Section>
  );
};

export default PostPage;
