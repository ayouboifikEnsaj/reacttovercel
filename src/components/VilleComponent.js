// VilleComponent.js
import React from 'react';
import SearchBox from "./SearchBox";

const VilleComponent = ({ville , chooseZone }) => {


    return (
            <SearchBox ville={ville} chooseZone={chooseZone} />


    );
};

export default VilleComponent;
