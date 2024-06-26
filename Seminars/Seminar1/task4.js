/*
Задание 4.
Представьте себе ситуацию: у нас есть группа студентов, и мы хотим отследить, 
кто из них посетил какие уроки и кто из преподавателей вёл данные уроки. 

Необходимо: 
1. Создать Map объект, который будет использоваться для хранения соответствия 
между уроком и преподавателем, урок => преподаватель.
2. Необходимо создать Map объект, ключами которого будут объекты студентов,
а значениями будут Set объекты, которые будут хранить уроки, посещенные 
студентом.
*/

const lessonsTeacher = new Map();
const studentLessons = new Map();

console.log(lessonsTeacher);


const ivan = {
    name: "Иван",
};
const paul = {
    name: "Павел",
};

const lessonMath = 'Математика';
const lessonHistory = 'История';

const teacherMath = {
  name: "Дина",
};
const teacherHistory = {
  name: "Максим ",
};

const findMathTeacher = lessonsTeacher.set(lessonMath, teacherMath);
console.log(findMathTeacher);
const findHistoryTeacher = lessonsTeacher.set(lessonHistory, teacherHistory);
console.log(findHistoryTeacher);

studentLessons.set(ivan, new Set([lessonMath, lessonHistory]));
studentLessons.set(paul, new Set([lessonHistory]));

// Преподаватель по Математике: Смирнов.
console.log(`Преподаватель по математике: ${lessonsTeacher.get(lessonMath).name}`);
// Уроки Ивана: Математика, История.
console.log(`Уроки Ивана: ${[...studentLessons.get(ivan)].join(", ")}`);