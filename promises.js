let timer = new Promise((resolve, reject) => {
  console.log('init Promise')

  setTimeout(() => {
    console.log('Timeout done')
    resolve()
  }, 2000)
})

timer.then(() => {
  console.log('Proceed on')
})
timer.catch(() => {
  console.log('rejected!')
})


let timer2 = function(length) {
  return new Promise((resolve, reject) => {
    console.log('Inited')

    setTimeout(() => {
      console.log('Timer done')
      resolve()
    }, length)
  })
}

timer2(4000).then(() => console.log('All done!'))