const express = require("express");
const { check } = require('express-validator');
const router = express.Router();
const categoryController = require('../controllers/categorycontroller');

/**
 * @swagger
 * /api/category:
 *  get:
 *    description: Get all the category from DB
 *    produces:
 *      - application/json
 *    responses:
 *      '200':
 *        description: categorys fetched successfully.
 */
router.get('/category', categoryController.getCategory);


/**
 * @swagger
 * /api/category:
 *  post:
 *    description: Use to add category in DB
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: body
 *        name: Add category
 *        description: Add category in DB.
 *        schema:
 *          type: object
 *          required:
 *            - categoryName
 *            - id
 *          properties:
 *            categoryName:
 *              type: string
 *            id:
 *              type: string
 *    responses:
 *      '200':
 *        description: category added successfully.
 */
router.post('/category',[
    check('categoryName'),
    check('id')
],categoryController.postCategory);

/**
 * @swagger
 * /api/category/{categoryId}:
 *  put:
 *    description: Used to update category in DB
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: path
 *        name: categoryId        
 *      - in: body
 *        name: Update category
 *        description: Update category in DB.
 *        schema:
 *          type: object
 *          required:
 *            - categoryName
 *            - id
 *          properties:
 *            categoryName:
 *              type: string
 *            id:
 *              type: string
 *    responses:
 *      '200':
 *        description: Food item updated successfully.
 */
router.put('/category/:categoryId', categoryController.updateCategory);
/**
 * @swagger
 * /api/category/{categoryId}:
 *  delete:
 *    description: Removes category item from DB.
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: path
 *        name: categoryId
 *        description: Remove category Item from DB.
 *        schema:
 *          type: string
 *          required:
 *            - categoryId
 *          properties:
 *            categoryId:
 *              type: string
 *    responses:
 *      '200':
 *        description: Food removed successfully.
 */





router.delete('/category/:categoryId', categoryController.deleteCategory);



module.exports = router;