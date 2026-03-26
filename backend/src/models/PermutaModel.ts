import sequelize from "../databases/sequelize.ts";
import { DataTypes } from "sequelize";

const Permuta = sequelize.define(
    "Permuta",{
        "id":{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true
            
        },
        "email":{
            type:DataTypes.STRING,
            allowNull:false
        },
        "solicitante":{
            type:DataTypes.STRING,
            allowNull:false
        },
        "dh-solicitante":{
            type:DataTypes.DATE,
            allowNull:false
        },
        "permuta":{
            type:DataTypes.STRING,
            allowNull:false
        },
        "dh-permuta":{
            type:DataTypes.DATE,
            allowNull:false
        },
        "descicao":{
            type:DataTypes.STRING
        },
        "approved":{
            type:DataTypes.BOOLEAN
        }
    }
)

await Permuta.sync();

export default Permuta;