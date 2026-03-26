import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const { PG_NAME_DATABASE, PG_USER, PG_PASSWORD, PG_HOST } = process.env;

if (!PG_NAME_DATABASE || !PG_USER || !PG_PASSWORD || !PG_HOST) {
  throw new Error("Variáveis de ambiente do banco não foram definidas corretamente.");
}

const sequelize = new Sequelize(
  PG_NAME_DATABASE, 
  PG_USER, 
  PG_PASSWORD,{
    host: PG_HOST,
    dialect:'postgres'
})

try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.🗃️✅');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

export default sequelize;