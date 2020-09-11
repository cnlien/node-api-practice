# Sprint Practice: Express and Node.js - Shows & Characters

## Description

In this challenge, you will design and create a web API to manage a resource for 'Shows' as well as 'Characters' from these shows
## Instructions


If the instructions are not clear, please seek support from your TL and Instructor on Slack.

Follow these steps to set up and work on your project:

- [ ] Create a forked copy of this project.
- [ ] Clone your forked version of the Repository.
- [ ] Create a new Branch on the clone: git checkout -b `firstName-lastName`.
- [ ] Implement the project on this Branch, committing changes regularly.
- [ ] Push commits: git push origin `firstName-lastName`.

## Minimum Viable Product

- [x] Configure an _npm script_ named _"server"_ that will execute your code using _nodemon_. Make _nodemon_ be a development time dependency only, it shouldn't be deployed to production.
- [x] Configure an _npm script_ named _"start"_ that will execute your code using _node_.

Design and build the necessary endpoints to:

- [x] Perform CRUD operations on _shows_ 
- [x] Perform CRUD operation on _characters_.
- [x] When adding a character, make sure the `show_id` provided belongs to an existing `show`. If you try to add a character with a `show_id` of 3 and there is no show with that `id` the database will return an error.
- [ ] Retrieve the list of characters for a show.

Please read the following sections before implementing the Minimum Viable Product, they describe how the database is structured and the files and methods available for interacting with the data.

### Database Schemas

The description of the structure and extra information about each _resource_ stored in the included database (`./data/shows.db3`) is listed below.

#### Shows

| Field       | Data Type | Metadata                                                                    |
| ----------- | --------- | --------------------------------------------------------------------------- |
| id          | number    | no need to provide it when creating projects, the database will generate it |
| name        | string    | required.                                                                   |
| description | string    | required.                                                                   |
| watched     | boolean   | used to indicate if the show has been watched, not required            |

#### Characters

| Field       | Data Type | Metadata                                                                                         |
| ----------- | --------- | ------------------------------------------------------------------------------------------------ |
| id          | number    | no need to provide it when creating posts, the database will automatically generate it.          |
| show_id     | number    | required, must be the id of an existing project.                                                 |
| name        | string    | up to 128 characters long, required.                                                             |
| description | string    | no size limit, required.                                                                         |
| like        | boolean   | used to show if the character is someone you like, not requred                                   |

### Database Persistence Helpers

The `/data/helpers` folder includes files you can use to manage the persistence of _shows_ and _characters_ data. These files are `showsModel.js` and `charactersModel.js`. Both files publish the following api, which you can use to store, modify and retrieve each resource:

**All these helper methods return a promise. Remember to use .then().catch() or async/await.**

- `get()`: resolves to an array of all the resources contained in the database. If you pass an `id` to this method it will return the resource with that id if one is found.
- `insert()`: calling insert passing it a resource object will add it to the database and return the newly created resource.
- `update()`: accepts two arguments, the first is the `id` of the resource to update, and the second is an object with the `changes` to apply. It returns the updated resource. If a resource with the provided `id` is not found, the method returns `null`.
- `remove()`: the remove method accepts an `id` as it's first parameter and, upon successfully deleting the resource from the database, returns the number of records deleted.

The `showsModel.js` helper includes an extra method called `getShowsCharacters()` that takes a _show id_ as it's only argument and returns a list of all the _characters_ for the _show_.

We have provided test data for all the resources.

## Stretch Goal
- [x] Add a custom middleware function that logs information about every request that comes into your server e.g. provides information about the request method or request url.
- Use `create-react-app` to create an application in a separate folder (outside the API shows/data folder). Name it anything you want.
- From the React application show a list of all _shows_ using the API you built.
- Add functionality to show the details of a show, including its characters, when clicking a show's name in the list. Use React Router to navigate to a separate route to show the show's details.
- Add styling!
