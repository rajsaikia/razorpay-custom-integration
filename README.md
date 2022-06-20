# Getting Started with razorpay custom integration

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### 'npm link'

run this command to link this application to the main Application

### 'npm link path'

npm run link '../your Application Name/node_module/react' to link this application to main application

### 'npm link payment-button'

Comming back to your main application and run npm link payment-button to install this repo to main application

import PaymentButton from 'payment-button' import button to your application
<PaymentButton />

### send default parameter

You can send default values to this library otherwise we can ask user to fill there information 

<PaymentButton amount='1000' name = 'raj saikia' contact = '8860430262'
  email = 'raj.scyrus@gmail.com' address = 'Tezpur, Assam, India 784001'} />

### publish in artifactory

After publishing this repo on artifactory we can directly run npm i @payment-button and All the required files stores in node_module folder.
