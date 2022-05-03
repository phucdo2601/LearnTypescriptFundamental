enum state {
    Create = 10,
    Processing,
    Finish
}

class congViec {

    id: number;
    name: string;
    status: state;

    constructor(id: number, name: string, status: state) {
        this.id = id;
        this.name = name;
        this.status = status;
    }

    toString(): string {
        return `${this.id} -ten: ${this.name} -status: ${this.status}`;
    }
}

let cv1 = new congViec(1, "Hoc Html", state.Finish);
console.log(cv1.toString());
