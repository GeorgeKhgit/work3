$(document).ready(
  function(){
    $('#firsttimeadd').styler();
    $('.middlecontent__section4__right_item').click(function(){
  
       $('.middlecontent__section4__right_item p').addClass("show").not(this).removeClass("show")
       $('.middlecontent__section4__right_item').addClass('sho1w').not(this).removeClass('sho1w')
    
    })
    $('#eeoe').click(function(){
      $('#eeoe').attr('controls','controls')
    })
    $('#sususubmit').click(function(){
      $('#calernrvaluer').val('');
      // $.ajax({
      //   method:"",
      //   url:'',
      //   cache:false,
      //   data:'',
      //   statusCode:{
      //     418:function(){

      //     }
      //   },
      //   success:function(datas){

      //   }
      // })
    })
    $('#burgermenu').click(function(){
      $('.blurforallbody').css('filter','blur(3px)')
      $('.burgermenudropdown').fadeIn()
    })
    $('#closerone').click(function(){
      $('.burgermenudropdown').fadeOut();
      $('.blurforallbody').css('filter','blur(0px)')
    })
    $(document).mouseup(function(e){
      var poper = $('.burgermenudropdown');
      if(e.target!=poper[0]&&poper.has(e.target).length ===0){
        $('.burgermenudropdown').fadeOut();
        $('.blurforallbody').css('filter','blur(0px)')
      } 
    })
    $('.burgermenudropdown__navigator__list a').click(function(){
      event.preventDefault();
      var id = $(this).attr('href'),
      top = $(id).offset().top;
      $('html,body').animate({scrollTop:top},1000);
      $('.burgermenudropdown').fadeOut();
      $('.blurforallbody').css('filter','blur(0px)')
    })
   $(document).keydown(function(e){
    if (e.keyCode == 27) {
      
      $('.burgermenudropdown').fadeOut();
      $('.blurforallbody').css('filter','blur(0px)')
      
              }
      
    })

  }
  
)
