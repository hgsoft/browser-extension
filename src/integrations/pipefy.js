clockifyButton.render('#edit-card-title:not(.clockify)', {observe: true}, (elem) => {
    let description = $('#edit-card-title');
    
    let project = $('#display-pipe-name');
    let has_client = $('a[href*="clientes"] h2')
    let clientName = (has_client) ? $('a[href*="clientes"] h2').textContent : "Sem cliente"            
    //let link = clockifyButton.createButton(description.textContent, project.textContent);
    let link = clockifyButton.createButton(description.textContent, project.textContent, clientName);
    
    link.style.position = "relative";
    link.style.left = "15px";
    link.style.fontSize = "16px";
    elem.parentNode.appendChild(link);
});