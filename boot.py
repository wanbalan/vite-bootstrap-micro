from machine import Pin, freq, ADC


freq(80_000_000)
led_wifi = Pin(40, Pin.OUT, Pin.PULL_DOWN)
led_data = Pin(39, Pin.OUT, Pin.PULL_DOWN)
adc = ADC(Pin(14), atten=ADC.ATTN_11DB)
