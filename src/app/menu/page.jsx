import 'tailwindcss/tailwind.css'

export const metadata = {
  title: 'Menú | Aranjuez',
  description: 'Menú | Aranjuez',
 };
 

function MenuPage() {
  return (
    <div className="menu-page p-8 bg-gray-100 lg:px-80">
      <h1 className="menu-title text-4xl font-bold mb-8 text-center">Menú de Bodegón</h1>
      <div className="menu-section mb-8">
        <h2 className="menu-section-title text-2xl font-semibold mb-4">Minutas</h2>
        <ul className="menu-list space-y-4">
          <li className="menu-item flex justify-between">
            <span className="menu-item-name text-lg">Milanesa con Papas Fritas</span>
            <span className="menu-item-price text-lg">$12.00</span>
          </li>
          <li className="menu-item flex justify-between">
            <span className="menu-item-name text-lg">Empanadas</span>
            <span className="menu-item-price text-lg">$2.50</span>
          </li>
          <li className="menu-item flex justify-between">
            <span className="menu-item-name text-lg">Tortilla de Papas</span>
            <span className="menu-item-price text-lg">$8.00</span>
          </li>
        </ul>
      </div>
      <div className="menu-section">
        <h2 className="menu-section-title text-2xl font-semibold mb-4">Bebidas</h2>
        <ul className="menu-list space-y-4">
          <li className="menu-item flex justify-between">
            <span className="menu-item-name text-lg">Vino Tinto</span>
            <span className="menu-item-price text-lg">$15.00</span>
          </li>
          <li className="menu-item flex justify-between">
            <span className="menu-item-name text-lg">Cerveza</span>
            <span className="menu-item-price text-lg">$5.00</span>
          </li>
          <li className="menu-item flex justify-between">
            <span className="menu-item-name text-lg">Agua Mineral</span>
            <span className="menu-item-price text-lg">$3.00</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default MenuPage