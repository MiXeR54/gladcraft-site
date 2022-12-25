import prisma from "lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string;
};

export default async function register(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    const { email, login, password } = req.body;

    /// validation
    if (!email || !login || !password) {
      return res.status(400).json({ message: "Неверный запрос" });
    }
    ///

    try {
      const isUserExists = await prisma.user.findFirst({
        where: { OR: [{ email }, { login }] },
      });

      if (isUserExists) {
        return res
          .status(400)
          .json({ message: "Login или email уже зарегистрированы" });
      } else {
        const candidate = await prisma.user.create({
          data: { email, login, password },
        });

        return res.status(200).json({ message: "Пользователь создан" });
      }
    } catch (error) {
      console.log(error);
      res.status(401).json({ message: "Something went wrong" });
    }
  } else {
    res.status(400).json({ message: "Неверный запрос" });
  }
}
