<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>login form</title>
</head>
<body>
    <div class="container"></div>
        <h1>please login </h1>
        <form>
            <div class="form_control">
            <input type="text" required>
            <label>
                <span>E</span>
                <span>m</span>
                <span>a</span>
                <span>i</span>
                <span>l</span>
            </label>
            </div>
            <div class="form_control">
                <input type="password" required>
                <label>
                    <span>P</span>
                    <span>a</span>
                    <span>s</span>
                    <span>s</span>
                    <span>w</span>
                    <span>o</span>
                    <span>r</span>
                    <span>d</span>

                </label>
                </div>
                <button class="btn">login</button>
                <p class="text">Don't have an account? <a href="#">Register</a></p>
        </form>
        </div>
        <!--javascript section-->
        <script>
            const labels= document.querySelectorAll('.form_control label')
            labels.forEach(label =>{
                 label.innerHTML = label.innerText
                 .split('')
                 .map((letter,idx) => 
                 `<span style="transition-delay: ${idx * 150}ms">${letter}</span>`)
                 //ms meand milliseconds
                 .join('')
            })
            
        </script>
</body>
</html>
