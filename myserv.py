import tinyweb
# import network
# from machine import Timer, Pin, freq

# freq(40_000_000)
# tim0 = Timer(0)
# tim0.init(period=5000, mode=Timer.ONE_SHOT, callback=lambda t:print(0))

# tim1 = Timer(1)
# tim1.init(period=2000, mode=Timer.PERIODIC, callback=lambda t:print(1))
def networkUp():
    ap = network.WLAN(network.AP_IF)
    ap.active(True)
    ap.config(essid='sudo_su', authmode=network.AUTH_WPA_WPA2_PSK, password='1234~8765', txpower=2, pm=network.WLAN.PM_POWERSAVE)
    print(ap.ifconfig())
    return ap.active()

# networkUp()
# Create web server application
app = tinyweb.webserver()

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

#JS
@app.route('/assets/<fn>')
async def files_js(req, resp, fn):
    content_type=get_content_type('{}'.format(fn))
    await resp.send_file('static/assets/{}.gz'.format(fn),
                         content_type=content_type,
                         content_encoding='gzip')


async def all_shutdown():
    await asyncio.sleep_ms(100)

@app.resource('/set', method='POST')
async def user(data):
    print(data["data"])
    x="sdc"
    # return ("{'sdcsd': 'sdc'}")
    yield '"{'
    yield f"'id': {x}"
    yield '}"'

class SetValue():

    def post(self, data):
        """Add customer"""
        print("data from set: ", data)
        print("after")
        # Return message AND set HTTP response code to "201 Created"
        return {"message": "created"}, 200


# if __name__ == '__main__':
try:
    # app.add_resource(SetValue, '/set')
    # app = tinyweb.webserver()
    print("http://localhost:8080")
    app.run(host='127.0.0.1', port=8080)
except KeyboardInterrupt as e:
    print(' CTRL+C pressed - terminating...')
    app.shutdown()
    uasyncio.get_event_loop().run_until_complete(all_shutdown())

