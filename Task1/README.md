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

###Step 5: Create the REST API endpoints
1. Create a new package named controller.
2. In that package create a new controller class(here named MyController).
3. In this class we have three get request mapping, one post request mapping and one delete request mapping for retrieving, insertion and deletion.
 <img width="683" alt="image" src="https://user-images.githubusercontent.com/64260524/228663707-5c6aa96e-d951-4708-82f3-56d652ff6f1f.png">
