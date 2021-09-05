
import { DataTypes } from 'sequelize';
import sequelize from '@Database/index';



const TypeModel = sequelize.define( 'Types', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, { timestamps: false });



export default TypeModel;
