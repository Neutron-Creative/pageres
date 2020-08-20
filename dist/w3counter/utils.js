'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const cheerio_1 = require("cheerio");
const got_1 = require("got");
const types = {
    'Web Browsers': 'browser',
    Platforms: 'os',
    'Screen Resolutions': 'res'
};
exports.types = Object.keys(types).map(x => types[x]);
exports.load = () => got_1.default('https://www.w3counter.com/globalstats.php').then(res => {
    const $ = cheerio_1.cheerio.load(res.body);
    const stats = {};
    $('th').each((i, x) => {
        let type = $(x).text().replace(/^Top 10/, '').trim();
        if (!types[type]) {
            return;
        }
        type = types[type];
        $(x).parent().nextAll('tr').each((i, y) => {
            if (!stats[type]) {
                stats[type] = [];
            }
            stats[type].push({
                item: $(y).children('.item').text(),
                percent: $(y).children('.pct').text()
            });
        });
    });
    return stats;
});
//# sourceMappingURL=utils.js.map