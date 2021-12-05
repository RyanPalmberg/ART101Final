// document.writeln('Fauna <br>');

var animals = {
  Monarch: {name: 'Monarch Butterfly', SciName: 'Danaus plexippus', Desc: 'The monarch butterfly has  a dark body and large orange wings with prominent dark veins that have two rows of white spots along the edge. Their wingspan is approximately 3.5 to 4 inches long. They exhibit sexual dimorphism and dichromitism, males are larger and have a dark spot over a vein on their hind wings.', img: 'monarch.jpg', link: ''},
  Bee: {name: 'Western Honery Bee', SciName: 'Apis Mellifera', Desc: 'These bees were originally only found in Africa, parts of Asia, and Afric, but because of humans introducing them to other parts of the world, they can not be found globally. Of course, as they are bees, they are found in areas with abundances of floral life, such as meadows and wooded areas. However, they are able to survive in many other habitats as long as there is shelter, and a sufficient supply of food, and water.', img: 'bee.jpg', link: 'https://animaldiversity.org/accounts/Apis_mellifera/pictures/collections/contributors/phil_myers/hymenoptera/honeybee0004/'},
  Buckeye: {name: 'Grey Buckeye', SciName: 'Junonia Grisea', Desc: 'The eggs of the grey buckeye are dark green and the larva that hatch are nearly black with orange spots. The adult butterflies have brown wings with three eyespots on each wing. They have one particularly large eye spot on their hind wings that is reddish to purple in color. They have characteristic orange bands on their wings as well. Their wingspan is 4-6cm.', img: 'buckeye.jpg', link: 'http://socalbutterflies.com/nymphalidae_html/Junonia_grisea.htm'},
  Sis: {name: 'California Sister', SciName: 'Adelfa Californica', Desc: 'These brown and black butterflies are medium to large. They have a creamy white band along their forewings along with a large orange spot. Their wingspan is usually 2.5-4 inches.', img: 'sister.jpg', link: 'https://www.butterfliesandmoths.org/species/Adelpha-californica?page=1'},
  Skipper: {name: 'Umber Skipper', SciName: 'Lon melane', Desc: 'These butterflies are found predominantly in California. They are named for their umber color, and their entire bodies are quite hairy. They can be seen any time between Spring and Fall.', img: 'skipper.jpg', link: 'https://uk.inaturalist.org/taxa/1081332-Lon-melane'},
  Lady: {name: 'Painted Lady', SciName: 'Vaness cardui', Desc: 'Painted Ladies are one of the most common butterflies in the world, and can be found on every continent except Antarctica. They can be found in most regional habitats, but are most often found in fields and meadows with large amounts of vegetation. They can even be found in cities and suburbs.', img: 'lady.jpg', link: 'https://animaldiversity.org/accounts/Vanessa_cardui/pictures/collections/contributors/phil_myers/lepidoptera/Nymphalidae_Q_Z/Vanessa_cardui6173/'},
  BugladyAgitha: {name: 'Seven-spotted Ladybug', SciName: 'Coccinella septempunctata', Desc: 'The seven spotted lady bug has a black head and thorax. The thorx has white spots on the top of the head and thorax. The abdomen is red with seven black spots. They grow to be 7-8mm.', img: 'ladybug.jpg', link: 'https://en.wikipedia.org/wiki/Coccinella_septempunctata'},
  Dusk: {name: 'Mournful Duskwing', SciName: 'Erynnis tristis', Desc: 'Erynnis Tristis can be found in multiple parts of the world, but is primarily found in California. They are often found in live oak trees. Males will wait on hilltops for females in order to mate, which is something that other similar species do not do. They can also be found on flowers around oak trees.', img: 'duskwing.jpg', link: 'https://www.butterfliesandmoths.org/species/Erynnis-tristis'},
  Silk: {name: 'Ceanothus Silk Moth', SciName: 'Hyalophora euryalus', Desc: 'These butterflies are red to reddish-brown with grey-brown edged wings, two white stripes and comma shaped spots. They have a wingspan of 3.5-5 inches.', img: 'silk.jpg', link: 'https://www.butterfliesandmoths.org/species/Hyalophora-euryalus'},
  Glow: {name: 'California Glowworm', SciName: 'Ellychnia Californica', Desc: 'The california glowworm has a black body, black legs, and antenna. They have red stripes along the sides of their heads.', img: 'glowworm.jpg', link: 'https://bugguide.net/node/view/657139'},
  Cucumber: {name: 'Spotted Cucumber Beetle', SciName: 'Diabrotica undecimpunctata', Desc: 'This beetle grows to be 6.4 mm long. They are long and yellow-green in color with 12 black spots on their forewings. The head, antenna, and legs are all black.', img: 'cucumber.jpg', link: 'https://bugguide.net/node/view/29805'}
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
  if (animals[anim]['link'] == '') {
    output2.innerHTML = '<img id="smol" src="img/' +animals[anim]['img'] + '"/>'+"<p><h2>"+animals[anim]['name']+ "</h2><br>" + '<h3>'+animals[anim]['SciName'] +"</h3><br>" + animals[anim]['Desc'] + "<br><p></p>" + '<p>Photo courtesy of Amelia McKee</p>' +  "<br></p>";
  } else {
    output2.innerHTML = '<img id="smol" src="img/' +animals[anim]['img'] + '"/>'+"<p><h2>"+animals[anim]['name']+ "</h2><br>" + '<h3>'+animals[anim]['SciName'] +"</h3><br>" + animals[anim]['Desc'] + "<br><p></p>" + '<a href ='+ animals[anim]['link']+'>' + 'Image source' + "</a><br></p>";
  }

  let output3 = document.createElement('div');
  output3.innerHTML = '<p></p>'
  document.body.appendChild(output2);
  document.body.appendChild(output3);
}


// document.body.appendChild(outputEl);

// var outputEl = document.getElementById("output");
// outputEl.innerHTML = "How about now?";
