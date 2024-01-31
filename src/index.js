import { CreateTheConnection, GetComposition, GetCompositionList, GetCompositionListWithId, GetCompositionWithId, GetTheConcept, MakeTheInstanceConcept, SyncData, init } from "mftsccs";
init("https://devboom.freeschema.com", "https://devai.freeschema.com");

var imgpath;


window.onload = function () {
    document.getElementById("probutton").addEventListener('click', uploadImage);
    
    document.getElementById("updateprobutton").addEventListener('click', uploadupdatedImage);
}

// document.getElementById("probutton").addEventListener('button', uploadImage);
function uploadImage(e) {
    e.preventDefault();
    const input = document.getElementById('proimage');
    const file = input.files[0];
    if (!file) {
        alert('Please select an image');
        return;
    }
    const formData = new FormData();
    formData.append('image', file);
    fetch('https://devboom.freeschema.com/api/Image/UploadImage', {
        method: 'POST',
        body: formData,
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Image uploaded successfully:', data);
            imgpath = data.data;
            console.log("this is img path", imgpath);

            // Handle the server's response if needed
        })
        .catch(error => {
            console.error('Error uploading image:', error);
        });
}

function uploadupdatedImage(e) {
    e.preventDefault();
    const updatedinput = document.getElementById('updatedproimage');
    const file2 = updatedinput.files[0];
    if (!file2) {
        alert('Please select an image');
        return;
    }
    const updatedformData = new FormData();
    updatedformData.append('image', file2);
    fetch('https://devboom.freeschema.com/api/Image/UploadImage', {
        method: 'POST',
        body: updatedformData,
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Image uploaded successfully:', data);
            imgpath = data.data;
            console.log("this is img path", imgpath);

            // Handle the server's response if needed
        })
        .catch(error => {
            console.error('Error uploading image:', error);
        });
}
//signUp form2
var form2 = document.getElementById('form2');
if (form2) {
    document.getElementById('form2').addEventListener('submit', function (event) {
        // Prevent the default form submission
        event.preventDefault();

        // Create a FormData object to gather form data
        const formData = new FormData(event.target);
        console.log(formData);

        // Send a POST request using the Fetch API
        fetch('https://devboom.freeschema.com/api/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                fname: formData.get('fname'),
                lname: formData.get('lname'),
                email: formData.get('email'),
                password: formData.get('password'),
            }),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                // You can handle the server response here
                if (data.error == true) {

                    const errorDiv = document.createElement('div');
                    let errorMessage = data.message;

                    errorDiv.textContent = errorMessage;
                    errorDiv.style.color = 'red';
                    errorDiv.style.fontWeight = '800';
                    const errorContainer = document.getElementById('error-container');
                    errorContainer.innerHTML = '';
                    errorContainer.appendChild(errorDiv);

                }
                if (data.success == true) {
                    const successDiv = document.createElement('div');
                    let successMessage = data.message;

                    successDiv.textContent = successMessage;
                    successDiv.style.color = 'green';
                    successDiv.style.fontWeight = '800';
                    const errorContainer = document.getElementById('error-container');
                    errorContainer.innerHTML = '';
                    errorContainer.appendChild(successDiv);
                }


            })
            .catch(error => {
                console.error('Error:', error);


                // Handle errors here


            });

        document.getElementById("form2").reset();
    });
}


// logIn form1
var loginform = document.getElementById('loginform');
if (loginform) {
    document.getElementById('loginform').addEventListener('submit', function (event) {
        event.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        fetch('https://devboom.freeschema.com/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Login failed');
                }
                return response.json();

            })
            .then(data => {
                console.log('Login success:', data, data.data);
                window.location.href = 'pform.html';

                localStorage.setItem("token", data.data.token);
                localStorage.setItem("userId", data.data.entity[0].userId);
                // Handle successful login, e.g., redirect to a new page
            })
            .catch(error => {
                console.error('Login error:', error);

                if (error instanceof Response) {
                    console.log('Response status:', error.status);
                    error.text().then(text => console.log('Response text:', text));
                }


                const errorContainer = document.getElementById('error1-container');
                errorContainer.innerHTML = 'Login failed. Please check your credentials.';
            });
        document.getElementById("loginform").reset();
    });
}
// pform
var sub = document.getElementById('sub');
if (sub) {
    document.getElementById("sub").onclick = function (event) {
        var ProductName = document.getElementById("fname").value;
        var ProductPrice = document.getElementById("lname").value;
        var ProductSize = document.getElementById("country").value;
        var ProductImage = imgpath;
        console.log("this is img path", ProductImage);
        if (ProductName == "" || ProductPrice == "") {
            alert("product name and price must be filled")
        }
        else {
            alert("submitted Successfully");
            event.preventDefault();
            createTheProduct(ProductName, ProductPrice, ProductSize, ProductImage);
        }
    }

    var user_id = localStorage.getItem('userId');


    async function createTheProduct(name, price, size, image) {
        console.log("this is user id ", user_id);
        var mainConcept = await MakeTheInstanceConcept("E-product", "", true, user_id, 4);
        var nameConcept = await MakeTheInstanceConcept("name", name, false, user_id, 4);
        var priceConcept = await MakeTheInstanceConcept("price", price, false, user_id, 4);
        var sizeConcept = await MakeTheInstanceConcept("size", size, false, user_id, 4);
        var imageConcept = await MakeTheInstanceConcept("image", image, false, user_id, 4);
        CreateTheConnection(mainConcept.id, mainConcept.userId, nameConcept.id, nameConcept.userId, mainConcept.id, 999, 999);
        CreateTheConnection(mainConcept.id, mainConcept.userId, priceConcept.id, priceConcept.userId, mainConcept.id, 999, 999);
        CreateTheConnection(mainConcept.id, mainConcept.userId, sizeConcept.id, sizeConcept.userId, mainConcept.id, 999, 999);
        CreateTheConnection(mainConcept.id, mainConcept.userId, imageConcept.id, imageConcept.userId, mainConcept.id, 999, 999);
        await SyncData.SyncDataOnline();
        console.log("This is the product that i created just now", await GetCompositionWithId(mainConcept.id));
        document.getElementById("yourFormId").reset();
    }

}
// Function to handle the logout process
function logout() {
    // Clear user session data
    localStorage.removeItem('token');
    localStorage.removeItem('userId');

    // Redirect to the login page
    window.location.href = 'index.html';
}

// Attach a click event listener to the logout button
document.getElementById('logoutButton').addEventListener('click', function () {
    // Call the logout function when the button is clicked
    logout();
});

let protable = document.getElementById('pro-table');
if (protable) {
    // var productList = await GetCompositionList("E-product", 999, 5, 1);

    var data = await GetCompositionListWithId("E-product", user_id, 100, 1);


    console.log("this is the consoled data ", data);
    // Reference to the table body
    var tableBody = document.getElementById('tableBody');
    // Loop through the data array and create table rows
    for (var i = 0; i < data.length; i++) {
        // var composition = await GetCompositionWithId(data[i]);
        // console.log("this is the composition", composition);
        var row = tableBody.insertRow(data[i]);
        // Create cells and populate them with data
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        var imgElement = document.createElement('img');
        // imgElement.src = imgpath;
        let newImagePath = data[i]["data"]["E-product"].image;
        imgElement.src = newImagePath;
        imgElement.setAttribute('width', "50px");
        console.log("this is img path", data[i]["data"]["E-product"].image);
        cell1.textContent = data[i].id;
        cell2.textContent = data[i]["data"]["E-product"].name;
        cell3.textContent = data[i]["data"]["E-product"].price;
        cell4.textContent = data[i]["data"]["E-product"].size;
        // cell5.textContent = data[i]["data"]["E-product"].image;
        cell5.appendChild(imgElement);
        var updatebutton = document.createElement('button');
        updatebutton.textContent = 'Update';
        updatebutton.id = 'updateid' + i;
        updatebutton.onclick = togglePopup;
        cell6.appendChild(updatebutton);
    }

    function togglePopup() {
        var overlay = document.getElementById('myForm');
        overlay.style.display = (overlay.style.display === 'none' || overlay.style.display === '') ? 'flex' : 'none';
    }

}



// update details

let updateDetail = document.getElementById('popup-form-container');
if (updateDetail) {
    window.onload = function () {
    }
    document.getElementById('popup-form-container').addEventListener('submit', function (event) {

        event.preventDefault();
        const ID = document.getElementById('pro-id').value;
        const updatedProName = document.getElementById('updated-name').value;

        const updatedPrice = document.getElementById('updated-price').value;
        const updatedSize = document.getElementById('size').value;
        const updatedImage = imgpath;
        console.log("this is udated img",updatedImage);
        const token = localStorage.getItem('token');

        fetch('https://devboom.freeschema.com/api/updatev2', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`, // Add the Authorization header with your API key or token
            },
            body: JSON.stringify({
                "E-product": {
                    name: updatedProName,
                    price: updatedPrice,
                    size: updatedSize,
                    image:updatedImage
                },
                id: ID

            }),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(updatedProName => {
                console.log('Data successfully updated:', updatedProName);
                // Handle the updated data as needed
            })
            .then(updatedPrice => {
                console.log('Data successfully updated:', updatedPrice);
                // Handle the updated data as needed
            })
            .then(updatedSize => {
                console.log('Data successfully updated:', updatedSize);
                // Handle the updated data as needed
            })
            .then(updatedImage => {
                console.log('Data successfully updated:', updatedImage);
                // Handle the updated data as needed
            })
            .catch(error => {
                console.error('Error updating data:', error);
                // Handle errors
            });
        document.getElementById("popup-form-container").reset();

        closeForm1();


    })
    function closeForm1() {
        document.getElementById("myForm").style.display = "none";
    }
}




//createTheProduct(200, "pant", "sadfsadf");

// var output = await GetCompositionList("ecommerceProduct",999,3);

// console.log("This is the list of ecommerce Products", output);

// async function createTheProduct(price, name, description){
// var mainConcept = await MakeTheInstanceConcept("ecommerceProduct","",true,999,4,999);
// var priceConcept = await MakeTheInstanceConcept("price", price,false, 999,4,999);
// var nameConcept = await MakeTheInstanceConcept("name", name, false, 999, 4, 999);
// CreateTheConnection(mainConcept.id, mainConcept.userId, priceConcept.id, priceConcept.userId, mainConcept.id, 999, 999);
// CreateTheConnection(mainConcept.id, mainConcept.userId, nameConcept.id, nameConcept.userId, mainConcept.id, 999,999);

// await SyncData.SyncDataOnline();
// console.log("This is the product that i created",await GetCompositionWithId(mainConcept.id));
// }