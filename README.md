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



|     Library/Dependency      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _Front-end client server_ |
|   React Router   | _Front-end navigation between pages_ |
|   Axios   | _Make API calls and connections from front to back_ |
|  Ruby on Rails   | _Back-end server to store all data passed into the app_ |
|   Rack_Cors   | _Middleware for handling cross-origin resource sharing_ |
|   BCRYPT   | _Hash algorithm gem for hashing passwords_ |
|   JWT   | _JSON web token package allowing for token authentication_ |


<br>

### Client (Front End)

#### Wireframes

![Home](https://github.com/corysmith1522/home-cookin/blob/dev/home_page_wf.png)

- Welcome Home page

![Login](https://github.com/corysmith1522/home-cookin/blob/dev/login_wf.png)

- Login Page

![Register](https://github.com/corysmith1522/home-cookin/blob/dev/register_wf.png)

- Register Page

![Home After Login](https://github.com/corysmith1522/home-cookin/blob/dev/home_page_after_login_wf.png)

- Home Page After Login

![Menu](https://github.com/corysmith1522/home-cookin/blob/dev/menu_wf.png)

- Menu Page

![Create Order](https://github.com/corysmith1522/home-cookin/blob/dev/create_order_wf.png)

- Create New Order Page

![Edit Order](https://github.com/corysmith1522/home-cookin/blob/dev/edit_order_wf.png)

- Edit Order Page

![View Orders](https://github.com/corysmith1522/home-cookin/blob/dev/orders_wf.png)

- Orders Page

#### Component Tree

![Component Tree](https://github.com/corysmith1522/home-cookin/blob/dev/home_cookin_component_.png) 

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
      |__ SelectFromMenu.jsx
      |__ SelectFromMenu.css
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

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Create Models/Relationships |    M     |     1 hr      |     TBD     |     TBD     |
| Seed Database with Menu Items |    L     |     1 hr      |     TBD     |     TBD     |
| Create Routes/Controllers |    M     |     1 hr      |     TBD     |     TBD     |
| Set up Authentication |    M     |     1 hr      |     TBD     |     TBD     |
| Full Backend CRUD Functionality    |    H     |     1 hr      |     TBD     |    TBD    |
| Create and Scaffold React App |    L     |     1 hr      |     TBD     |     TBD     |
| API Routes and Services |    M     |     1 hr      |     TBD     |     TBD     |
| Home.jsx Logic |    M     |     1 hr      |     TBD     |     TBD     |
| Layout.jsx Logic |    M     |     1 hr      |     TBD     |     TBD     |
| Login.jsx Logic |    M     |     1 hr      |     TBD     |     TBD     |
| Register.jsx Logic |    M     |     1 hr     |     TBD     |     TBD     |
| Header & Footer |    L     |     1 hr      |     TBD     |     TBD     |
| MainContainer.jsx Logic |    H     |     4 hr      |     TBD     |     TBD     |
| Menu.jsx Logic |    M     |     1 hr      |     TBD     |     TBD     |
| Orders.jsx Logic |    M     |     1 hr      |     TBD     |     TBD     |
| CreateOrders.jsx Logic |    M     |     3 hr      |     TBD     |     TBD     |
| EditOrders.jsx Logic |    M     |     1 hr      |     TBD     |     TBD     |
| SelectFromMenu.jsx Logic |    H     |     3 hr      |     TBD     |     TBD     |
| CSS Styling |    H     |     4 hr      |     TBD     |     TBD     |
| Logic Testing |    M     |     3 hr      |     TBD     |     TBD     |
| Post-MVP Admin User |    M     |     2 hr      |     TBD     |     TBD     |
| Post-MVP Animations |    M     |     2 hr      |     TBD     |     TBD     |
| Post-MVP Autofill |    M     |     2 hr      |     TBD     |     TBD     |
| Post-MVP Credit Card |    M     |     3 hr      |     TBD     |     TBD     |
| TOTAL               |          |     41 hrs      |     TBD     |     TBD     |

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

## Code Issues & Resolutions
