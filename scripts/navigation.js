var createDropdown = function(){

	$('header img').on('click', launchDropdown);
};


var launchDropdown = function(sender){
	var $DROPDOWNCONTAINER = $('header ul');

	if($DROPDOWNCONTAINER.hasClass('visible'))
	{
		$DROPDOWNCONTAINER.removeClass('visible');
	}
	else
	{	
	$('header ul').addClass('visible');
	}
};	