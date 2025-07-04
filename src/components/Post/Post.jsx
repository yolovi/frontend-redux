import { Card } from "antd";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Post = () => {
  const { posts } = useSelector((state) => state.post);

  const post = posts.map((post) => {
    return (
      <Card
        key={post.id}
        title={post.title}
        extra={<Link to={"/id/" + post.id}>More </Link>}
        style={{ width: 300 }}
      >
        <p> {post.content} </p>
      </Card>
    );
  });

  return (
    <div>
      <h3>Post</h3>
      {post}
    </div>
  );
};

export default Post;
