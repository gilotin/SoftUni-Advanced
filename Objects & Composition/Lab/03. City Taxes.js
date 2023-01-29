function cityTaxes(city, population, treasury){
    let obj = {
        city,
        population,
        treasury,
        taxRate: 10,
        collectTaxes(){
           this.treasury += this.population * this.taxRate;
        },
        applyGrowth(percentage){
           return this.population += this.population * 5 / 100;
        },
        applyRecession(percentage){
           return this.treasury -= this.treasury * (percentage/ 100);
        }
    }
    return obj
}

const city =
  cityTaxes('Tortuga',
  7000,
  15000);
  city.collectTaxes();
  console.log(city.treasury);
  city.applyGrowth(5);
  console.log(city.population);
  