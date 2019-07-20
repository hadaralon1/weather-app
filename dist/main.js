
const renderer = new Render
const tempmanager = new TempManager


let loadPage = async function(){
    await tempmanager.getDataFromDB()
    if (!tempmanager.cityData.length){ return }  
     renderer.renderData(tempmanager.cityData) 

}

let handleSearch =  async function(cityName) {
   await tempmanager.getCityData(cityName)
        renderer.renderData(tempmanager.cityData)
}


// input click 
$(".cityButton").on("click", async function () {
    let cityName = $(".input").val();
    await handleSearch(cityName)

  });



//save click

$(".weatherData").on("click", ".saver",  function () {
    let cityName = $(this).closest(".cityBox").find(".name").text()
   
    tempmanager.saveCity(cityName)
    loadPage()


 });

 //delete

 $(".weatherData").on("click", ".remove",  function () {
    let cityName = $(this).closest(".cityBox").find(".name").text()
    tempmanager.removeCity(cityName)


 });


 //click with enter
 var input = document.getElementById("myInput");
 input.addEventListener("keyup", function(event) {
   if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("myBtn").click();
   }
 });




 loadPage()