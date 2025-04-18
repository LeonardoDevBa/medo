const nome = document.getElementById('txt');
const btn = document.getElementById('btn');
const resp = document.getElementById('resp');

btn.addEventListener('click', iniciarPerguntas);

function iniciarPerguntas() {
    if (nome.value.trim() === '') {
        resp.innerHTML = '<p style="color: red;">Por favor, digite seu nome!</p>';
        return;
    }

    resp.innerHTML = `<p style="color: gray;">Olá, ${nome.value}!</p>`;
    
    const principal = document.getElementById('principal');
    principal.innerHTML = `
    <input type="text" id="medoInput" placeholder="Qual é o seu maior medo?">
    <button id="medoBtn">Responder</button>
    `;
    
    const medoInput = document.getElementById('medoInput');
    const medoBtn = document.getElementById('medoBtn');
    
    medoBtn.addEventListener('click', () => {
        if (medoInput.value.trim() === '') {
            document.body.style.backgroundImage = "url('https://github.com/LeonardoDevBa/medo/blob/main/files/%F0%9D%90%80%F0%9D%90%8B%F0%9D%90%88%F0%9D%90%80%F0%9D%90%92%20%E1%8F%90%20%F0%9D%95%B2%F0%9D%90%AB%F0%9D%90%9A%F0%9D%90%A9%F0%9D%90%A1%F0%9D%90%A2%F0%9D%90%9C%20%F0%9D%95%BB%F0%9D%90%A8%F0%9D%90%AB%F0%9D%90%AD%F0%9D%90%9F%F0%9D%90%A8%F0%9D%90%A5%F0%9D%90%A2%F0%9D%90%A8.gif')";
            document.body.style.backgroundSize = "cover";
            document.body.style.backgroundRepeat = "no-repeat";
            resp.innerHTML = '<p style="color: red;">Por favor, responda à pergunta.</p>';
        } else {
            const medoUsuario = medoInput.value.charAt(0).toUpperCase() + medoInput.value.slice(1);
            document.body.style.backgroundImage = "url('files/download (5).gif')";
            document.body.style.backgroundSize = "cover";
            document.body.style.backgroundRepeat = "no-repeat";
            resp.innerHTML = `<p style="color: gray;">Então ${nome.value}, estamos indo atrás de você junto com seu maior medo, agora eu e o ${medoUsuario} somos amigos, e vamos te pegar!.</p>`;
        }
    });
}