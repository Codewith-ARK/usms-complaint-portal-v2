import { createUser } from "@/lib/db";

export default async function handler(req, res) {
  try {
    const response = await createUser(req.body); // Access request body using req.body
    res.status(200).json({ message: 'BACKEND: User created', response });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
