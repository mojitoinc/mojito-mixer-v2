
## Contributing

### Next.js development playground:

While this project will be installed as a dependency in other apps, it also provides a development/test playground to speed up development and improve DX. In order to use it:

1. First, duplicate [`app/.env`](https://github.com/mojitoinc/mojito-mixers/blob/main/app/.env) to [`app/.env.local`](https://github.com/mojitoinc/mojito-mixers/blob/main/app/.env.local) and add the two missing values.

2. To start the Next.js development playground:

    ```bash
    yarn --cwd app install
    yarn dev
    ```

    This will install the dependencies defined in [`app/package.json`](https://github.com/mojitoinc/mojito-mixers/blob/main/app/package.json) and run the Next.js app inside `./app`.
    
3. Access the project at [http://localhost:3000](http://localhost:3000).

4.  Before committing, be sure to fix all linting errors:

    ```bash
    yarn lint:fix
    ```

<br />
## Building this project as a library

The project includes a separated Rollup build to build it as a library that can be installed and consumed by other projects.

To build the lib:

```bash
yarn install
yarn dist:build
```