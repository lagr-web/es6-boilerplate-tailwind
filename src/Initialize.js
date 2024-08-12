import "./style.css";

export default class Initialize {

  constructor() {

    console.log("Initialize ready");

    this.ninja = document.createElement("div");
    //this.ninja.id = "ninja";
     this.ninja.className="w-1/3 mx-auto mt-40"
    document.body.appendChild(this.ninja);

    let ninjaImg = document.createElement("img");
    ninjaImg.className="w-full h-auto object-cover"
    ninjaImg.src = "./assets/ninja.png";
    this.ninja.appendChild(ninjaImg);


  } // END constructor
} // END class
