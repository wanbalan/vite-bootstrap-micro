import tinyweb 
import uasyncio as asyncio
from random import randint
from uaioftp import uaioftpd
HOST='127.0.0.1'
PORT=8080
# import network
# from machine import Timer, Pin, freq, UART, ADC
    # adc=ADC(Pin(14),atten=ADC.ATTN_11DB)
# 'SOUR1:OUTput on\r\n'
# "SOUR1:APPL:SIN 3333.0e+0,2vpp;:SOUR2:APPL:SIN 122.0e+0,1vpp\r\n"
# "SOUR1:APPL:SIN 3333,1vpp;:SOUR2:APPL:SIN 1033,1vpp\r\n"
# uart.write('OUTput1 1;OUTput2 1\r\n')
# freq(40_000_000)
# tim0 = Timer(0)
# tim0.init(period=5000, mode=Timer.ONE_SHOT, callback=lambda t:print(0))

# tim1 = Timer(1)
# tim1.init(period=2000, mode=Timer.PERIODIC, callback=lambda t:print(1))
app = tinyweb.webserver()
g1_output1=0
g1_output2=0
g2_output1=0
g2_output2=0

async def networkUp():
    ap = network.WLAN(network.AP_IF)
    ap.active(True)
    ap.config(essid='sudo_su', authmode=network.AUTH_WPA_WPA2_PSK, password='1234~8765', txpower=2, pm=network.WLAN.PM_POWERSAVE)
    print(ap.ifconfig())
    return ap.active()

# networkUp()
# Create web server application

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

# Index page
@app.route('/')
@app.route('/index.html')
async def index(req, resp):
    # Just send file
    await resp.send_file('static/index.html')

@app.route('/<fn>')
async def index(req, resp, fn):
    # Just send file
    content_type=get_content_type('{}'.format(fn))
    await resp.send_file('static/{}'.format(fn),
                         content_type=content_type)

@app.resource('/telnet/<fn>', method='GET')
async def telner_manager(data, fn):
    status="200"
    if fn == "start":
        print("telner_manager: ", fn)
    elif fn == "stop":
        print("telner_manager: ", fn)
    else:
        print("telner_manager: ", fn)
        status="400"
                
    yield '{'
    yield '"status": ' + status 
    yield '}'


#JS
@app.route('/assets/<fn>')
async def files_js(req, resp, fn):
    content_type=get_content_type('{}'.format(fn))
    await resp.send_file('static/assets/{}.gz'.format(fn),
                         content_type=content_type,
                         content_encoding='gzip')


async def all_shutdown():
    await asyncio.sleep_ms(100)

async def send_command(command):
    uart.write(command)

@app.resource('/info', method='GET')
async def battery_procentage(data):
    # volt=adc.read_uv()/1000_000 # 2.597
    # if volt >= 2.596:
    #     procentage="100"
    # elif volt < 2.596 and volt > 2.590:
    #     procentage="50"
    # else:
    #     procentage="0"
    procentage="100"
        
    # x=str(randint(0, 100))
    # return {'a': 1}
    yield '{'
    yield '"battery": ' + procentage
    # yield f"'battery': {x}"
    yield '}'


@app.resource('/generator-one/command', method='POST')
async def generator_one(data):
    # uart.init()
    # send_command(data["command"])
    print('generator-one',data["command"])
    x="sdc"
    yield '"{'
    yield f"'status': {x}"
    yield '}"'

@app.resource('/generator-two/command', method='POST')
async def generator_two(data):
    # uart.init()
    # send_command(data["command"])
    print('generator-two',data["command"])
    x="sdc"
    yield '"{'
    yield f"'status': {x}"
    yield '}"'

@app.resource('/ftp/<fn>', method='GET')
async def ftp_manager(data, fn):
    current_loop=asyncio.get_event_loop()
    print("loop: ", current_loop)
    status="200"
    if fn == "start":
        ftpd=uaioftpd()
        current_loop.create_task(asyncio.start_server(ftpd.server, "0.0.0.0", 4444))
        
        # telnet_active=True
    elif fn == "stop":
        pass
            # telnet_active=False
    else:
        print("ftp_manager: ", fn)
        status="400"
                
    yield '{'
    yield '"status": ' + status 
    yield '}'


# if __name__ == '__main__':
try:
    # app.add_resource(SetValue, '/set')
    # uart=UART()
    print(f"http://{HOST}:{PORT}")
    app.run(host=HOST, port=PORT)
except KeyboardInterrupt as e:
    print(' CTRL+C pressed - terminating...')
    app.shutdown()
    asyncio.get_event_loop().run_until_complete(all_shutdown())

