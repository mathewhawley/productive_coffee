$(document).ready(function(){
  $.ajax({
    url: '/establishments/reviews',
    type: 'POST',
    dataType: 'json',
    data: {establishment: {id: $('.establishment').val()}}
  })
  .done(function(response) {
    // var reviews = response.reviews
    console.log(response);
    // $.each(reviews, function(index, review){
    //   console.log(review.content);
    // });
  });
});
