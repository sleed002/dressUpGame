
$(function () {

//This is the global part of the program for all global variables, arrays, objects and constants.
    //collect variables for the main components of the page
          let $body =$('body');
          let $avatar =$('.container');
          let $closet = $('#closet');
          let $speech = $('#speech-bubble')

          //collect variables for the body parts
          let $mouth = $('#mouth');
          let $head = $('#hat');
          let $middle= $('#middle');
          let $torso = $('.torso');
          let $leftleg = $('#left-leg');
          let $rightleg = $('#right-leg');
          let $arm = $('.arm');
          let $bottom = $('.bottom');
          let $top =$('.top');

          //collect variables for the articles of clothing
          let $hats = $('.h');
          let $outfits = $('.o');
          let $shoes = $('.s');

          //collect variables for the text
          let $place = $('#place');
          let $message = $('#message');
          let $submit = $('#submit');
          let $points = $('#points');
          let $win = $('#win');

          //collect variables for the points
            let points1 = 0
            let points2 = 0
            let points3 = 0

              let roundPoints = 0
              let totalPoints = 0
              let i = 1;

          //these will be used to change the skin color of the avatar
              let AvatarC = {
                Skin1: "rgb(255, 218, 185)",
                Skin1B: "#e5c4a6",
                Skin2: "rgb(173, 101, 50)",
                Skin2B: "#90532B",
              }

              let Skin = 'rgb(255, 218, 185)'
              let SkinB = "#e5c4a6"
          //this boolean will turn off the skin change option after an outfit is added
              let skinChange = true;
            //in case we decide to add more colors keeping these in an object
              let myColors ={
                myBlue: "#06417D",
                myRed: "#DB1E25"
              }
        //these will help keep the code from repeating as we can loop through them to change the avatar
      let avatarBody =[$arm, $rightleg, $leftleg, $('.head'), $('#beach-boots-l'), $('#beach-boots-r'), $top];
      let preOutfit =[$arm,$bottom,$top]
      let towel = [$bottom, $torso]

        //these are objects to make it easier to change or add a new scenerio if needed. One for each scene.
              let Scene1 = {
                  text: "The Red Carpet",
                  headImage:"images/bow.png",
                  headWidth:"50px",
                  headTop:"-5px",
                  headRight:"5px",

                  midImage:"images/dress.png",
                  backgroundColor: myColors.myRed,
                  borderColor: myColors.myRed,
                  midWidth:"150px",
                  midHeight:"190px",
                  midTop:"-20px",
                  midRight:"-25px",

                  footColor: "rgb(0, 0, 0)",
                  backgroundImage:'url("images/prom.jpg")',
                  bodyC: "white",
                  messageC: "black",
                  nextPlaceC: "Red",
                  song: "party"
              };

              let Scene4= {
                  text:"Outer Space",
                  headImage:"images/space-helmet.png",
                  headWidth:"155px",
                  headTop:"-30px",
                  headRight:"-28px",

                  midImage:"images/spacesuit.png",
                  backgroundColor: "orange",
                  borderColor:"black",
                  midWidth:"130px",
                  midHeight:"160px",
                  midTop:"-21px",
                  midRight:"-15px",
                  bottomC: "orange",
                  bottomB: "black",
                  armC: "orange",
                  armB: "black",

                  footColor: "rgb(128, 128, 128)",
                  backgroundImage:'url("images/space.jpg")',
                  bodyC: "white",
                  messageC: "white",
                  placeC: "lightgrey",
                  nextPlaceC: "grey",
                  song: "space"
              };

              let Scene3= {
                  text:"The Wild West",
                  headImage:"images/cowboy-hat.png",
                  headWidth:"150px",
                  headTop:"-40px",
                  headRight:"-23px",

                  midImage:"images/cowboy.png",
                  backgroundColor: myColors.myBlue,
                  borderColor:myColors.myBlue,
                  midWidth:"165px",
                  midHeight:"135px",
                  midTop:"110px",
                  midRight:"-35px",
                  topC: myColors.myBlue,
                  topB: myColors.myBlue,

                  footColor: "rgb(145, 84, 37)",
                  backgroundImage:'url("images/wild-west.jpg")',
                  messageC: "black",
                  nextPlaceC: "brown",
                  bodyC: "black",
                  song: "west"
              };

              let Scene2= {
                  text:"The Beach",
                  headImage:"images/beach-hat.png",
                  headWidth:"170px",
                  headTop:"-30px",
                  headRight:"-35px",

                  midImage:"images/swimsuit.png",
                  backgroundColor: Skin,
                  borderColor: SkinB,
                  midWidth:"110px",
                  midHeight:"170px",
                  midTop:"-21px",
                  midRight:"-6px",
                  bottomB: Skin,
                  bottomC: SkinB,

                  backgroundImage:'url("images/beach.jpg")',
                  messageC: "black",
                  nextPlaceC: "blue",
                  bodyC:"black",
                  footColor: Skin,
                  song: "beach"
              };
              //the reset array
              let standard={
                text:"Complete",
                Top:"0px",
                Right:"0px",
                Zindex: '1',
                Width: "0px",
                Height: "0px",
                backgroundColor: "white",
                borderColor: "lightgrey",
                bottomC: "white",
                bottomB: "lightgrey",
                backgroundImage: 'url("images/bedroom.png")',
                nextPlaceC: "green",
                song:"end"
              };
          //the smile images are kept in an object in case images have to be changes
            let smiles ={
              standard: "images/standard.png",
              smile: "images/smile.png",
              frown: "images/frown.png",
              excited: "images/excited.png",
              worried: "images/worried.png"
            };
    //this object is a boolean which will check if the shoes were clicked and if not loop back and collect points
            let shoesClicked = false;
      //collect all the scenes into an array to be looped through. Again more can be added.
            let scenes = [
              Scene1,
              Scene2,
              Scene3,
              Scene4
            ]
  //the scenes2 is a copy of scenes so we can use it but remove items from it as they are used so they don't repeat
            let scenes2 = scenes.slice();
            let set;
//all main functions called at the bottom of this script
//----------------------------------------------------------------------------
clickItems = function() { //these two items are called on every object click so declared here
  $speech.css('visibility', 'hidden');
  document.getElementById("click").play();
}
//first main function called on load is defined here. it is the click event for adding a head piece to the avatar.
//first part adds the image.
//next part positions it depending on what the item is - looks back at the scene array
//finally points are collected based on if the image is correct.
addHeadpiece = function() {
      //add event listeners to each hat
    $hats.on('click', function () {

        myHat = $(this).attr('src');
        $head.attr('src', myHat);
        //reset position elements
        $head.css('z-index', standard.Zindex);
        $head.css('top', standard.Top);
        $head.css('right', standard.Right);
      //set spacing and placement of each item
      //by looping through each scene.
      positionHat = function (myHat) {
        scenes.forEach(function(scene) {
          if (myHat === scene.headImage){
            $head.attr('width', scene.headWidth);
            $head.css('top', scene.headTop);
            $head.css('right', scene.headRight);
            }
          })
        }
    //face logic and points logic are here.
      hatPoints = function() {
        points1 = 0;
        //loop through each scene and add points if the image matches the place text
        scenes.forEach(function(scene) {
          if ($place.text() === scene.text) {
            if ($head.attr('src') === scene.headImage) {
              $mouth.attr('src', smiles.smile)
              points1 = points1 + 30;
              }
              else { //if image does not match change face to sad
                $mouth.attr('src', smiles.frown)
              }
            }
          });
       }
        //for all clicks on head call the functions below
        positionHat(myHat);
        hatPoints();
        clickItems();
    });
} //end of headpiece logic
//----------------------------------------------------------------------------
 //second main function defined here. it is the click event for adding an outfit to the avatar.
 //first part adds the image.
 //next part positions it depending on what the item is - looks back at the scene array
 //finally points are collected based on if the image is correct.
addOutfit = function() {
      //add event listeners to each outfit
      $outfits.on('click', function () {
          $middle.css('visibility', 'visible');
          skinChange = false;
          myOutfit = $(this).attr('src');
          $middle.attr('src', myOutfit);
          //reset all position elements on each click
          $middle.css('z-index', standard.Zindex);
          $middle.css('width',standard.Width);
          $middle.css('height',standard.Height);
          $middle.css('top',standard.Top);
          $middle.css('right',standard.Right);
          //reset color values on all parts
          //set the preOutfit colors back to skin color
          preOutfit.forEach(function(item) {
            item.css("background-color",Skin);
            item.css("border-color",SkinB);
          });
    //----------------------------------------------------
     positionOutfit = function(myOutfit) {
       //this positions each image correctly on the avatar
       scenes.forEach(function(scene) {
         //for each scene position the object as specified
        if (myOutfit === scene.midImage) {
          $torso.css("background-color",scene.backgroundColor);
          $torso.css("border-color",scene.borderColor);
          $middle.css('width',scene.midWidth);
          $middle.css('height',scene.midHeight);
          $middle.css('top',scene.midTop);
          $middle.css('right',scene.midRight);
          $bottom.css("background-color",scene.bottomC);
          $bottom.css("border-color",scene.bottomB);
          $arm.css("background-color",scene.armC);
          $arm.css("border-color",scene.armB);
          $top.css("background-color",scene.topC);
          $top.css("border-color",scene.topC);
        }
      });
    }
    //face logic and points logic are here.
     OutfitPoints = function (){
         points2 = 0
    //loop through each scene and add points if the image matches the place text
      scenes.forEach(function(scene) {
        if ($place.text() === scene.text) {
          if ($middle.attr('src') === scene.midImage){
            $mouth.attr('src', smiles.smile)
            points2 = points2 + 30;
          }//if image does not match change face to sad
            else {$mouth.attr('src', smiles.frown)
            }
        }
      })
    }
      //for each outfit click call these functions
        positionOutfit(myOutfit);
        OutfitPoints();
        clickItems(); //get final click items
      });
  } //end of outfit logic
//----------------------------------------------------------------------------
shoePoints = function () {
  //this function is called if the user does not change the leg color but it still matches to ensure points
  scenes.forEach(function(scene) {
   if ($place.text() === scene.text) {
     if ($rightleg.css("background-color")===scene.footColor){
       $mouth.attr('src', smiles.smile)
       points3 = points3 + 30;
     } //if leg color does not match change the face to sad
     else {$mouth.attr('src', smiles.frown)
      }
    }
  });
}
//third main function defined here. it is the click event for changing the leg color of the avatar.
//click event added to each shoe item which updates the color and border to match the smaller version
addFootwear = function() {
    //add event listeners to shoes -set the color of the legs to match the selection
    $shoes.on('click', function () {
          myShoesC= $(this).css('background-color');
          $rightleg.css("background-color",myShoesC);
          $leftleg.css("background-color",myShoesC);
          //and the border color
          myShoesB= $(this).css('border-color');
          $rightleg.css("border-color",myShoesB);
          $leftleg.css("border-color",myShoesB);
          //reset points to 0
          points3 = 0;

          shoePoints(); //get the points
          shoesClicked = true;
          //change this to true so we know points were added
          clickItems(); //get final click events
      });
  } //end of footwear logic
//----------------------------------------------------------------------------
//this is the third main function called on load and it adds a click event to the hair so user has 3 options to change it
changeHair = function () {
  let $hair = $('.hair'); //declare local variable for hair - not used again
    $hair.on('click', function () {
      if ($hair.css('backgroundColor')==="rgb(165, 42, 42)") {
          $hair.css('backgroundColor',"rgb(0, 0, 0)");
      } else if ($hair.css('backgroundColor')==="rgb(0, 0, 0)") {
        $hair.css('backgroundColor',"rgb(242, 222, 46)");
      } else {
      $hair.css('backgroundColor',"rgb(165, 42, 42)");
      }
    });
}
//this is the fourth main function called on load and adds a click event to the avatars head to change skin color
changeSkin = function() {
$('.head').on('click', function () {
    if (skinChange === true) {
      if ($top.css('backgroundColor')===AvatarC.Skin1) {
        Skin = AvatarC.Skin2;
        SkinB = AvatarC.Skin2B;
      }//if option 1 make it 2 if 2 make it 1
      else {
        Skin = AvatarC.Skin1; //update the skin variables
        SkinB = AvatarC.Skin1B;
      }
      avatarBody.forEach(function(item) {
        item.css('backgroundColor',Skin);
        item.css('borderColor',SkinB);
      });
      Scene2.footColor = Skin; //update the beach array with the correct skin colors
      Scene2.backgroundColor = Skin;
      Scene2.borderColor = SkinB;
      Scene2.bottomC = Skin;
      Scene2.bottomB = SkinB
    };
  });
}
//reset the avatar after each scene and at the end.  this function is called below
resetAvatar = function() {
  $head.attr('src',"");
  $middle.css('visibility', 'hidden');
//loop through the towel items and change them to the original color
towel.forEach(function(item) {
  item.css("background-color",standard.backgroundColor);
  item.css("border-color",standard.borderColor);
});
//change the avatar body back to its skin colors
  avatarBody.forEach(function(item) {
    item.css('backgroundColor',Skin);
    item.css('borderColor',SkinB);
  });
//skin color can be changed again and shoesClicked will need to be set to false again to get points
  skinChange = true;
  shoesClicked = false;

}
//-----------------------------------------------------------
//this is the fifth main function of the program.  It is called at the end and calculates the final logic
calcWin = function() {
    //display win objects and hide the closet. Animate points growing in tube
      $closet.css('visibility','hidden');
      $win.css('display','block');
      $points.animate({ height:totalPoints},4000);
      $points.text(totalPoints);
      //this if statement will change the avatar's expression and speech based on number of points
      if (totalPoints > 300) {
      $speech.text("Thanks!!! I had a great day!");
      $mouth.attr('src', smiles.excited)
      }
      else if (totalPoints <= 300 && totalPoints > 200){
        $speech.text("Not bad! I had an ok day.");
        $mouth.attr('src', smiles.smile)
      }
      else if (totalPoints <= 200 && totalPoints > 100){
        $speech.text("Not too good! I had a very weird day.");
        $mouth.attr('src', smiles.frown)
      }
      else {
        $speech.text("How embarrassing! I had a terrible day.");
        $mouth.attr('src', smiles.worried)
      }
} //-------------------------------------------------------------
//last main function defined here. The submit logic changes depending on what the button says on click
sceneChange = function(){
    scenes2.splice($.inArray(set, scenes2), 1 ); //call next location randomly by splicing the array and using math random
    //change the text to the next appropriate location
    if (scenes2.length>0) {
      set = scenes2[Math.floor(Math.random()*scenes2.length)] //https://stackoverflow.com/questions/5915096/get-random-item-from-javascript-array
      $place.text(set.text);
      $place.css('color', set.nextPlaceC);
      document.getElementById(set.song).play();
      }
    else  { //if no more items on the array call the final logic of the program
      $place.text(standard.text);
      $place.css('color', standard.nextPlaceC);
      document.getElementById(standard.song).play();
      $message.text("Total Points: " + totalPoints + " out of 360");
      $submit.text("Play Again!");
      $message.css("color","white");
        //play final sound
      document.getElementById("tada").play();
      resetAvatar(); //reset Avatar
      calcWin(); //call final calculations
      }
    //update round points after each round
    roundPoints = 0;
    points1 = 0;
    points2 = 0;
    points3 = 0;
}

roundUpdate = function (){
  scenes.forEach(function(scene) {
    if ($place.text() === scene.text) {
      $body.css('background-image', scene.backgroundImage);
      $body.css('color',scene.bodyC);
      $message.css('color',scene.messageC);
      $place.css('color', scene.placeC);
      document.getElementById(scene.song).pause();
      }
    });
    //hide closet and change text to next
    $closet.css('visibility', 'hidden');
    $speech.css('visibility', 'hidden');
    $submit.text("Next");
  //calculate the points
    roundPoints = points1 + points2 + points3;
    totalPoints = totalPoints + roundPoints;
  //update the message with points scored
    $message.text("You scored " + roundPoints + " out of 90 points on")
    //update the mouth with the correct expression
    if (roundPoints === 90) {
      $mouth.attr('src', smiles.excited)
      document.getElementById("cheer").play();
    }
    else if (roundPoints <90) {
      $mouth.attr('src', smiles.worried)
      document.getElementById("laugh").play();
    }
}

nextScene =function() {
   //pause any audio
   document.getElementById("cheer").pause();
   document.getElementById("laugh").pause();
   //all reset items back to original settings
     $body.css('background-image', standard.backgroundImage);
     $submit.text("Submit Choices!");
     $mouth.attr('src', smiles.standard)
     $message.css('color','white');
     $body.css('color','black');
     $closet.css('visibility', 'visible')
     $speech.css('visibility', 'visible');
     //display text for next scene
     i = i + 1 //adds one for each scene
     $speech.text('Now help me choose items for place '+ i + '!');
     $speech.css('font-size', '30px');
     $message.text("Choose the right clothes for");
     //call reset avatar
     resetAvatar();
     sceneChange(); //call the next scene change
   }

submitLogic = function() { //on click of the submit button call each function depending on what it says
    //set the event listener on the button
   $submit.on('click',function() {
      if ($submit.text()==="Play Again!"){
        location.reload() //if end of game refresh page
      };
    //if its a submit do the win logic
        if ($submit.text()==="Submit Choices!") { //call submit button logic if button says submit
        //based on the text change the backgroud and text color
          if (shoesClicked === false){ //if this is not true get the points
              shoePoints();
             } //for each scene change to the correct scene background and update text to right color to be seen
          roundUpdate();
        }
      //--------------------------------
      else if ($submit.text()==="Next") { //logic to reset to next challenge if next button
          nextScene(); //call the next scene change
        }  //end of next logic
    });
  }

startGame= function() { //this function calls all the game start logic to set the first scene
    document.getElementById("tada").play(); //play sound on page load
      set = scenes2[Math.floor(Math.random()*scenes2.length)] //grab the first scene randomly from the array
      $place.text(set.text); //update the html text on load to the set and the color to match
      $place.css('color', set.nextPlaceC);
      document.getElementById(set.song).play();
    }
//The seven main functions of the program are called here.
  addHeadpiece();
  addOutfit();
  addFootwear();
  changeHair();
  changeSkin();
  submitLogic();
  startGame();
}); //end of game logic
