(function () {
  var theImages = document.querySelectorAll('.image-holder'),
      theHeading = document.querySelector('.heading'),
      theSubhead = document.querySelector('.main-copy h2'),
      theSeasonText = document.querySelector('.main-copy p'),
      appliedClass;

      //I want to change all the content on the page
      function changeElements() {
        //debugger; //this is a special term that stops code excecution
        let subImages = document.querySelector('.subImagesContainer');
        let objectIndex = dynamicContent[this.id];

        //Remove duplicated images
        while (subImages.firstChild){
          subImages.removeChild(subImages.firstChild);
        }

        //add the images tot the bottom of the page
        objectIndex.images.forEach(function(image, index) {
            //Creates an image element
            let newSubImg = document.createElement('img');

        //add a css class to it
        newSubImg.classList.add('thumb');
        //Set the source
        newSubImg.src = "images/" + objectIndex.images[index];
        //add it to the page
        subImages.appendChild(newSubImg);
        });

        //Remove resets the last css class applied so will keep it in a loop
        theSubhead.classList.remove(appliedClass);
        theHeading.classList.remove(appliedClass);

        //Change text using values of properties in the objects
        theSubhead.firstChild.nodeValue = objectIndex.headline;
        theSeasonText.firstChild.nodeValue = objectIndex.text;

        //adding colours that correspond to the season clicked on
        theSubhead.classList.add(this.id);
        theHeading.classList.add(this.id);

        appliedClass = this.id;

      }
      //for (i=0; i<someht; i++){} -> not intuitive, easier way bellow
      // collecting all the images and applying the same effet to all of them

      theImages.forEach (function(image, index){
        //add handler to each image
        image.addEventListener('click', changeElements, false);
      });

      //That's gonna call the spring "click" when page loads - 2 possible ways
      //document.querySelector('#spring').click();
      changeElements.call(document.querySelector('#spring'));

})();
