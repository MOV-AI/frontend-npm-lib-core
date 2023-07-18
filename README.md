# MOV.AI Core

![Movai](https://www.mov.ai/wp-content/uploads/2021/06/MOV.AI-logo-3.png)

The Mov.AI's core frontend library.

Here we place all reusable/common code regarding frontend, such as communication with database, authentication, etc. 

Its main use will be to build Mov.AI applications.

## Building Mov.ai Core

1. Git clone mov.ai core

2. Create new branch from dev

3. Update mov.ai core

4. Test updates

5. Commit/Push changes

6. Create pull request
   - Make sure to include the code owners

## Import Mov.ai Core

1. Import Mov.ai Core:

   - Goto your project
   - Install package:
     - `npm install @mov-ai/mov-fe-lib-core`

2. Update package
   - `npm update`


## Running tests

`npm run test`

## Running test on html

A developer can test a build version of this library using the static test html in `test/index.html`, by running

`npm run testStatic`

Then open the browser at `http://localhost:3030/test/index.html`
