import PropTypes from "prop-types";
import SearchResults from "./SearchResults";
import "./SearchResultsList.css";

const SearchResultsList = ({ results }) => {
  return (
    <div className="results-list">
      {results.map((result, id) => {
        return <SearchResults result={result} key={id} />;
      })}
    </div>
  );
};

// PropTypes ile results propunun türünü tanımlayın
SearchResultsList.propTypes = {
  results: PropTypes.array.isRequired, // results bir dizi olmalı ve bu prop zorunludur.
};

export default SearchResultsList;
