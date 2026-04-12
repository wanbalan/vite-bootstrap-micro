from machine import Pin,freq,ADC


freq(40_000_000)
led_wifi = Pin(1, Pin.OUT, Pin.PULL_UP)
led_data = Pin(2, Pin.OUT, Pin.PULL_UP)
adc = ADC(Pin(14), atten=ADC.ATTN_11DB)
