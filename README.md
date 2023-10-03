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
