function calculatePrice(){
    let websiteType=document.getElementById("websiteType").value;
    let pageCount=parseInt(document.getElementById("pageCount").value);
    let customDesign=document.getElementById("customDesign");
    let totalPrice = 0;
    let resultElement = document.getElementById("totalPrice");

    if (pageCount > 10) {
        pageCount = 10;
        document.getElementById("pageCount").value = 10;
      }
    
    if(websiteType==="-1"){
        totalPrice =0;
    }
    else if(websiteType==="businessSite"){
        totalPrice += 1000;
    }
    else if(websiteType==="onlineStore"){
        totalPrice += 2000;
    }
    else if(websiteType==="blog"){
        totalPrice += 1500;
    }

if (websiteType !== "-1"){
    if (pageCount > 1) {
        totalPrice += (pageCount - 1) * 200;
    }

    if (customDesign.checked) {
            totalPrice += 1000;
    }}

    resultElement.textContent = totalPrice + " ₪";
    
    const resetButton = document.querySelector('button[type="reset"]');
    const totalPriceElement = document.getElementById("totalPrice");

    resetButton.addEventListener('click', function() {
        totalPriceElement.textContent = "0 ₪";
});
}


