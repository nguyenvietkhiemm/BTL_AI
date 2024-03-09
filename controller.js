function writeFile()
{
    const fs = require('fs');

    const data = {
      name: 'John',
      age: 30,
      city: 'New York'
    };
    
    const jsonData = JSON.stringify(data);
    
    // Ghi JSON vào tệp
    fs.writeFile('D:/CODE/JavaScripts/BTL_AI/database.json', jsonData, 'utf8', (err) => {
      if (err) 
      {
        console.error('Lỗi khi ghi vào tệp:', err);
        return;
      }
      console.log('Dữ liệu đã được ghi vào tệp.');
    });
}

const button = document.getElementById('startButton');
button.onclick = writeFile;

