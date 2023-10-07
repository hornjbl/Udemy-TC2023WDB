# Udemy-TC2023WDB

The Complete 2023 Web Development Bootcamp (Udemy Course)

-   [NB Notes](#nb-notes)
    -   [Section 6](#section-6)
    -   [Section 7 - Intermediate CSS](#section-7)
    -   [Section 8 - Advanced CSS](#section-8)
    -   [Section 9 - Flexbox](#section-9)

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
    -   Ex @media (max-wdith: 600px) { ... }
-   Web Design Agency Website (Project)
-   Tip from Angela - How to Deal with Procrastination

### Section 9

Flexbox

-   Display: Flex
    -   Do not use floats for layout. Use floats for things like making text wrap around an image, etc.
    -   Do not use tables for layouts. Use tables for displaying actual tables on your page.
    -   Set by using the display: flex; property.
    -   This causes the container set to be flexbox to take up 100% of the width of the parent element.
    -   You can also use the display: inline-flex; property, so the flex container will still display on the same line as other inline elements.
-   Flex Direction
    -   Default HTML flow is row-based from left to right, then down to the next row, etc.
    -   When a container element is turned into a flexbox container, all its children elements are put on the same row, regardless of their default display type.
    -   The flex-direction property can be set to row or column to determine what direction the flow goes. This sets what is called the "main axis".
    -   There is also a cross-axis which is perpendicular to the main axis.
    -   Common/important properties:
        -   flex-basis: 100px;
            -   Sets the size that the items should flex in the direction of the main axis.
            -   This sets the height of the flex-children when the flex-direction is column, and the width of the flex-children when the flex-direction is row.
-   Flex Layout
    -   Learn which properties go with the parent element and which goes with the child elements.
    -   Default flex-wrap value is nowrap.
    -   Play Flexbox Froggy, but on intermediate difficulty.
-   Flex Sizing
    -   Sizing order of priority:
        -   content width < width < flex-basis < min-width/max-width
        -   min-width is automatically set to the lenth of the longest word in the content.
        -   max-width is automatically set to the legth of the entirety of the content.
    -   Growing and shrinking is an NB part of flexbox to understand. This is what makes flexbox flexible.
    -   flex: 1 1 0; (grow shrink basis) -> this is the shorthand for the following:
        -   flex-basis: 0;
        -   flex-grow: 1;
        -   flex-shrink: 1;
        -   This can be shortened even further to flex: 1; which translates to flex: 1 1 0;
-   Pricing Table (Project)
-   Tip from Angela - Building a Programming Habit

### Section 10

Grid

-   Display: Grid
    -   Flexbox VS Grid
        -   Use flexbox when you want to align items along a one-dimensional line.
        -   Use grid when you want to lay out content along a two-dimensional grid.
        -   Often developers use a combination of these layout tools (floats, flexbox, grid, bootstrap).
-   Grid Sizing
    -   This is an NB consideration - how to size the columns and rows to conform to the design.
    -   Fixed-size grids (ex grid-template-columns: 200px 400px) are not responsive.
    -   You can use rem units instead of pixels, but this is still fixed and not responsive (rem is relative to :root sizing).
    -   grid-template-columns and grid-template-rows can be combined into one property: grid-template: rows / columns;
        -   Ex: grid-template: 100px 200px / 400px 800px;
        -   Tip from Angela: while learning, be explicit instead of using shortcut properties.
        -   Tip from me: when being explicit, add the short-hand property in comments above the explicit property statements. Comment out alternatining to test if both (short-hand vs explicit) does the same.
    -   Another sizing unit that can be used is the "auto" keyword.
        -   Ex: grid-template-columns: 100px auto;
        -   This causes the 'auto' sized element to try to fit the available space in its container element.
        -   Note: grid-template-rows: auto; does not try to take 100% of the screen height, unless the container's height is set explicitly. Instead, it will just try to fit the height of its contents.
    -   Another unit of measurement you can use is the fractional unit (fr).
        -   Ex: grid-template-columns: 1fr 2fr; (This would create a 1:2 ratio between the two defined columns).
        -   Fractional units will always try and maintain the ratio. If you add content to one element, making it bigger, any other element that has a ratio in relation to it will also try to change.
    -   You can use the minmax() function to control the responsiveness of the layout.
        -   Ex: grid-template-columns: 200px minmax(400px, 800px);
        -   This allows the size of the element to grow or shrink up to or down to a max or min value, but still be responsive inside the min/max range.
    -   You can use the repeat() function instead of manually specifying the amount of columns/rows to define.
        -   Ex: grid-template-columns: repeat(8, 1fr);
    -   You can use grid-auto-rows and grid-auto-columns to define what overflow items (implicit rows/columns) will look like.
        -   Ex: grid-auto-rows: 300px;
    -   Use Chrome Developer Tools -> grid line numbering to debug grid layout issues.
-   Grid Placement
    -   Container is usually a DIV.
    -   The grid columns and rows are collectively known as "tracks".
    -   The tracks are usually sized with grid-template-rows and grid-template-columns (or grid-template).
    -   In between the grid rows and columns are what is called "grid cells".
    -   "Grid lines" separate the grid cells from each other.
    -   You can size the grid-lines by using the gap property.
    -   You can use multiple cells to create a "grid item".
        -   Ex: grid-column: span 2;
        -   You can use grid-column-start: 1 and -1 to specify the first and last column to use.
        -   The grid-column/row property is short for two other properties: grid-column/row-start and grid-column/row-end.
        -   You can use the order property (default value of 0) to change the order in which the items are rendered.
        -   The property grid-area: 2 / 1 / 3 / 3 can also be used.
            -   This is row start / col start / row end / col end;
            -   If you use grid-area on one grid item, you should use it an all the rest of the grid items as well.
-   Mondrian Painting (Project)

### Section 11

Bootstrap - TODO

### Section 12

Web Design School - Create a Website That People Will Love - TODO

### Section 13

Capstone Project 2 - Personal Side - TODO

### Section 14

Introduction to Javascript ES6

-   Download the Course Resources PDF
-   Introduction to Javascript
-   Javascript Alerts - Adding Behavior to Websites
    -   Using Developer Tools -> Console to run Javascript code directly in browser.
    -   Using Developer Tools -> Sources -> Snippets to run Javascript code directly in browser.
    -   Reference [idomatic.js](https://github.com/rwaldron/idiomatic.js/) for a conformed javascript style guide.
    -   Reference the [MDN Docs](https://developer.mozilla.org/en-US/docs/Learn/JavaScript) for Javascript documentation
-                       Datatypes
    -   Types of data:
        -   string
        -   number
        -   boolean
    -   typeof() function gives you the type of data that is passed to it.
-   Javascript Variables
    -   Declared with var, let, or const.
        -   var variables are available throughout the function they are declared in.
        -   let variables are available only inside the block where they are declared in.
        -   const varaibles cannot be assigned new values.
    -   var myVariable = "Value";
-   Naming and Naming Conventions for Javascript Variables
    -   Use camelCase for naming variables, ex: var myName;
-   Strong Concatenation
    -
