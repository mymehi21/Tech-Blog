# Tech Blog

CMS-style blog site where developers can publish their blog posts and comment on other developers’ posts as well.

## Installation
<br />Clone the repo  <br />

<br />Use npm install to install dependecies. <br />
  `npm i` <br />
<br />Log into MySQL. <br />
  `mysql -u <user> -p ` <br />
Enter password. <br />
<br />Source the schema. <br />
  `source db/schema.sql` <br />
<br />Quit MySQL and seed the database.  <br />
  `quit`
  `node seeds`  <br />
<br />Start the server. <br />
  `npm start`

## Usage
```md
Once the server is started, visit localhost:3001. Users can sign up and log in. 
Once logged in, they will have two new options in the navigation bar. `dashboard` will take them to a page where they can create a new post, view previous posts (which they can select to edit or delete), or they can select `logout` . If they do not wish to make a post they can visit other users posts by either clicking on the title or comments. 
Here the user can see all the comments for this post and they can leave one of their own. If the user wishes to return to the homepage they can click on 'Tech POST' to take them back to the home page.
```

## Tech Used

[express-handlebars](https://www.npmjs.com/package/express-handlebars)

[MySQL2](https://www.npmjs.com/package/mysql2) 

[Sequelize](https://www.npmjs.com/package/sequelize)

[dotenv package](https://www.npmjs.com/package/dotenv)

[bcrypt package](https://www.npmjs.com/package/bcrypt)

[express-session](https://www.npmjs.com/package/express-session)

[connect-session-sequelize](https://www.npmjs.com/package/connect-session-sequelize)

[express-session](https://www.npmjs.com/package/express-session)
