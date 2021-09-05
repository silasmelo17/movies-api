'use strict';



async function up(queryInterface, Sequelize) {
    await queryInterface.createTable("Midias_Categories", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        MidiaId: {
            type: Sequelize.INTEGER,
            references: {
                model: "Midias",
                key: "id"
            }
        },
        CategoryId: {
            type: Sequelize.INTEGER,
            references: {
                model: "Categories",
                key: "id"
            }
        }
    });
}

async function down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Midias_Categories");
}



module.exports = {
    up,
    down
};
