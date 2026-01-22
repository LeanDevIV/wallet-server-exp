import * as userService from '../services/user.service.js';


 export async function getAllUser  (req, res) {
  try {
        const allUsers= await userService.getAllUsers();
        res.json({message: "Usuarios obtenidos exitosamente",status:200,data:allUsers});
  } catch (error) {
        // TODO: handle error
        res.status(500).json({message: "Error interno del servidor"});
    
  }
};



//  async function createUserController  (req, res)  {
//     try {
//         const user = await userService.createUser(req.body);
//         res.json({message: "Usuario creado exitosamente",status:201,data:user});
//     } catch (error) {
//         console.error("Error al crear usuario:", error);
//         res.status(500).json({message: "Error interno del servidor"});
//     }
// };

export const userController = {
    getAllUser,
};
