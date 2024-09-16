
import { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.setHeader('Access-Control-Allow-Origin', 'https://user-registeration-application.vercel.app');  // Allow requests from Angular app
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
    // Handle your request
    if (req.method === 'POST') {
      // Process the registration request
      res.json('Abu Abdullah!')
    } else {
      res.status(405).end(); // Method Not Allowed
    }
  }
  