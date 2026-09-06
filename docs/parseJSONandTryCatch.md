## try and catch <=> JSON.parse(data)

localStorage
↓
string
↓
JSON.parse()
↓
JavaScript value

## if data is not a json <=> program crashes !

try/catch خودش JSON را سالم نمی‌کند.

در قسمت کچ ما باید خودمون بیاییم وهندل کنیم که اگر داده خراب بود چکار کنیم

مثلاً می‌توانی:

JSON خراب
↓
catch
↓
استفاده از مقدار پیش‌فرض

یا:

JSON خراب
↓
catch
↓
پاک کردن داده خراب

یا:

JSON خراب
↓
catch
↓
نمایش پیام خطا

## The correct using way

string
↓
"آیا JSON معتبر است؟"
↓
try
├── موفق → استفاده
└── خطا → catch
