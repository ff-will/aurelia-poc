# aurelia-poc
Test of Aurelia as front-end framework

# install
`%> npm install`

# run
`%> au run --watch`

Open in browser at http://localhost:9000

# test
1. Fill in address form (data gets stored in state)
2. Click on "Zur Arztsuche" button
3. Search for "Müller" or "casamed HMO" (or both, which will display an error message)
4. Click on "Wählen" to select a doctor

# developer manual
* This POC is written in TypeScript. This however is not enforced by Aurelia but rather a choice taken during the setup to benefit from the type safety.
* The "app" component contains the routing info
* The other components are located in the "components" folder
* The "services" folder contains the fake doctor REST API and the state services (a simple JS class)
* The "webresources" folder contains all the fonts, icons etc.
* The "styles" folder contains the css files (no sass at this time)
