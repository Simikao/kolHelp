function wypisz(samochod) {
    console.log(`Skońćzyłem ${samochod.teamName}`);
}

class SamochodWyscigowy {

    teamName;

    distanceNoFail;

    constructor(teamName) {
        this.teamName = teamName;
        this.distanceNoFail = 0;
        this.fail = false;
        this.time;
    }

    // race() {
    //     const results = [];
    //     const sort = () => {
    //         if results.length === cars.length) {
    //             const sortedResults = results.sort()
    //             console.log(sortedResults);
    //         }
        // }
    // }
    distanceAdd(){
        this.distanceNoFail+= 5;
    }

    helper() {
        this.distanceAdd();
        if ((Math.random()*100)<5){
            clearInterval(this.time);
        }

    }

    race() {
        this.time = setInterval(this.helper, 500);
    }
    
}