// const getAdminProfile = async (req, res) => {
//     try {
//         const admin = req.admin;
//         if (!admin) {
//         return res.status(404).json({ error: "Admin not found" });
//         }
//         // It's better to send only required fields, not full admin object (exclude password, etc.)
//         const profileData = {
//             name: admin.name,
//             email: admin.email,
//             role:"Admin"
//             // add other fields you want to expose
//         };

//         res.status(200).json(profileData);
//     } catch (err) {
//         res.status(500).json({ message: "Server error: " + err.message });
//     }
// };

// module.exports = {
//     getAdminProfile,
// };
const getAdminProfile = async (req, res) => {
  try {
    // admin is attached in AdminAuth middleware
    const admin = req.admin;

    const profile = {
      name: admin.name,
      email: admin.email,
      role: "admin"
    };

    res.status(200).json({ profile });

  } catch (err) {
    console.error("Error fetching admin profile:", err);
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getAdminProfile };


