
  
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

## Developement Build

- change following line on package.json.
```
  "version": "<Requried to increase>",
  "main": "dist/cjs/src/index.js",
  "module": "dist/esm/src/index.js",
```
- you must be comment dist folder from ```.gitignore```, need to commit build source files
```
  # production
  /build
  # dist
  /app/build
```
- add source project package.json with commit hash
  ```
    "@mojitonft/mojito-mixers": "git+https://github.com/mojitoinc/mojito-mixer-v2.git#8f564402ac8b8a4b261f0a8ca745f206caa9a301"

  ```

- Troubleshooet
    Incase of build is failed due to lint issue, you have to delete folder from src (DON'T DELETE app/src)
  <br />