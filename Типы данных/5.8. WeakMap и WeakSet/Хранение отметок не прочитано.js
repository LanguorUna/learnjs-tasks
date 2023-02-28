const messages = [
    {text: 'Hello', from: 'John'},
    {text: 'How goes?', from: 'John'},
    {text: 'See you soon', from: 'Alice'}
]

const readMessages = new WeakSet()
readMessages.add(messages[1])
console.log('Прочитано сообщение 1: ' + readMessages.has(messages[1]))

messages.splice(1, 1)
console.log('Прочитано сообщение 1: ' + readMessages.has(messages[1]))