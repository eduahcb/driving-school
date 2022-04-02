<h1 align="center">Driving School</h1>

<h2  align="center">A project to learn react</h2>

<p align="center" style="font-size: 18px;">
  <a href="#project">Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#techs">Techs</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#how-to-use">How to use</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="https://driving-school-gamma.vercel.app/">Site</a>
</p>


<div align="center" display="inline-block" margin="50px">
  <div display="inline-block;">

  ![Code Climate maintainability](https://img.shields.io/codeclimate/maintainability/eduahcb/driving-school?style=for-the-badge)
  
  </div>


  <div display="inline-block" style="margin: 0 10px;">

   
  
  </div>

  <div display="inline-block" style="margin: 0 10px;">

   

  </div>
</div>

# Project

## Preview

<p align="center">
<img src=".github/driving-school.gif" />
</p>


## Structure

```text
  ├── assets
├── components
│   ├── atoms
│   │   ├── Accordion
│   │   └── __snapshots__
│   ├── molecules
│   ├── organisms
│   └── pages
├── hooks
├── stories
│   └── assets
└── styles
```

- assets - static files (images, icons)
- components - project components. The components are divided according to Brad Frost's atomic design. Reference [about atomic design](https://medium.com/pretux/atomic-design-o-que-%C3%A9-como-surgiu-e-sua-import%C3%A2ncia-para-a-cria%C3%A7%C3%A3o-do-design-system-e3ac7b5aca2c)

- hooks - custom hooks
- stories -  assets to use in stories files
- styles - all about design styles (Theme, GlobalStyles, Media Queries)
### 

# Techs

- [React](https://pt-br.reactjs.org/)
- [Create React App](https://create-react-app.dev/)
- [Circle Ci](https://circleci.com/)
- [Code Climate](https://codeclimate.com/)
- [Code Cov](https://about.codecov.io/)


# How to Use

## Clone the repository

```sh
 
git clone https://github.com/eduahcb/driving-school.git

cd driving-school
 
```

### Install Dependencies

```sh
   
  yarn install

```

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/
