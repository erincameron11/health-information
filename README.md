### Follow the instructions below to guide you through both Assignment questions "Unit Testing" and "Parse JSON into HTML"

---

# 1) JSON Formatting of patient.json
* Visit URL `https://github.com/erincameron11/health-information/commit/bf5b7a7651f2cca9b0ec092a9855179756286197` to view the commit history of the `patient.json` file with a comparison of syntax that was changed.
* This can also be accessed through `https://github.com/erincameron11/health-information` > `json_formatting` folder > `patient.json` file > click on `Latest Commit`

---

# 2) Parse JSON data and output into HTML
* The file `patient.json` has been correctly formatted prior to this portion of the assignment.

### Setup:
1. Clone this github repo in your terminal

2. Navigate to the folder `parse-json` in your terminal

3. Install npm with command: `npm install`
    * If you do not have npm installed, first download nodejs: `https://nodejs.org/en/download/`. To check if you have it installed type command `node -v`

4. Install python3 by visiting <a href="https://www.python.org/downloads/">python's site here</a> to download. 
    * To check if you have installed it correctly use command `python3 -version` on Mac, and `python --version` on Windows

5. Once python3 has been downloaded, serve the application via python's SimpleHTTPServer module with command: `python3 -m http.server 8000` in your terminal

6. To view the application in a browser type the following into the URL: `localhost:8000/index.html`

    Reference: Medical Cross Icon made by https://www.freepik.com Freepik from www.flaticon.com

---

# 3) Unit Testing
* All unit tests are contained with the file `index.test.js`.
* The file `index.test.js` contains an outline of each unit test performed, expected result, and suggested code improvements to the initial function to accommodate numbers that are multiples of both 3 and 5.

### Setup
1. Clone this github repo in your terminal

2. Navigate to the folder `unit-test`

3. Install npm using the command: `npm install`
    * If you do not have npm installed, first download nodejs: `https://nodejs.org/en/download/`. To check if you have it installed type command `node -v`

4. Install jest to perform the unit tests locally: `npm install --save-dev jest` in your terminal

5. To run the test locally, perform the command: `npm test` in your terminal