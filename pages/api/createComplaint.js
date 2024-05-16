import { createComplaint } from "@/lib/db";

export default async function handler(req, res){
  try {
    await createComplaint(req.body);
    res.status(200).json({message: 'complaint submitted successfully'})
  } catch (error) {
    console.error('Error submitting complaint:',error);
    res.status(500).json({message: 'Internal server error'});
  }
} 