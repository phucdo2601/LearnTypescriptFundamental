class game_actor {
        name_actor: string;
        slogan: string;
        blood: number;


        /**
         * de tao ra instance
         */

        constructor(name_actor: string, slogan: string, blood: number) {
                this.name_actor = name_actor;
                this.slogan = slogan;
                this.blood = blood;
        }
        
        chay() {

        }

        chem() {

        }

        tostring() {
                return `GameActor: nameActor: ${this.name_actor}, slogan: ${this.slogan}, blood: ${this.blood}`
        }
}

var actor1 = new game_actor("phucdn", "Quywt tam tot nghiep", 100);
var actor2 = new game_actor("vinhlq", "Quywt tam tot nghiep loai suat xac", 100);
console.log(actor1.tostring());
console.log(actor2.tostring());
