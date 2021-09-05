'use strict';



async function up(queryInterface, Sequelize) {
    return await queryInterface.createTable('Midias', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: Sequelize.STRING(50),
            allowNull: false,
        },
        sinopse: {
            type: Sequelize.STRING,
            allowNull: false
        },
        year: {
            type: Sequelize.INTEGER,
            allowNull: false,
            default: 2021
        },
        slug: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        thumb: {
            type: Sequelize.STRING,
            allowNull: false
        },
        type_id: {
            type: Sequelize.INTEGER,
            references: {
                model: "Types",
                key: "id"
            }
        },
        createdAt: {
            type: Sequelize.DATE,
            allowNull: false
        },
        updatedAt: {
            type: Sequelize.DATE,
            allowNull: false
        }
    });
}

async function down(queryInterface, Sequelize) {
    return await queryInterface.dropTable('Midias');
}



module.exports = {
    up,
    down
};
