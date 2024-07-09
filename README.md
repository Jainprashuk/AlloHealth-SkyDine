# SkyDine
This is a mini React application designed for ordering meals and drinks while traveling via plane. The application displays a list of available meals, allows drink selection for each meal, and supports meal selections for multiple people..



# Features
1. Meal List: Displays a list of meals with basic information, images, and optional drink selections.
2. Tag Filtering: Filter meals based on selected tags.
3. Multi-Person Selection: Support meal selections for at least two people with the ability to deselect meals.
4. Total Price Calculation: Shows the total price of all selected meals and drinks.
5. Responsive Interface: Optimized for various screen sizes.
5. Authentication: Login functionality Using Auth0.
6. Pagination : Paginated meal list.
7. Deployed : Deployed on Vercel.

# Techstack Used
## Frontend
1. React: Used for building the user interface.
2. Redux: State management.
3. React Router: For navigation.
4. Auth0 : For Login
5. Tailwind Css : For Styling Web Pages
## Backend
1. Node JS
2. Express

# Deployed Links
### Frontend : https://allo-health-frontend.vercel.app/
### Backend  : https://allo-health-backend.vercel.app/api/gettags

# ScreenShots Of Projects
![Screenshot 1](./screenShots/Screenshot%20(178).png)
*Home Page*
![Screenshot 2](./screenShots/Screenshot%20(179).png)
*Main Page*
![Screenshot 3](./screenShots/Screenshot%20(180).png)
*Loading pa6e*
![Screenshot 3](./screenShots/Screenshot%20(181).png)
*Responsive design for mobile screen*

# setup 
## Frontend Setup
1. Move to Frontend Repository `cd frontend`
2. Install dependencies: `npm install`.
3. Start the development server: `npm run dev`.
4. Access the frontend application at `http://localhost:5173` in your browser. (The App Will Not Work As Expected on localServer As Auth0 Was Setup on https://allo-health-frontend.vercel.app/)

## Backend Setup 
1. Move To Backend Repository `cd backend`
2. Install dependencies: `npm install` 
3. Start the backend server: `npm start` .
4. The backend server should now be running at port 3000 and accessible at the 3000 port.

### BACKEND Routes
1. https://allo-health-backend.vercel.app/api/getmeals :
   This is rotes to get all the meals from the data
2. https://allo-health-backend.vercel.app/api/gettags :
   This is rotes to get all the tags from the data
   

