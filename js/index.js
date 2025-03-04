

    function showHoverText(button) {
        if (button.innerText === "Fale com a Cintia") {
            button.innerText = "copiar e-mail";
        }
    }

    function restoreOriginalText(button) {
        if (button.innerText === "copiar e-mail" || button.innerText === "Copiado! 😎") {
            button.innerText = "Fale com a Cintia";
        }
    }

            function copyEmail(button) {
        const email = "cintiahills@gmail.com";  
        if (navigator.clipboard) {
            navigator.clipboard.writeText(email).then(() => {
                button.innerText = "Copiado! 😎";
            }).catch(() => {
                fallbackCopyEmail(button);
            });
        } else {
            fallbackCopyEmail(button);
        }
    }


    function fallbackCopyEmail(button) {
        const textarea = document.createElement("textarea");
        textarea.value = email;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);

        button.innerText = "Copiado! 😎";
    }

    const animation = lottie.loadAnimation({
        container: document.getElementById('lottie-animation'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: {"v":"4.8.0","meta":{"g":"LottieFiles AE 3.3.6","a":"","k":"","d":"","tc":"none"},"fr":30,"ip":0,"op":40,"w":128,"h":128,"nm":"corner_down_left_lottie","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":3,"nm":"Null 2","sr":1,"ks":{"o":{"a":0,"k":0,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[64,64,0],"ix":2},"a":{"a":0,"k":[50,50,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ip":0,"op":240,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"Layer 1 Outlines 2","parent":1,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.72],"y":[1]},"o":{"x":[0.28],"y":[0]},"t":10,"s":[100]},{"i":{"x":[0.72],"y":[1]},"o":{"x":[0.28],"y":[0]},"t":16,"s":[0]},{"i":{"x":[0.72],"y":[1]},"o":{"x":[0.28],"y":[0]},"t":18,"s":[0]},{"t":19,"s":[100]}],"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.72],"y":[1]},"o":{"x":[0.28],"y":[0]},"t":10,"s":[0]},{"i":{"x":[0.72],"y":[1]},"o":{"x":[0.28],"y":[0]},"t":16,"s":[0]},{"i":{"x":[0.72],"y":[1]},"o":{"x":[0.28],"y":[0]},"t":19,"s":[-90]},{"i":{"x":[0.72],"y":[1]},"o":{"x":[0.28],"y":[0]},"t":25,"s":[-90]},{"t":28.0390625,"s":[0]}],"ix":10},"p":{"a":1,"k":[{"i":{"x":0.72,"y":0.72},"o":{"x":0.28,"y":0.28},"t":10,"s":[21.462,69.5,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.72,"y":1},"o":{"x":0.28,"y":0},"t":16,"s":[21.462,69.5,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.72,"y":1},"o":{"x":0.28,"y":0},"t":19,"s":[80.212,30.5,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.72,"y":1},"o":{"x":0.28,"y":0},"t":25.612,"s":[80.212,69.516,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.72,"y":1},"o":{"x":0.28,"y":0},"t":28.178,"s":[59.101,69.512,0],"to":[0,0,0],"ti":[0,0,0]},{"t":37.15234375,"s":[21.462,69.5,0]}],"ix":2},"a":{"a":0,"k":[15.287,27,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.72,0.72,0.72],"y":[1,1,1]},"o":{"x":[0.28,0.28,0.28],"y":[0,0,0]},"t":33.306,"s":[100,100,100]},{"i":{"x":[0.72,0.72,0.72],"y":[1,1,1]},"o":{"x":[0.28,0.28,0.28],"y":[0,0,0]},"t":37.152,"s":[135,135,100]},{"t":41,"s":[100,100,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[-1.117,-1.117],[0,0]],"o":[[0,0],[-1.117,1.117],[0,0],[0,0]],"v":[[11.538,-13.981],[-0.421,-2.022],[-0.421,2.022],[11.538,13.981]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0,0,0,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":5,"ix":5},"lc":2,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[15.287,27],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":240,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"Layer 2 Outlines 2","parent":1,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.72],"y":[1]},"o":{"x":[0.28],"y":[0]},"t":10,"s":[100]},{"i":{"x":[0.72],"y":[1]},"o":{"x":[0.28],"y":[0]},"t":16,"s":[0]},{"i":{"x":[0.72],"y":[1]},"o":{"x":[0.28],"y":[0]},"t":18,"s":[0]},{"t":19,"s":[100]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[52.75,42.5,0],"ix":2},"a":{"a":0,"k":[31.5,32,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,4.971],[0,0]],"o":[[0,0],[4.971,0],[0,0],[0,0]],"v":[[-26.5,27],[17.5,27],[26.5,18],[26.5,-27]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0,0,0,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":5,"ix":5},"lc":2,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[31.5,32],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":1},"e":{"a":0,"k":100,"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false},{"ty":"tm","s":{"a":0,"k":100,"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.72],"y":[1]},"o":{"x":[0.28],"y":[0]},"t":10,"s":[11]},{"i":{"x":[0.72],"y":[1]},"o":{"x":[0.28],"y":[0]},"t":16,"s":[11]},{"i":{"x":[0.72],"y":[1]},"o":{"x":[0.28],"y":[0]},"t":19,"s":[93.615]},{"i":{"x":[0.72],"y":[1]},"o":{"x":[0.28],"y":[0]},"t":28.178,"s":[50.569]},{"t":37.15234375,"s":[11]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":3,"nm":"Trim Paths 2","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":240,"st":0,"bm":0}],"markers":[]}
    });

    animation.setSpeed(0.5);  


   animation.setColors({
       '#70160e': '#70160e'
   });

