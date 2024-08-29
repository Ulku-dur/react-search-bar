import PropTypes from "prop-types";
import "./SearchResult.css";

export const SearchResults = ({ result }) => {
  return (
    <div className="search-result" onClick={() => alert(`You clicked on ${result.name}`)}>
      {result.name}
    </div>
  );
};

// PropTypes ile result propunun türünü tanımlayın
SearchResults.propTypes = {
  result: PropTypes.shape({
    name: PropTypes.string.isRequired, // result nesnesinin name adında bir zorunlu string özelliği olmalıdır.
  }).isRequired,
};

export default SearchResults;
