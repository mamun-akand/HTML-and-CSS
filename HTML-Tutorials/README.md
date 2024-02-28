# HTML6
HTML5 is the fifth and current version of HTML. It has improved the markup available for documents and has introduced application programming interfaces(API) and Document Object Model(DOM). It has introduced various new features like drag and drop, geo-location services

# HTML Course and Project
pair tag/Container Tag  : <h1> text </h1>
Empty Tag               : <br>
Atributes               : <h1 align="center"> text </h1>    //Here attribue (align="center")
Inside <head> </head>   : title, link, javascipt(Script)
meta                    : for SEO
<hr>	                : horizontal rule / straight-line

## Typography
- heading, horizontal rule <hr>, line break <br>
- Paragraph <p>
- Text Formating Tags: strong(Bold), em(italic), mark(highlighter), sup, sub
- Entity( &Entity; ), Symbol, Icon [using icon table from net, Font Awesome Extension]

## List, Link, Images, Frames, Media
- List
    - Ordered List <ol type="1" start="5"> <li>Trainee Software Engineer</li> </ol> // start=5 dile 5 theke shuru hobe
    - Unordered List <ul> <li>Trainee Software Engineer</li> </ul>
    - Description List <dl> <dt>Trainee Software Engineer</dt> <dd> Here description </dd> </dl>
- Link
    - <a href="#">Home</a>                                         <!-- # for Home Page -->
    - <a href="www.google.com" target="_black">Visit Google</a>    <!-- target="_black" click korle new tab e open hobe -->
- Image
    - <img src="./images/Profile.jpg" alt="Profile Pic" width="300" height="300"> <br>  <!--image : ./ for folder in directory, alt: load na hole show korbe-->
    - <img src="![./images/Profile.jpg](https://i.postimg.cc/MZhvS6pJ/Profile.jpg)" alt="Profile Pic" width="300" height="300"> 
- Frames
    - Add Map
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.080119442623!2d90.41385827619618!3d23.81574985878833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c6546d68d52b%3A0x4709b295b2da18e5!2sJoar%20Sahara%20Masjidul%20Aqsa!5e0!3m2!1sen!2sbd!4v1708886062712!5m2!1sen!2sbd" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    <!--iFrame for sharing other thikngs like map, copied from google map embed code-->
    - Add any Website
    <iframe src="https://www.studywithanis.com/" width="600" height="450" frameborder="0"></iframe> 
    <!--add any website in the page with iframe-->
    - Youtube Video: taking embed from youtube share option
- Media: Audio & Video
    - <audio src=""></audio>
    - <video src=""></video>

## HTML TABLE and FORM
- Table
- Form
    - <form action="">
            <input type="text" placeholder="Your Name" required>
            <input type="email" placeholder="Your Email" required>
            <input type="password" placeholder="Password" required>
            <input type="date">
            <button type="reset">reset</button>
            <button type="submit">send</button>
       </form>
       <label for="name">Your Name</label>
       <input type="text" id="name" name="name" required>       <!--for, id, name should be same to connect-->
## Web Accessibility
- Inspect --> Lighthouse --> Accessibility
- Semantic (meaningful) vs Non-Semantic
- HTML Five Structure: nev, header, main, section, footer
    <nev>
    </nev>
    <header>
    </header>
    <main>
        <section> about me </section>
        <section> educaion </section>
        <section> skills </section>
    </main>
    <Footer>
    </Footer>
- For image, make sure alt text
- link describable
- Form label (for, id, name should be the same)
- Role and Aria-Label
    - Aria-Label 
        <button type="submit" aria-label="Send me a good message"> Send message</button>        <!--aria label: screen reader will read aria-label text over the button message with priority-->

    


