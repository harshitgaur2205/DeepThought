var img = document.getElementById("img");
var board = document.getElementById("board");
var journey = document.getElementById("journey");
var logo = document.getElementById("icon");

img.addEventListener("click", function () {
  img.style.transform =
    img.style.transform === "rotate(0deg)" ? "rotate(180deg)" : "rotate(0deg)";
  board.style.transform =
    board.style.transform === "translateX(-270px)"
      ? "translateX(0px)"
      : "translateX(-270px)";
  journey.style.opacity = journey.style.opacity == "0" ? "1" : "0";
  icon.style.opacity = icon.style.opacity == "1" ? "0" : "1";
});

fetch("data.json")
  .then((res) => {
    if (!res.ok) {
      throw new Error("Network response was not ok " + res.statusText);
    }
    return res.json();
  })
  .then((obj) => {
    document.getElementById("heading").innerHTML = obj.tasks[0].task_title ;
    document.getElementById("para").innerHTML = obj.tasks[0].task_description ;
    document.getElementById("title1").innerHTML = obj.tasks[0].assets[0].asset_title ;
    document.getElementById("title2").innerHTML = obj.tasks[0].assets[1].asset_title ;
    document.getElementById("title3").innerHTML = obj.tasks[0].assets[2].asset_title ;
    document.getElementById("title4").innerHTML = obj.tasks[0].assets[3].asset_title ;
    document.getElementById("title5").innerHTML = obj.tasks[0].assets[0].asset_title ;document.getElementById("title6").innerHTML = obj.tasks[0].assets[0].asset_title ;
    document.getElementById("explore").innerHTML = obj.tasks[0].task_title ;
    document.getElementById("title7").innerHTML = obj.tasks[0].assets[1].asset_title ;
    document.getElementById("title8").innerHTML = obj.tasks[0].assets[2].asset_title ;
    document.getElementById("title9").innerHTML = obj.tasks[0].assets[3].asset_title ;
    document.getElementById('video').src = obj.tasks[0].assets[0].asset_content;
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  });


