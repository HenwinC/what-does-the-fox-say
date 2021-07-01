const foxImg = document.querySelector('#fox')
const foxSays= new Audio('../audio/fox.mp3')
const notfoxImg = document.getElementById('notFox')


foxImg.addEventListener('click', () =>{
  foxSays.volume = .05
  foxSays.play()
})

notfoxImg.addEventListener('click', (evt)=> {
  if (evt.target.id !== 'notFox'){
    const audioElement = new Audio(`../audio/${evt.target.id}.mp3`)
    audioElement.volume = .01
    audioElement.play ()
  }
})
