#Typography
3. Typography
    - Font Properties
        p{
            font-size: 1.2rem;          <!-- 1rem = 16px = 100% -->
            font-weight: 500;
            font-style: italic;
            font-family: 'Times New Roman', Times, serif;
        }
    - google font (Two Ways)
        -- Connect link from google embed in HTML [easy to work]
        -- @import from google embed in CSS
    - color
        p {
             color: rgba(148, 212, 148, 1); <!-- a: how bright and dense the color -->         
             color: ##eb4034;               <!-- hex color -->
        }
    - text formatting
        p {
            font-family: Arial, Helvetica, sans-serif;
            text-align: center; 
            text-transform: capitalize;  <!-- uppercase, lowercase  -->  
            text-decoration: underline; 
            text-shadow: 0.1rem 0.15rem grey;   <!-- shadow   -->
            text-indent:5rem;   <!-- spacing or tabs   -->        
            letter-spacing: 0.5rem;
        } 
    - icon color, size etc.
        <!-- icon color, size etc with css  -->
        <i class="fab fa-youtube MyIconForCSS"></i>
        
4. Box Model 
    - Content, Padding, Border, Margin
        #box-model{
            background-color: bisque;
            <!-- Box sizing, to fix the box width, other padding, border, margin will be inside this-->
            box-sizing: border-box; 
            width: 350px;
            padding: 10px;                    <!-- space around text -->
            border: 2px dotted black;
            margin: 20px;                     <!-- gap around the whole content -->
            <!-- For padding,border,margin up-right-down-left works clockwise; -->
        }

    - inline, block, inline-block
            #blocktest{
                display: inline-block;            /* inline dile block ta inline e convert hobe, ar inline-block dile block ta upore kete jabe na*/
                background-color: red;
                font-family: Arial, Helvetica, sans-serif;
                font-style:normal;
                color:antiquewhite;
            }
            #click{
                display: block;                 /* inline ta block e convert hobe*/             
                background-color: red;
                font-family: Arial, Helvetica, sans-serif;
                font-style:normal;
                color:antiquewhite;
            }
    - width and max-width, height
            #para2{
                background-color:aquamarine;
                max-width: 100%;    /* responsive now. screen left-rigt choto korle, lekha break hobe na */
                height: 150px;      /* to increase height of writing box */
            }

    - Opacity and Overflow
            <!-- Opacity -->
            #skypeOpacity{
                font-size: 150px;
                color:#00aff0;
                opacity: 0.5;           <!-- 0.0 to 1.0 -->
            }
            <!-- overflow -->
            #LoremOverflow{
                background-color:#e083f4;
                width: 400px;
                height: 300px;
                overflow:scroll;          <!-- lekha overflow hole scroll bar ashbe -->
            }
    - background
            footer{
                color: white;
                background-image: url(./image.jpg);
                height: 100vh;
                background-repeat: no-repeat;       <!-- to repeat in x axis and y axis, but here no -->
                background-position: center;   
                background-attachment: fixed;       <!--image ta move korbe na, fixed thakbe-->
                background-size: cover;             <!--to get full image to show-->
            }

    

