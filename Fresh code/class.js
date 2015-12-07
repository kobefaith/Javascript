/**
 * Created by zhoufei on 2015/12/7.
 */

var Student = {
    name:'Robot',
    height:1.2,
    run:function(){
        console.log(this.name + 'is running...');
    }
};

/*var xiaoming = {
    name:'小明'
};
 xiaoming.__proto__ = Student;*/
function createStudent(name){
    var s = Object.create(Student);
    s.name = name;
    return s;
}
var xiaoming = createStudent('小明');
xiaoming.run();
xiaoming.__proto__===Student;