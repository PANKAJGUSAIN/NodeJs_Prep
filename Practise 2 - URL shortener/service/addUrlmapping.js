const fs = require('fs/promises');
async function UrlMapping(data) {
    let filename = 'urlmap.json';
    try {
        await fs.access(filename).catch(async () => {
            await fs.writeFile(filename, JSON.stringify({}), 'utf8')
            console.log(`${filename} created successfully.`);
        })

        const fileContent = await fs.readFile(filename, 'utf8');

        const jsonData = JSON.parse(fileContent);

        let keys = Object.keys(jsonData)

        if (keys.length == 0) {
            jsonData[data.shortcode] = data.url;
        }
        else {
            if (keys.includes(data.shortcode)) {
                return { status: 'error', message: "shortcode already exists" }
            }
            jsonData[data.shortcode] = data.url;
        }
        console.log(`File content: `, jsonData);

        await fs.writeFile(filename, JSON.stringify(jsonData), 'utf8')
        
        return { status: 'success', message: data.shortcode }
    } catch (error) {
        console.error(`Error handling file: ${error.message}`);
    }

}

module.exports = UrlMapping