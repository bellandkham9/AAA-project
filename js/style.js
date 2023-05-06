members = document.querySelectorAll('.member');

members.forEach(member => {
    member.addEventListener('mouseover', ()=>{
            alert("hover");
        });
    member.addEventListener('mouseout', ()=>{
        // do something when the mouse leaves the element
    });
});