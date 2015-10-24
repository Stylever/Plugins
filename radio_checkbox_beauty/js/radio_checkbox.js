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
$.fn.extend({
	radioLabel: function () {
		var _this = this;
		// $('input[type="radio"]').before("<i></i>");
		// $('input[type="radio"]').hide();
		$(_this).before("<i></i>");
		$(_this).hide();
		/*事件绑定*/
		// $('input[type="radio"]').closest("label").on("click", function () {
		$(_this).closest("label").on("click", function () {
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
	},
	checkboxLabel: function () {
		var _this = this;
		$(_this).before("<i></i>");
		$(_this).hide();
	// checkbox
		// $('input[type="checkbox"]').before("<i></i>");
		// $('input[type="checkbox"]').hide();

		// $('input[type="checkbox"]').closest("label").on("click", function (event) {
		$(_this).closest("label").on("click", function (event) {
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
	}
});
	
$('input[type="radio"]').radioLabel();
$('input[type="checkbox"]').checkboxLabel();

	
