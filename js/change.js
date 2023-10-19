function updateGreeting(){
    //var test =1;
    //var test;
    //var test =2;
    //có thể khai báo lại, không cần gán giá trị khi khởi tạo
    //có thể thay đổi cập nhật giá trị
    
    //const khai báo hằng số, giá trị không được cập nhật và PHẢI khởi tạo giá trị ban đầu
    const greetingElement = document.getElementById('greeting');
    //const greetingElement;
    //const greetingElement1 = '';
    const timeElement = document.getElementById('time');
    const timeElement2 = document.getElementById('time2');
    const secondElement = document.querySelector('.seconds span');
    const currentTime = new Date();
    const currentHour = currentTime.getHours();

    //let khai báo biến, không được khai báo lại, không cần giá trị ban đầu
    let greeting = '';
    let className = '';
    //let greeting;
    //let className;

    if(currentHour < 12){
        greeting = 'Chào buổi sáng';
        className = 'morning';
    } else if(currentHour < 18){
        greeting = 'Chào buổi chiều';
        className = 'afternoon';
    } else{
        greeting = 'Chào buổi tối';
        className = 'evening';
    }

    greetingElement.textContent = greeting;
    greetingElement.className = className;

    const timeString = `Thời gian đầy đủ:: ${currentTime}`;
    const timeString2 = `Thời gian rút gọn: ${currentTime.getHours()}:${String(currentTime.getMinutes()).padStart(2,'0')}:${String(currentTime.getSeconds()).padStart(2,'0')}`;
    timeElement.textContent = timeString;
    timeElement2.textContent = timeString2;

    secondElement.textContent = currentTime.getSeconds();
}

//Gọi hàm cập nhật mỗi giây
setInterval(updateGreeting, 1000);

//Cập nhật lần đầu khi tải trang
updateGreeting();

function changeColor(){
    const textElement = document.getElementById('text');
    //Lấy ra màu sắc hiện tại của phần tử
    const currentColor = textElement.style.color;

    if(currentColor === 'blue'){
        textElement.style.color = 'red';
        textElement.textContent = 'Văn bản màu đỏ rồi sẽ thay màu';
    } else{
        textElement.style.color = 'blue';
        textElement.textContent = 'Văn bản màu xanh rồi sẽ thay màu'
    }
}

//Gọi hàm thay đổi màu mỗi giây
setInterval(changeColor, 1000);