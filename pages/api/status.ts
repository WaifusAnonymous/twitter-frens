// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

// enforced typing for status response
import { statusData } from '../../types/statusData'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<statusData>
) {
  res.status(200).json(
      { 
        name: 'App is up and running!'
      }
    )
}
