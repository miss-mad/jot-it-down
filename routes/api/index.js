const router = require("express").Router();
// Import the modular routers for /note-routes
const noteRoutes = require("./note-routes");

// then use these note routes
router.use("/notes", noteRoutes);

// export
module.exports = router;