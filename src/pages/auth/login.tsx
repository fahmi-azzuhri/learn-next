import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const LoginPage = () => {
  const router = useRouter();
  const handleButton = () => {
    router.push("/product");
  };
  return (
    <div>
      <button onClick={() => handleButton()}>Login</button>
      <p>
        belum punya akun?
        <Link href={"/auth/register"}>Daftar</Link>
      </p>
    </div>
  );
};

export default LoginPage;
