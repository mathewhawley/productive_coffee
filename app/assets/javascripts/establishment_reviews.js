$(document).ready(function(){
  function deleteReview(id){
    reviewId = $('#review-'+ id);
    request("DELETE", "/tasks/" + taskId, null)

  $.ajax({
    url: '/etablishments/' +  + 'reviews' + ($('#delete-review').val()),
    method: method,
    dataType: "json",
    data: data
  })
  .done(function(){
    $this.parent().remove();
  });
   
  }
  $('#review-'+ id).on("click", ".delete-review", deleteReview);
});


