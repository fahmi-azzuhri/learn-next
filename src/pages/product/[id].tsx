import React from "react";
import { useRouter } from "next/router";
const ProductDetail = () => {
  const { query } = useRouter();
  //   console.log(router);
  return (
    <div>
      <h1> Detail Product</h1>
      <p> product : {query.id} </p>
    </div>
  );
};

export default ProductDetail;
