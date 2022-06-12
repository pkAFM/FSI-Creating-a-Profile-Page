
let content = document.querySelector('.js-generated.content')

let header = document.createElement('h1')
header.setAttribute('class', 'dog-name')
header.append('Rizzo')
content.append(header)

let dogContent = document.createElement('div')
dogContent.setAttribute('class', 'dog-content')
content.append(dogContent)

let dogImage = document.createElement('img')
dogImage.setAttribute('class', 'dog-image')
dogImage.setAttribute('src', './assets/rizzo.jpg')
dogImage.style.display = 'inline-block'
dogImage.style.float = 'left'
content.append(dogImage)

let dogDetails = document.createElement('div')
dogDetails.setAttribute('class', 'dog-details')
dogDetails.style.display = 'inline-block'

let description = document.createElement('h3')
description.textContent ="Description:"
description.style.textAlign ="left"
description.style.display = 'inline-block'
description.style.float = 'left'
dogDetails.append(description)
content.append(dogDetails)

let para = document.createElement("p")
para.innerText = "This gentle dog is aloof toward her owner, and never comes when called.She always acts as though any stranger she meets will harm her,and dislikes other animals."
content.append(para)

let FeedingTimes = document.createElement('h3')
FeedingTimes.textContent = "Feeding Times:"
content.append(FeedingTimes)

let times = document.createElement('ul')
let l1 = document.createElement('li')
let l2 = document.createElement('li')
let l3 = document.createElement('li')
l1.textContent = '9:00 am'
l2.textContent = '12:00 pm'
l3.textContent = '5:00 pm'
times.style.display = 'inline-block'
times.append(l1,l2,l3)
content.append(times)



