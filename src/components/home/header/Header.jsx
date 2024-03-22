import React from 'react';
import "./Header.css"
const Header = ({ handleFormSumbit, handleInputChange, handleHomeClicked, searchInputValue }) => 
  (
    <header>
      <div className="header-logo">
        <img src="image/snowForest.jpg" alt="logo" />
      </div>
      <div className="header-rights">
        <p>
            7e Edition <br /> - srikanthstyles@gmail.com
        </p>
      </div>
      <form onSubmit={handleFormSumbit} >
        <div className="header-search">
            <input value={searchInputValue} type="text" required onChange={handleInputChange} />
            <button className='search-icon'>
                <i className="fas fa-search" onClick={handleHomeClicked}></i>
            </button>
        </div>
      </form>
      <div className="header-home">
        <i className="fas fa-home"></i>
      </div>
    </header>
  );


export default Header;
