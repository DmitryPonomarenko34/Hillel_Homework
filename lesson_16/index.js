function Person({name, secondName, birthdate}) {
  this.name = name;
  this.secondName = secondName;
  this.birthdate = birthdate;

  this.getAge = function () {
    const currentYear = new Date().getFullYear();
  
    return currentYear - this.birthdate;
  }
}

function Student({name, secondName, birthdate, grades = []}) {
  Person.call(this, {name, secondName, birthdate});

  this.grades = grades;
  const _attendance = [];

  this.summary = function () {
    const avgGrade = this.grades.reduce((sum, currentValue) => sum + currentValue, 0) / this.grades.length;
    const classAttendance = _attendance.filter((item) => item);
    const avgAttendance = (classAttendance.length / _attendance.length).toFixed(2);
    
    if (avgGrade > 90 && avgAttendance > 0.9) {
      return "Молодець!";
    }

    if (avgGrade < 90 && avgAttendance < 0.9) {
      return "Редиска!";
    }

    return "Добре, але можна краще ";
  }

  this.present = function () {
    if (_attendance.length === 25) {
      return;
    }

    _attendance.push(true);
  }

  this.absent = function () {
    if (_attendance.length === 25) {
      return;
    }

    _attendance.push(false);
  }
}

const student = new Student({name: 'John', secondName: 'Doe', birthdate: 2001, grades: [90, 100, 100, 100, 90, 90]});

student.present();
student.present();
student.absent();
console.log(student.getAge());
console.log(student.summary());

