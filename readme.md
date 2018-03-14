# WhatsApp Verify BOT

Using WhatsApp to verify Phone number instead using SMS

## How to

- Google Chrome / Chromium.
- Make sure WhatsApp is already logedin on Browser.
- Load Unpacked Extension... point to this folder.

To Test script please go to
https://jsfiddle.net/pedox/tpwb97ty/3/
Insert phone number with country code and without (+) *Example* : 628387760xxxx

Popup will goes out and automatically sended message directly.

### Flow

- Chrome will open WhatsApp Web page with format `http://web.whatsapp.com/send?phone={phone}&text={text}`
- content_script will dispatch send button
- and close if there was done.

That's All Folks !
