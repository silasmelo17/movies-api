
import Movie from '@Models/Movie';
import Category from '@Models/Category';
import Movies_Categories from '@Models/Movies_Categories';

import Type from '@Models/Type';
import Midia from '@Models/Midia';
import Season from '@Models/Season';
import Episode from '@Models/Episode';
import Midias_Categories from "@Models/Midias_Categories";



Movie.belongsToMany( Category, { through: Movies_Categories } );
Category.belongsToMany( Movie, { through: Movies_Categories } );

Midia.belongsTo( Type, { foreignKey: 'type_id' });

Midia.hasMany(Season);
Season.belongsTo(Midia);

Season.hasMany(Episode);
Episode.belongsTo(Season);

Midia.belongsToMany( Category, { through: Midias_Categories } );
Category.belongsToMany( Midia, { through: Midias_Categories } );



const models = {
    Category,
    Movie,
    Movies_Categories,
    Type,
    Midia,
    Season,
    Episode,
    Midias_Categories
}



export default models
