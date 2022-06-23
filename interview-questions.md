# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: So in order to change this you would chose the model that the foreign key belongs to in this case it belongs to the Students model because we are trying to connect the primary key which is in the primary model (Cohort) with the foreign model Students in order for them to correspond and read eachother. So navigate to the Students model and in your terminal use the add_column command which takes in a list of parameters that I dont quite remember but this basically creates a new column in the model and you can then name it primary key. You would then need to make a migration and db migrate in order for it to save.

Researched answer: So I was close if you already have a column you want to add a foreign key to then no need to do what I said above if you do not have a specific column to put a foreign key then do what I said above. In this case they dont even have a column to put the foreign key so for the sake of the example below I will call it student_id. In order to add a foreign key to a column you need to use the ALTER_TABLE method followed by the table name the ADD FOREIGN KEY to the column name REFERENCES points id of the primary id. An example for this project would look like this...
ALTER_TABLE students ADD FOREIGN KEY (student_id) REFERENCES points (id)

2. Which RESTful routes must always be passed params? Why?

Your answer: The Restful Routes that need params are the show, edit, update, and destroy all need parameters of the ids of the specific entry they are wishing to modify or show. While the create and and technically update (it needs both because it needs to choose a specific one and alter it using the private parameters) need a different set of parameters the ones we define in the private method at the bottom of the page, because the user needs to input the certain parameters in order for the Restful Route to work.

Researched answer: All of the ones mentioned above are requred for the Restful Route paths because parameters are variable parts of a URL path which are used to point to a specific value in the model through the URL, URLs can have several parameters basically whatever it takes to identify a specific value in the model.

3. Name three rails generator commands. What is created by each?

Your answer: The ones we have learned so far is generate migration, model, and resource. Generating a migration allows the dev to create, save and catalog changes to a model. Generating a model and a resource are kind of doing the same thing except the model is basically just barebones creating a model while the generate resource creates the model, controller, views, and everything you need to communicate with an API.

Researched answer: Rails generate model allows for the dev to create a model with all the rows and columns and their specific datatypes that they need in the table, rails generate resource does the exact same thing while also creating a resource in the routes file and an empty folder in the views to control the front end. Generate resource is a very useful command. Rails generate migration is the one of the only ways you can change an applications schema. It uses a Domain Specifc Language (DSL) to modify and describe changes you do to your tables over time.

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students
It would call on the index method which would show all the entrys in that model.

action: "POST" location: /students
Because of the post action this line of code would call the create method which creates a new entry in the model

action: "GET" location: /students/new
This method would call the new method because it has an action of GET but it has a URL of new which would create a form for the user to input the params. The new and create methods work together to eventually create a new entry.

action: "GET" location: /students/2
This line of code would call on the show method which would show only a specific entry in this case it would be the second index of the model

action: "GET" location: /students/2/edit
This method would call the edit method which would grab the index labeled in the parameter which would allow for the update method to actually change the values, just like the new and create method the edit and update method work together

action: "PATCH" location: /students/2
This would call the update method, the PUT action would also call the update method. The PATCH action will allow for only a piece of the value to be changed instead of the whole thing.

action: "DELETE" location: /students/2
This would call the destroy method which would delete the index labeled in the URL.

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

- As a user, I can see a landing page that shows a title of the application and has the todo's listed
- As a user, I can click on a todo and be routed to a page where I see the title of the todo and a short description of the todo
- As a user, I can navigate from the individual todo page back to the home page
- As a user, I see a button where I can create a todo
- As a user, when I click on the button I will be routed to the page with a form to create the todo
- As a user, I can click on the submit button which adds a new to do to the database
- As a user, when I submit the form I will be redirected to the home page and see the new todo
- As a user, I can click a button to edit a todo
- As a user, I will be routed to a new form to update the post selected
- As a user, I can click a button to delete a todo
- As a user, I will be shown a 'Are you Sure You Want To Delete' if clicked yes will perminetly delete todo from database if clicked no will cancel the delete
