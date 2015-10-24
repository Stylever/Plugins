/*
dom结构
<div>
	<label class="radioLabel">
			<input type="radio" />
	</label>
	<label class="radioLabel">
			<input type="radio" />
	</label>
</div>
*/
/*添加图标*/
$.fn.radioLabel = function () {
	var _this = this;
	console.log("this:" + _this);
	$(_this).before("<i></i>");
	$(_this).hide();
	/*事件绑定*/
	return $(_this).each( function () {
		$(this).closest("label").on("click", function () {
			var event = event || window.event,
		    	elm = event.target || event.srcElement;
		   
		    if (elm.tagName === 'INPUT') {
				var radioName = $(this).find('input[type="radio"]').attr("name");
				$('input[name="' + radioName + '"]').prop("checked", false);
				$(this).find('input[type="radio"]').prop("checked", true);
				$(this).parent().find("label").removeClass("radioChecked");
				$(this).addClass("radioChecked");
			}
		});
	});
}

$.fn.checkboxLabel = function () {
	var _this = this;
	$(_this).before("<i></i>");
	$(_this).hide();
	// checkbox
	return $(_this).each( function () {
		$(this).closest("label").on("click", function (event) {
			var event = event || window.event,
			    elm = event.target || event.srcElement;

			if (elm.tagName === 'INPUT') {
				if ($(this).find('input[type="checkbox"]').prop("checked")) {
					$(this).find('input[type="checkbox"]').prop("checked", true);
					$(this).addClass("checkboxChecked");
				} else {
					$(this).find('input[type="checkbox"]').prop("checked", false);
					$(this).removeClass("checkboxChecked");
				}
			}
		});
	});
}
	
$('input[type="radio"]').radioLabel();
$('input[type="checkbox"]').checkboxLabel();

	
