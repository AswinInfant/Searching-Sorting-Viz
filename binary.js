function Binary()
{


	c_delay=0;
	var left=0;
	var right=array_size-1;var flag=0;
	  var k=document.getElementById('key').value;
	  while(left<=right)
	  {
	  	var mid1= (left+(right-1))/2;
	  	var mid =Math.round(mid1); 
	  	if(k == div_sizes[mid])
	  	{
	  		window.alert("yes");
	  			div_update(divs[mid],div_sizes[mid],"red");
	  		flag++;break;
	  	}
	  	else if(k > div_sizes[mid])
	  	{
	  		left=mid+1;
	  		for(var i=mid;i>=0;i--)
    		{
       
    		div_update(divs[i],div_sizes[i],"black");
	  		}
	  	}
	  	else
	  	{
	  		right=mid-1;
	  		for(var i=mid;i<array_size;i++)
    		{
       
    		div_update(divs[i],div_sizes[i],"black");
	  		}
	  	}
	  }
	  if(flag==0){
	  	window.alert("no");
	  }
	  enable_buttons();document.getElementById('best').value=mid;
}