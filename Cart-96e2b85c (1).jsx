import React from "react";

function Cart({ allData }) {
  
  const withIfElse = allData.map(function (result) {
    if (result.id > 2) {
      return (
        <div key={result.id}>
          <h2>My Name is {result.firstName} {result.lastName}</h2>
          <h2>My color is {result.color}</h2>
          <h5>My id is {result.id}</h5>
          <hr />
        </div>
      );
    } else if (result.id === 1) {
      return <h1 key={result.id}>Hii</h1>;
    } else {
      return <h1 key={result.id}>Not In Range</h1>;
    }
  });

  const withTernary = allData.map(function (result) {
    return result.id > 2 ? (
      <div key={result.id}>
        <h2>My Name is {result.firstName} {result.lastName}</h2>
        <h2>My color is {result.color}</h2>
        <h5>My id is {result.id}</h5>
        <hr />
      </div>
    ) : result.id === 1 ? (
      <h1 key={result.id}>Hii</h1>
    ) : (
      <h1 key={result.id}>Not In Range</h1>
    );
  });

  return (
    <section>
      <h3>Using if / else</h3>
      {withIfElse}
      <h3>Using ternary</h3>
      {withTernary}
    </section>
  );
}

export default Cart;
