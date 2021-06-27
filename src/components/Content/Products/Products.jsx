import React from 'react';
import Product from './Product';
import s from './Products.module.scss';
const Products = (props) => {
  console.log(props);
  const items = Object.keys(props.listForShow).map((item) => {
    return (
      <Product
        key={item}
        date={item}
        costs={props.listForShow[item].costs}
        plns={props.listForShow[item].plns}
        products={props.listForShow[item].products}
      />
    );
  });
  return (
    <div>
      <table className={'table ' + s.table}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Cost</th>
            <th>PLN</th>
            <th>Product</th>
          </tr>
        </thead>
        <tbody>{items}</tbody>
      </table>
    </div>
  );
};

export default Products;
