// ==================== CONFIGURACIÓN (personaliza aquí) ====================
const CONFIG = {
  startDate: new Date(2024, 7, 10, 0, 0, 0),
  welcomeText: 'Para ti mi amorcito con todo mi corazón 💕',
  soundPopUrl: '',
  backgroundMusicTracks: [
    'music/100 Conmigo.mp3'
  ]
};

// ==================== LISTA DE MENSAJES ====================
const MENSAJES = [
  { type: 'text', content: '❤️ A veces pienso en todo lo que hemos vivido, y me doy cuenta de que contigo cualquier dia es bonito como tu. No sé cómo lo haces, pero eres la persona con quien quiero compartir el ultimo dia de mi vida. Te amo mucho mucho ❤️. ' },
  { type: 'text', content: 'La distancia no es tan bonita como tu, pero sería mucho peor no tenerte en mi vida. Así que prefiero extrañarte sabiendo que existes, que me esperas y que yo te espero. Cada día que pasa es un día menos para vernos y poder estar juntitos y cerquita ❤️.' },
  { type: 'text', content: 'Quiero que sepas que no hay nadie con quien me ría igual, con quien tenga tantas ganas de contarlo todo ni con quien me sienta tan bien. Eres mi persona. Gracias por aguantarme, por elegirme y por hacer que crea en el amor ❤️.' },
  { type: 'text', content: 'Hay días en que solo quiero estar cerquita tuyo sin hacer nada, quisiera verte, escucharte, abrazarte. Donde sea que estés, llevas un pedazo de mi corazón. Te amo con toda mi vida ❤️.' },
  { type: 'text', content: 'Aunque no podamos estar juntitos ahora, cada palabra tuya me llega al corazon. Cada buenas noches mi amorcito, cada te amo, cada foto o cada mensaje voz me recuerdan por qué te elegí a ti. tú lo vales todo . Y quiero seguir eligiéndote todos los días ❤️.' },
  { type: 'text', content: '❤️ Eres la primera persona a la que quiero contarle las cosas buenas y la que me hace fuerte cuando las cosas no salen bien. Contigo aprendí que el amor no es solo estar juntos: es estar aunque no estemos. Gracias por estar.' },
  { type: 'text', content: 'No importa si es de mañana, de tarde o de noche: cuando pienso en ti sonrio y me alegro mucho mucho. Me haces creer que un amor así es posible y que la paciencia vale la pena. Quiero construir algo lindo contigo, pasitio a pasito. Te amo mi amorcito.' },
  { type: 'text', content: 'Sé que a veces es difícil, que extrañamos y que duele. Pero también sé que cuando por fin nos veamos va a valer cada segundo de espera. Tú eres la razón por la que me levanto todas las mañanas ❤️.' },
  { type: 'text', content: 'Gracias por ser quien eres: por tu forma de hablar, de reír, de escucharme y de quererme. No cambio lo que tenemos por nada. Contigo quiero ver atardeceres, viajar, reírnos y seguir creciendo. Te amo hoy y siempre.' },
  { type: 'text', content: 'A veces solo quiero decirte que te extraño, que te amo y que eres la persona más importante en mi vida. Que aunque estemos lejos, en mi cabeza y en mi corazón estás cerquita. Eres mi hogar sin importar donde estes ❤️.' },
  { type: 'text', content: 'Cada día que paso contigo, me convence más de que elegí bien. Quiero que sepas que estoy aquí, que te apoyo, que te quiero y que no pienso soltarte nunca nunca. Eres mi persona favorita ❤️.' },
  { type: 'text', content: 'Hay cosas que solo tú entiendes de mí, y eso me hace sentir seguro. Contigo puedo ser yo mismo. Gracias por aceptarme, por quererme y por hacer este amor incondicional que me das espero algun dia compensarte todo lo que haces por mi. Te amo con todo mi corazón ❤️.' },
  { type: 'text', content: 'No hay palabras que alcancen para decir todo lo que siento por ti. Pero quiero que nunca olvides que eres especial, que me haces feliz y que mi vida tiene más sentido desde que estás conmigo. Te amo muchito ❤️.' },
  { type: 'text', content: 'La distancia nos enseñó a valorar cada mensaje, cada llamada y cada momento. Contigo aprendí que el amor no tiene fronteras ni horarios. Eres mi refugio, mi alegría y mi paz. Gracias por existir y por estar conmigo.' },
  { type: 'text', content: 'Quiero que sepas que pienso en ti todos los dias a todas horas. Que te extraño cuando no hablamos y que me haces falta todos los dias. Eres la persona con la que quiero compartir toda mi vida ❤️.' },
  { type: 'text', content: 'La vida sin ti, Una guitarra sin cuerda, Un mechero sin piedra , Un vuelo bajo el mar -- La Vida Sin Ti' },
  { type: 'text', content: 'Voy a buscarte lejos de cualquier lugar, Vos marcá el sendero, yo camino atrás, ¿Qué veo cuando miro tu nombre en la ciudad?, Puedo sentirte cerca, hasta cuando no estás. -- Buscarte lejos' },
  // ——— Mensajes cortos (puedes mezclar o dejar solo los largos) ———
  { type: 'text', content: 'Lo que sea, pero que sea contigo -- Romeo y Julieta' },
  { type: 'text', content: 'Cupido conmigo no usó la flecha, me entró un par de tiro -- 100 Conmigo' },
  { type: 'text', content: 'El destino nos vio tan pegados, se puso envidioso -- Buscarte lejos' },
  { type: 'text', content: 'Cupido conmigo no uso la flecha, me entró un pal de tiros -- 100 Conmigo' },
  { type: 'text', content: 'No pido mucho solamente keep it a hundred conmigo -- 100 Conmigo' },
  { type: 'text', content: 'Te extraño incluso cuando acabamos de hablar ❤️.' },
  { type: 'text', content: 'Eres mi persona favorita en todo el mundo ❤️.' },
  { type: 'text', content: 'Te amo desde Chile hasta Brasil y más allá.' },
  { type: 'text', content: 'Eres el "para siempre" que siempre quise.' },
  { type: 'text', content: 'Gracias por existir y por estar en mi vida.' },
  { type: 'text', content: 'Te amo de aqui a la luna en pasitos de tortuga 🐢' },
  // Mensajes con imagen (cambia 'image' por la URL de tu foto)
  { type: 'image', content: 'Cada salida contigo es especial, te amo demasiado mi amorcito.', image: 'fotos/9.jpeg' },
  { type: 'image', content: 'Eres mi persona favorita en cualquier foto. No te cambaria por nada en el mundo mi amorcito.', image: 'fotos/4.jpe' },
  { type: 'image', content: 'Cada recuerdo contigo es un tesoro que guardo en el corazón.', image: 'fotos/8.jpe' },
  { type: 'image', content: 'Estamo como a 2.300 kilometros de distancia pero te sigo amando como si no lo fuera', image: 'fotos/6.jpe' },
];

let mensajesUsados = [];
let backgroundAudio = null;
let backgroundMusicStarted = false;

function createParticles() {
  const container = document.getElementById('particles');
  const count = 25;
  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.className = 'particle ' + (i % 3 === 0 ? 'bubble' : 'star');
    p.style.left = Math.random() * 100 + '%';
    p.style.animationDuration = (8 + Math.random() * 12) + 's';
    p.style.animationDelay = Math.random() * 5 + 's';
    container.appendChild(p);
  }
}

function updateCounter() {
  const start = CONFIG.startDate.getTime();
  const now = Date.now();
  const diff = Math.max(0, now - start);
  const days = Math.floor(diff / (24 * 60 * 60 * 1000));
  const hours = Math.floor((diff % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
  const minutes = Math.floor((diff % (60 * 60 * 1000)) / (60 * 1000));
  document.getElementById('counter').innerHTML =
    '<strong>' + days + '</strong> días, <strong>' + hours + '</strong> horas, <strong>' + minutes + '</strong> minutos';
}

document.getElementById('welcome').textContent = CONFIG.welcomeText;

function playJarOpenSound() {
  if (CONFIG.soundPopUrl) {
    const audio = new Audio(CONFIG.soundPopUrl);
    audio.volume = 0.6;
    audio.play().catch(function() {});
    return;
  }
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.frequency.setValueAtTime(600, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(200, ctx.currentTime + 0.08);
    osc.type = 'sine';
    gain.gain.setValueAtTime(0.15, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.15);
    var start = function() {
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.15);
    };
    if (ctx.state === 'suspended') ctx.resume().then(start);
    else start();
  } catch (e) {}
}

const musicPanel = document.getElementById('musicPanel');
const musicToggle = document.getElementById('musicToggle');
const nowPlayingEl = document.getElementById('nowPlaying');

function getRandomTrack() {
  var list = CONFIG.backgroundMusicTracks;
  if (!list || list.length === 0) return null;
  return list[Math.floor(Math.random() * list.length)];
}

function playNextRandomTrack() {
  var src = getRandomTrack();
  if (!src) return;
  if (!backgroundAudio) {
    backgroundAudio = new Audio();
    backgroundAudio.loop = false;
    backgroundAudio.addEventListener('ended', function() {
      playNextRandomTrack();
    });
  }
  backgroundAudio.src = encodeURI(src);
  backgroundAudio.volume = 0.7;
  backgroundAudio.play().then(function() {
    backgroundMusicStarted = true;
    if (nowPlayingEl) {
      var name = decodeURIComponent(src.split('/').pop().replace(/\.mp3$/i, ''));
      nowPlayingEl.textContent = 'Sonando: ' + name;
    }
  }).catch(function() {});
}

function tryStartBackgroundMusic() {
  var list = CONFIG.backgroundMusicTracks;
  if (!list || list.length === 0) return;
  if (backgroundMusicStarted) return;
  playNextRandomTrack();
}

musicToggle.addEventListener('click', function() {
  musicPanel.classList.toggle('visible');
});

document.addEventListener('click', function(e) {
  if (musicPanel.classList.contains('visible') && !musicPanel.contains(e.target) && !musicToggle.contains(e.target)) {
    musicPanel.classList.remove('visible');
  }
});

function spawnHearts() {
  const container = document.getElementById('heartsContainer');
  const jarRect = document.getElementById('jar').getBoundingClientRect();
  const centerX = jarRect.left + jarRect.width / 2;
  const bottomY = jarRect.bottom;
  const symbols = ['💖', '✨', '💕', '💗', '🌟'];
  for (var i = 0; i < 12; i++) {
    var heart = document.createElement('span');
    heart.className = 'heart-float';
    heart.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    heart.style.left = (centerX - 15 + (Math.random() - 0.5) * 80) + 'px';
    heart.style.top = bottomY + 'px';
    heart.style.animationDuration = (1.8 + Math.random() * 1.2) + 's';
    heart.style.animationDelay = (i * 0.05) + 's';
    container.appendChild(heart);
    (function(h) { setTimeout(function() { h.remove(); }, 3200); })(heart);
  }
}

function typeMessage(element, text, speed) {
  speed = speed || 40;
  element.innerHTML = '';
  var chars = text.split('');
  for (var i = 0; i < chars.length; i++) {
    var span = document.createElement('span');
    span.className = 'char' + (chars[i] === ' ' ? ' char-space' : '');
    span.textContent = chars[i] === ' ' ? '\u00A0' : chars[i];
    span.style.animationDelay = (i * speed) + 'ms';
    element.appendChild(span);
  }
}

function pickRandomMessage() {
  if (mensajesUsados.length >= MENSAJES.length) mensajesUsados = [];
  var available = MENSAJES.map(function(_, i) { return i; }).filter(function(i) { return mensajesUsados.indexOf(i) === -1; });
  var indices = available.length ? available : MENSAJES.map(function(_, i) { return i; });
  var idx = indices[Math.floor(Math.random() * indices.length)];
  mensajesUsados.push(idx);
  return MENSAJES[idx];
}

function showMessage(msg) {
  var overlay = document.getElementById('messageOverlay');
  var card = overlay.querySelector('.message-card');
  var imgEl = document.getElementById('msgImage');
  var textEl = document.getElementById('msgText');
  document.body.classList.add('message-open');
  if (msg.type === 'image') {
    imgEl.src = msg.image;
    imgEl.alt = '';
    imgEl.style.display = 'block';
  } else {
    imgEl.style.display = 'none';
  }
  textEl.innerHTML = '';
  overlay.classList.add('visible');
  card.style.transform = 'translateY(40px) scale(0.5)';
  card.style.opacity = '0';
  requestAnimationFrame(function() {
    card.style.transform = 'translateY(0) scale(1)';
    card.style.opacity = '1';
    typeMessage(textEl, msg.content);
  });
}

function closeMessage() {
  document.getElementById('messageOverlay').classList.remove('visible');
  document.body.classList.remove('message-open');
}

document.getElementById('messageClose').addEventListener('click', closeMessage);
document.getElementById('messageOverlay').addEventListener('click', function(e) {
  if (e.target.id === 'messageOverlay') closeMessage();
});

var jarContainer = document.getElementById('jarContainer');
jarContainer.addEventListener('click', function() {
  jarContainer.classList.add('open');
  playJarOpenSound();
  tryStartBackgroundMusic();
  spawnHearts();
  var msg = pickRandomMessage();
  setTimeout(function() { showMessage(msg); }, 450);
  setTimeout(function() { jarContainer.classList.remove('open'); }, 1000);
});

createParticles();
updateCounter();
setInterval(updateCounter, 60000);
