import React, { useState } from "react";
import axios from 'axios';


const Form = (props) => {

    const { countryList, setCountryList } = props;
    const [regionSelector, setRegionSelector] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        axios.get(`https://restcountries.com/v2/regionalbloc/${regionSelector}`)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setCountryList(res.data);
            })
            .catch((err) => console.log(err))
        console.log("clicked")
    }

    return (

        <div>
            <form onSubmit={submitHandler}>
                <label htmlFor="regionSelector">Country Regions</label>

                <select onChange={(e) => setRegionSelector(e.target.value)}>
                    <option value="" defaultValue>Select an Option</option>
                    <option value="EU" name="regionSelector">European Union</option>
                    <option value="Au" name="regionSelector">African Union</option>
                    <option value="NAFTA" name="regionSelector">North American Free Trade</option>
                    <option value="SAARC" name="regionSelector">South Asian Association for Coop</option>
                    <option value="PA" name="regionSelector">Pacific Alliance</option>
                </select>
                <button>Show Countries</button>
            </form>
        </div>
    )
}

export default Form;