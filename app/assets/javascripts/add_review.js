// $(document).ready(function(){
//   var submit = $('.submit')
//   var data = {review: {$('.power-rating').val()}}
//   submit.on("click", addReview);
//   function addReview(e) {
//     $.ajax({
//       type: 'POST',
//       url: '/reviews',
//       data

//     })
//   }


// });

// function search(e) {
//   // stop it doing what it wants and make it do what I WANT ME ME ME
//   e.preventDefault();

//   var searchType = $(':selected').val();

//   // send an ajax request to spotify to find whatever I said in my input
//   $.ajax({
//     type: 'GET',
//     url: 'https://api.spotify.com/v1/search?q=' + searchBox.val() + '&type=' + searchType
//   })
//   .done(function(response) {
//     results.html('');
//     render(response, searchType);
//   });
// }