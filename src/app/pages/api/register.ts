


   // Run the cors middleware
   // nextjs-cors uses the cors package, so we invite you to check the documentation https://github.com/expressjs/cors
  

   // Rest of the API logic

// Helper function to allow CORS
// function setCorsHeaders(res: NextApiResponse) {
//   res.setHeader('Access-Control-Allow-Origin', 'https://user-registeration-application.vercel.app') // Replace with your Angular app's URL
//   res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
// }



// Middleware function for handling OPTIONS requests (preflight)
//  function handleOptionsRequest(req: NextApiRequest, res: NextApiResponse) {
//     // setCorsHeaders(res);
//   res.status(200).end(); // End the response for OPTIONS preflight
// }

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
 

//   // Handle preflight (OPTIONS) requests
//   if (req.method === 'OPTIONS') {
//     handleOptionsRequest(req, res);
//     return;
//   }

//   // Set CORS headers for all other requests

//   // Handle POST request
//   if (req.method === 'POST') {
//     const { username } = req.body;

//     // Your logic for creating a user
//     if (username ==='Abu Abdullah') {
//       res.status(201).json({ message: `${username }this is your requested name`});}
//   } else {res.setHeader('Allow', ['POST']);
//     res.status(405).json({ message: `Method ${req.method} not allowed` });
//   }
// }



import { NextApiRequest, NextApiResponse } from 'next';

// Define the type for the allowCors function
const allowCors = (fn: (req: NextApiRequest, res: NextApiResponse) => Promise<void>) => async (req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  // You can also dynamically set the origin using the request origin
  // res.setHeader('Access-Control-Allow-Origin', req.headers.origin || '*');
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
  const d = new Date();
  res.end(d.toString());
};

// Export the handler wrapped with CORS handling
export default allowCors(handler);
