// document.writeln('Fauna <br>');

var animals = {
  Redwood: {name: 'Coast Redwood', SciName: ' Sequoia sempervirens', Desc: 'These large trees that grow to be 60 meters tall are coniferous with a cone size of 1.3-1.5cm. These trees have fibrous red bark, and leaves are flat and narrow with alternating pines on each side coming to a point.'},
  Knobcone: {name: 'Knobcone Pine', SciName: 'Pinus attenuata', Desc: 'These trees are fairly common at ucsc and grow to be up to 36 meters tall. They have knob-like pine cones that are 6-18cm in size. They have long yellowish green needle-like leaves that grow in bundles of three.'},
  Pondo: {name: 'Pacific Ponderosa Pine', SciName: 'Pinus ponderosa var. pacifica', Desc: 'These trees grow to be as tall as 50 meters. They have yellowish brown bark, spiney dark green needle-like leaves, and seed cones ranging from 7-18cm.'},
  Doug: {name: 'Douglas Fir', SciName: 'Pseudotsuga menziesii var. menziesii', Desc: 'Douglas-Firs grow to be as big as 67 meters. They have large upper branches and light brown seed cones with protruding barbs that can be 4-20cm in size. Their bark is a greyish grown and their blunt tipped spiney leaves spiral around twigs.'}
}
var outputEl = document.getElementById("output");
for (let anim in animals) {
  console.log(anim);
  console.log(animals[anim]['name']);
  console.log(animals[anim]['SciName']);
  console.log(animals[anim]['Desc']);
  // outputEl.innerHTML = outputEl.innerHTML + ' ' + animals[anim]['Desc'];
  let output2 = document.createElement('div');
  output2.setAttribute("id", 'anim');
  output2.innerHTML = '<img id="smol" src="img/animals_hero_ladybug.jpg" />'+"<p><h2>"+animals[anim]['name']+ "</h2><br>" + animals[anim]['SciName'] +"<br>" + animals[anim]['Desc'] + "<br><br></p>";
  document.body.appendChild(output2);
}
