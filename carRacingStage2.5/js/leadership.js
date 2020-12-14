class Leadership{
    constructor(){ 
        this.leadTitle = createElement('h1');
        this.name=null
        this.distance=0;
        this.nameTitle=createElement('h3');
        this.distTitle=createElement('h3');
       
    }

    display(){
        fill("black");
        this.leadTitle.html("And the Winners are:");
        this.leadTitle.position(displayWidth/2 - 50, 0);
        this.nameTitle.html("NAME");
        this.nameTitle.position(displayWidth/4,80);
        this.distTitle.html("DISTANCE");
        this.distTitle.position(displayWidth/2,80);


        var winners = database.ref('players');
        winners.on("value",(data)=>{
      winPlr = data.val();
    })
    console.log(winPlr)
 winners=winPlr;
console.log(winPlr.player1.name);

    var count=0
   // winPlr.sort(function(x,y){return x[1]-y[1]});
    //console.log(winPlr)
    for(var i=0;i<= winPlr.player4; i++)
     winners[i][0].push(winPlr.player1.name);
     winners[i][1].push(winPlr.player1.distance);
     console.log(winners)
    
    



    }
}