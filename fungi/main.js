// document.writeln('Fauna <br>');

var animals = {
  Candy: {name: 'Candy Cap', SciName: 'Lactarius rubidus', Desc: 'Mushrooms that grow under oaks. They have red/brown/orange slightly sticky cap.', img: 'candy.jpg', link: 'https://www.mykoweb.com/CAF/species/Lactarius_rubidus.html'},
  Porcini: {name: 'Porcini', SciName: 'Boletus Edulis', Desc: 'Mushrooms that possess large brown caps and have no gills', img: 'porcini.jpg', link: 'https://www.mykoweb.com/CAF/species/Boletus_edulis.html'}
  };
var outputEl = document.getElementById("output");
for (let anim in animals) {
  console.log(anim);
  console.log(animals[anim]['name']);
  console.log(animals[anim]['SciName']);
  console.log(animals[anim]['Desc']);
  // outputEl.innerHTML = outputEl.innerHTML + ' ' + animals[anim]['Desc'];
  let output2 = document.createElement('div');
  output2.setAttribute("id", 'anim');
  output2.innerHTML = '<img id="smol" src="img/' +animals[anim]['img'] + '"/>'+"<p><h2>"+animals[anim]['name']+ "</h2><br>" + '<h3>'+animals[anim]['SciName'] +"</h3><br>" + animals[anim]['Desc'] + "<br><p></p>" + '<a href ='+ animals[anim]['link']+'>' + 'Image source' + "</a><br></p>";
  let output3 = document.createElement('div');
  output3.innerHTML = '<p></p>'
  document.body.appendChild(output2);
  document.body.appendChild(output3);
}


// document.body.appendChild(outputEl);

// var outputEl = document.getElementById("output");
// outputEl.innerHTML = "How about now?";
