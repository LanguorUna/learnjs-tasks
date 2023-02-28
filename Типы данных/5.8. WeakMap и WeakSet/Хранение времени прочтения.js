const messages = [
    {text: 'Hello', from: 'John'},
    {text: 'How goes?', from: 'John'},
    {text: 'See you soon', from: 'Alice'}
]

const readMessages = new WeakMap()
readMessages.set(messages[1], new Date('2023-02-18 16:35'))
console.log('Прочитано сообщение 1: ' + readMessages.get(messages[1])?.toISOString())

messages.splice(1, 1)
console.log('Прочитано сообщение 1: ' + readMessages.get(messages[1])?.toISOString())