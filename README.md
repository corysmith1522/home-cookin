# Home-Cookin

<br>

## Overview

_**Lara's Home Cookin** is a restaurant's ordering app that allows a logged-in user to view the restaurant's menu on one screen, decide which delicious dish they would like to order, place an order in a simple form, and submit their order. The cool part is that the app allows for real-time updates to a person's order, and allows for order cancellation directly on the app. Also, orders are unique to just the user, so different users cannot see other user's orders unfortunately._


<br>

## MVP

_The **Lara's Home Cookin** user will be able to create, read, update and delete orders while also viewing the full restaurant menu._

<br>

### Goals

- _Create a well-designed menu showing all possible dish options._
- _Allow for user registration, authentication, login, and verification._
- _Once user is logged in, add functionality to create an order in a custom form._
- _Once order is made, allow user to update and/or delete their orders in real-time._
- _Users will be able to see all previous orders for easy reference to place again._

<br>

### Libraries and Dependencies



|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _Front-end client server_ |
|   React Router   | _Front-end navigation between pages_ |
|  Ruby on Rails   | _Back-end server to store all data passed into the app_ |

<br>

### Client (Front End)

#### Wireframes

> Use the Wireframes section to display desktop, tablet and mobile views. No hand-drawn wireframes. Use a tool like wireframe.cc, Whimsical or AdobeXD

![Dummy Link](url)

- Desktop Landing

![Dummy Link](url)

- Desktop Hero

![Dummy Link](url)

- Resource Index

![Dummy Link](url)

- Resource Show

![Dummy Link](url)

- Tablet Resource Index

![Dummy Link](url)

- Mobile Resource Index

#### Component Tree

> Use this section to display the structure of how your React components are being rendered. This should show the parent to child relation between you components. In other words, show which components are rendering the other components. 

#### Component Hierarchy

``` structure

src
|__ index.js
|__ index.css
|__ App.js
|__ App.css
|__ assets/
      |__ images
      |__ mockups
|__ components/
      |__ Header.jsx
      |__ Header.css
      |__ Footer.jsx
      |__ Footer.css
|__ containers/
      |__ MainContainer.jsx
|__ layouts/
      |__ Layout.jsx
      |__ Layout.css
|__ screens/
      |__ Home.jsx
      |__ Home.css
      |__ Menu.jsx
      |__ Menu.css
      |__ Orders.jsx
      |__ Orders.css
      |__ CreateOrder.jsx
      |__ CreateOrder.css
      |__ EditOrder.jsx
      |__ EditOrder.css
      |__ SelectFromMenu.jsx
      |__ SelectFromMenu.css
      |__ Login.jsx
      |__ Login.css
      |__ Register.jsx
      |__ Register.css
|__ services/
      |__ apiConfig.js
      |__ auth.js
      |__ menu.js
      |__ orders.js

```

<br>

#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Add Contact Form    |    L     |     3 hrs      |     2 hrs     |    3 hrs    |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| TOTAL               |          |     6 hrs      |     3 hrs     |     TBD     |

> _Why is this necessary? Time frames are key to the development cycle. You have limited time to code your app, and your estimates can then be used to evaluate possibilities of your MVP and post-MVP based on time needed. It's best you assume an additional hour for each component, as well as a few hours added to the total time, to play it safe._

<br>

### Server (Back End)

#### ERD Model

![ERD Diagram](https://github.com/corysmith1522/home-cookin/blob/dev/home_cookin_ERD.png)

<br>

***

## Post-MVP
_These are possible goals for post-MVP:_

- _Admin user can delete any user's orders._
- _Create order button on menu that autofills the form with data from that menu item._
- _Credit card payment authorization and security._
- _Animations for transitions between pages._

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.