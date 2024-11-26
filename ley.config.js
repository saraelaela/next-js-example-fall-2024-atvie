import { config } from 'dotenv-safe';
import postgres from 'postgres';
import { postgresConfig } from './util/config.js';

config();

const option = {
  transform: {
    ...postgres.camel,
    undefined: null,
  },
};

export default option;
// export default postgresConfig;
