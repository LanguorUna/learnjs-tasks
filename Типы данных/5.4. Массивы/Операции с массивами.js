const styles = ['Джаз', 'Блюз']
console.log(styles)

styles.push('Рок-н-ролл')
console.log(styles)

styles[Math.trunc(styles.length / 2)] = 'Классика'
console.log(styles)

console.log(styles.shift())
console.log(styles)

styles.unshift('Рэп', 'Регги')
console.log(styles)