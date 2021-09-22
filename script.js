var images = ["WhatsApp Image 2021-09-22 at 21.03.57", "WhatsApp Image 2021-09-22 at 21.03.57 (2)", "WhatsApp Image 2021-09-22 at 21.03.57 (1)", "family.png"];
var names = ["Mom", "Dad", "Me", "Us"];
var i = 0;

function update(){

  var array_length = images.length - 1;
  var updated_image = images[i];
  var updated_text = names[i];

  document.getElementById("family_book_image").src = updated_image;
  document.getElementById("name").innerHTML = updated_text;

  i++;


  if(i>array_length){
  i = 0;
                
  }
}