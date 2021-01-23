### Follow the instructions below to guide you through both Assignment questions "Unit Testing" and "Parse JSON into HTML"

# JSON Formatting of patient.json
* Visit URL `https://github.com/erincameron11/health-information/commit/b5099824174e9400a4bda78bf51f052eb0a134f4` to view the commit history of the `patient.json` file with a comparison of syntax that was changed.
* This can also be accessed through `https://github.com/erincameron11/health-information` > `json_formatting` folder > `patient.json` file > click on `Latest Commit b509982`

# Parse JSON data and output into HTML
The file `patient.json` has been correctly formatted prior to this portion of the assignment.

### Setup:
Clone this github repo in your terminal & navigate to the folder `parse-json`

Install npm with command: `npm install`

To install python, visit <a href="https://www.python.org/downloads/">python's site here</a> to download.

Once python3 has been downloaded, serve the application via python's SimpleHTTPServer module with command: `python3 -m http.server 8000`

To view the application in a browser type the following into the URL: `localhost:8000/index.html`

    Reference: Medical Cross Icon made by https://www.freepik.com Freepik from www.flaticon.com

---

# Unit Testing
* All unit tests are contained with the file `index.test.js`.
* The file `index.test.js` contains an outline of each unit test performed, expected result, and suggested code improvements to the initial function to accommodate numbers that are multiples of both 3 and 5.

### Setup
Clone this github repo in your terminal & navigate to the folder `unit-test`

Install npm: `npm install`

Install jest to perform the unit tests locally: `npm install --save-dev jest`

### Run the tests locally
Run the command: `npm test`