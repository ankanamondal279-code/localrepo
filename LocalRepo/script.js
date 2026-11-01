const htmlCode = document.getElementById("html-code");
const cssCode = document.getElementById("css-code");
const jsCode = document.getElementById("js-code");
const output = document.getElementById("output");
const runButton = document.getElementById("run-btn");

runButton.addEventListener("click", function () {
    const html = htmlCode.value;
    const css = cssCode.value;
    const js = jsCode.value;

    const preview = output.contentWindow.document;

    preview.open();

    preview.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <style>${css}</style>
        </head>
        <body>
            ${html}

            <script>
                ${js}
            <\/script>
        </body>
        </html>
    `);

    preview.close();
});