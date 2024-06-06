**OWASP Juice Shop UI Automation**
This project contains UI automation scripts for the OWASP Juice Shop, an intentionally insecure web application for security training purposes.

**Table of Contents**
Project Overview
Technologies Used
Setup Instructions
Running the Tests
Project Structure
Contributing

**Project Overview**
This repository provides automated UI tests for the OWASP Juice Shop using Playwright. The goal is to ensure the integrity and functionality of the web application while providing a reliable way to run security tests.

**Technologies Used**
TypeScript
Playwright
Node.js
**Setup Instructions**

*Clone the Repository*

git clone https://github.com/Araf-8405/-OWASP-Juice-Shop-UI-Automation.git
cd OWASP-Juice-Shop-UI-Automation

*Install Dependencies*

npm install

*Configure Playwright*
Ensure you have Playwright browsers installed:
npx playwright install

**Running the Tests**
To execute the automated tests, use the following command:
npx playwright test

**Project Structure**
1.fixtures/ - Contains setup and teardown scripts.
2.jsonReports/ - Stores test reports in JSON format.
3.pages/ - Page Object Models (POMs) for different UI components.
4.testData/ - Sample data used for testing.
5.tests/ - Test scripts.

**Contributing**
Contributions are welcome! Please follow these steps:

Fork the repository.
Create a new branch (git checkout -b feature-branch).
Commit your changes (git commit -m 'Add some feature').
Push to the branch (git push origin feature-branch).
Create a Pull Request.
