import React, { useState } from "react";
import "./Home.css";
import Header from "../../components/home/header/Header";
import Menu from "../../components/home/menu/Menu";
import Loader from "../../components/common/loader/Loader";
import EmptyList from "../../components/common/emptyList/EmptyList";
import ResultList from "../../components/home/resultList/ResultList";
import Footer from "../../components/home/footer/Footer";
import axios from "axios";
import { pixbayAPI } from "../../config/data";

const Home = () => {
  const [showMenu, setShowMenu] = useState(true);
  const [loading, setLoading] = useState(false);
  const [imageList, setImagesList] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [searchResultsCount, setSearchResultsCount] = useState(20);

  const searchResults = (search) =>{
    setLoading(true);
    setShowMenu(false);

     axios.get(`${pixbayAPI.url}?key=${pixbayAPI.key}&q=${search}&image_type=photo&per_page=${searchResultsCount}&safeSearch=true`).then(res=>{
        setImagesList(res.data.hits)
        setLoading(false)
     }).catch((err) => console.log(err));
  }

  const handleFormSumbit = (e) => {
    e.preventDefault();
    searchResults(searchInput);
  }

  const handleHomeClicked = () => {
    searchInput('');
    setImagesList([]);
    setShowMenu(true);
  }

  const handleMenuItemClicked = (e) => {
    const searchFor = e.target.id;
    setSearchInput(searchFor);
    searchResults(searchFor);
  }
  return (
    <>
      <Header handleHomeClicked={handleHomeClicked} handleFormSumbit={handleFormSumbit} handleInputChange={(e) => setSearchInput(e.target.value)} searchInputValue={searchInput} />

      <main>
        {showMenu && <Menu handleMenuItemClicked={handleMenuItemClicked} />}

        {loading && <Loader />}

        {!showMenu && !loading && !imageList.length ? <EmptyList /> : null}

        {!showMenu && !loading && imageList.length ? (<ResultList images={imageList} />) : null}
      </main>
      <Footer />
    </>
  );
};

export default Home;
