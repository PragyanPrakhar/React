import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constants";
const RestuarantMenu = () => {
    const [resInfo, setResInfo] = useState(null);
    const { resId } = useParams();
    console.log(resId);
    useEffect(() => {
        fetchMenu();
    }, []);
    const fetchMenu = async () => {
        const data = await fetch(MENU_API + resId);
        // https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.135196&lng=75.850184&restaurantId=104922&catalog_qa=undefined&submitAction=ENTER
        const json = await data.json();
        setResInfo(json.data);
    };
    if (resInfo === null) return <Shimmer />;

    const { name, cuisines, costForTwoMessage } =
        resInfo?.cards[2]?.card?.card?.info;
    const { itemCards } =
        resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
            ?.card;
    // console.log(itemCards);

    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>
                {cuisines.join(",")} - {costForTwoMessage}
            </p>
            <ul>
                {itemCards?.map((item) => (
                    <li key={item.card.info.id}>
                        {item.card.info.name}-Rs.{item.card.info.price / 100}   
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default RestuarantMenu;
