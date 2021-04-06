# KeypressWrapper

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.


## Steps to interact:

Once loading the application, you can see 3 add buttons at the top.
if you click on the add button you will see 2 input box. One is for adding key combo to that component and one input is for giving color for that key event.
you can add multiple key combo to a particular component also can mention color code for each event.
once you add the key event and color code. you can trigger that event using keypress and it will change background color of the component based on the event you triggered.

## How I have implemented:

I have used 5 components and one sharedService file to implement this.

### a Component, b component, c component file: 

These are just dummy component to hold the different color.

### configure component file:
configure component deals with shared service and it creates event list configurtaion. It takes compnent name and returns a callback method which has color , description and index.

### keyboardShortcut component file:
it takes key combo and description as input and return a callback for each event

### sharedService service file:

sharedservice file used for holding the state of all the events.


