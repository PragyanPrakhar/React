import RestuarantCard from "./RestuarantCard";
import { useState, useEffect } from "react";
import { BounceLoader } from "react-spinners";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
const Body = () => {
    //local state variable-> super powerful variable
    const [listOfRestaurantsJS, setListOfResturantsJS] = useState([]);
    const [filteredRestuarant, setfilteredRestuarant] = useState([]);

    const [searchText, setSearchText] = useState("");
    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.135196&lng=75.850184&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        // console.log(json);
        setListOfResturantsJS(
            json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
                ?.restaurants
        );
        setfilteredRestuarant(
            json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
                ?.restaurants
        );
    };
    // console.log("Body rendered");
    return listOfRestaurantsJS.length === 0 ? (
        <Shimmer />
    ) : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input
                        type="text"
                        className="search-box"
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }}
                    />
                    <button
                        onClick={() => {
                            //Filter the restuarant cards and update the UI
                            //search text
                            // console.log(searchText);
                            const filteredRestuarant =
                                listOfRestaurantsJS.filter((res) =>
                                    res.info.name
                                        .toLowerCase()
                                        .includes(searchText.toLowerCase())
                                );
                            setfilteredRestuarant(filteredRestuarant);
                        }}
                    >
                        search
                    </button>
                </div>
                <button
                    className="filter-btn"
                    onClick={() => {
                        const filteredList = listOfRestaurantsJS.filter(
                            (res) => {
                                return res.info.avgRating > 4.2;
                            }
                        );

                        setfilteredRestuarant(filteredList);
                    }}
                >
                    Top Rated Restuarants
                </button>
            </div>
            <div className="body">
                <div className="res-container">
                    {filteredRestuarant?.map((restuarant) => (
                        <Link
                            key={restuarant.info.id}
                            to={"/restuarant/" + restuarant.info.id}
                        >
                            <RestuarantCard
                                className="res-card"
                                resData={restuarant}
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default Body;
