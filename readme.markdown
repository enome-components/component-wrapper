# Component Wrapper

Small wrapper that calls the component.js executable using [child_process.spawn](http://nodejs.org/api/child_process.html#child_process_child_process_spawn_command_args_options).


## Install

```sh
npm install component-wrapper
```


## API

```js
var component = require('component-wrapper');
component([args], [options]);

// Calls spawn once or multiple times depending on the length of the args array

require('child_process').spawn('/node_modules/component/bin/component', [args], [options]);
```


## Example

```js
component();

// This defaults to [ ['install'], ['build'] ] so this calls.

require('child_process').spawn('/node_modules/component/bin/component', [ 'install' ], null);
require('child_process').spawn('/node_modules/component/bin/component', [ 'build' ], null);
```


### Command arguments

```js
component([ [ '--help' ] ]);

// Calls spawn once:

require('child_process').spawn('/node_modules/component/bin/component', [ [ '--help' ] ], null);
```


### Command arguments + options

```js
component([ [ '--help' ], [ 'search', 'font-awesome' ] ], { cwd: __dirname });

// Calls spawn twice:

require('child_process').spawn('/node_modules/component/bin/component', [ [ '--help' ] ], { cwd: '/some/directory' });
require('child_process').spawn('/node_modules/component/bin/component', [ [ 'search', 'font-awesome' ] ], { cwd: '/some/directory' });
```
