import { Link } from "react-router-dom";

const RelatedPostListItem = ({ post = {} }) => {
  const { id, image, title, createdAt } = post || {};
  console.log(title);
  // console.log(`created at: ${post}`);
  return (
    <div className="space-y-4 related-post-container">
      <div className="card">
        <Link to={`/posts/${id}`}>
          <img src={image} className="card-image" alt="" />
        </Link>
        <div className="p-4">
          <Link
            to={`/posts/${id}`}
            className="text-lg post-title lws-RelatedPostTitle"
          >
            {title}
          </Link>
          <div className="mb-0 tags">
            <span>#python,</span> <span>#tech,</span> <span>#git</span>
          </div>
          <p>{createdAt}</p>
        </div>
      </div>
    </div>
  );
};

export default RelatedPostListItem;
