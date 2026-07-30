# Playwright Automation Framework (SauceDemo)

A production-ready, scalable test automation framework built using Playwright and TypeScript for the SauceDemo e-commerce platform. This project demonstrates enterprise-level testing practices, focusing on stability, speed, and maintainability.

## 🛠️ Tech Stack
* **Core Framework:** Playwright (Latest)
* **Language:** TypeScript
* **Design Pattern:** Page Object Model (POM)
* **CI/CD:** GitHub Actions
* **Reporting:** Built-in Playwright HTML Reports

## 🏗️ Architecture & Features
* **Page Object Model (POM):** Separates page UI elements and actions from the actual test assertions to ensure reusable code.
* **Robust Locators:** Uses resilient data-test attributes (`data-test="username"`) to eliminate flaky tests.
* **Parallel Execution:** Configured to run tests concurrently across multiple browsers (Chromium, Firefox, WebKit) to minimize execution time.
* **CI/CD Pipeline:** Fully integrated with GitHub Actions to trigger test suites automatically on every code push or pull request.

## 🚀 Getting Started

### Prerequisites
Ensure you have [Node.js](https://nodejs.org) installed (v18 or higher recommended).

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com
   ```
2. Navigate into the project directory:
   ```bash
   cd playwright-saucedemo-framework
   ```
3. Install project dependencies:
   ```bash
   npm install
   ```

### Running Tests
* **Run all tests in headless mode:**
  ```bash
  npx playwright test
  ```
* **Run tests in headed mode (UI visible):**
  ```bash
  npx playwright test --headed
  ```
* **View the interactive UI Mode runner:**
  ```bash
  npx playwright test --ui
  ```

## 📊 Test Reporting
After running your local execution, generate and view the interactive HTML dashboard:
```bash
npx playwright show-report
```
<img width="1200" height="882" alt="image" src="https://github.com/user-attachments/assets/d6177b5d-cac4-4b21-89be-db2f52ecd521" />
