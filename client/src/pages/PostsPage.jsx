import Post from '../components/Post';
import { useEffect, useState } from 'react';
import { getPosts } from '../axios';

function PostsPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const es = new EventSource('http://localhost:5001/posts/stream');
    es.onmessage = (e) => {
      setPosts(JSON.parse(e.data));
    };

    es.addEventListener('close', (e) => {
      console.log(e.data);
    });
  }, []);

  return (
    <>
      {posts?.map((post) => {
        return (
          <Post
            key={post._id}
            author={post.authorName}
            title={post.title}
            content={post.content}
          />
        );
      })}
    </>
  );
}
export default PostsPage;