import { NextApiRequest, NextApiResponse } from 'next';

// Helper function to allow CORS
function setCorsHeaders(res: NextApiResponse) {
  res.setHeader('Access-Control-Allow-Origin', 'https://user-registeration-application.vercel.app'), // Replace with your Angular app's URL
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS'),
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
}

// Middleware function for handling OPTIONS requests (preflight)
function handleOptionsRequest(req: NextApiRequest, res: NextApiResponse) {
  setCorsHeaders(res);
  res.status(200).end(); // End the response for OPTIONS preflight
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  setCorsHeaders(res);

  // Handle preflight (OPTIONS) requests
  if (req.method === 'OPTIONS') {
    handleOptionsRequest(req, res);
    return;
  }

  // Set CORS headers for all other requests

  // Handle POST request
  if (req.method === 'POST') {
    const { username } = req.body;

    // Your logic for creating a user
    if (username ==='Abu Abdullah') {
      res.status(201).json({ message: `${username }this is your requested name`});}
  } else {res.setHeader('Allow', ['POST']);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
}
