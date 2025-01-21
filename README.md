**npm** - standard repository for all the packages.

**package.json** - configuration for npm. It keeps the track of what version of packages installed.

**bundler** - webpack, parcel, babel

    - devDependencies: required for development phase
    - dependencies: used in production also
    - ^(caret): automatically upgrade the minor version
    - ~(tilde): upgrade majjor version

**package-lock.json** - locks the version and keeps the track of exact version of packages.

**node_modules** - contains the collection of dependencies. 

    - Don't put node_modules into production. 
    - Add this files into **gitignore** file.
    - package.json and package-lock.json files maintain the version of the packages.
    - If we have package.json and package-lock.json files, we can regenerate node_modules. No need to deploy into production. 
    - We can reinstall node_modules using ***npm install*** command.

- ***npx parcel index.html*** : executes parcel and parcel runs the server in port "localhost:1234".
    - npx : execeuting a package use npx
    - npm : install a package use npm

- **Parcel** : 
    - creates dev build
    - local server
    - HMR (Hot Module Replacement) : automatically refresh the page
    - Parcel uses File Matching Algorithm - written in C++
    