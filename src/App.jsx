import React, { useState } from 'react';
import { Home, Users, FileText, DollarSign, Bell, BarChart3, Settings, Search, Plus, Check, X, Send, Download, AlertCircle, Clock, CheckCircle2, FileSignature, Mail, MessageCircle, Eye, ChevronRight, Zap, Save, Lock, User, LogOut, Upload, Sparkles, Megaphone, Target, Rocket, Copy, Edit2, Trash2, TrendingUp } from 'lucide-react';

/* ============ BRAND ============ */
const BRAND = {
  primary: '#7d03ff',
  primaryDark: '#5d02bf',
  primaryLight: '#9d3aff',
  orange: '#ff7939',
  green: '#00ff00',
  black: '#0a0a0a',
  bg: '#fafafa',
  titleFont: "'Unbounded', 'Inter', system-ui, sans-serif",
  bodyFont: "'Poppins', system-ui, sans-serif",
};

const TIPOS_PROYECTO = ['Sitio Web', 'Landing', 'Logo y Branding', 'App', 'ADN', 'Otro'];
const PLATAFORMAS = ['Google', 'Meta', 'TikTok', 'LinkedIn', 'YouTube', 'X (Twitter)', 'Otros'];
const MODALIDADES_VENTA = ['Factura', 'Orden Interna'];
const MODALIDADES_PAGO = ['Efectivo', 'Transferencia', 'Financiera', 'Dólar billete', 'Cripto', 'Cheque'];

/* ============ LOGO ============ */
function AvalonLogo({ size = 40, white = false }) {
  const color = white ? '#fff' : BRAND.primary;
  const black = white ? '#fff' : '#0a0a0a';
  return (
    <svg width={size} height={size * 0.6} viewBox="0 0 100 60" fill="none">
      <path d="M 5 55 L 25 10 L 45 55 Z" stroke={color} strokeWidth="4" fill="none" />
      <path d="M 50 10 L 62 45 L 74 10" stroke={black} strokeWidth="4" fill="none" strokeLinecap="round" />
      <line x1="76" y1="20" x2="95" y2="20" stroke={color} strokeWidth="3" />
      <line x1="76" y1="30" x2="95" y2="30" stroke={color} strokeWidth="3" />
      <line x1="76" y1="40" x2="95" y2="40" stroke={color} strokeWidth="3" />
    </svg>
  );
}

function BrandAsterisk({ size = 14, color = BRAND.primary }) {
  return <span style={{ color, fontWeight: 700, fontSize: size, letterSpacing: '-2px' }}>✱✱✱</span>;
}

/* ============ APP ============ */
export default function AvalonCRM() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [activeModule, setActiveModule] = useState('dashboard');
  const [showSaved, setShowSaved] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const [clients, setClients] = useState([
    {
      id: 1, nombre: 'TechNova', razonSocial: 'TechNova SA', cuit: '30-71234567-8',
      contacto: 'Juan Pérez', cargo: 'Marketing Manager', email: 'juan@technova.com', whatsapp: '+5491123456789',
      estado: 'Activo', modalidadVenta: 'Factura', modalidadPago: 'Transferencia',
      deuda: 0, saldo: 450000,
      servicios: {
        abono360: { activo: true, monto: 450000, moneda: 'ARS', etapaActual: 'Abono full', preOnb: 225000, onb: 350000, abonoFull: 450000 },
        proyecto: { activo: false },
        publicidad: { activo: true, plataformas: [{ plataforma: 'Meta', fee: 15, inversion: 2100000 }, { plataforma: 'Google', fee: 12, inversion: 1400000 }], moneda: 'ARS' },
      },
      ajusteIPC: { activo: true, frecuencia: 'trimestral', ultimoAjuste: '2026-01-15', proximoAjuste: '2026-04-15' }
    },
    {
      id: 2, nombre: 'Moda Express', razonSocial: 'Moda Express SRL', cuit: '30-69876543-2',
      contacto: 'Laura Gómez', cargo: 'CEO', email: 'laura@modaexpress.com', whatsapp: '+5491198765432',
      estado: 'Activo', modalidadVenta: 'Orden Interna', modalidadPago: 'Dólar billete',
      deuda: 12500, saldo: 0,
      servicios: {
        abono360: { activo: false },
        proyecto: { activo: true, tipo: 'Sitio Web', monto: 12500, moneda: 'USD' },
        publicidad: { activo: false },
      },
      ajusteIPC: { activo: false, frecuencia: null, ultimoAjuste: '-', proximoAjuste: '-' }
    },
    {
      id: 3, nombre: 'Gastro Sur', razonSocial: 'Gastronomía del Sur', cuit: '30-65432198-7',
      contacto: 'Martín Rodríguez', cargo: 'Director', email: 'martin@gastrosur.com', whatsapp: '+5491187654321',
      estado: 'Activo', modalidadVenta: 'Factura', modalidadPago: 'Transferencia',
      deuda: 0, saldo: 0,
      servicios: {
        abono360: { activo: true, monto: 140000, moneda: 'ARS', etapaActual: 'Onboarding', preOnb: 70000, onb: 140000, abonoFull: 280000 },
        proyecto: { activo: false },
        publicidad: { activo: false },
      },
      ajusteIPC: { activo: true, frecuencia: 'bimestral', ultimoAjuste: '2026-02-01', proximoAjuste: '2026-04-01' }
    },
    {
      id: 4, nombre: 'FinTech Plus', razonSocial: 'FinTech Plus SA', cuit: '30-78901234-5',
      contacto: 'Sofía Martínez', cargo: 'CMO', email: 'sofia@fintechplus.com', whatsapp: '+5491176543210',
      estado: 'Activo', modalidadVenta: 'Orden Interna', modalidadPago: 'Cripto',
      deuda: 18500, saldo: 0,
      servicios: {
        abono360: { activo: false },
        proyecto: { activo: true, tipo: 'Landing', monto: 3500, moneda: 'USD' },
        publicidad: { activo: true, plataformas: [{ plataforma: 'Meta', fee: 15, inversion: 8000 }, { plataforma: 'Google', fee: 20, inversion: 5000 }, { plataforma: 'TikTok', fee: 25, inversion: 2000 }], moneda: 'USD' },
      },
      ajusteIPC: { activo: false, frecuencia: null, ultimoAjuste: '-', proximoAjuste: '-' }
    },
    {
      id: 5, nombre: 'Deportes Unidos', razonSocial: 'Deportes Unidos SRL', cuit: '30-56789012-3',
      contacto: 'Diego López', cargo: 'Gerente', email: 'diego@deportesunidos.com', whatsapp: '+5491165432109',
      estado: 'Baja', modalidadVenta: 'Factura', modalidadPago: 'Financiera',
      deuda: 0, saldo: 0,
      servicios: {
        abono360: { activo: true, monto: 200000, moneda: 'ARS', etapaActual: 'Abono full', preOnb: 100000, onb: 150000, abonoFull: 200000 },
        proyecto: { activo: false },
        publicidad: { activo: false },
      },
      ajusteIPC: { activo: false, frecuencia: null, ultimoAjuste: '-', proximoAjuste: '-' }
    },
  ]);

  const [invoices, setInvoices] = useState([
    {
      id: 1, tipoDoc: 'Factura', numero: 'FC-A-0001234', clienteId: 1, cliente: 'TechNova SA',
      fecha: '2026-04-01', moneda: 'ARS', modalidadPago: 'Transferencia', estado: 'Pendiente',
      detalles: [
        { tipo: 'Abono 360', concepto: 'Abono Abril 2026', monto: 450000 },
        { tipo: 'Compra de Medios', concepto: 'Fee Meta', plataforma: 'Meta', inversion: 2100000, fee: 15, monto: 315000 },
        { tipo: 'Compra de Medios', concepto: 'Fee Google', plataforma: 'Google', inversion: 1400000, fee: 12, monto: 168000 },
      ],
      neto: 933000, iva: 195930, total: 1128930
    },
    {
      id: 2, tipoDoc: 'Orden Interna', numero: 'OI-2026-015', clienteId: 2, cliente: 'Moda Express SRL',
      fecha: '2026-03-15', moneda: 'USD', modalidadPago: 'Dólar billete', estado: 'Vencida',
      detalles: [{ tipo: 'Proyecto', concepto: 'Sitio Web - 50% entrega', monto: 6250 }],
      neto: 6250, iva: 1312.50, total: 7562.50
    },
    {
      id: 3, tipoDoc: 'Orden Interna', numero: 'OI-2026-018', clienteId: 4, cliente: 'FinTech Plus SA',
      fecha: '2026-04-05', moneda: 'USD', modalidadPago: 'Cripto', estado: 'Pendiente',
      detalles: [
        { tipo: 'Compra de Medios', concepto: 'Fee Meta', plataforma: 'Meta', inversion: 8000, fee: 15, monto: 1200 },
        { tipo: 'Compra de Medios', concepto: 'Fee Google', plataforma: 'Google', inversion: 5000, fee: 20, monto: 1000 },
        { tipo: 'Compra de Medios', concepto: 'Fee TikTok', plataforma: 'TikTok', inversion: 2000, fee: 25, monto: 500 },
      ],
      neto: 2700, iva: 567, total: 3267
    },
    {
      id: 4, tipoDoc: 'Factura', numero: 'FC-A-0001230', clienteId: 1, cliente: 'TechNova SA',
      fecha: '2026-03-01', moneda: 'ARS', modalidadPago: 'Transferencia', estado: 'Cobrada',
      detalles: [{ tipo: 'Abono 360', concepto: 'Abono Marzo 2026', monto: 425000 }],
      neto: 425000, iva: 89250, total: 514250
    },
  ]);

  const [contracts, setContracts] = useState([
    { id: 1, clienteId: 1, cliente: 'TechNova SA', tipo: 'Contrato Marco', fechaEnvio: '2026-01-10', fechaVencimiento: '2026-01-25', estado: 'Firmado', monto: 450000, moneda: 'ARS', archivoPDF: 'TechNova_Contrato_Firmado.pdf', fechaFirma: '2026-01-18' },
    { id: 2, clienteId: 3, cliente: 'Gastronomía del Sur', tipo: 'Contrato Agencia 360', fechaEnvio: '2026-04-10', fechaVencimiento: '2026-04-20', estado: 'Pendiente de firma', monto: 280000, moneda: 'ARS', archivoPDF: null, fechaFirma: null },
    { id: 3, clienteId: 2, cliente: 'Moda Express SRL', tipo: 'OC Proyecto E-commerce', fechaEnvio: '2026-02-15', fechaVencimiento: '2026-02-28', estado: 'Firmado', monto: 12500, moneda: 'USD', archivoPDF: 'ModaExpress_OC.pdf', fechaFirma: '2026-02-22' },
    { id: 4, clienteId: 4, cliente: 'FinTech Plus SA', tipo: 'Contrato Compra Medios', fechaEnvio: '2026-03-15', fechaVencimiento: '2026-03-30', estado: 'Enviado', monto: 18500, moneda: 'USD', archivoPDF: null, fechaFirma: null },
  ]);

  const [alerts] = useState([
    { id: 1, tipo: 'pago', mensaje: 'Moda Express SRL - OI-2026-015 vencida hace 32 días', prioridad: 'alta', fecha: '2026-04-17' },
    { id: 2, tipo: 'contrato', mensaje: 'FinTech Plus SA - Contrato vencido de firma hace 18 días', prioridad: 'alta', fecha: '2026-04-17' },
    { id: 3, tipo: 'ipc', mensaje: 'TechNova SA - Ajuste IPC trimestral pendiente', prioridad: 'media', fecha: '2026-04-17' },
    { id: 4, tipo: 'pago', mensaje: 'FinTech Plus SA - OI-2026-018 vencida hace 12 días', prioridad: 'alta', fecha: '2026-04-17' },
    { id: 5, tipo: 'etapa', mensaje: 'Gastronomía del Sur - Pasa de Onboarding a Abono Full el 01/05/2026', prioridad: 'media', fecha: '2026-04-17' },
  ]);

  const triggerAutoSave = () => { setShowSaved(true); setTimeout(() => setShowSaved(false), 2000); };
  const formatMoney = (n, moneda = 'ARS') => {
    const symbol = moneda === 'USD' ? 'US$' : '$';
    return symbol + (n || 0).toLocaleString('es-AR', { minimumFractionDigits: moneda === 'USD' && n % 1 !== 0 ? 2 : 0, maximumFractionDigits: 2 });
  };

  const modules = [
    { id: 'dashboard', name: 'Dashboard', icon: Home },
    { id: 'clients', name: 'Clientes', icon: Users },
    { id: 'contracts', name: 'Contratos', icon: FileText },
    { id: 'finance', name: 'Finanzas', icon: DollarSign },
    { id: 'alerts', name: 'Alertas', icon: Bell },
    { id: 'reports', name: 'Reportes', icon: BarChart3 },
    { id: 'settings', name: 'Configuración', icon: Settings },
  ];

  if (!loggedIn) return <Login onLogin={(u) => { setCurrentUser(u); setLoggedIn(true); }} />;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Unbounded:wght@400;500;600;700;800&family=Poppins:wght@300;400;500;600;700&display=swap');
        .avalon-app { font-family: ${BRAND.bodyFont}; }
        .avalon-title { font-family: ${BRAND.titleFont}; letter-spacing: -0.02em; }
      `}</style>
      <div className="avalon-app min-h-screen flex" style={{ background: BRAND.bg }}>
        <div className="w-64 text-white flex flex-col" style={{ background: BRAND.black }}>
          <div className="p-5 border-b border-white/10">
            <div className="flex items-center gap-2.5">
              <AvalonLogo size={44} white />
              <div>
                <div className="avalon-title font-bold text-base text-white leading-tight">AVALON</div>
                <div className="text-[10px] font-light text-white/60 tracking-[0.2em] uppercase -mt-0.5">World Agency</div>
              </div>
            </div>
          </div>
          <nav className="flex-1 p-3">
            {modules.map(m => {
              const Icon = m.icon;
              const isActive = activeModule === m.id;
              return (
                <button key={m.id} onClick={() => setActiveModule(m.id)}
                  className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg mb-1 text-sm transition-all"
                  style={{
                    background: isActive ? BRAND.primary : 'transparent',
                    color: isActive ? '#fff' : 'rgba(255,255,255,0.7)',
                    fontWeight: isActive ? 600 : 400,
                  }}
                  onMouseEnter={(e) => !isActive && (e.currentTarget.style.background = 'rgba(255,255,255,0.05)')}
                  onMouseLeave={(e) => !isActive && (e.currentTarget.style.background = 'transparent')}
                >
                  <Icon size={17} /> {m.name}
                </button>
              );
            })}
          </nav>
          <div className="p-4 border-t border-white/10">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-white font-semibold text-xs" style={{ background: BRAND.primary }}>{currentUser.initials}</div>
              <div className="flex-1 min-w-0">
                <div className="text-white text-xs truncate font-medium">{currentUser.name}</div>
                <div className="text-[10px] text-white/50 truncate">{currentUser.role}</div>
              </div>
            </div>
            <button onClick={() => setLoggedIn(false)} className="w-full flex items-center gap-2 px-3 py-1.5 text-xs text-white/60 hover:bg-white/5 rounded-lg">
              <LogOut size={13} /> Cerrar sesión
            </button>
          </div>
        </div>

        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="h-16 bg-white border-b flex items-center justify-between px-6" style={{ borderColor: '#e5e5e5' }}>
            <div className="flex items-center gap-3">
              <BrandAsterisk size={12} />
              <h1 className="avalon-title text-lg font-semibold" style={{ color: BRAND.black }}>{modules.find(m => m.id === activeModule)?.name}</h1>
            </div>
            <div className="flex items-center gap-4">
              {showSaved && <div className="flex items-center gap-1.5 text-sm animate-pulse" style={{ color: BRAND.primary }}><Save size={14} /> Guardado</div>}
              <div className="flex items-center gap-1.5 text-xs text-slate-500"><div className="w-2 h-2 rounded-full" style={{ background: BRAND.green }}></div> Autoguardado activo</div>
              <button className="relative p-2 hover:bg-slate-100 rounded-lg">
                <Bell size={18} className="text-slate-600" />
                <span className="absolute top-1 right-1 w-2 h-2 rounded-full" style={{ background: BRAND.orange }}></span>
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-auto p-6">
            {activeModule === 'dashboard' && <Dashboard clients={clients} invoices={invoices} alerts={alerts} formatMoney={formatMoney} setActiveModule={setActiveModule} />}
            {activeModule === 'clients' && <Clients clients={clients} setClients={setClients} formatMoney={formatMoney} triggerAutoSave={triggerAutoSave} />}
            {activeModule === 'contracts' && <Contracts contracts={contracts} setContracts={setContracts} clients={clients} formatMoney={formatMoney} triggerAutoSave={triggerAutoSave} />}
            {activeModule === 'finance' && <Finance invoices={invoices} setInvoices={setInvoices} clients={clients} formatMoney={formatMoney} triggerAutoSave={triggerAutoSave} />}
            {activeModule === 'alerts' && <Alerts alerts={alerts} />}
            {activeModule === 'reports' && <Reports invoices={invoices} clients={clients} formatMoney={formatMoney} />}
            {activeModule === 'settings' && <SettingsModule />}
          </div>
        </div>
      </div>
    </>
  );
}

/* ============ LOGIN ============ */
function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const users = [
    { username: 'admin', password: 'avalon2026', name: 'Admin Avalon', initials: 'AA', role: 'Administrador' },
    { username: 'maria', password: 'maria2026', name: 'María Comercial', initials: 'MC', role: 'Comercial' },
    { username: 'juan', password: 'juan2026', name: 'Juan Finanzas', initials: 'JF', role: 'Finanzas' },
  ];

  const handleSubmit = () => {
    setError(''); setLoading(true);
    setTimeout(() => {
      const user = users.find(u => u.username === username && u.password === password);
      if (user) onLogin(user);
      else { setError('Usuario o contraseña incorrectos'); setLoading(false); }
    }, 500);
  };

  return (
    <>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Unbounded:wght@400;500;600;700;800&family=Poppins:wght@300;400;500;600;700&display=swap');`}</style>
      <div className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden" style={{ background: BRAND.black, fontFamily: BRAND.bodyFont }}>
        <div className="absolute inset-0 opacity-40" style={{
          background: `radial-gradient(circle at 20% 30%, ${BRAND.primary}50 0%, transparent 40%), radial-gradient(circle at 80% 70%, ${BRAND.orange}30 0%, transparent 40%)`
        }}></div>

        <div className="absolute top-8 right-8 w-20 h-20 rounded-full flex items-center justify-center" style={{ background: BRAND.green }}>
          <svg viewBox="0 0 100 100" className="w-full h-full absolute animate-spin" style={{ animationDuration: '20s' }}>
            <defs><path id="circle" d="M 50,50 m -35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" /></defs>
            <text fontSize="9" fontWeight="700" fill={BRAND.black} fontFamily={BRAND.titleFont}>
              <textPath href="#circle">REVOLUCIÓN ✱ DIGITAL ✱ REVOLUCIÓN ✱</textPath>
            </text>
          </svg>
          <Rocket size={18} style={{ color: BRAND.black }} />
        </div>

        <div className="relative w-full max-w-md z-10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-3 mb-4">
              <AvalonLogo size={56} white />
              <div className="text-left">
                <div className="font-bold text-white text-2xl" style={{ fontFamily: BRAND.titleFont }}>AVALON</div>
                <div className="text-[11px] text-white/60 tracking-[0.25em] uppercase -mt-0.5">World Agency</div>
              </div>
            </div>
            <p className="text-white/60 text-sm" style={{ fontFamily: BRAND.titleFont, fontWeight: 300 }}>
              No hay nada más fuerte <span style={{ color: BRAND.primary, fontWeight: 600 }}>que una idea.</span>
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            <div className="flex items-center gap-2 mb-1">
              <BrandAsterisk size={10} />
              <h1 className="text-xl font-semibold" style={{ color: BRAND.black, fontFamily: BRAND.titleFont }}>Iniciar sesión</h1>
            </div>
            <p className="text-sm text-slate-500 mb-6">Ingresá tus credenciales</p>

            <div className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-slate-700 mb-1.5 block">Usuario</label>
                <div className="relative">
                  <User size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
                    placeholder="admin" className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none transition" />
                </div>
              </div>
              <div>
                <label className="text-xs font-semibold text-slate-700 mb-1.5 block">Contraseña</label>
                <div className="relative">
                  <Lock size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
                    placeholder="••••••••" className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none" />
                </div>
              </div>

              {error && <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-xs text-rose-700">{error}</div>}

              <button onClick={handleSubmit} disabled={loading || !username || !password}
                className="w-full py-3 disabled:opacity-50 text-white rounded-xl font-semibold text-sm shadow-lg"
                style={{ background: `linear-gradient(135deg, ${BRAND.primary}, ${BRAND.primaryDark})`, fontFamily: BRAND.titleFont }}>
                {loading ? 'Ingresando...' : 'Ingresar →'}
              </button>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-100">
              <div className="text-xs text-slate-500 font-semibold mb-2 flex items-center gap-1.5"><BrandAsterisk size={8} /> Demo:</div>
              <div className="space-y-1 text-xs text-slate-600">
                <div><span className="font-mono bg-slate-100 px-1.5 py-0.5 rounded">admin</span> / <span className="font-mono bg-slate-100 px-1.5 py-0.5 rounded">avalon2026</span></div>
                <div><span className="font-mono bg-slate-100 px-1.5 py-0.5 rounded">maria</span> / <span className="font-mono bg-slate-100 px-1.5 py-0.5 rounded">maria2026</span></div>
                <div><span className="font-mono bg-slate-100 px-1.5 py-0.5 rounded">juan</span> / <span className="font-mono bg-slate-100 px-1.5 py-0.5 rounded">juan2026</span></div>
              </div>
            </div>
          </div>

          <p className="text-center text-xs text-white/40 mt-6">© 2026 Avalon World Agency</p>
        </div>
      </div>
    </>
  );
}

/* ============ DASHBOARD ============ */
function Dashboard({ clients, invoices, alerts, formatMoney, setActiveModule }) {
  const activos = clients.filter(c => c.estado === 'Activo').length;
  const facARS = invoices.filter(i => i.fecha.startsWith('2026-04') && i.moneda === 'ARS').reduce((s, i) => s + i.total, 0);
  const facUSD = invoices.filter(i => i.fecha.startsWith('2026-04') && i.moneda === 'USD').reduce((s, i) => s + i.total, 0);
  const porCobrar = invoices.filter(i => i.estado === 'Pendiente' || i.estado === 'Vencida').reduce((s, i) => s + i.total, 0);

  const kpis = [
    { label: 'Clientes activos', value: activos, icon: Users, color: BRAND.primary },
    { label: 'Facturación abril ARS', value: formatMoney(facARS), icon: TrendingUp, color: BRAND.green, colorText: BRAND.black },
    { label: 'Facturación abril USD', value: formatMoney(facUSD, 'USD'), icon: DollarSign, color: BRAND.orange },
    { label: 'Por cobrar', value: formatMoney(porCobrar), icon: AlertCircle, color: '#ef4444' },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-4 gap-4">
        {kpis.map((k, idx) => {
          const Icon = k.icon;
          return (
            <div key={idx} className="bg-white rounded-2xl p-5 border" style={{ borderColor: '#e5e5e5' }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style={{ background: k.color }}>
                <Icon size={20} style={{ color: k.colorText || '#fff' }} />
              </div>
              <div className="text-xl font-bold" style={{ color: BRAND.black, fontFamily: BRAND.titleFont }}>{k.value}</div>
              <div className="text-sm text-slate-500 mt-1">{k.label}</div>
            </div>
          );
        })}
      </div>

      <div className="bg-white rounded-2xl p-5 border" style={{ borderColor: '#e5e5e5' }}>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <AlertCircle size={18} style={{ color: BRAND.orange }} />
            <h2 className="font-semibold" style={{ color: BRAND.black, fontFamily: BRAND.titleFont }}>Alertas prioritarias</h2>
          </div>
          <button onClick={() => setActiveModule('alerts')} className="text-xs font-medium flex items-center gap-1" style={{ color: BRAND.primary }}>Ver todas <ChevronRight size={14} /></button>
        </div>
        <div className="space-y-2">
          {alerts.slice(0, 4).map(a => (
            <div key={a.id} className="flex items-center gap-3 p-3 rounded-xl border" style={{
              background: a.prioridad === 'alta' ? '#fef2f2' : '#fff7ed',
              borderColor: a.prioridad === 'alta' ? '#fecaca' : '#fed7aa'
            }}>
              <div className="w-2 h-2 rounded-full" style={{ background: a.prioridad === 'alta' ? '#ef4444' : BRAND.orange }}></div>
              <div className="flex-1 text-sm text-slate-700">{a.mensaje}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white rounded-2xl p-5 border" style={{ borderColor: '#e5e5e5' }}>
          <h2 className="font-semibold mb-4" style={{ color: BRAND.black, fontFamily: BRAND.titleFont }}>Estado de clientes</h2>
          <div className="space-y-3">
            {[
              { label: 'Activos', count: clients.filter(c => c.estado === 'Activo').length, color: BRAND.green, textColor: BRAND.black },
              { label: 'Bajas', count: clients.filter(c => c.estado === 'Baja').length, color: '#94a3b8', textColor: '#fff' },
            ].map((s, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-lg" style={{ background: '#f8fafc' }}>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm" style={{ background: s.color, color: s.textColor }}>{s.count}</div>
                  <span className="text-sm font-medium" style={{ color: BRAND.black }}>{s.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 border" style={{ borderColor: '#e5e5e5' }}>
          <h2 className="font-semibold mb-4" style={{ color: BRAND.black, fontFamily: BRAND.titleFont }}>Próximos vencimientos</h2>
          <div className="space-y-2">
            {invoices.filter(i => i.estado !== 'Cobrada').slice(0, 4).map(inv => (
              <div key={inv.id} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
                <div>
                  <div className="text-sm font-medium" style={{ color: BRAND.black }}>{inv.cliente}</div>
                  <div className="text-xs text-slate-500">{inv.numero} · {inv.fecha}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-semibold" style={{ color: BRAND.black }}>{formatMoney(inv.total, inv.moneda)}</div>
                  <span className="text-xs" style={{ color: inv.estado === 'Vencida' ? '#ef4444' : BRAND.orange }}>{inv.estado}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============ CLIENTES ============ */
function Clients({ clients, setClients, formatMoney, triggerAutoSave }) {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('todos');
  const [selected, setSelected] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [editClient, setEditClient] = useState(null);

  const filtered = clients.filter(c => {
    const matchSearch = c.nombre.toLowerCase().includes(search.toLowerCase()) || c.razonSocial.toLowerCase().includes(search.toLowerCase()) || c.contacto.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === 'todos' || c.estado === filter;
    return matchSearch && matchFilter;
  });

  const getServiciosText = (c) => {
    const arr = [];
    if (c.servicios.abono360?.activo) arr.push('Abono 360');
    if (c.servicios.proyecto?.activo) arr.push(`Proyecto: ${c.servicios.proyecto.tipo}`);
    if (c.servicios.publicidad?.activo) arr.push('Publicidad');
    return arr;
  };

  const getMonedaPrincipal = (c) => {
    if (c.servicios.abono360?.activo) return c.servicios.abono360.moneda;
    if (c.servicios.publicidad?.activo) return c.servicios.publicidad.moneda;
    if (c.servicios.proyecto?.activo) return c.servicios.proyecto.moneda;
    return 'ARS';
  };

  const handleSave = (newClient) => {
    if (editClient) {
      setClients(clients.map(c => c.id === editClient.id ? { ...newClient, id: editClient.id } : c));
    } else {
      setClients([...clients, { ...newClient, id: Math.max(...clients.map(c => c.id)) + 1 }]);
    }
    setShowForm(false);
    setEditClient(null);
    triggerAutoSave();
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <div className="flex-1 relative">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input type="text" placeholder="Buscar cliente o contacto..." value={search} onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-white border rounded-xl text-sm focus:outline-none" style={{ borderColor: '#e5e5e5' }} />
        </div>
        <select value={filter} onChange={(e) => setFilter(e.target.value)} className="px-4 py-2.5 bg-white border rounded-xl text-sm" style={{ borderColor: '#e5e5e5' }}>
          <option value="todos">Todos</option>
          <option value="Activo">Activos</option>
          <option value="Baja">Bajas</option>
        </select>
        <button onClick={() => { setEditClient(null); setShowForm(true); }} className="px-4 py-2.5 text-white rounded-xl text-sm font-semibold flex items-center gap-2 shadow-md"
          style={{ background: BRAND.primary, fontFamily: BRAND.titleFont }}>
          <Plus size={15} /> Nuevo cliente
        </button>
      </div>

      <div className="bg-white rounded-2xl border overflow-hidden" style={{ borderColor: '#e5e5e5' }}>
        <table className="w-full">
          <thead className="bg-slate-50 border-b" style={{ borderColor: '#e5e5e5' }}>
            <tr>
              <th className="text-left text-xs font-semibold text-slate-600 uppercase px-4 py-3">Nombre</th>
              <th className="text-left text-xs font-semibold text-slate-600 uppercase px-4 py-3">Contacto</th>
              <th className="text-left text-xs font-semibold text-slate-600 uppercase px-4 py-3">Servicio</th>
              <th className="text-center text-xs font-semibold text-slate-600 uppercase px-4 py-3">Estado</th>
              <th className="text-left text-xs font-semibold text-slate-600 uppercase px-4 py-3">Modalidad de pago</th>
              <th className="text-right text-xs font-semibold text-slate-600 uppercase px-4 py-3">Deuda</th>
              <th className="text-center text-xs font-semibold text-slate-600 uppercase px-4 py-3">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(c => {
              const moneda = getMonedaPrincipal(c);
              return (
                <tr key={c.id} className="border-b hover:bg-slate-50" style={{ borderColor: '#f1f5f9' }}>
                  <td className="px-4 py-3">
                    <div className="text-sm font-medium" style={{ color: BRAND.black }}>{c.nombre}</div>
                    <div className="text-xs text-slate-500">{c.razonSocial}</div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="text-sm" style={{ color: BRAND.black }}>{c.contacto}</div>
                    <div className="text-xs text-slate-500">{c.email}</div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex flex-wrap gap-1">
                      {getServiciosText(c).map((s, i) => (
                        <span key={i} className="text-xs px-2 py-0.5 rounded font-medium" style={{
                          background: s.startsWith('Abono') ? `${BRAND.primary}15` : s.startsWith('Proyecto') ? `${BRAND.green}25` : `${BRAND.orange}15`,
                          color: s.startsWith('Abono') ? BRAND.primary : s.startsWith('Proyecto') ? '#166534' : BRAND.orange
                        }}>{s}</span>
                      ))}
                    </div>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <span className="text-xs px-2 py-1 rounded-full font-medium" style={{
                      background: c.estado === 'Activo' ? '#dcfce7' : '#f1f5f9',
                      color: c.estado === 'Activo' ? '#166534' : '#475569'
                    }}>{c.estado}</span>
                  </td>
                  <td className="px-4 py-3 text-sm text-slate-600">{c.modalidadPago}</td>
                  <td className="px-4 py-3 text-sm text-right font-semibold" style={{ color: c.deuda > 0 ? '#ef4444' : '#94a3b8' }}>
                    {c.deuda > 0 ? formatMoney(c.deuda, moneda) : '-'}
                  </td>
                  <td className="px-4 py-3 text-center">
                    <div className="flex items-center justify-center gap-1">
                      <button onClick={() => setSelected(c)} className="p-1.5 hover:bg-slate-200 rounded text-slate-600" title="Ver"><Eye size={15} /></button>
                      <button onClick={() => { setEditClient(c); setShowForm(true); }} className="p-1.5 hover:bg-slate-200 rounded" style={{ color: BRAND.primary }} title="Editar"><Edit2 size={15} /></button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {selected && <ClientDetail client={selected} onClose={() => setSelected(null)} formatMoney={formatMoney} />}
      {showForm && <ClientForm onClose={() => { setShowForm(false); setEditClient(null); }} onSave={handleSave} editClient={editClient} />}
    </div>
  );
}

/* ============ CLIENT DETAIL ============ */
function ClientDetail({ client, onClose, formatMoney }) {
  const moneda = client.servicios.abono360?.moneda || client.servicios.publicidad?.moneda || client.servicios.proyecto?.moneda || 'ARS';
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-6 z-50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl w-full max-w-3xl max-h-[92vh] overflow-hidden flex flex-col">
        <div className="p-5 border-b flex items-center justify-between" style={{ borderColor: '#e5e5e5' }}>
          <div>
            <h2 className="text-lg font-semibold" style={{ color: BRAND.black, fontFamily: BRAND.titleFont }}>{client.nombre}</h2>
            <p className="text-sm text-slate-500">{client.razonSocial} · {client.cuit}</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-lg"><X size={20} /></button>
        </div>
        <div className="flex-1 overflow-auto p-5 space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <InfoBox label="Contacto" value={client.contacto} />
            <InfoBox label="Cargo" value={client.cargo} />
            <InfoBox label="Email" value={client.email} />
            <InfoBox label="WhatsApp" value={client.whatsapp} />
            <InfoBox label="Estado" value={client.estado} highlight={client.estado === 'Activo' ? BRAND.green : '#94a3b8'} />
            <InfoBox label="Modalidad de venta" value={client.modalidadVenta} />
            <InfoBox label="Modalidad de pago" value={client.modalidadPago} />
            <InfoBox label="Deuda actual" value={client.deuda > 0 ? formatMoney(client.deuda, moneda) : '-'} highlight={client.deuda > 0 ? '#ef4444' : null} />
          </div>

          <div>
            <h3 className="text-sm font-bold mb-2 flex items-center gap-2" style={{ color: BRAND.black, fontFamily: BRAND.titleFont }}>
              <BrandAsterisk size={10} /> Servicios contratados
            </h3>
            <div className="space-y-3">
              {client.servicios.abono360?.activo && (
                <div className="p-4 border-2 rounded-xl" style={{ borderColor: `${BRAND.primary}30`, background: `${BRAND.primary}05` }}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Megaphone size={16} style={{ color: BRAND.primary }} />
                      <div className="font-semibold" style={{ color: BRAND.black }}>Abono 360</div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold" style={{ color: BRAND.black }}>{formatMoney(client.servicios.abono360.monto, client.servicios.abono360.moneda)}</div>
                      <div className="text-xs text-slate-500">Etapa: {client.servicios.abono360.etapaActual}</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 mt-3">
                    <div className="bg-white p-2 rounded-lg text-center border" style={{ borderColor: `${BRAND.primary}20` }}>
                      <div className="text-[10px] text-slate-500">Pre-onboarding</div>
                      <div className="text-sm font-bold" style={{ color: BRAND.black }}>{formatMoney(client.servicios.abono360.preOnb, client.servicios.abono360.moneda)}</div>
                    </div>
                    <div className="bg-white p-2 rounded-lg text-center border" style={{ borderColor: `${BRAND.primary}20` }}>
                      <div className="text-[10px] text-slate-500">Onboarding</div>
                      <div className="text-sm font-bold" style={{ color: BRAND.black }}>{formatMoney(client.servicios.abono360.onb, client.servicios.abono360.moneda)}</div>
                    </div>
                    <div className="bg-white p-2 rounded-lg text-center border" style={{ borderColor: `${BRAND.primary}20` }}>
                      <div className="text-[10px] text-slate-500">Abono full</div>
                      <div className="text-sm font-bold" style={{ color: BRAND.black }}>{formatMoney(client.servicios.abono360.abonoFull, client.servicios.abono360.moneda)}</div>
                    </div>
                  </div>
                </div>
              )}

              {client.servicios.proyecto?.activo && (
                <div className="p-4 border-2 rounded-xl flex items-center justify-between" style={{ borderColor: `${BRAND.green}60`, background: `${BRAND.green}10` }}>
                  <div className="flex items-center gap-2">
                    <Zap size={16} style={{ color: BRAND.black }} />
                    <div>
                      <div className="font-semibold" style={{ color: BRAND.black }}>Proyecto: {client.servicios.proyecto.tipo}</div>
                    </div>
                  </div>
                  <div className="font-bold" style={{ color: BRAND.black }}>{formatMoney(client.servicios.proyecto.monto, client.servicios.proyecto.moneda)}</div>
                </div>
              )}

              {client.servicios.publicidad?.activo && (
                <div className="p-4 border-2 rounded-xl" style={{ borderColor: `${BRAND.orange}50`, background: `${BRAND.orange}08` }}>
                  <div className="flex items-center gap-2 mb-3">
                    <Target size={16} style={{ color: BRAND.orange }} />
                    <div className="font-semibold" style={{ color: BRAND.black }}>Publicidad · Compra de medios ({client.servicios.publicidad.moneda})</div>
                  </div>
                  <div className="space-y-2">
                    {client.servicios.publicidad.plataformas.map((p, i) => {
                      const fee = (p.inversion * p.fee) / 100;
                      return (
                        <div key={i} className="flex items-center gap-3 p-2 bg-white rounded-lg border" style={{ borderColor: `${BRAND.orange}30` }}>
                          <div className="px-2 py-1 text-white text-xs font-bold rounded w-20 text-center" style={{ background: getPlataformaColor(p.plataforma) }}>{p.plataforma}</div>
                          <div className="flex-1 grid grid-cols-3 gap-2 text-xs">
                            <div><span className="text-slate-500">Fee:</span> <strong>{p.fee}%</strong></div>
                            <div><span className="text-slate-500">Inversión:</span> <strong>{formatMoney(p.inversion, client.servicios.publicidad.moneda)}</strong></div>
                            <div><span className="text-slate-500">Fee $:</span> <strong style={{ color: BRAND.orange }}>{formatMoney(fee, client.servicios.publicidad.moneda)}</strong></div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>

          {client.ajusteIPC?.activo && (
            <div className="p-3 rounded-xl border" style={{ background: `${BRAND.primary}08`, borderColor: `${BRAND.primary}30` }}>
              <div className="flex items-center gap-2 mb-1">
                <TrendingUp size={14} style={{ color: BRAND.primary }} />
                <div className="text-sm font-semibold" style={{ color: BRAND.primary }}>Ajuste IPC {client.ajusteIPC.frecuencia}</div>
              </div>
              <div className="text-xs text-slate-600">Último ajuste: <strong>{client.ajusteIPC.ultimoAjuste}</strong> · Próximo: <strong>{client.ajusteIPC.proximoAjuste}</strong></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function InfoBox({ label, value, highlight }) {
  return (
    <div className="p-3 bg-slate-50 rounded-lg">
      <div className="text-[10px] text-slate-500 uppercase font-semibold tracking-wider">{label}</div>
      <div className="text-sm font-medium mt-0.5" style={{ color: highlight || BRAND.black }}>{value}</div>
    </div>
  );
}

function getPlataformaColor(p) {
  const colors = { Meta: '#1877F2', Google: '#34A853', TikTok: '#FF0050', LinkedIn: '#0A66C2', YouTube: '#FF0000', 'X (Twitter)': '#000', Otros: '#64748b' };
  return colors[p] || '#64748b';
}

/* ============ CLIENT FORM (3 SECCIONES) ============ */
function ClientForm({ onClose, onSave, editClient }) {
  const [section, setSection] = useState(1);
  const initial = editClient || {
    nombre: '', razonSocial: '', cuit: '', contacto: '', cargo: '', email: '', whatsapp: '',
    estado: 'Activo', modalidadVenta: 'Factura', modalidadPago: 'Transferencia',
    deuda: 0, saldo: 0,
    servicios: {
      abono360: { activo: false, monto: '', moneda: 'ARS', etapaActual: 'Abono full', preOnb: '', onb: '', abonoFull: '' },
      proyecto: { activo: false, tipo: 'Sitio Web', monto: '', moneda: 'ARS' },
      publicidad: { activo: false, plataformas: [], moneda: 'ARS' },
    },
    ajusteIPC: { activo: false, frecuencia: 'trimestral', ultimoAjuste: '-', proximoAjuste: '-' }
  };
  const [data, setData] = useState(initial);

  const update = (path, value) => {
    const newData = { ...data };
    const keys = path.split('.');
    let curr = newData;
    for (let i = 0; i < keys.length - 1; i++) {
      curr[keys[i]] = { ...curr[keys[i]] };
      curr = curr[keys[i]];
    }
    curr[keys[keys.length - 1]] = value;
    setData(newData);
  };

  const togglePlataforma = (plat) => {
    const existing = data.servicios.publicidad.plataformas.find(p => p.plataforma === plat);
    if (existing) {
      update('servicios.publicidad.plataformas', data.servicios.publicidad.plataformas.filter(p => p.plataforma !== plat));
    } else {
      update('servicios.publicidad.plataformas', [...data.servicios.publicidad.plataformas, { plataforma: plat, fee: '', inversion: '' }]);
    }
  };

  const updatePlataforma = (plat, field, value) => {
    update('servicios.publicidad.plataformas', data.servicios.publicidad.plataformas.map(p => p.plataforma === plat ? { ...p, [field]: value } : p));
  };

  const handleSave = () => {
    const cleaned = { ...data };
    if (cleaned.servicios.abono360.activo) {
      cleaned.servicios.abono360.monto = Number(cleaned.servicios.abono360.monto) || 0;
      cleaned.servicios.abono360.preOnb = Number(cleaned.servicios.abono360.preOnb) || 0;
      cleaned.servicios.abono360.onb = Number(cleaned.servicios.abono360.onb) || 0;
      cleaned.servicios.abono360.abonoFull = Number(cleaned.servicios.abono360.abonoFull) || 0;
    }
    if (cleaned.servicios.proyecto.activo) {
      cleaned.servicios.proyecto.monto = Number(cleaned.servicios.proyecto.monto) || 0;
    }
    if (cleaned.servicios.publicidad.activo) {
      cleaned.servicios.publicidad.plataformas = cleaned.servicios.publicidad.plataformas.map(p => ({ ...p, fee: Number(p.fee) || 0, inversion: Number(p.inversion) || 0 }));
    }
    cleaned.deuda = Number(cleaned.deuda) || 0;
    onSave(cleaned);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-6 z-50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl w-full max-w-3xl max-h-[92vh] overflow-hidden flex flex-col">
        <div className="p-5 border-b" style={{ borderColor: '#e5e5e5' }}>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-semibold" style={{ color: BRAND.black, fontFamily: BRAND.titleFont }}>
              {editClient ? 'Editar cliente' : 'Nuevo cliente'}
            </h2>
            <button onClick={onClose}><X size={20} /></button>
          </div>
          <div className="flex gap-1">
            {[
              { num: 1, label: 'Datos generales' },
              { num: 2, label: 'Servicios' },
              { num: 3, label: 'Ajuste IPC' }
            ].map(s => (
              <button key={s.num} onClick={() => setSection(s.num)} className="flex-1 py-2 px-3 rounded-lg text-xs font-semibold transition" style={{
                background: section === s.num ? BRAND.primary : '#f1f5f9',
                color: section === s.num ? '#fff' : '#64748b'
              }}>
                {s.num}. {s.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex-1 overflow-auto p-5">
          {section === 1 && (
            <div className="space-y-4">
              <div className="text-xs text-slate-500 mb-2 flex items-center gap-1.5"><BrandAsterisk size={8} /> Datos del cliente</div>
              <div className="grid grid-cols-2 gap-3">
                <FormInput label="Nombre del cliente *" value={data.nombre} onChange={(v) => update('nombre', v)} placeholder="Ej: TechNova" />
                <FormInput label="Razón social *" value={data.razonSocial} onChange={(v) => update('razonSocial', v)} placeholder="Ej: TechNova SA" />
                <FormInput label="CUIT" value={data.cuit} onChange={(v) => update('cuit', v)} placeholder="30-12345678-9" />
                <FormInput label="Contacto / Representante" value={data.contacto} onChange={(v) => update('contacto', v)} />
                <FormInput label="Cargo" value={data.cargo} onChange={(v) => update('cargo', v)} />
                <FormInput label="Email" value={data.email} onChange={(v) => update('email', v)} type="email" />
                <FormInput label="WhatsApp" value={data.whatsapp} onChange={(v) => update('whatsapp', v)} placeholder="+54 9 11..." />
                <div>
                  <label className="text-xs text-slate-500 font-medium">Estado</label>
                  <div className="grid grid-cols-2 gap-1 mt-1 p-1 bg-slate-100 rounded-lg">
                    {['Activo', 'Baja'].map(e => (
                      <button key={e} onClick={() => update('estado', e)} className="py-1.5 rounded-md text-xs font-bold transition" style={{
                        background: data.estado === e ? '#fff' : 'transparent',
                        color: data.estado === e ? (e === 'Activo' ? '#166534' : '#64748b') : '#64748b'
                      }}>{e}</button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="text-xs text-slate-500 font-medium">Modalidad de venta</label>
                  <select value={data.modalidadVenta} onChange={(e) => update('modalidadVenta', e.target.value)} className="w-full mt-1 px-3 py-2 bg-slate-50 border rounded-lg text-sm" style={{ borderColor: '#e5e5e5' }}>
                    {MODALIDADES_VENTA.map(m => <option key={m}>{m}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-xs text-slate-500 font-medium">Modalidad de pago</label>
                  <select value={data.modalidadPago} onChange={(e) => update('modalidadPago', e.target.value)} className="w-full mt-1 px-3 py-2 bg-slate-50 border rounded-lg text-sm" style={{ borderColor: '#e5e5e5' }}>
                    {MODALIDADES_PAGO.map(m => <option key={m}>{m}</option>)}
                  </select>
                </div>
              </div>
            </div>
          )}

          {section === 2 && (
            <div className="space-y-4">
              <div className="text-xs text-slate-500 mb-2 flex items-center gap-1.5"><BrandAsterisk size={8} /> Activá los servicios contratados</div>

              {/* ABONO 360 */}
              <div className="p-4 rounded-xl border-2 transition" style={{
                borderColor: data.servicios.abono360.activo ? BRAND.primary : '#e5e5e5',
                background: data.servicios.abono360.activo ? `${BRAND.primary}05` : '#fff'
              }}>
                <label className="flex items-center gap-3 cursor-pointer mb-3">
                  <input type="checkbox" checked={data.servicios.abono360.activo} onChange={(e) => update('servicios.abono360.activo', e.target.checked)} className="w-5 h-5" style={{ accentColor: BRAND.primary }} />
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center text-white" style={{ background: BRAND.primary }}><Megaphone size={18} /></div>
                  <div>
                    <div className="font-bold" style={{ color: BRAND.black, fontFamily: BRAND.titleFont }}>Abono 360</div>
                    <div className="text-xs text-slate-500">Pre-onboarding · Onboarding · Abono full</div>
                  </div>
                </label>

                {data.servicios.abono360.activo && (
                  <div className="space-y-3 mt-3 pl-12">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="text-xs text-slate-700 font-semibold">Monto abono full</label>
                        <input type="number" value={data.servicios.abono360.monto} onChange={(e) => update('servicios.abono360.monto', e.target.value)}
                          placeholder={data.servicios.abono360.moneda === 'USD' ? 'US$' : '$'}
                          className="w-full mt-1 px-3 py-2 bg-white border rounded-lg text-sm" style={{ borderColor: '#e5e5e5' }} />
                      </div>
                      <div>
                        <label className="text-xs text-slate-700 font-semibold">Moneda</label>
                        <MoneySelector value={data.servicios.abono360.moneda} onChange={(v) => update('servicios.abono360.moneda', v)} />
                      </div>
                    </div>
                    <div className="p-3 rounded-lg border" style={{ background: `${BRAND.primary}08`, borderColor: `${BRAND.primary}20` }}>
                      <div className="text-xs font-semibold mb-2 flex items-center gap-1" style={{ color: BRAND.primary }}>
                        <Rocket size={11} /> Plan de etapas (primeros 3 meses)
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <div>
                          <label className="text-[10px] text-slate-500 font-semibold">Mes 1 · Pre-onboarding</label>
                          <input type="number" value={data.servicios.abono360.preOnb} onChange={(e) => update('servicios.abono360.preOnb', e.target.value)} className="w-full mt-0.5 px-2 py-1.5 bg-white border rounded text-sm" style={{ borderColor: '#e5e5e5' }} />
                        </div>
                        <div>
                          <label className="text-[10px] text-slate-500 font-semibold">Mes 2 · Onboarding</label>
                          <input type="number" value={data.servicios.abono360.onb} onChange={(e) => update('servicios.abono360.onb', e.target.value)} className="w-full mt-0.5 px-2 py-1.5 bg-white border rounded text-sm" style={{ borderColor: '#e5e5e5' }} />
                        </div>
                        <div>
                          <label className="text-[10px] text-slate-500 font-semibold">Mes 3+ · Abono full</label>
                          <input type="number" value={data.servicios.abono360.abonoFull} onChange={(e) => update('servicios.abono360.abonoFull', e.target.value)} className="w-full mt-0.5 px-2 py-1.5 bg-white border rounded text-sm" style={{ borderColor: '#e5e5e5' }} />
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="text-xs text-slate-700 font-semibold">Etapa actual del cliente</label>
                      <select value={data.servicios.abono360.etapaActual} onChange={(e) => update('servicios.abono360.etapaActual', e.target.value)} className="w-full mt-1 px-3 py-2 bg-white border rounded-lg text-sm" style={{ borderColor: '#e5e5e5' }}>
                        <option>Pre-onboarding</option><option>Onboarding</option><option>Abono full</option>
                      </select>
                    </div>
                  </div>
                )}
              </div>

              {/* PROYECTO */}
              <div className="p-4 rounded-xl border-2 transition" style={{
                borderColor: data.servicios.proyecto.activo ? BRAND.green : '#e5e5e5',
                background: data.servicios.proyecto.activo ? `${BRAND.green}10` : '#fff'
              }}>
                <label className="flex items-center gap-3 cursor-pointer mb-3">
                  <input type="checkbox" checked={data.servicios.proyecto.activo} onChange={(e) => update('servicios.proyecto.activo', e.target.checked)} className="w-5 h-5" style={{ accentColor: BRAND.green }} />
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: BRAND.green, color: BRAND.black }}><Zap size={18} /></div>
                  <div>
                    <div className="font-bold" style={{ color: BRAND.black, fontFamily: BRAND.titleFont }}>Proyecto</div>
                    <div className="text-xs text-slate-500">Sitio Web, Landing, Logo, Branding, App, ADN, etc.</div>
                  </div>
                </label>

                {data.servicios.proyecto.activo && (
                  <div className="grid grid-cols-3 gap-3 pl-12">
                    <div>
                      <label className="text-xs text-slate-700 font-semibold">Tipo de proyecto</label>
                      <select value={data.servicios.proyecto.tipo} onChange={(e) => update('servicios.proyecto.tipo', e.target.value)} className="w-full mt-1 px-3 py-2 bg-white border rounded-lg text-sm" style={{ borderColor: '#e5e5e5' }}>
                        {TIPOS_PROYECTO.map(t => <option key={t}>{t}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="text-xs text-slate-700 font-semibold">Monto total</label>
                      <input type="number" value={data.servicios.proyecto.monto} onChange={(e) => update('servicios.proyecto.monto', e.target.value)}
                        placeholder={data.servicios.proyecto.moneda === 'USD' ? 'US$' : '$'}
                        className="w-full mt-1 px-3 py-2 bg-white border rounded-lg text-sm" style={{ borderColor: '#e5e5e5' }} />
                    </div>
                    <div>
                      <label className="text-xs text-slate-700 font-semibold">Moneda</label>
                      <MoneySelector value={data.servicios.proyecto.moneda} onChange={(v) => update('servicios.proyecto.moneda', v)} />
                    </div>
                  </div>
                )}
              </div>

              {/* PUBLICIDAD */}
              <div className="p-4 rounded-xl border-2 transition" style={{
                borderColor: data.servicios.publicidad.activo ? BRAND.orange : '#e5e5e5',
                background: data.servicios.publicidad.activo ? `${BRAND.orange}08` : '#fff'
              }}>
                <label className="flex items-center gap-3 cursor-pointer mb-3">
                  <input type="checkbox" checked={data.servicios.publicidad.activo} onChange={(e) => update('servicios.publicidad.activo', e.target.checked)} className="w-5 h-5" style={{ accentColor: BRAND.orange }} />
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center text-white" style={{ background: BRAND.orange }}><Target size={18} /></div>
                  <div>
                    <div className="font-bold" style={{ color: BRAND.black, fontFamily: BRAND.titleFont }}>Publicidad</div>
                    <div className="text-xs text-slate-500">Compra de medios con fee % por plataforma</div>
                  </div>
                </label>

                {data.servicios.publicidad.activo && (
                  <div className="space-y-3 pl-12">
                    <div>
                      <label className="text-xs text-slate-700 font-semibold">Moneda</label>
                      <div className="w-32"><MoneySelector value={data.servicios.publicidad.moneda} onChange={(v) => update('servicios.publicidad.moneda', v)} /></div>
                    </div>
                    <div>
                      <label className="text-xs text-slate-700 font-semibold mb-2 block">Plataformas</label>
                      <div className="flex flex-wrap gap-2">
                        {PLATAFORMAS.map(p => {
                          const active = data.servicios.publicidad.plataformas.some(x => x.plataforma === p);
                          return (
                            <button key={p} onClick={() => togglePlataforma(p)} className="px-3 py-1.5 text-xs rounded-full border-2 transition" style={{
                              background: active ? BRAND.orange : '#fff',
                              borderColor: active ? BRAND.orange : '#e5e5e5',
                              color: active ? '#fff' : '#64748b',
                              fontWeight: active ? 600 : 400
                            }}>
                              {active && <Check size={11} className="inline mr-0.5" />}
                              {p}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {data.servicios.publicidad.plataformas.length > 0 && (
                      <div className="space-y-2">
                        <label className="text-xs text-slate-700 font-semibold">Configurá fee % e inversión por plataforma</label>
                        {data.servicios.publicidad.plataformas.map((p, i) => {
                          const fee = (Number(p.inversion) || 0) * (Number(p.fee) || 0) / 100;
                          return (
                            <div key={i} className="p-3 bg-white rounded-lg border flex items-center gap-3" style={{ borderColor: `${BRAND.orange}30` }}>
                              <div className="px-2 py-1 text-white text-xs font-bold rounded w-20 text-center" style={{ background: getPlataformaColor(p.plataforma) }}>{p.plataforma}</div>
                              <div className="flex-1 grid grid-cols-3 gap-2">
                                <div>
                                  <label className="text-[10px] text-slate-500 font-semibold">Fee %</label>
                                  <input type="number" placeholder="15" value={p.fee} onChange={(e) => updatePlataforma(p.plataforma, 'fee', e.target.value)} className="w-full mt-0.5 px-2 py-1.5 bg-slate-50 border rounded text-sm" style={{ borderColor: '#e5e5e5' }} />
                                </div>
                                <div>
                                  <label className="text-[10px] text-slate-500 font-semibold">Inversión</label>
                                  <input type="number" placeholder="1000000" value={p.inversion} onChange={(e) => updatePlataforma(p.plataforma, 'inversion', e.target.value)} className="w-full mt-0.5 px-2 py-1.5 bg-slate-50 border rounded text-sm" style={{ borderColor: '#e5e5e5' }} />
                                </div>
                                <div>
                                  <label className="text-[10px] text-slate-500 font-semibold">Fee $</label>
                                  <div className="mt-0.5 px-2 py-1.5 rounded text-sm font-bold" style={{ background: `${BRAND.orange}15`, color: BRAND.orange }}>
                                    {(data.servicios.publicidad.moneda === 'USD' ? 'US$' : '$') + fee.toLocaleString('es-AR')}
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}

          {section === 3 && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl border" style={{ background: `${BRAND.primary}08`, borderColor: `${BRAND.primary}30` }}>
                <h3 className="font-semibold mb-1" style={{ color: BRAND.primary, fontFamily: BRAND.titleFont }}>Ajuste por IPC</h3>
                <p className="text-xs" style={{ color: BRAND.primary }}>Configurá la frecuencia con la que se actualizan los honorarios. Los importes se podrán modificar manualmente cuando corresponda.</p>
              </div>

              <label className="flex items-start gap-3 p-4 rounded-xl border cursor-pointer" style={{ borderColor: data.ajusteIPC.activo ? BRAND.primary : '#e5e5e5', background: data.ajusteIPC.activo ? `${BRAND.primary}05` : '#fff' }}>
                <input type="checkbox" checked={data.ajusteIPC.activo} onChange={(e) => update('ajusteIPC.activo', e.target.checked)} className="w-5 h-5 mt-0.5" style={{ accentColor: BRAND.primary }} />
                <div>
                  <div className="font-semibold" style={{ color: BRAND.black }}>Aplicar ajuste por IPC</div>
                  <div className="text-xs text-slate-500">Habilita el ajuste periódico de los honorarios según el IPC oficial</div>
                </div>
              </label>

              {data.ajusteIPC.activo && (
                <>
                  <div>
                    <label className="text-xs text-slate-700 font-semibold mb-2 block">Frecuencia de ajuste</label>
                    <div className="grid grid-cols-2 gap-2">
                      {['bimestral', 'trimestral'].map(f => (
                        <button key={f} onClick={() => update('ajusteIPC.frecuencia', f)} className="p-3 rounded-xl border-2 text-left capitalize transition" style={{
                          background: data.ajusteIPC.frecuencia === f ? `${BRAND.primary}10` : '#fff',
                          borderColor: data.ajusteIPC.frecuencia === f ? BRAND.primary : '#e5e5e5'
                        }}>
                          <div className="text-sm font-semibold" style={{ color: BRAND.black }}>{f}</div>
                          <div className="text-xs text-slate-500">{f === 'bimestral' ? 'Cada 2 meses' : 'Cada 3 meses'}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <FormInput label="Último ajuste" value={data.ajusteIPC.ultimoAjuste} onChange={(v) => update('ajusteIPC.ultimoAjuste', v)} type="date" />
                    <FormInput label="Próximo ajuste" value={data.ajusteIPC.proximoAjuste} onChange={(v) => update('ajusteIPC.proximoAjuste', v)} type="date" />
                  </div>
                  <div className="p-3 rounded-xl text-xs flex items-start gap-2" style={{ background: `${BRAND.green}15`, color: BRAND.black }}>
                    <Sparkles size={12} className="mt-0.5" />
                    <span>Cuando llegue la fecha de ajuste, el sistema te avisará para que actualices los importes según el IPC del período.</span>
                  </div>
                </>
              )}
            </div>
          )}
        </div>

        <div className="p-4 border-t flex justify-between" style={{ borderColor: '#e5e5e5' }}>
          <button onClick={onClose} className="px-4 py-2 border rounded-lg text-sm" style={{ borderColor: '#e5e5e5' }}>Cancelar</button>
          <div className="flex gap-2">
            {section > 1 && <button onClick={() => setSection(section - 1)} className="px-4 py-2 border rounded-lg text-sm" style={{ borderColor: '#e5e5e5' }}>← Atrás</button>}
            {section < 3 ? (
              <button onClick={() => setSection(section + 1)} className="px-4 py-2 text-white rounded-lg text-sm font-semibold" style={{ background: BRAND.primary, fontFamily: BRAND.titleFont }}>Siguiente →</button>
            ) : (
              <button onClick={handleSave} disabled={!data.nombre || !data.razonSocial} className="px-4 py-2 text-white rounded-lg text-sm font-semibold disabled:opacity-50" style={{ background: BRAND.primary, fontFamily: BRAND.titleFont }}>
                {editClient ? 'Guardar cambios' : 'Crear cliente'}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function FormInput({ label, value, onChange, type = 'text', placeholder = '' }) {
  return (
    <div>
      <label className="text-xs text-slate-500 font-medium">{label}</label>
      <input type={type} placeholder={placeholder} value={value} onChange={(e) => onChange(e.target.value)}
        className="w-full mt-1 px-3 py-2 bg-slate-50 border rounded-lg text-sm focus:outline-none" style={{ borderColor: '#e5e5e5' }} />
    </div>
  );
}

function MoneySelector({ value, onChange }) {
  return (
    <div className="grid grid-cols-2 gap-1 mt-1 p-1 bg-slate-100 rounded-lg">
      {['ARS', 'USD'].map(m => (
        <button key={m} onClick={() => onChange(m)} className="py-1.5 rounded-md text-xs font-bold transition-all" style={{
          background: value === m ? '#fff' : 'transparent',
          color: value === m ? BRAND.primary : '#64748b',
          boxShadow: value === m ? '0 1px 3px rgba(0,0,0,0.1)' : 'none'
        }}>{m}</button>
      ))}
    </div>
  );
}

/* ============ FINANZAS ============ */
function Finance({ invoices, setInvoices, clients, formatMoney, triggerAutoSave }) {
  const [search, setSearch] = useState('');
  const [filterMes, setFilterMes] = useState('todos');
  const [filterTipo, setFilterTipo] = useState('todos');
  const [filterEstado, setFilterEstado] = useState('todos');
  const [filterModalidad, setFilterModalidad] = useState('todos');
  const [showForm, setShowForm] = useState(null); // 'Factura' | 'Orden Interna' | null

  const filtered = invoices.filter(i => {
    return (search === '' || i.numero.toLowerCase().includes(search.toLowerCase()) || i.cliente.toLowerCase().includes(search.toLowerCase())) &&
      (filterMes === 'todos' || i.fecha.startsWith(filterMes)) &&
      (filterTipo === 'todos' || i.tipoDoc === filterTipo) &&
      (filterEstado === 'todos' || i.estado === filterEstado) &&
      (filterModalidad === 'todos' || i.modalidadPago === filterModalidad);
  });

  const totalCobradoARS = invoices.filter(i => i.estado === 'Cobrada' && i.moneda === 'ARS').reduce((s, i) => s + i.total, 0);
  const totalPendienteARS = invoices.filter(i => i.estado === 'Pendiente' && i.moneda === 'ARS').reduce((s, i) => s + i.total, 0);
  const totalVencidoARS = invoices.filter(i => i.estado === 'Vencida' && i.moneda === 'ARS').reduce((s, i) => s + i.total, 0);
  const totalCobradoUSD = invoices.filter(i => i.estado === 'Cobrada' && i.moneda === 'USD').reduce((s, i) => s + i.total, 0);
  const totalPendienteUSD = invoices.filter(i => i.estado === 'Pendiente' && i.moneda === 'USD').reduce((s, i) => s + i.total, 0);
  const totalVencidoUSD = invoices.filter(i => i.estado === 'Vencida' && i.moneda === 'USD').reduce((s, i) => s + i.total, 0);

  const handleAdd = (inv) => {
    setInvoices([...invoices, { ...inv, id: Math.max(...invoices.map(i => i.id)) + 1 }]);
    setShowForm(null);
    triggerAutoSave();
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-4">
        <div className="rounded-2xl p-4 border" style={{ background: '#dcfce7', borderColor: '#bbf7d0' }}>
          <div className="text-xs font-medium" style={{ color: '#166534' }}>Cobrado</div>
          <div className="text-xl font-bold" style={{ color: '#166534', fontFamily: BRAND.titleFont }}>{formatMoney(totalCobradoARS)}</div>
          <div className="text-sm font-semibold" style={{ color: '#166534', opacity: 0.7 }}>+ {formatMoney(totalCobradoUSD, 'USD')}</div>
        </div>
        <div className="rounded-2xl p-4 border" style={{ background: `${BRAND.orange}15`, borderColor: `${BRAND.orange}40` }}>
          <div className="text-xs font-medium" style={{ color: BRAND.orange }}>Pendiente</div>
          <div className="text-xl font-bold" style={{ color: BRAND.orange, fontFamily: BRAND.titleFont }}>{formatMoney(totalPendienteARS)}</div>
          <div className="text-sm font-semibold" style={{ color: BRAND.orange, opacity: 0.7 }}>+ {formatMoney(totalPendienteUSD, 'USD')}</div>
        </div>
        <div className="rounded-2xl p-4 border" style={{ background: '#fee2e2', borderColor: '#fecaca' }}>
          <div className="text-xs font-medium" style={{ color: '#b91c1c' }}>Vencido</div>
          <div className="text-xl font-bold" style={{ color: '#b91c1c', fontFamily: BRAND.titleFont }}>{formatMoney(totalVencidoARS)}</div>
          <div className="text-sm font-semibold" style={{ color: '#b91c1c', opacity: 0.7 }}>+ {formatMoney(totalVencidoUSD, 'USD')}</div>
        </div>
      </div>

      <div className="bg-white rounded-2xl border p-3 flex flex-wrap gap-2 items-center" style={{ borderColor: '#e5e5e5' }}>
        <div className="flex-1 min-w-[200px] relative">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input type="text" placeholder="Buscar N° o cliente..." value={search} onChange={(e) => setSearch(e.target.value)} className="w-full pl-9 pr-3 py-2 bg-slate-50 border rounded-lg text-sm" style={{ borderColor: '#e5e5e5' }} />
        </div>
        <select value={filterMes} onChange={(e) => setFilterMes(e.target.value)} className="px-3 py-2 bg-slate-50 border rounded-lg text-sm" style={{ borderColor: '#e5e5e5' }}>
          <option value="todos">Todos los meses</option><option value="2026-04">Abril 2026</option><option value="2026-03">Marzo 2026</option><option value="2026-02">Febrero 2026</option>
        </select>
        <select value={filterTipo} onChange={(e) => setFilterTipo(e.target.value)} className="px-3 py-2 bg-slate-50 border rounded-lg text-sm" style={{ borderColor: '#e5e5e5' }}>
          <option value="todos">Todo tipo</option><option>Factura</option><option>Orden Interna</option>
        </select>
        <select value={filterModalidad} onChange={(e) => setFilterModalidad(e.target.value)} className="px-3 py-2 bg-slate-50 border rounded-lg text-sm" style={{ borderColor: '#e5e5e5' }}>
          <option value="todos">Toda modalidad</option>
          {MODALIDADES_PAGO.map(m => <option key={m}>{m}</option>)}
        </select>
        <select value={filterEstado} onChange={(e) => setFilterEstado(e.target.value)} className="px-3 py-2 bg-slate-50 border rounded-lg text-sm" style={{ borderColor: '#e5e5e5' }}>
          <option value="todos">Todos los estados</option><option>Cobrada</option><option>Pendiente</option><option>Vencida</option>
        </select>
      </div>

      <div className="flex gap-2">
        <button onClick={() => setShowForm('Factura')} className="px-4 py-2 text-white rounded-xl text-sm font-semibold flex items-center gap-2 shadow-md" style={{ background: BRAND.primary, fontFamily: BRAND.titleFont }}>
          <Plus size={15} /> Cargar Factura
        </button>
        <button onClick={() => setShowForm('Orden Interna')} className="px-4 py-2 text-white rounded-xl text-sm font-semibold flex items-center gap-2 shadow-md" style={{ background: BRAND.orange, fontFamily: BRAND.titleFont }}>
          <Plus size={15} /> Cargar Orden de Compra
        </button>
      </div>

      <div className="bg-white rounded-2xl border overflow-hidden" style={{ borderColor: '#e5e5e5' }}>
        <table className="w-full">
          <thead className="bg-slate-50 border-b" style={{ borderColor: '#e5e5e5' }}>
            <tr>
              <th className="text-left text-xs font-semibold text-slate-600 uppercase px-4 py-3">N° / Tipo</th>
              <th className="text-left text-xs font-semibold text-slate-600 uppercase px-4 py-3">Cliente</th>
              <th className="text-left text-xs font-semibold text-slate-600 uppercase px-4 py-3">Detalles</th>
              <th className="text-left text-xs font-semibold text-slate-600 uppercase px-4 py-3">Modalidad</th>
              <th className="text-left text-xs font-semibold text-slate-600 uppercase px-4 py-3">Fecha</th>
              <th className="text-right text-xs font-semibold text-slate-600 uppercase px-4 py-3">Neto</th>
              <th className="text-right text-xs font-semibold text-slate-600 uppercase px-4 py-3">Total c/IVA</th>
              <th className="text-left text-xs font-semibold text-slate-600 uppercase px-4 py-3">Estado</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(i => (
              <tr key={i.id} className="border-b hover:bg-slate-50" style={{ borderColor: '#f1f5f9' }}>
                <td className="px-4 py-3">
                  <div className="text-sm font-mono text-slate-700">{i.numero}</div>
                  <span className="text-[10px] px-1.5 py-0.5 rounded font-semibold" style={{
                    background: i.tipoDoc === 'Factura' ? `${BRAND.primary}15` : `${BRAND.orange}15`,
                    color: i.tipoDoc === 'Factura' ? BRAND.primary : BRAND.orange
                  }}>{i.tipoDoc}</span>
                </td>
                <td className="px-4 py-3 text-sm font-medium" style={{ color: BRAND.black }}>{i.cliente}</td>
                <td className="px-4 py-3">
                  <div className="space-y-1">
                    {i.detalles.slice(0, 2).map((d, idx) => (
                      <div key={idx} className="text-xs flex items-center gap-1.5">
                        <span className="px-1.5 py-0.5 rounded text-[9px] font-bold" style={{
                          background: d.tipo === 'Abono 360' ? `${BRAND.primary}20` : d.tipo === 'Proyecto' ? `${BRAND.green}30` : `${BRAND.orange}20`,
                          color: d.tipo === 'Abono 360' ? BRAND.primary : d.tipo === 'Proyecto' ? '#166534' : BRAND.orange
                        }}>{d.tipo === 'Abono 360' ? 'A360' : d.tipo === 'Compra de Medios' ? 'PUB' : 'PROY'}</span>
                        <span className="text-slate-600 truncate">{d.concepto}</span>
                      </div>
                    ))}
                    {i.detalles.length > 2 && <div className="text-xs text-slate-400">+ {i.detalles.length - 2} más</div>}
                  </div>
                </td>
                <td className="px-4 py-3 text-sm text-slate-600">{i.modalidadPago}</td>
                <td className="px-4 py-3 text-sm text-slate-500">{i.fecha}</td>
                <td className="px-4 py-3 text-sm text-right text-slate-700">{formatMoney(i.neto, i.moneda)}</td>
                <td className="px-4 py-3 text-sm text-right font-bold" style={{ color: BRAND.black }}>
                  {formatMoney(i.total, i.moneda)}
                  <span className="ml-1 text-[10px] px-1 py-0.5 rounded font-mono" style={{
                    background: i.moneda === 'USD' ? '#dcfce7' : `${BRAND.primary}10`,
                    color: i.moneda === 'USD' ? '#166534' : BRAND.primary
                  }}>{i.moneda}</span>
                </td>
                <td className="px-4 py-3">
                  <span className="text-xs px-2 py-1 rounded-full font-medium" style={{
                    background: i.estado === 'Cobrada' ? '#dcfce7' : i.estado === 'Pendiente' ? `${BRAND.orange}15` : '#fee2e2',
                    color: i.estado === 'Cobrada' ? '#166534' : i.estado === 'Pendiente' ? BRAND.orange : '#b91c1c'
                  }}>{i.estado}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filtered.length === 0 && <div className="p-8 text-center text-sm text-slate-500">No hay resultados</div>}
      </div>

      {showForm && <InvoiceForm tipo={showForm} clients={clients} onClose={() => setShowForm(null)} onSave={handleAdd} formatMoney={formatMoney} />}
    </div>
  );
}

/* ============ INVOICE FORM (FACTURA / ORDEN INTERNA) ============ */
function InvoiceForm({ tipo, clients, onClose, onSave, formatMoney }) {
  const [data, setData] = useState({
    tipoDoc: tipo,
    numero: tipo === 'Factura' ? `FC-A-${String(Math.floor(Math.random() * 9000) + 1000).padStart(7, '0')}` : `OI-2026-${String(Math.floor(Math.random() * 900) + 100)}`,
    clienteId: '',
    fecha: '2026-04-17',
    moneda: 'ARS',
    modalidadPago: 'Transferencia',
    estado: 'Pendiente',
    detalles: [],
    aplicaIVA: true,
  });

  const cliente = clients.find(c => c.id === Number(data.clienteId));

  const handleClienteChange = (id) => {
    const cli = clients.find(c => c.id === Number(id));
    if (cli) {
      const moneda = cli.servicios.abono360?.moneda || cli.servicios.publicidad?.moneda || cli.servicios.proyecto?.moneda || 'ARS';
      setData({ ...data, clienteId: id, moneda, modalidadPago: cli.modalidadPago });
    }
  };

  const addDetalle = (tipo) => {
    let newDet = { tipo, concepto: '', monto: 0 };
    if (tipo === 'Abono 360' && cliente?.servicios.abono360?.activo) {
      const etapa = cliente.servicios.abono360.etapaActual;
      const monto = etapa === 'Pre-onboarding' ? cliente.servicios.abono360.preOnb : etapa === 'Onboarding' ? cliente.servicios.abono360.onb : cliente.servicios.abono360.abonoFull;
      newDet = { tipo: 'Abono 360', concepto: `Abono ${etapa}`, monto };
    } else if (tipo === 'Proyecto' && cliente?.servicios.proyecto?.activo) {
      newDet = { tipo: 'Proyecto', concepto: cliente.servicios.proyecto.tipo, monto: cliente.servicios.proyecto.monto };
    } else if (tipo === 'Compra de Medios') {
      newDet = { tipo: 'Compra de Medios', concepto: '', plataforma: 'Meta', inversion: 0, fee: 15, monto: 0 };
    }
    setData({ ...data, detalles: [...data.detalles, newDet] });
  };

  const updateDetalle = (idx, field, value) => {
    const newDets = [...data.detalles];
    newDets[idx] = { ...newDets[idx], [field]: value };
    if (newDets[idx].tipo === 'Compra de Medios' && (field === 'inversion' || field === 'fee')) {
      newDets[idx].monto = (Number(newDets[idx].inversion) || 0) * (Number(newDets[idx].fee) || 0) / 100;
      newDets[idx].concepto = `Fee ${newDets[idx].plataforma}`;
    }
    if (field === 'plataforma') {
      newDets[idx].concepto = `Fee ${value}`;
    }
    setData({ ...data, detalles: newDets });
  };

  const removeDetalle = (idx) => setData({ ...data, detalles: data.detalles.filter((_, i) => i !== idx) });

  const neto = data.detalles.reduce((s, d) => s + (Number(d.monto) || 0), 0);
  const iva = data.aplicaIVA ? neto * 0.21 : 0;
  const total = neto + iva;

  const handleSave = () => {
    if (!data.clienteId || data.detalles.length === 0) return;
    onSave({
      ...data,
      cliente: cliente.razonSocial,
      neto,
      iva,
      total,
      detalles: data.detalles.map(d => ({ ...d, monto: Number(d.monto) || 0, inversion: Number(d.inversion) || 0, fee: Number(d.fee) || 0 }))
    });
  };

  const tipoColor = tipo === 'Factura' ? BRAND.primary : BRAND.orange;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-6 z-50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl w-full max-w-3xl max-h-[92vh] overflow-hidden flex flex-col">
        <div className="p-5 border-b flex items-center justify-between" style={{ borderColor: '#e5e5e5' }}>
          <div>
            <h2 className="text-lg font-semibold flex items-center gap-2" style={{ color: BRAND.black, fontFamily: BRAND.titleFont }}>
              <FileText size={18} style={{ color: tipoColor }} />
              Cargar {tipo}
            </h2>
            <p className="text-xs text-slate-500">Podés agregar varios servicios. Distinguen Abono 360, Proyecto y Compra de Medios.</p>
          </div>
          <button onClick={onClose}><X size={20} /></button>
        </div>

        <div className="flex-1 overflow-auto p-5 space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs text-slate-500 font-medium">N° de {tipo.toLowerCase()}</label>
              <input value={data.numero} onChange={(e) => setData({ ...data, numero: e.target.value })} className="w-full mt-1 px-3 py-2 bg-slate-50 border rounded-lg text-sm font-mono" style={{ borderColor: '#e5e5e5' }} />
            </div>
            <div>
              <label className="text-xs text-slate-500 font-medium">Fecha de {tipo === 'Factura' ? 'la factura' : 'la orden'}</label>
              <input type="date" value={data.fecha} onChange={(e) => setData({ ...data, fecha: e.target.value })} className="w-full mt-1 px-3 py-2 bg-slate-50 border rounded-lg text-sm" style={{ borderColor: '#e5e5e5' }} />
            </div>
            <div className="col-span-2">
              <label className="text-xs text-slate-500 font-medium">Cliente *</label>
              <select value={data.clienteId} onChange={(e) => handleClienteChange(e.target.value)} className="w-full mt-1 px-3 py-2 bg-slate-50 border rounded-lg text-sm" style={{ borderColor: '#e5e5e5' }}>
                <option value="">Seleccionar cliente...</option>
                {clients.filter(c => c.estado === 'Activo').map(c => <option key={c.id} value={c.id}>{c.nombre} - {c.razonSocial}</option>)}
              </select>
            </div>
            <div>
              <label className="text-xs text-slate-500 font-medium">Modalidad de pago</label>
              <select value={data.modalidadPago} onChange={(e) => setData({ ...data, modalidadPago: e.target.value })} className="w-full mt-1 px-3 py-2 bg-slate-50 border rounded-lg text-sm" style={{ borderColor: '#e5e5e5' }}>
                {MODALIDADES_PAGO.map(m => <option key={m}>{m}</option>)}
              </select>
            </div>
            <div>
              <label className="text-xs text-slate-500 font-medium">Moneda</label>
              <MoneySelector value={data.moneda} onChange={(v) => setData({ ...data, moneda: v })} />
            </div>
          </div>

          {cliente && (
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-bold" style={{ color: BRAND.black, fontFamily: BRAND.titleFont }}>Servicios incluidos</label>
                <div className="flex gap-1">
                  <button onClick={() => addDetalle('Abono 360')} className="px-2 py-1 text-xs rounded-lg font-semibold flex items-center gap-1" style={{ background: `${BRAND.primary}15`, color: BRAND.primary }}>
                    <Plus size={11} /> Abono 360
                  </button>
                  <button onClick={() => addDetalle('Proyecto')} className="px-2 py-1 text-xs rounded-lg font-semibold flex items-center gap-1" style={{ background: `${BRAND.green}25`, color: '#166534' }}>
                    <Plus size={11} /> Proyecto
                  </button>
                  <button onClick={() => addDetalle('Compra de Medios')} className="px-2 py-1 text-xs rounded-lg font-semibold flex items-center gap-1" style={{ background: `${BRAND.orange}15`, color: BRAND.orange }}>
                    <Plus size={11} /> Compra de Medios
                  </button>
                </div>
              </div>

              {data.detalles.length === 0 && (
                <div className="p-4 text-center text-xs text-slate-500 bg-slate-50 rounded-xl border border-dashed" style={{ borderColor: '#cbd5e1' }}>
                  Agregá al menos un servicio usando los botones de arriba
                </div>
              )}

              <div className="space-y-2">
                {data.detalles.map((d, idx) => {
                  const color = d.tipo === 'Abono 360' ? BRAND.primary : d.tipo === 'Proyecto' ? BRAND.green : BRAND.orange;
                  const bg = d.tipo === 'Abono 360' ? `${BRAND.primary}05` : d.tipo === 'Proyecto' ? `${BRAND.green}10` : `${BRAND.orange}05`;
                  return (
                    <div key={idx} className="p-3 rounded-xl border-2" style={{ borderColor: `${color}40`, background: bg }}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold px-2 py-0.5 rounded" style={{ background: color, color: d.tipo === 'Proyecto' ? BRAND.black : '#fff' }}>
                          {d.tipo}
                        </span>
                        <button onClick={() => removeDetalle(idx)} className="p-1 hover:bg-red-100 rounded" title="Quitar"><Trash2 size={13} className="text-red-600" /></button>
                      </div>

                      {d.tipo === 'Compra de Medios' ? (
                        <div className="grid grid-cols-4 gap-2">
                          <div>
                            <label className="text-[10px] text-slate-600 font-semibold">Plataforma</label>
                            <select value={d.plataforma} onChange={(e) => updateDetalle(idx, 'plataforma', e.target.value)} className="w-full mt-0.5 px-2 py-1.5 bg-white border rounded text-sm" style={{ borderColor: '#e5e5e5' }}>
                              {PLATAFORMAS.map(p => <option key={p}>{p}</option>)}
                            </select>
                          </div>
                          <div>
                            <label className="text-[10px] text-slate-600 font-semibold">Monto a invertir</label>
                            <input type="number" value={d.inversion} onChange={(e) => updateDetalle(idx, 'inversion', e.target.value)} className="w-full mt-0.5 px-2 py-1.5 bg-white border rounded text-sm" style={{ borderColor: '#e5e5e5' }} />
                          </div>
                          <div>
                            <label className="text-[10px] text-slate-600 font-semibold">Fee %</label>
                            <input type="number" value={d.fee} onChange={(e) => updateDetalle(idx, 'fee', e.target.value)} className="w-full mt-0.5 px-2 py-1.5 bg-white border rounded text-sm" style={{ borderColor: '#e5e5e5' }} />
                          </div>
                          <div>
                            <label className="text-[10px] text-slate-600 font-semibold">Importe fee</label>
                            <div className="mt-0.5 px-2 py-1.5 rounded text-sm font-bold" style={{ background: BRAND.orange, color: '#fff' }}>
                              {formatMoney(d.monto, data.moneda)}
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="grid grid-cols-2 gap-2">
                          <div>
                            <label className="text-[10px] text-slate-600 font-semibold">Concepto</label>
                            <input value={d.concepto} onChange={(e) => updateDetalle(idx, 'concepto', e.target.value)} placeholder="Ej: Abono Abril" className="w-full mt-0.5 px-2 py-1.5 bg-white border rounded text-sm" style={{ borderColor: '#e5e5e5' }} />
                          </div>
                          <div>
                            <label className="text-[10px] text-slate-600 font-semibold">Monto neto</label>
                            <input type="number" value={d.monto} onChange={(e) => updateDetalle(idx, 'monto', Number(e.target.value))} className="w-full mt-0.5 px-2 py-1.5 bg-white border rounded text-sm" style={{ borderColor: '#e5e5e5' }} />
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {data.detalles.length > 0 && (
            <div className="p-4 rounded-xl border-2" style={{ background: `${tipoColor}05`, borderColor: tipoColor }}>
              <div className="flex items-center justify-between mb-2">
                <label className="flex items-center gap-2 text-sm">
                  <input type="checkbox" checked={data.aplicaIVA} onChange={(e) => setData({ ...data, aplicaIVA: e.target.checked })} className="w-4 h-4" style={{ accentColor: tipoColor }} />
                  <span className="font-medium" style={{ color: BRAND.black }}>Aplicar IVA (21%)</span>
                </label>
              </div>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between"><span className="text-slate-600">Importe neto</span><span className="font-semibold" style={{ color: BRAND.black }}>{formatMoney(neto, data.moneda)}</span></div>
                {data.aplicaIVA && <div className="flex justify-between"><span className="text-slate-600">IVA 21%</span><span className="font-semibold" style={{ color: BRAND.black }}>{formatMoney(iva, data.moneda)}</span></div>}
                <div className="pt-2 border-t flex justify-between text-base" style={{ borderColor: `${tipoColor}30` }}>
                  <span className="font-bold" style={{ color: BRAND.black }}>TOTAL</span>
                  <span className="text-xl font-bold" style={{ color: tipoColor, fontFamily: BRAND.titleFont }}>{formatMoney(total, data.moneda)}</span>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="p-4 border-t flex justify-end gap-2" style={{ borderColor: '#e5e5e5' }}>
          <button onClick={onClose} className="px-4 py-2 border rounded-lg text-sm" style={{ borderColor: '#e5e5e5' }}>Cancelar</button>
          <button onClick={handleSave} disabled={!data.clienteId || data.detalles.length === 0} className="px-4 py-2 text-white rounded-lg text-sm font-semibold disabled:opacity-50" style={{ background: tipoColor, fontFamily: BRAND.titleFont }}>
            Guardar {tipo}
          </button>
        </div>
      </div>
    </div>
  );
}

/* ============ CONTRATOS ============ */
function Contracts({ contracts, setContracts, clients, formatMoney, triggerAutoSave }) {
  const [showForm, setShowForm] = useState(false);
  const [showUpload, setShowUpload] = useState(null);
  const [showReminder, setShowReminder] = useState(null);

  const HOY = '2026-04-17';

  const isVencido = (c) => c.estado === 'Pendiente de firma' && c.fechaVencimiento < HOY;
  const diasRestantes = (c) => Math.round((new Date(c.fechaVencimiento) - new Date(HOY)) / (1000 * 60 * 60 * 24));

  const handleAdd = (newC) => {
    setContracts([...contracts, { ...newC, id: Math.max(...contracts.map(c => c.id)) + 1 }]);
    setShowForm(false);
    triggerAutoSave();
  };

  const handleUpload = (id, archivo) => {
    setContracts(contracts.map(c => c.id === id ? { ...c, estado: 'Firmado', archivoPDF: archivo, fechaFirma: HOY } : c));
    setShowUpload(null);
    triggerAutoSave();
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          <div className="px-4 py-2 bg-white border rounded-xl text-sm" style={{ borderColor: '#e5e5e5' }}><span className="text-slate-500">Total:</span> <span className="font-bold">{contracts.length}</span></div>
          <div className="px-4 py-2 rounded-xl text-sm" style={{ background: `${BRAND.primary}10`, color: BRAND.primary, border: `1px solid ${BRAND.primary}30` }}>
            <span>Enviados:</span> <span className="font-bold">{contracts.filter(c => c.estado === 'Enviado').length}</span>
          </div>
          <div className="px-4 py-2 rounded-xl text-sm" style={{ background: `${BRAND.orange}15`, color: BRAND.orange, border: `1px solid ${BRAND.orange}40` }}>
            <span>Pendientes firma:</span> <span className="font-bold">{contracts.filter(c => c.estado === 'Pendiente de firma' && !isVencido(c)).length}</span>
          </div>
          <div className="px-4 py-2 rounded-xl text-sm" style={{ background: '#fee2e2', color: '#b91c1c', border: '1px solid #fecaca' }}>
            <span>Vencidos:</span> <span className="font-bold">{contracts.filter(c => isVencido(c)).length}</span>
          </div>
        </div>
        <button onClick={() => setShowForm(true)} className="px-4 py-2 text-white rounded-xl text-sm font-semibold flex items-center gap-2 shadow-md" style={{ background: BRAND.primary, fontFamily: BRAND.titleFont }}>
          <Plus size={15} /> Nuevo contrato
        </button>
      </div>

      <div className="bg-white rounded-2xl border overflow-hidden" style={{ borderColor: '#e5e5e5' }}>
        <table className="w-full">
          <thead className="bg-slate-50 border-b" style={{ borderColor: '#e5e5e5' }}>
            <tr>
              <th className="text-left text-xs font-semibold text-slate-600 uppercase px-4 py-3">Cliente</th>
              <th className="text-left text-xs font-semibold text-slate-600 uppercase px-4 py-3">Tipo</th>
              <th className="text-left text-xs font-semibold text-slate-600 uppercase px-4 py-3">Fecha envío</th>
              <th className="text-left text-xs font-semibold text-slate-600 uppercase px-4 py-3">Vencimiento</th>
              <th className="text-right text-xs font-semibold text-slate-600 uppercase px-4 py-3">Monto</th>
              <th className="text-left text-xs font-semibold text-slate-600 uppercase px-4 py-3">Estado</th>
              <th className="text-center text-xs font-semibold text-slate-600 uppercase px-4 py-3">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {contracts.map(c => {
              const vencido = isVencido(c);
              const dias = diasRestantes(c);
              const estadoMostrar = vencido ? 'Vencido' : c.estado;
              return (
                <tr key={c.id} className="border-b hover:bg-slate-50" style={{ borderColor: '#f1f5f9' }}>
                  <td className="px-4 py-3 text-sm font-medium" style={{ color: BRAND.black }}>{c.cliente}</td>
                  <td className="px-4 py-3 text-sm text-slate-700">{c.tipo}</td>
                  <td className="px-4 py-3 text-sm text-slate-500">{c.fechaEnvio}</td>
                  <td className="px-4 py-3 text-sm">
                    {c.estado === 'Firmado' ? (
                      <span className="text-slate-500">Firmado el {c.fechaFirma}</span>
                    ) : (
                      <div className="flex flex-col">
                        <span style={{ color: vencido ? '#ef4444' : BRAND.black, fontWeight: vencido ? 700 : 500 }}>{c.fechaVencimiento}</span>
                        <span className="text-xs" style={{ color: vencido ? '#ef4444' : dias <= 3 ? BRAND.orange : '#94a3b8' }}>
                          {vencido ? `Vencido hace ${Math.abs(dias)}d` : dias === 0 ? 'Vence hoy' : `${dias}d restantes`}
                        </span>
                      </div>
                    )}
                  </td>
                  <td className="px-4 py-3 text-sm text-right font-semibold" style={{ color: BRAND.black }}>{formatMoney(c.monto, c.moneda)}</td>
                  <td className="px-4 py-3">
                    <span className="text-xs px-2 py-1 rounded-full font-medium inline-flex items-center gap-1" style={{
                      background: estadoMostrar === 'Firmado' ? '#dcfce7' : estadoMostrar === 'Enviado' ? `${BRAND.primary}15` : estadoMostrar === 'Vencido' ? '#fee2e2' : `${BRAND.orange}15`,
                      color: estadoMostrar === 'Firmado' ? '#166534' : estadoMostrar === 'Enviado' ? BRAND.primary : estadoMostrar === 'Vencido' ? '#b91c1c' : BRAND.orange
                    }}>
                      {estadoMostrar === 'Firmado' && <Check size={11} />}
                      {estadoMostrar === 'Enviado' && <Send size={11} />}
                      {estadoMostrar === 'Pendiente de firma' && <Clock size={11} />}
                      {estadoMostrar === 'Vencido' && <AlertCircle size={11} />}
                      {estadoMostrar}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <div className="flex items-center justify-center gap-1">
                      {c.estado !== 'Firmado' && (
                        <>
                          <button onClick={() => setShowUpload(c)} className="p-1.5 rounded hover:bg-slate-200" style={{ color: BRAND.primary }} title="Subir PDF firmado"><Upload size={14} /></button>
                          <button onClick={() => setShowReminder(c)} className="p-1.5 rounded hover:bg-slate-200" style={{ color: BRAND.orange }} title="Recordatorio"><Mail size={14} /></button>
                        </>
                      )}
                      {c.estado === 'Firmado' && c.archivoPDF && (
                        <button className="p-1.5 hover:bg-slate-200 rounded text-slate-600" title={`Descargar ${c.archivoPDF}`}><Download size={14} /></button>
                      )}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {showForm && <ContractForm clients={clients} onClose={() => setShowForm(false)} onSave={handleAdd} />}
      {showUpload && <ContractUpload contract={showUpload} onClose={() => setShowUpload(null)} onSave={(file) => handleUpload(showUpload.id, file)} />}
      {showReminder && <ContractReminder contract={showReminder} onClose={() => setShowReminder(null)} />}
    </div>
  );
}

function ContractForm({ clients, onClose, onSave }) {
  const [data, setData] = useState({
    clienteId: '', tipo: 'Contrato Marco', fechaEnvio: '2026-04-17', fechaVencimiento: '',
    estado: 'Enviado', monto: '', moneda: 'ARS', archivoPDF: null, fechaFirma: null
  });

  const handleSave = () => {
    const cli = clients.find(c => c.id === Number(data.clienteId));
    if (!cli || !data.fechaVencimiento) return;
    onSave({ ...data, cliente: cli.razonSocial, monto: Number(data.monto) || 0 });
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-6 z-50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl w-full max-w-xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold" style={{ color: BRAND.black, fontFamily: BRAND.titleFont }}>Nuevo contrato</h2>
          <button onClick={onClose}><X size={20} /></button>
        </div>
        <div className="space-y-3">
          <div>
            <label className="text-xs text-slate-500 font-medium">Cliente *</label>
            <select value={data.clienteId} onChange={(e) => setData({ ...data, clienteId: e.target.value })} className="w-full mt-1 px-3 py-2 bg-slate-50 border rounded-lg text-sm" style={{ borderColor: '#e5e5e5' }}>
              <option value="">Seleccionar cliente...</option>
              {clients.filter(c => c.estado === 'Activo').map(c => <option key={c.id} value={c.id}>{c.nombre} - {c.razonSocial}</option>)}
            </select>
          </div>
          <div>
            <label className="text-xs text-slate-500 font-medium">Tipo de documento</label>
            <select value={data.tipo} onChange={(e) => setData({ ...data, tipo: e.target.value })} className="w-full mt-1 px-3 py-2 bg-slate-50 border rounded-lg text-sm" style={{ borderColor: '#e5e5e5' }}>
              <option>Contrato Marco</option><option>Contrato Agencia 360</option><option>Contrato Compra Medios</option><option>OC Proyecto</option><option>Adenda</option>
            </select>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <FormInput label="Fecha de envío" value={data.fechaEnvio} onChange={(v) => setData({ ...data, fechaEnvio: v })} type="date" />
            <FormInput label="Fecha de vencimiento *" value={data.fechaVencimiento} onChange={(v) => setData({ ...data, fechaVencimiento: v })} type="date" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <FormInput label="Monto" value={data.monto} onChange={(v) => setData({ ...data, monto: v })} type="number" />
            <div>
              <label className="text-xs text-slate-500 font-medium">Moneda</label>
              <MoneySelector value={data.moneda} onChange={(v) => setData({ ...data, moneda: v })} />
            </div>
          </div>
          <div>
            <label className="text-xs text-slate-500 font-medium">Estado inicial</label>
            <div className="grid grid-cols-2 gap-1 mt-1 p-1 bg-slate-100 rounded-lg">
              {['Enviado', 'Pendiente de firma'].map(e => (
                <button key={e} onClick={() => setData({ ...data, estado: e })} className="py-1.5 rounded-md text-xs font-bold transition" style={{
                  background: data.estado === e ? '#fff' : 'transparent',
                  color: data.estado === e ? BRAND.primary : '#64748b'
                }}>{e}</button>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-end gap-2 mt-5">
          <button onClick={onClose} className="px-4 py-2 border rounded-lg text-sm" style={{ borderColor: '#e5e5e5' }}>Cancelar</button>
          <button onClick={handleSave} disabled={!data.clienteId || !data.fechaVencimiento} className="px-4 py-2 text-white rounded-lg text-sm font-semibold disabled:opacity-50" style={{ background: BRAND.primary, fontFamily: BRAND.titleFont }}>
            Guardar contrato
          </button>
        </div>
      </div>
    </div>
  );
}

function ContractUpload({ contract, onClose, onSave }) {
  const [fileName, setFileName] = useState('');

  const handleFile = (e) => {
    const file = e.target.files?.[0];
    if (file) setFileName(file.name);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-6 z-50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl w-full max-w-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold" style={{ color: BRAND.black, fontFamily: BRAND.titleFont }}>Subir contrato firmado</h2>
          <button onClick={onClose}><X size={20} /></button>
        </div>
        <div className="mb-4 p-3 rounded-xl text-sm" style={{ background: `${BRAND.primary}08`, color: BRAND.primary }}>
          <div className="font-semibold mb-0.5">{contract.cliente}</div>
          <div className="text-xs">{contract.tipo}</div>
        </div>
        <label className="block border-2 border-dashed rounded-2xl p-8 text-center cursor-pointer transition" style={{
          borderColor: fileName ? BRAND.green : '#cbd5e1',
          background: fileName ? `${BRAND.green}10` : '#f8fafc'
        }}>
          {!fileName ? (
            <>
              <Upload size={32} className="text-slate-400 mx-auto mb-2" />
              <div className="text-sm font-semibold" style={{ color: BRAND.black }}>Seleccionar archivo PDF</div>
              <div className="text-xs text-slate-500 mt-1">PDF (hasta 10MB)</div>
            </>
          ) : (
            <>
              <CheckCircle2 size={32} className="mx-auto mb-2" style={{ color: BRAND.green }} />
              <div className="text-sm font-semibold" style={{ color: BRAND.black }}>{fileName}</div>
            </>
          )}
          <input type="file" accept=".pdf" onChange={handleFile} className="hidden" />
        </label>
        <div className="flex justify-end gap-2 mt-4">
          <button onClick={onClose} className="px-4 py-2 border rounded-lg text-sm" style={{ borderColor: '#e5e5e5' }}>Cancelar</button>
          <button onClick={() => onSave(fileName)} disabled={!fileName} className="px-4 py-2 text-white rounded-lg text-sm font-semibold disabled:opacity-50 flex items-center gap-2" style={{ background: BRAND.primary }}>
            <Check size={14} /> Confirmar firma
          </button>
        </div>
      </div>
    </div>
  );
}

function ContractReminder({ contract, onClose }) {
  const [tab, setTab] = useState('email');
  const [copied, setCopied] = useState(false);

  const emailTemplate = `Hola,

Te escribo desde Avalon World Agency para recordarte que tenés pendiente la firma del ${contract.tipo} que te enviamos el ${contract.fechaEnvio}.

La fecha de vencimiento para la firma es el ${contract.fechaVencimiento}. Para poder continuar con la implementación de los servicios contratados, necesitamos recibir el contrato firmado lo antes posible.

Si necesitás alguna aclaración o tuviste algún inconveniente con el documento, no dudes en escribirnos.

¡Saludos!
Equipo Avalon World Agency
✱ Revolución Digital ✱`;

  const whatsappTemplate = `¡Hola! 👋

Te escribimos desde *Avalon World Agency* para recordarte que tenés pendiente la firma del ${contract.tipo}.

📅 Fecha de vencimiento: *${contract.fechaVencimiento}*

Necesitamos el contrato firmado para continuar con los servicios contratados. Cualquier consulta nos avisás.

¡Saludos!
✱ Avalon World Agency ✱`;

  const handleCopy = () => {
    const text = tab === 'email' ? emailTemplate : whatsappTemplate;
    navigator.clipboard?.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-6 z-50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[92vh] overflow-hidden flex flex-col">
        <div className="p-5 border-b" style={{ borderColor: '#e5e5e5' }}>
          <div className="flex items-center justify-between mb-3">
            <div>
              <h2 className="text-lg font-semibold" style={{ color: BRAND.black, fontFamily: BRAND.titleFont }}>Recordatorio de firma</h2>
              <p className="text-xs text-slate-500">{contract.cliente} · {contract.tipo}</p>
            </div>
            <button onClick={onClose}><X size={20} /></button>
          </div>
          <div className="flex gap-1 p-1 bg-slate-100 rounded-lg">
            {[
              { id: 'email', label: 'Por Email', icon: Mail },
              { id: 'whatsapp', label: 'Por WhatsApp', icon: MessageCircle }
            ].map(t => {
              const Icon = t.icon;
              return (
                <button key={t.id} onClick={() => setTab(t.id)} className="flex-1 py-2 rounded-md text-xs font-bold transition flex items-center justify-center gap-1.5" style={{
                  background: tab === t.id ? '#fff' : 'transparent',
                  color: tab === t.id ? BRAND.primary : '#64748b',
                }}>
                  <Icon size={13} /> {t.label}
                </button>
              );
            })}
          </div>
        </div>
        <div className="flex-1 overflow-auto p-5">
          <div className="p-3 rounded-xl text-xs flex items-start gap-2 mb-3" style={{ background: `${BRAND.primary}08`, color: BRAND.primary }}>
            <Sparkles size={12} className="mt-0.5" />
            <span><strong>Plantilla modelo</strong> · Copiala y pegala donde la necesites. Podés editarla antes de enviar.</span>
          </div>
          <div className="p-4 bg-slate-50 rounded-xl border whitespace-pre-wrap text-sm font-mono" style={{ borderColor: '#e5e5e5', color: BRAND.black }}>
            {tab === 'email' ? emailTemplate : whatsappTemplate}
          </div>
        </div>
        <div className="p-4 border-t flex justify-between items-center" style={{ borderColor: '#e5e5e5' }}>
          <div className="text-xs text-slate-500">
            {contract.cliente} · {tab === 'email' ? contract.email || 'Email no registrado' : contract.whatsapp || 'WhatsApp no registrado'}
          </div>
          <button onClick={handleCopy} className="px-4 py-2 text-white rounded-lg text-sm font-semibold flex items-center gap-2" style={{ background: copied ? BRAND.green : BRAND.primary, color: copied ? BRAND.black : '#fff' }}>
            {copied ? <><Check size={14} /> ¡Copiado!</> : <><Copy size={14} /> Copiar mensaje</>}
          </button>
        </div>
      </div>
    </div>
  );
}

/* ============ ALERTAS ============ */
function Alerts({ alerts }) {
  const [filter, setFilter] = useState('todas');
  const filtered = filter === 'todas' ? alerts : alerts.filter(a => a.tipo === filter);
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          {[{ id: 'todas', label: 'Todas' }, { id: 'pago', label: 'Pagos' }, { id: 'contrato', label: 'Contratos' }, { id: 'ipc', label: 'IPC' }, { id: 'etapa', label: 'Etapas' }].map(f => (
            <button key={f.id} onClick={() => setFilter(f.id)} className="px-3 py-1.5 rounded-lg text-sm transition" style={{
              background: filter === f.id ? BRAND.black : '#fff',
              color: filter === f.id ? '#fff' : '#475569',
              border: filter === f.id ? 'none' : '1px solid #e5e5e5'
            }}>{f.label}</button>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        {filtered.map(a => (
          <div key={a.id} className="flex items-center gap-3 p-4 rounded-2xl border" style={{
            background: a.prioridad === 'alta' ? '#fef2f2' : '#fff7ed',
            borderColor: a.prioridad === 'alta' ? '#fecaca' : '#fed7aa'
          }}>
            <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{
              background: a.tipo === 'pago' ? '#fee2e2' : a.tipo === 'contrato' ? `${BRAND.primary}15` : a.tipo === 'etapa' ? `${BRAND.orange}15` : `${BRAND.primary}15`,
              color: a.tipo === 'pago' ? '#b91c1c' : a.tipo === 'contrato' ? BRAND.primary : a.tipo === 'etapa' ? BRAND.orange : BRAND.primary
            }}>
              {a.tipo === 'pago' && <DollarSign size={18} />}
              {a.tipo === 'contrato' && <FileSignature size={18} />}
              {a.tipo === 'ipc' && <TrendingUp size={18} />}
              {a.tipo === 'etapa' && <Sparkles size={18} />}
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium" style={{ color: BRAND.black }}>{a.mensaje}</div>
              <div className="text-xs text-slate-500 mt-0.5">{a.fecha} · Prioridad {a.prioridad}</div>
            </div>
            <button className="px-3 py-1.5 text-white rounded-lg text-xs" style={{ background: BRAND.black }}>Resolver</button>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ============ REPORTES ============ */
function Reports({ invoices, clients, formatMoney }) {
  const evolucion = [280, 320, 295, 380, 425, 450, 480, 520, 590, 625, 680, 735];
  const facturacion = [
    { unidad: 'Abono 360', valor: 875000, color: BRAND.primary, pct: 59 },
    { unidad: 'Publicidad (fees)', valor: 320000, color: BRAND.orange, pct: 22 },
    { unidad: 'Proyectos', valor: 275000, color: BRAND.green, pct: 19 },
  ];

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-4 gap-4">
        {[
          { label: 'Tasa de cobro', value: '87%', color: BRAND.green },
          { label: 'Días de cobro promedio', value: '22d', color: BRAND.black },
          { label: 'MRR (ARS)', value: formatMoney(1195000), color: BRAND.primary },
          { label: 'Clientes activos', value: clients.filter(c => c.estado === 'Activo').length, color: BRAND.orange },
        ].map((k, i) => (
          <div key={i} className="bg-white rounded-2xl p-4 border" style={{ borderColor: '#e5e5e5' }}>
            <div className="text-xs text-slate-500 font-medium">{k.label}</div>
            <div className="text-2xl font-bold mt-1" style={{ color: k.color, fontFamily: BRAND.titleFont }}>{k.value}</div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-2xl p-5 border" style={{ borderColor: '#e5e5e5' }}>
        <h2 className="font-semibold mb-4" style={{ color: BRAND.black, fontFamily: BRAND.titleFont }}>Evolución de facturación</h2>
        <div className="flex items-end justify-between gap-2 h-40">
          {evolucion.map((v, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1">
              <div className="w-full rounded-t-md transition-all hover:opacity-80" style={{ height: `${(v / 735) * 100}%`, background: `linear-gradient(to top, ${BRAND.primary}, ${BRAND.primaryLight})` }}></div>
              <div className="text-xs text-slate-500">{['E','F','M','A','M','J','J','A','S','O','N','D'][i]}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-2xl p-5 border" style={{ borderColor: '#e5e5e5' }}>
        <h2 className="font-semibold mb-4" style={{ color: BRAND.black, fontFamily: BRAND.titleFont }}>Facturación por servicio</h2>
        <div className="space-y-3">
          {facturacion.map((u, i) => (
            <div key={i}>
              <div className="flex justify-between text-sm mb-1"><span>{u.unidad}</span><span className="font-semibold">{formatMoney(u.valor)} · {u.pct}%</span></div>
              <div className="h-2.5 bg-slate-100 rounded-full"><div className="h-full rounded-full" style={{ width: `${u.pct}%`, background: u.color }}></div></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ============ CONFIG ============ */
function SettingsModule() {
  return (
    <div className="bg-white rounded-2xl p-6 border space-y-5" style={{ borderColor: '#e5e5e5' }}>
      <div>
        <h2 className="text-lg font-bold flex items-center gap-2" style={{ color: BRAND.black, fontFamily: BRAND.titleFont }}>
          <BrandAsterisk size={12} /> Brandbook Avalon World Agency
        </h2>
        <p className="text-sm text-slate-600 mt-1">Aplicado en todo el sistema, comunicaciones y documentos.</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="p-5 border-2 border-dashed rounded-xl flex items-center justify-center bg-slate-50" style={{ borderColor: '#cbd5e1' }}>
          <div className="flex items-center gap-3">
            <AvalonLogo size={48} />
            <div>
              <div className="font-bold text-xl" style={{ color: BRAND.black, fontFamily: BRAND.titleFont }}>AVALON</div>
              <div className="text-[11px] text-slate-500 tracking-[0.25em] uppercase">World Agency</div>
            </div>
          </div>
        </div>
        <div className="p-4 rounded-xl border bg-slate-50" style={{ borderColor: '#e5e5e5' }}>
          <div className="text-sm" style={{ fontFamily: BRAND.titleFont, color: BRAND.black, fontWeight: 300 }}>
            No hay nada más fuerte<br /><span style={{ color: BRAND.primary, fontWeight: 600 }}>que una idea.</span>
          </div>
          <div className="text-[10px] text-slate-400 tracking-[0.3em] uppercase mt-2">✱ Revolución Digital ✱</div>
        </div>
      </div>

      <div>
        <label className="text-xs text-slate-500 font-medium mb-2 block">Paleta de colores oficial</label>
        <div className="grid grid-cols-4 gap-2">
          {[
            { hex: '#7d03ff', name: 'Violeta' },
            { hex: '#ff7939', name: 'Naranja' },
            { hex: '#00ff00', name: 'Verde' },
            { hex: '#0a0a0a', name: 'Negro' },
          ].map((c, i) => (
            <div key={i} className="p-3 border rounded-xl bg-slate-50 flex items-center gap-3" style={{ borderColor: '#e5e5e5' }}>
              <div className="w-12 h-12 rounded-lg" style={{ background: c.hex }}></div>
              <div>
                <div className="text-xs font-semibold" style={{ color: BRAND.black }}>{c.name}</div>
                <div className="text-[10px] font-mono text-slate-500">{c.hex}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 border rounded-xl bg-slate-50" style={{ borderColor: '#e5e5e5' }}>
          <label className="text-xs text-slate-500 font-medium">Tipografía títulos</label>
          <div className="text-2xl font-bold mt-1" style={{ color: BRAND.black, fontFamily: BRAND.titleFont }}>Unbounded</div>
        </div>
        <div className="p-4 border rounded-xl bg-slate-50" style={{ borderColor: '#e5e5e5' }}>
          <label className="text-xs text-slate-500 font-medium">Tipografía texto</label>
          <div className="text-2xl mt-1" style={{ color: BRAND.black, fontFamily: BRAND.bodyFont, fontWeight: 500 }}>Poppins</div>
        </div>
      </div>
    </div>
  );
} 