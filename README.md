
## style
1. I made a animation for down arrow using keyframes.
    for 0,20 i have put translate 0 pixels but for 40% I have put 5 pixel with 3px at 60%. Again for 50% i have given 0 pixel translate, thus making it bounce up and down.

2. overflow hidden makes the scroll bar to disappear.(be it x or y)

3. We can flex the elements by media queries and diaplay flex.(not only material ui and bootstrap helps :))

4. We can use dereferencing in styled components such as
   background-image: ${props =>`url("/images/${props.bgImage}")`}  refer section.js for this.

5. If you made position of particular element fixed in style. Then it remains at the same position of screen no mater where you scroll.( see style of header component )

6. if you want to align something wrap it inside a component or div.

7. NOTE: if you want a div over another div then the div which you want over should be wrapped under the below wala div. then give z-index 1 to below wala div and 16 to upper wala div.

8. when you display flex it is default row direction. if you want in column(do flex-direction: column). it might be needed when you make side bar;

9. If you want to align something first wrap it ;)

10. If you wnat to use your useState variable from the function you defined(eg. in custom div styles) you have to pass it. now to you can access this variable as props outside the function(see burgerMenu);



## React description
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
