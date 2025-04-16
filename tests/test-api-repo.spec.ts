import { test, expect } from '@playwright/test';

const PEPO = 'test-repo-1'
const USER = 'kvchs';

test('should create a bug report', async ({ request }) => {
    // const newIssue = await request.post(`/repo/${USER}/${PEPO}/issue`, {
    //     data: {
    //         title: '[Bug] report 1',
    //         body: 'Bug description',
    //     }
    // });
    // // 打印完整响应信息
    // console.log('Status:', newIssue.status());
    // console.log('Headers:', newIssue.headers());
    // console.log('Body:', await newIssue.json()); // 或 .json() 如果返回 JSON
    // expect(newIssue.ok()).toBeTruthy();
});


test.beforeAll(async ({ request }) => {
    // Create a new repository
    const response = await request.post('/user/repos', {
      data: {
        name: 'REPO'
      }
    });
    console.log('Body:', await response.json())
    expect(response.ok()).toBeTruthy();
  });
  
  test.afterAll(async ({ request }) => {
    // Delete the repository
    const response = await request.delete(`/repos/kvchs/PEPO`);
    expect(response.ok()).toBeTruthy();
  });

// /repo//
