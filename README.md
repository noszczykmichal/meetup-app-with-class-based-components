# Meetup app

> A small app for creating and managing meetups build with React.js  
> Check live demo [_here_](https://meetup-with-class-components.web.app/).

## Table of Contents

- [General Info](#general-information)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Screenshots](#screenshots)
- [Setup](#setup)
- [Acknowledgements](#acknowledgements)
- [Contact](#contact)

## General Information

- This project is a fork/copy of my repo that can be found [here](https://github.com/noszczykmichal/meetup-app).
- I've modified the original setup that was focused on using the functional components and [react hooks](https://reactjs.org/docs/hooks-intro.html) and instead I'm using here class-based components. Functional components are left only for the components that don't manage state on their own. ([here](https://github.com/noszczykmichal/meetup-app__with-class-based-components/commit/0772b58e29ad4a9d3db856ec8ce9702ee64175e3) you can find as well version that uses only class-based components).
- I've made this copy to practice usage of class-based components which is much different when compared to the functional components.
- Recently I combined use of Redux and Context for managing different parts of app (Redux is used here for managing data that are fetch from the database, Context for managing UI state). I deliberately decided not to use React Hooks - partially because app was supposed to use class-based components (and React Hooks can't be used there so I've decided also not to use them in functional components) and because I wanted to practice development in setup where due to requirements we are forced not to use functional components and React Hooks altogether.

## Technologies Used

- [React 18](https://reactjs.org/blog/2022/03/29/react-v18.html)
- [React-DOM](https://www.npmjs.com/package/react-dom)
- [React-Router](https://github.com/remix-run/react-router)
- [Context](https://reactjs.org/docs/context.html)
- [Redux](https://redux.js.org/introduction/getting-started)
- [React Transition Group](https://reactcommunity.org/react-transition-group/)
- [ESLint](https://www.npmjs.com/package/eslint)
- [Prettier](https://www.npmjs.com/package/prettier)

## Features

Project allows to:

- Save meetups to the database stored on Firebase
- View the meetups saved in the database
- Mark some of the available meetups as favorite one

## Screenshots

![Example screenshot](./img/screenshot.png)

## Setup

To run this project locally:

```
#Clone this repository
$git clone https://github.com/noszczykmichal/meetup-app
#Go into the repository
$cd meetup-app
#Install dependencies
$npm install
#Run the app
$npm start
```

## Acknowledgements

This project was based on one of the projects that can be found in [React - The Complete Guide](https://www.udemy.com/course/react-the-complete-guide-incl-redux/) by Maximilian Schwarzmüller.

## Contact

Created by [@noszczykmichal](https://noszczykmichal.github.io/portfolio/index.html#contact) - feel free to contact me!
