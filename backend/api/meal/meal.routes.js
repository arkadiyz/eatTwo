const express = require('express')
// const {requireAuth, requireAdmin} = require('../../middlewares/requireAuth.middleware')
const { addMeal, getMeals, getById, deleteMeal, editMeal } = require('./meal.controller')
const router = express.Router()

// middleware that is specific to this router
// router.use(requireAuth)
// console.log('meal.router is worker (:>');

router.get('/', getMeals)
router.get('/:id', getById)
router.post('/add', addMeal)
router.delete('/:id', deleteMeal)
router.put('/edit/:id', editMeal)

module.exports = router