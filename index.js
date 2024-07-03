// code your solution here
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"}
];

function superbowlWin(record){
    const findWin = record.find(function(record){
        return record.result === "W";
    });
    return  findWin ? findWin.year : undefined

}

console.log(superbowlWin(record));

