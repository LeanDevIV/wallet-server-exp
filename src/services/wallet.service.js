import { getSqliteDb as db } from '../config/db';


export async function balanceService(userId) {
    const row = await db.get('SELECT balance FROM users WHERE id = ?', [userId]);
    return row ? row.balance : null;
};