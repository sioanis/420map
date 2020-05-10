# Map of Cannabis Regulations Worldwide

This map was built using [React](https://reactjs.org/), [Nivo Cloropleth](https://nivo.rocks/choropleth/), and data scraped from [Wikipedia](https://en.wikipedia.org/wiki/Legality_of_cannabis).

Preview: https://420map.live

Legend:

```
case 0:
  return "Illegal";
case 1:
  return "Illegal but often unenforced";
case 2:
  return "Illegal but decriminalized";
case 3:
  return "Legal as authorized by a physician";
case 4:
  return "Legal";
default:
  return "Unknown";
```

https://en.wikipedia.org/wiki/Legality_of_cannabis

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
