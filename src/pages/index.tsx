import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>Fahmi Learn Next</title>
      </Head>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ipsam,
        fugit quaerat sit numquam iste quos minima excepturi tempore labore.
      </p>
    </div>
  );
}
