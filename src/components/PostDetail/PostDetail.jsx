import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getById } from "../../features/post/postSlice";
import { Card } from "antd";

const PostDetail = () => {
  const dispatch = useDispatch();
  const { post } = useSelector((state) => state.post);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    dispatch(getById(id));
    console.log(post);
  }, []);

  return (
    <Card title={post.title} style={{ width: 300 }}>
      <p> {post.content} </p>
    </Card>
  );
};

export default PostDetail;
