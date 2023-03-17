function work(a, b) {
    console.log(a + b)
}

const spiedWork = spy(work)

spiedWork(1, 2)
spiedWork(4, 5)

for (let args of spiedWork.calls) {
    console.log('call: ' + args.join(', '))
}

function spy(func) {
    return function wrapper(...args) {
        if (!wrapper.calls) {
            wrapper.calls = []
        }

        wrapper.calls.push(args)
        return func.apply(this, args)
    }
}