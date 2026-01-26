window.generateWord = function () {
    const preview = document.getElementById('document-preview');
    if (!preview) return;

    const content = preview.innerHTML;
    const accusedName = document.getElementById('acc_name').value || "Document";

    const htmlContent = [
        "<!DOCTYPE html>",
        "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word'>",
        "<head>",
        "<meta charset='utf-8'>",
        "<style>",
        "body { font-family: 'Arial Unicode MS', 'Noto Sans Gujarati', sans-serif; }",
        "</style>",
        "</head>",
        "<body>",
        content,
        "</body>",
        "</html>"
    ].join("\n");

    const converted = htmlDocx.asBlob(htmlContent);
    saveAs(converted, `Arrest_Memo_${accusedName}.docx`);
};
