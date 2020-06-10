class Clock extends HTMLElement {
    // Checking changes 
    static get observedAttributes() {        
        return ["Country","city", "time"]
    }
    // get Data
    getData(date) {
        return `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`
    }
    // start constructor
    constructor() {
        super()

        // root
        const shdow = this.attachShadow({ mode: 'open' })

        // div
        this.div=document.createElement('div')
        shdow.appendChild(this.div)

        this.Country=document.createElement('h1')
        this.cityH1=document.createElement('h1')
        this.timeDiv=document.createElement('div')

        this.div.appendChild(this.Country)
        this.div.appendChild(this.cityH1)
        this.div.appendChild(this.timeDiv)

        // checkup loop for the time
        setInterval(()=>{
            let getTime=new Date()
            getTime.setHours(getTime.getHours()+this.time)
            this.timeDiv.innerHTML=this.getData(getTime)
            this.Country.innerHTML=this.getAttribute('Country')
        },100);
        

    }
    // end constructor
    // Act on change in observedAttributes 
    attributeChangedCallback(name,oldValue,newValue){
        this.cityH1.innerHTML=this.getAttribute('city')
        
        // console.log(this.Country.innerHTML=this.getAttribute('Country'));
        
        if(name=="time"){
            this.time=parseInt(newValue)
        }
    }

}
customElements.define('clock-number',Clock)