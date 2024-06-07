<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Ejecutar en Desarrolllo

1. Clonar el respositorio
2. Ejecutar
```
yarn install
```
3. Tener Nest CLI instalado
```
npm i -g @nestjs/cli
```

4. Levantar la base de datos
```
docker-compose up -d
```

5. Clonar el archivo __```.env.template```__  y renombrar la copia a __```.env```__

6. Llenar las variables de entonrno definidas en el __```.env```__

7. Ejecutar la aplicacion en Dev:

```
yarn start:dev
```

8. Reconstruir la base de datos con la semilla
```
http://localhost:3000/api/v2/speed
```

# Stack usado
* MongoDB
* Nest
