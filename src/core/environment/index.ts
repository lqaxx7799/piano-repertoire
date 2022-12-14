import environmentDevelopment from './environment.development';
import environmentProduction from './environment.production';
export const environment =
  process.env.NODE_ENV === 'developement'
    ? environmentDevelopment
    : environmentProduction;
