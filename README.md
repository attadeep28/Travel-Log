# Travel Log
 
Visit: [http://13.51.79.102/](http://13.60.42.239/) (Ec2 for hosting)
 
## About
 
**Travel Log** is a full-stack web application designed for individuals to share their travel experiences within a community of fellow adventurers. This user-friendly app allows people to:
 
- Explore travel experiences shared by others
- Add and narrate their own travel stories
- Include various details about their experiences
- Share captivating images of locations
- Specify the cost of their travels
- Highlight the cultural heritage of visited locations
- Recommend must-visit places
 
## How To Run
 
**Step 1**: Create a `.env` file and define the following variables:
 
- `MONGO_URL`
- `PORT`
- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `S3_REGION`
- `S3_BUCKET`
- `HOST`
- `EMAIL`
- `PASS`
 
**Step 2**: Install dependencies with `npm i`.
 
**Step 3**: Run the application with `node index.js`.
 
## Tech Stack
### Frontend
- HTML
- CSS
- Bootstrap
- JavaScript
 
### Backend
- Node.js
- Express.js
- JavaScript
 
### Database
- MongoDB for storing Data (Atlas Search And Atlas Autocomplete for Searching)
- S3 for storing images
 
### Authentication
- JSON Web Tokens (JWT) for user authentication
- Nodemailer for sending OTP
 
### Testing
- chai
- Mocha
- Sinon
- supertest
 
 
