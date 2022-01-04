# Stop-light
a working traffic light at home! 

## Goals
The goals of this project are to create a website with node js that interacts with hardware. I will be using the old traffic light i bought at a garage sale as my hardware. 

## Technologies used 
- Node Js As backend
- Express as middleware
- onoff as IO pins interface
- Raspberry pi as processor and server
- RPi Power Relay Board As Relays 

## Website 
I decided to use Node Js over PHP because i felt that it would interact with the pi hardware better. I sent over a static web page to the client and updated the light status with async get method inside a game loop. Each button corresponds to a light. Clicking a button toggles its light.

### lights Off
[Website Lights are off](/Images/Website01.jpg)

[Hardware Lights are off](/Images/Trafic-light01.jpg)

### First two lights on
[Website Lights are on](/Images/Website02.jpg)

[Hardware Lights are on](/Images/Trafic-light02.jpg)


## Hardware 
The traffic light i got was in bad shape. Initially it was wired in series going from power to the lights directly and most of the wires were chewed and needed to be replaced.

[Old Bad Wiring](/Images/Old-wiring01.jpg)

[Old Wiring view](/Images/Old-wiring02.jpg)

I mocked up a own wiring diagram and got to work rewiring and replacing the chewed wires. 

[wiring diagram](/Images/wiring-diagram.png)

I used pins 20, 21 and 26 on the pi to trigger relay switches that sat on top of the pi as a hat module. Once the wiring was working as intended I mounted the pi and hat module inside the traffic light. The hat module was quite difficult to work with. I bought the <a href="https://www.amazon.com/Electronics-Salon-Power-Expansion-Module-Raspberry/dp/B07CZL2SKN/ref=sr_1_2_sspa?keywords=raspberry+pi+relay+hat&qid=1641308728&sr=8-2-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzUjBPUTZHVkwyT0RSJmVuY3J5cHRlZElkPUEwMTAzNDgwTUpOMTRCU0ZMQ1JJJmVuY3J5cHRlZEFkSWQ9QTA0Mjk2MjMxQjgxWVE0NTRVTDZRJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ=="> Electronics-Salon RPi Power Relay Board Expansion Module </a> witch was rated for 10Amp/250VAC, I thought I wouldn't have a problem with it given the voltage overhead but the screws could not hold in my 12 gage wire stably. moving forward should I ever need to replace the Relays I will go with a more robust board.  