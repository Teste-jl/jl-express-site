'use strict';

const qs = (selector) => document.querySelector(selector);
const qsa = (selector) => [...document.querySelectorAll(selector)];
const BR_NUMBER = new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 3, maximumFractionDigits: 3 });

window.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) window.lucide.createIcons();

  const currentYear = qs('#currentYear');
  if (currentYear) currentYear.textContent = new Date().getFullYear();

  setupMenu();
  setupMasks();
  setupCalculator();
  setupQuoteForm();
});

function setupMenu() {
  const menuToggle = qs('#menuToggle');
  const mainNav = qs('#mainNav');
  if (!menuToggle || !mainNav) return;

  menuToggle.addEventListener('click', () => {
    const open = mainNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(open));
  });

  qsa('#mainNav a').forEach((link) => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });

  document.addEventListener('click', (event) => {
    if (!mainNav.contains(event.target) && !menuToggle.contains(event.target)) {
      mainNav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    }
  });
}

function setupMasks() {
  ['#pickupZip', '#deliveryZip'].forEach((selector) => {
    const input = qs(selector);
    if (!input) return;
    input.addEventListener('input', () => {
      const numbers = input.value.replace(/\D/g, '').slice(0, 8);
      input.value = numbers.length > 5 ? `${numbers.slice(0, 5)}-${numbers.slice(5)}` : numbers;
    });
  });

  const phone = qs('#quotePhone');
  if (phone) {
    phone.addEventListener('input', (event) => {
      const numbers = event.target.value.replace(/\D/g, '').slice(0, 11);
      let value = numbers;
      if (numbers.length > 2) value = `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
      if (numbers.length > 7) value = `(${numbers.slice(0, 2)}) ${numbers.slice(2, 3)} ${numbers.slice(3, 7)}-${numbers.slice(7)}`;
      event.target.value = value;
    });
  }
}

function setupCalculator() {
  const freightForm = qs('#freightForm');
  if (!freightForm) return;

  let calculatedData = null;

  freightForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const length = Number(qs('#length').value);
    const width = Number(qs('#width').value);
    const height = Number(qs('#height').value);
    const quantity = Number(qs('#quantity').value);
    const weight = Number(qs('#weight').value);
    const pickupCity = qs('#pickupCity').value.trim();
    const deliveryCity = qs('#deliveryCity').value.trim();
    const pickupState = qs('#pickupState').value;
    const deliveryState = qs('#deliveryState').value;
    const goods = qs('#goodsType').value;
    const error = qs('#freightError');

    if (!pickupCity || !deliveryCity || !pickupState || !deliveryState || !goods || length <= 0 || width <= 0 || height <= 0 || quantity < 1 || weight <= 0) {
      error.textContent = 'Preencha a rota, o tipo de mercadoria e informe medidas, quantidade e peso maiores que zero.';
      return;
    }

    error.textContent = '';
    const divisor = qs('#unit').value === 'cm' ? 100 : 1;
    const volume = (length / divisor) * (width / divisor) * (height / divisor) * quantity;

    calculatedData = {
      pickup: `${pickupCity} - ${pickupState}`,
      destination: `${deliveryCity} - ${deliveryState}`,
      length,
      width,
      height,
      unit: qs('#unit').value,
      quantity,
      weight,
      goods,
      volume,
      declaredValue: qs('#declaredValue').value,
      pickupDate: qs('#pickupDate').value,
      helper: qs('#helper').checked,
      loading: qs('#loading').checked,
      fragile: qs('#fragile').checked,
      urgent: qs('#urgent').checked,
      notes: qs('#freightNotes').value.trim()
    };

    qs('#resultVolume').innerHTML = `${BR_NUMBER.format(volume)} <span>m³</span>`;
    qs('#resultWeight').textContent = `${weight.toLocaleString('pt-BR')} kg`;
    qs('#resultQuantity').textContent = String(quantity);
    qs('#resultOrigin').textContent = calculatedData.pickup;
    qs('#resultDestination').textContent = calculatedData.destination;
    qs('#resultGoods').textContent = goods;

    const unitLabel = calculatedData.unit === 'cm' ? 'cm' : 'm';
    const message = [
      'Olá! Gostaria de solicitar uma cotação com a JL Express Logística.',
      '',
      `Origem: ${calculatedData.pickup}`,
      `Destino: ${calculatedData.destination}`,
      `Mercadoria: ${goods}`,
      `Medidas: ${length} x ${width} x ${height} ${unitLabel}`,
      `Quantidade de volumes: ${quantity}`,
      `Volume total: ${BR_NUMBER.format(volume)} m³`,
      `Peso total: ${weight.toLocaleString('pt-BR')} kg`,
      calculatedData.declaredValue ? `Valor declarado: R$ ${calculatedData.declaredValue}` : '',
      calculatedData.pickupDate ? `Data desejada: ${formatDate(calculatedData.pickupDate)}` : '',
      `Ajudante: ${calculatedData.helper ? 'Sim' : 'Não'}`,
      `Carga/descarga: ${calculatedData.loading ? 'Sim' : 'Não'}`,
      `Carga frágil: ${calculatedData.fragile ? 'Sim' : 'Não'}`,
      `Urgente: ${calculatedData.urgent ? 'Sim' : 'Não'}`,
      calculatedData.notes ? `Observações: ${calculatedData.notes}` : ''
    ].filter(Boolean).join('\n');

    const whatsapp = qs('#resultWhatsapp');
    whatsapp.href = `https://wa.me/5583996120574?text=${encodeURIComponent(message)}`;
    whatsapp.classList.remove('disabled');
    qs('.result-panel').scrollIntoView({ behavior: 'smooth', block: 'center' });
  });

  const sendToQuote = qs('#sendToQuote');
  if (sendToQuote) {
    sendToQuote.addEventListener('click', () => {
      if (calculatedData) {
        qs('#quoteGoods').value = calculatedData.goods;
        qs('#quotePickup').value = calculatedData.pickup;
        qs('#quoteDelivery').value = calculatedData.destination;
        qs('#quoteQuantity').value = calculatedData.quantity;
        qs('#quoteWeight').value = calculatedData.weight;
        qs('#quoteVolume').value = BR_NUMBER.format(calculatedData.volume);
        qs('#quoteDate').value = calculatedData.pickupDate;
        qs('#quoteNotes').value = calculatedData.notes;
      }
      qs('#cotacao').scrollIntoView({ behavior: 'smooth' });
    });
  }
}

function setupQuoteForm() {
  const quoteForm = qs('#quoteForm');
  if (!quoteForm) return;

  quoteForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = qs('#quoteName').value.trim();
    const phone = qs('#quotePhone').value.trim();
    const consent = qs('#quoteConsent').checked;
    const error = qs('#quoteError');

    if (!name || !phone || !consent) {
      error.textContent = 'Informe seu nome, telefone e marque a autorização para enviar a solicitação.';
      return;
    }

    error.textContent = '';

    const lines = [
      'Olá! Gostaria de enviar uma solicitação de cotação para a JL Express Logística.',
      '',
      `Nome: ${name}`,
      optionalLine('Empresa', qs('#quoteCompany').value),
      optionalLine('CPF/CNPJ', qs('#quoteDocument').value),
      `Telefone: ${phone}`,
      optionalLine('E-mail', qs('#quoteEmail').value),
      qs('#quoteGoods').value ? `Mercadoria: ${qs('#quoteGoods').value}` : '',
      optionalLine('Cidade de coleta', qs('#quotePickup').value),
      optionalLine('Cidade de entrega', qs('#quoteDelivery').value),
      qs('#quoteQuantity').value ? `Volumes: ${qs('#quoteQuantity').value}` : '',
      qs('#quoteWeight').value ? `Peso total: ${qs('#quoteWeight').value} kg` : '',
      optionalLine('Volume total', qs('#quoteVolume').value, ' m³'),
      qs('#quoteDate').value ? `Data desejada: ${formatDate(qs('#quoteDate').value)}` : '',
      optionalLine('Observações', qs('#quoteNotes').value)
    ].filter(Boolean).join('\n');

    window.open(`https://wa.me/5583996120574?text=${encodeURIComponent(lines)}`, '_blank', 'noopener,noreferrer');
  });
}

function optionalLine(label, value, suffix = '') {
  const text = String(value || '').trim();
  return text ? `${label}: ${text}${suffix}` : '';
}

function formatDate(value) {
  if (!value) return '';
  const [year, month, day] = value.split('-');
  return `${day}/${month}/${year}`;
}
