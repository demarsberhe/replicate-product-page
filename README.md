# replicate-product-page

replicate-product-page
The project utilizes HTML, Bootstrap, SASS to create a responsive product landing page. 
Project goal: Build a static application following a design
See "main" branch for final version. 
- css/ folder includes the final .css output images/ folder includes the favicon scss/ folder includes all .scss files
- helpers/ folder includes the mixin used to generate the css for the product color selector and variables that are used across all .scss files
- sections/ folder includes the 4 scss partial files representing the 4 styled sections on the product landing page:
1. Nav
  a. Note: links in Nav menu do not have functionality
3. Main product information
4. Shop more
5. Footer
- gulpfile.js is set-up using Node, this compiles/re-compiles the .scss into the final css output folder (css) with compilescss and watchTask functions index.html includes the page content
