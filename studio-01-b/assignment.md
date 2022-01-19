# Studio 1: Introducing single-page applications

Follow the instructions below.  Explain the code that you write using comments.  (You will notice that HTML, CSS and JavaScript all have different comment styles.)  The Mozilla Developer Network and DevDocs may be helpful.  Don't hesitate to get help from me when you need it.
1. Open the Windows folder for your P drive.  Right-click and select New and then Folder to create a new folder named cs3312 (unless you already have one).
2. Open your new cs3312 folder.  Inside it, create a new folder named studio01.
3. Save the following file to your P:\cs3312\studio01 folder right-clicking on the filename and selecting Save link as index.html
4. In your P:\cs3312\studio01 folder, right-click on index.html and open it using a browser such as Firefox, Chrome or Opera. The browser will read index.html and display a webpage without any styling or scripting.
5. Click on the Windows Start menu and run Notepad++, excellent text editor for coding projects. You can download Notepad++ to install on your own computer for free.  (I recommend the latest 64-bit version.)
6. In Notepad++, open the Settings menu and select Preferences.  Select Language on the left and then [Default] on the right under Tab Settings. Change Tab size to 3 and check the Replace by space checkbox.  These settings will let you use the tab key to indent three spaces automatically whether you're using HTML, CSS or JavaScript, which will make validating your code easier.
7. Open your index.html file in Notepad++.  The HTML code describes the content of the document.  Add your name where indicated near the top. Things to notice:
    - HTML elements (such as p for a paragraph) are defined using tags (such as `<p>` and `</p>`).
    - Attributes (such as class) are given values (such as greeting) inside tags.
    - HTML comments begin with `<!--` and end with `-->`.
8. Open the W3C markup validator and click on the Validate by Direct Input tab.  Copy the entire HTML document from your index.html, paste it into the textbox and click the Check button below.  The results will tell you about errors and warnings that need to be fixed.  You should always validate your HTML code in this way, especially before you turn it in.
9. Save the following two files to your P:\cs3312\studio01 folder.  For each one, right-click on the filename and select Save link as.
    - style.css
    - script.js
10. In your P:\cs3312\studio01 folder, right-click on index.html and open it again in a browser.  The browser will display a webpage described by index.html, which uses style.css and script.js.  The webpage will look different because of style.css and work differently because of script.js.  Then open index.html in a different browser and see whether you notice any differences.  You should always test your code in multiple browsers (and in multiple versions and on multiple systems if possible).
11. Open your style.css file in Notepad++.  The CSS code describes how the document should be presented.  Add your name where indicated near the top.  Things to notice:
  - CSS selectors (such as `.greeting` `.enthusiastic` for elements with both classes `greeting` and `enthusiastic`) dictate which HTML elements are to be styled.
  - Properties (such as `background-color`) and values (such as `rgb(221, 238, 255)`) describe what styling should be done.
  - CSS comments begin with `/*` and end with `*/`.
12. Open the W3C CSS validator and click on the By direct input tab.  Copy the entire CSS stylesheet from your style.css, paste it into the textbox and click the Check button below.  The results will tell you about errors that need to be fixed.  You should always validate your CSS code in this way, especially before you turn it in.
13. Open your script.js file in Notepad++.  The JavaScript code makes the document dynamic and interactive.  Add your name where indicated near the top.  Things to notice:
  - If you've ever programmed in C, C++ or Java, JavaScript code will probably look a bit familiar.
  - It should be easy to find the part of the code that describes what should happen when a user clicks the Submit it button on the webpage.
  - Notice that JavaScript comments begin with // and end at the end of the line.
14. Open JSLint.  Copy the entire JavaScript script from your script.js, paste it into the textbox and click the JSLint button below.  The results will tell you about errors that need to be fixed.  Things to notice:
  - JSLint is very strict and will sometimes hurt your feelings, but it's important to get your JavaScript code to pass JSLint without errors, especially before you turn it in.
  - The first line of the script (/*jslint browser */) is a special comment that tells JSLint how to analyze your script.  You should use the same one in all of your scripts this semester.
  - JSLint Error Explanations may help when you can't figure out how to fix something.  I'm here to help you too.
15. Open index.html in a browser again and make sure you understand exactly how the HTML, CSS and JavaScript code are providing its content, presentation and behavior.  Ask questions if you need any clarifications.
16. Experiment with the code in the three files and make the following changes.  Document each change you make with an appropriate comment.
  a. Change the title of the page from First single-page application to Gotta start somewhere.
  b. An h1 element is a large heading, and smaller headings can be created using h2 through h6.  Below the paragraph with a class of greeting, add a heading using h2.  Your new heading should say Brainstorms.
  c. Write a CSS rule that centers all h2 elements.
  d. Add another paragraph below your new h2 heading.  Give your new paragraph a class of info and an id of web-app-idea.  Inside your new paragraph element, write your own description of an original web app that you would like to create.  Be creative!
  e. Write CSS rules to style all elements with a class of info so that your new paragraph looks as much like the below example as you can make it.  In addition to the CSS properties you've already seen, the padding property may be useful.  Ideally, the width of the new paragraph should be half of the width of the document as a whole.
  f. Write code so that, when your paragraph with the id of web-app-idea is clicked, two things happen:
    - Copy all the text inside your new paragraph element into the textbox with the id of name-input.
    - If your new paragraph element doesn't have the clicked class, it is added.  If it does already have it, it is removed.  Write a CSS rule to display any element with both classes info and clicked with font-family equal to cursive.

  - In the JavaScript code, the variable holding your new paragraph element should be named webAppIdeaElement (to match the id of web-app-idea). Don't forget to declare it along with the other local variables in the function.

When you are finished with the above steps and open index.html in a browser, it should look something like

![studio1a](../../../../attachments/studio01a.png)
![studio1b](../../../../attachments/studio01b.png)

Test your code in as many different browsers and window sizes as you can, and validate all three of your files using

  - W3C markup validator for HTML,
  - W3C CSS validator for CSS and
  - JSLint for JavaScript.

It will be especially important to get your JavaScript code to pass JSLint without errors before you turn it in.  Please get help when you need it!