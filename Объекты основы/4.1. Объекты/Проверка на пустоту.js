const schedule = {}
console.log(isEmpty(schedule))

schedule['8:30'] = 'get up'
console.log(isEmpty(schedule))

function isEmpty(obj) {
    return !Object.keys(obj ?? {}).length
}