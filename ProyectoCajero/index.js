const cuentas = [
    { nombre: "Abril", saldo: 200, password: '123' },
    { nombre: "Lourdes", saldo: 290, password: 'l33t' },
    { nombre: "María", saldo: 67, password: '345' }
]

const store = {
    selectedAccount: cuentas[0],
}

function mostrarInicio() {
    const appEl = document.getElementById("app");
    const contentEl = document.createElement ("div");
    appEl.appendChild(contentEl);

    // mostrar mensaje de bienvenida
    const welcomeMessageEl = document.createElement("h1");
    welcomeMessageEl.innerText = "Bienvenido al banco su casa";
    contentEl.appendChild(welcomeMessageEl);

    // mostrar combo box y agregar la info de las cuentas

    // crear select, crear opciones y agrear opciones al select
    const selectAccountEl = document.createElement("select");

    cuentas.forEach((cuenta) => {
        var option = document.createElement("option");
        option.value = cuenta.nombre;
        option.text = cuenta.nombre;
        selectAccountEl.appendChild(option);
    });

    selectAccountEl.addEventListener('change', (evento) => {
        const accountName = evento.target.value;

        let selectedAccount;

        for (let i = 0; i < cuentas.length; i++) {
            const currentAccount = cuentas[i];
            if (currentAccount.nombre === accountName) {
                selectedAccount = currentAccount;
                break;
            }
        }

        store.selectedAccount = selectedAccount;
    });

    contentEl.appendChild(selectAccountEl);

    // mostrar botón de siguiente
    const nextbuttonEl = document.createElement("button");
    nextbuttonEl.innerText = "Siguiente";
    nextbuttonEl.addEventListener ("click", () =>{
        clearWindow();
        mostrarLogin();
    });
    contentEl.appendChild(nextbuttonEl);

}

mostrarInicio();
// mostrarLogin()

function mostrarLogin() {
    const appEl = document.getElementById("app");
    const contentEl = document.createElement ("div");
    appEl.appendChild(contentEl);

    // crear mensaje de bienvenida y el nombre de la persona que ingreso
    const bienvenidaUsuarioEl = document.createElement("h1");
    bienvenidaUsuarioEl.innerText = "Bienvenido a tu cuenta " + store.selectedAccount.nombre;
    contentEl.appendChild(bienvenidaUsuarioEl);

    // mostrar cuadro de contraseña
    const passwordLabelEl = document.createElement ("label");
    passwordLabelEl.innerText = "Ingresa tu contraseña";
    contentEl.appendChild(passwordLabelEl);
    const passwordInputEl = document.createElement ("input");
    passwordInputEl.setAttribute("type", "password");
    let userPassword;
    passwordInputEl.setAttribute ("id" , "inputPassword");
    contentEl.appendChild(passwordInputEl);

    // mensaje de error
    const errorMessageEl = document.createElement ("span")
    errorMessageEl.innerText = "Datos incorrectos";
    contentEl.appendChild(errorMessageEl);

    // boton de regreso
    const backButtonEl = document.createElement("button");
    backButtonEl.innerText = "Regresar";
    contentEl.appendChild(backButtonEl);
    backButtonEl.addEventListener ("click" , () =>{
        clearWindow();
        mostrarInicio();
    })

    // boton de ingreso
    const loginButtonEl = document.createElement("button");
    loginButtonEl.innerText = "Ingresar";
    loginButtonEl.addEventListener("click", () => {
        // 1. Obtener la contraseña del usuario
        const currentPasswordEl = document.getElementById("inputPassword");
        const currentPassword = currentPasswordEl.value;

        // 2. Comparar la contraseña del usuario con la contraseña
        //    de la cuenta seleccionada
        if (store.selectedAccount.password == currentPassword){
            // Si es válido, cambiar de pantalla
            clearWindow();
            mostrarOpciones();
        } else { 
            // Si no es válido, mostrar mensaje de error
            console.log('Contraseña inválida')
            
        }
    });
    contentEl.appendChild(loginButtonEl);
}

// funcion para borrar toda la pantalla
function clearWindow (){
    const appEl = document.getElementById ("app");
    appEl.firstChild.remove();
}


// funcion para mostrar opciones 
function mostrarOpciones (){
    const appEl = document.getElementById ("app");
    const contentEl = document.createElement ("div");
    appEl.appendChild(contentEl);

    const selectOptionEl = document.createElement ("h1");
    selectOptionEl.innerText = "Selecciona una de las siguientes opciones";
    contentEl.appendChild(selectOptionEl);

    // Agregar boton de consultar saldo 
    const ConsuSaldoBtn = document.createElement("button");
    ConsuSaldoBtn.innerText = "Consultar Saldo";
    contentEl.appendChild(ConsuSaldoBtn);
    ConsuSaldoBtn.addEventListener("click", () =>{
        consultarSaldo();
    })

// Agregar boton de ingresar monto
    const InMontoBtn = document.createElement("button");
    InMontoBtn.innerText = "Ingresa Monto";
    contentEl.appendChild(InMontoBtn);
    InMontoBtn.addEventListener("click", () =>{
        clearWindow();
    })

// agregar boton de retirar monto
    const RetiMontBtn = document.createElement("button");
    RetiMontBtn.innerText = "Retirar Monto";
    contentEl.appendChild(RetiMontBtn);
    RetiMontBtn.addEventListener("click", () =>{
        clearWindow();
    })

    // agregar boton de salir
    const Salirbtn = document.createElement("button");
    Salirbtn.innerText = "Salir";
    contentEl.appendChild(Salirbtn);
    Salirbtn.addEventListener("click", () =>{
        clearWindow();
        mostrarInicio();
    })

}

// funcion para consultar saldo
function consultarSaldo (){
    const appEl = document.getElementById ("app");
    const contentEl = document.getElementById ("div");
    appEl.appendChild (contentEl);

    const saldoActualEl = document.createElement ("h1");
    saldoActualEl.innerText = "Tu saldo actual es:";
    contentEl.appendChild (saldoActualEl);

    // boton de regresar
    const botonRegresarEl = document.createElement("button");
    botonRegresarEl.innerText = "Regresar";
    contentEl.appendChild(botonRegresarEl);
    botonRegresarEl.addEventListener ("click" , () =>{
        clearWindow();
        mostrarOpciones();
    })

// boton de salir
    const exitBtnEl = document.createElement("button");
    exitBtnEl.innerText = "Salir";
    contentEl.appendChild(exitBtnEl);
    exitBtnEl.addEventListener("click", () =>{
        clearWindow();
    })
}

// funcion para ingresar monto
function ingresarMonto (){
    const appEl = document.getElementById ("app");
    
}



// boton de depositar


// boton para salir 


// boton para cancelar





// funcion para retirar monto




// boton de retirar



// boton de salir


// boton de cancelar



