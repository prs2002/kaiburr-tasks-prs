# Task 1 : JAVA Rest API Example
I have created a sample application in JAVA using Spring Boot, which provides REST API with endpoints for searching, creating and deleting server objects.
The server objects are saved in MongoDB database.

## Below are the basic flow of the project
### Step 1: Set up the project
1. Open spring initializer(https://start.spring.io/).
2. Add dependencies - here I have added two -1) Spring Web and 2) Spring Data MongoDB dependency.
3. After adding the dependencies, generate the maven project and import them in your IDE.
4. Now, Set up the MongoDB connection in the 'application.properties' class
<img width="394" alt="image" src="https://user-images.githubusercontent.com/64260524/228660256-a718793c-0562-4c23-b749-27a2af224d7c.png">

### Step 2: Create a Model package inside the main package
1. Create a server class in a new model package inside the main package.
2. This class will contain id, name and other details. And their getters and setters.
3. I named the server class as Cars, as here I will be using the example of Cars class.
<img width="472" alt="image" src="https://user-images.githubusercontent.com/64260524/228660411-ee2c7cfe-35c6-452c-bb37-f9241ae68428.png">

### Step 3: Create the MongoDB repository
1. Create a new package named repository.
2. Create a new interface for ServerRepository,(here named CarsRepo) in the repository package.
3. This interface will extends MongoRepository and which will have the Server(model) and data type of your model as generics.
<img width="558" alt="image" src="https://user-images.githubusercontent.com/64260524/228661124-156aab32-1334-449b-b6a7-8645d520dbf6.png">

### Step 4: Create a Server class
1. Create a server class, this sends our objects to the database.
<img width="564" alt="image" src="https://user-images.githubusercontent.com/64260524/228661957-8844d2be-164d-42ac-9f5a-5b0e735dd687.png">

### Step 5: Create the REST API endpoints
1. Create a new package named controller.
2. In that package create a new controller class(here named MyController).
3. In this class we have three get request mapping, one post request mapping and one delete request mapping for retrieving, insertion and deletion.
 <img width="683" alt="image" src="https://user-images.githubusercontent.com/64260524/228663707-5c6aa96e-d951-4708-82f3-56d652ff6f1f.png">  
 This code defines the following endpoints:   </br>
  1. GET /api/v1/servers: Returns all servers.  </br>
  2. GET /api/v1/servers/{id}: Returns the server with the specified ID.   </br>
  3. GET /api/v1/servers/name/{name}: Returns the server with the specified name. </br>  
  4. POST /api/v1/servers: Creates a new server.   </br>
  5. DELETE /api/v1/servers/{id}: Deletes the server of given id </br>  

## Testing using postman

### Get All servers from postman
<img width="960" alt="image" src="https://user-images.githubusercontent.com/64260524/228666696-1c218e12-2dc4-4095-816d-94a08184d634.png">

### All servers in the database 
<img width="269" alt="image" src="https://user-images.githubusercontent.com/64260524/228666165-6f178ead-a58e-4105-a8cb-58dc6b239000.png">

### Get server using id from postman
<img width="959" alt="image" src="https://user-images.githubusercontent.com/64260524/228667012-ba0ff44f-10b3-4567-bc39-31a827739f48.png">

### Get server using name from postman
<img width="960" alt="image" src="https://user-images.githubusercontent.com/64260524/228667316-035a00ae-d137-46a1-9368-2466ad1e00dc.png">

### Delete server using name from postman
<img width="960" alt="image" src="https://user-images.githubusercontent.com/64260524/228667727-d9d03d17-7a84-407c-bd78-e17ad1f75a8e.png">

### Server Deleted in the database
<img width="242" alt="image" src="https://user-images.githubusercontent.com/64260524/228667879-a28e9540-cba5-405d-b27c-eaea908bf60f.png">

### Add server using name from postman
<img width="950" alt="image" src="https://user-images.githubusercontent.com/64260524/228669044-4c487352-a793-4cee-b2bb-deea0ed472e8.png">

### Server Added in the database
<img width="259" alt="image" src="https://user-images.githubusercontent.com/64260524/228669155-dee8d8a7-2fd6-484c-a40e-36ffb80b022e.png">

## We have successfully built a spring boot rest api application and Tested it using postman.
### Tech stack used in this Application:
#### 1.SpringBoot Framework </br>
#### 2.MongoDB </br>
#### 3.Java </br>
