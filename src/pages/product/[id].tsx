import React from "react";
import { useRouter } from "next/router";
const DetailProduct = () => {
  const { query } = useRouter();

  return (
    <div>
      <h1> Lorem, ipsum.</h1>
      <p>product : {query.id}.</p>
    </div>
  );
};

export default DetailProduct;
