const puppeteer = require('puppeteer');
genScreenshot = async (id, handle) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({
        width: 1200,
        height: 1200
    });
    await page.goto('http://localhost:4200/post/' + id + '/' + handle);
    await page.screenshot({
        path: 'posts/post' + id + '.png',
        clip: {
            x: 0,
            y: 0,
            width: 1080,
            height: 1080
        },
    });
    await browser.close();
};
postGen = async (handle, start, end) => {
    for (let i = start; i <= end; i++) {
        await genScreenshot(i, handle);
    }
}
module.exports = postGen;