# SuperTestDemo With Grunt
This is a SuperTest demo with [Grunt](http://www.gruntjs.net/)
* A method about get
* Verify the response code:[https://github.com/aimer1124/SuperTestDemo](https://github.com/aimer1124/SuperTestDemo)
* Use grunt to control the command

# How to use

```
grunt
```

# Result

```
➜  SuperTestDemo git:(uploadFile) ✗ grunt
Running "mochaTest:test" (mochaTest) task


  Test Demo.
    - Visit master


  0 passing (4ms)
  1 pending


Done, without errors.

```

# Switch different Environment

* Default is master
* Switch ENV to `branch`
 * type command in command line `export NODE_ENV=branch`
 * use `grunt`
 
```
➜  SuperTestDemo git:(uploadFile) ✗ export NODE_ENV=branch
➜  SuperTestDemo git:(uploadFile) ✗ grunt
Running "mochaTest:test" (mochaTest) task


Test Demo.
 - Visit branch


0 passing (3ms)
1 pending


Done, without errors.

```