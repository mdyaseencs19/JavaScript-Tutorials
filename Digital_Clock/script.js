setInterval(()=>{
    const clock = document.querySelector('.show');
    let time = new Date();
    let sec = time.getSeconds();
    let min = time.getMinutes();
    let hr = time.getHours();
    let day = 'AM';
    let mdate = time.getDate();
    let month = time.getMonth();
    let year = time.getFullYear();
    if(hr > 12){
        day = 'PM';
        hr = hr-12;
    }

    if(hr == 0){
        hr = 12;
    }

    if(sec < 10){
        sec = '0' + sec;
    }

    if(min < 10){
        min = '0' + min;
    }

    if(hr < 9){
        hr = '0' + hr;
    }

    if(mdate < 10){
        mdate = '0' + mdate;
    }

    if(month < 9){
        month = '0' + month;
    }
    clock.textContent = mdate + '-'+ month +'-' + year + ' ' + hr + ':' + min + ':' + sec + ' ' + day;  
});
