const interests = document.querySelector("#interests");
const about = document.querySelector("#about");
const contact = document.querySelector("#contact");
const interestsContent = document.querySelector("#interests-content");
const aboutContent = document.querySelector("#about-content");
const contactContent = document.querySelector("#contact-content");

interests.addEventListener("click", () => {
  const interestsBox = new WinBox({
    title: "Interests",
    // modal: true,
    width: "800px",
    height: "450px",

    mount: interestsContent,
    onfocus: function () {
      this.setBackground("#06989a");
    },
    onblur: function () {
      this.setBackground("#777");
    },
  });
});
about.addEventListener("click", () => {
  const aboutBox = new WinBox({
    title: "About Me",
    // modal: true,
    width: "550px",
    height: "370px",
    top: 50,
    right: 50,
    bottom: 50,
    left: 50,
    mount: aboutContent,
    onfocus: function () {
      this.setBackground("#06989a");
    },
    onblur: function () {
      this.setBackground("#777");
    },
  });
});

contact.addEventListener("click", () => {
  const contactBox = new WinBox({
    title: "Contact Me",
    background: "#06989a",
    width: "500px",
    height: "350px",
    top: 150,
    right: 50,
    bottom: 50,
    left: 250,
    mount: contactContent,
    onfocus: function () {
      this.setBackground("#06989a");
      this.title.textColor = "#000";
    },
    onblur: function () {
      this.setBackground("#777");
    },
  });
});
