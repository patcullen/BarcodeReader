BarcodeReader
===========

BarcodeReader is a class/file to include on your webpage if you want to detect and react to a barcode reader. 

![Screenshot](http://pat.cullen.co.za/project/BarcodeReader/Screenshot200x100.png)

How to use
----------

		<p>Include the following code in the head of your web page.</p>
		<pre>
	&lt;script src=&quot;http://ajax.googleapis.com/ajax/libs/mootools/1.2.4/mootools-yui-compressed.js&quot; language=&quot;JavaScript&quot; type=&quot;text/javascript&quot; &gt;&lt;/script&gt;
	&lt;script src=&quot;BarcodeReader.js&quot; &gt;&lt;/script&gt;
	&lt;script&gt;
	new BarcodeReader({
		onRead: function(v) {
			$('txtGlobal').set('value', v).highlight();
		}
	});
	&lt;/script&gt;
		</pre>


Screenshots
-----------

![Screenshot](http://pat.cullen.co.za/project/BarcodeReader/Screenshot200x100.png)

