const db = require("../models/index");
const task = db.task;

exports.taskController = {
  create: (req, res) => {
    const task = req.body;
    task
      .create(task)
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((err) => {
        // handling the error message properly
        const errorObj = {}
        err.errors.map(error => {
            errorObj[error.path] = error.message
        })
        return res.status(400)
            .send(errorObj)
      });
  },
  getAll: (req, res) => {
    task
      .findAll()
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((err) => {
        res.status(400).send({
          message: err.message || "Could not fetch tasks",
        });
      });
  },
  getById: (req, res) => {
    task
      .findOne({
        where: {
          id: req.params.id,
        },
      })
      .then((data) => {
        if (data == undefined) {
          res.status(404).send({
            message: "Task Not Found!",
          });
        }
        res.status(200).send(data);
      })
      .catch((err) => {
        res.status(400).send({
          message: err.message || "Could not fetch task",
        });
      });
  },
  update: (req, res) => {
    const task = req.body;
    task
      .update(task, {
        where: {
          id: req.params.id,
        },
      })
      .then((data) => {
        // Instead of giving us a response of 0 or 1, we re-modify the response 
        if (data[0] !== 1) {
          res.status(404).send({
            message: "Task record not found !",
          });
        }
        res.status(200)
          .send({
            message: "Task updated sucesfully",
          })
          .send(data);
      })
      .catch((err) => {
        // handling the error message properly
        const errorObj = {}
        err.errors.map(error => {
            errorObj[error.path] = error.message
        })
        return res.status(400)
            .send(errorObj)
      });
  },
  delete: (req, res) => {
    task
      .destroy({
        where: {
          id: req.params.id,
        },
      })
      .then((data) => {
        if (data !== 1) {
          res.status(404).send({
            message: "Task Not Found!",
          });
        }
        res.status(200).send({
            message: "Task Deleted Sucessfully"
        });
      })
      .catch((err) => {
        res.status(400).send({
          message: err.message || "Could not fetch task record",
        });
      });
  },

};
