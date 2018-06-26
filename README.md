# Feed Reader App Testing

Testing Feed Reader App with Jasmine testing framework

## Getting Started

Clone or download repository and unzip it. Open index.html with browser.

### Prerequisites

All dependencies bundled with repository, you need only a browser to open index.html

## Running the tests

Written test suits located in ``jasmine/spec/feedreader.js`` file, to run test open index.html, to rerun refresh the page.

### Break down into end to end tests

'RSS Feeds' test suite - tests ``allFeeds`` array to be defined, and loaded with appropriate elements

'The menu' test suite - tests the menu for visibilty behavior

'Initial entries' test suite - tests ``loadFeed`` function. It checks whether feed loaded to container correctly.

'New Feed Selection' test suite - tests ``loadFeed`` function. It checks whether feed loaded with new elements when other feed is selected

## Test framework

* [Jasmine 2.1.2](https://jasmine.github.io/2.1/introduction) - The test framework used

## Contributing

Feel free to conrtribute without any restrictions.

## Authors

* **Akmal Anvarov** - *Initial work* - [anvarov](https://github.com/anvarov)
