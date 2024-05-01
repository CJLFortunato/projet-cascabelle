import type { NextApiRequest, NextApiResponse } from 'next';

type ResponseData = {
  message: string
}

export default async function GET(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) {
  res.status(200).json({ message: 'This is a placeholder' });
}
