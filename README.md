# 💰 FinanzApp — Gestor de Finanzas Personales (Offline-First)

**FinanzApp** es una aplicación web interactiva diseñada para la gestión integral de finanzas personales, presupuestos, compromisos de pago y control de tarjetas de crédito. Desarrollada bajo un enfoque **Offline-First**, permite a los usuarios gestionar su economía de forma fluida y privada sin necesidad de registro previo.

---

## 🌟 Características Principales

* 💵 **Gestión de Efectivo y Saldos en Tiempo Real:** Cálculo automático del dinero disponible en pesos uruguayos (UYU) sumando ingresos y descontando gastos ejecutados.
* 💳 **Control de Compras en Cuotas y Tarjetas:**
* Validaciones dinámicas que verifican el cupo disponible antes de registrar una compra.
* Generación y distribución automática de cuotas mensuales en el calendario de compromisos.
* Liberación progresiva de crédito a medida que se abonan las cuotas.


* 🔀 **Soporte Multimoneda & Conversión Dinámica (USD / UYU):** Manejo de cuentas y facturas en dólares con conversión en tiempo real basada en un tipo de cambio configurable.
* 🔔 **Alertas e Historial de Vencimientos:** Indicadores visuales y notificaciones activas para facturas o compromisos próximos a vencer o vencidos.
* 🌐 **Internacionalización (i18n):** Soporte completo e instantáneo para español e inglés (`es` / `en`).
* 🎨 **Personalización Visual Completa:**
* Alternancia entre Modo Oscuro (Dark Mode) y Modo Claro (Light Mode).
* Selección de colores de acento dinámicos (Ámbar, Esmeralda, Azul, Violeta).


* 🔒 **Arquitectura Offline-First:** Persistencia completa en localStorage del navegador para un acceso instantáneo y 100% privado.

---

## 🛠️ Tecnologías Utilizadas

* **Frontend:** React.js, JavaScript (ES6+)
* **Estilos & UI:** Tailwind CSS, Lucide React (iconografía)
* **Persistencia:** Browser LocalStorage API
* **Despliegue recomendado:** Vercel / Netlify

---

## 🏛️ Arquitectura & Decisiones Técnicas

* **Estado Global y Reactividad:** Implementación de lazy initialization en hooks de React (useState) para la lectura optimizada de datos persistentes sin penalizar el renderizado inicial.
* **Diseño Híbrido Preparado para Escalabilidad:** La app está estructurada para operar en modo invitado (almacenamiento local) y cuenta con la base lista para conectarse con Supabase (Autenticación y base de datos PostgreSQL) en su versión 2.0.

---

## 🚀 Instalación y Configuración Local

1. Clonar el repositorio:
git clone [https://github.com/tu-usuario/finanzapp.git](https://www.google.com/search?q=https://github.com/tu-usuario/finanzapp.git)
cd finanzapp
2. Instalar dependencias:
npm install
3. Iniciar el servidor de desarrollo:
npm run dev

---

## 🛣️ Próximos Pasos (Roadmap v2.0)

* [ ] Autenticación de usuarios vía Supabase Auth (Login/Register).
* [ ] Sincronización automática de datos locales con la nube.
* [ ] Exportación de reportes de gastos e ingresos a formatos PDF / CSV.
* [ ] Gráficos interactivos de distribución de gastos mensuales.
