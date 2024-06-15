const { fetchUser } = require("@/lib/db");

export default async function fetchUserData(req, res){
  try {
    const response = await fetchUser(req.body);
    res.status(200).json({message:'User found', response});
  } catch (error) {
    console.error('Error fetching user: ',error);
    res.status(500).json({message: 'Internal server error'});
  }
}