( ()=> {
        const canvas = document.getElementById('painting');
        // document.getElementById จะไปหาว่า index.html มี element
        //ไหนที่มี id เป็น painting

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        //to set width and height equal to window' width 
        //and window's height

        const context = canvas.getContext('2d');
        //ดึง context ออกมาจาก canvas

        //canvas จริงๆแล้วใช้แค่เซ็ทขนาดความสูงและความกว้าง
        //ของพื้นที่ที่เราจะวาดเท่านั้น เราจะวาดได้ถึงตรงไหน
        //ตัวที่วาดจริงๆ คือ object context

        let previousPoint = {x:0, y: 0};
        //จุดซ้ายบนสุด

    function getDistance(previousPoint, currentPoint){
        return Math.sqrt( (previousPoint.x - currentPoint.x)** 2 + (previousPoint.y - currentPoint.y)**2);
    }



    function onMouseMove({pageX, pageY}){
        const currentPoint = {x: pageX, y: pageY};

        context.beginPath();

        context.lineCap = 'round';
        context.lineJoin = 'round';
        const distance = getDistance(previousPoint, currentPoint);

        context.lineWidth = Math.random()/ distance*40 ;
        const opacity = Math.min(0.5, 1 / distance);
        context.strokeStyle = `rgba(222, 10, 109, ${opacity})`;

        context.moveTo(previousPoint.x, previousPoint.y);
        context.lineTo(currentPoint.x, currentPoint.y);

        context.stroke();
        context.closePath();

        previousPoint = currentPoint;
    }

    function onMouseEnter( {pageX, pageY}){
        previousPoint.x = pageX;
        previousPoint.y = pageY;
    }

    function run(){
        canvas.addEventListener('mousemove', onMouseMove)
        canvas.addEventListener('mouseenter', onMouseEnter);
    
    };
    run();
})();