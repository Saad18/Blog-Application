import { Fragment, useEffect } from "react";
import ImageViewer from "../components/description/Image";
import PostDescription from "../components/description/PostDescription";
import GoHome from "../components/go-home/GoHome";
import RelatedPostList from "../components/lists/RelatedPostList";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost } from "../features/post/postSlice";
import { useParams } from "react-router-dom";
import Loading from "../components/ui/Loading";

const BlogPost = () => {
  const { post, isLoading, isError, error } = useSelector(
    (state) => state.post
  );
  const dispatch = useDispatch();

  const { postId } = useParams();

  useEffect(() => {
    dispatch(fetchPost(postId));
  }, [dispatch, postId]);

  let content = null;

  if (isLoading) {
    content = <Loading />;
  } else if (isError) {
    content = <div className="loading">{error}</div>;
  } else if (!post) {
    content = <div>No post found!</div>;
  } else {
    const { id, image, tags } = post;

    content = (
      <>
        <main className="post">
          <ImageViewer image={image} id={id} />
          <PostDescription post={post} />
        </main>
        <RelatedPostList currentPostId={id} tags={tags} />
      </>
    );
  }

  return (
    <Fragment>
      <GoHome />
      <section className="post-page-container">{content}</section>
    </Fragment>
  );
};

export default BlogPost;
