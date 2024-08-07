const all = document.getElementById('all');
const breakfast = document.getElementById('breakfast');
const lunch = document.getElementById('lunch');
const shakes = document.getElementById('shakes');

breakfast.addEventListener('click', function(){
    const items = document.getElementById('items');
    items.innerHTML = ` 
            <div class="item">
                <img src="./breakfast/French Toast.jfif">
                <div class="content">
                    <h5>Rs. 200/=</h5>
                    <hr>
                    <h3>French Toast</h3>
                    <p>Description: Slices of bread soaked in a mixture of beaten eggs, milk, and cinnamon, then fried until golden brown, often topped with powdered sugar, syrup, or fruits.</p>
                </div>
            </div>

            <div class="item">
                <img src="./breakfast/Avocado Toast.jfif">
                <div class="content">
                    <h5>Rs. 250/=</h5>
                    <hr>
                    <h3>Avocado Toast</h3>
                    <p>Description: Toasted bread topped with mashed avocado, often garnished with salt, pepper, chili flakes, and sometimes a poached egg.</p>
                </div>
            </div>

            <div class="item">
                <img src="./breakfast/Paratha with Curd.jfif">
                <div class="content">
                    <h5>Rs. 300/=</h5>
                    <hr>
                    <h3>Paratha with Curd</h3>
                    <p>Description: A type of Indian flatbread made from whole wheat flour, often stuffed with various fillings like potatoes or paneer, and served with yogurt or curd.</p>
                </div>
            </div>

            <div class="item">
                <img src="./breakfast/Full English Breakfast.jfif">
                <div class="content">
                    <h5>Rs. 400/=</h5>
                    <hr>
                    <h3>Full English Breakfast</h3>
                    <p>Description: A hearty breakfast plate featuring eggs, bacon, sausages, baked beans, grilled tomatoes, mushrooms, and toast.</p>
                </div>
            </div>
    `
});

lunch.addEventListener('click', function(){
    const items = document.getElementById('items');
    items.innerHTML = ` 
            <div class="item">
                <img src="./lunch/Caesar Salad.jfif">
                <div class="content">
                    <h5>Rs. 100/=</h5>
                    <hr>
                    <h3>Caesar Salad</h3>
                    <p>Description: Crisp romaine lettuce tossed in a creamy Caesar dressing, topped with croutons, and freshly grated Parmesan cheese.</p>
                </div>
            </div>

            <div class="item">
                <img src="./lunch/Grilled Chicken Sandwich.jfif">
                <div class="content">
                    <h5>Rs. 200/=</h5>
                    <hr>
                    <h3>Grilled Chicken Sandwich</h3>
                    <p>Description: Juicy grilled chicken breast with lettuce, tomato, and avocado, served on a toasted brioche bun with a side of sweet potato fries.</p>
                </div>
            </div>

            <div class="item">
                <img src="./lunch/Spaghetti Carbonara.jfif">
                <div class="content">
                    <h5>Rs. 300/=</h5>
                    <hr>
                    <h3>Spaghetti Carbonara</h3>
                    <p>Description: Classic Italian pasta dish made with pancetta, egg, Parmesan cheese, and black pepper, served with garlic bread.</p>
                </div>
            </div>

            <div class="item">
                <img src="./lunch/Tomato Basil Soup.jfif">
                <div class="content">
                    <h5>Rs. 400/=</h5>
                    <hr>
                    <h3>Tomato Basil Soup</h3>
                    <p>Description: A rich and creamy soup made with ripe tomatoes, fresh basil, and a touch of cream, served with a slice of crusty bread.</p>
                </div>
            </div>
    `
});

shakes.addEventListener('click', function(){
    const items = document.getElementById('items');
    items.innerHTML = ` 
            <div class="item">
                <img src="./shakes/Chocolate Fudge Shake.jfif">
                <div class="content">
                    <h5>Rs. 50/=</h5>
                    <hr>
                    <h3>Chocolate Fudge Shake</h3>
                    <p>Description: Rich chocolate ice cream mixed with fudge sauce and milk, finished with whipped cream, chocolate shavings, and a cherry.</p>
                </div>
            </div>

            <div class="item">
                <img src="./shakes/Classic Vanilla Shake.jfif">
                <div class="content">
                    <h5>Rs. 100/=</h5>
                    <hr>
                    <h3>Classic Vanilla Shake</h3>
                    <p>Description: Creamy vanilla ice cream blended with milk and topped with whipped cream and a cherry.</p>
                </div>
            </div>

            <div class="item">
                <img src="./shakes/Oreo Cookie Shake.jfif">
                <div class="content">
                    <h5>Rs. 150/=</h5>
                    <hr>
                    <h3>Oreo Cookie Shake</h3>
                    <p>Description: Vanilla ice cream mixed with crushed Oreo cookies and milk, topped with whipped cream and extra Oreo crumbles.</p>
                </div>
            </div>

            <div class="item">
                <img src="./shakes/Strawberry Delight Shake.jfif">
                <div class="content">
                    <h5>Rs. 200/=</h5>
                    <hr>
                    <h3>Strawberry Delight Shake</h3>
                    <p>Description: Fresh strawberries and strawberry ice cream blended with milk, garnished with whipped cream and a fresh strawberry.</p>
                </div>
            </div>
    `
});

all.addEventListener('click', everyItems = () =>{
    const items = document.getElementById('items');
    items.innerHTML = ` 
            <div class="item">
                <img src="./breakfast/French Toast.jfif">
                <div class="content">
                    <h5>Rs. 200/=</h5>
                    <hr>
                    <h3>French Toast</h3>
                    <p>Description: Slices of bread soaked in a mixture of beaten eggs, milk, and cinnamon, then fried until golden brown, often topped with powdered sugar, syrup, or fruits.</p>
                </div>
            </div>

            <div class="item">
                <img src="./breakfast/Avocado Toast.jfif">
                <div class="content">
                    <h5>Rs. 250/=</h5>
                    <hr>
                    <h3>Avocado Toast</h3>
                    <p>Description: Toasted bread topped with mashed avocado, often garnished with salt, pepper, chili flakes, and sometimes a poached egg.</p>
                </div>
            </div>

            <div class="item">
                <img src="./breakfast/Paratha with Curd.jfif">
                <div class="content">
                    <h5>Rs. 300/=</h5>
                    <hr>
                    <h3>Paratha with Curd</h3>
                    <p>Description: A type of Indian flatbread made from whole wheat flour, often stuffed with various fillings like potatoes or paneer, and served with yogurt or curd.</p>
                </div>
            </div>

            <div class="item">
                <img src="./breakfast/Full English Breakfast.jfif">
                <div class="content">
                    <h5>Rs. 400/=</h5>
                    <hr>
                    <h3>Full English Breakfast</h3>
                    <p>Description: A hearty breakfast plate featuring eggs, bacon, sausages, baked beans, grilled tomatoes, mushrooms, and toast.</p>
                </div>
            </div>

             <div class="item">
                <img src="./lunch/Caesar Salad.jfif">
                <div class="content">
                    <h5>Rs. 100/=</h5>
                    <hr>
                    <h3>Caesar Salad</h3>
                    <p>Description: Crisp romaine lettuce tossed in a creamy Caesar dressing, topped with croutons, and freshly grated Parmesan cheese.</p>
                </div>
            </div>

            <div class="item">
                <img src="./lunch/Grilled Chicken Sandwich.jfif">
                <div class="content">
                    <h5>Rs. 200/=</h5>
                    <hr>
                    <h3>Grilled Chicken Sandwich</h3>
                    <p>Description: Juicy grilled chicken breast with lettuce, tomato, and avocado, served on a toasted brioche bun with a side of sweet potato fries.</p>
                </div>
            </div>

            <div class="item">
                <img src="./lunch/Spaghetti Carbonara.jfif">
                <div class="content">
                    <h5>Rs. 300/=</h5>
                    <hr>
                    <h3>Spaghetti Carbonara</h3>
                    <p>Description: Classic Italian pasta dish made with pancetta, egg, Parmesan cheese, and black pepper, served with garlic bread.</p>
                </div>
            </div>

            <div class="item">
                <img src="./lunch/Tomato Basil Soup.jfif">
                <div class="content">
                    <h5>Rs. 400/=</h5>
                    <hr>
                    <h3>Tomato Basil Soup</h3>
                    <p>Description: A rich and creamy soup made with ripe tomatoes, fresh basil, and a touch of cream, served with a slice of crusty bread.</p>
                </div>
            </div>

             <div class="item">
                <img src="./shakes/Chocolate Fudge Shake.jfif">
                <div class="content">
                    <h5>Rs. 50/=</h5>
                    <hr>
                    <h3>Chocolate Fudge Shake</h3>
                    <p>Description: Rich chocolate ice cream mixed with fudge sauce and milk, finished with whipped cream, chocolate shavings, and a cherry.</p>
                </div>
            </div>

            <div class="item">
                <img src="./shakes/Classic Vanilla Shake.jfif">
                <div class="content">
                    <h5>Rs. 100/=</h5>
                    <hr>
                    <h3>Classic Vanilla Shake</h3>
                    <p>Description: Creamy vanilla ice cream blended with milk and topped with whipped cream and a cherry.</p>
                </div>
            </div>

            <div class="item">
                <img src="./shakes/Oreo Cookie Shake.jfif">
                <div class="content">
                    <h5>Rs. 150/=</h5>
                    <hr>
                    <h3>Oreo Cookie Shake</h3>
                    <p>Description: Vanilla ice cream mixed with crushed Oreo cookies and milk, topped with whipped cream and extra Oreo crumbles.</p>
                </div>
            </div>

            <div class="item">
                <img src="./shakes/Strawberry Delight Shake.jfif">
                <div class="content">
                    <h5>Rs. 200/=</h5>
                    <hr>
                    <h3>Strawberry Delight Shake</h3>
                    <p>Description: Fresh strawberries and strawberry ice cream blended with milk, garnished with whipped cream and a fresh strawberry.</p>
                </div>
            </div>
    `
});

everyItems ()