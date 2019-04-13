# back-end

> API for BitWorld

## About


## Getting Started

Getting up and running is as easy as 1, 2, 3.

1. Make sure you have [NodeJS](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
2. Install your dependencies

    ```
    cd path/to/back-end; npm install
    ```

3. Start your app with the MongoDB Connection String passed in to the MONGO environment variable.
    - For Windows
    ```
    npm start $env:MONGO=<connection_string>
    ```
    - For Linux/Unix
    ```
    npm start MONGO=<connection_string>
    ```

## Testing

Simply run `npm test` and all your tests in the `test/` directory will be run.

## Framework

This project uses [Feathers](http://feathersjs.com). An open source web framework for building modern real-time applications.

## Changelog

__0.1.0__

- Initial release

## License

Copyright (c) 2018

Licensed under the [MIT license](LICENSE).
