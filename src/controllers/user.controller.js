export const crearUsuarioController = async (req, res) => {
    try {
        crearUsuarioService();
        res.json({message: "Usuario creado exitosamente"});
    } catch (error) {
        
    }
}