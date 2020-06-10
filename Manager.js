class Manager extends HTMLElement {

    // start constructor
    constructor() {
        super()
        // root
        const shdow = this.attachShadow({ mode: "open" })
        // start create Elements

        // divs
        this.div1 = document.createElement("div")
        this.div2 = document.createElement("div")
        this.div3 = document.createElement("div")

        // insart the divs to the shdow
        shdow.appendChild(this.div1)
        shdow.appendChild(this.div2)
        shdow.appendChild(this.div3)

        // inputs and labels
        this.labelCity = document.createElement("label")
        this.labelCity.innerHTML = "city"
        this.inputCity = document.createElement("input")

        this.labelTime = document.createElement("label")
        this.labelTime.innerHTML = "time"
        this.inputTime = document.createElement("input")
        // end create Elements

        // insart the elements to the divs
        this.div1.appendChild(this.labelCity)
        this.div1.appendChild(this.inputCity)

        this.div2.appendChild(this.labelTime)
        this.div2.appendChild(this.inputTime)
        // 
        // select element, for Country
        this.select=document.createElement('select')
        
        shdow.appendChild(this.select)

        // put options in select

        this.option1=document.createElement('option')
        this.option2=document.createElement('option')
        this.option3=document.createElement('option')

        this.option1.innerHTML="a"
        this.option2.innerHTML="b"
        this.option3.innerHTML="c"


        this.select.appendChild(this.option1)
        this.select.appendChild(this.option2)
        this.select.appendChild(this.option3)

        // to action
        // Catch the element clock-manager in the html
        let Catch = this.getAttribute('slactor')
        // conecting the clock-manager to the clock-number
        this.clockNumber = document.querySelector(Catch)

        

        // conecting the inputs to the elements of clock-number
        this.inputCity.oninput = ev => {
            this.clockNumber.setAttribute('city', ev.target.value)
        }
        this.inputTime.oninput = ev => {
            this.clockNumber.setAttribute('time', ev.target.value)
        
            
        }
        this.select.onchange = ev =>{
            this.clockNumber.setAttribute('Country',this.select.selectedOptions[0].innerHTML)
            console.log(this.select.selectedOptions[0].innerHTML);
            
            
        }
        
    }// end constructor
}
// // conecting class manager to element clock-manager in the html
customElements.define('clock-manager', Manager)