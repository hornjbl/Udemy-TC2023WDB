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

### Section 8

Advanced CSS

-   CSS Display
    -   Display can be inline, block, inline-block, or none.
    -   Block elements
        -   Take up the full width of their parent element.
        -   Force subsequent elements to display below them.
        -   Width and height can be set.
    -   Inline elements
        -   Take up only as much space as the content they contain.
        -   Subsequent elements are displayed in the same line as they are, if the container element has enough space.
        -   Width and height cannot be set.
    -   Inline-Block
        -   Width and height can be set.
        -   Elements displayed on the same line.
    -   None - element is not displayed at all.
-   CSS Float
    -   Wraps text around another element.
    -   Essentially takes the element out of the flow of the rest of the elements.
    -   Ex:
        -   float: right;
        -   float: left;
    -   Clear property clears any responsibility to wrap around floating elements.
        -   clear: right;
        -   clear: left;
        -   clear: both;
-   How to Create Responsive Websites
    -   4 Main ways to create responsive sites:
        -   Media Queries
            -   Inserted INSTEAD OF a selector in CSS.
            -   Ex: @media (max-width: 600px) {...}
        -   CSS Grid
            -   Good for 2D layouts (columns X rows).
        -   CSS Flexbox
            -   Good for 1D layouts (rows).
        -   External Frameworks like Bootstrap
            -   Not built into CSS, like grid or flexbox, but is instead external.
            -   Bootstrap is built on top of flexbox.
            -   Provides a specific pre-built framework that can be used to lay out the website and keep it responsive.
-   Media Queries
-   Web Design Agency Website (Project)
-   Tip from Angela - How to Deal with Procrastination
