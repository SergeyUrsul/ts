=== Prepare github project ts ===

https://github.com/SergeyUrsul/ts

>git clone ts
>copy <work files and dirs> to .\ts
>git add .
>git commit -m 'create project'
>git push origin master 

=== Configuring the TS Compiler =====

>tsc index.ts
sort>tsc --init
message TS6071: Successfully created a tsconfig.json file.

tsconfig.json:
    "outDir": "./build",   /* Redirect output structure to the directory. */
    "rootDir": "./src",    /* Specify the root directory of input files. Use to control the output directory structure with --outDir. */
>tsc

=== Concurent Compilation and Execution ===

>npm init -y  // to create package.json
>npm install nodemon concurrently

package.json:    
    "start:build": "tsc -w",
    "start:run": "nodemon build/index.js",
    "start": "concurrently npm:start:*"

>npm start  

