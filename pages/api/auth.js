import bcrypt from "bcrypt"; // Make sure bcrypt is imported
import { fetchUser } from "@/lib/db";

export default async function handler(req, res) {
  try {
    const user = await fetchUser({ email: req.body.email });

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    // Compare user email and stored email
    if (req.body.email !== user.email) {
      throw new Error("Incorrect Email");
    }

    // Compare user entered password and stored password
    bcrypt.compare(req.body.password, user.password, (err, result) => {
      if (err) {
        throw err;
      }

      if (result) {
        res.status(200).json({ message: "Login successful" });
      } else {
        res.status(401).json({ message: "Incorrect password" });
      }
    });
  } catch (error) {
    console.error("Error authenticating user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
