(function (Drupal) {
  Drupal.behaviors.titleJs = {
    attach: function attach(context) {
      console.log(`hello i'm js!`);
    }
  };
})(Drupal);
