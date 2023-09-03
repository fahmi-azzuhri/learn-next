import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const ProductPage = () => {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState();
  useEffect(() => {
    if (!isLogin) {
      router.push("/auth/login");
    }
  }, []);
  return <div> ProductPage</div>;
};

export default ProductPage;
