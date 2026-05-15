// UI
let display = document.getElementById("display"),
    getfileinput = document.getElementById("file_input");

let newimg = null;

// change က တန်ဖိုး ပြောင်းလဲသွားမှ အလုပ်လုပ်တာ
getfileinput.addEventListener ('change', function(e) {
    const file = e.target.files[0];

    if (!file) return ;

    const imageurl = URL.createObjectURL(file);

    // newimg = document.createElement("img"); // method 1
    newimg = new Image();
    newimg.src = imageurl;

    newimg.onload = () => {
        URL.revokeObjectURL(imageurl);
    }

    display.src = imageurl;
});

function pdfloader() {
    if (!newimg) {
        window.alert("Please upload an image first!");
        return;
    }
}
    