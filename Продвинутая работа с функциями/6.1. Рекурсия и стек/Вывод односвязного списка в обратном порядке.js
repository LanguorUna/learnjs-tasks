const list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
}

function printReverseList1(list) {
    const arr = []

    while (list) {
        arr.push(list.value)
        list = list.next
    }

    for (let i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i])
    }
}

function printReverseList2(list) {
    if (list.next) {
        printReverseList2(list.next)
    }

    console.log(list.value)
}

printReverseList1(list)