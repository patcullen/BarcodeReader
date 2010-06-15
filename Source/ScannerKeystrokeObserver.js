/*
---
description: ScannerKeystrokeObserver, A class to automatically detect entries from a hardware device that generates keystrokes (like a barcode scanner).

license: MIT-style

authors:
- Pat Cullen

requires:
- core/1.2.4: [Class, Class.Extras, DomReady]

provides: [ScannerKeystrokeObserver]

...
*/

var ScannerKeystrokeObserver = new Class({

	Implements: [Options, Events],
	
	options: {
		delay: 30,
		element: null
	},
	
	isQuick: false,
	value: '',
	
	initialize: function(options) {
		this.setOptions(options);
		($defined(this.options.element) ? $(this.options.element) : document).addEvent('keypress', function(k) {
			$clear(this.quickRecognizer);
			$clear(this.quickFinished);
			if (this.isQuick) {
				if (k.key != 'enter')
					this.value += k.key;
				$clear(this.quickFinished);
				this.quickFinished = this.barcodeEntered.delay(this.options.delay, this);
			} else {
				this.value = k.key;
				this.isQuick = true;
				this.quickRecognizer = (function() {
					this.isQuick = false;
				}.bind(this)).delay(this.options.delay);
			}
		}.bind(this));
	},

	barcodeEntered: function() {
		if (this.isQuick) {
			this.isQuick = false; // for next command
			this.fireEvent('read', [this.value, this]);
		}
	}

});

