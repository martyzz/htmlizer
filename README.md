## htmlizer
HTML visualizer wrote in React & Redux. Application allows user to create and view HTML tags & attributes without writing markup. Markup is generated automatically from created nodes.

### Demo
Here is an application demo:

[https://htmlizer.herokuapp.com/](https://htmlizer.herokuapp.com/)

### Build
In order to localy run this application:

#### Client

```
$ git clone https://github.com/martyzz/htmlizer.git htmlizer-client
$ cd htmlizer-client
$ yarn install
```

Change ``API_ROOT`` constant in ``src/constants.jsx`` to address of your [htmlizer-backend](https://github.com/martyzz/htmlizer-backend) server.

```
$ yarn start
```

#### Server
Follow these instructions [htmlizer-backend](https://github.com/martyzz/htmlizer-backend).


### Structure

#### Saving functionality
Application allows user to save content of current "project" (I don't like calling any work created in visualizer a project because whole application is just an experiment) using [htmlizer-backend](https://github.com/martyzz/htmlizer-backend) project.

#### Elements pane
Contains drag & droppable html tag, text and comment nodes you can drag into Visual pane and also contains search bar for easier navigation.

#### Properties pane
Allows user change properties, content and tag names of a node after selecting a node in Visual pane.

#### Visual pane
Contains tree-like structure representing HTML markup. Each node could be duplicated or deleted with all its child nodes. Each node is selectable and after selection Properties opens with details.

#### Code pane
Contains generated markup itself. Markup could be also modified which results into changing Visual pane & Properties pane.

(Modification of Code pane, even though it's possible, is not recomended, modification of Code pane could lead into problems with combining text and/or comment nodes in Visual pane.)

#### Render pane
Contains just an iframe that renders markup onto the screen. Rerenders at any changes.