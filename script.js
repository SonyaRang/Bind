fetch(
 "YOUR API ENDPOINT URL HERE"
)
 .then(function(response) {
   return response.json();
 })
 .then(function(data) {
   console.log(data);
 });