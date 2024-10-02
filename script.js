const loadCategories = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then(res => res.json())
    .then(data => displayCategories(data.categories))
    .catch(error => console.log(error));
}
const loadVideo = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then(res => res.json())
    .then(data => displayVideo(data.videos))
    .catch(error => console.log(error));
}

const demoobject = {
    "category_id": "1001",
    "video_id": "aaaa",
    "thumbnail": "https://i.ibb.co/L1b6xSq/shape.jpg",
    "title": "Shape of You",
    "authors": [
        {
            "profile_picture": "https://i.ibb.co/D9wWRM6/olivia.jpg",
            "profile_name": "Olivia Mitchell",
            "verified": ""
        }
    ],
    "others": {
        "views": "100K",
        "posted_date": "16278"
    },
    "description": "Dive into the rhythm of 'Shape of You,' a captivating track that blends pop sensibilities with vibrant beats. Created by Olivia Mitchell, this song has already gained 100K views since its release. With its infectious melody and heartfelt lyrics, 'Shape of You' is perfect for fans looking for an uplifting musical experience. Let the music take over as Olivia's vocal prowess and unique style create a memorable listening journey."
}

const displayVideo = (data) =>{
    let div = document.getElementById("video_container")

    data.forEach((video) =>{
        console.log(video);

        let card = document.createElement("div")
        card.classList = "card card-compact"

        card.innerHTML =
        `
         <figure class="h-[150px]">
    <img
      src=${video.thumbnail}
      class ="h-full w-full object-cover"
      alt="Shoes" />
  </figure>
  <div class="px-0 py-4 flex  justify-center gap-3">
    <div>
    <img src=${video.authors[0].profile_picture} class ="w-8 h-8 rounded-full object-cover"  />
    </div>

    <div>
    <h1 class ="font-bold">${video.title}</h1>
    <div class = " flex gap-2 items-center">
    <p class = "text-gray-500">${video.authors[0].profile_name}</p>
    ${video.authors[0].verified === true ? `<img src="https://img.icons8.com/?size=48&id=D9RtvkuOe31p&format=png" class = "w-5 h-5" alt="" />`: ""}
    </div>
    <p class = "text-gray-500">${video.others.views} views</p>
    </div>
  </div>


        `
        div.append(card)

    })
}

const displayCategories = (data) => {
    let categoriesContainer = document.getElementById("categories_container");
    categoriesContainer.innerHTML = '';

    data.forEach((item) => {
        console.log(item);
        let button = document.createElement("button");
        button.classList.add("btn"); 
        button.innerText = item.category;

        categoriesContainer.appendChild(button)
        
    });
}

loadCategories();
loadVideo();


