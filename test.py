
import network, utelnetserver
def network_up():
    ap.active(True)
    ap.config(essid='sudo_su', authmode=network.AUTH_WPA_WPA2_PSK, password='1234~8765', txpower=2, pm=network.WLAN.PM_POWERSAVE)
    print(ap.ifconfig())
    return ap.active()
ap = network.WLAN(network.AP_IF)
network_up()

