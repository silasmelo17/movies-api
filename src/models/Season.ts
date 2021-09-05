
import { DataTypes } from 'sequelize';
import sequelize from '@Database/index';



const SeasonsModel = sequelize.define( 'Seasons', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    number: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    midia_id: {
        type: DataTypes.INTEGER,
        references: {
            model: "Midias",
            key: "id"
        }
    },
});



export default SeasonsModel;
