export const createUserController = async (req, res) => {
    try {
        await userService.createUser();
        res.json({message: "Usuario creado exitosamente"});
    } catch (error) {
        console.error("Error al crear usuario:", error);
        res.status(500).json({message: "Error interno del servidor"});
    }
};

export const user = {
  createUserController,
  
};