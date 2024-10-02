const loadCategories = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then(res => res.json())
    .then(data => displayCategories(data.categories))
    .catch(error => console.log(error));
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


