# protractor-demo

Proof of concept for e2e testing angular using
- protractor
- karma
- jasmine
- grunt

## Requirements

### 1. Runtimes
- NodeJS: http://www.nodejs.org (The version on Chocolatey was too old at this time)
- JRE8 (using Chocolatey): `choco install jre8 -y`
- Python2 (using Chocolatey): `cchoco install python2 -y`

If you have Python3 already installed, ensure Python2 is the one being loaded by moving the Python2 directory above the Python3 directory in the PATH variable string. Ensure it's Python2 by entering `python` in the console and note the version number.

#### 1.1 Ensure runtimes are available on PATH/command line
- Ensure typing `node`, `npm`, `java`, and `python` does not produce an error in the console.

### 2. Global node packages
```
npm install -g grunt-cli
npm install -g protractor
npm install -g bower
npm install -g http-server
```

#### 2.1 Ensure global node packages are available on PATH/command line
- Ensure typing `grunt`, `protractor`, `bower`, and `http-server` does not produce an error in the console.

### 2. Selenium drivers
The Selenium drivers must be available on PATH. This project uses the IE driver.

- Copy`\thirdparty\selenium-ie-driver\x86\IEDriverServer.exe` and put it in `%userprofile%\AppData\Roaming\npm` since this directory is already on PATH.
	- TODO: Look for npm package for this or create one.

### 3. Install packages

```
npm install
bower install
```

### 4. Run Grunt tasks
```
grunt         runs unit tests with karma and e2e tests with protractor (default)
grunt unit    runs unit tests with karma
grun e2e      runs e2e tests with protractor
```

### 5. Browse site
- In a separate terminal type `http-server` in the root folder (where all the config files are).
- Open a browser and browse to `http://localhost:8080/app/src/index.html`

### Note
- IEDriverServer.exe under thirdparty/selenium-ie-driver/x86/ needs to be on PATH. 
	- TODO: Look for npm package for this or make a workaround that puts this on PATH on install.