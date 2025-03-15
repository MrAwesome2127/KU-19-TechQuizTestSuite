# 19 Testing: Tech Quiz Test Suite

# About Me

My name is Tim, I am an automation architect for QA. I have worked with various testing tools and this is my first experience with Cypress. You're probably thinking how has this QA nerd not been able to do Cypress yet? Great Question, also I am a nerd of quality :)

# I have two tests. One with custom ID's and the other without:
- Tech Quiz without ID
- Tech Quiz with ID

### My TODO's
I wanted to create an automation framework that followed automation principles. To do this I needed to expand from below.

 - I created unique IDs to help improve the run-time and prevent brittleness
 - Each element that I used has a created ID. For my naming convention, I wanted to start with the type of the element, then the name to keep it unique. 
   - `id="btnStartQuiz"`
   - `id="fldScore"`
   - `id="tblQuestions"`
   - `id="txtQuizOver"`
 - This sounds simple. To enhance my challenge, I wanted to create the Answer options from the index to allow the unique characteristics to be applied.
   - In `Quiz.ts`, I added this `id={"btnAnswer-${index}"}` to have the the name appear based on iteration, starting with 0. Pretty Cool, right?!
 - I Hope you enjoyed your time with me, thanks for looking at this.

## Cypress Vs. Selenium Vs. Playwright

When it comes to end-to-end testing frameworks, Cypress, Selenium, and Playwright are three popular choices. Each has its own strengths and weaknesses, and the best choice depends on your specific needs and preferences. Here is a comparison of these three tools ranked by popularity:

### #1 Selenium
- Flexibility: Selenium is a widely-used tool that supports multiple programming languages (Java, C#, Python, Ruby, JavaScript, etc.) and can be used to test web applications across different browsers (Chrome, Firefox, Safari, Internet Explorer, Edge) and platforms.
- Community and Ecosystem: Selenium has a large community and a rich ecosystem of tools and libraries that extend its functionality.
- Complexity: Setting up and configuring Selenium can be more complex compared to Cypress. It often requires additional libraries and tools for assertions, reporting, and browser management.
- Speed: Selenium tests can be slower and less reliable due to the communication between the test scripts and the browser.

### #2 Playwright

- Popularity: Playwright is relatively new but is quickly gaining traction due to its modern features and capabilities.
- Cross-Browser Testing: Playwright supports testing across multiple browsers (Chromium, Firefox, WebKit) and platforms, including mobile devices.
- Modern Features: Playwright provides modern testing features such as auto-waiting, capturing screenshots and videos, and network interception.
- Flexibility: Playwright supports multiple programming languages (JavaScript, TypeScript, Python, C#) and integrates well with various test runners and frameworks.
- Debugging: Playwright offers powerful debugging tools, including the Playwright Inspector, which allows you to step through your tests and inspect the state of your application.

### #3 Cypress

- Popularity: Cypress is gaining popularity rapidly due to its developer-friendly setup and ease of use. It is especially popular among front-end developers.
- Ease of Use: Cypress provides an all-in-one testing framework, assertion library, and mocking/stubbing without requiring additional libraries.
- Speed: Cypress runs in the same run-loop as your application, which makes it faster and more reliable for testing modern web applications.
- Debugging: Cypress provides excellent debugging capabilities with detailed error messages, stack traces, and the ability to time-travel through tests.
- Limitations: Cypress currently only supports testing in Chrome, Firefox, and Edge browsers. It does not support cross-browser testing in Safari or Internet Explorer.

### Conclusion

- **Selenium** remains the most popular choice due to its long history, flexibility, and large community. Target audience, QA team.

- **Playwright** offers a modern and powerful testing framework with excellent cross-browser support and advanced features, making it a strong contender for comprehensive end-to-end testing. Target audience, DEV/QA team.

- **Cypress** is a great choice for developers looking for an easy-to-use, fast, and reliable testing framework for modern web applications, especially if cross-browser testing is not a primary concern.  Target audience, DEV team.

