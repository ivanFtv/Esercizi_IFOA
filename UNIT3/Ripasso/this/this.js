console.log(this);

function print2() {
  console.log(this);
}

print2();


const persona = {
  nome: "Mario",
  saluta: function() {
      console.log("Ciao sono " + this.nome);
  },

  saluta2: () => {
    console.log("Ciao sono " + this.nome); // undefined
  },

  saluta3: function() {
    setTimeout(function() {
      console.log("Ciao sono " + this.nome); // undefined
    }, 1000);
  },

  saluta4: function() {
    setTimeout(function() {
      console.log("Ciao sono " + this.nome); // mario
    }.bind(this), 1000);
  },

  saluta5: function() {
    let self = this;
    setTimeout(function() {
      console.log("Ciao sono " + self.nome); // mario
    }.bind(this), 1000);
  }
};

persona.saluta();
persona.saluta2();
persona.saluta22();
persona.saluta3();
persona.saluta4();
persona.saluta5();