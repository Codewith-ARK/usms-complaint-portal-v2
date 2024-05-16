// pages/api/complaints.js

import { getAllComplaints } from '@/lib/db';

export default async function handler(req, res) {
  try {
    const complaints = await getAllComplaints();
    res.status(200).json(complaints);
  } catch (error) {
    console.error('Error fetching complaints:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
