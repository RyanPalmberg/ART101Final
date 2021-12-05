// document.writeln('Fauna <br>');

var animals = {
  blotch: {name: 'Common Side-blotched Lizard', SciName: 'Uta stansburiana', Desc: 'These small lizards have fine granular scales along their body, with the exception of their tail which has keeled scales. They are often light grey or tan with both light and dark spots along their bodies. These lizards grow to be about 5 inches. This species has polymorphism.', img: 'lizard.jpg', link: 'http://www.californiaherps.com/lizards/pages/u.s.elegans.html'},
  snake: {name: 'Racer Snakes', SciName: 'Coluber constrictor', Desc: 'Racers are a series of non-venomous snakes that can be found in many parts of the world depending on the subpopulation. They prefer dry, sunny areas with pockets of shade. They come in many different colors such as blue, white, black, etc.', img: 'snake.jpg', link: 'http://www.californiaherps.com/snakes/pages/c.c.mormon.html'}
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
