import { FOODIMAGE_URL } from "../utils/constants";
import { CLOUDINARY_URL } from "../utils/constants";
const RestuarantCard = (props) => {
    const { name, cuisines, avgRating, cloudinaryImageId } = props.resData.info;
    console.log(name, cuisines, avgRating);
    return (
        <div className="res-card" >
            <img
                className="res-logo"
                alt="res logo"
                src={CLOUDINARY_URL + cloudinaryImageId}
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(",")} </h4>
            <h4>{avgRating}</h4>
            <h4>38 minutes</h4>
        </div>
    );
};
export default RestuarantCard;
