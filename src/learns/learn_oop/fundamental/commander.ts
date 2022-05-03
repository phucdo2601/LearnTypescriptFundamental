class commander {

    nameCommand: string;
    description: string;
    skill: string[];

    constructor(nameCommand: string, description: string, skill: string[]) {
        this.nameCommand = nameCommand;
        this.description = description;
        this.skill = skill;       
    }

    showThongtin(): void {
        var thongTin =  `
            Warrior: name-warrior: ${this.nameCommand}, descrption: ${this.description}, skill: ${this.skill.map((skill, i)=>{
                this.skill[i];
                return skill;
            })}
        `;

        console.log(thongTin);
        
    }
}

class SatThu extends commander {
    donSatThu: string;

    constructor(nameCommand: string, description: string, skill: string[], donSatThu: string) {
        super(nameCommand, description, skill);
        this.donSatThu = donSatThu;
    }

    // toString(): string {
    //     return `
    //         Warrior: name-warrior: ${this.nameCommand}, descrption: ${this.description}, skill: ${this.skill.map((skill, i)=>{
    //             this.skill[i];
    //             return skill + " | ";
    //         })}, don sat thu: ${this.donSatThu}
    //     `;

    // }

    /**
     * mot cach viet ham toString khac 
     */
    showThongtin(): void {
        super.showThongtin();

        console.log("Don Sat thu cua tuong nay la: "+this.donSatThu);
        
    }
}

var ashe = new commander("Ashe", "Cung Bang", [
    "Chu tam tien",
    "Ung tien",
    "tan xa tien",
    "Dai bang tien"
]);

console.log(ashe.showThongtin());

var Ahri = new commander("Ahri", "Ho Li 9 duoi", [
    "Hut hon",
    "Qua Cau ma thuat",
    "Lua ho ly",
    "Hon Gio"
]);
console.log(Ahri.showThongtin());

/**
 * Su dung class SatThu
 */
var Talon = new SatThu("Talon", "Sat thu bong dem", [
    "Ngoai giao kieu Noxus",
    "Am Khi"
], "Sat thu vo hinh");

Talon.showThongtin();


var Jayce = new SatThu("Jayce", "Nguoi bao ho", [
    "Tu dien",
    "Chi Thien",
    "Tich tu"
], "Bua Thuy ngan");

Jayce.showThongtin();

