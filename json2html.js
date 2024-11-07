// json2html.js
export default function json2html(data) {
    // Collect column names dynamically
    const columns = [...new Set(data.flatMap(Object.keys))];
  
    // Start building the HTML table
    let html = `<table data-user="shyamprakash9959@gmail.com">`;
    html += "<thead><tr>" + columns.map(col => `<th>${col}</th>`).join('') + "</tr></thead>";
    html += "<tbody>";
  
    data.forEach(row => {
        html += "<tr>";
        columns.forEach(col => html += `<td>${row[col] || ''}</td>`);
        html += "</tr>";
    });
  
    html += "</tbody></table>";
    return html;
}
