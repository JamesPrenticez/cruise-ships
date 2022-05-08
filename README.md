# Cruise Ships of the World

### Getting Started
``` npm i ```
``` npm run dev ```
``` npm run db ```

### Database
- ``` npx knex init ``` 
- ``` npx knex migrate:make ships ``` 
- ``` npx knex seed:make 01_ships ```
- ``` npx knex migrate:latest ```

### Routing
#### Client - React-router-dom
(v6 switch is now routes)[https://stackoverflow.com/questions/63124161/attempted-import-error-switch-is-not-exported-from-react-router-dom]
(v6 component is now element)[https://stackoverflow.com/questions/69854011/matched-leaf-route-at-location-does-not-have-an-element]
#### Server 
https://remarkablemark.medium.com/server-side-routing-with-react-router-7a2289ad6070