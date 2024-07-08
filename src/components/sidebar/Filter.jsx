const Filter = ({ handler, filter }) => {
  return (
    <div className="sidebar-content">
      <h4>Filter</h4>
      <div className="radio-group">
        {/* <!-- handle filter on button click --> */}
        <div>
          <input
            type="radio"
            name="filter"
            id="lws-all"
            value="all"
            checked={filter === "all"}
            className="radio"
            onChange={handler}
          />
          <label htmlFor="lws-all">All</label>
        </div>
        <div>
          <input
            type="radio"
            name="filter"
            id="lws-saved"
            className="radio"
            value="saved"
            checked={filter === "saved"}
            onChange={handler}
          />
          <label htmlFor="lws-saved">Saved</label>
        </div>
      </div>
    </div>
  );
};

export default Filter;
