const getInputs = container => [...container.querySelectorAll('.input')];

//Get all fieldsets within the form element

const getFieldsets = container => [...container.querySelectorAll('fieldset')];

//Get an Array with the distance of each fieldset element to apply a margin
const getArrayOfMargins = (fieldsetsContainer) => {
    return getFieldsets(fieldsetsContainer).map((fieldset, i) => fieldset.offsetHeight * i);

};



// Apply or add .focus class according if a element gain or loss its focus.
let inpustEvent = container => {

    getInputs(container).map(input =>{
    input.addEventListener("focusin" , e => {
        let inputParent = e.target.parentElement;

            if(!inputParent.classList.contains('focus')){
                inputParent.classList.add('focus');
            }
        });
        input.addEventListener("blur", e => {
            let inputParent = e.target.parentElement;
            if(input.required){
                if(e.target.value == ""){
                    inputParent.classList.replace('focus' , 'error');
                } else {
                    inputParent.classList.remove('error');
                }
            } else {
                if (e.target.value == "") {
                    inputParent.classList.remove('focus');
                }
            }

        });
        input.addEventListener('keydown' , e => {

            if(e.key === "Enter" || e.key === "Tab") {
                e.preventDefault();
                if (e.key === "Enter" ) {
                     container.querySelectorAll('.next')[0].click();
                }

            }
        });


    });
};
//Add function Navegation Prev and Next fr the fieldsets elements

let formNavigation = (buttonsContainer, fieldsetsContainer, progressBarContainer,i) => {
    let margins = getArrayOfMargins(fieldsetsContainer),
        margin,
        progressBarItems = [...progressBarContainer.querySelectorAll('li')];


    buttonsContainer.addEventListener("click" , e =>{

        e.preventDefault();

        let el = e.target,
            getFieldsetsLenght = getFieldsets(fieldsetsContainer).length;

        if(el.tagName === "BUTTON") {

            if (el.classList.contains("prev")) {



                        if (i > 0) {
                            margin = -margins[i-1];
                            i--;
                        } else {
                            i =0;
                        }

                        fieldsetsContainer.style.marginTop = margin + "px";



            } else if (el.classList.contains("next") ){

                if (formValidation(i, fieldsetsContainer, progressBarContainer)) {

                    if (i == (getFieldsetsLenght - 1) ) {

                       // margin = margins[0];
                        i = (getFieldsetsLenght - 1);
                        document.querySelectorAll('.submit-button')[0].classList.add('active');

                    } else {

                        margin = -margins[i+1];
                        i++;

                    }

                }
                fieldsetsContainer.style.marginTop = margin + "px" ;
            }

        }
        progressBarItems.forEach(element => {
            if (progressBarItems[i] === element){
                element.classList.add('current');
                if(element.classList.contains('complete')){
                    element.classList.remove('current');
                }
            } else {
                element.classList.remove('current');
            }

        });
    });
    progressBar(progressBarContainer, fieldsetsContainer);

};


