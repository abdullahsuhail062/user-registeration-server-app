
import { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
    
    res.setHeader('Access-Control-Allow-Origin', 'user-registeration-application.vercel.app'); // Allow requests from Angular app
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS'); // Allow specific methods
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // Allow specific headers
  
    // Handle your request
    if (req.method === 'POST') {
      // Process the registration request
      res.json('Abu Abdullah!')
    } else {
      res.status(405).end(); // Method Not Allowed
    }
  }
  