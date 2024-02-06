let DATA ="secret info";

class user{
    constructor(name,email){
        this.name = name;
        this.email = email;
    }
    viewdata(){
        console.log("data = ",DATA)
    }

}

let stu1 = new user("aman","acd123@gmail.com");
let stu2 = new user("ajay","akl123@gmail.com");
  
class admin extends user{
    constructor(name,email){
        super(name,email);
    }
    editdata(){
        DATA = "some new value";
    }
    

}
let admin1 =new admin("admin","admin123@edu.in");
