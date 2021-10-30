let MonList=["Meditate for 10 minutes","Eat a salad","Play a card game","Call a friend","Leg day at gym"];
let TuesList=["Stretch for 10 minutes","Eat nuts","Play a videogame","Text a friend","Upper body at gym"];
let WedList=["Do jumping jacks","Eat a fruit salad","Read a book","Invite friends over","Swim"];
let ThursList=["Do yoga","Drink a smoothie","Watch a movie","Go out with friends","Hike"];
let FriList=["Practice mindfulness","Drink tea","Draw","Make a new friend","Upper body at gym"];
let SatList=["Write a journal entry","Cook yourself a meal","Paint","Call your family","Swim"];
let SunList=["Practice gratefulness","Go out to eat","Take photos","Call your sibling","Hike"];

let ListTot=MonList.concat(TuesList,WedList,ThursList,FriList,SatList,SunList);

// left buttons

  document.getElementById("monday").addEventListener('click', mondayList);
  function mondayList(){
      console.log("yes");
      document.getElementById("one").innerHTML = "<h3>" + MonList[0] + "<h3>";
      document.getElementById("two").innerHTML = "<h3>" + MonList[1] + "<h3>";
      document.getElementById("three").innerHTML = "<h3>" + MonList[2] + "<h3>";
      document.getElementById("four").innerHTML = "<h3>" + MonList[3] + "<h3>";
      document.getElementById("five").innerHTML = "<h3>" + MonList[4] + "<h3>";
  }

  document.getElementById("tuesday").addEventListener('click', tuesdayList);
  function tuesdayList(){
      console.log("yes");
      document.getElementById("one").innerHTML = "<h3>" + TuesList[0] + "<h3>";
      document.getElementById("two").innerHTML = "<h3>" + TuesList[1] + "<h3>";
      document.getElementById("three").innerHTML = "<h3>" + TuesList[2] + "<h3>";
      document.getElementById("four").innerHTML = "<h3>" + TuesList[3] + "<h3>";
      document.getElementById("five").innerHTML = "<h3>" + TuesList[4] + "<h3>";
  }

  document.getElementById("wednesday").addEventListener('click', wednesdayList);
  function wednesdayList(){
      console.log("yes");
      document.getElementById("one").innerHTML = "<h3>" + WedList[0] + "<h3>";
      document.getElementById("two").innerHTML = "<h3>" + WedList[1] + "<h3>";
      document.getElementById("three").innerHTML = "<h3>" + WedList[2] + "<h3>";
      document.getElementById("four").innerHTML = "<h3>" + WedList[3] + "<h3>";
      document.getElementById("five").innerHTML = "<h3>" + WedList[4] + "<h3>";
  }

  document.getElementById("thursday").addEventListener('click', thursdayList);
  function thursdayList(){
      console.log("yes");
      document.getElementById("one").innerHTML = "<h3>" + ThursList[0] + "<h3>";
      document.getElementById("two").innerHTML = "<h3>" + ThursList[1] + "<h3>";
      document.getElementById("three").innerHTML = "<h3>" + ThursList[2] + "<h3>";
      document.getElementById("four").innerHTML = "<h3>" + ThursList[3] + "<h3>";
      document.getElementById("five").innerHTML = "<h3>" + ThursList[4] + "<h3>";
  }

  document.getElementById("friday").addEventListener('click', fridayList);
  function fridayList(){
      console.log("yes");
      document.getElementById("one").innerHTML = "<h3>" + FriList[0] + "<h3>";
      document.getElementById("two").innerHTML = "<h3>" + FriList[1] + "<h3>";
      document.getElementById("three").innerHTML = "<h3>" + FriList[2] + "<h3>";
      document.getElementById("four").innerHTML = "<h3>" + FriList[3] + "<h3>";
      document.getElementById("five").innerHTML = "<h3>" + FriList[4] + "<h3>";
  }

  document.getElementById("saturday").addEventListener('click', saturdayList);
  function saturdayList(){
      console.log("yes");
      document.getElementById("one").innerHTML = "<h3>" + SatList[0] + "<h3>";
      document.getElementById("two").innerHTML = "<h3>" + SatList[1] + "<h3>";
      document.getElementById("three").innerHTML = "<h3>" + SatList[2] + "<h3>";
      document.getElementById("four").innerHTML = "<h3>" + SatList[3] + "<h3>";
      document.getElementById("five").innerHTML = "<h3>" + SatList[4] + "<h3>";
  }

  document.getElementById("sunday").addEventListener('click', sundayList);
  function sundayList(){
      console.log("yes");
      document.getElementById("one").innerHTML = "<h3>" + SunList[0] + "<h3>";
      document.getElementById("two").innerHTML = "<h3>" + SunList[1] + "<h3>";
      document.getElementById("three").innerHTML = "<h3>" + SunList[2] + "<h3>";
      document.getElementById("four").innerHTML = "<h3>" + SunList[3] + "<h3>";
      document.getElementById("five").innerHTML = "<h3>" + SunList[4] + "<h3>";
  }


// right buttons

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

  document.getElementById("changeOne").addEventListener('click', changeItemOne);
  function changeItemOne(){
      console.log("yes!");
      document.getElementById("one").innerHTML = "<h3>" + ListTot[getRandomInt(34)] + "<h3>";
  }

  document.getElementById("changeTwo").addEventListener('click', changeItemTwo);
  function changeItemTwo(){
      console.log("yes!");
      document.getElementById("two").innerHTML = "<h3>" + ListTot[getRandomInt(34)] + "<h3>";
  }

  document.getElementById("changeThree").addEventListener('click', changeItemThree);
  function changeItemThree(){
      console.log("yes!");
      document.getElementById("three").innerHTML = "<h3>" + ListTot[getRandomInt(34)] + "<h3>";
  }

  document.getElementById("changeFour").addEventListener('click', changeItemFour);
  function changeItemFour(){
      console.log("yes!");
      document.getElementById("four").innerHTML = "<h3>" + ListTot[getRandomInt(34)] + "<h3>";
  }

  document.getElementById("changeFive").addEventListener('click', changeItemFive);
  function changeItemFive(){
      console.log("yes!");
      document.getElementById("five").innerHTML = "<h3>" + ListTot[getRandomInt(34)] + "<h3>";
  }
