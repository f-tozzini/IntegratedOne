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
        while (subImages.firstChild) {
          subImages.removeChild(subImages.firstChild);
        }

        //add the images tot the bottom of the page
        objectIndex.images.forEach(function(element, index) {
            //Creates an image element
            let newSubImg = document.createElement('img');
            //add a css class to it
            newSubImg.classList.add('thumb');
            //Set the source of the image
            newSubImg.src = "images/" + objectIndex.images[index];

            newSubImg.dataset.index = index;

            //add an event handler to trigger a lightbox
            newSubImg.addEventListener('click', function () { popLightbox(index, objectIndex); }, false);

        //add it to the page
        subImages.appendChild(newSubImg);
        });

        //Remove resets the last css class applied so will keep it in a loop
        theSubhead.classList.remove(appliedClass);
        theHeading.classList.remove(appliedClass);
        //adding colours that correspond to the season clicked on
        theSubhead.classList.add(this.id);
        theHeading.classList.add(this.id);

        //Change text using values of properties in the objects
        theSubhead.firstChild.nodeValue = objectIndex.headline;
        theSeasonText.firstChild.nodeValue = objectIndex.text;

        appliedClass = this.id;

        console.log(this.id);
      }
      //for (i=0; i<someht; i++){} -> not intuitive, easier way bellow
      // collecting all the images and applying the same effet to all of them

      theImages.forEach (function(image, index){
        //add handler to each image
        image.addEventListener('click', changeElements, false);
      });

      function popLightbox(currentIndex, currentObject) {
      //debugger;
      //move the window to the top every time we click - quick bug fix
      window.scrollTo(0, 0);
      //dont want the body to run to the bottom - locks everything up
      document.body.style.overflow = "hidden";
      //trigger the lightbox overlay so that we can see it
      let lightbox = document.querySelector('.lightbox');
      let lightboxImg = lightbox.querySelector('img');
      let lightboxDesc = lightbox.querySelector('p');
      let lightboxClose = document.querySelector('.close-lightbox');

     lightbox.style.display = 'block';
     //setting the image source + the next one as clicked
     lightboxImg.src = "images/" + currentObject.images[currentIndex];
     lightboxDesc.innerHTML = currentObject.imageDescription[currentIndex];
     lightboxClose.addEventListener('click', closeLightbox, false);
     }

//reset everything, close lightbox
     function closeLightbox() {
       console.log("Close this shit now");
       let lightbox = document.querySelector('.lightbox');
       let lightboxImg = lightbox.querySelector('img');
       let lightboxDesc = lightbox.querySelector('p');
       let lightboxClose = document.querySelector('.close-lightbox');

       lightbox.style.display = 'none';
     }


    //debugger;

      //That's gonna call the spring "click" when page loads - 2 possible ways
      //document.querySelector('#spring').click();
      changeElements.call(document.querySelector('#spring'));

})();
