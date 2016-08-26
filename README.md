# upperBox

------

A simple JQuery modal to show content with style to users.

No more shit(no more extra images or fonts), Just `1KB.js + 2KB.css + 85KB.JQuery.js :D`

In the future I will develop a lighter version of upperBox without JQuery.

### Installation
- Bower:
	`bower install upperbox`
- NPM:
	`npm install upperbox`

### How to use
1. Add a link to the CSS file Inside `<head>` tag:

	`<link rel="stylesheet" href="../upperbox/upperbox.min.css">`

2. Add JQuery and upperBox script tags before `</body>`:

	````
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>

	<script src="../upperbox/upperbox.min.js"></script>
	````

3. Call upperBox after above scripts:

	````
	$("body").upperbox({
		content: 'Hello world...'
	});
	````
	__Hint:__ `$("body")` is where upperBox insert it's element into.

### Settings


Option | Type | Default | Description
------ | ---- | ------- | -----------
content | string | ___ | Text block you want to show
position | string | relative | "relative" or "fixed". If "relative" is used, you can show multiple upperBox togheter. If "fixed" is used, upperBox will sit in center of the display.
animate | string | slide | "slide" or "fade". Both use JQuery effect.
class | string | ___ | Any additional CSS class. If you want override the style.
destroyElem | boolean | true | By pressing close button, modal should be deleted or not
templateID | string | ___ | If you want to use another template you should specify where your template is

### Extend
In normal usage, there is no need to create a template before JS process in HTML file; But if you want to use another template, you can specify `templateID` option and put the new template inside a script tag like below:
````
<script type="text/template" id="newTemplate">
	<div class="upperbox" style="display:none">
		...
	</div>
</script>
````
[More examples.](https://github.com/Pooria-H/upperBox/tree/master/examples)
