import asyncio


async def hello():
    print("task")
    await asyncio.sleep(3)
    l=asyncio.get_running_loop()
    print("task..")
    
async def hello2():
    print("task2")
    await asyncio.sleep(2)
    task1.cancel()
    print("task2..")
    await asyncio.sleep(3)
    



l=asyncio.get_event_loop()
hello=hello()
hello2=hello2()
task1=l.create_task(hello)
task2=l.create_task(hello2)
l.run_forever()
