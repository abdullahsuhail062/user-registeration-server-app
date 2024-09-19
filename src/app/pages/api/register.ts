import { NextApiRequest, NextApiResponse } from 'next';

// Define the type for the allowCors function
const allowCors = (fn: (req: NextApiRequest, res: NextApiResponse) => Promise<void>) => 
  async (req: NextApiRequest, res: NextApiResponse) => {
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Origin', 'https://user-registeration-application.vercel.app'); // Replace '*' with your client's URL for better security
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader(
      'Access-Control-Allow-Headers',
      'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );
    if (req.method === 'OPTIONS') {
      res.status(200).end();
      return;
    }
    return await fn(req, res);
  };

// Example handler function
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const {username} = req.body.username
    if (username === 'Abu Abdullah') {
      res.status(201).json({message: 'username'})
      
    }
  } else {
    // Method not allowed
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }
  
  const d = new Date();
  res.end(d.toString());
};

// Export the handler wrapped with CORS handling
export default allowCors(handler);
