ScannerKeystrokeObserver
===========

ScannerKeystrokeObserver is a class to automatically detect entries from a hardware device that 
generates keystrokes (like a barcode scanner).

![Screenshot](http://pat.cullen.co.za/project/ScannerKeystrokeObserver/Screenshot.png)

How to use
----------

Include a reference to the ScannerKeystrokeObserver.js script file and the following code in a script block in the head of your web page.

	new ScannerKeystrokeObserver({
		onRead: function(v) {
			$('txtGlobal').set('value', v).highlight();
		}
	});


Screenshots
-----------

![Screenshot](http://pat.cullen.co.za/project/ScannerKeystrokeObserver/Screenshot.png)

