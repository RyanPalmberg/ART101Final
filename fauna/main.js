// document.writeln('Fauna <br>');

var animals = {
  Squirrel: {name: 'Grey Squirrel', SciName: 'rodentia shit idk', Desc: 'Squirrel commonly found throughout the West coast.'},
  Coyote: {name: 'Valley Coyote', SciName: 'Canis Sandwich', Desc: 'Goddam trash dog.'}
}
var outputEl = document.getElementById("output");
for (let anim in animals) {
  console.log(anim);
  console.log(animals[anim]['name']);
  console.log(animals[anim]['SciName']);
  console.log(animals[anim]['Desc']);
  // outputEl.innerHTML = outputEl.innerHTML + ' ' + animals[anim]['Desc'];
  let output2 = document.createElement('anim');
  output2.setAttribute("id", anim);
  output2.innerHTML = '<img id="smol" src="img/animals_hero_ladybug.jpg" />' + "<p>"+animals[anim]['name']+ "<p></p>" + animals[anim]['SciName'] +"</p>" + animals[anim]['Desc'] + "<p></p>";
  // kist = [];
  // anim = anim.toString();
  // console.log(animals[anim]);
  // let news = animals[anim];
  // for (let info in news) {
  //   console.log(news['name']);
  //   // kist.append(news[info]);
  //   document.createElement('name');
  //   news.name.innerHTML = "How about now?";
// }
  document.body.appendChild(output2);
}

// document.body.appendChild(outputEl);

// var outputEl = document.getElementById("output");
// outputEl.innerHTML = "How about now?";
