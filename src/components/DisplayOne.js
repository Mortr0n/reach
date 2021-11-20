import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from '@reach/router';


const DisplayOne = (props) => {
    const { countryCode, rating, review } = props;
    const [thisCountry, setThisCountry] = useState("");

    useEffect(() => {
        axios.get(`https://restcountries.com/v2/alpha/${countryCode}`)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setThisCountry(res.data);
            })
            .catch((err) => console.log(err))
    }, [])

    return (
        <div>
            {
                // this conditional is in case the useEffect fires before there is anything to display
                // he had this problem in class I did not experience this.  It's a good thing to keep an eye on
                // for the future
                thisCountry ?
                    <div>
                        <h1>{thisCountry.name}</h1>
                        <img style={{ width: "250px" }} src={thisCountry.flag} alt={`${thisCountry.name}'s Flag'`} />
                        <p>Capital: {thisCountry.capital}</p>
                        <p>Population: {thisCountry.population}</p>
                        <p>Area in Square Miles: {thisCountry.area}</p>
                        <p>Native Name: {thisCountry.nativeName}</p>
                        <p>Continent: {thisCountry.subregion}</p>
                        {/* if theres a rating show this item. I did the if only one here */}
                        {
                            rating &&
                                <p>Thank you for your rating: {rating} of our Country!</p>
                                
                        }
                        {/* if theres a review show this Ternary example here */}
                        {
                            review ?
                                <p>Your review: {review}</p>
                                : null
                        }

                    </div>
                    : null
            }
        </div>
    )
}

export default DisplayOne;