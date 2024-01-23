<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Copy Code Button</title>
  <style>
    body {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
      background-color: #f0f0f0; /* Optional background color for the body */
    }
    
    #copyButton {
      background-color: blue;
      color: white;
      padding: 10px 20px;
      font-size: 16px;
      cursor: pointer;
      border: none;
      border-radius: 5px;
    }
  </style>
</head>
<body>
  <button id="copyButton" onclick="copyText()">Click Here to Copy the Code</button>
  <script>
    function copyText() {
      const textToCopy = `&lt;script&gt; window.sheetURL = 'https://script.google.com/macros/s/AKfycbwzP-7kq7x9OdJuZ_L-gZFsalsaionQK_c8itCkw8tbuZVQzrOy9DHvQ39NKV9yU01g/exec' &lt;\/script&gt; &lt;script src='https://ghlexperts.s3.amazonaws.com/customNavLinks/main_v2.js'&gt;&lt;\/script&gt;`;

      // Use Clipboard API
      navigator.clipboard.writeText(textToCopy)
        .then(() => {
          alert('Code copied to clipboard');
        })
        .catch(err => {
          console.error('Error in copying text: ', err);
        });
    }
  </script>
</body>
</html>
