var images = [
  "./assets/images/background1.png",
  "./assets/images/background2.gif",
  "./assets/images/background3.gif",
  "./assets/images/background4.gif",
  "./assets/images/background5.png",
];

$("#container").append(
  "<style>#container, .acceptContainer:before, .logoContainer:before {background: url(" +
    images[Math.floor(Math.random() * images.length)] +
    ") center fixed }"
);
