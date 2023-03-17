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

function printList1(list) {
    while (list) {
        console.log(list.value)
        list = list.next
    }
}

function printList2(list) {
    console.log(list.value)
    if (list.next) {
        printList2(list.next)
    }
}

printList2(list)