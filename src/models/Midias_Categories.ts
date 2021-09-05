
import sequelize from "@Database/index";
import { DataTypes } from "sequelize";



const Midias_Categories = sequelize.define( 'Midias_Categories', 
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
    }, 
    { timestamps: false }
);



export default Midias_Categories;
