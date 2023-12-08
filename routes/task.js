var express = require('express');
var router = express.Router();
const {taskController} = require('../controllers/task')



// Create a new task
router.post('/',taskController.create)



/* GET task listing. */
router.get('/',taskController.getAll);


/* GET a task by ID. */
router.get('/:id',taskController.getById);

// Update task by Id
router.put('/:id',taskController.update)

// Delete task by Id
router.delete('/:id',taskController.delete)


module.exports = router;
