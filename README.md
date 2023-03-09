# Backend-Clinica-Dental

<details>
  <summary>Contenido 📝</summary>
  <ol>
    <li><a href="#sobre-el-proyecto">Sobre el proyecto</a></li>
    <li><a href="#Tecnologias-utilizadas">Tecnologias utilizadas</a></li>
    <li><a href="#diagrama-bd">Diagrama</a></li>
    <li><a href="#instalación-en-local">Instalación</a></li>
    <li><a href="#endpoints">Endpoints</a></li>
  </ol>
</details>

## Sobre el proyecto
Este proyecto requería una API funcional, para una clinica dental, conectada a una base de datos con al menos una relación de uno a muchos y una relación de muchos a muchos, donde puedes registrarte, loguearte y hacer citas con el doctor.

## Tecnologias utilizadas

<a href="https://www.mongodb.com/">
    <img src= "https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white"/>
</a>
<a href="https://www.expressjs.com/">
    <img src= "https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"/>
</a>
<a href="https://nodejs.org/es/">
    <img src= "https://img.shields.io/badge/node.js-026E00?style=for-the-badge&logo=node.js&logoColor=white"/>
</a>
<a href="https://developer.mozilla.org/es/docs/Web/JavaScript">
    <img src= "https://img.shields.io/badge/javascript-EFD81D?style=for-the-badge&logo=javascript&logoColor=black"/>
</a>

## Diagrama BD
<img src="./img/bbdd.png" width=900px></img>

## Instalación en local
1. Clonar el repositorio
2. ` $ npm install ` para instalar las dependencias.
3. Conectamos nuestro repositorio con la base de datos en el config.json
4. Creamos la base de datos con ``` $ npx sequelize-cli db:create```
5. Ejecutamos las migraciones con: ``` $ npx sequelize-cli db:migrate ``` 
6. Ejecutamos los seeders con: ``` $ npx sequelize-cli db:seed:all ``` 
7. Para iniciar el servidor:  ``` $ npm run dev ```

## Endpoints
<details> -->
<summary>Endpoints</summary>

- AUTH
    - REGISTER

            POST http://localhost:4000/register
        body:
        ``` js
            {
                "name": "David",
                "surname": "Garcia",
                "phone": "111222333",
                "email": "david@david.com",
                "password": "princes"
            }
        ```

    - LOGIN

            POST http://localhost:4000/login  
        body:
        ``` js
            {
                "email": "david@david.com",
                "password": "princes"
            }
        ```

     - View Profile

            GET http://localhost:4000/profile 
    
      
      - Update Profile

<<<<<<< HEAD
    - Update Appointment

            UP http://localhost:4000/appointment
        body:
        ``` js
            {
                "hour": "10:00",
                "date": "13/2/2023"
            }
        ```

    - Profile

            POST http://localhost:4000/profile 

   - Update Profile

            UP http://localhost:4000/updateprofile
=======
            PUT http://localhost:4000/admin-deleterol
>>>>>>> 1d76454e820d6cd3411cfee9f57143f3e3562408
        body:
        ``` js
            {
                "name":"david",
                "surname":"perez",
                "phone":"333444111",
                "email":"david@david.com",
                "password":"banana"
            }
        ```
    
    
     - New Appointment

            POST http://localhost:4000/appointment  
            body:
        ``` js
            {
                "doctor_id": 1,
                "date": "12/1/2012",
                "hour": "20:00"
            }
        ```

     
     - Update Appointment

            PUT http://localhost:4000/appointment
            body:
        ``` js
            {
                "hour": "10:00",
                "date": "13/2/2023",
                "app_id": 3
            }
        ```

       
    - Get Appointment

            GET http://localhost:4000/appointment


    
   - Delete Appointment by ID

            Delete http://localhost:4000/appointment/id
    
    
   - Get Appointment Doctor

            GET http://localhost:4000/appointmentDr
    
    
    
   - Get Users Admin

            GET http://localhost:4000/adminuser
            
            
            
   - Get Appointment Admin

            GET http://localhost:4000/adminappointments


   - Create Role

            POST http://localhost:4000//admin-createrol
        body:
        ``` js
            {
                "name": "paciente"
            }
        ```

   - Update Role

            POST http://localhost:4000/admin-updaterol
        body:
        ``` js
             {
                "name": "paciente"
            }
        ```

   - Delete Role

            UP http://localhost:4000/admin-deleterol
        body:
        ``` js
            {
                "id": 4,
                "name": "paciente"
            }
        ```

   - Get all Role

            UP http://localhost:4000/admin-deleterol


</details>
