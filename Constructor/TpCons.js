class Rectangle {
    constructor(hauteur, largeur){
      this.hauteur = hauteur;
      this.largeur = largeur;
    }
  
    get area(){
      return this.calcArea();
    }
  
    calcArea(){
      return this.largeur * this.largeur
    }
  }
  const rec1 = new Rectangle(10, 10);
  
  console.log(rec1.area);