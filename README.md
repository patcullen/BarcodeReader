BarcodeReader
===========

BarcodeReader is a class/file to include on your webpage if you want to detect and react to a barcode reader. 

![Screenshot](http://pat.cullen.co.za/project/BarcodeReader/Screenshot.png)

How to use
----------

Include a reference to the BarcodeReader.js script file and the following code in a script block in the head of your web page.

	new BarcodeReader({
		onRead: function(v) {
			$('txtGlobal').set('value', v).highlight();
		}
	});


Screenshots
-----------

![Screenshot](http://pat.cullen.co.za/project/BarcodeReader/Screenshot.png)

