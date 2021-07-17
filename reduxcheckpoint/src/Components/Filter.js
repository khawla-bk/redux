import React from "react";
import { Filtered } from "../Actions/Actions";
import { useDispatch } from "react-redux";

const FilterTasks = () => {
  const dispatch = useDispatch();
  const handleChange = (e) => dispatch(Filtered(e.target.value));

  return (
    <form className="filter">
      <input
        type="radio"
        name="filter-tasks"
        value="all"
        onChange={handleChange}
      />
      <label>All</label>

      <input
        type="radio"
        name="filter-tasks"
        value="done"
        onChange={handleChange}
      />
      <label> Done </label>
      <input
        type="radio"
        name="filter-tasks"
        value="undone"
        onChange={handleChange}
      />
      <label>Incomplete</label>
    </form>
  );
};

export default FilterTasks;
