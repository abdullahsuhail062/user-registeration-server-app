import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', 'https://user-registeration-application.vercel.app'); // Allow requests from Angular app
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS'); // Allow specific methods
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // Allow specific headers

  // Handle preflight request (CORS preflight)
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // Make sure this is included
    res.status(200).end(); // Return 200 for preflight
    return;
  }

  // Handle POST request
  if (req.method === 'POST') {
    const { username } = req.body;

    if (!username) {
      // Check for missing username and return a 400 Bad Request error
      return res.status(400).json({ error: 'Username is required' });
    }

    // Example logic for user creation (you can replace this with actual user creation logic)
    res.status(201).json({ message: 'User created successfully', username });
  } else {
    // Return 405 for methods other than POST and OPTIONS
    res.setHeader('Allow', ['POST', 'OPTIONS']); // Inform the client which methods are allowed
    res.status(405).json({ error: `Method ${req.method} not allowed` });
  }
}
