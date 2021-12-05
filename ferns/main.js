// document.writeln('Fauna <br>');

var animals = {
  Chain: {name: 'Giant Chain Fern', SciName: 'Woodwaria fimbriata', Desc: 'The giant chain fern is evergreen in color and grows waist to head height.', img: 'chain.jpg', link: 'https://calscape.org/Woodwardia-fimbriata-()'},
  Bracken: {name: 'Western Bracken Fern', SciName: ' Pteridium aquilinum var. pubescens', Desc: 'These ferns are bright green in color and grow mid-calf to knee height.', img: 'bracken.jpg', link: 'https://www.calflora.org/app/taxon?crn=6930'},
  Wood: {name: 'California Wood Fern', SciName: 'Dryopteris arguta', Desc: 'These ferns are abundant, and grow mid-calf to knee height. They are bright green and have yellow spores on their underside.', img: 'wood.jpg', link: 'https://calscape.org/Dryopteris-arguta-()'},
  Sword: {name: 'Sword Fern', SciName: 'Polystichum munitum', Desc: 'These ferns are abundant, and grow mid-calf to knee height.', img: 'sword.jpg', link: 'https://calscape.org/Polystichum-munitum-()'},
  Poly: {name: 'California Polypody', SciName: 'Polypodium californicum', Desc: 'Firm drought-deciduous leaves that often grows on rocks, grows to ankle tp mid-calf height.', img: 'poly.jpg', link: 'https://www.calflora.org/app/taxon?crn=6775'},
  Gold: {name: 'Goldenback Fern', SciName: 'Pentagramma triangularis subsp. triangularis', Desc: 'These common ferns grow to ankle height and have pale to dark green leaves.', img: 'golden.jpg', link: 'https://www.calflora.org/app/taxon?crn=6237'},
  Lady: {name: 'Lady Fern', SciName: 'Athyrium filix-femina var. cyclosorum', Desc: 'This fairly common fern has large, dense, and lacy leaves. It grows from waist to chest height.', img: 'lady.jpg', link: 'https://www.calflora.org/app/taxon?crn=959'}
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
