import express from 'express';

// IMPORTAMOS EL CONTROLADOR
import {getUsers,getUser,postUser,deleteUser,patchUser,putUser} from '../controladores/usercontroler.js';

// OBJETO ROUTER
const router = express.Router();

// EMULA UNA DATA BASE
/*const users = [
    {
        name:"Luis",
        apellido:"Gonzales",
        edad:32
    },
    {
        name:"Jorge",
        apellido:"Gonzales",
        edad:32
    }
]
*/


//RUTA
// YA NO SE PUNE (/users) PORQUE YA EMPIEZA TODO CON USERS
router.get('/', getUsers);

router.get('/:id',getUser );

router.post('/',postUser);

router.delete('/:id',deleteUser);

// PATCH PARA CAMBIAR UNA PARTE
router.patch('/:id',patchUser);

router.put('/:id',putUser);

// EXPORTARMOS LA RUTA AL INDEX
export default router;