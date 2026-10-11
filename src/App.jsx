// ==========================================
// 1. IMPORTACIONES
// ==========================================
import React, { useState, useEffect } from 'react';
import { Menu, X, Plus, Wallet, FileText, HelpCircle, Bell, CreditCard, PiggyBank, CheckCircle2, Clock, AlertCircle, Receipt, Settings, Moon, Sun, User, Palette, ChevronDown, ArrowUpRight, ArrowDownLeft, ShoppingBag, DollarSign, Globe, ShieldCheck, Home } from 'lucide-react';

// ==========================================
// DICCIONARIO DE TRADUCCIONES (i18n)
// ==========================================
const t = {
  es: {
    inicio: 'Inicio',
    facturas: 'Compromisos & Facturas',
    movimientos: 'Movimientos',
    ajustes: 'Ajustes',
    ayuda: 'Ayuda & Guía',
    accesoRapido: 'Acceso Rápido',
    gastoCuotas: 'Gasto Cuotas',
    factura: 'Factura',
    gastoDirecto: 'Gasto Directo',
    ingreso: 'Ingreso',
    notificaciones: 'Notificaciones & Alertas',
    cerrar: 'Cerrar',
    todoAlDia: '¡Todo al día! No tienes vencimientos pendientes.',
    vencidosPorVencer: 'Facturas vencidas o por vencer:',
    dineroDisponible: 'Dinero Disponible en Efectivo (UYU)',
    ingresos: 'Ingresos',
    gastosEfectivo: 'Gastos Efectivo',
    misAhorros: 'Mis Ahorros',
    nuevoAhorro: 'Nuevo Ahorro',
    totalAhorroUYU: 'Total Ahorro UYU',
    totalAhorroUSD: 'Total Ahorro USD',
    misTarjetas: 'Mis Tarjetas',
    agregarTarjeta: 'Agregar Tarjeta',
    limiteUsado: 'Límite Usado',
    saldoDisponible: 'Saldo Disponible',
    pendientes: 'Pendientes',
    vencidas: 'Vencidas',
    pagadas: 'Pagadas',
    todas: 'Todas',
    noElementos: 'No hay elementos en este filtro.',
    vence: 'Vence',
    historialMovimientos: 'Historial de Movimientos',
    ajustesTitulo: 'Ajustes & Personalización',
    cotizacionDolar: 'Cotización del Dólar (USD / UYU)',
    cotizacionLabel: '1 USD en pesos uruguayos (UYU)',
    apariencia: 'Apariencia',
    temaVisual: 'Tema Visual',
    modoOscuro: 'Modo Oscuro',
    modoClaro: 'Modo Claro',
    colorAcento: 'Color de Acento',
    idioma: 'Idioma / Language',
    perfilUsuario: 'Perfil de Usuario',
    usuarioLocal: 'Usuario Local (Guardado Automático)',
    datosLocales: 'Los datos se guardan de forma segura en tu navegador',
    guiaTitulo: 'Guía & Preguntas Frecuentes',
    guia1Titulo: '1. ¿Cómo funciona el Dinero Disponible?',
    guia1Texto: 'Tu Dinero Disponible en Efectivo representa tu caja real en pesos (UYU). Se calcula sumando todos tus ingresos registrados y restando tus gastos pagados en efectivo y las cuotas/facturas que vayas abonando mes a mes.',
    guia2Titulo: '2. Compras en Cuotas con Tarjeta',
    guia2Item1: 'Control de Límite: Al registrar una compra en cuotas, la app valida que el monto total no supere el cupo libre de tu tarjeta de crédito.',
    guia2Item2: 'Generación Automática: Crea cada una de las cuotas mensualmente en la pestaña de Compromisos & Facturas.',
    guia2Item3: 'Liberación de Cupo: Cada vez que pagas una cuota del mes, la app resta tu dinero en efectivo y libera ese mismo importe en el límite de tu tarjeta.',
    guia3Titulo: '3. Pagos en Dólares (USD / UYU)',
    guia3Texto: 'Si agregas una factura en dólares (ej. Netflix a US$15), al abonarla con tu efectivo en pesos, la app aplicará el tipo de cambio de Ajustes ($40 UYU) para descontar el valor en pesos correcto ($600 UYU).',
    guia4Titulo: '4. Filtros y Alertas de Vencimiento',
    guia4Texto: 'Puedes filtrar tus compromisos entre Pendientes, Vencidas, Pagadas y Todas. La campana te avisará en rojo sobre vencimientos cercanos.',
    guia5Titulo: '5. Seguridad y Privacidad',
    guia5Texto: 'Todos tus datos de compras, límites y facturas se mantienen 100% privados y guardados localmente dentro de tu propio dispositivo.',
    pagarCompromiso: 'Pagar Compromiso',
    monto: 'Monto',
    conversionUYU: 'Conversión a Pesos (UYU):',
    medioPago: 'Medio de Pago',
    efectivoSaldo: 'Efectivo / Saldo Disponible',
    cancelar: 'Cancelar',
    confirmarPago: 'Confirmar Pago',
    agregarFactura: 'Agregar Factura',
    servicioProveedor: 'Servicio / Proveedor',
    moneda: 'Moneda',
    fechaVencimiento: 'Fecha Vencimiento',
    guardar: 'Guardar',
    articulo: 'Artículo',
    cuotas: 'Cuotas',
    montoTotal: 'Monto Total',
    registrar: 'Registrar',
    nuevoMovimiento: 'Nuevo Movimiento',
    concepto: 'Concepto',
    nombreTarjeta: 'Nombre',
    limiteTotal: 'Límite Total',
    meta: 'Meta',
    esmeralda: 'Esmeralda',
    azul: 'Azul',
    violeta: 'Violeta',
    ambar: 'Ámbar (Dorado)'
  },
  en: {
    inicio: 'Home',
    facturas: 'Bills & Commitments',
    movimientos: 'Transactions',
    ajustes: 'Settings',
    ayuda: 'Help & Guide',
    accesoRapido: 'Quick Access',
    gastoCuotas: 'Installment Expense',
    factura: 'Bill',
    gastoDirecto: 'Direct Expense',
    ingreso: 'Income',
    notificaciones: 'Notifications & Alerts',
    cerrar: 'Close',
    todoAlDia: 'All set! You have no pending due dates.',
    vencidosPorVencer: 'Overdue or upcoming bills:',
    dineroDisponible: 'Available Cash Balance (UYU)',
    ingresos: 'Income',
    gastosEfectivo: 'Cash Expenses',
    misAhorros: 'My Savings',
    nuevoAhorro: 'New Savings Goal',
    totalAhorroUYU: 'Total UYU Savings',
    totalAhorroUSD: 'Total USD Savings',
    misTarjetas: 'My Cards',
    agregarTarjeta: 'Add Card',
    limiteUsado: 'Used Limit',
    saldoDisponible: 'Available Balance',
    pendientes: 'Pending',
    vencidas: 'Overdue',
    pagadas: 'Paid',
    todas: 'All',
    noElementos: 'No items in this filter.',
    vence: 'Due',
    historialMovimientos: 'Transaction History',
    ajustesTitulo: 'Settings & Customization',
    cotizacionDolar: 'USD Exchange Rate (USD / UYU)',
    cotizacionLabel: '1 USD in Uruguayan Pesos (UYU)',
    apariencia: 'Appearance',
    temaVisual: 'Visual Theme',
    modoOscuro: 'Dark Mode',
    modoClaro: 'Light Mode',
    colorAcento: 'Accent Color',
    idioma: 'Language / Idioma',
    perfilUsuario: 'User Profile',
    usuarioLocal: 'Local User (Auto-Saved)',
    datosLocales: 'Data securely stored locally in your browser',
    guiaTitulo: 'Guide & FAQ',
    guia1Titulo: '1. How does Available Cash work?',
    guia1Texto: 'Your Available Cash Balance represents your real cash in pesos (UYU). It adds all income and subtracts expenses paid in cash and installment bills paid each month.',
    guia2Titulo: '2. Installment Card Purchases',
    guia2Item1: 'Limit Control: When registering an installment purchase, the app verifies it does not exceed your credit card free limit.',
    guia2Item2: 'Auto Generation: Creates monthly installments under Bills & Commitments.',
    guia2Item3: 'Limit Release: Paying a monthly installment deducts cash and restores credit limit.',
    guia3Titulo: '3. USD Payments (USD / UYU)',
    guia3Texto: 'If you add a USD bill (e.g. Netflix US$15), paying it with cash will apply the exchange rate from Settings ($40 UYU) to deduct the exact amount ($600 UYU).',
    guia4Titulo: '4. Filters and Due Date Alerts',
    guia4Texto: 'Filter commitments by Pending, Overdue, Paid, and All. The bell icon turns red for upcoming due dates.',
    guia5Titulo: '5. Security & Privacy',
    guia5Texto: 'All your purchase data, limits, and bills stay 100% private and saved locally on your device.',
    pagarCompromiso: 'Pay Commitment',
    monto: 'Amount',
    conversionUYU: 'Conversion to Pesos (UYU):',
    medioPago: 'Payment Method',
    efectivoSaldo: 'Cash / Available Balance',
    cancelar: 'Cancel',
    confirmarPago: 'Confirm Payment',
    agregarFactura: 'Add Bill',
    servicioProveedor: 'Service / Provider',
    moneda: 'Currency',
    fechaVencimiento: 'Due Date',
    guardar: 'Save',
    articulo: 'Item Description',
    cuotas: 'Installments',
    montoTotal: 'Total Amount',
    registrar: 'Register',
    nuevoMovimiento: 'New Transaction',
    concepto: 'Description',
    nombreTarjeta: 'Card Name',
    limiteTotal: 'Total Limit',
    meta: 'Goal',
    esmeralda: 'Emerald',
    azul: 'Blue',
    violeta: 'Violet',
    ambar: 'Amber (Gold)'
  }
};

export default function App() {

  // ==========================================
  // 2. ESTADOS CON PERSISTENCIA (localStorage)
  // ==========================================
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [menuRapidoAbierto, setMenuRapidoAbierto] = useState(false);
  const [pantallaActual, setPantallaActual] = useState('inicio');
  
  const [modoOscuro, setModoOscuro] = useState(() => {
    const guardado = localStorage.getItem('finanzapp_modoOscuro');
    return guardado !== null ? JSON.parse(guardado) : true;
  });

  const [colorAcento, setColorAcento] = useState(() => {
    return localStorage.getItem('finanzapp_colorAcento') || 'amber';
  });

  const [idioma, setIdioma] = useState(() => {
    return localStorage.getItem('finanzapp_idioma') || 'es';
  });

  const [cotizacionUSD, setCotizacionUSD] = useState(() => {
    const guardado = localStorage.getItem('finanzapp_cotizacion');
    return guardado ? Number(guardado) : 40;
  });

  const lang = t[idioma];

  const [modalTipo, setModalTipo] = useState(null);
  const [notificacionesAbiertas, setNotificacionesAbiertas] = useState(false);
  const [errorSaldo, setErrorSaldo] = useState(null);

  const [itemAPagar, setItemAPagar] = useState(null);
  const [metodoPagoSeleccionado, setMetodoPagoSeleccionado] = useState('efectivo');
  const [filtroFacturas, setFiltroFacturas] = useState('pendientes');

  const [tarjetas, setTarjetas] = useState(() => {
    const guardado = localStorage.getItem('finanzapp_tarjetas');
    return guardado ? JSON.parse(guardado) : [
      { id: 101, nombre: 'Visa Itaú', tipo: 'Crédito', limite: 100000, saldoUsado: 12500, cierre: '2026-10-25', saldoDisponible: 0 },
      { id: 102, nombre: 'Mastercard BROU', tipo: 'Débito', limite: 0, saldoUsado: 0, cierre: '', saldoDisponible: 18000 }
    ];
  });

  const [ahorros, setAhorros] = useState(() => {
    const guardado = localStorage.getItem('finanzapp_ahorros');
    return guardado ? JSON.parse(guardado) : [
      { id: 201, meta: 'Fondo de Emergencia', monto: 25000, moneda: 'UYU' },
      { id: 202, meta: 'Viaje Japón', monto: 850, moneda: 'USD' }
    ];
  });

  const [movimientos, setMovimientos] = useState(() => {
    const guardado = localStorage.getItem('finanzapp_movimientos');
    return guardado ? JSON.parse(guardado) : [
      { id: 1, concepto: 'Cobro de Sueldo', monto: 45000, moneda: 'UYU', tipo: 'ingreso', estado: 'pagado', metodoPago: 'efectivo', fecha: '2026-10-01' },
      { id: 2, concepto: 'Suscripción Netflix', monto: 15, moneda: 'USD', tipo: 'factura', estado: 'pendiente', fecha: '2026-10-03' },
      { id: 3, concepto: 'Factura UTE', monto: 2450, moneda: 'UYU', tipo: 'factura', estado: 'pendiente', fecha: '2026-10-14' }
    ];
  });

  useEffect(() => {
    localStorage.setItem('finanzapp_tarjetas', JSON.stringify(tarjetas));
    localStorage.setItem('finanzapp_ahorros', JSON.stringify(ahorros));
    localStorage.setItem('finanzapp_movimientos', JSON.stringify(movimientos));
    localStorage.setItem('finanzapp_modoOscuro', JSON.stringify(modoOscuro));
    localStorage.setItem('finanzapp_colorAcento', colorAcento);
    localStorage.setItem('finanzapp_idioma', idioma);
    localStorage.setItem('finanzapp_cotizacion', cotizacionUSD);
  }, [tarjetas, ahorros, movimientos, modoOscuro, colorAcento, idioma, cotizacionUSD]);

  // Formularios
  const [concepto, setConcepto] = useState('');
  const [monto, setMonto] = useState('');
  const [moneda, setMoneda] = useState('UYU');
  const [tipoMovimiento, setTipoMovimiento] = useState('gasto');
  const [fecha, setFecha] = useState(new Date().toISOString().split('T')[0]);

  const [conceptoFactura, setConceptoFactura] = useState('');
  const [montoFactura, setMontoFactura] = useState('');
  const [monedaFactura, setMonedaFactura] = useState('USD');
  const [fechaVencimientoFactura, setFechaVencimientoFactura] = useState(new Date().toISOString().split('T')[0]);

  const [conceptoCuotas, setConceptoCuotas] = useState('');
  const [montoTotalCuotas, setMontoTotalCuotas] = useState('');
  const [cantidadCuotas, setCantidadCuotas] = useState('6');
  const [tarjetaCuotasId, setTarjetaCuotasId] = useState('');

  const [nombreTarjeta, setNombreTarjeta] = useState('');
  const [tipoTarjeta, setTipoTarjeta] = useState('Crédito');
  const [limiteTarjeta, setLimiteTarjeta] = useState('');

  const [metaAhorro, setMetaAhorro] = useState('');
  const [montoAhorro, setMontoAhorro] = useState('');

  // ==========================================
  // 3. PALETAS DE COLOR DINÁMICAS (UNIFICADAS)
  // ==========================================
  const estilosAcento = {
    amber: {
      texto: modoOscuro ? 'text-amber-400' : 'text-amber-600',
      bgBtn: 'bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold',
      bgNavActivo: modoOscuro ? 'bg-amber-500 text-neutral-950 font-bold' : 'bg-amber-500 text-white font-bold',
      badge: 'bg-amber-950 text-amber-300 border border-amber-800/50',
      bgBarra: 'bg-amber-500',
      borderHover: 'hover:border-amber-500/60'
    },
    emerald: {
      texto: modoOscuro ? 'text-emerald-400' : 'text-emerald-600',
      bgBtn: 'bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold',
      bgNavActivo: modoOscuro ? 'bg-emerald-600 text-white font-bold' : 'bg-emerald-500 text-white font-bold',
      badge: 'bg-emerald-950 text-emerald-300 border border-emerald-800/50',
      bgBarra: 'bg-emerald-500',
      borderHover: 'hover:border-emerald-500/60'
    },
    blue: {
      texto: modoOscuro ? 'text-blue-400' : 'text-blue-600',
      bgBtn: 'bg-blue-500 hover:bg-blue-400 text-neutral-950 font-bold',
      bgNavActivo: modoOscuro ? 'bg-blue-600 text-white font-bold' : 'bg-blue-500 text-white font-bold',
      badge: 'bg-blue-950 text-blue-300 border border-blue-800/50',
      bgBarra: 'bg-blue-500',
      borderHover: 'hover:border-blue-500/60'
    },
    violet: {
      texto: modoOscuro ? 'text-violet-400' : 'text-violet-600',
      bgBtn: 'bg-violet-500 hover:bg-violet-400 text-white font-bold',
      bgNavActivo: modoOscuro ? 'bg-violet-600 text-white font-bold' : 'bg-violet-500 text-white font-bold',
      badge: 'bg-violet-950 text-violet-300 border border-violet-800/50',
      bgBarra: 'bg-violet-500',
      borderHover: 'hover:border-violet-500/60'
    }
  }[colorAcento];

  // Tonos cálidos de fondo estilo carbón y neutrales mate
  const temaContenedor = modoOscuro ? 'bg-neutral-950 text-neutral-100' : 'bg-stone-100 text-neutral-900';
  const temaHeader = modoOscuro ? 'bg-neutral-900/90 backdrop-blur-md border-neutral-800/80' : 'bg-white border-stone-200 shadow-sm';
  const temaTarjeta = modoOscuro ? 'bg-neutral-900/80 border-neutral-800/80 shadow-lg shadow-neutral-950/40' : 'bg-white border-stone-200 shadow-sm';
  const temaSubtexto = modoOscuro ? 'text-neutral-400' : 'text-stone-500';
  const temaInput = modoOscuro ? 'bg-neutral-950 border-neutral-800 text-neutral-100' : 'bg-stone-50 border-stone-300 text-neutral-900';

  // ==========================================
  // 4. CÁLCULOS FINANCIEROS Y DE FECHAS
  // ==========================================
  const hoyObj = new Date();
  const hoyStr = hoyObj.toISOString().split('T')[0];

  const totalIngresosUYU = movimientos
    .filter(m => m.tipo === 'ingreso' && m.moneda === 'UYU')
    .reduce((acc, curr) => acc + Number(curr.monto), 0);

  const totalGastosPagadosUYU = movimientos
    .filter(m => (m.tipo === 'gasto' || ((m.tipo === 'factura' || m.tipo === 'cuota') && m.estado === 'pagado' && m.metodoPago === 'efectivo')))
    .reduce((acc, curr) => {
      const montoEfectivo = curr.montoEfectivoUYU ? curr.montoEfectivoUYU : (curr.moneda === 'UYU' ? curr.monto : curr.monto * cotizacionUSD);
      return acc + Number(montoEfectivo);
    }, 0);

  const saldoDisponibleUYU = totalIngresosUYU - totalGastosPagadosUYU;

  const evaluarEstadoFecha = (fechaStr) => {
    if (!fechaStr) return { esVencida: false, esUrgente: false, diasRestantes: 0 };
    const fechaVenc = new Date(fechaStr + 'T00:00:00');
    const hoyActual = new Date(hoyStr + 'T00:00:00');
    const diffTime = fechaVenc - hoyActual;
    const diasRestantes = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    return {
      esVencida: diasRestantes < 0,
      esUrgente: diasRestantes >= 0 && diasRestantes <= 7,
      diasRestantes
    };
  };

  const compromisosLista = movimientos.filter(m => {
    if (m.tipo !== 'factura' && m.tipo !== 'cuota') return false;
    const { esVencida } = evaluarEstadoFecha(m.fecha);

    if (filtroFacturas === 'pendientes') return m.estado === 'pendiente' && !esVencida;
    if (filtroFacturas === 'vencidas') return m.estado === 'pendiente' && esVencida;
    if (filtroFacturas === 'pagadas') return m.estado === 'pagado';
    return true;
  });

  const tieneFacturasEnRojo = movimientos.some(m => {
    if ((m.tipo !== 'factura' && m.tipo !== 'cuota') || m.estado !== 'pendiente') return false;
    const { esVencida, esUrgente } = evaluarEstadoFecha(m.fecha);
    return esVencida || esUrgente;
  });

  const totalAhorrosUYU = ahorros.filter(a => a.moneda === 'UYU').reduce((acc, a) => acc + Number(a.monto), 0);
  const totalAhorrosUSD = ahorros.filter(a => a.moneda === 'USD').reduce((acc, a) => acc + Number(a.monto), 0);

  // ==========================================
  // 5. ACCIONES Y FUNCIONES
  // ==========================================
  const guardarMovimiento = (e) => {
    e.preventDefault();
    if (!concepto || !monto) return;

    const montoEnPesos = moneda === 'USD' ? Number(monto) * cotizacionUSD : Number(monto);

    if (tipoMovimiento === 'gasto') {
      if (saldoDisponibleUYU <= 0 || montoEnPesos > saldoDisponibleUYU) {
        setErrorSaldo(`⚠️ Saldo en efectivo insuficiente ($${saldoDisponibleUYU} UYU).`);
        setTimeout(() => setErrorSaldo(null), 6000);
        return;
      }
    }

    setErrorSaldo(null);
    setMovimientos([{
      id: Date.now() + Math.random(),
      concepto,
      monto: Number(monto),
      moneda,
      montoEfectivoUYU: montoEnPesos,
      tipo: tipoMovimiento,
      estado: 'pagado',
      metodoPago: 'efectivo',
      fecha
    }, ...movimientos]);

    setConcepto('');
    setMonto('');
    setModalTipo(null);
  };

  const guardarFactura = (e) => {
    e.preventDefault();
    if (!conceptoFactura || !montoFactura) return;

    setMovimientos([{
      id: Date.now() + Math.random(),
      concepto: conceptoFactura,
      monto: Number(montoFactura),
      moneda: monedaFactura,
      tipo: 'factura',
      estado: 'pendiente',
      fecha: fechaVencimientoFactura
    }, ...movimientos]);

    setConceptoFactura('');
    setMontoFactura('');
    setModalTipo(null);
  };

  const guardarGastoCuotas = (e) => {
    e.preventDefault();
    if (!conceptoCuotas || !montoTotalCuotas || !tarjetaCuotasId) return;

    const total = Number(montoTotalCuotas);
    const numCuotas = Number(cantidadCuotas);
    const valorCuota = Math.round(total / numCuotas);

    const tarjetaElegida = tarjetas.find(tCard => tCard.id === Number(tarjetaCuotasId));
    if (!tarjetaElegida) return;

    const limiteDisponibleTarjeta = tarjetaElegida.limite - tarjetaElegida.saldoUsado;
    if (total > limiteDisponibleTarjeta) {
      setErrorSaldo(`⚠️ La tarjeta "${tarjetaElegida.nombre}" excede su límite disponible ($${limiteDisponibleTarjeta} UYU libres de un límite de $${tarjetaElegida.limite}).`);
      setTimeout(() => setErrorSaldo(null), 6000);
      return;
    }

    setErrorSaldo(null);

    setTarjetas(tarjetas.map(tCard => {
      if (tCard.id === tarjetaElegida.id) {
        return { ...tCard, saldoUsado: tCard.saldoUsado + total };
      }
      return tCard;
    }));

    const nuevasCuotas = [];
    const fechaBase = new Date();

    for (let i = 1; i <= numCuotas; i++) {
      const fechaVenc = new Date(fechaBase);
      fechaVenc.setMonth(fechaVenc.getMonth() + (i - 1));

      nuevasCuotas.push({
        id: Date.now() + Math.random(),
        concepto: `${conceptoCuotas} (${i}/${numCuotas})`,
        monto: valorCuota,
        moneda: 'UYU',
        tipo: 'cuota',
        tarjetaId: tarjetaElegida.id,
        estado: 'pendiente',
        fecha: fechaVenc.toISOString().split('T')[0]
      });
    }

    setMovimientos([...nuevasCuotas, ...movimientos]);
    setConceptoCuotas('');
    setMontoTotalCuotas('');
    setModalTipo(null);
  };

  const iniciarPagoItem = (item) => {
    if (item.estado === 'pagado') return;
    setItemAPagar(item);
    setMetodoPagoSeleccionado('efectivo');
    setModalTipo('pagoItem');
  };

  const confirmarPagoItem = (e) => {
    e.preventDefault();
    if (!itemAPagar) return;

    const costoFinalUYU = itemAPagar.moneda === 'USD' 
      ? itemAPagar.monto * cotizacionUSD 
      : itemAPagar.monto;

    if (metodoPagoSeleccionado === 'efectivo') {
      if (saldoDisponibleUYU <= 0 || costoFinalUYU > saldoDisponibleUYU) {
        setErrorSaldo(`⚠️ Saldo en efectivo insuficiente ($${saldoDisponibleUYU} UYU) para abonar $${costoFinalUYU} UYU.`);
        setTimeout(() => setErrorSaldo(null), 6000);
        setModalTipo(null);
        return;
      }
    } else if (metodoPagoSeleccionado.startsWith('tarjeta_')) {
      const tarjetaId = Number(metodoPagoSeleccionado.replace('tarjeta_', ''));
      const tarjetaElegida = tarjetas.find(tCard => tCard.id === tarjetaId);

      if (tarjetaElegida) {
        const limiteDisponible = tarjetaElegida.limite - tarjetaElegida.saldoUsado;
        if (costoFinalUYU > limiteDisponible) {
          setErrorSaldo(`⚠️ Límite insuficiente en "${tarjetaElegida.nombre}" ($${limiteDisponible} UYU disponibles).`);
          setTimeout(() => setErrorSaldo(null), 6000);
          setModalTipo(null);
          return;
        }

        setTarjetas(tarjetas.map(tCard => {
          if (tCard.id === tarjetaElegida.id) {
            return { ...tCard, saldoUsado: tCard.saldoUsado + costoFinalUYU };
          }
          return tCard;
        }));
      }
    }

    if (metodoPagoSeleccionado === 'efectivo' && itemAPagar.tipo === 'cuota' && itemAPagar.tarjetaId) {
      setTarjetas(tarjetas.map(tCard => {
        if (tCard.id === itemAPagar.tarjetaId) {
          return { ...tCard, saldoUsado: Math.max(0, tCard.saldoUsado - itemAPagar.monto) };
        }
        return tCard;
      }));
    }

    setMovimientos(movimientos.map(m => {
      if (m.id === itemAPagar.id) {
        return { 
          ...m, 
          estado: 'pagado', 
          metodoPago: metodoPagoSeleccionado,
          montoEfectivoUYU: metodoPagoSeleccionado === 'efectivo' ? costoFinalUYU : 0
        };
      }
      return m;
    }));

    setItemAPagar(null);
    setModalTipo(null);
  };

  const guardarTarjeta = (e) => {
    e.preventDefault();
    if (!nombreTarjeta) return;

    setTarjetas([...tarjetas, {
      id: Date.now() + Math.random(),
      nombre: nombreTarjeta,
      tipo: tipoTarjeta,
      limite: tipoTarjeta === 'Crédito' ? Number(limiteTarjeta || 0) : 0,
      saldoUsado: 0,
      cierre: '',
      saldoDisponible: 0
    }]);

    setNombreTarjeta('');
    setLimiteTarjeta('');
    setModalTipo(null);
  };

  const guardarAhorro = (e) => {
    e.preventDefault();
    if (!metaAhorro || !montoAhorro) return;

    setAhorros([...ahorros, { id: Date.now() + Math.random(), meta: metaAhorro, monto: Number(montoAhorro), moneda: 'UYU' }]);
    setMetaAhorro('');
    setMontoAhorro('');
    setModalTipo(null);
  };

  // ==========================================
  // 6. INTERFAZ VISUAL (JSX)
  // ==========================================
  return (
    <div className={`min-h-screen ${temaContenedor} flex flex-col font-sans transition-colors duration-300`}>
      
      {/* 6.1 HEADER */}
      <header className={`${temaHeader} border-b p-4 flex justify-between items-center sticky top-0 z-20`}>
        <button 
          onClick={() => { setMenuAbierto(!menuAbierto); setMenuRapidoAbierto(false); setNotificacionesAbiertas(false); }}
          className={`p-2 rounded-xl ${modoOscuro ? 'bg-neutral-800 hover:bg-neutral-700 text-neutral-200' : 'bg-stone-200 hover:bg-stone-300 text-stone-800'} transition`}
        >
          {menuAbierto ? <X size={22} /> : <Menu size={22} />}
        </button>

        <button 
          onClick={() => { setMenuRapidoAbierto(!menuRapidoAbierto); setMenuAbierto(false); setNotificacionesAbiertas(false); }}
          className="flex items-center gap-1.5 focus:outline-none group"
        >
          <h1 className={`text-xl font-black tracking-wider ${estilosAcento.texto}`}>FinanzApp</h1>
          <ChevronDown size={18} className={`${estilosAcento.texto} group-hover:translate-y-0.5 transition-transform`} />
        </button>

        <button 
          onClick={() => { setNotificacionesAbiertas(!notificacionesAbiertas); setMenuAbierto(false); setMenuRapidoAbierto(false); }}
          className={`p-2 rounded-xl ${modoOscuro ? 'bg-neutral-800 hover:bg-neutral-700 text-neutral-200' : 'bg-stone-200 hover:bg-stone-300 text-stone-800'} transition relative`}
        >
          <Bell size={22} />
          {tieneFacturasEnRojo && (
            <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-rose-500 rounded-full animate-pulse" />
          )}
        </button>
      </header>

      {/* 6.2 MENÚ RÁPIDO */}
      {menuRapidoAbierto && (
        <div className={`${temaHeader} border-b p-3 space-y-2 transition-all duration-200`}>
          <p className={`text-[11px] font-bold uppercase tracking-wider ${temaSubtexto} px-1`}>
            {lang.accesoRapido}
          </p>
          <div className="grid grid-cols-5 gap-1.5">
            <button 
              onClick={() => { setPantallaActual('inicio'); setMenuRapidoAbierto(false); }}
              className={`p-2 rounded-xl border ${modoOscuro ? 'bg-neutral-900 border-neutral-800' : 'bg-stone-50 border-stone-200'} hover:border-orange-500/60 flex flex-col items-center gap-1 transition`}
            >
              <Home size={18} className="text-orange-400" />
              <span className="text-[10px] font-semibold">{lang.inicio}</span>
            </button>

            <button 
              onClick={() => { setModalTipo('gastoCuotas'); setMenuRapidoAbierto(false); }}
              className={`p-2 rounded-xl border ${modoOscuro ? 'bg-neutral-900 border-neutral-800' : 'bg-stone-50 border-stone-200'} hover:border-indigo-500/60 flex flex-col items-center gap-1 transition`}
            >
              <ShoppingBag size={18} className="text-indigo-400" />
              <span className="text-[10px] font-semibold">{lang.gastoCuotas}</span>
            </button>

            <button 
              onClick={() => { setModalTipo('factura'); setMenuRapidoAbierto(false); }}
              className={`p-2 rounded-xl border ${modoOscuro ? 'bg-neutral-900 border-neutral-800' : 'bg-stone-50 border-stone-200'} hover:border-amber-500/60 flex flex-col items-center gap-1 transition`}
            >
              <Receipt size={18} className="text-amber-400" />
              <span className="text-[10px] font-semibold">{lang.factura}</span>
            </button>

            <button 
              onClick={() => { setTipoMovimiento('gasto'); setModalTipo('movimiento'); setMenuRapidoAbierto(false); }}
              className={`p-2 rounded-xl border ${modoOscuro ? 'bg-neutral-900 border-neutral-800' : 'bg-stone-50 border-stone-200'} hover:border-rose-500/60 flex flex-col items-center gap-1 transition`}
            >
              <ArrowUpRight size={18} className="text-rose-400" />
              <span className="text-[10px] font-semibold">{lang.gastoDirecto}</span>
            </button>

            <button 
              onClick={() => { setTipoMovimiento('ingreso'); setModalTipo('movimiento'); setMenuRapidoAbierto(false); }}
              className={`p-2 rounded-xl border ${modoOscuro ? 'bg-neutral-900 border-neutral-800' : 'bg-stone-50 border-stone-200'} hover:border-emerald-500/60 flex flex-col items-center gap-1 transition`}
            >
              <ArrowDownLeft size={18} className="text-emerald-400" />
              <span className="text-[10px] font-semibold">{lang.ingreso}</span>
            </button>
          </div>
        </div>
      )}

      {/* 6.3 MENÚ HAMBURGUESA */}
      {menuAbierto && (
        <nav className={`${temaHeader} border-b p-4 flex flex-col gap-2 transition-all duration-200`}>
          <button 
            onClick={() => { setPantallaActual('inicio'); setMenuAbierto(false); }}
            className={`flex items-center gap-3 p-3 rounded-xl font-medium transition ${pantallaActual === 'inicio' ? estilosAcento.bgNavActivo : (modoOscuro ? 'hover:bg-neutral-800 text-neutral-300' : 'hover:bg-stone-100 text-neutral-700')}`}
          >
            <Wallet size={20} /> {lang.inicio}
          </button>
          <button 
            onClick={() => { setPantallaActual('facturas'); setMenuAbierto(false); }}
            className={`flex items-center gap-3 p-3 rounded-xl font-medium transition ${pantallaActual === 'facturas' ? estilosAcento.bgNavActivo : (modoOscuro ? 'hover:bg-neutral-800 text-neutral-300' : 'hover:bg-stone-100 text-neutral-700')}`}
          >
            <Receipt size={20} /> {lang.facturas}
          </button>
          <button 
            onClick={() => { setPantallaActual('movimientos'); setMenuAbierto(false); }}
            className={`flex items-center gap-3 p-3 rounded-xl font-medium transition ${pantallaActual === 'movimientos' ? estilosAcento.bgNavActivo : (modoOscuro ? 'hover:bg-neutral-800 text-neutral-300' : 'hover:bg-stone-100 text-neutral-700')}`}
          >
            <FileText size={20} /> {lang.movimientos}
          </button>
          <button 
            onClick={() => { setPantallaActual('ajustes'); setMenuAbierto(false); }}
            className={`flex items-center gap-3 p-3 rounded-xl font-medium transition ${pantallaActual === 'ajustes' ? estilosAcento.bgNavActivo : (modoOscuro ? 'hover:bg-neutral-800 text-neutral-300' : 'hover:bg-stone-100 text-neutral-700')}`}
          >
            <Settings size={20} /> {lang.ajustes}
          </button>
          <button 
            onClick={() => { setPantallaActual('ayuda'); setMenuAbierto(false); }}
            className={`flex items-center gap-3 p-3 rounded-xl font-medium transition ${pantallaActual === 'ayuda' ? estilosAcento.bgNavActivo : (modoOscuro ? 'hover:bg-neutral-800 text-neutral-300' : 'hover:bg-stone-100 text-neutral-700')}`}
          >
            <HelpCircle size={20} /> {lang.ayuda}
          </button>
        </nav>
      )}

      {/* 6.4 NOTIFICACIONES & ALERTAS */}
      {notificacionesAbiertas && (
        <div className={`${temaHeader} border-b p-4 space-y-3`}>
          <div className="flex justify-between items-center">
            <h3 className={`font-bold text-sm ${temaSubtexto}`}>{lang.notificaciones}</h3>
            <button onClick={() => setNotificacionesAbiertas(false)} className={`text-xs ${temaSubtexto}`}>{lang.cerrar}</button>
          </div>

          {tieneFacturasEnRojo ? (
            <div className="space-y-2">
              <p className={`text-xs ${estilosAcento.texto} font-semibold`}>⚠️ {lang.vencidosPorVencer}</p>
              {movimientos.filter(m => (m.tipo === 'factura' || m.tipo === 'cuota') && m.estado === 'pendiente').map(f => {
                const { esVencida, esUrgente, diasRestantes } = evaluarEstadoFecha(f.fecha);
                if (!esVencida && !esUrgente) return null;

                return (
                  <div key={f.id} onClick={() => iniciarPagoItem(f)} className={`${modoOscuro ? 'bg-neutral-950' : 'bg-stone-50'} p-3 rounded-xl border ${esVencida ? 'border-rose-500/80 bg-rose-950/20' : 'border-neutral-800'} flex justify-between items-center text-xs cursor-pointer`}>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className={`text-[9px] px-1.5 py-0.5 rounded font-bold uppercase ${esVencida ? 'bg-rose-500 text-white' : 'bg-stone-700 text-stone-200'}`}>
                          {esVencida ? `⚠️ ${lang.vencidas}` : `En ${diasRestantes} días`}
                        </span>
                        <p className={`font-bold ${modoOscuro ? 'text-neutral-200' : 'text-stone-800'}`}>{f.concepto}</p>
                      </div>
                      <p className={`${temaSubtexto} text-[11px] mt-0.5`}>{lang.vence}: {f.fecha}</p>
                    </div>
                    <span className={`font-bold ${estilosAcento.texto}`}>{f.moneda === 'USD' ? 'US$' : '$'} {f.monto}</span>
                  </div>
                );
              })}
            </div>
          ) : (
            <p className={`text-xs ${estilosAcento.texto}`}>✅ {lang.todoAlDia}</p>
          )}
        </div>
      )}

      {/* 6.5 CONTENIDO PRINCIPAL */}
      <main className="flex-1 p-4 max-w-md mx-auto w-full space-y-4">
        
        {errorSaldo && (
          <div className="bg-rose-950/90 border border-rose-500/50 p-3 rounded-2xl text-rose-200 text-xs flex items-center gap-2">
            <AlertCircle size={18} className="shrink-0 text-rose-400" />
            <span>{errorSaldo}</span>
          </div>
        )}

        {/* PANTALLA 1: INICIO */}
        {pantallaActual === 'inicio' && (
          <div className="space-y-6">
            
            {/* SALDO DISPONIBLE EN EFECTIVO */}
            <div className={`${temaTarjeta} p-5 rounded-2xl border space-y-1`}>
              <span className={`text-xs ${temaSubtexto} font-semibold uppercase tracking-wider`}>{lang.dineroDisponible}</span>
              <p className={`text-3xl font-black ${saldoDisponibleUYU < 0 ? 'text-rose-400' : estilosAcento.texto}`}>
                $ {saldoDisponibleUYU.toLocaleString('es-UY')}
              </p>
              <div className={`flex justify-between text-xs ${temaSubtexto} pt-3 border-t ${modoOscuro ? 'border-neutral-800' : 'border-stone-200'} mt-2`}>
                <span>{lang.ingresos}: ${totalIngresosUYU.toLocaleString('es-UY')}</span>
                <span>{lang.gastosEfectivo}: ${totalGastosPagadosUYU.toLocaleString('es-UY')}</span>
              </div>
            </div>

            {/* AHORROS */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <div className={`flex items-center gap-2 ${estilosAcento.texto}`}>
                  <PiggyBank size={20} />
                  <h2 className={`text-lg font-bold ${modoOscuro ? 'text-neutral-200' : 'text-stone-800'}`}>{lang.misAhorros}</h2>
                </div>
                <button onClick={() => setModalTipo('ahorro')} className={`text-xs ${temaTarjeta} border ${estilosAcento.texto} font-bold px-3 py-2 rounded-xl flex items-center gap-1 ${estilosAcento.borderHover} transition`}>
                  <Plus size={14} /> {lang.nuevoAhorro}
                </button>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className={`${temaTarjeta} p-4 rounded-xl border`}>
                  <span className={`text-xs ${temaSubtexto}`}>{lang.totalAhorroUYU}</span>
                  <p className={`text-lg font-extrabold ${estilosAcento.texto} mt-1`}>$ {totalAhorrosUYU.toLocaleString('es-UY')}</p>
                </div>
                <div className={`${temaTarjeta} p-4 rounded-xl border`}>
                  <span className={`text-xs ${temaSubtexto}`}>{lang.totalAhorroUSD}</span>
                  <p className={`text-lg font-extrabold ${estilosAcento.texto} mt-1`}>US$ {totalAhorrosUSD.toLocaleString('es-UY')}</p>
                </div>
              </div>
            </div>

            {/* TARJETAS */}
            <div className="space-y-3 pt-2">
              <div className="flex justify-between items-center">
                <div className={`flex items-center gap-2 ${estilosAcento.texto}`}>
                  <CreditCard size={20} />
                  <h2 className={`text-lg font-bold ${modoOscuro ? 'text-neutral-200' : 'text-stone-800'}`}>{lang.misTarjetas}</h2>
                </div>
                <button onClick={() => setModalTipo('tarjeta')} className={`text-xs ${temaTarjeta} border ${estilosAcento.texto} font-bold px-3 py-2 rounded-xl flex items-center gap-1 ${estilosAcento.borderHover} transition`}>
                  <Plus size={14} /> {lang.agregarTarjeta}
                </button>
              </div>

              <div className="space-y-3">
                {tarjetas.map(tCard => (
                  <div key={tCard.id} className={`${temaTarjeta} p-4 rounded-2xl border space-y-3`}>
                    <div className="flex justify-between items-start">
                      <div>
                        <p className={`font-bold ${modoOscuro ? 'text-neutral-100' : 'text-stone-800'}`}>{tCard.nombre}</p>
                        <span className={`text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded ${modoOscuro ? 'bg-neutral-800 text-neutral-300' : 'bg-stone-200 text-stone-700'}`}>
                          {tCard.tipo}
                        </span>
                      </div>
                      <CreditCard className={temaSubtexto} size={24} />
                    </div>

                    {tCard.tipo === 'Crédito' ? (
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span className={temaSubtexto}>{lang.limiteUsado}</span>
                          <span className={`font-bold ${estilosAcento.texto}`}>${tCard.saldoUsado.toLocaleString('es-UY')} /${tCard.limite.toLocaleString('es-UY')}</span>
                        </div>
                        <div className={`w-full ${modoOscuro ? 'bg-neutral-800' : 'bg-stone-200'} h-2 rounded-full overflow-hidden`}>
                          <div className={`${estilosAcento.bgBarra} h-full rounded-full transition-all duration-300`} style={{ width: `${tCard.limite > 0 ? Math.min((tCard.saldoUsado / tCard.limite) * 100, 100) : 0}%` }} />
                        </div>
                      </div>
                    ) : (
                      <div className="pt-1">
                        <span className={`text-xs ${temaSubtexto}`}>{lang.saldoDisponible}</span>
                        <p className={`text-xl font-bold ${estilosAcento.texto}`}>$ {tCard.saldoDisponible.toLocaleString('es-UY')}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* PANTALLA 2: COMPROMISOS & FACTURAS */}
        {pantallaActual === 'facturas' && (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">{lang.facturas}</h2>
              <button onClick={() => setModalTipo('factura')} className={`${estilosAcento.bgBtn} px-3.5 py-2.5 rounded-xl flex items-center gap-1 shadow-md`}>
                <Plus size={18} /> {lang.factura}
              </button>
            </div>

            <div className={`grid grid-cols-4 ${temaTarjeta} p-1 rounded-xl border gap-1 text-[11px] font-semibold text-center`}>
              <button onClick={() => setFiltroFacturas('pendientes')} className={`py-2 rounded-lg transition ${filtroFacturas === 'pendientes' ? estilosAcento.bgNavActivo : temaSubtexto}`}>{lang.pendientes}</button>
              <button onClick={() => setFiltroFacturas('vencidas')} className={`py-2 rounded-lg transition ${filtroFacturas === 'vencidas' ? 'bg-rose-500 text-white font-bold' : 'text-rose-400'}`}>{lang.vencidas}</button>
              <button onClick={() => setFiltroFacturas('pagadas')} className={`py-2 rounded-lg transition ${filtroFacturas === 'pagadas' ? 'bg-emerald-500 text-neutral-950 font-bold' : temaSubtexto}`}>{lang.pagadas}</button>
              <button onClick={() => setFiltroFacturas('todas')} className={`py-2 rounded-lg transition ${filtroFacturas === 'todas' ? (modoOscuro ? 'bg-neutral-800 text-neutral-100 font-bold' : 'bg-stone-300 text-neutral-900 font-bold') : temaSubtexto}`}>{lang.todas}</button>
            </div>

            <div className="space-y-2">
              {compromisosLista.length === 0 ? (
                <div className={`text-center py-8 ${temaTarjeta} rounded-2xl border`}>
                  <p className={`${temaSubtexto} text-sm`}>{lang.noElementos}</p>
                </div>
              ) : (
                compromisosLista.map(f => {
                  const esPagada = f.estado === 'pagado';
                  const { esVencida } = evaluarEstadoFecha(f.fecha);

                  return (
                    <div 
                      key={f.id} 
                      onClick={() => iniciarPagoItem(f)} 
                      className={`${temaTarjeta} p-4 rounded-2xl border flex justify-between items-center ${!esPagada ? 'cursor-pointer' : 'opacity-70'} ${!esPagada && esVencida ? 'border-rose-500/70 bg-rose-950/10' : ''}`}
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className={`text-[9px] px-2 py-0.5 rounded-full font-bold uppercase ${
                            esPagada ? 'bg-emerald-950 text-emerald-300 border border-emerald-800' : esVencida ? 'bg-rose-500 text-white animate-pulse' : estilosAcento.badge
                          }`}>
                            {esPagada ? lang.pagadas : esVencida ? `⚠️ ${lang.vencidas}` : lang.pendientes}
                          </span>
                          <span className={`text-[9px] px-2 py-0.5 rounded-full font-bold uppercase ${f.moneda === 'USD' ? 'bg-purple-950 text-purple-300 border border-purple-800' : 'bg-neutral-800 text-neutral-300'}`}>
                            {f.moneda}
                          </span>
                        </div>
                        <p className={`font-bold mt-1.5 ${modoOscuro ? 'text-neutral-100' : 'text-stone-800'}`}>{f.concepto}</p>
                        <p className={`text-xs mt-0.5 ${esVencida && !esPagada ? 'text-rose-400 font-semibold' : temaSubtexto}`}>
                          {lang.vence}: {f.fecha}
                        </p>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="text-right">
                          <p className={`font-black ${esPagada ? temaSubtexto : esVencida ? 'text-rose-400' : estilosAcento.texto}`}>
                            {f.moneda === 'USD' ? 'US$' : '$'} {f.monto}
                          </p>
                          {f.moneda === 'USD' && !esPagada && (
                            <p className="text-[10px] text-stone-400">≈ ${(f.monto * cotizacionUSD).toLocaleString('es-UY')} UYU</p>
                          )}
                        </div>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${esPagada ? 'bg-emerald-500 text-neutral-950' : 'bg-neutral-800 text-stone-400'}`}>
                          <CheckCircle2 size={18} />
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        )}

        {/* PANTALLA 3: MOVIMIENTOS */}
        {pantallaActual === 'movimientos' && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold">{lang.historialMovimientos}</h2>
            <div className="space-y-2">
              {movimientos.filter(m => m.tipo !== 'factura' && m.tipo !== 'cuota').map(item => (
                <div key={item.id} className={`${temaTarjeta} p-4 rounded-2xl border flex justify-between items-center`}>
                  <div>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-bold uppercase ${item.tipo === 'ingreso' ? 'bg-emerald-950 text-emerald-300 border border-emerald-800' : 'bg-neutral-800 text-neutral-300'}`}>
                      {item.tipo}
                    </span>
                    <p className="font-semibold mt-1.5">{item.concepto}</p>
                    <span className={`text-xs ${temaSubtexto}`}>{item.fecha}</span>
                  </div>
                  <p className="font-bold">{item.moneda === 'USD' ? 'US$' : '$'} {item.monto}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* PANTALLA 4: AJUSTES */}
        {pantallaActual === 'ajustes' && (
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Settings className={estilosAcento.texto} size={22} />
              <h2 className="text-xl font-bold">{lang.ajustesTitulo}</h2>
            </div>

            {/* SELECCIÓN DE IDIOMA */}
            <div className={`${temaTarjeta} p-5 rounded-2xl border space-y-3`}>
              <h3 className="font-bold text-sm flex items-center gap-2">
                <Globe size={18} className={estilosAcento.texto} /> {lang.idioma}
              </h3>
              <div className="flex gap-2">
                <button 
                  onClick={() => setIdioma('es')} 
                  className={`flex-1 py-2.5 rounded-xl font-bold text-xs transition ${idioma === 'es' ? estilosAcento.bgNavActivo : (modoOscuro ? 'bg-neutral-950 border border-neutral-800' : 'bg-stone-100 border border-stone-200')}`}
                >
                  🇪🇸 Español
                </button>
                <button 
                  onClick={() => setIdioma('en')} 
                  className={`flex-1 py-2.5 rounded-xl font-bold text-xs transition ${idioma === 'en' ? estilosAcento.bgNavActivo : (modoOscuro ? 'bg-neutral-950 border border-neutral-800' : 'bg-stone-100 border border-stone-200')}`}
                >
                  🇺🇸 English
                </button>
              </div>
            </div>

            {/* COTIZACIÓN DEL DÓLAR */}
            <div className={`${temaTarjeta} p-5 rounded-2xl border space-y-3`}>
              <h3 className="font-bold text-sm flex items-center gap-2">
                <DollarSign size={18} className={estilosAcento.texto} /> {lang.cotizacionDolar}
              </h3>
              <div>
                <label className={`text-xs ${temaSubtexto} block mb-1`}>{lang.cotizacionLabel}</label>
                <input 
                  type="number" 
                  value={cotizacionUSD} 
                  onChange={e => setCotizacionUSD(Number(e.target.value))} 
                  className={`w-full ${temaInput} p-3 rounded-xl font-bold text-sm outline-none`}
                />
              </div>
            </div>

            <div className={`${temaTarjeta} p-5 rounded-2xl border space-y-4`}>
              <h3 className="font-bold text-sm flex items-center gap-2">
                <Palette size={18} className={estilosAcento.texto} /> {lang.apariencia}
              </h3>

              <div className="flex justify-between items-center pt-2 border-t border-neutral-800/40">
                <div>
                  <p className="font-semibold text-sm">{lang.temaVisual}</p>
                  <p className={`text-xs ${temaSubtexto}`}>{modoOscuro ? lang.modoOscuro : lang.modoClaro}</p>
                </div>
                <button onClick={() => setModoOscuro(!modoOscuro)} className="p-2.5 rounded-xl border border-neutral-700 text-xs font-semibold flex items-center gap-2">
                  {modoOscuro ? <Moon size={16} className={estilosAcento.texto} /> : <Sun size={16} className="text-amber-500" />}
                  <span>{modoOscuro ? lang.modoOscuro : lang.modoClaro}</span>
                </button>
              </div>

              <div className="pt-3 border-t border-neutral-800/40 space-y-2">
                <p className="font-semibold text-sm">{lang.colorAcento}</p>
                <div className="flex gap-2">
                  <button onClick={() => setColorAcento('amber')} className={`flex-1 py-2 rounded-xl text-xs font-bold text-neutral-950 bg-amber-400 ${colorAcento === 'amber' ? 'ring-2 ring-white' : 'opacity-70'}`}>Ámbar</button>
                  <button onClick={() => setColorAcento('emerald')} className={`flex-1 py-2 rounded-xl text-xs font-bold text-neutral-950 bg-emerald-400 ${colorAcento === 'emerald' ? 'ring-2 ring-white' : 'opacity-70'}`}>{lang.esmeralda}</button>
                  <button onClick={() => setColorAcento('blue')} className={`flex-1 py-2 rounded-xl text-xs font-bold text-neutral-950 bg-blue-400 ${colorAcento === 'blue' ? 'ring-2 ring-white' : 'opacity-70'}`}>{lang.azul}</button>
                  <button onClick={() => setColorAcento('violet')} className={`flex-1 py-2 rounded-xl text-xs font-bold text-white bg-violet-500 ${colorAcento === 'violet' ? 'ring-2 ring-white' : 'opacity-70'}`}>{lang.violeta}</button>
                </div>
              </div>
            </div>

            <div className={`${temaTarjeta} p-5 rounded-2xl border space-y-3`}>
              <h3 className="font-bold text-sm flex items-center gap-2">
                <User size={18} className={estilosAcento.texto} /> {lang.perfilUsuario}
              </h3>
              <div className={`p-3.5 rounded-xl ${modoOscuro ? 'bg-neutral-950' : 'bg-stone-100'} border border-neutral-800 flex items-center gap-3`}>
                <div className={`w-10 h-10 rounded-full ${estilosAcento.bgNavActivo} flex items-center justify-center font-black text-lg`}>
                  U
                </div>
                <div>
                  <p className="font-bold text-sm">{lang.usuarioLocal}</p>
                  <p className={`text-xs ${temaSubtexto}`}>{lang.datosLocales}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* PANTALLA 5: AYUDA (PUNTOS CON COLORES VARIADOS FIJOS) */}
        {pantallaActual === 'ayuda' && (
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <HelpCircle className="text-cyan-400" size={22} />
              <h2 className="text-xl font-bold">{lang.guiaTitulo}</h2>
            </div>

            {/* PUNTO 1: Cyan / Turquesa */}
            <div className={`${temaTarjeta} p-5 rounded-2xl border border-cyan-500/20 space-y-3`}>
              <h3 className="font-bold text-sm flex items-center gap-2 text-cyan-400">
                <Wallet size={18} /> {lang.guia1Titulo}
              </h3>
              <p className={`text-xs leading-relaxed ${modoOscuro ? 'text-neutral-300' : 'text-stone-600'}`}>
                {lang.guia1Texto}
              </p>
            </div>

            {/* PUNTO 2: Indigo / Violeta */}
            <div className={`${temaTarjeta} p-5 rounded-2xl border border-indigo-500/20 space-y-3`}>
              <h3 className="font-bold text-sm flex items-center gap-2 text-indigo-400">
                <ShoppingBag size={18} /> {lang.guia2Titulo}
              </h3>
              <ul className={`text-xs space-y-2 list-disc pl-4 ${modoOscuro ? 'text-neutral-300' : 'text-stone-600'}`}>
                <li>{lang.guia2Item1}</li>
                <li>{lang.guia2Item2}</li>
                <li>{lang.guia2Item3}</li>
              </ul>
            </div>

            {/* PUNTO 3: Ámbar / Dorado */}
            <div className={`${temaTarjeta} p-5 rounded-2xl border border-amber-500/20 space-y-3`}>
              <h3 className="font-bold text-sm flex items-center gap-2 text-amber-400">
                <DollarSign size={18} /> {lang.guia3Titulo}
              </h3>
              <p className={`text-xs leading-relaxed ${modoOscuro ? 'text-neutral-300' : 'text-stone-600'}`}>
                {lang.guia3Texto}
              </p>
            </div>

            {/* PUNTO 4: Rose / Rosa coral */}
            <div className={`${temaTarjeta} p-5 rounded-2xl border border-rose-500/20 space-y-3`}>
              <h3 className="font-bold text-sm flex items-center gap-2 text-rose-400">
                <AlertCircle size={18} /> {lang.guia4Titulo}
              </h3>
              <p className={`text-xs leading-relaxed ${modoOscuro ? 'text-neutral-300' : 'text-stone-600'}`}>
                {lang.guia4Texto}
              </p>
            </div>

            {/* PUNTO 5: Esmeralda / Menta */}
            <div className={`${temaTarjeta} p-5 rounded-2xl border border-emerald-500/20 space-y-2`}>
              <h3 className="font-bold text-sm flex items-center gap-2 text-emerald-400">
                <ShieldCheck size={18} /> {lang.guia5Titulo}
              </h3>
              <p className={`text-xs leading-relaxed ${modoOscuro ? 'text-neutral-300' : 'text-stone-600'}`}>
                {lang.guia5Texto}
              </p>
            </div>
          </div>
        )}

      </main>

      {/* 6.6 MODALES */}
      
      {/* MODAL PAGO DE FACTURA */}
      {modalTipo === 'pagoItem' && itemAPagar && (
        <div className="fixed inset-0 bg-neutral-950/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className={`${temaTarjeta} rounded-2xl p-6 w-full max-w-sm border space-y-4`}>
            <div className="flex justify-between items-center">
              <h3 className={`text-lg font-bold ${estilosAcento.texto}`}>{lang.pagarCompromiso}</h3>
              <button onClick={() => setModalTipo(null)}><X size={20} /></button>
            </div>

            <div className={`p-3.5 rounded-xl ${modoOscuro ? 'bg-neutral-950' : 'bg-stone-100'} border border-neutral-800 space-y-1.5`}>
              <p className="font-bold text-sm">{itemAPagar.concepto}</p>
              <p className={`text-xs ${temaSubtexto}`}>
                {lang.monto}: <strong className={estilosAcento.texto}>{itemAPagar.moneda === 'USD' ? 'US$' : '$'} {itemAPagar.monto}</strong>
              </p>

              {itemAPagar.moneda === 'USD' && (
                <div className="p-2.5 rounded-lg bg-neutral-900 border border-neutral-800 text-xs text-stone-200 space-y-1">
                  <p className="font-semibold">🔄 {lang.conversionUYU}</p>
                  <p className="text-[11px]">{itemAPagar.monto} USD × ${cotizacionUSD} UYU = <strong className="text-emerald-400">${(itemAPagar.monto * cotizacionUSD).toLocaleString('es-UY')} UYU</strong></p>
                </div>
              )}
            </div>

            <form onSubmit={confirmarPagoItem} className="space-y-3">
              <div>
                <label className={`text-xs ${temaSubtexto} block mb-1 font-semibold`}>{lang.medioPago}</label>
                <select value={metodoPagoSeleccionado} onChange={e => setMetodoPagoSeleccionado(e.target.value)} className={`w-full ${temaInput} p-3 rounded-xl outline-none`}>
                  <option value="efectivo">💵 {lang.efectivoSaldo} ($ {saldoDisponibleUYU.toLocaleString('es-UY')} UYU)</option>
                  {tarjetas.filter(tCard => tCard.tipo === 'Crédito').map(tCard => (
                    <option key={tCard.id} value={`tarjeta_${tCard.id}`}>
                      💳 {tCard.nombre} (Disp: ${tCard.limite - tCard.saldoUsado} UYU)
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex gap-2 pt-2">
                <button type="button" onClick={() => setModalTipo(null)} className={`w-1/2 p-3 rounded-xl border border-neutral-700 font-semibold`}>{lang.cancelar}</button>
                <button type="submit" className={`w-1/2 p-3 rounded-xl ${estilosAcento.bgBtn}`}>{lang.confirmarPago}</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL FACTURA */}
      {modalTipo === 'factura' && (
        <div className="fixed inset-0 bg-neutral-950/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className={`${temaTarjeta} rounded-2xl p-6 w-full max-w-sm border space-y-4`}>
            <div className="flex justify-between items-center"><h3 className="text-lg font-bold">{lang.agregarFactura}</h3><button onClick={() => setModalTipo(null)}><X size={20} /></button></div>
            <form onSubmit={guardarFactura} className="space-y-3">
              <div><label className={`text-xs ${temaSubtexto} block mb-1 font-semibold`}>{lang.servicioProveedor}</label><input type="text" placeholder="Ej: UTE, Antel..." value={conceptoFactura} onChange={e => setConceptoFactura(e.target.value)} className={`w-full ${temaInput} p-3 rounded-xl outline-none`} required /></div>
              <div className="grid grid-cols-2 gap-2">
                <div><label className={`text-xs ${temaSubtexto} block mb-1 font-semibold`}>{lang.monto}</label><input type="number" placeholder="1500" value={montoFactura} onChange={e => setMontoFactura(e.target.value)} className={`w-full ${temaInput} p-3 rounded-xl outline-none`} required /></div>
                <div><label className={`text-xs ${temaSubtexto} block mb-1 font-semibold`}>{lang.moneda}</label><select value={monedaFactura} onChange={e => setMonedaFactura(e.target.value)} className={`w-full ${temaInput} p-3 rounded-xl outline-none`}><option value="UYU">UYU ($)</option><option value="USD">USD (US$)</option></select></div>
              </div>
              <div><label className={`text-xs ${temaSubtexto} block mb-1 font-semibold`}>{lang.fechaVencimiento}</label><input type="date" value={fechaVencimientoFactura} onChange={e => setFechaVencimientoFactura(e.target.value)} className={`w-full ${temaInput} p-3 rounded-xl outline-none`} required /></div>
              <div className="flex gap-2 pt-2"><button type="button" onClick={() => setModalTipo(null)} className="w-1/2 p-3 rounded-xl border border-neutral-700 font-semibold">{lang.cancelar}</button><button type="submit" className={`w-1/2 p-3 rounded-xl ${estilosAcento.bgBtn}`}>{lang.guardar}</button></div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL GASTO EN CUOTAS */}
      {modalTipo === 'gastoCuotas' && (
        <div className="fixed inset-0 bg-neutral-950/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className={`${temaTarjeta} rounded-2xl p-6 w-full max-w-sm border space-y-4`}>
            <div className="flex justify-between items-center"><h3 className={`text-lg font-bold ${estilosAcento.texto}`}>{lang.gastoCuotas}</h3><button onClick={() => setModalTipo(null)}><X size={20} /></button></div>
            <form onSubmit={guardarGastoCuotas} className="space-y-3">
              <div><label className={`text-xs ${temaSubtexto} block mb-1 font-semibold`}>{lang.misTarjetas}</label><select value={tarjetaCuotasId} onChange={e => setTarjetaCuotasId(e.target.value)} className={`w-full ${temaInput} p-3 rounded-xl outline-none`} required><option value="">Seleccionar...</option>{tarjetas.filter(tCard => tCard.tipo === 'Crédito').map(tCard => (<option key={tCard.id} value={tCard.id}>{tCard.nombre} (Disponible: ${tCard.limite - tCard.saldoUsado})</option>))}</select></div>
              <div><label className={`text-xs ${temaSubtexto} block mb-1 font-semibold`}>{lang.articulo}</label><input type="text" placeholder="Ej: Zapatos" value={conceptoCuotas} onChange={e => setConceptoCuotas(e.target.value)} className={`w-full ${temaInput} p-3 rounded-xl outline-none`} required /></div>
              <div className="grid grid-cols-2 gap-2">
                <div><label className={`text-xs ${temaSubtexto} block mb-1 font-semibold`}>{lang.montoTotal} ($)</label><input type="number" placeholder="6000" value={montoTotalCuotas} onChange={e => setMontoTotalCuotas(e.target.value)} className={`w-full ${temaInput} p-3 rounded-xl outline-none`} required /></div>
                <div><label className={`text-xs ${temaSubtexto} block mb-1 font-semibold`}>{lang.cuotas}</label><select value={cantidadCuotas} onChange={e => setCantidadCuotas(e.target.value)} className={`w-full ${temaInput} p-3 rounded-xl outline-none`}><option value="2">2 cuotas</option><option value="3">3 cuotas</option><option value="6">6 cuotas</option><option value="12">12 cuotas</option></select></div>
              </div>
              <div className="flex gap-2 pt-2"><button type="button" onClick={() => setModalTipo(null)} className="w-1/2 p-3 rounded-xl border border-neutral-700 font-semibold">{lang.cancelar}</button><button type="submit" className={`w-1/2 p-3 rounded-xl ${estilosAcento.bgBtn}`}>{lang.registrar}</button></div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL MOVIMIENTO */}
      {modalTipo === 'movimiento' && (
        <div className="fixed inset-0 bg-neutral-950/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className={`${temaTarjeta} rounded-2xl p-6 w-full max-w-sm border space-y-4`}>
            <div className="flex justify-between items-center"><h3 className="text-lg font-bold">{lang.nuevoMovimiento}</h3><button onClick={() => setModalTipo(null)}><X size={20} /></button></div>
            <form onSubmit={guardarMovimiento} className="space-y-3">
              <div><label className={`text-xs ${temaSubtexto} block mb-1 font-semibold`}>{lang.concepto}</label><input type="text" placeholder="Ej: Sueldo, Super..." value={concepto} onChange={e => setConcepto(e.target.value)} className={`w-full ${temaInput} p-3 rounded-xl outline-none`} required /></div>
              <div className="grid grid-cols-2 gap-2">
                <div><label className={`text-xs ${temaSubtexto} block mb-1 font-semibold`}>{lang.monto}</label><input type="number" placeholder="0" value={monto} onChange={e => setMonto(e.target.value)} className={`w-full ${temaInput} p-3 rounded-xl outline-none`} required /></div>
                <div><label className={`text-xs ${temaSubtexto} block mb-1 font-semibold`}>{lang.moneda}</label><select value={moneda} onChange={e => setMoneda(e.target.value)} className={`w-full ${temaInput} p-3 rounded-xl outline-none`}><option value="UYU">UYU ($)</option><option value="USD">USD (US$)</option></select></div>
              </div>
              <div className="flex gap-2 pt-2"><button type="button" onClick={() => setModalTipo(null)} className="w-1/2 p-3 rounded-xl border border-neutral-700 font-semibold">{lang.cancelar}</button><button type="submit" className={`w-1/2 p-3 rounded-xl ${estilosAcento.bgBtn}`}>{lang.guardar}</button></div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL TARJETA */}
      {modalTipo === 'tarjeta' && (
        <div className="fixed inset-0 bg-neutral-950/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className={`${temaTarjeta} rounded-2xl p-6 w-full max-w-sm border space-y-4`}>
            <div className="flex justify-between items-center"><h3 className={`text-lg font-bold ${estilosAcento.texto}`}>{lang.agregarTarjeta}</h3><button onClick={() => setModalTipo(null)}><X size={20} /></button></div>
            <form onSubmit={guardarTarjeta} className="space-y-3">
              <div><label className={`text-xs ${temaSubtexto} block mb-1 font-semibold`}>{lang.nombreTarjeta}</label><input type="text" placeholder="Ej: Visa Itaú" value={nombreTarjeta} onChange={e => setNombreTarjeta(e.target.value)} className={`w-full ${temaInput} p-3 rounded-xl outline-none`} required /></div>
              <div><label className={`text-xs ${temaSubtexto} block mb-1 font-semibold`}>{lang.limiteTotal} ($)</label><input type="number" placeholder="100000" value={limiteTarjeta} onChange={e => setLimiteTarjeta(e.target.value)} className={`w-full ${temaInput} p-3 rounded-xl outline-none`} required /></div>
              <div className="flex gap-2 pt-2"><button type="button" onClick={() => setModalTipo(null)} className="w-1/2 p-3 rounded-xl border border-neutral-700 font-semibold">{lang.cancelar}</button><button type="submit" className={`w-1/2 p-3 rounded-xl ${estilosAcento.bgBtn}`}>{lang.guardar}</button></div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL AHORRO */}
      {modalTipo === 'ahorro' && (
        <div className="fixed inset-0 bg-neutral-950/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className={`${temaTarjeta} rounded-2xl p-6 w-full max-w-sm border space-y-4`}>
            <div className="flex justify-between items-center"><h3 className="text-lg font-bold">{lang.nuevoAhorro}</h3><button onClick={() => setModalTipo(null)}><X size={20} /></button></div>
            <form onSubmit={guardarAhorro} className="space-y-3">
              <div><label className={`text-xs ${temaSubtexto} block mb-1 font-semibold`}>{lang.meta}</label><input type="text" placeholder="Ej: Viaje" value={metaAhorro} onChange={e => setMetaAhorro(e.target.value)} className={`w-full ${temaInput} p-3 rounded-xl outline-none`} required /></div>
              <div><label className={`text-xs ${temaSubtexto} block mb-1 font-semibold`}>{lang.monto}</label><input type="number" placeholder="0" value={montoAhorro} onChange={e => setMontoAhorro(e.target.value)} className={`w-full ${temaInput} p-3 rounded-xl outline-none`} required /></div>
              <div className="flex gap-2 pt-2"><button type="button" onClick={() => setModalTipo(null)} className="w-1/2 p-3 rounded-xl border border-neutral-700 font-semibold">{lang.cancelar}</button><button type="submit" className={`w-1/2 p-3 rounded-xl ${estilosAcento.bgBtn}`}>{lang.guardar}</button></div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}