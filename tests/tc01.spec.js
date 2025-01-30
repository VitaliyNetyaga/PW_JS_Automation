import {test, expect} from '@playwright/test'

test('Launch app', async({page})=>{
    //1. Opening the requred page.
    await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/')
    
    //2. Search for 'ro' term.
    await page.getByPlaceholder('Search for Vegetables and Fruits').fill('ro');
    
    //3.1 Check if Carrot presents in search results
    await expect(page.getByText('Carrot')).toBeTruthy()
    
    //3.2 Filling Carrot box with quantity of '5'
    await page.locator('div').filter({ hasText: /^Carrot.+$/ }).getByRole('spinbutton').fill('5');

    //4.1 Check if Mushroom presents in search results
    await expect(page.getByText('Mushroom')).toBeTruthy()

    //4.2 Incrementing Mushrooms to quantity of '3'
    /*for(let i = 0; i < 3; i++) 
    {
        const quantity= await page.locator('div').filter({ hasText: /^Mushroom.+$/ }).getByRole('spinbutton');
        const value = await quantity.inputValue();
        if(value==3)
            console.log('Quantity is '+value);
        await page.locator('div').filter({ hasText: /^Mushroom.+$/ }).getByRole('link').nth(1).click();
    }*/

    while(true) 
        {
            const quantity= await page.locator('div').filter({ hasText: /^Mushroom.+$/ }).getByRole('spinbutton');
            const value = await quantity.inputValue();
            if(value==3)
                {
                    console.log('Quantity is '+value);
                    break;
                }
            await page.locator('div').filter({ hasText: /^Mushroom.+$/ }).getByRole('link').nth(1).click();
        }
    
    //5. Adding "Carrot" to the Cart
    await page.locator('div').filter({ hasText: /^Carrot.+$/ }).getByRole('button').click();

    //6. Adding "Mushroom" to the Cart
    await page.locator('div').filter({ hasText: /^Mushroom.+$/ }).getByRole('button').click();
    
    //7. Opening the Cart
    await page.getByRole('link', { name: 'Cart' }).click()

    //8. Deleting the "Carrot" item
    await page.getByRole('listitem').filter({ hasText: /^Carrot.+/ }).getByRole('link').click();


    //_not_required_in_the_task_ Final: check the Cart has 1 item only
    await page.waitForTimeout(300);

    const itemsLeft = await page.getByRole('listitem',{class:'cart-item'});
    const cartCount = await itemsLeft.count()
    for (let i = 0; i < cartCount; i++) 
        {
            const product = await itemsLeft.nth(i).locator('.product-name').textContent();
            console.log('List items='+product);
        }
    await expect(cartCount==1).toBeTruthy()
    
})