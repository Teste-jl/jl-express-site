'use strict';

const qs = (selector) => document.querySelector(selector);
const qsa = (selector) => [...document.querySelectorAll(selector)];
const BR_NUMBER = new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 3, maximumFractionDigits: 3 });

window.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) lucide.createIcons();
  qs('#currentYear').textContent = new Date().getFullYear();

  const menuToggle = qs('#menuToggle');
  const mainNav = qs('#mainNav');
  menuToggle.addEventListener('click', () => {
    const open = mainNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(open));
  });
  qsa('#mainNav a').forEach(link => link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  }));

  const maskZip = (input) => {
    input.addEventListener('input', () => {
      const n = input.value.replace(/\D/g, '').slice(0, 8);
      input.value = n.length > 5 ? `${n.slice(0, 5)}-${n.slice(5)}` : n;
    });
  };
  maskZip(qs('#pickupZip'));
  maskZip(qs('#deliveryZip'));

  qs('#quotePhone').addEventListener('input', (event) => {
    const n = event.target.value.replace(/\D/g, '').slice(0, 11);
    let v = n;
    if (n.length > 2) v = `(${n.slice(0, 2)}) ${n.slice(2)}`;
    if (n.length > 7) v = `(${n.slice(0, 2)}) ${n.slice(2, 3)} ${n.slice(3, 7)}-${n.slice(7)}`;
    event.target.value = v;
  });

  let calculatedData = null;
  const freightForm = qs('#freightForm');
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
      length, width, height, unit: qs('#unit').value,
      quantity, weight, goods, volume,
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
    qs('#resultQuantity').textContent = quantity;
    qs('#resultOrigin').textContent = calculatedData.pickup;
    qs('#resultDestination').textContent = calculatedData.destination;
    qs('#resultGoods').textContent = goods;

    const unitLabel = calculatedData.unit === 'cm' ? 'cm' : 'm';
    const message = [
      'Olá! Gostaria de solicitar uma cotação com a JL Express Logística.', '',
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

  qs('#sendToQuote').addEventListener('click', () => {
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

  qs('#quoteForm').addEventListener('submit', (event) => {
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
      'Olá! Gostaria de enviar uma solicitação de cotação para a JL Express Logística.', '',
      `Nome: ${name}`,
      qs('#quoteCompany').value.trim() ? `Empresa: ${qs('#quoteCompany').value.trim()}` : '',
      qs('#quoteDocument').value.trim() ? `CPF/CNPJ: ${qs('#quoteDocument').value.trim()}` : '',
      `Telefone: ${phone}`,
      qs('#quoteEmail').value.trim() ? `E-mail: ${qs('#quoteEmail').value.trim()}` : '',
      qs('#quoteGoods').value ? `Mercadoria: ${qs('#quoteGoods').value}` : '',
      qs('#quotePickup').value.trim() ? `Cidade de coleta: ${qs('#quotePickup').value.trim()}` : '',
      qs('#quoteDelivery').value.trim() ? `Cidade de entrega: ${qs('#quoteDelivery').value.trim()}` : '',
      qs('#quoteQuantity').value ? `Volumes: ${qs('#quoteQuantity').value}` : '',
      qs('#quoteWeight').value ? `Peso total: ${qs('#quoteWeight').value} kg` : '',
      qs('#quoteVolume').value.trim() ? `Volume total: ${qs('#quoteVolume').value.trim()} m³` : '',
      qs('#quoteDate').value ? `Data desejada: ${formatDate(qs('#quoteDate').value)}` : '',
      qs('#quoteNotes').value.trim() ? `Observações: ${qs('#quoteNotes').value.trim()}` : ''
    ].filter(Boolean).join('\n');
    window.open(`https://wa.me/5583996120574?text=${encodeURIComponent(lines)}`, '_blank', 'noopener,noreferrer');
  });
});

function formatDate(value) {
  if (!value) return '';
  const [year, month, day] = value.split('-');
  return `${day}/${month}/${year}`;
}
