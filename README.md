# FCC-CamperLeaderBoard

The Camper Leader Board displays the ranking of FreeCodeCamp.org users based on the number of points within the last 30 days or of all time.

## Project Status

- Unmaintained
  - Data source is offline

## Prerequisites

1. Node.js v10.15.0 LTS

## Structure

```
|
├── build/                    # Compiled application
|
├── node_modules/             # Node dependencies
|
├── source/                   # Source files
|   |
|   ├── components/           # React dependency
|   ├── javascript/           # JavaScript files
|   ├── stylesheets/          # Stylesheets
|   └── index.html            # HTML template
|
├── .gitignore                # Ignores files and folders from git
├── gulpfile.js               # Tasks to build JavaScript, stylesheets, and start the webserver
├── package-lock.json         # Locks Node.js peer dependency versions
├── package.json              # Project metadata
└── README.md                 # Project documentation

```

## Commands

1. Install all Node dependencies using:
```
npm install
```

Available `gulp` targets:
- `gulp javascript` to compile JavaScript and copy to the build folder
- `gulp stylesheets` to process stylesheets and copy to the build folder
- `gulp html` to move HTML files to the build folder
- `gulp components` move dependencies to the build folder
- `gulp webserver` to start the webserver
- `gulp watch` to watch files for changes
- `gulp default` to build the application

`gulp` is not installed globally. You must use `./node_modules/.bin/gulp`.