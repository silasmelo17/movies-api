'use strict';


async function up(queryInterface, Sequelize) {
    return await queryInterface.createTable( 'Movies', {
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
        description: {
            type: Sequelize.STRING,
            allowNull: false
        },
        duration: {
            type: Sequelize.STRING(7),
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
        src: {
            type: Sequelize.STRING,
            allowNull: false
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
    return await queryInterface.dropTable( 'Movies' );
}



module.exports = {
    up,
    down
};
