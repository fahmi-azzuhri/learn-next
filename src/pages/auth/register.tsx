import Link from "next/link";
import React from "react";

const RegisterPage = () => {
  return (
    <div>
      sudah punya akun? <Link href={"/auth/login"}>Masuk</Link>
    </div>
  );
};

export default RegisterPage;
