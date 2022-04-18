import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  // Check for secret to confirm this is a valid request
  if (req.query.revalidate_token !== process.env.REVALIDATE_TOKEN) {
    console.debug('[revalidate] path:', req.query.path, 'invalid token')
    return res.status(401).json({ message: 'Invalid token' })
  }
  try {
    await res.unstable_revalidate('/')
    //@ts-ignore
    await res.unstable_revalidate(req.query.path)
    console.debug('[revalidate] path:', req.query.path, 'success')
    return res.json({ revalidated: true })
  } catch (err) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    console.debug('[revalidate] path:', req.query.path, 'error:', err)
    return res.status(500).send('Error revalidating')
  }
}
