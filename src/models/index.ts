import { Sequelize } from 'sequelize-typescript';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
    
const __dirname = dirname(fileURLToPath(import.meta.url));

// for test
const sequelize = new Sequelize({
  database: 'ovly_db',
  dialect: 'mysql',
  username: 'root',
  password: 'root',
  storage: ':memory:',
  models: [__dirname + '/models'], 
});

// sequelize.addModels([Person]);
// sequelize.addModels(['path/to/models']);
sequelize.addModels([__dirname+"/**/*.ts"]);

export default sequelize;