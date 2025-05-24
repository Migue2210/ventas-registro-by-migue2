
function ReporteVentas() {
  const ventas = [
    { vendedor: "Elvis", ticket: 12237, tour: "cajas", pax: "3A", efectivo: 75, transferencia: 0 },
    { vendedor: "Elvis", ticket: 12238, tour: "AA", pax: "3A", efectivo: 105, transferencia: 0 },
    { vendedor: "Elvis", ticket: 12239, tour: "AA", pax: "4A", efectivo: 135, transferencia: 0 },
    { vendedor: "Elvis", ticket: 12240, tour: "cajas", pax: "1A", efectivo: 0, transferencia: 25 },
    { vendedor: "Elvis", ticket: 12241, tour: "AA", pax: "2TE", efectivo: 60, transferencia: 0 },
    { vendedor: "Elvis", ticket: 12242, tour: "cajas", pax: "2A", efectivo: 0, transferencia: 50 },
    { vendedor: "Elvis", ticket: 12243, tour: "AA", pax: "1A 2C", efectivo: 95, transferencia: 0 },
    { vendedor: "Elvis", ticket: 12244, tour: "cajas full day", pax: "2A", efectivo: 110, transferencia: 0 },
    { vendedor: "Elvis", ticket: 12246, tour: "cajas", pax: "2A", efectivo: 0, transferencia: 50 },
    { vendedor: "Elvis", ticket: 12247, tour: "AA", pax: "2A", efectivo: 70, transferencia: 0 },
    { vendedor: "Elvis", ticket: 12249, tour: "cajas", pax: "2A", efectivo: 30, transferencia: 20 },
    { vendedor: "Elvis", ticket: 12250, tour: "AA", pax: "2A", efectivo: 70, transferencia: 0 },
    { vendedor: "Elvis", ticket: 4053, tour: "AA", pax: "1A 1TE", efectivo: 65, transferencia: 0 },
    { vendedor: "Elvis", ticket: 4056, tour: "+", pax: "2A", efectivo: 70, transferencia: 0 },
    { vendedor: "Elvis", ticket: 4057, tour: "cajas", pax: "3A", efectivo: 75, transferencia: 0 },
    { vendedor: "Elvis", ticket: 4058, tour: "cajas", pax: "2A 1N", efectivo: 0, transferencia: 70 }
  ];

  const totalEfectivo = ventas.reduce((sum, v) => sum + v.efectivo, 0);
  const totalTransferencia = ventas.reduce((sum, v) => sum + v.transferencia, 0);
  const total = totalEfectivo + totalTransferencia;
  const comision = total * 0.10;
  const entregar = total - comision;

  return (
    <div style={{ fontFamily: "sans-serif", padding: 20 }}>
      <h1>Reporte de Ventas</h1>
      <table border="1" cellPadding="5" style={{ width: "100%", marginBottom: 20 }}>
        <thead>
          <tr>
            <th>Vendedor</th><th>Ticket</th><th>Tour</th><th>#PAX</th>
            <th>Efectivo</th><th>Transferencia</th><th>Total</th>
          </tr>
        </thead>
        <tbody>
          {ventas.map((v, i) => (
            <tr key={i}>
              <td>{v.vendedor}</td><td>{v.ticket}</td><td>{v.tour}</td><td>{v.pax}</td>
              <td>{v.efectivo}</td><td>{v.transferencia}</td><td>{v.efectivo + v.transferencia}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Resumen</h3>
      <p><strong>Total Efectivo:</strong> ${totalEfectivo}</p>
      <p><strong>Total Transferencia:</strong> ${totalTransferencia}</p>
      <p><strong>Total:</strong> ${total}</p>
      <p><strong>Comisión (10%):</strong> ${comision}</p>
      <p><strong>Dinero a Entregar:</strong> ${entregar}</p>
    </div>
  );
}

ReactDOM.render(<ReporteVentas />, document.getElementById('root'));
