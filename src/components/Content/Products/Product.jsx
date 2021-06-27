import React from 'react';

const Product = (props) => {
  return (
    <tr>
      <td>{props.date}</td>
      <td>
        {props.costs.map((c, i) => (
          <p key={i}>{c}</p>
        ))}
      </td>
      <td>
        {props.plns.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </td>
      <td>
        {props.products.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </td>
    </tr>
  );
};

export default Product;
