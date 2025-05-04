function calculatePrice(){
    let websiteType=document.getElementById("websiteType").value;
    let pageCount=parseInt(document.getElementById("pageCount").value);
    let customDesign=document.getElementById("customDesign");
    let totalPrice = 0;
    let resultElement = document.getElementById("totalPrice");
    

    if(websiteType==="businessSite"){
        totalPrice += 1000;
    }
    else if(websiteType==="onlineStore"){
        totalPrice += 2000;
    }
    else if(websiteType==="blog"){
        totalPrice += 1500;
    }

    if (pageCount > 1) {
        totalPrice += (pageCount - 1) * 200;
    }

    if (customDesign.checked) {
            totalPrice += 1000;
    }

    resultElement.textContent = totalPrice + " ₪";
    
    const resetButton = document.querySelector('button[type="reset"]');
    const totalPriceElement = document.getElementById("totalPrice");

    resetButton.addEventListener('click', function() {
        totalPriceElement.textContent = "0 ₪";
});
}


