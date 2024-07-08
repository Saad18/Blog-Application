import { useDispatch, useSelector } from "react-redux";
import RelatedPostListItem from "./RelatedPostListItem";
import { useEffect } from "react";
import { fetchRelatedPosts } from "../../features/relatedPosts/relatedPostsSlice";
import Loading from "../ui/Loading";

const RelatedPostList = ({ currentPostId, tags }) => {
  const dispatch = useDispatch();
  const { relatedPosts, isLoading, isError, error } = useSelector(
    (state) => state.relatedPosts
  );
  // console.log(relatedPosts);
  useEffect(() => {
    dispatch(fetchRelatedPosts({ tags, id: currentPostId }));
  }, [dispatch, tags, currentPostId]);


  // decide what to render
  let content = null;

  if (isLoading) content = <Loading />;
  if (!isLoading && isError) {
    content = <div className="col-span-12">{error}</div>;
  }
  if (!isLoading && !isError && relatedPosts?.length === 0) {
    content = <div className="col-span-12">Related posts not found!</div>;
  }
  if (!isLoading && !isError && relatedPosts?.length > 0) {
    content = relatedPosts.map((post) => (
      <RelatedPostListItem key={post.id} post={post} />
    ));
  }

  return (
    <aside>
      <h4 className="mb-4 text-xl font-medium" id="lws-relatedPosts">
        Related Posts
      </h4>
      {content}
    </aside>
  );
};

export default RelatedPostList;
