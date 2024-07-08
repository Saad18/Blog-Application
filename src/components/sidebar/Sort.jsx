const Sort = ({ handler, sort }) => {  // Changed 'Sort' to 'sort'
  return (
    <div className="sidebar-content">
      <h4>Sort</h4>
      <select
        name="sort"
        id="lws-sort"
        className="w-full max-w-[150px] border-2 rounded-md text-gray-500"
        value={sort}  // Changed 'Sort' to 'sort'
        onChange={handler}
      >
        <option value="">Default</option>
        <option value="newest">Newest</option>
        <option value="most_liked">Most Liked</option>
      </select>
    </div>
  );
};

export default Sort;
