// En caso de necesitar la implementación del FetchAPI
import 'whatwg-fetch'; // <-- yarn add whatwg-fetch

require('dotenv').config({
    path: '.env.test'
});

jest.mock('./src/helper/getEnvironments', () => ({
    getEnvironments: () => ({ ...process.env })
}) );
