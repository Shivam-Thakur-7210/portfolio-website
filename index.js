const formList = document.querySelector(".formInfo");

formList.addEventListener("submit", async (e)=>{


     e.preventDefault();

    const formData = {
        name:formList.name.value,
        email:formList.email.value,
        subject:formList.subject.value,
        message:formList.message.value,
    }
  

    try{
         const response = await fetch('http://localhost:4000/api/v1/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const  result=response.json();
      await alert(result.message);


    }catch(error){
        alert('Error sending message');
      console.error(error);
        
    }


})