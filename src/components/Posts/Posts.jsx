import { useEffect } from "react";
import Post from "../Post/Post";
import { useDispatch, useSelector } from "react-redux";
import { getAll } from "../../features/post/postSlice";
import { Spin } from "antd";

const Posts = () => {
  const { isLoading } = useSelector((state) => state.post);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAll());
  }, []);

  if (isLoading) {
    return <Spin />;
  }

  return (
    <div>
      <h3>Posts Padre</h3>
      <Post />
    </div>
  );
};

export default Posts;
