function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
  
  var working = false;
  $('.login').on('submit', function(e) {
    e.preventDefault();
    if (working) return;
    working = true;
    var $this = $(this),
      $state = $this.find('button > .state');
    $this.addClass('loading');
    $state.html('Autenticação');
    setTimeout(function() {
      $this.addClass('ok');
      $state.html('Bem-vindo de volta');
      setTimeout(function() {
        $state.html('Log in');
        $this.removeClass('loading');
        working = false;
      }, 4000);
    }, 3000);
  })