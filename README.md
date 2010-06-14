BarcodeReader
===========

BarcodeReader is a class/file to include on your webpage if you want to detect and react to a barcode reader. 

![Screenshot](http://pat.cullen.co.za/project/BarcodeReader/Screenshot.png)

How to use
----------

Include the following code in the head of your web page.</p>

<script src="http://ajax.googleapis.com/ajax/libs/mootools/1.2.4/mootools-yui-compressed.js" language="JavaScript" type="text/javascript" ></script>
<script src="BarcodeReader.js" ></script>
<script>
	new BarcodeReader({
		onRead: function(v) {
			$('txtGlobal').set('value', v).highlight();
		}
	});
</script>


Screenshots
-----------

![Screenshot](http://pat.cullen.co.za/project/BarcodeReader/Screenshot.png)

