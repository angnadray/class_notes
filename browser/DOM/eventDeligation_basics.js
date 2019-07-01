document.getElementById("parent-list").addEventListener('click', function (event){
    if (event.target && event.target.nodeName == "LI") {
        console.log('event.target:', event.target);
        console.log('event.target.nodeName', event.target.nodeName);
        console.log('event', event);
         
        console.log(`list item ${event.target.id.replace('post-', '')} was clicked`);
        console.log('event.target.id',event.target.id);
        
    }
    
});

document.getElementById('myDiv').addEventListener('click', function(event){
    console.log('event.target', event.target);
    if(event.target && event.target.matches('a.classA')){
        console.log('Anchor element clicked!');
        
    }

    console.log('event', event);
    
})