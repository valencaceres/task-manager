export default function Loading() {
    return (
      <div 
        className="flex flex-col items-center justify-center min-h-[200px] w-full"
        role="status"
        aria-label="Cargando..."
      >
        {/* Spinner principal */}
        <div className="relative w-16 h-16">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="w-16 h-16 rounded-full border-4 border-gray-700 border-t-pink-500 animate-spin"></div>
          </div>
          {/* Spinner secundario para efecto visual */}
          <div className="absolute top-1 left-1 w-14 h-14">
            <div className="w-14 h-14 rounded-full border-4 border-gray-700 border-t-red-500 animate-spin animate-delay-150"></div>
          </div>
        </div>
        
        {/* Texto de carga con efecto de puntos */}
        <div className="mt-4 text-gray-300 font-medium flex items-center">
          Cargando
          <span className="ml-1 inline-flex space-x-1">
            <span className="w-1 h-1 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
            <span className="w-1 h-1 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
            <span className="w-1 h-1 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
          </span>
        </div>
        
        {/* Texto solo para lectores de pantalla */}
        <span className="sr-only">Por favor espere mientras se carga el contenido</span>
      </div>
    );
  }
  
  