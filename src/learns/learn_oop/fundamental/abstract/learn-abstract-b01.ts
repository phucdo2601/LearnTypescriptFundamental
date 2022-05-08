
//ban vr nhap, mo ta tinh nang cua class
abstract class learnAbstractB01DienThoai {

    namePhone : string = "";

    // constructor(parameters) {
        
    // }

    /**
     * abstract method
     */
    public abstract guiTinNhan() : void;

    public goiDienThoai() {
        console.log("goi dien thoai");
        
    }

    public abstract goiDienThoai2() : string;


}

/**
 * chinh xac hoa no bang tao class su dung lai ban thiet ke
 */
class learnAbstractB01Android extends learnAbstractB01DienThoai {
    public goiDienThoai2(): string {
        return "Android phone calls!!";
    }
    public guiTinNhan(): void {
        console.log("Android phone sends the messages!");
        
    }
      
}

var samsung = new learnAbstractB01Android();
samsung.guiTinNhan();
console.log(samsung.goiDienThoai2());
