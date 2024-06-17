import excelToJson from "convert-excel-to-json";
import ExcelConstants from "../Constants/ExcelConstants";

export default class ExcelUtil {
    public static getTestDataArray(sheet: string) {
        const result = excelToJson({
            sourceFile: ExcelConstants.TEST_PATH,
            columnToKey: {
                '*' : '{{columnHeader}}',
            },
            sheetStubs: true,
            header: { rows: 1 },
            sheets: [sheet],
        });
        return result[sheet];
    }

    public static getSuiteTests(sheet: string) {
        const result = excelToJson({
            sourceFile: ExcelConstants.SUITE_PATH,
            columnToKey: {
                '*' : '{{columnHeader}}',
            },
            sheetStubs: true,
            header: { rows: 1 },
            sheets: [sheet],
        });
        const testList: any[] = [];
        process.stdout.write("Creating Suite 0% ");
        // eslint-disable-next-line no-restricted-syntax
        for (const test of result[sheet]) {
            if (test.Run !== null && test.Run !== undefined && test.Run.toUpperCase() === ExcelConstants.YES) {
                testList.push({ TestName: test.TestName, Mode: test.Mode });
            }
            process.stdout.write("|");
        }
        if (testList.length === 0) {
            throw new Error(`${sheet} sheet does not have any test to run`);
        }
        process.stdout.write(" 100%");
        return testList;
    }

    public static getTestData(sheet: string, testID: string) {
        const testData = this.getTestDataArray(sheet);
        let found = false;
        let data;
        for (let i = 0; i < testData.length; i++) {
            if (testData[i].TestCaseID === testID) {
                data = testData[i];
                found = true;
            }
        }
        if (!found) {
            throw new Error(`Test '${testID}' was not found on '${sheet}' sheet`);
        }
        return data;
    }

    // public static runTestCasesWithMultipleData(sheet: string) {
    //     const result = excelToJson({
    //         sourceFile: ExcelConstants.TEST_PATH,
    //         columnToKey: {
    //             '*' : '{{columnHeader}}',
    //         },
    //         sheetStubs: true,
    //         header: { rows: 1 },
    //         sheets: [sheet],
    //     });
    //     const sheetData = result[sheet];
    //     const testResults: any[] = [];
    //     const testCases = sheetData.reduce((acc, row) => {
    //         const testCaseID = row.TestCaseID;
    //         if (testCaseID) {
    //             if (!acc[testCaseID]) {
    //                 acc[testCaseID] = [];
    //             }
    //             acc[testCaseID].push(row);
    //         } else {
    //             console.warn(`Row is missing a TestCaseID. Skipping...`);
    //         }
    //         return acc;
    //     }, {} as Record<string, any[]>);
    //     Object.keys(testCases).forEach((testCaseID) => {
    //         const testDataSet = testCases[testCaseID];
    //         console.log(`Running TestCaseID: ${testCaseID} with ${testDataSet.length} data sets`);
    //         testDataSet.forEach((data, index) => {
    //             const testResult = this.runTestCase(data);
    //             testResults.push({
    //                 TestCaseID: testCaseID,
    //                 DataSetIndex: index + 1,
    //                 Result: testResult,
    //             });
    //             console.log(`Test Case ${testCaseID} - DataSet ${index + 1}: ${testResult}`);
    //         });
    //     });
    //     return testResults;
    // }
    // private static runTestCase(testCaseData: any): string {
    //     console.log(`Executing test case: ${JSON.stringify(testCaseData)}`);
    //     return "Passed";
    // }
}
