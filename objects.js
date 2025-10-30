function Auto(modell) {
  this.modell = modell;
}

function Person(name) {
  this.name = name;
  this.autos = [];
}

Person.prototype.addAuto = function (auto) {
  this.autos.push(auto);
};

Auto.prototype.conflict = function(personen) {
  let owners = 0;

  for (const person of personen) {
    for (const pAuto of person.autos) {
      if (pAuto === this) {
        owners++;
      }
    }
  }

  if (owners > 1) {
    console.log(`Konflikt: Das Auto "${this.modell}" gehört mehreren Personen!`);
  }
};

const anna = new Person('Anna');
const bob = new Person('Bob');

const auto1 = new Auto('VW Golf');

anna.addAuto(auto1);
bob.addAuto(auto1);

auto1.conflict([anna, bob]);