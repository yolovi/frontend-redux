import { Card } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deletePost } from "../../features/post/postSlice";

//mejor naming PostList
const Post = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  //console.log("user", user);
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
        {user?.role == "admin" && (
          <button onClick={() => dispatch(deletePost(post.id))}>
            Eliminar
          </button>
        )}
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
