import express from "express";

export default (name: string) => {
    const webapp = express();

    webapp.get('/', (req, res) => {
        res.type('text/html');
        res.end(`
        <html>
            <body>
                <h1>Hello ${name}</h1>
            </body>
        </html>
       `);
    });

    return webapp;
}
