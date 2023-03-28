// AÑADE UN ID UNIQUE A NUESTRA BD
import { v1 as uuid } from 'uuid';
import { modelouser } from '../modelos/schema_user.js';



let users = [];

// HE SACADO TODAS LAS FUNCIONES DEL ROUTER
export const getUsers = async (req,res) => {
    try{
        const allUsers = await modelouser.find()
        res.send((allUsers));
    }
    catch(e){
        console.log(e)
    }
};

export const getUser = async (req,res) => {
    
    // PARAMS SE ENCUENTRA EL ID DEL USUARIO ... DESESTRUCTURAMOS 
    try{
        const { id } = req.params
        const uniqueUser = await modelouser.findById(id)
        res.send(uniqueUser);
    }
    catch(e){
        console.log(e);
    }
};

export const postUser = async (req,res) => {
    try{
        const newUser = modelouser(req.body);
        const objeto = await newUser.save();
        res.send(objeto)
    }
    catch(e){
        console.log(e);
    }   
};

export const deleteUser = async ( req,res) => {
    try{
        const { id } = req.params;
        await modelouser.deleteOne({_id:id})
        res.send({"User_eliminated":id})
    }
    catch(e){
        console.log(e);
    }  
};

export const patchUser = async ( req,res) => {
   const { id } = req.params;
    console.log(id)
    const { name, apellido, edad } = req.body;

    if(name){
        try{
            const updateField = await modelouser.updateOne({_id:id},{$set:({"name":name})})
            res.send({"User":id,"nameUpdate":name})
        }
        catch(e){
            console.log(e)
        }
    }
    if(apellido){
        try{
            const updateField = await modelouser.updateOne({_id:id},{$set:({"apellido":apellido})})
            res.send({"User":id,"apellidoUpdate":apellido})
        }
        catch(e){
            console.log(e)
        }
    }
    if(edad){
        try{
            const updateField = await modelouser.updateOne({_id:id},{$set:({"edad":edad})})
            res.send({"User":id,"edadUpdate":edad})
        }
        catch(e){
            console.log(e)
        }
    }

}

export const putUser = async (req,res) => {
    const { id } = req.params;
    const { name,apellido,edad} = req.body;

    if(name && apellido && edad){
        try{
            const updateUser = await modelouser.updateOne({_id:id},{$set:req.body})
            res.send(req.body);
        }
        catch(e){
            console.log(e)
    }}
}

