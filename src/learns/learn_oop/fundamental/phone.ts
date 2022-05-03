class phone {
    namePhone: string;
    pricePhone: number;
    start: number;
    color: string[];


    constructor(namePhone: string, pricePhone: number, start: number, color: string[]) {
        this.namePhone = namePhone;
        this.pricePhone = pricePhone;
        this.start = start;
        this.color = color;
    }

    toString(): string {
        return `San pham : ${this.namePhone} co gia la ${this.pricePhone}, danh gia: ${this.start}, co ${this.color.length} ma mau sau: ${this.color.map((color, i) =>{
            this.color[i] 
            return color;
        })}` ;
    }

}

var phone1 = new phone("Iphone 13 Pro Max", 1200, 4.5, ["xanh", "vang", "xam"]);

console.log(phone1.toString());

// export default phone