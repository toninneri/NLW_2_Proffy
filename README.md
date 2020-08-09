# NLW_2_Proffy
Project developed during the second NLW week Omnistack by Rocketseat.

<h1 align="center">
    <img alt="Proffy" src="./gitdesign/logo.svg" height="300px" />
    <br>Next Level Week #2<br/>
    Node.js | ReactJS | React Native
</h1>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/HigorSnt/proffy?style=flat-square">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/HigorSnt/proffy?style=flat-square">
  <img alt="GitHub" src="https://img.shields.io/github/license/HigorSnt/proffy?style=flat-square"> 
  <img alt="Made by Rocketseat" src="https://img.shields.io/badge/made%20by-Rocketseat-%237519C1?style=flat-square"><br/>
  <a href="https://insomnia.rest/run/?label=Proffy&uri=https%3A%2F%2Fraw.githubusercontent.com%2FHigorSnt%2Fproffy%2Fmaster%2F.github%2FInsomnia.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>
</p>
<p align="center">
  <a href="#bookmark-sobre">About</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-tecnologias">Techs</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#boom-como-executar">How to execute</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licence</a>
</p>

<p align="center">
  <img alt="project design" width="650px" src="./gitdesign/tonproff.png" />
<p>

## :bookmark: About

**Proffy** is a Web and Mobile application designed to help connect students and teachers. Therefore, this application offers teachers the possibility to register classes, being able to add information such as the discipline, cost and timetable and students the possibility to search for registered classes.
  
This project was conceived thinking about the **August 6**, where the **National Day of Education Professionals** is celebrated.
  
This application was carried out during Next ** Level Week # 2**, a project by [Rocketseat](https://rocketseat.com.br/).

## :rocket: Techs

-  [Typescript](https://www.typescriptlang.org/)
-  [Node.js](https://nodejs.org/en/)
-  [ReactJS](https://reactjs.org/)
-  [React Native](http://facebook.github.io/react-native/)
-  [Expo](https://expo.io/)
-  [Express](https://expressjs.com/)
-  [axios](https://github.com/axios/axios)

## :boom: How to execute

- ### **Pre-requisites**

  - It's **necessary** to have **[Node.js](https://nodejs.org/en/)** in your computer. 
  - It's **necessary** to have **[Git](https://git-scm.com/)** installed and running in your computer. 
  - You **need** to have the packages manager **[NPM](https://www.npmjs.com/)** or **[Yarn](https://yarnpkg.com/)**.
  - Finally, it's **esencial** to have **[Expo](https://expo.io/)** intalled globally in your machine.

1. Clone the repository:

```sh
  $ git clone https://github.com/HigorSnt/proffy.git
```

2. Running the application:

```sh
  # API
  $ cd server
  # Install dependencies of the project.
  $ yarn # ou npm install
  # Setting the database and creating the tables.
  $ yarn knex:migrate # ou npm run knex:migrate

  # Starting the API
  $ yarn start # or npm start

  # Web Aplication
  $ cd web
  # Installing the project dependencies.
  $ yarn # ou npm install
  # Starting the web app
  $ yarn start # or npm start

  # Mobile App
  $ cd mobile
  # Installing the project dependencies.
  $ yarn # ou npm install
  #Starting the mobile app
  $ yarn start # or npm start
```


## :memo: Licence

This project is under the MIT license. See the [LICENSE] file (LICENSE.md) for more details.
<h3 align="center">
Done by <a href="https://www.linkedin.com/in/antonio-neri-6789828/">Antonio Neri</a>
<br><br>
<a href="https://rocketseat.com.br">
  <img alt="Made by Rocketseat" src="https://img.shields.io/badge/made%20by-Rocketseat-%237519C1">
</a>
</h3>

---
<sup>Project developed with the tutorship of [Diego Fernandes](https://github.com/diego3g), by [Rocketseat](rocketseat.com.br).</sup>

