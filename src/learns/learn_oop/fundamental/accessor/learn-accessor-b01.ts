class learnAccessorTuongB01 {
    private _nameCommander: string;

    constructor(_nameCommander: string) {
        this._nameCommander = _nameCommander;
    }

    /**
     * Getter nameCommander
     * @return {string}
     */
	public get nameCommander(): string {
		return this._nameCommander +" la gia tri tra ve khi truy cap qua getter";
	}

    /**
     * Setter nameCommander
     * @param {string} value
     */
	public set nameCommander(value: string) {
		this._nameCommander = value;
	}
    
}

var zeus = new learnAccessorTuongB01("Zeus");
console.log("Ten tuong la: "+ zeus.nameCommander);

zeus.nameCommander = "than Zeus";
console.log("ten tuong sau khi doi lai: "+ zeus.nameCommander);
