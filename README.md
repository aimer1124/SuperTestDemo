# SuperTest With Grunt
This is a SuperTest demo with [Grunt](http://www.gruntjs.net/) for API testing.
* A method about get
* Verify the response code:[https://github.com/aimer1124/SuperTestDemo](https://github.com/aimer1124/SuperTestDemo)
* Use grunt to control the command

# How to use

## Install dependencies
```
npm install
```
## Run

```
grunt
```

# Result

```
➜  SuperTestWithGrunt git:(master) ✗ grunt
Running "mochaTest:test" (mochaTest) task


  Test Demo.
    ✓ Visit master (1640ms)


  1 passing (2s)


Done, without errors.

```

# Switch different Environment

* Default is master
* Switch ENV to `branch`
 * type command in command line `export NODE_ENV=branch`
 * use `grunt`
 
```
➜  SuperTestWithGrunt git:(master) export NODE_ENV=branch
➜  SuperTestWithGrunt git:(master) grunt
Running "mochaTest:test" (mochaTest) task


  Test Demo.
    ✓ Visit branch (1485ms)


  1 passing (1s)


Done, without errors.

```
