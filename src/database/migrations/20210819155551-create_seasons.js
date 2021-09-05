'use strict';



async function up(queryInterface, Sequelize) {
    return queryInterface.createTable('Seasons', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        number: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        midia_id: {
            type: Sequelize.INTEGER,
            references: {
                model: "Midias",
                key: "id"
            }
        },
    });
}

async function down(queryInterface, Sequelize) {
    return queryInterface.dropTable('Seasons');
}



module.exports = {
    up,
    down
};
