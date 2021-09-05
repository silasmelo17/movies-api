
import { DataTypes } from 'sequelize';
import sequelize from '@Database/index';



const EpisodesModel = sequelize.define( 'Episodes', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    number: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    duration: {
        type: DataTypes.STRING(7),
        allowNull: false
    },
    src: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    season_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "Seasons",
            key: "id"
        }
    },
});



export default EpisodesModel;
