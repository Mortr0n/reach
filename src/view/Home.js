import React, { useState } from "react";
import DisplayAll from '../components/DisplayAll';
import Form from '../components/Form';




const Home = (props) => {

    const [countryList, setCountryList] = useState([]);

    return(
        <div>

            <Form countryList={countryList} setCountryList={setCountryList} />
            <DisplayAll countryList={countryList} setCountryList={setCountryList} />


        </div>
    )
}

export default Home;