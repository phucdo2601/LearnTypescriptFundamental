enum state {
    Create = 10,
    Processing,
    Finish
}

class congViec {

    static id: number = 2;
    static nameWork: string = "viec so 1";
    status: state;

    constructor(id: number, name: string, status: state) {
        congViec.id = id;
        congViec.nameWork = name;
        this.status = status;
    }

    toString(): string {
        return `${congViec.id} -ten: ${congViec.nameWork} -status: ${this.status}`;
    }

    static testStatic() : string {
        return  "thu xem co su dung dc ham nay ma ko can phai tai moi mot instance ko?";
        
    }
}

//tao mot doi tuong trong class (instance)
// let cv1 = new congViec(1, "Hoc Html", state.Finish);
// console.log(cv1.toString());


/**
 * static se giup chung la se khong tao ra mot instance ma van co the su dung dc cac thuoc tinh
 */

console.log(congViec.nameWork);
console.log(congViec.testStatic());
