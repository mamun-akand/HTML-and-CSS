## Fundamental
1. Introduction to CSS
    - CSS: Cascading Style Sheet
    - structure:
        selectTheElement{
            property: value
        }
    - Inline, Internal CSS
    - External CSS (index.css)      // css extension needs
        To link CSS with HTML: <link rel="stylesheet" href="index.css">

2. Selectors and Comninators --> (Index.html file)
    - color highlight extension installing
    - grouping, nested, universal selector (*)
        nested:
        ul li a{
            color: blueviolet ;
            color: brown;           /* this would override and it will finally stay */
        }
    - ID selector with # (Id no unique for each element)
        #sec2{

        }
    - class ( . dot is must while using in css) (class is not unique, it can be used for many)
        .mybutton {
            background-color:yellow;
        }
    - Attribute Selector
        input[type="text"]{                     <!--tag[attribute]-->
            background-color:darkgoldenrod ;
        }
    - pseudo class (: colon) selector (Hover Over and Everthing)
        button:hover {                   /* mouse hover over */      
            color:white; 
            background-color: green;      
        }
    - pseudo element (::) selector
        Select char befor and after, first_letter etc.
        #lorem::first-letter{
            color:red;
        }
    - descendant, child, adjacent, general sibling selectors
        -- descendent
            div p{
                color:red;
            }
        -- child            <!-- only direct child symbol ( > ) -->
            #div1 > p {             
                color:red;
            }
        -- adjacent (next of any tag : pashapashi porer ta)
            #div2 + p{    
                color:red;
            }
        -- General (Sibling next er shob)
            #div2 ~ p{    
                color:red;
            }




