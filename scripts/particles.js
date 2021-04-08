
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    var windowWidth, windowHeight;

    window.onresize = function() {
        UpdateSize();
    }

    function UpdateSize() {
        canvas.width = $(document).width();
        canvas.height = $(document).height();

        windowWidth = $(document).width();
        windowHeight = $(document).height();
    }

    UpdateSize();

    class Point {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            
            this.size = Math.random() * 5 + 5;

            this.vx = Math.random() * 2 - 1;
            this.vy = Math.random() * 2 - 1;
            
            this.rotation = 0;
        }

        Update() {
            this.x += this.vx;
            this.y += this.vy;
            
            this.rotation += 0.01 * (this.vx * this.vy);

            this.x = (this.x + windowWidth) % windowWidth;
            this.y = (this.y + windowHeight) % windowHeight;
        }
    }

    var points = [];

    for (var i = 0; i < 50; i++) {
        points.push(new Point(Math.random() * canvas.width, Math.random() * canvas.height));
    }

    function Loop() {
        ctx.fillStyle = "#333";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "rgba(255, 255, 255, 0.75)";

        for (var point of points) {
            point.Update();

            for (var otherPoint of points) {
                if (otherPoint == point) continue;

                var dist = Math.hypot(otherPoint.x - point.x, otherPoint.y - point.y);

                point.vx += 0.01 * (otherPoint.x - point.x) / (dist * dist);
                point.vy += 0.01 * (otherPoint.y - point.y) / (dist * dist);

                if (dist > 200) continue;

                ctx.strokeStyle = `rgba(255, 255, 255, ${dist/200})`
                ctx.lineWidth = Lerp(2, 0.1, dist / 200);

                ctx.beginPath();
                ctx.moveTo(point.x, point.y);
                ctx.lineTo(otherPoint.x, otherPoint.y);
                ctx.stroke();
            }
            
            ctx.save();
            ctx.translate(point.x, point.y);
            ctx.rotate(point.rotation);
            
            var size = point.size;
            
            ctx.beginPath();
            ctx.moveTo(-size, -size);
            ctx.lineTo(size, -size);
            ctx.lineTo(0, size/2);
            
            ctx.fill();
            ctx.restore();

            //ctx.beginPath();
            //ctx.arc(point.x, point.y, 5, 0, 2 * Math.PI, false);
            //ctx.fill();
        }



        setTimeout(Loop, 1000 / 60);
    }
    Loop();

    function Lerp(a, b, t) {
        return a + (b - a) * t;
    }