const noPostUrl = 'jalebi-party';

if (location.href.includes(noPostUrl)) {
    noPostTrigger();
}

let url = location.href;
document.body.addEventListener('click', ()=>{
    requestAnimationFrame(()=>{
      if(url!==location.href){
        if (location.href.includes(noPostUrl)) {
            noPostTrigger();
        }
        url = location.href;
      }
    });
}, true);

window.onkeypress = function(event) {
    if (location.href.includes(noPostUrl)) {
        noPostTrigger();
    }
};

function noPostTrigger() {
    document.body.innerHTML = `
    <div style="text-align: center;">
        <h1 style="font-size: 130px; color: #333333;">
            DON'T
            <br>
            EVEN
            <br>
            THINK
            <br>
            ABOUT
            <br>
            IT
            <br>
            😡
        </h1>
    </div>
    `;
}
