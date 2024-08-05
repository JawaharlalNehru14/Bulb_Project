import React from "react";

const LearnComponent = () => {
const ListCar = ["honda","tesla","avathar"]

  return (
    <>
    <p>List of cars</p>
    <ul>
      {ListCar.map((car,index)=>(<li key={car}>{car}</li>))}
    </ul>
    </>
  )
};

export default LearnComponent;
