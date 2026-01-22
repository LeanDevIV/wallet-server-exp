import db from '../config/db.js';


//  async function createUser(userData){
//     return await prisma.user.create({
//         data: userData
//     });
// }

 async function getAllUsers (page = 1, limit = 10) {

    // Traemos los usuarios paginados
    const users = db.prepare('SELECT * FROM users LIMIT ? OFFSET ?')
                    .all(limit, (page - 1) * limit);

    // Contamos el total para la paginación
    const { total } = db.prepare('SELECT COUNT(*) as total FROM users').get();

    return {
        data: users,
        pagination: {
            total,
            page: Number(page),
            pages: Math.ceil(total / limit)
        }
    };
};

export { getAllUsers };