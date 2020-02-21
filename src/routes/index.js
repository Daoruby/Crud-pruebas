const express = require('express');
const router = express.Router();
const Task = require('../model/task');
const Crud = require('../model/crud');

router.get('/', async (req, res) => {
  const tasks = await Task.find();
  res.render('index', {
    tasks
  });
});

router.get('/crud', async (req, res) => {
  const crud = await Crud.find();
  res.render('crudTable', {
    crud
  });
});


router.get('/graficaN', async (req, res) => {
	const tasks = await Task.aggregate([{$group: {_id: {Objetivo: "$tramo"},Total: {$sum: 1}}}]);
	res.render('graficaNotas', {
		tasks
	})
})


router.post('/add', async (req, res, next) => {
  const crud = new Crud(req.body);
  await crud.save();
  res.redirect('crud');
});


router.get('/edit/:id', async (req, res, next) => {
  const crud = await Crud.findById(req.params.id);
  console.log(crud)
  res.render('edit', { crud });
});

router.post('/edit/:id', async (req, res, next) => {
  const { id } = req.params;
  await Crud.update({_id: id}, req.body);
  res.redirect('/crud');
});

router.get('/delete/:id', async (req, res, next) => {
  let { id } = req.params;
  await Crud.remove({_id: id});
  res.redirect('/crud');
});


module.exports = router;
