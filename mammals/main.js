// document.writeln('Fauna <br>');

var animals = {
  Squirrel: {name: 'Grey Squirrel', SciName: 'Sciurus carolinensis', Desc: 'Squirrel commonly found throughout the West coast.',
img: 'squirrel.jpg', link: 'https://kids.nationalgeographic.com/animals/mammals/facts/eastern-gray-squirrel'},
  Coyote: {name: 'Valley Coyote', SciName: 'Canis latrans', Desc: 'Valley Coyotes are one of the most common mammals in North America. They take habitat in Canada, North America, and some parts of Central America. They are known to travel far distances, up to a hundred miles a day, if food sources are scarce.',
img: 'coyote.jpg', link: 'https://a-z-animals.com/animals/coyote/'},
  BrushRabbit: {name: 'Brush Rabbit', SciName: 'Sylvilagus bachmani', Desc: 'This rabbit is sadly close to extinction. They typically live in bushes next to rivers. They eat grass, shoots, and leaves, but green clovers are their favorite food. ',
img: 'rabbit.jpg', link: 'https://www.nationalgeographic.org/projects/photo-ark/animal/sylvilagus-bachmani/'},
  MuleDeer: {name: 'Mule Deer', SciName: 'Odocoileus hemionus', Desc: 'These deer are known for their strikingly long ears, that are almost as long as the length of their heads. Their name comes from said ears, which are said to resemble a mule’s. They are often found in rocky habitats consisting of abundant plant growth, specifically woody shrubs, as that is their main source of food.',
img: 'deer.jpg', link: 'https://animaldiversity.org/accounts/Odocoileus_hemionus/pictures/collections/contributors/philip_myers/deer_1a/'},
  Sealion: {name: 'California Sea Lion', SciName: 'Zalophus californianous', Desc: 'These sea lions are very intelligent, and known to be quite playful. They range in colors from dark brown to light brown. The males are much larger than the females in weight and length. ',
img: 'sealion.jpg', link: 'https://www.marinemammalcenter.org/animal-care/learn-about-marine-mammals/pinnipeds/california-sea-lion'},
  Seal: {name: 'Harbor Seal', SciName: 'Phoca vitalina', Desc: 'Harbor seals are one of the most common sea mammals on the East Coast and West Coast of the United States. They’re often found lounging on large beach rocks when they are not in water. They always hunt in packs in order to lessen the likelihood of predator attacks.',
  img: 'harborseal.jpg', link: 'https://www.fisheries.noaa.gov/species/harbor-seal'},
  Otter: {name: 'Sea Otter', SciName: 'Enhydra lutris', Desc:'Sea otters are marine mammals with a lifespan of 15-20 years in the wild. Adults grow to be about 14-45kg. They have exceptionally dense fur for insulation. They can walk on land but are capable of living entirely in the ocean. ',
img: 'otter.jpg', link: 'https://animaldiversity.org/accounts/Enhydra_lutris/pictures/collections/contributors/kevin_cole/Elutra10/'},
  Cougar: {name: 'Mountain Lion', SciName: 'Puma concolor', Desc: 'Mountain lions are the second largest cat in the new world, they have a large head with pointed erect ears. They are light tawny brown in color and can appear to be grey or almost black, they grow to be 70-170lbs.',
img: 'cougar.jpg', link: 'https://animaldiversity.org/accounts/Puma_concolor/pictures/collections/contributors/mac_carter_cougar/Cougar_6/'},
  Skunk: {name: 'Striped Skunk', SciName: 'Mephitis mephitis', Desc: 'Striped skunks are mostly black with a white stripe along their snout and head, and a v shaped white patch on their neck. These furry mammals have bushy tails and grow to be up to 6.3kg.',
img: 'skunk.jpg', link: 'https://www.flickr.com/photos/donaldquintana/21848868235'},
  Gopher: {name: "Botta's Pocket Gopher", SciName: 'Thomomys bottae', Desc: 'Pocket gophers are light brown in color and have large front incisors. They have fur lined “pockets” in their cheeks that expand to hold dirt. They have powerful neck muscles and front claws. Pocket gophers can grow to be about 7 to ten inches long including their tails. They exhibit sexual dimorphism, males grow to weigh 5.6-8.8oz while females grow to 4.2-7.1oz.',
img: 'gopher.jpg', link: "https://en.wikipedia.org/wiki/Botta%27s_pocket_gopher#/media/File:Botta's_Pocket_Gopher_(Thomomys_bottae).jpg"},
  Raccoon: {name: 'Common Raccoon', SciName: 'Procyon lotor', Desc: 'Coloration of the stripped racoon varies by region and ranges from buff to grey to reddish brown. They have distinct black rings around their eyes and 4-10 darkly colored rings on their tails. Their forepaws are slender and resemble human hands, both forepaws and hindpaws have five digits. Often stocky these racoons can weigh from 1.8-10.4kg. ', img: 'raccoon.jpg', link: 'http://nathistoc.bio.uci.edu/mammals/Carnivora/Procyon%20lotor/Procyon%20lotor.htm'},
  Mouse: {name: 'California Mouse', SciName: 'Peromyscus californicus', Desc: 'These mice act as an important source of food for many predators in their habitat, such as owls, rattlesnakes, and hawks. They play a large role in seed predation.',
img: 'mouse.jpg', link: 'https://animaldiversity.org/accounts/Peromyscus_californicus/pictures/collections/contributors/susan_hoffman/pcalifornicus/'},
  Bat: {name: 'Hoary Bat', SciName: 'Lasiurus cinereus', Desc: 'These bats weigh 20-35 grams and are 13-15cm from nose to tail, their wingspan is approximately 43cm. They have beady eyes, blunt, round noses, and short rounded, thick, broad ears.',
img: 'bat.jpg', link: 'https://animaldiversity.org/accounts/Lasiurus_cinereus/pictures/collections/contributors/joy_okeefe/hoary_bat_dsc_0189/'}
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
  output2.innerHTML = '<img id="smol" src="img/' +animals[anim]['img'] + '"/>'+"<p><h2>"+animals[anim]['name']+ "</h2><br>" + '<h3>'+animals[anim]['SciName'] +"</h3><br>" + animals[anim]['Desc'] + "<br><p></p>" + '<a href ='+ animals[anim]['link']+'>' + 'Image source' + "</a><br></p>";
  let output3 = document.createElement('div');
  output3.innerHTML = '<p></p>'
  document.body.appendChild(output2);
  document.body.appendChild(output3);
}


// document.body.appendChild(outputEl);

// var outputEl = document.getElementById("output");
// outputEl.innerHTML = "How about now?";
