# Dress_Up_Game

## Game Proposal –Mess up Dress up! (now called Guess the Dress)

### Description
Click the corresponding clothes for the setting provided to put on the user. Hit submit and see if you win!

**User Stories**:

1. As a user I'd like to preview my selections before I choose them. **complete**
2. As a user I'd like to know if I won so I can be proud. **complete**
3. As a user I'd like to have my avatar react to my selections so I can have a hint. **complete**
4. As a user I'd like to have a variety of clothing options so I can be creative. **complete**


**MVP**:
* User is provided with a place and 9-16 items of clothing to choose from. **complete (12 items)**
* User has ability to select 3-4 clothing items for their avatar. **complete (3 choices)**
* User is told if they selected the correct items – i.e. if they won. **complete (plus final cummulative win logic)**


**The Places (different backgrounds)**:
* Red Carpet – Goal 1 **complete**
* Wild West -MVP **complete**
* Beach – Goal 3 **complete**
* Space – Goal 2 **complete**


**Clothes:**
* Hats – cowboy, tiara, beach hat, helmet,  **same m/f complete for female. No male included**
* Main Dress – ball gown (f) tux - male, space suit, bathing suit(f) trunks (m), vest with fringe shirt and fringe pants. **complete for female - no male included**
* Shoes – cowboy boots, high heels, flip flops, space boots **complete**
* Item – lasso, sunglasses, corsage, gloves **-not included**

**Avatar:**
* Male – short hair, will automatically use tux **not included**
* Female – Hair longer, will automatically use dress **complete**
* Need head, torso, arms and legs **complete**

**Avatar face expressions:**
* Smile - standard, **complete**
* Very Happy – clothing items are matching -Excited – on win **complete**
* Concerned – clothing items are not matching - Horrified – on lose **complete**

**Winning:** –
To win must have 100% 30% for each clothing, 10% for the accessory complete **no accessory so now 90% each round**

* 100% Great job! Avatar bounces music plays **for 90% avatar is happy and applause plays. for under 90% laughter is heard and avatar is worried**
* If 50% or above, Good try. music plays
* 30 – 50% Not quite music plays
* Below 30% Ouch!  Avatar Explodes music plays

**Settings:**
* Start in bedroom. Closet clickable.**appears and dissapears when needed so complete***
* On click go to closet – new page **made a closet on the same page so complete**
* Items all in closet. When you hover they get big (like a gallery). **images large enough so complete**
* On select go back to room and item is on avatar **complete**
* Avatars expression is changed depending on the item. **complete**
* On submit button calculate percent and display results. **complete**
* Background will change to the place. **complete**
* Next setting will come up if player hits next. **complete**

## Requirements
### Introduction
The game involves choosing clothes for your avatar from a selection to match a proposed setting. If you pick the right clothes you win.  If you don’t, you lose.

### Technologies
*   HTML, CSS, Javascript **I ended up using JQuery**.
* The avatar will be made from CSS div shapes. **complete**
* Clothing selection will be in the closet but act like a gallery.**complete**
* On mouseover item will be enlarged. **it becomes more transparent so complete**
* On click it will be added to the avatar. **complete**
* On click again it will be removed.**clicking another similar item removes it** Submit button will run the win logic.**complete**
* Face of avatar will hopefully react to the selection.**complete**

### Tell us how you plan on implementing the difficult parts
* I will need to research a bit on how to show the clothing options in a way that is intuitive and easy to access for the user.  Might need to use scrollbar or other methodologies.
* **I had to edit images I found online in the image editor on the mac. Some took more editing than others but i got them to all fit in the closet without needing a scrollbar**
* I’d like to have some kind of items in the background of the setting that would react to the avatar, but this is a goal not a must have.
* **I managed to get laughter and clapping sounds to react to the avatar**

### MVP
1. What I must have for the project:
*  The avatar, at least 6 clothing options, the background swap and the win logic. **complete**
2. Stretch Goals:
*  Face reaction, option to switch between male and female and choose skin color, hair color. **complete**
*  Have some kind of moving characters in the background that react to the avatar’s clothing selection like smiling or  looking horrified.
* **the character reacts looking smiling or horrified and the sound is the backgrounds reaction**

## Timeline
1.   Monday night?
* By Monday the basic avatar should be in place along with the clothing items. I’d like to get some logic in of adding the clothes to the avatar’s body in the correct places and removing them. **complete with all backgrounds and also the face logic. some images were not fitting well to the avatar**

2.  Tuesday Night?
* By Tuesday I’d like to build out the win logic and the actions that follow it, as well as the skin color, male and female change and hair color options and face changes **complete and fixed all images though had some issues with the avatar reset**

3.  Wednesday night?
* By Wednesday I’d like to start with some of the extra items such as adding more backgrounds to keep the game going on different levels. **on Wednesday I fixed all the reset criteria of the avatar and added the background sounds and win logic animation. I also added features to change the avatars skin color and hair color on click**

4.   Thursday night?
* Any cleanups, touch ups, fixes or if all is good, the extra goals. **cleaned up all my code into neat functions with no hard coded text in the code to make it flexible. I also made the backgrounds load in a random order, added background music for each scene as a hint and updated this.**


## Wireframes

<a href="https://ibb.co/eEbi97"><img src="https://preview.ibb.co/cYHC2S/Screen_Shot_2018_04_19_at_6_16_40_PM.png" alt="Screen_Shot_2018_04_19_at_6_16_40_PM" border="0"></a>

## Logic pieces:
1. On load I will need to assign click events to the closet and submit button.**complete**
2. On clicking the closet, gallery should open up and click events should be assigned to all clothing items – both to add and remove. On mouseover each clothing item should enlarge. **gallery does not open but rest is true. mouseover is transparency**
3. On click of each clothing item the face logic will need to run and item will be applied to the avatar in the correct location. **complete**
4. On submit, win logic will run looking at each clothing item to do the calculation. **complete**
5. Next button will populate with a click event to load the next scene. **complete**

**Extras I added! Music, sound affects and the backgrounds load in a random order!

## Struggles
* One of my biggest struggles was the css editing and positioning of the images to look realistic on my avatar.  I figured out how to make a background transparent in the photo editing tool and some very minor art work was involved to get them to fit.
* This caused a new issue of mine however - with all of the different css positioning i needed I had a lot of wet code with a lot of hard coded names making it hard to change things for a code editor.  I step by step broke it down and changed naming conventions to be variables instead of hardcoded, then put those into an array i was able to loop through.
* I had a couple of minor problems with the scoring but I solved them logically through the code with the debugger. This is noted in my comments.

## Game
* link to the deployed game: [https://git.generalassemb.ly/pages/sleed002/Dress_Up_Game/]
* Screen shots of the game in its different states: **see below**
* Future Goals - **If I had more time I'd like to add more skin change and hair change options to the game and make the images also draggable. But I'm pretty happy with my result.**

## Screenshots

**An example of an opening shot.**

<a href="https://ibb.co/frRuGn"><img src="https://preview.ibb.co/cH7ehS/Screen_Shot_2018_04_19_at_5_27_21_PM.png" alt="Screen_Shot_2018_04_19_at_5_27_21_PM" border="0"></a>

**As correct items are added, the avatar smiles.**

<a href="https://ibb.co/gZ7C2S"><img src="https://preview.ibb.co/mSLobn/Screen_Shot_2018_04_19_at_6_18_44_PM.png" alt="Screen_Shot_2018_04_19_at_6_18_44_PM" border="0"></a>

**If an incorrect item is added, the avatar will frown as a hint.**

<a href="https://ibb.co/fV9EGn"><img src="https://preview.ibb.co/h3kobn/Screen_Shot_2018_04_19_at_6_19_05_PM.png" alt="Screen_Shot_2018_04_19_at_6_19_05_PM" border="0"></a>

**Example of a correctly dressed avatar before submit for The Red Carpet.**

<a href="https://ibb.co/ffTD97"><img src="https://preview.ibb.co/ci04Gn/Screen_Shot_2018_04_19_at_6_19_55_PM.png" alt="Screen_Shot_2018_04_19_at_6_19_55_PM" border="0"></a>

**An example of a correctly dressed avatar after submit for Outer Space.**
<a href="https://ibb.co/kn6uGn"><img src="https://preview.ibb.co/i7nO97/Screen_Shot_2018_04_19_at_6_19_20_PM.png" alt="Screen_Shot_2018_04_19_at_6_19_20_PM" border="0"></a>

**Below is an example of another round and the color change feature.**

<a href="https://ibb.co/irDfp7"><img src="https://preview.ibb.co/hxCvNS/Screen_Shot_2018_04_19_at_6_20_32_PM.png" alt="Screen_Shot_2018_04_19_at_6_20_32_PM" border="0"></a>

**Here is a screenshot of the final scene with a maximum cummulative points calculation.**

<a href="https://ibb.co/emv4Gn"><img src="https://preview.ibb.co/fJWdbn/Screen_Shot_2018_04_19_at_6_21_11_PM.png" alt="Screen_Shot_2018_04_19_at_6_21_11_PM" border="0"></a>

**Example of what happens when not enough points are scored on a round.**

<a href="https://ibb.co/he4QNS"><img src="https://preview.ibb.co/bOiwU7/Screen_Shot_2018_04_19_at_6_23_22_PM.png" alt="Screen_Shot_2018_04_19_at_6_23_22_PM" border="0"></a>

**Example of what happens when not enough points are scored in the full game. Also shows hair change logic.**
<a href="https://ibb.co/hwgi97"><img src="https://preview.ibb.co/ceKEGn/Screen_Shot_2018_04_19_at_6_23_41_PM.png" alt="Screen_Shot_2018_04_19_at_6_23_41_PM" border="0"></a>

**Example of correctly dressed avatar with both hair change and skin change logic.**

<a href="https://ibb.co/hHUZhS"><img src="https://preview.ibb.co/ctQ72S/Screen_Shot_2018_04_19_at_6_43_07_PM.png" alt="Screen_Shot_2018_04_19_at_6_43_07_PM" border="0"></a>
