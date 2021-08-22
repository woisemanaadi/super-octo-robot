class Player {

    constructor(){

        this.index=null;this.distance=0;this.name=null


        
        
    }

    update(){
        var playerIndex="players/player"+this.index
        database.ref(playerIndex).set({
            name:this.name,
            distance:this.distance,
        
        })
    }

    updateCount(Count){
        database.ref("/").update({playerCount:Count})
    }
    
    getCount(){
        database.ref("playerCount").on("value",function(data){
            playerCount=data.val()
        })
    }
    
    static getPlayerInfo(){

        var palyerInfoRef=database.ref("players")
        palyerInfoRef.on("value",(data)=>{
            allPlayers=data.val()
        })
    }
}

