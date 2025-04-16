import { test, expect} from '@playwright/test';
import path from 'path'; // ES Modules（推荐）



test('do actions, do not support execute', async({page}) =>{
    await page.getByRole('textbox').fill('Peter'); //Text Input
    await page.getByLabel('Birth data').fill('2020-02-02');  // Date Input
    await page.getByLabel("Appointment time").fill('13:15'); // Time Input
    await page.getByLabel('Local time').fill('2020-03-02T05:15'); // Local datetime input
    await page.getByLabel('I agree to the terms above').check(); // check the checkbox
    expect(page.getByLabel('Subscribe to newletter')).toBeChecked(); //Assert the check state
    await page.getByLabel("XL").check(); // Select the radio button
    await page.getByLabel('Choose a color').selectOption('blue'); // Single selection matching the value of label
    await page.getByLabel('Choose a color').selectOption({label: 'Blue'}); //Single selection matching the label
    await page.getByLabel('Choose Multiple colors').selectOption(['red', 'blue', 'green']); //Multiple selected items
    await page.getByRole('button').click();// Gnneric click
    await page.getByText('Item').dblclick();// Double click
    await page.getByText('Item').click({button:'right'})// Right click
    await page.getByText('Item').click({modifiers: ['Shift']});// Shift click
    await page.getByText('Item').click({modifiers: ['ControlOrMeta']}); // Ctrl+click(Window|Linux) Meta+click(macOS)
    await page.getByText('Item').hover(); // Hover over element
    await page.getByText('Item').click({position: {x:0, y:0}}); // click the top left corner
    await page.getByRole('button').click({force: true});// 强制点击
    await page.getByRole('button').dispatchEvent('click'); // 程序化点击
    await page.locator("#area").pressSequentially("hello world");// 逐个输入
    await page.getByText('Submit').press("Enter"); // Hit Enter
    await page.getByText('textbox').press('Control+ArrowRight'); // Dispatch Control + Right
    await page.getByRole('textbox').press('$'); //Press $ sign on keyboard
    await page.locator('#name').press("Shift+A"); // <Input id=name>
    await page.locator("#name").press("Shift+ArrowLeft"); // <Input id=name>

    await page.getByLabel('Upload file').setInputFiles(path.join(__dirname,'myfile.pdf')); // select one file
    await page.getByLabel('Upload files').setInputFiles([
        path.join(__dirname, 'file1.txt'),
        path.join(__dirname, 'file2.txt'),
    ]);//Select multiple files
    await page.getByLabel('upload dirrectory').setInputFiles(path.join(__dirname,'mdir')); // select a directory
    await page.getByLabel('upload file').setInputFiles([]);// Remove all the selected files
    await page.getByLabel('Upload file').setInputFiles({
        name: 'file.txt',
        mimeType: 'text/plain',
        buffer: Buffer.from('this is tests')
    }); // upload buffer from memory

    // Start waiting for file chooser before clicking. Note to await
    const fileChooserPromise=page.waitForEvent('filechooser');
    await page.getByLabel('Upload file').click();
    const fileChooser=await fileChooserPromise;
    await fileChooser.setFiles(path.join(__dirname,'myfile.pdf'));

    await page.getByLabel("password").focus();// focus element
    await page.locator('#item-to-be-dragged').dragTo(page.locator('#item-to-drop-at')); // 拖放元素

    // 手动拖放
    await page.locator('item1').hover();
    await page.mouse.down();
    await page.locator('item2').hover();
    await page.mouse.up();

    await page.getByRole('button').click();// Scrolls automatically so that button is visible
    await page.getByText('Footer text').scrollIntoViewIfNeeded(); //Scroll the footer into view, forcing an "infinite list" to load more content

    // 精确滚动
    //Position the mouse and scroll with the mouse wheel
    await page.getByTestId('scrolling-container').hover();
    await page.mouse.wheel(0,10);
    // Alternatively, programmatically scroll a specific element.
    await page.getByTestId('scrolling-container').evaluate(e => e.scrollTop +=100);


});