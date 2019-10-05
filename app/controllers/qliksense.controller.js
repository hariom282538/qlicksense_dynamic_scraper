const puppeteer = require('puppeteer');

exports.Reporting = async function (req, res) {

    let url = req.query.url || "https://QLICK_SENSE_LOGIN.COM", res_data;
    const browser = await puppeteer.launch({ headless: true, args: ['--ignore-certificate-errors --enable-features=NetworkService', '--no-sandbox', '--disable-setuid-sandbox'] });
    const page = await browser.newPage();
    const client = await page.target().createCDPSession();
    await client.send('Security.setIgnoreCertificateErrors', { ignore: true });
    await page.setViewport({ width: 1800, height: 750 });
    try {

        await page.goto(url, { waitUntil: 'networkidle0' }); // wait until page load        
        await page.type('input[name="username"]', "org\\uname");
        await page.type('input[name="pwd"]', "welcome");
        await page.click('input[type="submit"]');
        await page.goto('https://QLICK_SENSE/sense/app/afc7062a-d7e3-46bb-9987-60512346662c5/sheet/d86ab80a-ea30-4e4a-aaac-2a41953f1390/', { waitUntil: 'networkidle0' });
        await page.waitForSelector('div[class="kpi-value"]', { visible: true });
        const rdata = await page.evaluate(() => {
            const qkeys = Array.from(document.querySelectorAll('div.measure-title.ellips-text span.ng-binding')).map(keys => { return keys.innerText.replace(/\s/g, '') });
            const qvalues = Array.from(document.querySelectorAll('div.kpi-value div.ellips-text span.ng-binding')).map(values => { return values.innerText.replace(/\s/g, '') });
            return qkeys.reduce((obj, k, i) => ({ ...obj, [k]: qvalues[i] }), {});
        });
        console.log(rdata);
        await page.screenshot({ path: "QLICK_SENSE.jpeg", type: "jpeg", quality: 100, omitBackground: true, fullPage: true });
        await browser.close();
        res.send(rdata);
    }
    catch (err) {

        console.log("PPTR Error - handled case", err);
        res_data = { "type": "error" };
        await browser.close();
        res.send(res_data);
    }

}; // global function closing
