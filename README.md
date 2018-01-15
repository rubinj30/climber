# partner-in-climb

This is an app that makes it easier to find other climbers with similar climbing styles, levels of skill, and favorite destinations. Or you can just see what others in your area are climbing. 
____
## Link to site
https://shrouded-mesa-61813.herokuapp.com/
____
#### Technologies/Frameworks used:
MEN stack:
- MongoDB
- Express.js
- Node.js

Other:
- Mongoose.js
- Handlebars.js
- CSS and HTML
- Materialize framework
- Heroku
____
#### Approach Taken
I created 3 data models (Users > Climbing Destinations > Specific Climbs) and got full CRUD for Users, then hopped around for the other two models. I mainly focused on the routes at first, but implemented simple styling as I went that would be easier to mold once I have a fully-formed idea and site. 

## Planning and Project Management
#### User Stories
https://trello.com/b/ZNCgzLw6/climbing-app

#### ERDs
[Image of ERDs](./public/images/ERDs.png)

#### Wireframes
[Wireframe 1](./public/images/Wireframe1.jpg)

[Wireframe 2](./public/images/Wireframe2.jpg)

[Wireframe 3](./public/images/Wireframe3.jpg)
____
### Remaining goals 
- Use google distance matrix API and geolocation to tell how far you are from another climber or destination
- Allow for adding of more photos to specific climbs, climbers, and destinations and make them viewable with carousel or slider
- Add days/times that climbers typically go on climbing trips, as some only climb on weekdays or weekends
- Add comments model to Climbs
- Authentication (Sign Up, Sign In, and Log Out)
- User's highest rated climb shows on their profile page
- Making it to where you can access the destinations on the homepage OR go straight to the Users