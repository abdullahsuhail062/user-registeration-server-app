import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', 'https://user-registeration-app.vercel.app'); // Allow requests from Angular app
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS'); // Allow specific methods
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // Allow specific headers

  if (req.method === 'OPTIONS') {
    // Handle preflight request
    res.status(200).end();
    return;
  }

  // Handle POST request
  if (req.method === 'POST') {
    const { username} = req.body;

    // Your logic for creating a user
    if (username === 'Abu Abdullah') {
      res.status(201).json({ message: 'User registered successfully' });}
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
