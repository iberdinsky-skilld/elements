(function (Drupal) {
  Drupal.behaviors.titleJs = {
    attach: function attach() {
      console.log(`hello i'm js!`);
    }
  };
})(Drupal);
