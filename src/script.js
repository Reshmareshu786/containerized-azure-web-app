const canvas = document.getElementById("glitchCanvas");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    function glitchLine() {
      const y = Math.random() * canvas.height;
      const height = Math.random() * 5 + 1;
      const imageData = ctx.getImageData(0, y, canvas.width, height);
      const dx = Math.random() * 40 - 20;
      ctx.putImageData(imageData, dx, y);
    }

    function drawStatic() {
      const imageData = ctx.createImageData(canvas.width, canvas.height);
      const data = imageData.data;
      for (let i = 0; i < data.length; i += 4) {
        const val = Math.random() * 255;
        data[i] = val;     
        data[i + 1] = val; 
        data[i + 2] = val; 
        data[i + 3] = Math.random() < 0.05 ? 255 : 0;
      }
      ctx.putImageData(imageData, 0, 0);
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawStatic();
      for (let i = 0; i < 5; i++) glitchLine();
      requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });

document.querySelector('.glow-button').addEventListener('click', () => {
  alert("You clicked Enter!");
});

