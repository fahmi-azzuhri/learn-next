import React from "react";
import { useRouter } from "next/router";

const ShopPage = () => {
  const { query } = useRouter();
  console.log(query);
  //biar bisa di akses banyak garis miring dan tanpa membuat index, ubah nama file jadi [[...namafile]].tsx
  return (
    <div>
      <h1> ShopPage</h1>
      <p> shop : {query.shops ? query.shops[0] + "-" + query.shops[1] : ""} </p>
    </div>
  );
};

export default ShopPage;
