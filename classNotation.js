//assignment class
class Assignment {

    constructor(title, dueDate) {  //constructor for the assignment class
        this.title = title;
        this.dueDate = dueDate;
    }

    printAssignment() { //print function
        console.log('   Title: ' + this.title + ' | Due Date: ' + this.dueDate);
    }
}

//course class
class Course {

    constructor(courseName, instructor, creditHours, assignments) { //constructor for the course class
        this.courseName = courseName;
        this.instructor = instructor;
        this.creditHours = creditHours;
        this.assignments = assignments;
    }

    courseInfo() { //prints information regarding each course instance

        console.log(
            'Course: ' + this.courseName +
            ' | Instructor: ' + this.instructor +
            ' | Credit Hours: ' + this.creditHours
        );
        console.log('Assignments >>>');
        for (let a of this.assignments)
            a.printAssignment(); //deploys the printAssignment() function from the Assignment class
    }
}

//creates the assignment instances
let a1 = new Assignment('Project Proposal', 'Jan 15');
let a2 = new Assignment('Midterm Report', 'Feb 20');
let a3 = new Assignment('Final Report', 'Mar 30');
let a4 = new Assignment('Presentation', 'Apr 10');

//creates the course instances, using the pre-initialized assignments
let c1 = new Course(
    'Software Engineering',
    'Dr. Pepper',
    3,
    [a1, a2]
);

let c2 = new Course(
    'Data Science',
    'Dr. Evil',
    6,
    [a3, a4]
);
//calls the courseInfo() function to print info for the 2 Course instances
c1.courseInfo();
c2.courseInfo();