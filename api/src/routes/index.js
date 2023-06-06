const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const dogRouter = require('./dogs');;
const dogPost = require('./dogspost');
const temperamentRouter = require('./temperaments');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/dogs', dogRouter)
router.use('/temperaments', temperamentRouter)
router.use('/dogs', dogPost)

// aca creo los router para configurar los manejadores de las rutas 
// y los exporto para trabajarlos moduladamente


module.exports = router;
