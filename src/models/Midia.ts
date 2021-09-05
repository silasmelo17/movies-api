
import { DataTypes } from 'sequelize';
import sequelize from '@Database/index';



const MidiaModel = sequelize.define( 'Midias', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    sinopse: {
        type: DataTypes.STRING,
        allowNull: false
    },
    year: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    slug: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    thumb: {
        type: DataTypes.STRING,
        allowNull: false
    },
    type_id: {
        type: DataTypes.INTEGER,
        references: {
            model: "Types",
            key: "id"
        }
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false
    }
});



export default MidiaModel;
