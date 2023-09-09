// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  data: {
    id: number;
    name: string;
    price: number;
    size: string;
  }[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const data = [
    {
      id: 1,
      name: "baju tidur",
      price: 100000,
      size: "xl",
    },
    {
      id: 2,
      name: "baju berenang",
      price: 600000,
      size: "s",
    },
  ];
  res.status(200).json({ data });
}
