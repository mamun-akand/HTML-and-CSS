# Advance

4. Variable and Filter
    ## Variable
        :root{
            --myTextColor : rgb(244, 245, 245);     <!-- /* variable declare */ -->    
        }
        #para1{
            color: var(--myTextColor);               <!-- /* using variable */ -->
        }
        
    ## Filter
        #image1{
            filter:saturate(30%);
        }

    ## Card Design, Box Shadow and Float
        .card{
            background-color: bisque;
            width: 25%;
            padding: 20px;
            margin: 15px;
            box-shadow: 6px 6px rgb(171, 204, 237);
            float: left;                                        /* will go left of parent section  */
        }
        .card:hover{
            box-shadow: 6px 6px 0.5rem rgb(208, 205, 205);    /* x-axis, y-axis, blur, color  */
        }
        
        <!-- float clearing must -->
        
        #row::after{                        /* clear float, otherwise nicher lekha upore ba sathe chole ashbe  */       
            content: "";
            clear:both;
            display: table;
        }
    ## Layout Design
        - Positioning
            /* Positioning */
            .parent {
                background-color: aquamarine;
                Height: 400px;
            }
            .child {
                background-color: black;
                color: var(--myTextColor);
                width: 100px;
                position:relative;      /* relative: parent onujayi, fixed: screen viewport onujayi fixed screen norbe, absoulte: not fixed  */ 
                top: 50%;
                left: 50%;
            }

        - Nav Bar & Z-index (it works only with positioning)
            nav{
                position: fixed;
                z-index: 1;     /* kono element er niche chole gele, upore uthe ashbe  */
                background-color: rgb(27, 87, 216);
                color: white;
                width: 100%;
                height: 5vh;
                top: 0px;
            }
        - Flex
            /* <!-- Flex  --> */
            .parent_flex{               /* flex always work on parent */
                background-color: rgb(96, 14, 14);
                height: 80vh;
                width: 80vh;
                display: flex;
                gap: 1rem;
                /* flex-direction: column; */
                justify-content:space-evenly;          /* center, end, start etc  */
                align-items: center;                   /* if justify x-axis, then align y-axis. if justify y, align x.   */
            }

            .child_flex{        /* flex always work on parent */
                background-color: rgb(246, 217, 74);
                width: 20%;
                height: 20%;
                display: flex;
                justify-content: center;
                align-items: center;
            }

        - Flex Item
            .item3{     /* Flex item */
                align-self: flex-end;
                /* justify-self: ; */
            }
        - Grid and Grid items
            --Grid
            .members{
                display: grid;
                grid-template-columns: 25% 25% 25% 25%;
                gap: 2rem;
            }
            
            -- Grid item
            #member2{
                background-color: green;
                grid-column: 2 / span 3;
            }
    ## Responsive
        1. Meta: Viewport
            <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
    <!-- width=device-width: screen width of device initial-scale=1.0: Initial Zoom of Screen, when page first loaded  -->
        2. Box Sizing
            * {                         /* For Responsive  */                       
                box-sizing: border-box;
            }
        3. min-width, min-height.       <!-- if greater space, then beshi jayga nibe. -->
        4. @Media
            <!-- modification for device size responsive  -->
            @media screen and (max-width: 768px) {  
                #skill{
                    background-color: green;
                }
                #row{
                    flex-direction: column;
                }
                .card{
                    min-width: 80%;
                }
                .members{
                    /* background-color: red; */
                    grid-template-columns: 50% 50%;
                }
            }
    ## Circle
            .child_flex{      
                width: 200px;           <!-- hegiht and width same -->
                height: 200px;
                border-radius: 50%;
            }
    ## Transition, Transform, Animation
        -- Transition (Property, duration, delay)
            .child_flex {        /* flex always work on parent */
                background-color: rgb(246, 217, 74);
                width: 200px;
                height: 200px;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 20%;     /* for circle  */
                transition-property: background-color color;    /* background and text will be transitedd. Characteristic from hover */
                transition-duration: 0.8s;
                /* transition-delay: 1s; */
                transition-timing-function: linear;       /*Smooth at beginning and end*/
            }
            .child_flex:hover {
                background-color: rgb(114, 242, 168);
                color: black;
            }

        -- Transform: scale(), rotate(), skew(), translate()
            .card:hover{
                box-shadow: 6px 6px 0.2rem rgb(208, 205, 205);    /* x-axis, y-axis, blur, color  */
                background-color: aqua;
                /* transform: scale(1.2);                              to make bigger with scalling  */
                /* transform: rotate(25deg);                              to rotate */
                /* transform: skew(25deg); */
                transform: translate(25px, 35px);                   /* translatee(x,y): it changes its postion  */
            }
            
        - Animation
        
                .child_circle{
                    background-color: brown;
                    color: white;
                    height: 150px;
                    width: 150px;
                    border-radius: 50%;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    /* animation  */
                    animation-name: my_circle;
                    animation-duration: 5s;
                    animation-delay: 0.3s;
                    animation-timing-function: linear;
                    animation-iteration-count: infinite;   
                    position: relative;
                }

                @keyframes my_circle{       /* animation function works */
                    
                    0%{
                        background-color: rgb(88, 237, 93);
                        top: 0px;   /* parent position must be relative to work */
                        left: 0px;
                    }
                    25%{
                        background-color: rgb(234, 11, 11);
                        top: 100px;
                        left: 0px;
                    }
                    50%{
                        background-color: rgb(8, 128, 8);
                        top: 0px;
                        left: 0px;
                    }
                    75%{
                        background-color: rgb(226, 211, 43);
                        top: -100px;
                        left: 0px;
                    }
                    100%{
                        background-color: rgb(48, 11, 232);
                        top: 0px;
                        left: 0px;
                    }
                }
        




