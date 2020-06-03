<font size="4">
<h1>Crypto App</h1>
---

<strong>Crypto App</strong> is an web app based on SPA built up on [React JS](https://reactjs.org/) components and it get the rank of cryptocurrency.

[The app](CryptoApp.epizy.com) shows the most wanted 100 cripto coins that are on the market.

<div style="text-align: center"> 
<img src="https://github.com/AndreiCinc/cryptoApp/blob/master/public/img/100Cards.gif">
</div>

<br>
	It contains cards which has a name, main details and you will see more details about coins pushing a button.
</br>

<div style="text-align: center">
<img src="https://github.com/AndreiCinc/cryptoApp/blob/master/public/img/topButton.gif">
</div> 

<br>
	Using the top button, you can insert a number, from 1 to 100, wich means the ranking you want to see on this app.
</br>

<div style="text-align: center">
<img src="https://github.com/AndreiCinc/cryptoApp/blob/master/public/img/details.gif">
</div> 

<br>
	By entering a rank and clicking on "Details" button you will see details about the coin like rank, percentage (1h/24h/7d) and market cap.
</br>

Using a <a href="https://infinityfree.net/">host</a> <a href="CryptoApp.epizy.com">the app</a> can be used in real time by anyone you want.

<h1>Techs</h1>

<strong>
<li><a href="https://reactjs.org/">React Js</a></li>
<li><a href="https://www.javascript.com/">JavaScript</a></li>
<li><a href="https://www.w3schools.com/css">CSS</a></li>
<li><a href="https://html.com/">HTML</a></li>
<li><a href="https://git-scm.com/">Git</a></li>
<li><a href="https://www.npmjs.com/get-npm">npm & npx</a></li>
</strong>

<h1>Installation</h1>

<h2>Quick Overview</h2>

<pre>     npx create-react-app my-app
     cd my-app
     npm start
</pre>

If you previously installed `create-react-app` globally via `npm install -g create-react-app`, it is recommended to uninstall the package using `npm uninstall -g create-react-app` to ensure that npx always uses the latest version. 

<div style="text-align: center">
<img src="https://github.com/AndreiCinc/cryptoApp/blob/master/public/img/installGif.gif">
</div> 

When you are ready to deploy to production, create a minified bundle with `npm run build`.

<h2>Get Started</h2>

You don`t need to install or configure tools like webpack or Babel.
They are preconfigured and hidden so that you can focus on the code

Create a project, and your`re good to go.

<h3>Creating an App</h3>

As you can see [here](https://github.com/AndreiCinc/cryptoApp/blob/master/public/img/installGif.gif) you will need to have Node 8.16.0 or later version on local development machine.

To create a new app, you may chose one of the following methods.

<strong>npx</strong>

`npx create-react-app app-name`

([npx](https://www.npmjs.com/package/npx) is a package runner tool that comes with npm 5.2+ and highter)

<strong>npm</strong>

`npm init react-app- app-name`

`npm init <initializer>` is available in npm 6+.

It will create a directory called `app-name` inside the current folder.
Inside that directory, it will generate the initial project structure and install the transitive dependencies.

<code>
	<pre>  app-name
	├── README.md 
	├── node_modules
	├── package.json
	├── .gitignore
	├── public
	│       ├── favicon.ico
	│       ├── index.html
	│   	└── manifest.json
	└── src
		├── App.css
		├── App.js
		├── App.test.js
		├── index.css
		├── index.js
		├── logo.svg
		└── serviceWorker.js
		└── setupTests.js
	</pre>
</code>

No configuration or complicated folder structures, only the files you need to build your app.

`cd name-app`

Inside the newly created project, you can run some built-in commands:

`npm start`

Runs app in development mode.
Open [localhost:3000](http://localhost:3000) to view it in the browser.

The page will automatically reload if you make changes to the code.

`npm test`

Runs the test watcher in an interactive mode.
By default, runs tests related to files changed since the last commit. ([more about testing](https://create-react-app.dev/docs/running-tests/)

`npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

<strong>Your app is ready to be deployed.</strong>
