(function (Drupal, cowsay) {
  Drupal.behaviors.titleJs = {
    attach: function attach(context) {
      const code = document.createElement('PRE');
      code.innerText = cowsay.say({
        text: "Hello from external library",
      });
      Array.prototype.forEach.call(
        context.querySelectorAll(".a-title"),
        (title) => {
          title.before(code);
          title.classList.add("title-processed");
        }
      );
    },
  };
})(Drupal, cowsay);
