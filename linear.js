function Linear()
{

	c_delay=0;
	var flag=0;
    var k=document.getElementById('key').value;
    for(var i=0;i<array_size;i++)
    {
       
    	div_update(divs[i],div_sizes[i],"yellow");
    	if(k == div_sizes[i])
    	{
    		div_update(divs[i],div_sizes[i],"green");flag++;break;
    	}

    }
    
    enable_buttons();
}