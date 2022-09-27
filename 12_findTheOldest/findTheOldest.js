const findTheOldest = function(people) {
    people.sort((a, b) => {
        return ((b.yearOfDeath || 2022) - b.yearOfBirth) - ((a.yearOfDeath || 2022) - a.yearOfBirth);
    });
    return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;
