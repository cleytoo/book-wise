import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from 'src/lib/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const categories = await prisma.category.findMany()

  res.status(200).json(categories)
}
