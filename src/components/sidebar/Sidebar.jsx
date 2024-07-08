import { useEffect, useState } from "react";
import Filter from "./Filter";
import Sort from "./Sort";
import { useDispatch } from "react-redux";
import { fetchPosts } from "../../features/posts/postsSlice";

const initialState = { sort: "", filter: "all" };

const Sidebar = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState(initialState);
  const { sort, filter } = query || {};

  const handleChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    setQuery((prevQuery) => {
      return { ...prevQuery, [name]: value };  // Fixed this line
    });
  };

  useEffect(() => {
    let queryString = "";

    if (sort === "newest") queryString += "_sort=createdAt&_order=desc";
    if (sort === "most_liked") queryString += "_sort=likes&_order=desc";
    if (filter === "all") queryString += "";
    if (filter === "saved") queryString += "&isSaved=true";

    dispatch(fetchPosts(queryString));
  }, [dispatch, sort, filter]);

  return (
    <aside>
      <div className="sidebar-items">
        <Sort handler={handleChange} sort={sort} />
        <Filter handler={handleChange} filter={filter} />
      </div>
    </aside>
  );
};

export default Sidebar;
