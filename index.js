function Watch() {

    let secCount=1,running,sec=0,hr=0,min=0,dhr='00',dmin="00",dsec="00";
    let timerId;

    this.start= function() {
        if(running) {
            throw new Error("Already running");
        }
        running= true;
        if(secCount===1) {
            dsec='01';
            display();
        }
        console.log("Go...");
        timerId= setInterval(incrementer,1000);
    },

    this.stop= function() {
        if(!running) {
            throw new Error("Clock is not running");
        }
        running= false;
        console.log("...Stop")
        clearInterval(timerId);
    },

    this.reset= function() {
        if(running) {
            this.stop()
            hr=0;
            sec=0;min=0;dhr='00';dmin="00";dsec="00";
            running=false;
            secCount=1;
            display()
        }
        if(!running){
            hr=0;
            sec=0;min=0;dhr='00';dmin="00";dsec="00";
            running=false;
            secCount=1;
            display()
        }
    }

    function incrementer() {
        secCount+=1;
        if(secCount>=60) {
            min+=1;
            secCount=0;
            if(min>=60) {
                hr+=1;
                min=0;
            }
        }
        else sec=secCount;
        display()
        // if(hr<10 && hr>0) dhr='0'+hr; else if(hr>=10) dhr=hr; 
        // if(min<10 && min>0) dmin='0'+min; else if(min>=10) dmin=min; 
        // if(sec<10 && sec>0) dsec='0'+sec; else if(sec>=10) dsec=sec; 
        // document.getElementById("hour").innerHTML=dhr
        // document.getElementById("minute").innerHTML=dmin
        // document.getElementById("second").innerHTML=dsec
    }

    function display() {
        if(hr<10 && hr>0) dhr='0'+hr; else if(hr>=10) dhr=hr; 
        if(min<10 && min>0) dmin='0'+min; else if(min>=10) dmin=min; 
        if(sec<10 && sec>0) dsec='0'+sec; else if(sec>=10) dsec=sec; 
        document.getElementById("hour").innerHTML=dhr
        document.getElementById("minute").innerHTML=dmin
        document.getElementById("second").innerHTML=dsec
    } 

    Object.defineProperty(this,'display',{
        get: function() {
            return display;
        }
    })
}

const Stopwatch = new Watch();