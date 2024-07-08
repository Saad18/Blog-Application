import { useDispatch } from "react-redux";
import {
  toggleSavedAsync,
  updateLikesAsync,
} from "../../features/post/postSlice";

const PostDescription = ({ post }) => {
  const dispatch = useDispatch();

  const { id, title,tags, likes, isSaved, description } = post;
  console.log(`tag: ${tags}`);
  const handleLike = () => {
    dispatch(updateLikesAsync({ id, likes }));
  };

  const handleSave = () => {
    dispatch(toggleSavedAsync({ id, isSaved }));
  };

  return (
    <div>
      <h1 className="mt-6 text-2xl post-title" id="lws-singleTitle">
        {title}
      </h1>
      <div className="tags" id="lws-singleTags">
         <span>{tags?.map((tag) => `#${tag}`).join(", ")}</span>
      </div>
      <div className="btn-group">
        <button className="like-btn" id="lws-singleLinks" onClick={handleLike}>
          <i className="fa-regular fa-thumbs-up"></i> {likes}
        </button>
        <button
          className={`save-btn ${isSaved ? "active" : ""}`}
          id="lws-singleSavedBtn"
          onClick={handleSave}
        >
          <i className="fa-regular fa-bookmark"></i>
          {!isSaved ? "Save" : "Saved"}
        </button>
      </div>
      <div className="mt-6">{description}</div>
    </div>
  );
};

export default PostDescription;
