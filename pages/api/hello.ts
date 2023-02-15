// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const apiUrl = 'https://api.themoviedb.org/3/movie';
  const data = await fetch(
    `${apiUrl}/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`
  ).then((response) => response.json());

  return res.status(200).json(data);
}
