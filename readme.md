## Leaespanet.com

Source for the website https://www.leaespanet.com.

### How to add a category

1. Copy/paste category.tmpl.html with the name of the category (example: `character.html`)
2. In the newly created file:
    - Update "Category" in `head.title` with the name of the category
    - Replace "Category title" in the Portfolio Section
    - Replace "Category subtext." in the Portfolio Section
    - Insert the images in the Portfolio columns
3. Insert the following snippet in index.html in the Portfolio Section in the column you want
``` html
<a href="category.html">
    <div class="category-block">
        <img src="img/illustration Jaromir web.jpg">
        <p>Category</p>
    </div>
</a>
```
4. Update "category.html" with the name of the file created in 1., the image cover and the category name


