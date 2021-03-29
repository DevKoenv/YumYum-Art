var images = [
  "../images/background1.png",
  "../images/background2.gif",
  "../images/background3.gif",
  "../images/background4.gif",
  "../images/background5.png",
];

$("#container").append(
  "<style>#container, .acceptContainer:before, .logoContainer:before {background: url(" +
    images[Math.floor(Math.random() * images.length)] +
    ") center fixed }"
);
