import React from "react";
import PropTypes from "prop-types";
import LogHello from "./LogHello";

const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <input
      type="text"
      placeholder="Search by username"
      value={searchTerm}
      onChange={(e) => onSearchChange(e.target.value)}
    />
  );
};

SearchBar.propTypes = {
  searchTerm: PropTypes.string,
  onSearchChange: PropTypes.func,
};

export default LogHello(SearchBar, { componentDisplayName: "SearchBar" });
