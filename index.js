/* NO OLVIDAR INSTALAR NODEMON Y MODIFICAR PACKAGE .JSON */


import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

//RUTAS IMPORTADAS
// user => se antepone al ROUTES porque ya lo pone implicitamente en el USER.JS
import usersRoutes from './routes/users.js'


// INICIA LA APLICACIÓN Y EL PUERTO
const app = express();
const PORT = 5000;

// BAJAR LA CONEXION A 2.0.0 PARA CONECTAR
const URI = "mongodb://luis1590:super1590@ac-pkfn49o-shard-00-00.vm4uck4.mongodb.net:27017,ac-pkfn49o-shard-00-01.vm4uck4.mongodb.net:27017,ac-pkfn49o-shard-00-02.vm4uck4.mongodb.net:27017/?ssl=true&replicaSet=atlas-n9ca75-shard-0&authSource=admin&retryWrites=true&w=majority";


//MIDLEWARE
app.use(bodyParser.json());

// RUTAS
// ESTA RUTA ES LA QUE MANDA GENERAL
app.use('/users',usersRoutes);




app.get('/', ( req, res ) => res.send('Hola desde la página principal'));

const conexionMongo = async () => {
    try{
        await mongoose.connect(URI);
        console.log('CONECTADO A MONGODB ATLAS');
    }
    catch(e){
        console.log(e);
    }
}

conexionMongo();



// INICIO DEL SERVIDOR
app.listen(PORT,() => console.log(`Server running on port: http://localhost:${PORT}`))


