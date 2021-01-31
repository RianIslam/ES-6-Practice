class  Student{
    constructor(sId,sName){
        this.id = sId;
        this.name = sName;
        this.school = "pabna zilla school"
    }
}

const student1 = new Student(12,"rian");
const student2 = new Student(13, "karim");
console.log(student1,student2)