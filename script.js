function addNewWEField(){
    // console.log("Adding new field")

    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control')
    newNode.classList.add('weField')
    newNode.classList.add('mt-3')
    newNode.setAttribute('rows',3)
    newNode.setAttribute('placeholder','Enter here')

    let weOb = document.getElementById("we")
    let weAddButtonOb = document.getElementById("weAddButton")
    
    weOb.insertBefore(newNode, weAddButtonOb)
}

function addNewAQField(){
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control')
    newNode.classList.add('eqField')
    newNode.classList.add('mt-3')
    newNode.setAttribute('rows',3)
    newNode.setAttribute('placeholder','Enter here')

    let aqOb = document.getElementById("aq")
    let aqAddButtonOb = document.getElementById("aqAddButton")
    
    aqOb.insertBefore(newNode, aqAddButtonOb)

}

// generating CV 
function generateCV(){
    // console.log("Generating Cv")

    let nameField = document.getElementById("nameField").value;
    let nameT1 = document.getElementById("nameT1");
    nameT1.innerHTML = nameField;

    document.getElementById("nameT2").innerHTML = nameField;

    // contact :
    document.getElementById("contactT").innerHTML = document.getElementById("ContactField").value;

    // address :
    document.getElementById("addressT").innerHTML = document.getElementById("AddressField").value;
    
    // Facebook:
    document.getElementById("fbT").innerHTML = document.getElementById("fbField").value;

    // Instagram:
    document.getElementById("instaT").innerHTML = document.getElementById("InstaField").value;

    // LinkedIN:
    document.getElementById("linkedT").innerHTML = document.getElementById("LinkedField").value;

    // Objective:
    document.getElementById("ObT").innerHTML = document.getElementById("ObField").value;

    // WorkExp:

    let wes = document.getElementsByClassName("weField")
    
    let str = "";

    for( let e of wes) 
    {
        str = str+ `<li> ${e.value}</li>` ;
    }
    document.getElementById("weT").innerHTML = str;

    // Academic qualification

    let aqs = document.getElementsByClassName('eqField')

    let str1 = "";

    for( let e of aqs)
    {
        str1+= `<li> ${e.value}</li>` ;
    }
    document.getElementById("eqT").innerHTML = str1;

    document.getElementById('cv-form').style.display='none';

    document.getElementById('cv-template').style.display = 'block';

}
function printCV ()
{
    window.print();
}

// Function to handle the file input change event
function handleImageInputChange(event) {
    var file = event.target.files[0];
    if (file) {
        var reader = new FileReader();

        // When the file is loaded, update the "imgT" element with the selected image
        reader.onload = function (e) {
            var imgT = document.getElementById("imgT");
            imgT.src = e.target.result;
        };

        reader.readAsDataURL(file); // Read the selected file as a data URL
    }
}

// Attach an event listener to the file input element
document.getElementById("imageInput").addEventListener("change", handleImageInputChange);



