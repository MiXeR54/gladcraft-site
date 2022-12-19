import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default async function register(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    // validate input params
    // request to register user
  } catch (error) {
    console.log(error);
  }
  res.status(200).json({ name: "John Doe" });
}
