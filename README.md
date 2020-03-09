# quanteon-interview-task
This repository is created for committing code developed for the Quanteon interview task.

## Steps for Running the Application

### 1. Clone the application using the command :  git clone https://github.com/mrkartikmishra/quanteon-interview-task.git

### 2. After successfully cloning the application "quanteon-interview-task" folder will be created containing two folders front-end and back-end

### 3. Navigate to quanteon-interview-task/back-end path and run "npm install"

### 4. Navigate to quanteon-interview-task/back-end path and run "npm start" 

### 5. Navigate to quanteon-interview-task/front-end path and run "npm install"

### 6. Navigate to quanteon-interview-task/front-end path and run "ng serve --open"

### 7. After successful build, application home page will be opened.


## Backend JSON data (needed for testing purpose, also tester can modify "checkedIn" flag(path: /quanteon-interview-task/back-end/data/data.json) for passenger checkin status check)


1. confirmationNo : axyz001002
   LastName: Mishra
   
2. confirmationNo : bpqr001002
   LastName: Halder
   
   
 ## data.json

[
  {
    "confirmationNo": "axyz001002",
    "firstName": "Kartik",
    "lastName": "Mishra",
    "contactNo": "9732107674",
    "email": "kartikmishra.km44@gmail.com",
    "passengers": [
      {
        "pid": 1,
        "name": "Kartik Mishra",
        "age": 29,
        "seatNo": 20,
        "checkedIn": true
      },
      {
        "pid": 2,
        "name": "Rahul Roy",
        "age": 30,
        "seatNo": 45,
        "checkedIn": false
      }
    ],
    "flightDetails": {
      "id": "ABC-G8",
      "company": "XyzAirline",
      "duration": 590,
      "segment": [
        {
          "duration": 590,
          "departureTime": "2020-04-04T21:30-03:00",
          "arrivalTime": "2016-04-04T06:20-04:00",
          "origin": "Kolkata",
          "destination": "Hyderabad"
        }
      ]
    }
  },
  {
    "confirmationNo": "bpqr001002",
    "firstName": "Gopal",
    "lastName": "Halder",
    "contactNo": "9832486745",
    "email": "gopal.halder@gmail.com",
    "passengers": [
      {
        "pid": 1,
        "name": "Priya Chakraborty",
        "age": 25,
        "seatNo": 30,
        "checkedIn": false
      },
      {
        "pid": 2,
        "name": "Sachin Burma",
        "age": 45,
        "seatNo": 41,
        "checkedIn": false
      }
    ],
    "flightDetails": {
      "id": "XYZ-W7",
      "company": "XyzAirline",
      "duration": 750,
      "segment": [
        {
          "duration": 750,
          "departureTime": "2020-05-10T21:30-03:00",
          "arrivalTime": "2016-05-11T06:20-05:00",
          "origin": "Delhi",
          "destination": "Mumbai"
        }
      ]
    }
  }
]

