from machine import Pin, freq, ADC

# utelnetserver.start()
Pin(10, Pin.OUT, Pin.PULL_DOWN)
Pin(11, Pin.OUT, Pin.PULL_DOWN)
Pin(12, Pin.OUT, Pin.PULL_DOWN)
Pin(13, Pin.OUT, Pin.PULL_DOWN)
freq(80_000_000)
led_wifi = Pin(40, Pin.OUT, Pin.PULL_DOWN)
led_data = Pin(39, Pin.OUT, Pin.PULL_DOWN)
adc = ADC(Pin(14), atten=ADC.ATTN_11DB)
import webrepl
webrepl.start()
