# ID Assignment 2 - VerrMaps

A website created to allow users to find locations of certain places in Singapore, as well as finding directions to different destinations on the map, using Mapbox's API. VerrMaps, has a short, memorable and original name, named after my username. VerrMaps also allows users to find their current location, and the map also has different controls to zoom in and out, or to drag and rotate the map.

# Design Process

As explained from the introduction, this is a website that allows any user with access to technology to find their current location, pinpoint different locations, as well as to find general directions to any point on the map.

* As an external user,
  * I want to go to the Service page to find my current location, or to search a certain location in Singapore.
  * I want to go to the Directions page to find directions to a destination I want to go, via different modes of transport e.g. walking, driving as well as cycling.
 
* As the website owner,
  * I want to get the user to be able to find their way to different destinations, and also to find their current location so that they do not get lost.
  
# Features

* Existing Features
  * Homepage (index.html)
    * Direct buttons - allows users to access the service and directions page by clicking on buttons on the homepage.
    * Email modal popup with form validation - allows users to signup for a weekly newsletter, by having them fill out a modal email validated pop up form.

  * Service page (service.html)
    * Locate user with marker - allows users to find their current location using the geolocation API provided by Mapbox by clicking on the location button.
    * Locate places with marker - allows users to find locations on the map by searching on the search bar also by using Mapbox's geolocation API.

  * Directions page (directions.html)
    * Input starting location and destination - allows users to input a location and their destination to provide them a route, an estimated time, as well as directions e.g. walk east, drive west, using Mapbox's navigation API.

* Features left to implement
  * Homepage (index.html)
    * Register/login modal popup - allows users to sign up or login via a modal pop up register/login page by having them input correct data.
   
  * Service page (service.html)
    * Automatic POI finder - allows users to find points of interest (POIs) near them automatically by clicking on the location button to find their current location.
    
  * Directions page (directions.html)
    * Input current location as starting destination - allows users to input their current location as the starting destination by clicking on a popup called "Use current location" 
    
* Technologies used
  * Mapbox - https://www.mapbox.com
    * This project uses Mapbox's API (mainly geolocation and navigation) to implement the main service of the website (service and directions page), which was already explained above.
    
# Testing 
  * Newsletter modal popup form
    * Go to the homepage
    * Try to submit an empty form and verify that error messages about the required fields appears
    * Try to submit the form with an invalid email address and verify that a relevant error message about the field appears
    * Try to submit the form with a username more than 30 letters (spam your keyboard) and verify that a relevant error message about the field appears
    * Try to submit the form with valid information and verify that the fields appear green (a way to indicate that information are correct)
    * Try to visit the page on a phone or preview it in phone web resolution and verify that the image for the form disappears
    
  * Search bar
    * Go to the service page
    * Try to search a place not in Singapore and verify that either: nothing appears, or a place in Singapore with a name similar to the search appears
    * Try to search a place in Singapore and verify that it correctly locates the place, and is located in Singapore
    
  * Map maximum zoom out
    * Go to the service page
    * Try to zoom out as much as possible and verify that it does not zoom beyond the boundaries of Singapore
   
  * Navigation arrows
    * Go to the service or directions page
    * Try to click on the arrows on the top-right of the map and verify that they zoom in and zoom out respectively
  
  * Rotation arrow
    * Go to the service or directions page
    * Try to click and drag your mouse around and verify that the map rotates accordingly
    
  * Navigation 
    * Go to the directions page
    * Try to enter a starting location in Singapore and verify that it locates and marks the place with a symbol
    * Try to enter a destination anywhere in Singapore and verify that it locates and marks the place with a different symbol from the starting place
    * A route should popup; verify that all modes are clickable if possible (except walking on water, driving on water)
    * Try to enter a starting location anywhere outside of Singapore and verify that the map does not zoom out beyond Singapore, and so the location is not seen on the map
    * Try to enter a destination anywhere outside of Singapore and verify that the map does not zoom out beyond Singapore, and so the location is not seen on the map
    
  * Hamburger header
    * Go to any page
    * Try to visit the page on a phone or preview it in phone web resolution and verify that a hamburger menu replaces the web header
    * Try to click on the different buttons on the hamburger header and verify that each subheader should be working correctly and bringing you to the correct pages
  
  * Images on website
    * Go to any page with images
    * Try to visit the page on a phone or preview it in phone web resolution and verify that the images disappear
    
  * Difficulties, bugs and problems
    * Implementing the register/login form that uses localstorage - I couldn't allow the user to signup only if the form validated valid information. This actually allowed me to register an account with blank information, and was also able to login with the blank information. Registering a new account would also wipe out previous information in the local storage.
      * With this implementation that I tried, I also tried to display a page: the service page, only if the user was logged in. But since the register/login part did not work, I had to scrape this idea.
      
    * Implementing the navigation API with the geolocation API on the same page - I wasn't able to put both the search bar and the directions bar on the map at the same time, because these two bars actually require different css. Using two different css at the same time would not work, the one further down the script overrides the other one.
      * With this implementation I tried to use the user's current location as the starting location, but I was not able to fix this problem and also would not know how to display "Use current location" as a pop up on the search bar.
      
    * Modal form scroll bar - the email pop up form on the homepage is not supposed to have a scrollbar, because with it the page will look very weird. It was an interesting bug but I managed to fix it by adjusting the maximum width both for the webpage as well as for @media screen and (max-wdith: 576px), removing the scrollbar when the modal pop up form appears.
    
# Credits
  * Content
    * Header, modal form, footer - https://www.youtube.com/playlist?list=PLs1fqgQpnCmJ018jq-A3Ra9GrFWcPgOc1
    * Terms of service - https://www.termsofservicegenerator.net/#wizard
    * Privacy policy - https://www.privacypolicygenerator.info
    * Current location service - https://docs.mapbox.com/mapbox-gl-js/example/locate-user/
    * Map navigation controls - https://docs.mapbox.com/mapbox-gl-js/example/navigation/
    * Geocoder (local search bar) - https://docs.mapbox.com/help/tutorials/local-search-geocoding-api/
    * Directions - https://docs.mapbox.com/mapbox-gl-js/example/mapbox-gl-directions/
    
  * Media
    * Images used on this site were obtained from https://undraw.co
    
  * Acknowledgements
    * I received inspiration for this project from Brian Design.


