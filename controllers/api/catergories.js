const { Category } = require('../../models');

const getAllCategories = async (req, res) => {
  try {
    const Categories = await Category.findAll({});

    return res.json({ success: true, data });
  } catch (error) {
    console.log(`[ERROR]: Failed to get all playlists | ${error.message}`);

    return res.status(500).json({ success: false });
  }
};
