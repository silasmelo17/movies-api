'use strict';



async function up(queryInterface, Sequelize) {
    return queryInterface.createTable('Episodes', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        title: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        number: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        duration: {
            type: Sequelize.STRING(7),
            allowNull: false
        },
        src: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        season_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: "Seasons",
                key: "id"
            }
        },
    });
}

async function down(queryInterface, Sequelize) {
    return queryInterface.dropTable('Episodes');
}



module.exports = {
    up,
    down
};
