# My Health My Body

My Body My Health is a full stack web application that assists users in tracking their menstrual cycles and their contraceptive use. In this application, I utilize the PERN stack, which includes PostgreSQL, Express, React, and NodeJS, with the help of Sequelize, Bcrypt, SCSS, and Axios. I use a custom RESTful API to perform standard CRUD operations and also make Axios requests to a Health.gov external API to retrieve verified health resources for user exploration.

## Tech Stack

**Client:** React, SCSS

**Server:** Node, Express, PostgreSQL, Sequelize, Bcrypt

## Features

- Menstural Tracking
- Symptom, mood, etc. tracking on menstrual calendar
- Contraceptive Tracking
- Next contraceptive use calculation based on contraceptive type
- Verified health resource generator through calls to Health.gov external API
- User saved health resources

## Demo

[Demo Video](https://vimeo.com/611091763)

## Deployed App

[My Body My Health](https://mybodymyhealth.herokuapp.com/) (Deployed on Heroku)

## Run Locally

Clone the project

```bash
  git clone https://github.com/gbrogers/MyBodyMyHealth.git
```

Go to the project directory

```bash
  cd MyBodyMyHealth
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

## Authors

- [@gbrogers](https://www.github.com/gbrogers)

## Acknowledgements

- [Health.gov API](https://health.gov/our-work/national-health-initiatives/health-literacy/consumer-health-content/free-web-content/apis-developers)
