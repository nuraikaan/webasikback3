const express = require('express');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
const { getAll, create, update, delete: deleteCategory } = require('../controllers/categoryController');

const router = express.Router();

router.get('/', getAll);
router.post('/', auth, admin('admin'), create);
router.put('/:id', auth, admin('admin'), update);
router.delete('/:id', auth, admin('admin'), deleteCategory);


module.exports = router;