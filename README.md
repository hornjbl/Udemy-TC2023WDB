# Udemy-TC2023WDB

The Complete 2023 Web Development Bootcamp (Udemy Course)

-   [NB Notes](#nb-notes)
    -   [Section 6](#section-6)
    -   [Section 7](#section-7)

## NB Notes:

### Section 6

-   Font Properties
    -   em VS rem - use rem (relative to root font-size). It's more consistent and less confusing.

### Section 7

Intermediate CSS

-   The Cascase - Specificity and Inheritance
    -   Cascade Order of Importance (less-to-more)
        -   Position
        -   Specificity (less-to-more)
            -   element (li)
            -   class (.first-class)
            -   attribute (li[draggable])
            -   id (#first-id)
        -   Type (less-to-more)
            -   external (<link rel="stylesheet" href="./style.css">)
            -   internal (<style>...</style>)
            -   inline (h1 style="...">content</h1>)
        -   Importance (color: green !important;)
-   Combining CSS Selectors
    -   Descendant combination (selector selector {})
        -   NB: Applies to ALL the descendent selectors regardless of position or level.
        -   Ex:
            -   div p {}
            -   .class-name p {}
            -   #id-name p {}
    -   Group of selectors (selector, selector {})
    -   Child selectors (selector > selector {})
        -   NB: This only goes one generation deep!
        -   NB: This only applies to a DIRECT child!
    -   Chaining selectors (selectorselector {})
        -   Applies to elements where all the selector requirements are met.
        -   Ex: element#id-name.class-name1.class-name2
        -   NB: Always start with element selectors first, and then ids and classes.
-   CSS Positioning
    -   4 Different values for position:
        -   Static (Default)
            -   Each element flows in the HTML document as they normally would.
        -   Relative
            -   Item is positioned relative to its default (static) position.
        -   Absolute
            -   Item is positioned relative to its nearest positioned ancestor (the ancestor has its position property set), otherwise relative to the top left corner of webpage.
        -   Fixed
            -   Relative to the top-left corner of the browser window.
            -   This stays in the same position when you scroll the website.
    -   Z-Index (goes into 3rd dimension)
        -   Goes into 3rd dimension
        -   Determines what is displayed on top and what is at the bottom.
    -   NOTES:
        -   Giving a square container a 50% border radius value makes a perfect circle.
-   CSS Flag (Project)
-   Tips from Angela - Nothing Easy is Worth Doing!
    -   NB: You have to put in the hours/work/effort, and then you'll get the results!
