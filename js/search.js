$("#searchItems").keyup(function(){
    let searchText = $(this).val().toLowerCase();
    console.log(searchText);
    $('.featured__item').filter(function(){
      let cardText = $(this).text().toLowerCase();
      if (cardText.includes(searchText)){
        $(this).show();
      }
      else{
        $(this).hide();
      }
    })
  })


  $("#searchItems").keyup(function(){
    let searchText = $(this).val().toLowerCase();
    console.log(searchText);
    $('.product__item').filter(function(){
      let cardText = $(this).text().toLowerCase();
      if (cardText.includes(searchText)){
        $(this).show();
      }
      else{
        $(this).hide();
      }
    })
  })