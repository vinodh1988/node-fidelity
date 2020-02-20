
#Node JS

 * Node JS application/service/library is called a node js package/module
 * Node package is usually managed by an utility called NPM (Node package manager)
 * To create a node package run the command 
   ```
      npm init
   ```
   Every node package has a central configuration file called package.json

   It contains your package name,version and dependency details

#Node Libraries and Utilities

   If we create any node app/service we might need some utilities(compiler,transpiler, test runners) and also libraries.

   Libraries needed for your app is availble in two ways  
   1. inbuilt packages
   2. External packages that could be downloaded using NPM

  Either it is a utility or a library, It is called a Node package.

## Global Downloads

  A utility should always be downloaded in global scope

  We have to run the following command in any path 

  ```
  npm install -g <utility_name>
  ex:
  npm install -g nodemon
  ```

## Local Downloads

  Libraries needed for your application/service can be catogorized into
  two types
  1.Production Dependency
  2.Development Dependency

 #### Production Dependency 
    
    Dependencies needed not only in the development but also
    production

    Angular, react, jquery, bootstrap

    To download production dependencies

    run
```
    npm install <libraryname>
    npm install --save <libraryname>
```

#### Development Dependency
     
     Dependency only needed for Development

     Ex:
       Any testing library

       jasmine, chai, karma 

   run 

```
     npm install --save-dev <libraryname>
```