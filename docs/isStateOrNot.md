### State or not =>

                 X
                 │
                 ▼
     1. در UI تغییر می‌کند؟
          │            │
         نه           بله
          │            │
     state نیست        ▼
                2. از Parent می‌آید؟
                    │          │
                   نه        بله
                    │          │
                  PROP         ▼
                     3. قابل محاسبه است؟
                         │        │
                        نه      بله
                         │        │
                     DERIVED      ▼
                              4. UI باید
                              بین renderها
                              به خاطر بسپارد؟
                                  │      │
                                 نه     بله
                                  │      │
                              state     نیست STATE
