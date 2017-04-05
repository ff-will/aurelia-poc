# aurelia-poc
Test of Aurelia as front-end framework

# install
%> npm install

# run
%> au run --watch
Open in browser at http://localhost:9000

# test
Fill in address form (data gets stored in state)
Click on "Zur Arztsuche" button
Search for "Müller" or "casamed HMO" (or both, which will display an error message)
Click on "Wählen" to select a doctor

# developer manual
The "app" component contains the routing info
The other components are located in the "components" folder
The "services" folder contains the fake doctor REST API and the state services (a simple JS class)
The "webresources" folder contains all the fonts, icons etc.
The "styles" folder contains the css files (no sass at this time)