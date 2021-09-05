'use strict';



async function up(queryInterface, Sequelize) {
    return await queryInterface.bulkInsert('Types', [
        { name: 'Séries' },
        { name: 'Animes' }
    ], {});
}

async function down( queryInterface, Sequelize ) {
    return await queryInterface.bulkDelete('Categories', null, {});
}



module.exports = {
    up,
    down
};
