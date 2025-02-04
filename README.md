# PW_JS_Automation
How to create and setup the project in Playwright for JS

Setting up the VS Code project
1. Install VisualStudio Code ide -
2. Open VS Code
3. Open or create the folder of the project (File - Open folder)
4. Select the folder
5. Open the terminal in VS Code (Terminal tab on the bottom panel or click Ctrl+`)
6. Execute command: npm init playwright@latest
7. Select the following questions:
- JavaScript
- Name of your Tests folder (default is tests)
- Add a GitHub Actions workflow to easily run tests on CI
- Install Playwright browsers (default is true)


Install extensions:
1. Open the Extensions tab (Ctrl+Shift+X) in VS Code
2. Find "Playwright Test for VSCode" and install it (powerful tool for executing and debugging auto-tests)
3. Find ESLint and install it (hints for code).
3.1. open the VS Code terminal
3.2. Execute the following command to make global install: npm install -g eslint
3.3. Execute the command to create ESLint configuration:  npx eslint --init
4. Restart the VS Code


Install Git
https://gitforwindows.org/
Download Git app and install it


Open your terminal or command prompt.
Note: if do it from VS Code, the project path is opened by default and this step can be skipped
Navigate to your project directory:
Terminal
cd path/to/your/project


Origin link of setting up the GitHub repository is: https://graphite.dev/guides/how-to-push-code-from-vscode-to-github

Setting up your GitHub repository
Create a new repository on GitHub:

Visit GitHub and sign in.
1. Click on the "New" button under the "Repositories" tab.
2. Enter your repository details and create the repository.
3. Connect your local repository to your GitHub repository:

Create repository on Git and push
echo "# PW_JS_Automation" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/VitaliyNetyaga/PW_JS_Automation.git
git push -u origin main


Push code from VS Code to GitHub
Using the VS Code GUI
1. Open your project in VS Code.
2. Open the Source Control panel: Click on the Source Control icon on the sidebar or press Ctrl+Shift+G.
3. Stage your changes: Click on the '+' icon next to each changed file to stage files individually, or click on the "Stage All Changes" icon at the top to stage all changes.
4. Commit your changes: Enter a commit message in the input box at the top of the Source Control panel. Click Commit button or press Ctrl+Enter to commit the staged files.
5. Push your changes: Click on the '...' button at the top of the Source Control panel, then select "Push" from the dropdown menu. If you are pushing to a new branch, select "Push to" and enter the branch name.