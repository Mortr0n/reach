import React, { useState } from "react";
import { Link } from '@reach/router'



const DisplayAll = (props) => {

    const { countryList, setCountryList } = props;
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState("");

    const reviewHandler = (e, country) => {
        country.review = e.target.value;
        setReview(e.target.value);
    }

    const ratingHandler = (e, country) => {
        country.rating = e.target.valueAsNumber;
        setRating(e.target.valueAsNumber);
    }

    const propsHandler = (country) => {
        // send to one link if rating and review present 
        if (country.rating && country.review) {
            return (
                <Link to={`/country/${country.alpha2Code}/${country.rating}/${country.review}`}>
                    <p>Name : {country.name}</p>
                </Link>
            )
        } else if (country.rating) {
            // do this link if only rating present
            return (
                <Link to={`/country/${country.alpha2Code}/${country.rating}`}>
                    <p>Name : {country.name}</p>
                </Link>
            )
        } else {
            // if neither review nor rating go to this one
            return (
                <Link to={`/country/${country.alpha2Code}`}>
                    <p>Name : {country.name}</p>
                </Link>
            )
        }
    }

    return (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
            {
                countryList.map((country, index) => (
                    <div key={index} style={{ margin: "15px", padding: "41px", border: "2px double blue" }}>
                        {/* determines the link to be shown */}
                        {
                            propsHandler(country)
                        }
                        <label htmlFor="rating">Please leave a rating:</label>
                        <input type="number" onChange={(e) => ratingHandler(e, country)} />
                        <br />
                        {/* review only shows if rating has been set */}
                        {
                            country.rating ?
                                <div style={{ marginTop: "10px" }}>
                                    <label htmlFor="review">Leave a review (Optional):</label>
                                    <br />
                                    <textarea type="text" onChange={(e) => reviewHandler(e, country)} />
                                </div>
                                : null
                        }

                        <p>Country Code : {country.alpha2Code}</p>
                        <p>Population: {country.population}</p>
                        <img style={{ width: "60px" }} src={country.flag} alt="Country Flag" />
                    </div>
                ))
            }
        </div>
    )
}

export default DisplayAll;