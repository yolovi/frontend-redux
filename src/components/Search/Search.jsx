import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getPostByName } from "../../features/post/postSlice";
import Post from "../Post/Post";

const Search = () => {
  const { postName } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostByName(postName));
    console.log(postName);
  }, [postName]);
  return (
    <div>
      <Post />
    </div>
  );
};

export default Search;
