# 🏦 Hybrid Wallet Backend

Backend de práctica para una Billetera Virtual Híbrida. El objetivo principal es explorar patrones de arquitectura, manejo de transacciones ACID y persistencia políglota.

## 🎯 Objetivos Técnicos
- **SQL (SQLite):** Manejo de saldos y usuarios con transacciones estrictas (`BEGIN`, `COMMIT`, `ROLLBACK`).
- **NoSQL (MongoDB):** Logs de auditoría y reportes complejos con Aggregation Framework.
- **API:** RESTful estricto con manejo de errores centralizado.

## 🛠 Tech Stack
- **Core:** Node.js + Express
- **Datos:** SQLite (Transactional) + MongoDB (Audit)
- **Utils:** Morgan (Logs), Cors, Dotenv

## ⚙️ Instalación y Setup

1. **Instalar dependencias:**
   ```bash
   npm install
Configurar entorno: Crear un archivo .env en la raíz:

Fragmento de código
PORT=3000
MONGO_URI=mongodb://localhost:27017/wallet_audit
NODE_ENV=development
Correr el servidor:

Bash
npm run dev
🚧 Estado del Proyecto
[x] Server Setup (Express, Morgan, Cors).

[x] Conexión Híbrida (SQLite + Mongo).

[ ] Endpoints de Usuarios.

[ ] Lógica de Transferencia (ACID).

[ ] Auditoría y Aggregations.
