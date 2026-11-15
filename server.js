const path = require('path');
const mongoose = require('mongoose');
const session = require('express-session');
const nodemailer = require('nodemailer');

require('dotenv').config();


const PORT = process.env.PORT || 3000;

// ==========================================
// MIDDLEWARES
// MIDDLEWARES E CONFIGURAÇÕES
// ==========================================


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ==========================================
// CONFIGURAÇÃO DA SESSÃO

  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    secure: false, // Desenvolvimento local com HTTP
    secure: false, // Alterar para true se usar HTTPS estrito no Render (opcional)
    sameSite: 'lax',
    maxAge: 1000 * 60 * 60 // 1 hora
  }
}));

// ==========================================
// CONEXÃO COM O MONGODB
// ==========================================

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// CONECTA O SERVIDOR NODE.JS AO BANCO DE DADOS MONGODB
const mongoURI = process.env.MONGO_URI || 'mongodb+srv://nandohanauer01_db_user:mongoBanco25@cluster0.fbgabq9.mongodb.net/Formulario?retryWrites=true&w=majority';

// ==========================================
// ARQUIVOS ESTÁTICOS
// ==========================================

app.use(express.static(path.join(__dirname, 'public')));

// ==========================================
// PÁGINAS
// CONEXÃO COM O MONGODB ATLAS
// ==========================================

const mongoURI = process.env.MONGO_URI || 'mongodb+srv://nandohanauer01_db_user:mongoBanco25@cluster0.fbgabq9.mongodb.net/Formulario?retryWrites=true&w=majority';

// ==========================================
// PÁGINAS (ROTA RAIZ E ESTÁTICOS)
// PÁGINAS (ROTA RAIZ)
// ==========================================

// Força o index.html da raiz da pasta public a abrir em localhost:3000
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

/*app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


app.get('/', (req, res) => {
  res.sendFile(
    path.join(__dirname, 'public', 'inicio', 'inicio.html')
  );
});

app.get('/cadastro', (req, res) => {
  res.sendFile(
    path.join(__dirname, 'public', 'cadastro', 'cadastro.html')
  );
}); */

// ==========================================
// CADASTRO DE MEMBROS
// ==========================================

// ==========================================

async function gerarCustomId() {
  const ultima = await Administrador.findOne()
    .sort({ customId: -1 });

  const ultima = await Administrador.findOne().sort({ customId: -1 });
  return ultima ? ultima.customId + 1 : 1;
}



    const customId = await gerarCustomId();

    // Cria o objeto apenas com nome e senha (celular assume o default do schema)
    const administrador = new Administrador({
      customId,
      nome,

// ==========================================

async function processarLoginAdmin(req, res) {
  const usuario = String(
    req.body.usuario ?? req.body.nome ?? ''
  ).trim();

  const usuario = String(req.body.usuario ?? req.body.nome ?? '').trim();
  const senha = String(req.body.senha ?? '');

  if (!usuario || !senha) {

  }

  try {
    const administrador = await Administrador.findOne({
      nome: usuario
    });
    const administrador = await Administrador.findOne({ nome: usuario });

    if (!administrador || administrador.senha !== senha) {
      return res.status(401).json({

    req.session.regenerate((erro) => {
      if (erro) {
        console.error('Erro ao criar sessão:', erro);
        return res.status(500).json({
          message: 'Erro ao iniciar a sessão.'
        });
        return res.status(500).json({ message: 'Erro ao iniciar a sessão.' });
      }

      req.session.adminId = administrador.customId;

      req.session.save((erroSalvar) => {
        if (erroSalvar) {
          console.error('Erro ao salvar sessão:', erroSalvar);
          return res.status(500).json({
            message: 'Erro ao salvar a sessão.'
          });
          return res.status(500).json({ message: 'Erro ao salvar a sessão.' });
        }

        return res.status(200).json({


  } catch (error) {
    console.error('Erro no login do administrador:', error);
    res.status(500).json({
      message: 'Erro interno no servidor.'
    });
    res.status(500).json({ message: 'Erro interno no servidor.' });
  }
}

app.post('/login', processarLoginAdmin);
app.post('/Administrador_Login', processarLoginAdmin);

function verificarSessaoAdministrador(req, res) {
  const logado = Boolean(
    req.session && req.session.adminId
  );

  const logado = Boolean(req.session && req.session.adminId);
  return res.status(200).json({
    logado: logado,
    nome: logado ? req.session.adminNome : null

  }
});

// ==========================================
// ENVIO DE E-MAIL (NODEMAILER)
// ==========================================


const nodemailer = require('nodemailer');

// Configure o transportador de e-mail (Exemplo com Gmail)
// Dica: Se usar Gmail, você precisará gerar uma "Senha de App" (App Password) nas configurações da sua Conta Google.
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'cristaodejesus33@gmail.com',      // Coloque o seu e-mail aqui
    pass: 'ipbbrasil'    // Coloque a sua senha de aplicativo do Gmail
    user: process.env.EMAIL_USER || 'cristaodejesus33@gmail.com',
    pass: process.env.EMAIL_PASS || 'sua_senha_de_aplicativo_aqui'
  }
});

// Rota para disparar o e-mail do formulário
app.post('/api/enviar-email', async (req, res) => {
  const { email, subject, message, link } = req.body;

  }

  const mailOptions = {
    from: 'seu-email@gmail.com',
    from: process.env.EMAIL_USER || 'cristaodejesus33@gmail.com',
    to: email,
    subject: subject,
    text: `${message}\n\nLink de acesso:\n${link}`,

  }
});




// INICIA O SERVIDOR APÓS GARANTIR A CONEXÃO COM O MONGODB
const PORT = process.env.PORT || 3000;
// ==========================================
// INICIALIZAÇÃO DO SERVIDOR E CONEXÃO MONGODB
// ==========================================

mongoose.connect(mongoURI)
  .then(() => {
    console.log('MongoDB Atlas conectado com sucesso!');
    app.listen(PORT, '0.0.0.0', () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Erro ao conectar ao MongoDB:', err);
  });
