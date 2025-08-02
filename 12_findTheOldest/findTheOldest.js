const findTheOldest = function(array) {
    let oldestAge = 0;
    let oldestPerson = array.reduce((oldestPerson, person) => {
        if ("yearOfDeath" in person) {
            let age = person.yearOfDeath - person.yearOfBirth;
            if (age > oldestAge) {
                oldestAge = age;
                oldestPerson = person;
            }
        } else {
            let thisYear = new Date();
            let age = thisYear.getFullYear() - person.yearOfBirth;
            if (age > oldestAge) {
                oldestAge = age;
                oldestPerson = person;
            }
        }
        return oldestPerson;
    }, 0);
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
