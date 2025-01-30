Get the GitHub project

1. Open VS Code
2. Open SourceControl tab (Ctrl+Shift+G)
3. Click Clone Repository
4. Login to GitHub (to connect VS Code and GitHub)
5. Select the test project (https://github.com/VitaliyNetyaga/PW_JS_Automation.git)
6. Select your local Repository Destination (e.g. D:\MyProjects_JS\Test_Proj)
7. Wait for clonning the project

8. Install Playwright - Execute the command in the VS Code terminal (Ctrl+`):
npm init playwright@latest


9. Select the following questions:
- JavaScript
- type: tests (Name of your Tests folder)
- leave false (GitHub Actions workflow to easily run tests on CI)
- Install Playwright browsers (default is true)
10. Don't Override the files already exist.


Install extensions:
1. Open the Extensions tab (Ctrl+Shift+X) in VS Code
2. Find "Playwright Test for VSCode" and install it (powerful tool for executing and debugging auto-tests)
3. Restart the VS Code

Run autoTest:
1. Open Testing tab
2. Select tc01.spec.js and click Run Test

Note: to run test in browser window check in Show browser checkbox in the Settings section of the Playwright panel (bottom left)