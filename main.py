import tinyweb
import network
import asyncio
import time
from machine import Timer, Pin, UART, ADC

led_wifi = Pin(40, Pin.OUT, Pin.PULL_DOWN)
led_data = Pin(39, Pin.OUT, Pin.PULL_DOWN)
adc = ADC(Pin(14), atten=ADC.ATTN_11DB)

TIME_CHECK_LED=2000
TIME_CHECK_WIFI_CONNECTION=5_000
TIME_TOGGLE_WIFI_LED=200
TIME_TOGGLE_DATA_LED=200
app = tinyweb.webserver()

# 'SOUR1:OUTput on\r\n'
# "SOUR1:APPL:SIN 3333.0e+0,2vpp;:SOUR2:APPL:SIN 122.0e+0,1vpp\r\n"
# "SOUR1:APPL:SIN 3333,1vpp;:SOUR2:APPL:SIN 1033,1vpp\r\n"
# uart.write('OUTput1 1;OUTput2 1\r\n')
# tim0 = Timer(0)
# tim0.init(period=5000, mode=Timer.ONE_SHOT, callback=lambda t:print(0))

# tim1 = Timer(1)
# tim1.init(period=2000, mode=Timer.PERIODIC, callback=lambda t:print(1))
# g1_output1=0
# g1_output2=0
# g2_output1=0
# g2_output2=0



def network_up():
    ap.active(True)
    ap.config(essid='sudo_su', authmode=network.AUTH_WPA_WPA2_PSK, password='1234~8765', txpower=2, pm=network.WLAN.PM_POWERSAVE)
    print(ap.ifconfig())
    return ap.active()

def get_content_type(file_path):
    ext = file_path.split('.')[-1].lower()
    content_types = {
        'html': 'text/html; charset=utf-8',
        'htm': 'text/html; charset=utf-8',
        'css': 'text/css; charset=utf-8',
        'js': 'application/javascript; charset=utf-8',
        'json': 'application/json',
        'png': 'image/png',
        'jpg': 'image/jpeg',
        'jpeg': 'image/jpeg',
        'woff': 'woff/fonts',
        'woff2': 'woff/fonts',
        'gif': 'image/gif',
        'ico': 'image/x-icon',
        'svg': 'image/svg+xml',
        'txt': 'text/plain; charset=utf-8'
    }
    return content_types.get(ext, 'text/plain')

@app.route('/')
@app.route('/index.html')
async def index(req, resp):
    await resp.send_file('static/index.html')

@app.route('/<fn>')
async def index(req, resp, fn):
    content_type=get_content_type('{}'.format(fn))
    await resp.send_file('static/{}'.format(fn),
                         content_type=content_type)

@app.route('/assets/<fn>')
async def files_js(req, resp, fn):
    content_type=get_content_type('{}'.format(fn))
    await resp.send_file('static/assets/{}.gz'.format(fn),
                         content_type=content_type,
                         content_encoding='gzip')

async def send_command_to_gen1(command):
    uart.init(9600, 8, None, 1, rx=g1_rx, tx=g1_tx, invert=UART.INV_RX | UART.INV_TX)
    uart.write(command)
    await toggle_ledd()


async def send_command_to_gen2(command):
    uart.init(9600, 8, None, 1, rx=g2_rx, tx=g2_tx, invert=UART.INV_RX | UART.INV_TX)
    uart.write(command)
    await toggle_ledd()

@app.resource('/info', method='GET')
async def battery_info(data):
    volt=float(adc.read_uv())/1000_000 # 2.597
    if volt >= 2.6:
        answer="100"
    elif volt < 2.6 and volt > 2.590:
        answer="50"
    else:
        answer="0"

    yield '{'
    yield '"battery": ' + answer
    # yield f"'battery': {x}"
    yield '}'

async def toggle_ledd():
    led_data.toggle()
    time.sleep_ms(TIME_TOGGLE_DATA_LED)
    led_data.toggle()

@app.resource('/generator-one/command', method='POST')
async def generator_one(data):
    await send_command_to_gen1(data["command"])
    print('generator-one',data["command"])
    yield '"{'
    yield f"'status': 200"
    yield '}"'

@app.resource('/generator-two/command', method='POST')
async def generator_two(data):
    await send_command_to_gen2(data["command"])
    print('generator-two',data["command"])
    yield '"{'
    yield f"'status': 200"
    yield '}"'

def activate_tim0():
    global tim0_is_active
    tim0.init(period=TIME_TOGGLE_WIFI_LED, mode=Timer.PERIODIC, callback=lambda t: led_wifi.toggle() )
    tim0_is_active=True

def deactivate_tim0():
    global tim0_is_active
    tim0.deinit()
    tim0_is_active=False

def check_connection(timer):
    global tim0_is_active
    if ap.isconnected():
        if tim0_is_active:
            deactivate_tim0()
            led_wifi.on()
    else:
        if not tim0_is_active:
            activate_tim0()


def check_led():
    time.sleep_ms(TIME_CHECK_LED)
    led_data.on()
    led_wifi.on()

async def all_shutdown():
    await asyncio.sleep_ms(100)
# if __name__ == '__main__':
try:
    g1_rx = Pin(11)
    g1_tx = Pin(12)
    g2_rx = Pin(10)
    g2_tx = Pin(13)
    ap = network.WLAN(network.AP_IF)
    uart=UART(1)
    tim0_is_active=False
    tim0 = Timer(0)
    tim1 = Timer(1)

    # led_wifi = Pin(1, Pin.OUT, Pin.PULL_UP)
    # led_data = Pin(2, Pin.OUT, Pin.PULL_UP)
    led_data.off()
    led_wifi.off()
    check_led()
    network_up()
    activate_tim0()
    tim1.init(period=TIME_CHECK_WIFI_CONNECTION, mode=Timer.PERIODIC, callback=check_connection)


    print("http://0.0.0.0:80")
    app.run(host='0.0.0.0', port=80)
except KeyboardInterrupt as e:
    print(' CTRL+C pressed - terminating...')
    app.shutdown()
    asyncio.get_event_loop().run_until_complete(all_shutdown())


