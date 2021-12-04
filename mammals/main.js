// document.writeln('Fauna <br>');

var animals = {
  Squirrel: {name: 'Grey Squirrel', SciName: 'Sciurus carolinensis', Desc: 'Squirrel commonly found throughout the West coast.'},
  Coyote: {name: 'Valley Coyote', SciName: 'Canis latrans', Desc: 'Valley Coyotes are one of the most common mammals in North America. They take habitat in Canada, North America, and some parts of Central America. They are known to travel far distances, up to a hundred miles a day, if food sources are scarce.'},
  BrushRabbit: {name: 'Brush Rabbit', SciName: 'Sylvilagus bachmani', Desc: ''},
  MuleDeer: {name: 'Mule Deer', SciName: 'Odocoileus hemionus', Desc: ''},
  Sealion: {name: 'California Sea Lion', SciName: 'Zalophus californianous', Desc: ''},
  Seal: {name: 'Harbor Seal', SciName: 'Phoca vitalina', Desc: ''},
  Otter: {name: 'Sea Otter', SciName: 'Enhydra lutris', Desc:''},
  Cougar: {name: 'Mountain Lion', SciName: 'Puma concolor', Desc: ''},
  Skunk: {name: 'Striped Skunk', SciName: 'Mephitis mephitis', Desc: ''},
  Gopher: {name: "Botta's Pocket Gopher", SciName: 'Thomomys bottae', Desc: ''},
  Mouse: {name: 'California Mouse', SciName: 'Peromyscus californicus', Desc: ''},
  Bat: {name: 'Hoary Bat', SciName: 'Lasiurus cinereus', Desc: ''}
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
  // output2.innerHTML = '<img id="smol" src="img/animals_hero_ladybug.jpg" />' + "<p>"+animals[anim]['name']+ "<p></p>" + animals[anim]['SciName'] +"</p>" + animals[anim]['Desc'] + "<p></p>";
  output2.innerHTML = '<img id="smol" src="img/animals_hero_ladybug.jpg" />'+"<p><h2>"+animals[anim]['name']+ "</h2><br>" + '<h3>'+animals[anim]['SciName'] +"</h3><br>" + animals[anim]['Desc'] + "<br><br></p>";
  // kist = [];
  let output3 = document.createElement('div');
  output3.innerHTML = '<p></p>'
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
  document.body.appendChild(output3);
}

// document.body.appendChild(outputEl);

// var outputEl = document.getElementById("output");
// outputEl.innerHTML = "How about now?";
