const storedData = localStorage.getItem('customer_data');
const customer_data = storedData ? JSON.parse(storedData) : [
  { id: "1", Fname: "Laxmi", lname: "Priya", age: "21" },
  { id: "2", Fname: "Iniya", lname: "Ram", age: "3" },
  { id: "3", Fname: "Meena", lname: "Das", age: "35" },
  { id: "4", Fname: "Ravi", lname: "Varma", age: "41" },
  { id: "5", Fname: "Arun", lname: "Kumar", age: "28" }
];
// localStorage.setItem('customer_data', JSON.stringify(customer_data));
function delete_customer(id){
   const row = document.querySelector(`button[data-id='${id}']`).closest('tr');
   row.style.display='none';
     console.log("deleted:",id);
     const filtered_data=customer_data.filter(items =>items.id!=id);
     
     console.log(filtered_data)
    
     localStorage.setItem('customer_data', JSON.stringify(filtered_data));
     console.log(filtered_data) 
}
function edit_customer(id){
   window.location.href = `form.html?id=${id}`;
  const user=customer_data.find(item => item.id === id.toString());
  console.log(user);
  localStorage.setItem('edit_customer', JSON.stringify(user));
  const edit_user=JSON.parse(localStorage.getItem('edit_customer'));
  
  document.getElementById('lname').value=edit_user;
  
  

}
function readFormData() {
     const formData = {};
       formData["Fname"] = document.getElementById('fname').value.trim();
       formData["lname"] = document.getElementById('lname').value.trim();
       formData["age"] = document.getElementById('age').value.trim();
      return formData;
   }
function onFormSubmit(event) {
  event.preventDefault();
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');
  const newEntry = readFormData();
  let customer_data = JSON.parse(localStorage.getItem('customer_data') ) || [] ;

  if (id) {
    customer_data = customer_data.filter(user => user.id !== id);
   
    newEntry.id = id;
  } else {
    newEntry.id = (customer_data.length + 1).toString();
  }

  customer_data.push(newEntry);

  localStorage.setItem('customer_data', JSON.stringify(customer_data));
  localStorage.removeItem('edit_customer');

  window.location.href = 'sample.html';
}

const row = document.querySelector('#customer-body');
const table = () => {

    customer_data.forEach((data) => {
        const tr = document.createElement('tr');
        tr.classList.add('table-row')
        tr.innerHTML = `
                <td>${data.id}</td>
                <td>${data.Fname}</td>
                <td>${data.lname}</td>
                <td>${data.age}</td>
                <td>${data.Fname} ${data.lname}</td>
                <td>  <button class="edit icons" type="button">
    <span class="material-symbols-outlined" data-id="${data.id}" onClick="edit_customer(${data.id})">edit</span>
  </button>
  <button class="delete" type="button" data-id="${data.id}" onClick="delete_customer(${data.id})">
    <span class="material-symbols-outlined">delete</span>
  </button></td>
        `
        row.appendChild(tr)
    }) 
}
table();