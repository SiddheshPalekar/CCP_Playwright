@echo off
echo Running Playwright Tests....
npx playwright test --reporter=html > results.txt
echo Test Results saved to results.txt
echo Detailed HTML report generated in playwright-report folder
pause