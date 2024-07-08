import { Link } from "react-router-dom";

const Cart = ({ post = {} }) => {
  const { id, title, tags, image, likes, isSaved, createdAt } = post;

  return (
    <div className="lws-card">
      <Link to={`posts/${id}`}>
        <img
          src={image}
          className="lws-card-image"
          alt="Top Github Alternatives"
        />
      </Link>
      <div className="p-4">
        <div className="lws-card-header">
          <p className="lws-publishedDate">{createdAt}</p>
          <p className="lws-likeCount">
            <i className="fa-regular fa-thumbs-up"></i>
            {likes}
          </p>
        </div>
        <Link to="posts/1" className="lws-postTitle">
          {" "}
          {title}
        </Link>
        <div className="lws-tags">
          <span>{tags?.map((tag) => `#${tag}`).join(", ")}</span>
        </div>
        {/* <!-- Show this element if post is saved --> */}
        {
          isSaved ? (<div className="flex gap-2 mt-4">
          <span className="lws-badge"> Save </span>
        </div>) : (null)
        }
        {/* <!-- Show this element if post is saved Ends --> */}
      </div>
    </div>
  );
};

export default Cart;
