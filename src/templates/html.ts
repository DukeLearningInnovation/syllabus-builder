const renderHtml = `
<!doctype html>
<html lang="en">
<head>
<title>Course Syllabus</title>
</head>
  <body>
  <h1>Syllabus for {{ coursename }}</h1>
  <p>{{ introduction }}</p>
  
  {% for meeting in meetings -%}
  <h2>{{ meeting }}</h2>
  
  {% endfor %}
  </body>
  </html>
`;
export default renderHtml;
