var matKhau : string = "0987215804";

class learnAccessorHuman {

    private _nameHumam: string = "";

    // constructor(parameters) {
        
    // }


    /**
     * Getter nameHumam
     * @return {string }
     */
	public get nameHumam(): string  {
		return this._nameHumam;
	}

    /**
     * Setter nameHumam
     * @param {string } value
     */
	public set nameHumam(value: string ) {
        if (matKhau === "0987215804") {
		this._nameHumam = value;
            
        } else {
            this._nameHumam = "Sai Mat Khau";
        }
	}

}


var people01 = new learnAccessorHuman();
people01.nameHumam = "Phucdn";
console.log(people01.nameHumam);

// matKhau = "dfghdfghdhdfh";
// people01.nameHumam = "Phucdn";

// console.log(people01.nameHumam);
