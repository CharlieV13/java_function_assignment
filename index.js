var $name = 'Charlie';
var $height = Number(6) + "'" + Number(5) + '"';
var $country = 'USA';
  
function myFunction (name, height, country) {
  console.log(name, height, country);
  alert($name + ' ' + $height + ' ' + $country);
}

myFunction();
