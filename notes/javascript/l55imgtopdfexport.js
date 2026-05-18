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
    // 1. check if image exists or not
    if (!newimg) {
        window.alert("Please upload an image first!");
        return;
    }

    // 2. import package and initialize
    const { jsPDF } = window.jspdf;

    // Default export is a4 paper, portrait, using millimeters for units
    const pdfObj = new jsPDF({
        orientation: "landscape",
        unit: "mm"
    });

    // 3. create canvas as image actual dimensations
    const canvas = document.createElement('canvas');
    canvas.width = newimg.width; // width or naturalWidth
    canvas.height = newimg.height; // height or naturalHeight

    // console.log(canvas);

    // 4. draw image on canvas
    // drawing context
    const ctx = canvas.getContext("2d");

    // ctx.drawImage(image, destination-x, destination-y,)
    ctx.drawImage(newimg, 0, 0);

    // 5. convert canvas to JPEG (Quality 0 to 1)
    // canvas.toDataURL(img-type, img-quality) -> img-type = image/png, image/webp, image/jpeg
    const imgdata = canvas.toDataURL("image/jpeg", 0.85);

    // 6. download img to pdf
    // pdfObj.text("Hello, World!", 10, 10);

    // addImage(image, X-coordinate, Y-coordinate, width, height)
    pdfObj.addImage(imgdata, 10, 10);
    pdfObj.save("newImgtoPdfFile.pdf");
}

// https://www.npmjs.com/package/jspdf
// https://github.com/parallax/jsPDF

// console.log(window.jspdf); // ဒါက class တွေ အားလုံးကို ခေါ် ထုတ်လိုက်တာ
// console.log(window.jspdf.jsPDF); // ဒါက တော့ jspdf ထဲမှာ ရှိတဲ့ methods တွေပဲ ခေါ် ထုတ်တာ

// Method 1
// const jspdfObj = window.jspdf.jsPDF;
// console.log(jspdfObj);

// // Method 2 (Object Destructuring)
// const { jsPDF } = window.jspdf;
// console.log(jsPDF);
    