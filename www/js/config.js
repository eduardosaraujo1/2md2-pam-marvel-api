// TODO: This is logic for the screen to input priv and pub keys. Also, here is code to check if the pub and priv key are invalid, disable the form fieldset and the submit button
const DEFAULT_PUB_KEY = 'e564c68db076bb8698379be85477a438';
const publicKey = () => localStorage.getItem('pubkey');
const privateKey = () => localStorage.getItem('privkey');

function overrideInputs() {
    const pubInput = document.getElementById('pubKey');
    const privInput = document.getElementById('privateKey');
    pubInput.value = publicKey();
    privInput.value = privateKey();
}

function saveConfigs() {
    function validateKey(key) {
        return /^[0-9a-f]*$/.test(key);
    }
    const pubKeyElement = document.getElementById('pubKey');
    const pubKeyText = pubKeyElement.value;
    const pubKey = pubKeyText.toLowerCase().trim();

    const privKeyElement = document.getElementById('privateKey');
    const privKeyText = privKeyElement.value;
    const privKey = privKeyText.toLowerCase().trim();

    if (validateKey(pubKey) && validateKey(privKey)) {
        localStorage.setItem('pubkey', pubKey);
        localStorage.setItem('privkey', privKey);
        writeConfigMessage('Salvo com sucesso!', 'green');
    } else {
        writeConfigMessage('Erro: chave inválida', 'red');
    }
}

function writeConfigMessage(msg, color) {
    const msgContainer = document.querySelector('#configMessage');
    msgContainer.innerHTML = msg;
    msgContainer.style.color = color;
}

function filterKeyPressHexOnly(event) {
    const key = event.key || '0';
    const validChar = /^[0-9a-f]/.test(key);
    if (!validChar) {
        return false;
    }
}
