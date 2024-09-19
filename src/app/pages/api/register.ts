import { NextApiRequest, NextApiResponse } from 'next';

// Define the type for the allowCors function
const allowCors = (fn: (req: NextApiRequest, res: NextApiResponse) => Promise<void>) => async (req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', 'https://user-registeration-application.vercel.app');  // Update with your Angular app's URL
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );
  
  if (req.method === 'OPTIONS') {
    // Handle the preflight request
    res.status(200).end();
    return;
  }

  return await fn(req, res);
};

// Example handler function
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const  username  = req.body.username;

    // Simple validation and response
    if (username === 'Abu Abdullah') {
      res.status(201).json({ message: `${username}, this is your requested name` });
    } else {
      res.status(400).json({ error: 'Invalid user name provided' });
    }
  } else {
    // Handle unsupported methods
    res.setHeader('Allow', ['POST']);  // Only allow POST method
    res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }
};

// Export the handler wrapped with CORS handling
export default allowCors(handler);
