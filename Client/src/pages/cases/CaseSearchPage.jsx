import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom'; 

const CaseSearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  // const history = useHistory();

  const handleSearch = (e) => {
    e.preventDefault();
    
    // Perform any necessary validation of the search term here
    
    // Navigate to the case details page with the search term as a URL parameter
    // history.push(`/case-details?search=${searchTerm}`);
  };

  return (
    <div className="case-search">
      <h1>Case Search</h1>
      <form onSubmit={handleSearch}>
        <label>
          Enter Case Number or Case Verdict:
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Case Number or Verdict"
            required
          />
        </label>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default CaseSearchPage;
